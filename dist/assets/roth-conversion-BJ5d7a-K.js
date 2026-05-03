var e=e=>`$`+Math.round(e).toLocaleString(`en-US`);function t(){return`
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
  `}function n(){document.getElementById(`rc2-calc-btn`)?.addEventListener(`click`,()=>{let t=e=>{document.getElementById(`rc2-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},n=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(n(`rc2-balance`)===null||Number(document.getElementById(`rc2-balance`).value)<0)return t(`Please enter your Traditional IRA / 401k balance.`);if(n(`rc2-annual`)===null)return t(`Please enter the annual conversion amount (enter 0 to model no conversion).`);if(n(`rc2-current-rate`)===null)return t(`Please enter your current marginal tax rate.`);if(n(`rc2-future-rate`)===null)return t(`Please enter your expected tax rate in retirement.`);if(n(`rc2-years`)===null||Number(document.getElementById(`rc2-years`).value)<1)return t(`Please enter a valid number of years until retirement (minimum 1).`);if(n(`rc2-return`)===null)return t(`Please enter an expected annual return.`);let r=Number(document.getElementById(`rc2-balance`).value),i=Number(document.getElementById(`rc2-annual`).value),a=Number(document.getElementById(`rc2-current-rate`).value)/100,o=Number(document.getElementById(`rc2-future-rate`).value)/100,s=Number(document.getElementById(`rc2-years`).value),c=Number(document.getElementById(`rc2-return`).value)/100,l=r;for(let e=0;e<s;e++)l*=1+c;let u=l*(1-o),d=r,f=0,p=0;for(let e=0;e<s;e++){let e=Math.min(d,i);p+=e*a,d=(d-e)*(1+c),f=f*(1+c)+e*(1-a)}let m=f+d*(1-o),h=m-u,g=r,_=0,v=[],y=0;for(let e=1;e<=Math.min(s,15);e++){let t=Math.min(g,i);y+=t*a,g=(g-t)*(1+c),_=_*(1+c)+t*(1-a),v.push({year:e,trad:g,roth:_,combined:g+_,cumTax:y})}let b=h>0?`tool-metric-positive`:`tool-metric-warning`,x=v.map(t=>`
      <tr>
        <td>Year ${t.year}</td>
        <td>${e(t.trad)}</td>
        <td>${e(t.roth)}</td>
        <td>${e(t.combined)}</td>
      </tr>
    `).join(``);document.getElementById(`rc2-results`).innerHTML=`
      <h3>At Retirement (${s} years)</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem">
        <div class="tool-metric">
          <div class="tool-metric-label">No Conversion (after tax)</div>
          <div class="tool-metric-value" style="font-size:1.1rem">${e(u)}</div>
        </div>
        <div class="tool-metric">
          <div class="tool-metric-label">With Conversion (after tax)</div>
          <div class="tool-metric-value" style="font-size:1.1rem">${e(m)}</div>
        </div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Net Benefit of Conversion</div>
        <div class="tool-metric-value ${b}">${h>=0?`+`:``}${e(h)}</div>
        <div class="tool-metric-sub">${h>0?`Conversion adds ${e(h)} in after-tax value`:`Staying traditional is more efficient by ${e(Math.abs(h))}`}</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Total Conversion Tax Cost</div>
        <div class="tool-metric-value tool-metric-warning" style="font-size:1.1rem">${e(p)}</div>
        <div class="tool-metric-sub">Paid now at ${(a*100).toFixed(0)}% to avoid ${(o*100).toFixed(0)}% later</div>
      </div>
      <hr class="tool-divider" />
      <h3 style="font-size:0.9rem;margin-bottom:0.75rem">Balance Projection (first ${Math.min(s,15)} years)</h3>
      <div style="overflow-x:auto">
        <table class="tool-table">
          <thead><tr><th>Year</th><th>Traditional</th><th>Roth</th><th>Combined</th></tr></thead>
          <tbody>${x}</tbody>
        </table>
      </div>
    `})}export{n as initRothConversion,t as renderRothConversion};