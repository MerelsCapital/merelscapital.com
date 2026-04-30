const fmtD = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

function getFRA(birthYear: number): number {
  if (birthYear <= 1954) return 66
  if (birthYear === 1955) return 66 + 2 / 12
  if (birthYear === 1956) return 66 + 4 / 12
  if (birthYear === 1957) return 66 + 6 / 12
  if (birthYear === 1958) return 66 + 8 / 12
  if (birthYear === 1959) return 66 + 10 / 12
  return 67
}

function getFRALabel(birthYear: number): string {
  if (birthYear <= 1954) return '66'
  if (birthYear === 1955) return '66 + 2 months'
  if (birthYear === 1956) return '66 + 4 months'
  if (birthYear === 1957) return '66 + 6 months'
  if (birthYear === 1958) return '66 + 8 months'
  if (birthYear === 1959) return '66 + 10 months'
  return '67'
}

function estimatePIA(annualIncome: number): number {
  // Simplified PIA using 2024 bend points
  // Assumes career average ~75% of current income
  const aime = (annualIncome * 0.75) / 12
  const b1 = 1174, b2 = 7078
  let pia = 0
  if (aime <= b1) {
    pia = aime * 0.9
  } else if (aime <= b2) {
    pia = b1 * 0.9 + (aime - b1) * 0.32
  } else {
    pia = b1 * 0.9 + (b2 - b1) * 0.32 + (aime - b2) * 0.15
  }
  return Math.min(pia, 3822) // 2024 max benefit at FRA
}

export function renderSocialSecurity(): string {
  const currentYear = new Date().getFullYear()
  return `
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Social Security Optimizer</h1>
          <p>Estimate your Social Security benefits at different claiming ages and explore spousal strategies to maximise your lifetime income.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="ss-birth-year">Your Birth Year</label>
              <input type="number" id="ss-birth-year" value="${currentYear - 55}" min="1944" max="${currentYear - 40}" />
            </div>
            <div class="tool-field">
              <label for="ss-income">Current Annual Income ($)</label>
              <input type="number" id="ss-income" value="90000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ss-marital">Marital Status</label>
              <select id="ss-marital">
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
            <div id="ss-spouse-section" hidden>
              <div class="tool-field">
                <label for="ss-spouse-income">Spouse Annual Income ($) <span class="tool-label-hint">0 if not working</span></label>
                <input type="number" id="ss-spouse-income" value="60000" min="0" />
              </div>
              <div class="tool-field">
                <label for="ss-spouse-birth-year">Spouse Birth Year</label>
                <input type="number" id="ss-spouse-birth-year" value="${currentYear - 53}" min="1944" max="${currentYear - 40}" />
              </div>
            </div>
            <button class="tool-calculate-btn" id="ss-calc-btn">Estimate Benefits</button>
          </div>
          <div class="tool-results" id="ss-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see estimated benefits at each claiming age and breakeven analysis.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Estimates are based on simplified Social Security benefit formulas and assume a consistent career earnings history. Actual benefits are determined by the SSA based on your full earnings record. This is for educational purposes only.</p>
    </div>
  `
}

