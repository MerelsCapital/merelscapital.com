var e=e=>`$`+Math.round(e).toLocaleString(`en-US`),t=[{label:`Conservative`,return:.04,color:`#1B2774`},{label:`Moderate`,return:.07,color:`#1a7a4a`},{label:`Aggressive`,return:.1,color:`#b45309`}];function n(){return`
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
  `}function r(){document.getElementById(`sg-calc-btn`)?.addEventListener(`click`,()=>{let n=e=>{document.getElementById(`sg-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},r=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(r(`sg-income`)===null||Number(document.getElementById(`sg-income`).value)<=0)return n(`Please enter your monthly take-home income.`);if(r(`sg-expenses`)===null||Number(document.getElementById(`sg-expenses`).value)<0)return n(`Please enter your monthly expenses (enter 0 if none).`);if(r(`sg-current-savings`)===null)return n(`Please enter your current savings toward this goal (enter 0 if starting fresh).`);if(r(`sg-goal`)===null||Number(document.getElementById(`sg-goal`).value)<=0)return n(`Please enter a goal amount greater than zero.`);if(r(`sg-timeline`)===null||Number(document.getElementById(`sg-timeline`).value)<1)return n(`Please enter a timeline of at least 1 year.`);let i=Number(document.getElementById(`sg-income`).value),a=Number(document.getElementById(`sg-expenses`).value),o=Number(document.getElementById(`sg-current-savings`).value),s=Number(document.getElementById(`sg-goal`).value),c=Number(document.getElementById(`sg-timeline`).value),l=document.getElementById(`sg-monthly-saving`).value,u=l===``?null:Number(l),d=i-a,f=c*12;function p(e,t){let n=t/12;return o*(1+t)**+c+(n>0?e*((1+n)**+f-1)/n:e*f)}function m(e){let t=e/12,n=s-o*(1+e)**+c;return n<=0?0:n/(t>0?((1+t)**+f-1)/t:f)}let h=t.map(e=>{let t=u===null?m(e.return):u,n=p(t,e.return),r=n>=s,i=Math.min(n/s*100,100);return{...e,contrib:t,achieved:n,onTrack:r,pct:i}}),g=h.map(t=>`
      <div style="margin-bottom:1.5rem">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:0.25rem">
          <span style="font-size:0.85rem;font-weight:600;color:var(--text)">${t.label} (${(t.return*100).toFixed(0)}%/yr)</span>
          <span style="font-size:0.9rem;font-weight:700;color:${t.color}">${e(t.achieved)}</span>
        </div>
        <div class="tool-progress-bar" style="margin-bottom:0.3rem">
          <div class="tool-progress-fill" style="width:${t.pct}%;background:${t.color}"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--text-light)">
          <span>Monthly needed: ${e(t.contrib)}</span>
          <span>${t.onTrack?`✓ On track`:`Shortfall: ${e(s-t.achieved)}`}</span>
        </div>
      </div>
    `).join(``),_=u===null?m(0):u,v=o+(u===null?_:u)*f,y=d-(u===null?h[1].contrib:u),b=y>=0?`tool-metric-positive`:`tool-metric-negative`;document.getElementById(`sg-results`).innerHTML=`
      <h3>Goal: ${e(s)} in ${c} years</h3>
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Monthly Cash Available for Savings</div>
        <div class="tool-metric-value">${e(d)}/mo</div>
        <div class="tool-metric-sub">${e(i)} income − ${e(a)} expenses</div>
      </div>
      ${u===null?``:`
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Planned Contribution vs Available</div>
        <div class="tool-metric-value ${b}">${y>=0?`+`:``}${e(y)}/mo</div>
        <div class="tool-metric-sub">${y>=0?`You have room in your budget`:`Contribution exceeds available income`}</div>
      </div>`}
      <hr class="tool-divider" />
      <h3 style="font-size:0.9rem;font-weight:600;color:var(--navy);margin-bottom:1rem">Projected Outcome by Return Scenario</h3>
      ${g}
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">No-Investment Baseline (savings account)</div>
        <div class="tool-metric-value" style="font-size:1rem">${e(v)}</div>
        <div class="tool-metric-sub">Flat savings at ${e(_)}/mo — no investment return</div>
      </div>
    `})}export{r as initSavingsGoal,n as renderSavingsGoal};