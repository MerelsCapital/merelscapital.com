var e=e=>`$`+Math.round(e).toLocaleString(`en-US`);function t(e){return e<=1954?66:e===1955?66.16666666666667:e===1956?66.33333333333333:e===1957?66.5:e===1958?66.66666666666667:e===1959?66.83333333333333:67}function n(e){return e<=1954?`66`:e===1955?`66 + 2 months`:e===1956?`66 + 4 months`:e===1957?`66 + 6 months`:e===1958?`66 + 8 months`:e===1959?`66 + 10 months`:`67`}function r(e){let t=e*.75/12,n=1174,r=7078,i=0;return i=t<=n?t*.9:t<=r?n*.9+(t-n)*.32:n*.9+(r-n)*.32+(t-r)*.15,Math.min(i,3822)}function i(){let e=new Date().getFullYear();return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Social Security Optimizer</h1>
          <p>Estimate your Social Security benefits at different claiming ages and explore spousal strategies to maximise your lifetime income.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="ss-birth-year">Your Birth Year</label>
              <input type="number" id="ss-birth-year" value="${e-55}" min="1944" max="${e-40}" />
            </div>
            <div class="tool-field">
              <label for="ss-income">Current Annual Income ($)</label>
              <input type="number" id="ss-income" value="90000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ss-marital">Marital Status</label>
              <select id="ss-marital">
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
            <div id="ss-spouse-section" hidden>
              <div class="tool-field">
                <label for="ss-spouse-income">Spouse Annual Income ($) <span class="tool-label-hint">0 if not working</span></label>
                <input type="number" id="ss-spouse-income" value="60000" min="0" />
              </div>
              <div class="tool-field">
                <label for="ss-spouse-birth-year">Spouse Birth Year</label>
                <input type="number" id="ss-spouse-birth-year" value="${e-53}" min="1944" max="${e-40}" />
              </div>
            </div>
            <button class="tool-calculate-btn" id="ss-calc-btn">Estimate Benefits</button>
          </div>
          <div class="tool-results" id="ss-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see estimated benefits at each claiming age and breakeven analysis.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Estimates are based on simplified Social Security benefit formulas and assume a consistent career earnings history. Actual benefits are determined by the SSA based on your full earnings record. This is for educational purposes only.</p>
    </div>
  `}function a(){let i=document.getElementById(`ss-marital`),a=document.getElementById(`ss-spouse-section`);i.addEventListener(`change`,()=>{a.hidden=i.value!==`married`}),document.getElementById(`ss-calc-btn`)?.addEventListener(`click`,()=>{let a=e=>{document.getElementById(`ss-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},o=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n},s=new Date().getFullYear();if(o(`ss-birth-year`)===null)return a(`Please enter your birth year.`);let c=Number(document.getElementById(`ss-birth-year`).value);if(c<1924||c>s-40)return a(`Please enter a valid birth year.`);if(o(`ss-income`)===null||Number(document.getElementById(`ss-income`).value)<0)return a(`Please enter your current annual income.`);if(i.value===`married`){if(o(`ss-spouse-income`)===null)return a(`Please enter your spouse's annual income (enter 0 if not working).`);if(o(`ss-spouse-birth-year`)===null)return a(`Please enter your spouse's birth year.`)}let l=Number(document.getElementById(`ss-birth-year`).value),u=Number(document.getElementById(`ss-income`).value),d=i.value===`married`,f=d?Number(document.getElementById(`ss-spouse-income`).value):0,p=d?Number(document.getElementById(`ss-spouse-birth-year`).value):0,m=t(l),h=n(l),g=r(u),_=(m-62)*12,v=0;v=_<=36?5/900*_:5/900*36+(_-36)*(5/1200);let y=g*(1-v),b=g,x=g*(1+(70-m)*.08),S=Math.round(62+b*12*(m-62)/((b-y)*12)),C=Math.round(m+x*12*(70-m)/((x-b)*12)),w=``;if(d&&f===0)w=`
        <hr class="tool-divider" />
        <div class="tool-metric">
          <div class="tool-metric-label">Spousal Benefit (non-working spouse at FRA)</div>
          <div class="tool-metric-value" style="font-size:1.15rem">${e(Math.min(g*.5,r(0))*12)}/yr</div>
          <div class="tool-metric-sub">50% of your PIA — available at your spouse's FRA</div>
        </div>
      `;else if(d&&f>0){let t=r(f);w=`
        <hr class="tool-divider" />
        <div class="tool-metric">
          <div class="tool-metric-label">Spouse Estimated Benefit at FRA (age ${n(p)})</div>
          <div class="tool-metric-value" style="font-size:1.15rem">${e(t*12)}/yr</div>
          <div class="tool-metric-sub">Combined household at both FRAs: ${e((g+t)*12)}/yr</div>
        </div>
      `}document.getElementById(`ss-results`).innerHTML=`
      <h3>Estimated Monthly Benefits</h3>
      <table class="tool-table">
        <thead><tr><th>Claiming Age</th><th>Monthly</th><th>Annual</th><th>vs FRA</th></tr></thead>
        <tbody>
          <tr>
            <td>Age 62 (earliest)</td>
            <td>${e(y)}</td>
            <td>${e(y*12)}</td>
            <td style="color:#b91c1c">−${((1-y/g)*100).toFixed(0)}%</td>
          </tr>
          <tr style="background:rgba(27,39,116,0.05)">
            <td>Age ${h} (FRA)</td>
            <td>${e(b)}</td>
            <td>${e(b*12)}</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Age 70 (maximum)</td>
            <td>${e(x)}</td>
            <td>${e(x*12)}</td>
            <td style="color:#1a7a4a">+${((x/g-1)*100).toFixed(0)}%</td>
          </tr>
        </tbody>
      </table>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Breakeven: Claiming at 62 vs FRA</div>
        <div class="tool-metric-value" style="font-size:1.2rem">Age ${S}</div>
        <div class="tool-metric-sub">If you live past this age, waiting to FRA pays more in total</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Breakeven: Claiming at FRA vs Age 70</div>
        <div class="tool-metric-value" style="font-size:1.2rem">Age ${C}</div>
        <div class="tool-metric-sub">If you live past this age, delaying to 70 pays more in total</div>
      </div>
      ${w}
    `})}export{a as initSocialSecurity,i as renderSocialSecurity};