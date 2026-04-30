const QUESTIONS = [
  {
    text: 'How long before you expect to need most of these funds?',
    options: [
      { label: 'Less than 3 years', score: 1 },
      { label: '3–7 years', score: 2 },
      { label: '7–15 years', score: 3 },
      { label: 'More than 15 years', score: 4 },
    ],
  },
  {
    text: 'If your portfolio dropped 25% in value over three months, you would:',
    options: [
      { label: 'Sell everything to prevent further losses', score: 1 },
      { label: 'Sell some holdings to reduce risk', score: 2 },
      { label: 'Hold steady and wait for recovery', score: 3 },
      { label: 'Buy more while prices are low', score: 4 },
    ],
  },
  {
    text: 'What is your primary investment goal?',
    options: [
      { label: 'Preserve the value I already have', score: 1 },
      { label: 'Generate steady, reliable income', score: 2 },
      { label: 'Moderate growth with some stability', score: 3 },
      { label: 'Maximum long-term growth', score: 4 },
    ],
  },
  {
    text: 'Which investment scenario would you choose?',
    options: [
      { label: 'Guaranteed 3% return annually', score: 1 },
      { label: '50% chance of 8%, 50% chance of 2%', score: 2 },
      { label: '50% chance of 15%, 50% chance of −3%', score: 3 },
      { label: '50% chance of 25%, 50% chance of −12%', score: 4 },
    ],
  },
  {
    text: 'What portion of your total savings does this investment represent?',
    options: [
      { label: 'Almost all of it — my primary financial resource', score: 1 },
      { label: 'More than half of my savings', score: 2 },
      { label: 'About half', score: 3 },
      { label: 'A small portion — I have significant other assets', score: 4 },
    ],
  },
  {
    text: 'How stable is your income and employment?',
    options: [
      { label: 'Uncertain or highly variable', score: 1 },
      { label: 'Somewhat stable', score: 2 },
      { label: 'Stable employment with reliable income', score: 3 },
      { label: 'Multiple income sources — very stable', score: 4 },
    ],
  },
  {
    text: 'How would a 30% portfolio decline affect your financial life?',
    options: [
      { label: 'It would be devastating to my lifestyle', score: 1 },
      { label: 'It would cause significant financial hardship', score: 2 },
      { label: 'It would be uncomfortable but manageable', score: 3 },
      { label: 'It would have little effect on my day-to-day life', score: 4 },
    ],
  },
  {
    text: 'How would you describe your investment knowledge and experience?',
    options: [
      { label: 'Little to no investing experience', score: 1 },
      { label: 'Basic knowledge of stocks and bonds', score: 2 },
      { label: 'Comfortable with most investment types', score: 3 },
      { label: 'Experienced across multiple asset classes', score: 4 },
    ],
  },
]

const PROFILES = [
  {
    min: 8, max: 13, label: 'Conservative',
    desc: 'Capital preservation is your priority. You prefer stability over growth and are uncomfortable with significant fluctuations in portfolio value.',
    stocks: 20, bonds: 65, alt: 15,
    color: '#1B2774',
  },
  {
    min: 14, max: 19, label: 'Moderately Conservative',
    desc: 'You want some growth but lean heavily toward stability. A modest equity allocation with a strong fixed-income core suits your temperament.',
    stocks: 40, bonds: 50, alt: 10,
    color: '#2535a0',
  },
  {
    min: 20, max: 25, label: 'Moderate',
    desc: 'You seek a balance between growth and stability. You can tolerate moderate fluctuations in exchange for higher long-term returns.',
    stocks: 60, bonds: 35, alt: 5,
    color: '#1a7a4a',
  },
  {
    min: 26, max: 28, label: 'Moderately Aggressive',
    desc: 'Growth is your primary focus. You are comfortable with meaningful short-term volatility in pursuit of superior long-term returns.',
    stocks: 78, bonds: 17, alt: 5,
    color: '#b45309',
  },
  {
    min: 29, max: 32, label: 'Aggressive',
    desc: 'Maximum long-term growth is your objective. You have a high tolerance for volatility and a long time horizon to ride out downturns.',
    stocks: 90, bonds: 10, alt: 0,
    color: '#b91c1c',
  },
]

export function renderRiskTolerance(): string {
  const questionsHtml = QUESTIONS.map((q, qi) => `
    <div class="quiz-question">
      <div class="quiz-question-number">Question ${qi + 1} of ${QUESTIONS.length}</div>
      <div class="quiz-question-text">${q.text}</div>
      <div class="quiz-options">
        ${q.options.map(opt => `
          <label class="quiz-option">
            <input type="radio" name="rtq${qi}" value="${opt.score}" />
            <span>${opt.label}</span>
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
          <h1>Risk Tolerance Questionnaire</h1>
          <p>Eight questions to assess your investment comfort level and suggest a portfolio allocation suited to your temperament and goals.</p>
        </div>
      </div>
      <div class="tool-quiz-body">
        ${questionsHtml}
        <button class="tool-calculate-btn" id="rtq-submit-btn">See My Risk Profile</button>
        <div id="rtq-results" hidden></div>
      </div>
      <p class="tool-disclaimer">This questionnaire is for educational purposes only. Risk tolerance is one input among many in building an investment strategy. Consult a financial advisor for personalised portfolio recommendations.</p>
    </div>
  `
}

export function initRiskTolerance(): void {
  document.getElementById('rtq-submit-btn')?.addEventListener('click', () => {
    let score = 0
    let unanswered = 0
    for (let i = 0; i < QUESTIONS.length; i++) {
      const sel = document.querySelector<HTMLInputElement>(`input[name="rtq${i}"]:checked`)
      if (sel) score += Number(sel.value)
      else unanswered++
    }
    if (unanswered > 0) { alert(`Please answer all questions (${unanswered} remaining).`); return }

    const profile = PROFILES.find(p => score >= p.min && score <= p.max)!

    const allocationBars = [
      { label: 'Equities', pct: profile.stocks, color: 'navy' },
      { label: 'Fixed Income', pct: profile.bonds, color: 'green' },
      { label: 'Alternatives / Cash', pct: profile.alt, color: 'amber' },
    ].map(a => `
      <div class="tool-bar-row">
        <div class="tool-bar-label"><span>${a.label}</span><span>${a.pct}%</span></div>
        <div class="tool-bar"><div class="tool-bar-fill ${a.color}" style="width:${a.pct}%"></div></div>
      </div>
    `).join('')

    const resultsEl = document.getElementById('rtq-results')!
    resultsEl.hidden = false
    resultsEl.innerHTML = `
      <div class="quiz-result-card" style="background:${profile.color}">
        <div class="quiz-result-score">${score} / 32</div>
        <div class="quiz-result-label">${profile.label}</div>
        <div class="quiz-result-desc">${profile.desc}</div>
      </div>
      <div style="margin-top:2rem;padding:1.5rem;background:var(--off-white);border-radius:8px;border:1px solid var(--gray-light)">
        <h3 style="font-size:0.9rem;font-weight:600;color:var(--navy);margin-bottom:1.25rem">Suggested Allocation</h3>
        ${allocationBars}
      </div>
      <div style="text-align:center;margin-top:2rem">
        <p style="color:var(--text-light);margin-bottom:1rem">Want a portfolio built around your specific situation and goals?</p>
        <button data-action="open-booking" class="tool-calculate-btn" style="max-width:280px;margin:0 auto">Talk to an Advisor</button>
      </div>
    `
    resultsEl.scrollIntoView({ behavior: 'smooth' })
  })
}
