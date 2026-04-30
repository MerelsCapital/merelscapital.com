const fmtD = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

export function renderRothConversion(): string {
  return `
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Roth Conversion Analyzer</h1>
          <p>See the long-term tax impact of converting a Traditional IRA or 401k to a Roth account and find the strategy that keeps more in your pocket.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="rc2-balance">Traditional IRA / 401k Balance ($)</label>
              <input type="number" id="rc2-balance" value="400000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc2-annual">Annual Conversion Amount ($) <span class="tool-label-hint">0 = no conversion</span></label>
              <input type="number" id="rc2-annual" value="50000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc2-current-rate">Current Marginal Tax Rate (%)</label>
              <input type="number" id="rc2-current-rate" value="22" min="0" max="50" />
            </div>
            <div class="tool-field">
              <label for="rc2-future-rate">Expected Tax Rate in Retirement (%)</label>
              <input type="number" id="rc2-future-rate" value="25" min="0" max="50" />
            </div>
            <div class="tool-field">
              <label for="rc2-years">Years Until Retirement</label>
              <input type="number" id="rc2-years" value="15" min="1" max="40" />
            </div>
            <div class="tool-field">
              <label for="rc2-return">Expected Annual Return (%)</label>
              <input type="number" id="rc2-return" value="7" min="1" max="15" step="0.5" />
            </div>
            <button class="tool-calculate-btn" id="rc2-calc-btn">Analyze Conversion</button>
          </div>
          <div class="tool-results" id="rc2-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see a comparison of conversion vs. no conversion over your retirement horizon.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Conversions are modeled as tax being withheld from the converted amount; state income taxes are not included. Results are illustrative only. Tax laws change frequently — consult a qualified tax advisor before executing a Roth conversion strategy.</p>
    </div>
  `
}

export function initRothConversion(): void {
  document.getElementById('rc2-calc-btn')?.addEventListener('click', () => {
    const err = (msg: string) => {
      document.getElementById('rc2-results')!.innerHTML = `<h3>Results</h3><p class="tool-error-msg">${msg}</p>`
    }
    const getNum = (id: string): number | null => {
      const v = (document.getElementById(id) as HTMLInputElement).value.trim()
      if (v === '') return null
      const n = Number(v); return isNaN(n) ? null : n
    }
    if (getNum('rc2-balance') === null || Number((document.getElementById('rc2-balance') as HTMLInputElement).value) < 0)
      return err('Please enter your Traditional IRA / 401k balance.')
    if (getNum('rc2-annual') === null)       return err('Please enter the annual conversion amount (enter 0 to model no conversion).')
    if (getNum('rc2-current-rate') === null) return err('Please enter your current marginal tax rate.')
    if (getNum('rc2-future-rate') === null)  return err('Please enter your expected tax rate in retirement.')
    if (getNum('rc2-years') === null || Number((document.getElementById('rc2-years') as HTMLInputElement).value) < 1)
      return err('Please enter a valid number of years until retirement (minimum 1).')
    if (getNum('rc2-return') === null)       return err('Please enter an expected annual return.')
    const balance      = Number((document.getElementById('rc2-balance') as HTMLInputElement).value)
    const annualConv   = Number((document.getElementById('rc2-annual') as HTMLInputElement).value)
    const currentRate  = Number((document.getElementById('rc2-current-rate') as HTMLInputElement).value) / 100
    const futureRate   = Number((document.getElementById('rc2-future-rate') as HTMLInputElement).value) / 100
    const years        = Number((document.getElementById('rc2-years') as HTMLInputElement).value)
    const r            = Number((document.getElementById('rc2-return') as HTMLInputElement).value) / 100

    // Scenario A: No conversion — all Traditional
    let tradBalance = balance
    for (let y = 0; y < years; y++) tradBalance = tradBalance * (1 + r)
    const tradAfterTax = tradBalance * (1 - futureRate)

    // Scenario B: Convert annualConv per year until fully converted or years elapsed
    let trad = balance
    let roth = 0
    let totalConvTax = 0
    for (let y = 0; y < years; y++) {
      const conv = Math.min(trad, annualConv)
      totalConvTax += conv * currentRate
      trad = (trad - conv) * (1 + r)
      roth = roth * (1 + r) + conv * (1 - currentRate)
    }
    const convAfterTax = roth + trad * (1 - futureRate)
    const netBenefit = convAfterTax - tradAfterTax

    // Year-by-year table
    let trad2 = balance, roth2 = 0
    const rows: { year: number; trad: number; roth: number; combined: number; cumTax: number }[] = []
    let cumTax = 0
    for (let y = 1; y <= Math.min(years, 15); y++) {
      const conv = Math.min(trad2, annualConv)
      cumTax += conv * currentRate
      trad2 = (trad2 - conv) * (1 + r)
      roth2 = roth2 * (1 + r) + conv * (1 - currentRate)
      rows.push({ year: y, trad: trad2, roth: roth2, combined: trad2 + roth2, cumTax })
    }

    const color  = netBenefit > 0 ? 'tool-metric-positive' : 'tool-metric-warning'

    const tableRows = rows.map(r => `
      <tr>
        <td>Year ${r.year}</td>
        <td>${fmtD(r.trad)}</td>
        <td>${fmtD(r.roth)}</td>
        <td>${fmtD(r.combined)}</td>
      </tr>
    `).join('')

    document.getElementById('rc2-results')!.innerHTML = `
      <h3>At Retirement (${years} years)</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem">
        <div class="tool-metric">
          <div class="tool-metric-label">No Conversion (after tax)</div>
          <div class="tool-metric-value" style="font-size:1.1rem">${fmtD(tradAfterTax)}</div>
        </div>
        <div class="tool-metric">
          <div class="tool-metric-label">With Conversion (after tax)</div>
          <div class="tool-metric-value" style="font-size:1.1rem">${fmtD(convAfterTax)}</div>
        </div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Net Benefit of Conversion</div>
        <div class="tool-metric-value ${color}">${netBenefit >= 0 ? '+' : ''}${fmtD(netBenefit)}</div>
        <div class="tool-metric-sub">${netBenefit > 0 ? `Conversion adds ${fmtD(netBenefit)} in after-tax value` : `Staying traditional is more efficient by ${fmtD(Math.abs(netBenefit))}`}</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Total Conversion Tax Cost</div>
        <div class="tool-metric-value tool-metric-warning" style="font-size:1.1rem">${fmtD(totalConvTax)}</div>
        <div class="tool-metric-sub">Paid now at ${(currentRate * 100).toFixed(0)}% to avoid ${(futureRate * 100).toFixed(0)}% later</div>
      </div>
      <hr class="tool-divider" />
      <h3 style="font-size:0.9rem;margin-bottom:0.75rem">Balance Projection (first ${Math.min(years, 15)} years)</h3>
      <div style="overflow-x:auto">
        <table class="tool-table">
          <thead><tr><th>Year</th><th>Traditional</th><th>Roth</th><th>Combined</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    `
  })
}
