const fmtD = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

// 2024 estimates for 4-year total cost (tuition + fees + room + board)
const SCHOOL_COSTS: Record<string, { label: string; annual: number }> = {
  'public-in':  { label: 'Public In-State',   annual: 28000 },
  'public-out': { label: 'Public Out-of-State', annual: 46000 },
  'private':    { label: 'Private University',  annual: 60000 },
}
const COLLEGE_INFLATION = 0.05

export function render529Planner(): string {
  return `
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>529 Education Planner</h1>
          <p>Project future education costs and see whether your 529 savings are on track — including how much you need to save monthly to close any gap.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="p529-child-age">Child's Current Age</label>
              <input type="number" id="p529-child-age" value="5" min="0" max="17" />
            </div>
            <div class="tool-field">
              <label for="p529-school">School Type</label>
              <select id="p529-school">
                <option value="public-in">Public In-State (~$28k/yr today)</option>
                <option value="public-out">Public Out-of-State (~$46k/yr today)</option>
                <option value="private">Private University (~$60k/yr today)</option>
              </select>
            </div>
            <div class="tool-field">
              <label for="p529-balance">Current 529 Balance ($)</label>
              <input type="number" id="p529-balance" value="15000" min="0" />
            </div>
            <div class="tool-field">
              <label for="p529-monthly">Monthly Contribution ($)</label>
              <input type="number" id="p529-monthly" value="400" min="0" />
            </div>
            <div class="tool-field">
              <label for="p529-return">Expected Annual Return (%)</label>
              <input type="number" id="p529-return" value="7" min="1" max="12" step="0.5" />
            </div>
            <button class="tool-calculate-btn" id="p529-calc-btn">Project Savings</button>
          </div>
          <div class="tool-results" id="p529-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see projected education costs and whether your savings will cover them.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">College cost projections assume 5% annual tuition inflation. Investment returns are not guaranteed. 529 funds must be used for qualified education expenses to maintain tax advantages. This is for educational purposes only.</p>
    </div>
  `
}

export function init529Planner(): void {
  document.getElementById('p529-calc-btn')?.addEventListener('click', () => {
    const err = (msg: string) => {
      document.getElementById('p529-results')!.innerHTML = `<h3>Results</h3><p class="tool-error-msg">${msg}</p>`
    }
    const getNum = (id: string): number | null => {
      const v = (document.getElementById(id) as HTMLInputElement).value.trim()
      if (v === '') return null
      const n = Number(v); return isNaN(n) ? null : n
    }
    if (getNum('p529-child-age') === null) return err('Please enter your child\'s current age.')
    const childAgeVal = Number((document.getElementById('p529-child-age') as HTMLInputElement).value)
    if (childAgeVal >= 18) return err('This tool is for children under 18. For a student already enrolled in college, speak with an advisor about other options.')
    if (getNum('p529-balance') === null)   return err('Please enter the current 529 balance (enter 0 if starting fresh).')
    if (getNum('p529-monthly') === null)   return err('Please enter your planned monthly contribution (enter 0 to see the savings gap).')
    if (getNum('p529-return') === null)    return err('Please enter an expected annual return.')
    const childAge    = Number((document.getElementById('p529-child-age') as HTMLInputElement).value)
    const schoolKey   = (document.getElementById('p529-school') as HTMLSelectElement).value
    const balance     = Number((document.getElementById('p529-balance') as HTMLInputElement).value)
    const monthly     = Number((document.getElementById('p529-monthly') as HTMLInputElement).value)
    const annualReturn = Number((document.getElementById('p529-return') as HTMLInputElement).value) / 100

    const school     = SCHOOL_COSTS[schoolKey]
    const yearsUntil = Math.max(18 - childAge, 1)
    const r          = annualReturn

    // Future cost per year at start of college (inflated)
    const inflatedAnnual = school.annual * Math.pow(1 + COLLEGE_INFLATION, yearsUntil)
    const totalCost4yr   = inflatedAnnual * 4

    // Projected 529 balance at college start
    const monthlyRate = r / 12
    const months      = yearsUntil * 12
    const fvBalance   = balance * Math.pow(1 + r, yearsUntil)
    const fvContribs  = monthly * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate
    const projectedBalance = fvBalance + fvContribs

    const gap = totalCost4yr - projectedBalance
    const pctCovered = Math.min((projectedBalance / totalCost4yr) * 100, 100)

    // Required monthly to fully fund
    const needed = Math.max(gap, 0) > 0
      ? (totalCost4yr - fvBalance) / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
      : 0

    const color = pctCovered >= 90 ? 'tool-metric-positive' : pctCovered >= 60 ? 'tool-metric-warning' : 'tool-metric-negative'

    document.getElementById('p529-results')!.innerHTML = `
      <h3>Projection at Age 18</h3>
      <div class="tool-metric">
        <div class="tool-metric-label">Projected Savings at College Start</div>
        <div class="tool-metric-value">${fmtD(projectedBalance)}</div>
        <div class="tool-metric-sub">In ${yearsUntil} years at ${(r * 100).toFixed(1)}% return</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Estimated 4-Year Cost (${school.label})</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${fmtD(totalCost4yr)}</div>
        <div class="tool-metric-sub">${fmtD(inflatedAnnual)}/yr — inflated at 5%/yr from today's ${fmtD(school.annual * 4)}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Coverage</div>
        <div class="tool-metric-value ${color}">${pctCovered.toFixed(0)}%</div>
      </div>
      <div class="tool-progress-bar" style="margin-bottom:1.25rem">
        <div class="tool-progress-fill" style="width:${pctCovered}%"></div>
      </div>
      ${gap > 0 ? `
      <div class="tool-metric">
        <div class="tool-metric-label">Shortfall</div>
        <div class="tool-metric-value tool-metric-negative" style="font-size:1.1rem">${fmtD(gap)}</div>
        <div class="tool-metric-sub">To fully fund: save ${fmtD(needed + monthly)}/month total (add ${fmtD(Math.max(needed, 0))}/mo)</div>
      </div>` : `
      <div class="tool-metric">
        <div class="tool-metric-label">Surplus</div>
        <div class="tool-metric-value tool-metric-positive" style="font-size:1.1rem">${fmtD(-gap)}</div>
        <div class="tool-metric-sub">You are on track to fully cover projected costs</div>
      </div>`}
    `
  })
}
