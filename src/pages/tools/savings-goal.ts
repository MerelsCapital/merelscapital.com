const fmtD = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

const SCENARIOS = [
  { label: 'Conservative', return: 0.04, color: '#1B2774' },
  { label: 'Moderate',     return: 0.07, color: '#1a7a4a' },
  { label: 'Aggressive',   return: 0.10, color: '#b45309' },
]

export function renderSavingsGoal(): string {
  return `
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Savings Goal Estimator</h1>
          <p>Map your income and expenses against a savings goal to see if you are on track — and compare how different investment returns affect the monthly contribution you need.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="sg-income">Monthly Take-Home Income ($)</label>
              <input type="number" id="sg-income" value="7500" min="0" />
            </div>
            <div class="tool-field">
              <label for="sg-expenses">Monthly Essential Expenses ($) <span class="tool-label-hint">Rent, bills, food, transport</span></label>
              <input type="number" id="sg-expenses" value="4500" min="0" />
            </div>
            <div class="tool-field">
              <label for="sg-current-savings">Current Savings Toward This Goal ($)</label>
              <input type="number" id="sg-current-savings" value="10000" min="0" />
            </div>
            <div class="tool-field">
              <label for="sg-goal">Target Goal Amount ($)</label>
              <input type="number" id="sg-goal" value="100000" min="0" />
            </div>
            <div class="tool-field">
              <label for="sg-timeline">Target Timeline (years)</label>
              <input type="number" id="sg-timeline" value="7" min="1" max="40" />
            </div>
            <div class="tool-field">
              <label for="sg-monthly-saving">Planned Monthly Contribution ($) <span class="tool-label-hint">Leave blank to calculate required amount</span></label>
              <input type="number" id="sg-monthly-saving" value="" min="0" placeholder="Auto-calculate" />
            </div>
            <button class="tool-calculate-btn" id="sg-calc-btn">Estimate</button>
          </div>
          <div class="tool-results" id="sg-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see how your savings stack up across different investment return scenarios.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Projections assume consistent monthly contributions and do not account for taxes on investment gains. Returns are hypothetical. This tool is for educational purposes only.</p>
    </div>
  `
}

