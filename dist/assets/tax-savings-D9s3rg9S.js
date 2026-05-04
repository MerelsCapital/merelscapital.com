var e=e=>`$`+Math.round(e).toLocaleString(`en-US`),t={single:14600,married:29200,hoh:21900},n=23e3,r=7500,i=4150,a=8300,o=105e3;function s(){return`
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
  `}function c(){document.getElementById(`ts-calc-btn`)?.addEventListener(`click`,()=>{let s=e=>{document.getElementById(`ts-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},c=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(c(`ts-income`)===null||Number(document.getElementById(`ts-income`).value)<=0)return s(`Please enter your gross annual income.`);if(c(`ts-age`)===null||Number(document.getElementById(`ts-age`).value)<18)return s(`Please enter a valid age.`);if(c(`ts-marginal`)===null)return s(`Please enter your marginal tax rate.`);if(c(`ts-charitable`)===null)return s(`Please enter your annual charitable giving (enter 0 if none).`);if(c(`ts-current-itemized`)===null)return s(`Please enter your other itemised deductions (enter 0 if none).`);if(c(`ts-401k-contrib`)===null)return s(`Please enter your current 401k contribution percentage (enter 0 if none).`);if(c(`ts-current-hsa`)===null)return s(`Please enter your current HSA contribution (enter 0 if none).`);let l=document.getElementById(`ts-filing`).value,u=Number(document.getElementById(`ts-income`).value),d=Number(document.getElementById(`ts-age`).value),f=Number(document.getElementById(`ts-marginal`).value)/100,p=Number(document.getElementById(`ts-charitable`).value),m=Number(document.getElementById(`ts-current-itemized`).value),h=Number(document.getElementById(`ts-401k-contrib`).value)/100,g=document.getElementById(`ts-hsa`).value,_=Number(document.getElementById(`ts-current-hsa`).value),v=t[l],y=p+m,b=Math.max(v,y),x=[],S=((p*2+m+v)/2-b)*f;if(S>50&&x.push({name:`Deduction Bunching`,saving:S,detail:`Bundle ${e(p*2)} of charitable giving every other year vs. ${e(p)}/yr — extra deduction of ~${e(S/f)}/yr on average`}),d>=70){let t=Math.min(p,o),n=t*f;n>0&&x.push({name:`Qualified Charitable Distribution (QCD)`,saving:n,detail:`Donate ${e(t)} directly from your IRA, excluding it from taxable income entirely`})}let C=n+(d>=50?r:0),w=u*h,T=Math.max(C-w,0);if(T>500&&x.push({name:`Maximise 401k Contributions`,saving:T*f,detail:`Increase contributions by ${e(T)} to reach the ${`$${(C/1e3).toFixed(0)}k`} ${d>=50?`catch-up`:``} limit`}),g!==`none`){let t=g===`family`?a:i,n=Math.max(t-_,0);n>200&&x.push({name:`Maximise HSA Contributions`,saving:n*f,detail:`Add ${e(n)} to your HSA to reach the ${e(t)} ${g===`family`?`family`:`self-only`} limit — triple tax advantage`})}let E=y-v;E<0&&E>-3e3&&x.push({name:`Accelerate Deductions`,saving:-E*f,detail:`You are ${e(-E)} below the standard deduction. Prepaying deductible expenses could push you above it`});let D=x.reduce((e,t)=>e+t.saving,0),O=x.length>0?x.map(t=>`
          <div class="tool-metric" style="margin-bottom:1.25rem">
            <div style="display:flex;justify-content:space-between;align-items:baseline">
              <div class="tool-metric-label">${t.name}</div>
              <div style="font-size:1.1rem;font-weight:700;color:#1a7a4a">~${e(t.saving)}/yr</div>
            </div>
            <div class="tool-metric-sub">${t.detail}</div>
          </div>
        `).join(``):`<p style="color:var(--text-light);font-size:0.9rem">No significant additional savings identified based on the information provided. Your current strategy may already be well-optimised.</p>`;document.getElementById(`ts-results`).innerHTML=`
      <h3>Estimated Annual Tax Savings</h3>
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Total Potential Savings</div>
        <div class="tool-metric-value tool-metric-positive">${e(D)}/yr</div>
        <div class="tool-metric-sub">Across ${x.length} identified ${x.length===1?`strategy`:`strategies`}</div>
      </div>
      <hr class="tool-divider" />
      ${O}
    `})}export{c as initTaxSavings,s as renderTaxSavings};