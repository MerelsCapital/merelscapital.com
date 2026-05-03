var e=e=>`$`+Math.round(e).toLocaleString(`en-US`),t=(e,t)=>{document.getElementById(e).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${t}</p>`};function n(){return`
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
  `}function r(){document.getElementById(`kr-calc-btn`)?.addEventListener(`click`,()=>{let n=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n},r=n(`kr-balance`),i=n(`kr-age`),a=n(`kr-retirement-age`),o=n(`kr-return`),s=n(`kr-old-er`),c=n(`kr-ira-er`),l=n(`kr-new-er`),u=Number(document.getElementById(`kr-tax-rate`).value)/100;if(r===null||r<0)return t(`kr-results`,`Please enter a valid old plan balance.`);if(i===null||i<18)return t(`kr-results`,`Please enter a valid current age.`);if(a===null)return t(`kr-results`,`Please enter a target retirement age.`);if(a<=i)return t(`kr-results`,`Retirement age must be greater than your current age.`);if(o===null)return t(`kr-results`,`Please enter an expected annual return.`);if(s===null||s<0)return t(`kr-results`,`Please enter the old plan expense ratio.`);if(c===null&&l===null)return t(`kr-results`,`Please enter at least one rollover destination expense ratio (IRA or new employer plan) to compare.`);let d=a-i,f=(e,t)=>e*(1+o/100-t/100)**d,p=f(r,s),m=i<59.5?.1:0,h=r*(1-u-m),g=[{label:`Leave in Old Plan`,value:p,er:s,badge:``,isCash:!1},{label:`Cash Out Now`,value:h,er:0,badge:`Not recommended`,isCash:!0}];c!==null&&g.push({label:`Rollover to IRA`,value:f(r,c),er:c,badge:`Most flexible`,isCash:!1}),l!==null&&g.push({label:`Rollover to New Employer Plan`,value:f(r,l),er:l,badge:``,isCash:!1}),g.sort((e,t)=>t.value-e.value);let _=g[0],v=g.map(t=>{let n=Math.round(t.value/_.value*100),r=t.value===_.value?`green`:t.isCash?`red`:`navy`,a=t.isCash?`After ${(u*100).toFixed(0)}% tax${i<59.5?` + 10% early withdrawal penalty`:``}`:`Net return: ${(o-t.er).toFixed(2)}%/yr`;return`
        <div class="tool-bar-row">
          <div class="tool-bar-label">
            <span>${t.label}${t.badge?` <em style="font-style:normal;font-size:0.75rem;opacity:0.7">(${t.badge})</em>`:``}</span>
            <span>${e(t.value)}</span>
          </div>
          <div class="tool-bar"><div class="tool-bar-fill ${r}" style="width:${n}%"></div></div>
          <div style="font-size:0.75rem;color:var(--text-light);margin-top:0.2rem">${a}</div>
        </div>
      `}).join(``),y=g.find(e=>e.isCash),b=g.find(e=>e.label===`Rollover to IRA`)??g.find(e=>e.label===`Rollover to New Employer Plan`);document.getElementById(`kr-results`).innerHTML=`
      <h3>Value at Retirement (${d} years)</h3>
      ${v}
      ${b?`
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">${b.label} vs Leave in Old Plan</div>
        <div class="tool-metric-value ${b.value>=p?`tool-metric-positive`:`tool-metric-warning`}" style="font-size:1.15rem">
          ${b.value>=p?`+`:``}${e(b.value-p)}
        </div>
        <div class="tool-metric-sub">Difference from lower expense ratio over ${d} years</div>
      </div>`:``}
      ${y?`
      <div class="tool-metric">
        <div class="tool-metric-label">Cost of Cashing Out vs Best Option</div>
        <div class="tool-metric-value tool-metric-negative" style="font-size:1.15rem">−${e(_.value-y.value)}</div>
        <div class="tool-metric-sub">Foregone growth by taking cash today</div>
      </div>`:``}
    `})}export{r as initRollover401k,n as renderRollover401k};