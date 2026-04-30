const QUESTIONS = [
  {
    text: 'How much of your income are you currently saving for retirement?',
    options: ['Less than 5%', '5–10%', '10–15%', 'More than 15%'],
  },
  {
    text: 'Do you have a dedicated retirement account (401k, IRA, etc.)?',
    options: [
      'No retirement account',
      'Yes, but contributions are inconsistent',
      'Yes, and I contribute regularly',
      'Yes, and I am maximising contributions',
    ],
  },
  {
    text: 'How many months of expenses do you have in an emergency fund?',
    options: ['Less than 1 month', '1–3 months', '3–6 months', 'More than 6 months'],
  },
  {
    text: 'Do you have a plan for healthcare coverage in retirement?',
    options: [
      "No, I haven't thought about it",
      'Aware of the issue but no plan yet',
      'Partial plan (Medicare + supplemental)',
      'Comprehensive plan including long-term care',
    ],
  },
  {
    text: 'Do you know how much you will need to retire comfortably?',
    options: [
      'No idea',
      'I have a rough guess',
      'I have done some research',
      'I have a detailed, written plan',
    ],
  },
  {
    text: 'What is your current debt situation?',
    options: [
      'Significant high-interest debt',
      'Moderate debt with a repayment plan',
      'Only mortgage or low-interest debt',
      'Little to no debt',
    ],
  },
  {
    text: 'Have you planned for income sources in retirement?',
    options: [
      "Haven't thought about it",
      'Social Security only',
      'Social Security plus some savings',
      'Multiple streams: SS, savings, pension, or part-time income',
    ],
  },
  {
    text: 'How would you describe your investment strategy?',
    options: [
      "I don't invest",
      'Basic investments, no clear strategy',
      'A strategy, but reviewed infrequently',
      'Clear, regularly reviewed strategy',
    ],
  },
  {
    text: 'Do you have estate planning documents in place (will, power of attorney, etc.)?',
    options: [
      'None',
      "I've thought about it but haven't acted",
      'Some basics in place',
      'Comprehensive estate plan completed',
    ],
  },
  {
    text: 'How confident are you that you are on track for retirement?',
    options: [
      'Not at all confident',
      'Somewhat worried',
      'Reasonably confident',
      'Very confident with a clear plan',
    ],
  },
]

const TIERS = [
  {
    min: 0,
    max: 9,
    label: 'Early Stage',
    color: '#b91c1c',
    desc: 'Your retirement foundation is still being built. The good news: starting now has an outsized impact. Focus first on building an emergency fund and opening a retirement account, even with small contributions.',
  },
  {
    min: 10,
    max: 18,
    label: 'Building Momentum',
    color: '#b45309',
    desc: 'You have made a start and have some building blocks in place. Now is the time to increase consistency — in contributions, in planning, and in reviewing your strategy at least annually.',
  },
  {
    min: 19,
    max: 24,
    label: 'On Track',
    color: '#1a7a4a',
    desc: 'You are demonstrating solid retirement habits across most dimensions. Look for gaps — healthcare planning and estate documents are common areas where otherwise well-prepared people fall short.',
  },
  {
    min: 25,
    max: 30,
    label: 'Well Prepared',
    color: '#1B2774',
    desc: 'You have built a comprehensive retirement foundation. The priority now is maintaining your plan, reviewing it as life changes, and ensuring your estate and healthcare plans remain current.',
  },
]

export function renderRetirementQuiz(): string {
  const questionsHtml = QUESTIONS.map((q, qi) => `
    <div class="quiz-question">
      <div class="quiz-question-number">Question ${qi + 1} of ${QUESTIONS.length}</div>
      <div class="quiz-question-text">${q.text}</div>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `
          <label class="quiz-option">
            <input type="radio" name="q${qi}" value="${oi}" />
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('')

  return `
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Retirement Readiness Quiz</h1>
          <p>Answer 10 questions to get a snapshot of your retirement preparedness across savings, income planning, healthcare, and estate planning.</p>
        </div>
      </div>
      <div class="tool-quiz-body">
        ${questionsHtml}
        <button class="tool-calculate-btn" id="rq-submit-btn">See My Results</button>
        <div id="rq-results" hidden></div>
      </div>
      <p class="tool-disclaimer">This quiz is for educational purposes only and does not constitute financial advice. For a personalised retirement plan, consult a qualified financial advisor.</p>
    </div>
  `
}

export function initRetirementQuiz(): void {
  document.getElementById('rq-submit-btn')?.addEventListener('click', () => {
    let score = 0
    let unanswered = 0
    for (let i = 0; i < QUESTIONS.length; i++) {
      const sel = document.querySelector<HTMLInputElement>(`input[name="q${i}"]:checked`)
      if (sel) score += Number(sel.value)
      else unanswered++
    }
    if (unanswered > 0) {
      alert(`Please answer all questions (${unanswered} remaining).`)
      return
    }
    const tier = TIERS.find(t => score >= t.min && score <= t.max)!
    const pct  = Math.round((score / 30) * 100)

    const resultsEl = document.getElementById('rq-results')!
    resultsEl.hidden = false
    resultsEl.innerHTML = `
      <div class="quiz-result-card" style="background:${tier.color}">
        <div class="quiz-result-score">${score} / 30</div>
        <div class="quiz-result-label">${tier.label}</div>
        <div class="tool-progress-bar" style="max-width:320px;margin:1rem auto 1.25rem">
          <div class="tool-progress-fill" style="width:${pct}%;background:rgba(255,255,255,0.7)"></div>
        </div>
        <div class="quiz-result-desc">${tier.desc}</div>
      </div>
      <div style="text-align:center;margin-top:2rem">
        <p style="color:var(--text-light);margin-bottom:1rem">Want a personalised plan based on where you are today?</p>
        <button data-action="open-booking" class="tool-calculate-btn" style="max-width:280px;margin:0 auto">Talk to an Advisor</button>
      </div>
    `
    resultsEl.scrollIntoView({ behavior: 'smooth' })
  })
}