export function initSocialSecurity(): void {
  const maritalSel = document.getElementById('ss-marital') as HTMLSelectElement
  const spouseSection = document.getElementById('ss-spouse-section')!
  maritalSel.addEventListener('change', () => {
    spouseSection.hidden = maritalSel.value !== 'married'
  })

  document.getElementById('ss-calc-btn')?.addEventListener('click', () => {
    const err = (msg: string) => {
      document.getElementById('ss-results')!.innerHTML = `<h3>Results</h3><p class="tool-error-msg">${msg}</p>`
    }
    const getNum = (id: string): number | null => {
      const v = (document.getElementById(id) as HTMLInputElement).value.trim()
      if (v === '') return null
      const n = Number(v); return isNaN(n) ? null : n
    }
    const currentYear = new Date().getFullYear()
    if (getNum('ss-birth-year') === null)  return err('Please enter your birth year.')
    const byCheck = Number((document.getElementById('ss-birth-year') as HTMLInputElement).value)
    if (byCheck < 1924 || byCheck > currentYear - 40) return err('Please enter a valid birth year.')
    if (getNum('ss-income') === null || Number((document.getElementById('ss-income') as HTMLInputElement).value) < 0)
      return err('Please enter your current annual income.')
    if (maritalSel.value === 'married') {
      if (getNum('ss-spouse-income') === null) return err('Please enter your spouse\'s annual income (enter 0 if not working).')
      if (getNum('ss-spouse-birth-year') === null) return err('Please enter your spouse\'s birth year.')
    }
    const birthYear   = Number((document.getElementById('ss-birth-year') as HTMLInputElement).value)
    const income      = Number((document.getElementById('ss-income') as HTMLInputElement).value)
    const isMarried   = maritalSel.value === 'married'
    const spouseIncome = isMarried ? Number((document.getElementById('ss-spouse-income') as HTMLInputElement).value) : 0
    const spouseBY    = isMarried ? Number((document.getElementById('ss-spouse-birth-year') as HTMLInputElement).value) : 0

    const fra = getFRA(birthYear)
    const fraLabel = getFRALabel(birthYear)
    const pia = estimatePIA(income) // monthly at FRA

    const earlyAge  = 62
    const delayAge  = 70

    // Early claiming reduction: 5/9 of 1% per month for first 36 months, then 5/12 of 1%
    const earlyMonths = (fra - earlyAge) * 12
    let earlyReduction = 0
    if (earlyMonths <= 36) {
      earlyReduction = earlyMonths * (5 / 900)
    } else {
      earlyReduction = 36 * (5 / 900) + (earlyMonths - 36) * (5 / 1200)
    }
    const benefitAt62 = pia * (1 - earlyReduction)
    const benefitAtFRA = pia
    const benefitAt70 = pia * (1 + (delayAge - fra) * 0.08)

    // Breakeven: claiming at 62 vs FRA
    const breakeven62vFRA = Math.round(62 + (benefitAtFRA * 12 * (fra - earlyAge)) / ((benefitAtFRA - benefitAt62) * 12))
    const breakeven67v70  = Math.round(fra + (benefitAt70 * 12 * (delayAge - fra)) / ((benefitAt70 - benefitAtFRA) * 12))

    let spouseHtml = ''
    if (isMarried && spouseIncome === 0) {
      const spouseSpousal = Math.min(pia * 0.5, estimatePIA(0))
      spouseHtml = `
        <hr class="tool-divider" />
        <div class="tool-metric">
          <div class="tool-metric-label">Spousal Benefit (non-working spouse at FRA)</div>
          <div class="tool-metric-value" style="font-size:1.15rem">${fmtD(spouseSpousal * 12)}/yr</div>
          <div class="tool-metric-sub">50% of your PIA — available at your spouse's FRA</div>
        </div>
      `
    } else if (isMarried && spouseIncome > 0) {
      const spousePIA = estimatePIA(spouseIncome)
      const spouseFRA = getFRALabel(spouseBY)
      spouseHtml = `
        <hr class="tool-divider" />
        <div class="tool-metric">
          <div class="tool-metric-label">Spouse Estimated Benefit at FRA (age ${spouseFRA})</div>
          <div class="tool-metric-value" style="font-size:1.15rem">${fmtD(spousePIA * 12)}/yr</div>
          <div class="tool-metric-sub">Combined household at both FRAs: ${fmtD((pia + spousePIA) * 12)}/yr</div>
        </div>
      `
    }

    document.getElementById('ss-results')!.innerHTML = `
      <h3>Estimated Monthly Benefits</h3>
      <table class="tool-table">
        <thead><tr><th>Claiming Age</th><th>Monthly</th><th>Annual</th><th>vs FRA</th></tr></thead>
        <tbody>
          <tr>
            <td>Age 62 (earliest)</td>
            <td>${fmtD(benefitAt62)}</td>
            <td>${fmtD(benefitAt62 * 12)}</td>
            <td style="color:#b91c1c">−${((1 - benefitAt62 / pia) * 100).toFixed(0)}%</td>
          </tr>
          <tr style="background:rgba(27,39,116,0.05)">
            <td>Age ${fraLabel} (FRA)</td>
            <td>${fmtD(benefitAtFRA)}</td>
            <td>${fmtD(benefitAtFRA * 12)}</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Age 70 (maximum)</td>
            <td>${fmtD(benefitAt70)}</td>
            <td>${fmtD(benefitAt70 * 12)}</td>
            <td style="color:#1a7a4a">+${((benefitAt70 / pia - 1) * 100).toFixed(0)}%</td>
          </tr>
        </tbody>
      </table>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Breakeven: Claiming at 62 vs FRA</div>
        <div class="tool-metric-value" style="font-size:1.2rem">Age ${breakeven62vFRA}</div>
        <div class="tool-metric-sub">If you live past this age, waiting to FRA pays more in total</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Breakeven: Claiming at FRA vs Age 70</div>
        <div class="tool-metric-value" style="font-size:1.2rem">Age ${breakeven67v70}</div>
        <div class="tool-metric-sub">If you live past this age, delaying to 70 pays more in total</div>
      </div>
      ${spouseHtml}
    `
  })
}
