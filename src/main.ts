import './style.css'
import { registerRoute, initRouter } from './router.js'
import { renderHeader } from './components/header.js'
import { renderFooter } from './components/footer.js'
import { renderNewsletterSignup, initNewsletterSignup, initFooterNewsletter } from './components/newsletter.js'

type PageModule = { render: () => string; init?: () => void }

function registerToolRoute(name: string, title: string, description: string, loader: () => Promise<PageModule>) {
  registerRoute(name, async () => {
    const { render, init } = await loader()
    return {
      html: render() + renderNewsletterSignup(),
      init: () => { init?.(); initNewsletterSignup() },
      meta: { title: `${title} | Merels Capital`, description },
    }
  })
}

registerRoute('home', async () => {
  const { renderHome, initHome } = await import('./pages/home.js')
  return {
    html: renderHome(),
    init: initHome,
    meta: {
      title: 'Merels Capital – Independent Wealth Management',
      description: 'Merels Capital provides independent, unconflicted wealth management for individuals, families, and institutions in Denver, Colorado and nationally.',
    },
  }
})
registerRoute('about', async () => {
  const { renderAbout } = await import('./pages/about.js')
  return {
    html: renderAbout(),
    meta: {
      title: 'About Us | Merels Capital',
      description: 'Learn about Merels Capital — an independent, fee-only registered investment adviser serving individuals, families, and businesses.',
    },
  }
})
registerRoute('individuals', async () => {
  const { renderIndividuals } = await import('./pages/individuals.js')
  return {
    html: renderIndividuals(),
    meta: {
      title: 'Wealth Management for Individuals & Families | Merels Capital',
      description: 'Comprehensive, unconflicted wealth management for individuals and families. Investment management, financial planning, tax strategy, and estate planning under one roof.',
    },
  }
})
registerRoute('family-offices', async () => {
  const { renderFamilyOffices } = await import('./pages/family-offices.js')
  return {
    html: renderFamilyOffices(),
    meta: {
      title: 'Family Office Services | Merels Capital',
      description: 'Institutional-quality family office services for high-net-worth families. Consolidated reporting, multi-generational planning, and coordinated asset management.',
    },
  }
})
registerRoute('businesses', async () => {
  const { renderSmallBusinesses } = await import('./pages/small-businesses.js')
  return {
    html: renderSmallBusinesses(),
    meta: {
      title: 'Business Financial Planning | Merels Capital',
      description: 'Financial planning and advisory services for business owners. Retirement plans, employee benefits, succession planning, and personal wealth integration.',
    },
  }
})
registerRoute('articles', async () => {
  const { renderArticles } = await import('./pages/articles.js')
  return {
    html: renderArticles(),
    meta: {
      title: 'Articles & Insights | Merels Capital',
      description: 'Investment perspectives and financial planning insights from the team at Merels Capital.',
    },
  }
})
registerRoute('articles/gold-2025', async () => {
  const { renderArticleGold2025 } = await import('./pages/article-gold-2025.js')
  return {
    html: renderArticleGold2025(),
    meta: {
      title: 'The Case for Gold in 2025 | Merels Capital',
      description: 'Why gold deserves a place in a diversified portfolio in 2025 — examining the macro drivers, valuation, and allocation considerations.',
    },
  }
})
registerRoute('articles/private-credit-2026', async () => {
  const { renderArticlePrivateCredit2026 } = await import('./pages/article-private-credit-2026.js')
  return {
    html: renderArticlePrivateCredit2026(),
    meta: {
      title: 'Private Credit in 2026 | Merels Capital',
      description: 'An analysis of the private credit market heading into 2026 — opportunity, risk, and what it means for investor portfolios.',
    },
  }
})
registerRoute('articles/usd-2026', async () => {
  const { renderArticleUsd2026 } = await import('./pages/article-usd-2026.js')
  return {
    html: renderArticleUsd2026(),
    meta: {
      title: 'The US Dollar Outlook for 2026 | Merels Capital',
      description: 'What the trajectory of the US dollar means for investors in 2026 — currency dynamics, global capital flows, and portfolio implications.',
    },
  }
})
registerRoute('articles/energy-2026', async () => {
  const { renderArticleEnergy2026 } = await import('./pages/article-energy-2026.js')
  return {
    html: renderArticleEnergy2026(),
    meta: {
      title: 'Energy Markets in 2026 | Merels Capital',
      description: 'The investment landscape for energy in 2026 — examining supply dynamics, policy shifts, and opportunities across the energy sector.',
    },
  }
})
registerRoute('articles/fed-2026', async () => {
  const { renderArticleFed2026 } = await import('./pages/article-fed-2026.js')
  return {
    html: renderArticleFed2026(),
    meta: {
      title: 'The Federal Reserve in 2026 | Merels Capital',
      description: 'How Federal Reserve policy is shaping markets in 2026 and what investors should consider as interest rate expectations evolve.',
    },
  }
})
registerRoute('guides/trusts', async () => {
  const { renderGuideTrusts } = await import('./pages/guides/trusts.js')
  return {
    html: renderGuideTrusts(),
    meta: {
      title: 'A Practical Guide to Trusts | Merels Capital',
      description: 'A comprehensive guide to trusts for individuals and families — revocable and irrevocable structures, estate planning uses, and when a trust makes sense.',
    },
  }
})
registerRoute('guides/retirement-planning', async () => {
  const { renderGuideRetirementPlanning } = await import('./pages/guides/retirement-planning.js')
  return {
    html: renderGuideRetirementPlanning(),
    meta: {
      title: 'Retirement Planning: A Complete Overview | Merels Capital',
      description: 'A complete guide to retirement planning — savings strategies, Social Security timing, withdrawal sequencing, healthcare costs, and turning assets into income.',
    },
  }
})
registerRoute('guides/tax-planning', async () => {
  const { renderGuideTaxPlanning } = await import('./pages/guides/tax-planning.js')
  return {
    html: renderGuideTaxPlanning(),
    meta: {
      title: 'Tax Planning for Business Owners | Merels Capital',
      description: 'A practical guide to tax planning for business owners — entity structure, retirement plan deductions, income shifting, and year-end strategies.',
    },
  }
})
registerRoute('guides/cash-flow', async () => {
  const { renderGuideCashFlow } = await import('./pages/guides/cash-flow.js')
  return {
    html: renderGuideCashFlow(),
    meta: {
      title: 'Cash Flow Management and Forecasting | Merels Capital',
      description: 'A business owner\'s guide to cash flow — forecasting, working capital management, debt structuring, and building financial resilience.',
    },
  }
})
registerRoute('guides/employee-benefits', async () => {
  const { renderGuideEmployeeBenefits } = await import('./pages/guides/employee-benefits.js')
  return {
    html: renderGuideEmployeeBenefits(),
    meta: {
      title: 'Employee Benefits Guide for Business Owners | Merels Capital',
      description: 'A strategic guide to employee benefits for small business owners — retirement plans, health coverage, life and disability insurance, and executive compensation.',
    },
  }
})
registerRoute('contact', async () => {
  const { renderContact, initContact } = await import('./pages/contact.js')
  return {
    html: renderContact(),
    init: initContact,
    meta: {
      title: 'Contact Us | Merels Capital',
      description: 'Get in touch with Merels Capital. No obligation, no pressure — tell us about your situation and we\'ll be in touch within one business day.',
    },
  }
})

