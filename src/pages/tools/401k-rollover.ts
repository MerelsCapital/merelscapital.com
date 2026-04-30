const fmtD = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

const err = (id: string, msg: string) => {
  document.getElementById(id)!.innerHTML = `<h3>Results</h3><p class="tool-error-msg">${msg}</p>`
}

export function renderRollover401k(): string {
  return `
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>401k Rollover Comparison</h1>
          <p>Compare your options for an old employer retirement plan — rollover to an IRA, stay in the old plan, move to a new employer plan, or cash out — and see the long-term impact of each choice.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="kr-balance">Old Plan Balance ($)</label>
              <input type="number" id="kr-balance" value="120000" min="0" />
            </div>
            <div class="tool-field">
              <label for="kr-age">Current Age</label>
              <input type="number" id="kr-age" value="42" min="18" max="70" />
            </div>
            <div class="tool-field">
              <label for="kr-retirement-age">Target Retirement Age</label>
              <input type="number" id="kr-retirement-age" value="65" min="50" max="80" />
            </div>
            <div class="tool-field">
              <label for="kr-return">Expected Annual Return (%)</label>
              <input type="number" id="kr-return" value="7" min="1" max="15" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="kr-old-er">Old Plan Expense Ratio (%)</label>
              <input type="number" id="kr-old-er" value="0.80" min="0" max="3" step="0.05" />
            </div>
            <div class="tool-field">
              <label for="kr-ira-er">IRA Expense Ratio (%) <span class="tool-label-hint">— leave blank to exclude this option</span></label>
              <input type="number" id="kr-ira-er" value="0.10" min="0" max="3" step="0.05" placeholder="e.g. 0.10" />
            </div>
            <div class="tool-field">
              <label for="kr-new-er">New Employer Plan Expense Ratio (%) <span class="tool-label-hint">— leave blank to exclude this option</span></label>
              <input type="number" id="kr-new-er" placeholder="e.g. 0.40" min="0" max="3" step="0.05" />
            </div>
            <div class="tool-field">
              <label for="kr-tax-rate">Marginal Tax Bracket (for cash-out scenario)</label>
              <select id="kr-tax-rate">
                <option value="10">10%</option>
                <option value="12">12%</option>
                <option value="22" selected>22%</option>
                <option value="24">24%</option>
                <option value="32">32%</option>
                <option value="35">35%</option>
                <option value="37">37%</option>
              </select>
            </div>
            <button class="tool-calculate-btn" id="kr-calc-btn">Compare Options</button>
          </div>
          <div class="tool-results" id="kr-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to compare rollover options side by side at retirement. Leave an expense ratio blank to exclude that option.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Cash-out calculation assumes a 10% early withdrawal penalty (waived after age 59½) plus income tax. This tool is for educational purposes only and does not constitute financial or tax advice.</p>
    </div>
  `
}

export function initRollover401k(): void {
  document.getElementById('kr-calc-btn')?.addEventListener('click', () => {
    const getNum = (id: string): number | null => {
      const v = (document.getElementById(id) as HTMLInputElement).value.trim()
      if (v === '') return null
      const n = Number(v)
      return isNaN(n) ? null : n
    }

    const balance    = getNum('kr-balance')
    const age        = getNum('kr-age')
    const retAge     = getNum('kr-retirement-age')
    const baseReturn = getNum('kr-return')
    const oldER      = getNum('kr-old-er')
    const iraERRaw   = getNum('kr-ira-er')
    const newERRaw   = getNum('kr-new-er')
    const taxRate    = Number((document.getElementById('kr-tax-rate') as HTMLSelectElement).value) / 100

    if (balance === null || balance < 0) return err('kr-results', 'Please enter a valid old plan balance.')
    if (age === null || age < 18)        return err('kr-results', 'Please enter a valid current age.')
    if (retAge === null)                 return err('kr-results', 'Please enter a target retirement age.')
    if (retAge <= age)                   return err('kr-results', 'Retirement age must be greater than your current age.')
    if (baseReturn === null)             return err('kr-results', 'Please enter an expected annual return.')
    if (oldER === null || oldER < 0)     return err('kr-results', 'Please enter the old plan expense ratio.')
    if (iraERRaw === null && newERRaw === null)
      return err('kr-results', 'Please enter at least one rollover destination expense ratio (IRA or new employer plan) to compare.')

    const years = retAge - age

    const fv = (b: number, er: number) => b * Math.pow(1 + baseReturn / 100 - er / 100, years)

    const fvOld  = fv(balance, oldER)
    const penalty = age < 59.5 ? 0.10 : 0
    const cashNet = balance * (1 - taxRate - penalty)

    type Option = { label: string; value: number; er: number; badge: string; isCash: boolean }
    const options: Option[] = [
      { label: 'Leave in Old Plan', value: fvOld, er: oldER, badge: '', isCash: false },
      { label: 'Cash Out Now', value: cashNet, er: 0, badge: 'Not recommended', isCash: true },
    ]

    if (iraERRaw !== null) {
      options.push({ label: 'Rollover to IRA', value: fv(balance, iraERRaw), er: iraERRaw, badge: 'Most flexible', isCash: false })
    }
    if (newERRaw !== null) {
      options.push({ label: 'Rollover to New Employer Plan', value: fv(balance, newERRaw), er: newERRaw, badge: '', isCash: false })
    }

    options.sort((a, b) => b.value - a.value)
    const best = options[0]

    const bars = options.map(o => {
      const pct      = Math.round((o.value / best.value) * 100)
      const barColor = o.value === best.value ? 'green' : o.isCash ? 'red' : 'navy'
      const detail   = o.isCash
        ? `After ${(taxRate * 100).toFixed(0)}% tax${age < 59.5 ? ' + 10% early withdrawal penalty' : ''}`
        : `Net return: ${(baseReturn - o.er).toFixed(2)}%/yr`
      return `
        <div class="tool-bar-row">
          <div class="tool-bar-label">
            <span>${o.label}${o.badge ? ` <em style="font-style:normal;font-size:0.75rem;opacity:0.7">(${o.badge})</em>` : ''}</span>
            <span>${fmtD(o.value)}</span>
          </div>
          <div class="tool-bar"><div class="tool-bar-fill ${barColor}" style="width:${pct}%"></div></div>
          <div style="font-size:0.75rem;color:var(--text-light);margin-top:0.2rem">${detail}</div>
        </div>
      `
    }).join('')

    const cashRow = options.find(o => o.isCash)
    const iraRow  = options.find(o => o.label === 'Rollover to IRA')
    const compRow = iraRow ?? options.find(o => o.label === 'Rollover to New Employer Plan')

    document.getElementById('kr-results')!.innerHTML = `
      <h3>Value at Retirement (${years} years)</h3>
      ${bars}
      ${compRow ? `
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">${compRow.label} vs Leave in Old Plan</div>
        <div class="tool-metric-value ${compRow.value >= fvOld ? 'tool-metric-positive' : 'tool-metric-warning'}" style="font-size:1.15rem">
          ${compRow.value >= fvOld ? '+' : ''}${fmtD(compRow.value - fvOld)}
        </div>
        <div class="tool-metric-sub">Difference from lower expense ratio over ${years} years</div>
      </div>` : ''}
      ${cashRow ? `
      <div class="tool-metric">
        <div class="tool-metric-label">Cost of Cashing Out vs Best Option</div>
        <div class="tool-metric-value tool-metric-negative" style="font-size:1.15rem">−${fmtD(best.value - cashRow.value)}</div>
        <div class="tool-metric-sub">Foregone growth by taking cash today</div>
      </div>` : ''}
    `
  })
}
