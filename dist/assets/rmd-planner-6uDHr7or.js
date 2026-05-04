var e=e=>`$`+Math.round(e).toLocaleString(`en-US`),t={72:27.4,73:26.5,74:25.5,75:24.6,76:23.7,77:22.9,78:22,79:21.1,80:20.2,81:19.4,82:18.5,83:17.7,84:16.8,85:16,86:15.2,87:14.4,88:13.7,89:12.9,90:12.2,91:11.5,92:10.8,93:10.1,94:9.5,95:8.9,96:8.4,97:7.8,98:7.3,99:6.8,100:6.4},n={10:.1,12:.12,22:.22,24:.24,32:.32,35:.35,37:.37};function r(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>RMD Planner</h1>
          <p>Calculate your Required Minimum Distributions for the next 20 years and understand the tax implications of each withdrawal.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="rmd-age">Current Age</label>
              <input type="number" id="rmd-age" value="72" min="60" max="100" />
            </div>
            <div class="tool-field">
              <label for="rmd-balance">Current IRA / 401k Balance ($)</label>
              <input type="number" id="rmd-balance" value="750000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rmd-growth">Expected Annual Growth Rate (%)</label>
              <input type="number" id="rmd-growth" value="6" min="0" max="15" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="rmd-tax">Marginal Tax Bracket</label>
              <select id="rmd-tax">
                <option value="10">10%</option>
                <option value="12">12%</option>
                <option value="22" selected>22%</option>
                <option value="24">24%</option>
                <option value="32">32%</option>
                <option value="35">35%</option>
                <option value="37">37%</option>
              </select>
            </div>
            <button class="tool-calculate-btn" id="rmd-calc-btn">Calculate RMDs</button>
          </div>
          <div class="tool-results" id="rmd-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see your projected RMD schedule and estimated tax impact for the next 20 years.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">RMD calculations use the IRS Uniform Lifetime Table (2022 update). RMDs begin at age 73 under SECURE Act 2.0 for those born after 1950. This tool is for educational purposes only and does not constitute tax advice.</p>
    </div>
  `}function i(){document.getElementById(`rmd-calc-btn`)?.addEventListener(`click`,()=>{let r=e=>{document.getElementById(`rmd-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},i=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(i(`rmd-age`)===null)return r(`Please enter your current age.`);if(i(`rmd-balance`)===null||Number(document.getElementById(`rmd-balance`).value)<0)return r(`Please enter your current IRA / 401k balance.`);if(i(`rmd-growth`)===null)return r(`Please enter an expected annual growth rate.`);let a=Number(document.getElementById(`rmd-age`).value),o=Number(document.getElementById(`rmd-balance`).value),s=Number(document.getElementById(`rmd-growth`).value)/100,c=n[document.getElementById(`rmd-tax`).value],l=[];for(let e=0;e<20;e++){let n=a+e;o*=1+s;let r=t[Math.min(n,100)];if(n>=73&&r){let e=o/r;o-=e,l.push({age:n,balance:o,rmd:e,tax:e*c})}else l.push({age:n,balance:o,rmd:0,tax:0})}let u=l.reduce((e,t)=>e+t.rmd,0),d=l.reduce((e,t)=>e+t.tax,0),f=l.map(t=>`
      <tr>
        <td>${t.age}</td>
        <td>${e(t.balance)}</td>
        <td>${t.rmd>0?e(t.rmd):`—`}</td>
        <td>${t.rmd>0?e(t.tax):`—`}</td>
      </tr>
    `).join(``);document.getElementById(`rmd-results`).innerHTML=`
      <h3>20-Year RMD Schedule</h3>
      <div class="tool-metric" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
        <div>
          <div class="tool-metric-label">Total RMDs (20 yr)</div>
          <div class="tool-metric-value" style="font-size:1.2rem">${e(u)}</div>
        </div>
        <div>
          <div class="tool-metric-label">Est. Total Tax</div>
          <div class="tool-metric-value tool-metric-warning" style="font-size:1.2rem">${e(d)}</div>
        </div>
      </div>
      <div style="overflow-x:auto">
        <table class="tool-table">
          <thead><tr><th>Age</th><th>Year-End Balance</th><th>RMD</th><th>Est. Tax</th></tr></thead>
          <tbody>${f}</tbody>
        </table>
      </div>
    `})}export{i as initRmdPlanner,r as renderRmdPlanner};