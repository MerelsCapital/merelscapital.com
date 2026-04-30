const fmtD = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

function boxMuller(): number {
  const u1 = Math.random() || 1e-10
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * Math.random())
}

export function renderRetirementCalculator(): string {
  return `
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Retirement Calculator</h1>
          <p>Project your savings growth and estimate the probability your portfolio will last through retirement using Monte Carlo simulation across 500 market scenarios.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="rc-current-age">Current Age</label>
              <input type="number" id="rc-current-age" value="40" min="18" max="80" />
            </div>
            <div class="tool-field">
              <label for="rc-retirement-age">Target Retirement Age</label>
              <input type="number" id="rc-retirement-age" value="65" min="50" max="85" />
            </div>
            <div class="tool-field">
              <label for="rc-savings">Current Retirement Savings ($)</label>
              <input type="number" id="rc-savings" value="150000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc-contribution">Monthly Contribution ($)</label>
              <input type="number" id="rc-contribution" value="1500" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc-return">Expected Annual Return (%)</label>
              <input type="number" id="rc-return" value="7" min="1" max="20" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="rc-volatility">Annual Return Volatility (%) <span class="tool-label-hint">12% = typical diversified portfolio</span></label>
              <input type="number" id="rc-volatility" value="12" min="1" max="30" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="rc-income">Annual Income Needed in Retirement (today's $)</label>
              <input type="number" id="rc-income" value="80000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc-inflation">Inflation Rate (%)</label>
              <input type="number" id="rc-inflation" value="3" min="0" max="10" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="rc-years-retired">Years in Retirement</label>
              <input type="number" id="rc-years-retired" value="25" min="5" max="50" />
            </div>
            <button class="tool-calculate-btn" id="rc-calc-btn">Run Simulation</button>
          </div>
          <div class="tool-results" id="rc-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your details and click Run Simulation to see projected outcomes across 500 market scenarios.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">This tool uses Monte Carlo simulation for educational purposes only. Results are hypothetical projections and do not guarantee future performance. Past market behaviour does not predict future results. Consult a qualified financial advisor before making investment decisions.</p>
    </div>
  `
}

export function initRetirementCalculator(): void {
  document.getElementById('rc-calc-btn')?.addEventListener('click', () => {
    const err = (msg: string) => {
      document.getElementById('rc-results')!.innerHTML = `<h3>Results</h3><p class="tool-error-msg">${msg}</p>`
    }
    const getNum = (id: string): number | null => {
      const v = (document.getElementById(id) as HTMLInputElement).value.trim()
      if (v === '') return null
      const n = Number(v); return isNaN(n) ? null : n
    }
    const get = (id: string) => Number((document.getElementById(id) as HTMLInputElement).value)
    const currentAge    = get('rc-current-age')
    const retirementAge = get('rc-retirement-age')
    const savings       = get('rc-savings')
    const monthlyContrib = get('rc-contribution')
    const meanReturn    = get('rc-return') / 100
    const volatility    = get('rc-volatility') / 100
    const annualIncome  = get('rc-income')
    const inflation     = get('rc-inflation') / 100
    const yearsRetired  = get('rc-years-retired')

    if (getNum('rc-current-age') === null)      return err('Please enter your current age.')
    if (getNum('rc-retirement-age') === null)   return err('Please enter a target retirement age.')
    if (retirementAge <= currentAge)            return err('Retirement age must be greater than your current age.')
    if (getNum('rc-savings') === null)          return err('Please enter your current savings (enter 0 if none).')
    if (getNum('rc-contribution') === null)     return err('Please enter your monthly contribution (enter 0 if none).')
    if (getNum('rc-return') === null)           return err('Please enter an expected annual return.')
    if (getNum('rc-volatility') === null)       return err('Please enter an annual volatility.')
    if (getNum('rc-income') === null)           return err('Please enter your desired annual retirement income.')
    if (getNum('rc-inflation') === null)        return err('Please enter an inflation rate.')
    if (getNum('rc-years-retired') === null)    return err('Please enter how many years you expect to be in retirement.')

    const yearsToRetirement = retirementAge - currentAge
    if (yearsToRetirement <= 0) return

    const inflatedIncome = annualIncome * Math.pow(1 + inflation, yearsToRetirement)
    const SIMS = 500
    const balancesAtRetirement: number[] = []
    let successes = 0

    for (let s = 0; s < SIMS; s++) {
      let balance = savings
      for (let y = 0; y < yearsToRetirement; y++) {
        const r = meanReturn + volatility * boxMuller()
        balance = balance * (1 + r) + monthlyContrib * 12
        if (balance < 0) balance = 0
      }
      balancesAtRetirement.push(balance)

      let rb = balance
      for (let y = 0; y < yearsRetired; y++) {
        const r = meanReturn + volatility * boxMuller()
        rb = rb * (1 + r) - inflatedIncome
        if (rb <= 0) { rb = 0; break }
      }
      if (rb > 0) successes++
    }

    balancesAtRetirement.sort((a, b) => a - b)
    const median = balancesAtRetirement[Math.floor(SIMS / 2)]
    const p10    = balancesAtRetirement[Math.floor(SIMS * 0.1)]
    const p90    = balancesAtRetirement[Math.floor(SIMS * 0.9)]
    const rate   = (successes / SIMS) * 100
    const color  = rate >= 80 ? 'tool-metric-positive' : rate >= 60 ? 'tool-metric-warning' : 'tool-metric-negative'
    const status = rate >= 80 ? 'Strong — portfolio likely sustains withdrawals' : rate >= 60 ? 'Moderate — consider increasing contributions' : 'At risk — significant shortfall in many scenarios'

    document.getElementById('rc-results')!.innerHTML = `
      <h3>Results</h3>
      <div class="tool-metric">
        <div class="tool-metric-label">Success Probability</div>
        <div class="tool-metric-value ${color}">${rate.toFixed(0)}%</div>
        <div class="tool-metric-sub">${status}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Projected Balance at Age ${retirementAge}</div>
        <div class="tool-metric-value">${fmtD(median)}</div>
        <div class="tool-metric-sub">Median across 500 simulations</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Range (10th – 90th Percentile)</div>
        <div class="tool-metric-value" style="font-size:1.15rem">${fmtD(p10)} – ${fmtD(p90)}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Annual Income Needed (inflation-adjusted)</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${fmtD(inflatedIncome)}</div>
        <div class="tool-metric-sub">In ${yearsToRetirement} years at ${(inflation * 100).toFixed(1)}% inflation</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Implied Portfolio Multiple at Retirement</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${(median / inflatedIncome).toFixed(1)}x annual income</div>
        <div class="tool-metric-sub">Rule of thumb: 25× is often cited as a target</div>
      </div>
    `
  })
}
