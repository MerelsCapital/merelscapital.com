var e=e=>`$`+Math.round(e).toLocaleString(`en-US`),t={"public-in":{label:`Public In-State`,annual:28e3},"public-out":{label:`Public Out-of-State`,annual:46e3},private:{label:`Private University`,annual:6e4}},n=.05;function r(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>529 Education Planner</h1>
          <p>Project future education costs and see whether your 529 savings are on track — including how much you need to save monthly to close any gap.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="p529-child-age">Child's Current Age</label>
              <input type="number" id="p529-child-age" value="5" min="0" max="17" />
            </div>
            <div class="tool-field">
              <label for="p529-school">School Type</label>
              <select id="p529-school">
                <option value="public-in">Public In-State (~$28k/yr today)</option>
                <option value="public-out">Public Out-of-State (~$46k/yr today)</option>
                <option value="private">Private University (~$60k/yr today)</option>
              </select>
            </div>
            <div class="tool-field">
              <label for="p529-balance">Current 529 Balance ($)</label>
              <input type="number" id="p529-balance" value="15000" min="0" />
            </div>
            <div class="tool-field">
              <label for="p529-monthly">Monthly Contribution ($)</label>
              <input type="number" id="p529-monthly" value="400" min="0" />
            </div>
            <div class="tool-field">
              <label for="p529-return">Expected Annual Return (%)</label>
              <input type="number" id="p529-return" value="7" min="1" max="12" step="0.5" />
            </div>
            <button class="tool-calculate-btn" id="p529-calc-btn">Project Savings</button>
          </div>
          <div class="tool-results" id="p529-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see projected education costs and whether your savings will cover them.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">College cost projections assume 5% annual tuition inflation. Investment returns are not guaranteed. 529 funds must be used for qualified education expenses to maintain tax advantages. This is for educational purposes only.</p>
    </div>
  `}function i(){document.getElementById(`p529-calc-btn`)?.addEventListener(`click`,()=>{let r=e=>{document.getElementById(`p529-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},i=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(i(`p529-child-age`)===null)return r(`Please enter your child's current age.`);if(Number(document.getElementById(`p529-child-age`).value)>=18)return r(`This tool is for children under 18. For a student already enrolled in college, speak with an advisor about other options.`);if(i(`p529-balance`)===null)return r(`Please enter the current 529 balance (enter 0 if starting fresh).`);if(i(`p529-monthly`)===null)return r(`Please enter your planned monthly contribution (enter 0 to see the savings gap).`);if(i(`p529-return`)===null)return r(`Please enter an expected annual return.`);let a=Number(document.getElementById(`p529-child-age`).value),o=document.getElementById(`p529-school`).value,s=Number(document.getElementById(`p529-balance`).value),c=Number(document.getElementById(`p529-monthly`).value),l=Number(document.getElementById(`p529-return`).value)/100,u=t[o],d=Math.max(18-a,1),f=l,p=u.annual*(1+n)**+d,m=p*4,h=f/12,g=d*12,_=s*(1+f)**+d,v=_+c*((1+h)**+g-1)/h,y=m-v,b=Math.min(v/m*100,100),x=Math.max(y,0)>0?(m-_)/(((1+h)**+g-1)/h):0,S=b>=90?`tool-metric-positive`:b>=60?`tool-metric-warning`:`tool-metric-negative`;document.getElementById(`p529-results`).innerHTML=`
      <h3>Projection at Age 18</h3>
      <div class="tool-metric">
        <div class="tool-metric-label">Projected Savings at College Start</div>
        <div class="tool-metric-value">${e(v)}</div>
        <div class="tool-metric-sub">In ${d} years at ${(f*100).toFixed(1)}% return</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Estimated 4-Year Cost (${u.label})</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${e(m)}</div>
        <div class="tool-metric-sub">${e(p)}/yr — inflated at 5%/yr from today's ${e(u.annual*4)}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Coverage</div>
        <div class="tool-metric-value ${S}">${b.toFixed(0)}%</div>
      </div>
      <div class="tool-progress-bar" style="margin-bottom:1.25rem">
        <div class="tool-progress-fill" style="width:${b}%"></div>
      </div>
      ${y>0?`
      <div class="tool-metric">
        <div class="tool-metric-label">Shortfall</div>
        <div class="tool-metric-value tool-metric-negative" style="font-size:1.1rem">${e(y)}</div>
        <div class="tool-metric-sub">To fully fund: save ${e(x+c)}/month total (add ${e(Math.max(x,0))}/mo)</div>
      </div>`:`
      <div class="tool-metric">
        <div class="tool-metric-label">Surplus</div>
        <div class="tool-metric-value tool-metric-positive" style="font-size:1.1rem">${e(-y)}</div>
        <div class="tool-metric-sub">You are on track to fully cover projected costs</div>
      </div>`}
    `})}export{i as init529Planner,r as render529Planner};