export function initSavingsGoal(): void {
  document.getElementById('sg-calc-btn')?.addEventListener('click', () => {
    const err = (msg: string) => {
      document.getElementById('sg-results')!.innerHTML = `<h3>Results</h3><p class="tool-error-msg">${msg}</p>`
    }
    const getNum = (id: string): number | null => {
      const v = (document.getElementById(id) as HTMLInputElement).value.trim()
      if (v === '') return null
      const n = Number(v); return isNaN(n) ? null : n
    }
    if (getNum('sg-income') === null || Number((document.getElementById('sg-income') as HTMLInputElement).value) <= 0)
      return err('Please enter your monthly take-home income.')
    if (getNum('sg-expenses') === null || Number((document.getElementById('sg-expenses') as HTMLInputElement).value) < 0)
      return err('Please enter your monthly expenses (enter 0 if none).')
    if (getNum('sg-current-savings') === null)   return err('Please enter your current savings toward this goal (enter 0 if starting fresh).')
    if (getNum('sg-goal') === null || Number((document.getElementById('sg-goal') as HTMLInputElement).value) <= 0)
      return err('Please enter a goal amount greater than zero.')
    if (getNum('sg-timeline') === null || Number((document.getElementById('sg-timeline') as HTMLInputElement).value) < 1)
      return err('Please enter a timeline of at least 1 year.')
    const income      = Number((document.getElementById('sg-income') as HTMLInputElement).value)
    const expenses    = Number((document.getElementById('sg-expenses') as HTMLInputElement).value)
    const current     = Number((document.getElementById('sg-current-savings') as HTMLInputElement).value)
    const goal        = Number((document.getElementById('sg-goal') as HTMLInputElement).value)
    const years       = Number((document.getElementById('sg-timeline') as HTMLInputElement).value)
    const plannedRaw  = (document.getElementById('sg-monthly-saving') as HTMLInputElement).value
    const monthly     = plannedRaw !== '' ? Number(plannedRaw) : null

    const available = income - expenses
    const months    = years * 12

    function fv(monthlyContrib: number, annualReturn: number): number {
      const mr = annualReturn / 12
      const fvCurrent = current * Math.pow(1 + annualReturn, years)
      const fvContribs = mr > 0
        ? monthlyContrib * (Math.pow(1 + mr, months) - 1) / mr
        : monthlyContrib * months
      return fvCurrent + fvContribs
    }

    function requiredMonthly(annualReturn: number): number {
      const mr = annualReturn / 12
      const fvCurrent = current * Math.pow(1 + annualReturn, years)
      const remaining = goal - fvCurrent
      if (remaining <= 0) return 0
      const factor = mr > 0
        ? (Math.pow(1 + mr, months) - 1) / mr
        : months
      return remaining / factor
    }

    const scenarioRows = SCENARIOS.map(s => {
      const contrib  = monthly !== null ? monthly : requiredMonthly(s.return)
      const achieved = fv(contrib, s.return)
      const onTrack  = achieved >= goal
      const pct      = Math.min((achieved / goal) * 100, 100)
      return { ...s, contrib, achieved, onTrack, pct }
    })

    const scenarioHtml = scenarioRows.map(s => `
      <div style="margin-bottom:1.5rem">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:0.25rem">
          <span style="font-size:0.85rem;font-weight:600;color:var(--text)">${s.label} (${(s.return*100).toFixed(0)}%/yr)</span>
          <span style="font-size:0.9rem;font-weight:700;color:${s.color}">${fmtD(s.achieved)}</span>
        </div>
        <div class="tool-progress-bar" style="margin-bottom:0.3rem">
          <div class="tool-progress-fill" style="width:${s.pct}%;background:${s.color}"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--text-light)">
          <span>Monthly needed: ${fmtD(s.contrib)}</span>
          <span>${s.onTrack ? '✓ On track' : `Shortfall: ${fmtD(goal - s.achieved)}`}</span>
        </div>
      </div>
    `).join('')

    const cashContrib = monthly !== null ? monthly : requiredMonthly(0)
    const cashAchieved = current + (monthly !== null ? monthly : cashContrib) * months

    const surplus = available - (monthly !== null ? monthly : scenarioRows[1].contrib)
    const surplusColor = surplus >= 0 ? 'tool-metric-positive' : 'tool-metric-negative'

    document.getElementById('sg-results')!.innerHTML = `
      <h3>Goal: ${fmtD(goal)} in ${years} years</h3>
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Monthly Cash Available for Savings</div>
        <div class="tool-metric-value">${fmtD(available)}/mo</div>
        <div class="tool-metric-sub">${fmtD(income)} income − ${fmtD(expenses)} expenses</div>
      </div>
      ${monthly !== null ? `
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Planned Contribution vs Available</div>
        <div class="tool-metric-value ${surplusColor}">${surplus >= 0 ? '+' : ''}${fmtD(surplus)}/mo</div>
        <div class="tool-metric-sub">${surplus >= 0 ? 'You have room in your budget' : 'Contribution exceeds available income'}</div>
      </div>` : ''}
      <hr class="tool-divider" />
      <h3 style="font-size:0.9rem;font-weight:600;color:var(--navy);margin-bottom:1rem">Projected Outcome by Return Scenario</h3>
      ${scenarioHtml}
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">No-Investment Baseline (savings account)</div>
        <div class="tool-metric-value" style="font-size:1rem">${fmtD(cashAchieved)}</div>
        <div class="tool-metric-sub">Flat savings at ${fmtD(cashContrib)}/mo — no investment return</div>
      </div>
    `
  })
}
