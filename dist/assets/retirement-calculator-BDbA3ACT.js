var e=e=>`$`+Math.round(e).toLocaleString(`en-US`);function t(){return Math.sqrt(-2*Math.log(Math.random()||1e-10))*Math.cos(2*Math.PI*Math.random())}function n(){return`
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
  `}function r(){document.getElementById(`rc-calc-btn`)?.addEventListener(`click`,()=>{let n=e=>{document.getElementById(`rc-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},r=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n},i=e=>Number(document.getElementById(e).value),a=i(`rc-current-age`),o=i(`rc-retirement-age`),s=i(`rc-savings`),c=i(`rc-contribution`),l=i(`rc-return`)/100,u=i(`rc-volatility`)/100,d=i(`rc-income`),f=i(`rc-inflation`)/100,p=i(`rc-years-retired`);if(r(`rc-current-age`)===null)return n(`Please enter your current age.`);if(r(`rc-retirement-age`)===null)return n(`Please enter a target retirement age.`);if(o<=a)return n(`Retirement age must be greater than your current age.`);if(r(`rc-savings`)===null)return n(`Please enter your current savings (enter 0 if none).`);if(r(`rc-contribution`)===null)return n(`Please enter your monthly contribution (enter 0 if none).`);if(r(`rc-return`)===null)return n(`Please enter an expected annual return.`);if(r(`rc-volatility`)===null)return n(`Please enter an annual volatility.`);if(r(`rc-income`)===null)return n(`Please enter your desired annual retirement income.`);if(r(`rc-inflation`)===null)return n(`Please enter an inflation rate.`);if(r(`rc-years-retired`)===null)return n(`Please enter how many years you expect to be in retirement.`);let m=o-a;if(m<=0)return;let h=d*(1+f)**+m,g=[],_=0;for(let e=0;e<500;e++){let e=s;for(let n=0;n<m;n++){let n=l+u*t();e=e*(1+n)+c*12,e<0&&(e=0)}g.push(e);let n=e;for(let e=0;e<p;e++){let e=l+u*t();if(n=n*(1+e)-h,n<=0){n=0;break}}n>0&&_++}g.sort((e,t)=>e-t);let v=g[250],y=g[50],b=g[450],x=_/500*100,S=x>=80?`tool-metric-positive`:x>=60?`tool-metric-warning`:`tool-metric-negative`,C=x>=80?`Strong — portfolio likely sustains withdrawals`:x>=60?`Moderate — consider increasing contributions`:`At risk — significant shortfall in many scenarios`;document.getElementById(`rc-results`).innerHTML=`
      <h3>Results</h3>
      <div class="tool-metric">
        <div class="tool-metric-label">Success Probability</div>
        <div class="tool-metric-value ${S}">${x.toFixed(0)}%</div>
        <div class="tool-metric-sub">${C}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Projected Balance at Age ${o}</div>
        <div class="tool-metric-value">${e(v)}</div>
        <div class="tool-metric-sub">Median across 500 simulations</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Range (10th – 90th Percentile)</div>
        <div class="tool-metric-value" style="font-size:1.15rem">${e(y)} – ${e(b)}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Annual Income Needed (inflation-adjusted)</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${e(h)}</div>
        <div class="tool-metric-sub">In ${m} years at ${(f*100).toFixed(1)}% inflation</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Implied Portfolio Multiple at Retirement</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${(v/h).toFixed(1)}x annual income</div>
        <div class="tool-metric-sub">Rule of thumb: 25× is often cited as a target</div>
      </div>
    `})}export{r as initRetirementCalculator,n as renderRetirementCalculator};