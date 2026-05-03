import './style.css'
import { registerRoute, initRouter } from './router.js'
import { renderHeader } from './components/header.js'
import { renderFooter } from './components/footer.js'
import { renderNewsletterSignup, initNewsletterSignup, initFooterNewsletter } from './components/newsletter.js'

type PageModule = { render: () => string; init?: () => void }

function registerToolRoute(name: string, loader: () => Promise<PageModule>) {
  registerRoute(name, async () => {
    const { render, init } = await loader()
    return {
      html: render() + renderNewsletterSignup(),
      init: () => { init?.(); initNewsletterSignup() },
    }
  })
}

registerRoute('home', async () => {
  const { renderHome, initHome } = await import('./pages/home.js')
  return { html: renderHome(), init: initHome }
})
registerRoute('about', async () => {
  const { renderAbout } = await import('./pages/about.js')
  return { html: renderAbout() }
})
registerRoute('individuals', async () => {
  const { renderIndividuals } = await import('./pages/individuals.js')
  return { html: renderIndividuals() }
})
registerRoute('family-offices', async () => {
  const { renderFamilyOffices } = await import('./pages/family-offices.js')
  return { html: renderFamilyOffices() }
})
registerRoute('businesses', async () => {
  const { renderSmallBusinesses } = await import('./pages/small-businesses.js')
  return { html: renderSmallBusinesses() }
})
registerRoute('articles', async () => {
  const { renderArticles } = await import('./pages/articles.js')
  return { html: renderArticles() }
})
registerRoute('articles/gold-2025', async () => {
  const { renderArticleGold2025 } = await import('./pages/article-gold-2025.js')
  return { html: renderArticleGold2025() }
})
registerRoute('articles/private-credit-2026', async () => {
  const { renderArticlePrivateCredit2026 } = await import('./pages/article-private-credit-2026.js')
  return { html: renderArticlePrivateCredit2026() }
})
registerRoute('articles/usd-2026', async () => {
  const { renderArticleUsd2026 } = await import('./pages/article-usd-2026.js')
  return { html: renderArticleUsd2026() }
})
registerRoute('articles/energy-2026', async () => {
  const { renderArticleEnergy2026 } = await import('./pages/article-energy-2026.js')
  return { html: renderArticleEnergy2026() }
})
registerRoute('articles/fed-2026', async () => {
  const { renderArticleFed2026 } = await import('./pages/article-fed-2026.js')
  return { html: renderArticleFed2026() }
})
registerRoute('contact', async () => {
  const { renderContact, initContact } = await import('./pages/contact.js')
  return { html: renderContact(), init: initContact }
})

registerToolRoute('tools/retirement-calculator', async () => {
  const { renderRetirementCalculator: render, initRetirementCalculator: init } = await import('./pages/tools/retirement-calculator.js')
  return { render, init }
})
registerToolRoute('tools/retirement-quiz', async () => {
  const { renderRetirementQuiz: render, initRetirementQuiz: init } = await import('./pages/tools/retirement-quiz.js')
  return { render, init }
})
registerToolRoute('tools/social-security', async () => {
  const { renderSocialSecurity: render, initSocialSecurity: init } = await import('./pages/tools/social-security.js')
  return { render, init }
})
registerToolRoute('tools/rmd-planner', async () => {
  const { renderRmdPlanner: render, initRmdPlanner: init } = await import('./pages/tools/rmd-planner.js')
  return { render, init }
})
registerToolRoute('tools/roth-conversion', async () => {
  const { renderRothConversion: render, initRothConversion: init } = await import('./pages/tools/roth-conversion.js')
  return { render, init }
})
registerToolRoute('tools/401k-rollover', async () => {
  const { renderRollover401k: render, initRollover401k: init } = await import('./pages/tools/401k-rollover.js')
  return { render, init }
})
registerToolRoute('tools/529-planner', async () => {
  const { render529Planner: render, init529Planner: init } = await import('./pages/tools/529-planner.js')
  return { render, init }
})
registerToolRoute('tools/risk-tolerance', async () => {
  const { renderRiskTolerance: render, initRiskTolerance: init } = await import('./pages/tools/risk-tolerance.js')
  return { render, init }
})
registerToolRoute('tools/tax-savings', async () => {
  const { renderTaxSavings: render, initTaxSavings: init } = await import('./pages/tools/tax-savings.js')
  return { render, init }
})
registerToolRoute('tools/savings-goal', async () => {
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

// ── Tools dropdown ───────────────────────────────────
const toolsBtn = document.getElementById('tools-dropdown-btn')
if (toolsBtn) {
  const toolsDropdown = toolsBtn.closest('.nav-dropdown')!
  toolsBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    const isOpen = toolsDropdown.classList.toggle('open')
    toolsBtn.setAttribute('aria-expanded', String(isOpen))
  })
  document.addEventListener('click', () => {
    toolsDropdown.classList.remove('open')
    toolsBtn.setAttribute('aria-expanded', 'false')
  })
}

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
