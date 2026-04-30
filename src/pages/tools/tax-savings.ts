const fmtD = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

// 2024 standard deductions
const STD_DEDUCTIONS: Record<string, number> = {
  single: 14600,
  married: 29200,
  hoh: 21900,
}

// 2024 401k limits
const K401_LIMIT = 23000
const K401_CATCHUP = 7500 // 50+

// 2024 HSA limits
const HSA_SELF = 4150
const HSA_FAMILY = 8300

// 2024 QCD limit
const QCD_LIMIT = 105000

export function renderTaxSavings(): string {
  return `
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Tax Savings Estimator</h1>
          <p>Estimate potential tax savings from strategies like QCDs, deduction bunching, HSA contributions, and maximising retirement account contributions.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Situation</h3>
            <div class="tool-field">
              <label for="ts-filing">Filing Status</label>
              <select id="ts-filing">
                <option value="single">Single</option>
                <option value="married" selected>Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div class="tool-field">
              <label for="ts-income">Gross Annual Income ($)</label>
              <input type="number" id="ts-income" value="180000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ts-age">Age <span class="tool-label-hint">Affects QCD eligibility and catch-up limits</span></label>
              <input type="number" id="ts-age" value="55" min="18" max="90" />
            </div>
            <div class="tool-field">
              <label for="ts-marginal">Marginal Tax Rate (%)</label>
              <input type="number" id="ts-marginal" value="24" min="0" max="50" />
            </div>
            <div class="tool-field">
              <label for="ts-charitable">Annual Charitable Giving ($)</label>
              <input type="number" id="ts-charitable" value="5000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ts-current-itemized">Other Itemised Deductions (mortgage interest, SALT, etc.) ($)</label>
              <input type="number" id="ts-current-itemized" value="18000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ts-401k-contrib">Current 401k Contribution (% of income)</label>
              <input type="number" id="ts-401k-contrib" value="10" min="0" max="100" />
            </div>
            <div class="tool-field">
              <label for="ts-hsa">HSA Coverage</label>
              <select id="ts-hsa">
                <option value="none">Not HSA-eligible</option>
                <option value="self">Self-only HDHP</option>
                <option value="family">Family HDHP</option>
              </select>
            </div>
            <div class="tool-field">
              <label for="ts-current-hsa">Current Annual HSA Contribution ($)</label>
              <input type="number" id="ts-current-hsa" value="0" min="0" />
            </div>
            <button class="tool-calculate-btn" id="ts-calc-btn">Estimate Savings</button>
          </div>
          <div class="tool-results" id="ts-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see estimated savings from each tax strategy.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Estimates are based on federal tax rules only and do not account for state taxes, AMT, phase-outs, or other factors that may affect your situation. This is for educational purposes only and does not constitute tax advice. Consult a qualified tax professional.</p>
    </div>
  `
}

