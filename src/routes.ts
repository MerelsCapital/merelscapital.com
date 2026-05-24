export interface RouteMeta {
  title: string
  description: string
}

export interface RouteConfig {
  path: string
  modulePath: string
  renderFn: string
  initFn?: string
  isTool?: boolean
  meta: RouteMeta
}

export const routes: RouteConfig[] = [
  {
    path: 'home',
    modulePath: './pages/home.ts',
    renderFn: 'renderHome',
    initFn: 'initHome',
    meta: {
      title: 'Merels Capital – Independent Wealth Management',
      description: 'Merels Capital provides independent, unconflicted wealth management for individuals, families, and institutions in Denver, Colorado and nationally.',
    },
  },
  {
    path: 'about',
    modulePath: './pages/about.ts',
    renderFn: 'renderAbout',
    meta: {
      title: 'About Us | Merels Capital',
      description: 'Learn about Merels Capital — an independent, fee-only registered investment adviser serving individuals, families, and businesses.',
    },
  },
  {
    path: 'individuals',
    modulePath: './pages/individuals.ts',
    renderFn: 'renderIndividuals',
    meta: {
      title: 'Wealth Management for Individuals & Families | Merels Capital',
      description: 'Comprehensive, unconflicted wealth management for individuals and families. Investment management, financial planning, tax strategy, and estate planning under one roof.',
    },
  },
  {
    path: 'family-offices',
    modulePath: './pages/family-offices.ts',
    renderFn: 'renderFamilyOffices',
    meta: {
      title: 'Family Office Services | Merels Capital',
      description: 'Institutional-quality family office services for high-net-worth families. Consolidated reporting, multi-generational planning, and coordinated asset management.',
    },
  },
  {
    path: 'businesses',
    modulePath: './pages/small-businesses.ts',
    renderFn: 'renderSmallBusinesses',
    meta: {
      title: 'Business Financial Planning | Merels Capital',
      description: 'Financial planning and advisory services for business owners. Retirement plans, employee benefits, succession planning, and personal wealth integration.',
    },
  },
  {
    path: 'articles',
    modulePath: './pages/articles.ts',
    renderFn: 'renderArticles',
    meta: {
      title: 'Articles & Insights | Merels Capital',
      description: 'Investment perspectives and financial planning insights from the team at Merels Capital.',
    },
  },
  {
    path: 'articles/gold-2025',
    modulePath: './pages/article-gold-2025.ts',
    renderFn: 'renderArticleGold2025',
    meta: {
      title: 'The Case for Gold in 2025 | Merels Capital',
      description: 'Why gold deserves a place in a diversified portfolio in 2025 — examining the macro drivers, valuation, and allocation considerations.',
    },
  },
  {
    path: 'articles/private-credit-2026',
    modulePath: './pages/article-private-credit-2026.ts',
    renderFn: 'renderArticlePrivateCredit2026',
    meta: {
      title: 'Private Credit in 2026 | Merels Capital',
      description: 'An analysis of the private credit market heading into 2026 — opportunity, risk, and what it means for investor portfolios.',
    },
  },
  {
    path: 'articles/usd-2026',
    modulePath: './pages/article-usd-2026.ts',
    renderFn: 'renderArticleUsd2026',
    meta: {
      title: 'The US Dollar Outlook for 2026 | Merels Capital',
      description: 'What the trajectory of the US dollar means for investors in 2026 — currency dynamics, global capital flows, and portfolio implications.',
    },
  },
  {
    path: 'articles/energy-2026',
    modulePath: './pages/article-energy-2026.ts',
    renderFn: 'renderArticleEnergy2026',
    meta: {
      title: 'Energy Markets in 2026 | Merels Capital',
      description: 'The investment landscape for energy in 2026 — examining supply dynamics, policy shifts, and opportunities across the energy sector.',
    },
  },
  {
    path: 'articles/fed-2026',
    modulePath: './pages/article-fed-2026.ts',
    renderFn: 'renderArticleFed2026',
    meta: {
      title: 'The Federal Reserve in 2026 | Merels Capital',
      description: 'How Federal Reserve policy is shaping markets in 2026 and what investors should consider as interest rate expectations evolve.',
    },
  },
  {
    path: 'guides/trusts',
    modulePath: './pages/guides/trusts.ts',
    renderFn: 'renderGuideTrusts',
    meta: {
      title: 'A Practical Guide to Trusts | Merels Capital',
      description: 'A comprehensive guide to trusts for individuals and families — revocable and irrevocable structures, estate planning uses, and when a trust makes sense.',
    },
  },
  {
    path: 'guides/retirement-planning',
    modulePath: './pages/guides/retirement-planning.ts',
    renderFn: 'renderGuideRetirementPlanning',
    meta: {
      title: 'Retirement Planning: A Complete Overview | Merels Capital',
      description: 'A complete guide to retirement planning — savings strategies, Social Security timing, withdrawal sequencing, healthcare costs, and turning assets into income.',
    },
  },
  {
    path: 'guides/tax-planning',
    modulePath: './pages/guides/tax-planning.ts',
    renderFn: 'renderGuideTaxPlanning',
    meta: {
      title: 'Tax Planning for Business Owners | Merels Capital',
      description: 'A practical guide to tax planning for business owners — entity structure, retirement plan deductions, income shifting, and year-end strategies.',
    },
  },
  {
    path: 'guides/cash-flow',
    modulePath: './pages/guides/cash-flow.ts',
    renderFn: 'renderGuideCashFlow',
    meta: {
      title: 'Cash Flow Management and Forecasting | Merels Capital',
      description: 'A business owner\'s guide to cash flow — forecasting, working capital management, debt structuring, and building financial resilience.',
    },
  },
  {
    path: 'guides/employee-benefits',
    modulePath: './pages/guides/employee-benefits.ts',
    renderFn: 'renderGuideEmployeeBenefits',
    meta: {
      title: 'Employee Benefits Guide for Business Owners | Merels Capital',
      description: 'A strategic guide to employee benefits for small business owners — retirement plans, health coverage, life and disability insurance, and executive compensation.',
    },
  },
  {
    path: 'contact',
    modulePath: './pages/contact.ts',
    renderFn: 'renderContact',
    initFn: 'initContact',
    meta: {
      title: 'Contact Us | Merels Capital',
      description: 'Get in touch with Merels Capital. No obligation, no pressure — tell us about your situation and we\'ll be in touch within one business day.',
    },
  },
  {
    path: 'tools',
    modulePath: './pages/tools.ts',
    renderFn: 'renderTools',
    meta: {
      title: 'Free Financial Planning Tools | Merels Capital',
      description: 'Free calculators and assessments for retirement, taxes, savings, and investing. Run the numbers on your situation and bring the results into a conversation with us.',
    },
  },
  {
    path: 'tools/retirement-calculator',
    modulePath: './pages/tools/retirement-calculator.ts',
    renderFn: 'renderRetirementCalculator',
    initFn: 'initRetirementCalculator',
    isTool: true,
    meta: {
      title: 'Retirement Savings Calculator | Merels Capital',
      description: 'Estimate how much you need to save for retirement and whether you\'re on track. Adjust contributions, returns, and timeline to model different scenarios.',
    },
  },
  {
    path: 'tools/retirement-quiz',
    modulePath: './pages/tools/retirement-quiz.ts',
    renderFn: 'renderRetirementQuiz',
    initFn: 'initRetirementQuiz',
    isTool: true,
    meta: {
      title: 'Retirement Readiness Quiz | Merels Capital',
      description: 'Answer a few questions to assess your retirement readiness and identify gaps in your plan.',
    },
  },
  {
    path: 'tools/social-security',
    modulePath: './pages/tools/social-security.ts',
    renderFn: 'renderSocialSecurity',
    initFn: 'initSocialSecurity',
    isTool: true,
    meta: {
      title: 'Social Security Timing Calculator | Merels Capital',
      description: 'Find the optimal age to claim Social Security benefits based on your health, income needs, and break-even analysis.',
    },
  },
  {
    path: 'tools/rmd-planner',
    modulePath: './pages/tools/rmd-planner.ts',
    renderFn: 'renderRmdPlanner',
    initFn: 'initRmdPlanner',
    isTool: true,
    meta: {
      title: 'Required Minimum Distribution Planner | Merels Capital',
      description: 'Calculate your annual required minimum distributions from IRAs and retirement accounts and plan your withdrawal strategy.',
    },
  },
  {
    path: 'tools/roth-conversion',
    modulePath: './pages/tools/roth-conversion.ts',
    renderFn: 'renderRothConversion',
    initFn: 'initRothConversion',
    isTool: true,
    meta: {
      title: 'Roth Conversion Calculator | Merels Capital',
      description: 'Model the long-term impact of converting traditional IRA or 401(k) funds to a Roth account and find the optimal conversion amount.',
    },
  },
  {
    path: 'tools/401k-rollover',
    modulePath: './pages/tools/401k-rollover.ts',
    renderFn: 'renderRollover401k',
    initFn: 'initRollover401k',
    isTool: true,
    meta: {
      title: '401(k) Rollover Guide | Merels Capital',
      description: 'Understand your options when leaving an employer — rolling over a 401(k) to an IRA, a new plan, or taking a distribution.',
    },
  },
  {
    path: 'tools/529-planner',
    modulePath: './pages/tools/529-planner.ts',
    renderFn: 'render529Planner',
    initFn: 'init529Planner',
    isTool: true,
    meta: {
      title: '529 College Savings Planner | Merels Capital',
      description: 'Estimate how much to save for college using a 529 plan and project future account balances based on contributions and investment growth.',
    },
  },
  {
    path: 'tools/risk-tolerance',
    modulePath: './pages/tools/risk-tolerance.ts',
    renderFn: 'renderRiskTolerance',
    initFn: 'initRiskTolerance',
    isTool: true,
    meta: {
      title: 'Investment Risk Tolerance Assessment | Merels Capital',
      description: 'Identify your investment risk tolerance and see what asset allocation might be appropriate for your goals and timeline.',
    },
  },
  {
    path: 'tools/tax-savings',
    modulePath: './pages/tools/tax-savings.ts',
    renderFn: 'renderTaxSavings',
    initFn: 'initTaxSavings',
    isTool: true,
    meta: {
      title: 'Tax Savings Estimator | Merels Capital',
      description: 'Estimate how much you could save in taxes through retirement plan contributions, deductions, and other strategies available to business owners.',
    },
  },
  {
    path: 'tools/savings-goal',
    modulePath: './pages/tools/savings-goal.ts',
    renderFn: 'renderSavingsGoal',
    initFn: 'initSavingsGoal',
    isTool: true,
    meta: {
      title: 'Savings Goal Calculator | Merels Capital',
      description: 'Calculate how much you need to save each month to reach a specific financial goal — from an emergency fund to a major purchase.',
    },
  },
]