registerToolRoute('tools/retirement-calculator', 'Retirement Savings Calculator',
  'Estimate how much you need to save for retirement and whether you\'re on track. Adjust contributions, returns, and timeline to model different scenarios.',
  async () => {
    const { renderRetirementCalculator: render, initRetirementCalculator: init } = await import('./pages/tools/retirement-calculator.js')
    return { render, init }
  })
registerToolRoute('tools/retirement-quiz', 'Retirement Readiness Quiz',
  'Answer a few questions to assess your retirement readiness and identify gaps in your plan.',
  async () => {
    const { renderRetirementQuiz: render, initRetirementQuiz: init } = await import('./pages/tools/retirement-quiz.js')
    return { render, init }
  })
registerToolRoute('tools/social-security', 'Social Security Timing Calculator',
  'Find the optimal age to claim Social Security benefits based on your health, income needs, and break-even analysis.',
  async () => {
    const { renderSocialSecurity: render, initSocialSecurity: init } = await import('./pages/tools/social-security.js')
    return { render, init }
  })
registerToolRoute('tools/rmd-planner', 'Required Minimum Distribution Planner',
  'Calculate your annual required minimum distributions from IRAs and retirement accounts and plan your withdrawal strategy.',
  async () => {
    const { renderRmdPlanner: render, initRmdPlanner: init } = await import('./pages/tools/rmd-planner.js')
    return { render, init }
  })
registerToolRoute('tools/roth-conversion', 'Roth Conversion Calculator',
  'Model the long-term impact of converting traditional IRA or 401(k) funds to a Roth account and find the optimal conversion amount.',
  async () => {
    const { renderRothConversion: render, initRothConversion: init } = await import('./pages/tools/roth-conversion.js')
    return { render, init }
  })