export function initTaxSavings(): void {
  document.getElementById('ts-calc-btn')?.addEventListener('click', () => {
    const err = (msg: string) => {
      document.getElementById('ts-results')!.innerHTML = `<h3>Results</h3><p class="tool-error-msg">${msg}</p>`
    }
    const getNum = (id: string): number | null => {
      const v = (document.getElementById(id) as HTMLInputElement).value.trim()
      if (v === '') return null
      const n = Number(v); return isNaN(n) ? null : n
    }
    if (getNum('ts-income') === null || Number((document.getElementById('ts-income') as HTMLInputElement).value) <= 0)
      return err('Please enter your gross annual income.')
    if (getNum('ts-age') === null || Number((document.getElementById('ts-age') as HTMLInputElement).value) < 18)
      return err('Please enter a valid age.')
    if (getNum('ts-marginal') === null)          return err('Please enter your marginal tax rate.')
    if (getNum('ts-charitable') === null)        return err('Please enter your annual charitable giving (enter 0 if none).')
    if (getNum('ts-current-itemized') === null)  return err('Please enter your other itemised deductions (enter 0 if none).')
    if (getNum('ts-401k-contrib') === null)      return err('Please enter your current 401k contribution percentage (enter 0 if none).')
    if (getNum('ts-current-hsa') === null)       return err('Please enter your current HSA contribution (enter 0 if none).')
    const filing     = (document.getElementById('ts-filing') as HTMLSelectElement).value
    const income     = Number((document.getElementById('ts-income') as HTMLInputElement).value)
    const age        = Number((document.getElementById('ts-age') as HTMLInputElement).value)
    const marginal   = Number((document.getElementById('ts-marginal') as HTMLInputElement).value) / 100
    const charitable = Number((document.getElementById('ts-charitable') as HTMLInputElement).value)
    const otherItemized = Number((document.getElementById('ts-current-itemized') as HTMLInputElement).value)
    const k401Pct    = Number((document.getElementById('ts-401k-contrib') as HTMLInputElement).value) / 100
    const hsaCoverage = (document.getElementById('ts-hsa') as HTMLSelectElement).value
    const currentHSA = Number((document.getElementById('ts-current-hsa') as HTMLInputElement).value)

    const stdDeduction = STD_DEDUCTIONS[filing]
    const currentItemized = charitable + otherItemized
    const currentDeduction = Math.max(stdDeduction, currentItemized)

    const strategies: { name: string; saving: number; detail: string }[] = []

    // 1. Deduction bunching
    // If currently just under itemized threshold, bunching 2 years of charity into 1 can help
    const bunchedItemized = charitable * 2 + otherItemized
    const bunchedAvgDeduction = (bunchedItemized + stdDeduction) / 2
    const normalAvgDeduction = currentDeduction
    const bunchingBenefit = (bunchedAvgDeduction - normalAvgDeduction) * marginal
    if (bunchingBenefit > 50) {
      strategies.push({
        name: 'Deduction Bunching',
        saving: bunchingBenefit,
        detail: `Bundle ${fmtD(charitable * 2)} of charitable giving every other year vs. ${fmtD(charitable)}/yr — extra deduction of ~${fmtD(bunchingBenefit / marginal)}/yr on average`,
      })
    }

    // 2. QCD (age 70.5+) — give up to $105k directly from IRA, exclude from income
    if (age >= 70) {
      const qcdAmount = Math.min(charitable, QCD_LIMIT)
      const qcdSaving = qcdAmount * marginal
      if (qcdSaving > 0) {
        strategies.push({
          name: 'Qualified Charitable Distribution (QCD)',
          saving: qcdSaving,
          detail: `Donate ${fmtD(qcdAmount)} directly from your IRA, excluding it from taxable income entirely`,
        })
      }
    }

    // 3. Maximise 401k
    const maxK401 = K401_LIMIT + (age >= 50 ? K401_CATCHUP : 0)
    const currentK401 = income * k401Pct
    const k401Gap = Math.max(maxK401 - currentK401, 0)
    if (k401Gap > 500) {
      strategies.push({
        name: `Maximise 401k Contributions`,
        saving: k401Gap * marginal,
        detail: `Increase contributions by ${fmtD(k401Gap)} to reach the ${age >= 50 ? `$${(maxK401/1000).toFixed(0)}k` : `$${(maxK401/1000).toFixed(0)}k`} ${age >= 50 ? 'catch-up' : ''} limit`,
      })
    }

    // 4. HSA maximisation
    if (hsaCoverage !== 'none') {
      const hsaLimit = hsaCoverage === 'family' ? HSA_FAMILY : HSA_SELF
      const hsaGap = Math.max(hsaLimit - currentHSA, 0)
      if (hsaGap > 200) {
        strategies.push({
          name: 'Maximise HSA Contributions',
          saving: hsaGap * marginal,
          detail: `Add ${fmtD(hsaGap)} to your HSA to reach the ${fmtD(hsaLimit)} ${hsaCoverage === 'family' ? 'family' : 'self-only'} limit — triple tax advantage`,
        })
      }
    }

    // 5. Itemised vs Standard reminder
    const currentOverStd = currentItemized - stdDeduction
    if (currentOverStd < 0 && currentOverStd > -3000) {
      strategies.push({
        name: 'Accelerate Deductions',
        saving: (-currentOverStd) * marginal,
        detail: `You are ${fmtD(-currentOverStd)} below the standard deduction. Prepaying deductible expenses could push you above it`,
      })
    }

    const totalSaving = strategies.reduce((s, st) => s + st.saving, 0)

    const stratRows = strategies.length > 0
      ? strategies.map(s => `
          <div class="tool-metric" style="margin-bottom:1.25rem">
            <div style="display:flex;justify-content:space-between;align-items:baseline">
              <div class="tool-metric-label">${s.name}</div>
              <div style="font-size:1.1rem;font-weight:700;color:#1a7a4a">~${fmtD(s.saving)}/yr</div>
            </div>
            <div class="tool-metric-sub">${s.detail}</div>
          </div>
        `).join('')
      : '<p style="color:var(--text-light);font-size:0.9rem">No significant additional savings identified based on the information provided. Your current strategy may already be well-optimised.</p>'

    document.getElementById('ts-results')!.innerHTML = `
      <h3>Estimated Annual Tax Savings</h3>
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Total Potential Savings</div>
        <div class="tool-metric-value tool-metric-positive">${fmtD(totalSaving)}/yr</div>
        <div class="tool-metric-sub">Across ${strategies.length} identified ${strategies.length === 1 ? 'strategy' : 'strategies'}</div>
      </div>
      <hr class="tool-divider" />
      ${stratRows}
    `
  })
}
