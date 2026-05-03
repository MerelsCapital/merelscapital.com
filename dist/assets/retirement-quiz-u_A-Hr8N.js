var e=[{text:`How much of your income are you currently saving for retirement?`,options:[`Less than 5%`,`5–10%`,`10–15%`,`More than 15%`]},{text:`Do you have a dedicated retirement account (401k, IRA, etc.)?`,options:[`No retirement account`,`Yes, but contributions are inconsistent`,`Yes, and I contribute regularly`,`Yes, and I am maximising contributions`]},{text:`How many months of expenses do you have in an emergency fund?`,options:[`Less than 1 month`,`1–3 months`,`3–6 months`,`More than 6 months`]},{text:`Do you have a plan for healthcare coverage in retirement?`,options:[`No, I haven't thought about it`,`Aware of the issue but no plan yet`,`Partial plan (Medicare + supplemental)`,`Comprehensive plan including long-term care`]},{text:`Do you know how much you will need to retire comfortably?`,options:[`No idea`,`I have a rough guess`,`I have done some research`,`I have a detailed, written plan`]},{text:`What is your current debt situation?`,options:[`Significant high-interest debt`,`Moderate debt with a repayment plan`,`Only mortgage or low-interest debt`,`Little to no debt`]},{text:`Have you planned for income sources in retirement?`,options:[`Haven't thought about it`,`Social Security only`,`Social Security plus some savings`,`Multiple streams: SS, savings, pension, or part-time income`]},{text:`How would you describe your investment strategy?`,options:[`I don't invest`,`Basic investments, no clear strategy`,`A strategy, but reviewed infrequently`,`Clear, regularly reviewed strategy`]},{text:`Do you have estate planning documents in place (will, power of attorney, etc.)?`,options:[`None`,`I've thought about it but haven't acted`,`Some basics in place`,`Comprehensive estate plan completed`]},{text:`How confident are you that you are on track for retirement?`,options:[`Not at all confident`,`Somewhat worried`,`Reasonably confident`,`Very confident with a clear plan`]}],t=[{min:0,max:9,label:`Early Stage`,color:`#b91c1c`,desc:`Your retirement foundation is still being built. The good news: starting now has an outsized impact. Focus first on building an emergency fund and opening a retirement account, even with small contributions.`},{min:10,max:18,label:`Building Momentum`,color:`#b45309`,desc:`You have made a start and have some building blocks in place. Now is the time to increase consistency — in contributions, in planning, and in reviewing your strategy at least annually.`},{min:19,max:24,label:`On Track`,color:`#1a7a4a`,desc:`You are demonstrating solid retirement habits across most dimensions. Look for gaps — healthcare planning and estate documents are common areas where otherwise well-prepared people fall short.`},{min:25,max:30,label:`Well Prepared`,color:`#1B2774`,desc:`You have built a comprehensive retirement foundation. The priority now is maintaining your plan, reviewing it as life changes, and ensuring your estate and healthcare plans remain current.`}];function n(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Retirement Readiness Quiz</h1>
          <p>Answer 10 questions to get a snapshot of your retirement preparedness across savings, income planning, healthcare, and estate planning.</p>
        </div>
      </div>
      <div class="tool-quiz-body">
        ${e.map((t,n)=>`
    <div class="quiz-question">
      <div class="quiz-question-number">Question ${n+1} of ${e.length}</div>
      <div class="quiz-question-text">${t.text}</div>
      <div class="quiz-options">
        ${t.options.map((e,t)=>`
          <label class="quiz-option">
            <input type="radio" name="q${n}" value="${t}" />
            <span>${e}</span>
          </label>
        `).join(``)}
      </div>
    </div>
  `).join(``)}
        <button class="tool-calculate-btn" id="rq-submit-btn">See My Results</button>
        <div id="rq-results" hidden></div>
      </div>
      <p class="tool-disclaimer">This quiz is for educational purposes only and does not constitute financial advice. For a personalised retirement plan, consult a qualified financial advisor.</p>
    </div>
  `}function r(){document.getElementById(`rq-submit-btn`)?.addEventListener(`click`,()=>{let n=0,r=0;for(let t=0;t<e.length;t++){let e=document.querySelector(`input[name="q${t}"]:checked`);e?n+=Number(e.value):r++}if(r>0){alert(`Please answer all questions (${r} remaining).`);return}let i=t.find(e=>n>=e.min&&n<=e.max),a=Math.round(n/30*100),o=document.getElementById(`rq-results`);o.hidden=!1,o.innerHTML=`
      <div class="quiz-result-card" style="background:${i.color}">
        <div class="quiz-result-score">${n} / 30</div>
        <div class="quiz-result-label">${i.label}</div>
        <div class="tool-progress-bar" style="max-width:320px;margin:1rem auto 1.25rem">
          <div class="tool-progress-fill" style="width:${a}%;background:rgba(255,255,255,0.7)"></div>
        </div>
        <div class="quiz-result-desc">${i.desc}</div>
      </div>
      <div style="text-align:center;margin-top:2rem">
        <p style="color:var(--text-light);margin-bottom:1rem">Want a personalised plan based on where you are today?</p>
        <button data-action="open-booking" class="tool-calculate-btn" style="max-width:280px;margin:0 auto">Talk to an Advisor</button>
      </div>
    `,o.scrollIntoView({behavior:`smooth`})})}export{r as initRetirementQuiz,n as renderRetirementQuiz};