registerToolRoute('tools/401k-rollover', '401(k) Rollover Guide',
  'Understand your options when leaving an employer — rolling over a 401(k) to an IRA, a new plan, or taking a distribution.',
  async () => {
    const { renderRollover401k: render, initRollover401k: init } = await import('./pages/tools/401k-rollover.js')
    return { render, init }
  })
registerToolRoute('tools/529-planner', '529 College Savings Planner',
  'Estimate how much to save for college using a 529 plan and project future account balances based on contributions and investment growth.',
  async () => {
    const { render529Planner: render, init529Planner: init } = await import('./pages/tools/529-planner.js')
    return { render, init }
  })
registerToolRoute('tools/risk-tolerance', 'Investment Risk Tolerance Assessment',
  'Identify your investment risk tolerance and see what asset allocation might be appropriate for your goals and timeline.',
  async () => {
    const { renderRiskTolerance: render, initRiskTolerance: init } = await import('./pages/tools/risk-tolerance.js')
    return { render, init }
  })
registerToolRoute('tools/tax-savings', 'Tax Savings Estimator',
  'Estimate how much you could save in taxes through retirement plan contributions, deductions, and other strategies available to business owners.',
  async () => {
    const { renderTaxSavings: render, initTaxSavings: init } = await import('./pages/tools/tax-savings.js')
    return { render, init }
  })
registerToolRoute('tools/savings-goal', 'Savings Goal Calculator',
  'Calculate how much you need to save each month to reach a specific financial goal — from an emergency fund to a major purchase.',
  async () => {
    const { renderSavingsGoal: render, initSavingsGoal: init } = await import('./pages/tools/savings-goal.js')
    return { render, init }
  })

document.getElementById('header')!.innerHTML = renderHeader()
document.getElementById('footer')!.innerHTML = renderFooter()
initFooterNewsletter()

// ── Scroll shadow on header ──────────────────────────
const header = document.getElementById('header')!
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10)
}, { passive: true })

// ── Mobile menu ──────────────────────────────────────
const mobileBtn  = document.getElementById('mobile-menu-btn')!
const navLinks   = document.getElementById('nav-links')!
const navActions = document.getElementById('nav-actions')!

mobileBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open')
  navActions.classList.toggle('open', open)
  mobileBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
})

// ── Nav dropdowns ────────────────────────────────────
function initDropdown(btnId: string) {
  const btn = document.getElementById(btnId)
  if (!btn) return
  const dropdown = btn.closest('.nav-dropdown')!
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const opening = !dropdown.classList.contains('open')
    document.querySelectorAll('.nav-dropdown.open').forEach(d => {
      d.classList.remove('open')
      d.querySelector<HTMLElement>('[aria-expanded]')?.setAttribute('aria-expanded', 'false')
    })
    if (opening) {
      dropdown.classList.add('open')
      btn.setAttribute('aria-expanded', 'true')
    }
  })
}

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown.open').forEach(d => {
    d.classList.remove('open')
    d.querySelector<HTMLElement>('[aria-expanded]')?.setAttribute('aria-expanded', 'false')
  })
})

initDropdown('tools-dropdown-btn')
initDropdown('articles-dropdown-btn')

// ── Booking modal ────────────────────────────────────
const bookBtn  = document.getElementById('book-now-btn')!
const modal    = document.getElementById('booking-modal')!
const closeBtn = document.getElementById('booking-modal-close')!
const backdrop = modal.querySelector('.booking-modal-backdrop')!
const iframe   = document.getElementById('booking-iframe') as HTMLIFrameElement

let loaded = false

function openModal() {
  if (!loaded) {
    iframe.src = 'https://bookings.merelscapital.com'
    loaded = true
  }
  modal.hidden = false
  document.body.style.overflow = 'hidden'
}

bookBtn.addEventListener('click', openModal)

document.addEventListener('click', (e) => {
  if ((e.target as Element).closest('[data-action="open-booking"]')) openModal()
})

function closeModal() {
  modal.hidden = true
  document.body.style.overflow = ''
}

closeBtn.addEventListener('click', closeModal)
backdrop.addEventListener('click', closeModal)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal()
})

// ── Start router ─────────────────────────────────────
initRouter()

// ── Prefetch slot availability for the next business day ──
function prefetchSlots(): void {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1)
  const date = d.toLocaleDateString('en-CA', { timeZone: 'America/Denver' })
  fetch(`https://api.merelscapital.com/slots?date=${date}`).catch(() => {})
}

window.addEventListener('load', () => {
  setTimeout(prefetchSlots, 3000)
})
