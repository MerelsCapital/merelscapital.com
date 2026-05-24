import './style.css'
import { initFooterNewsletter, initNewsletterSignup } from './components/newsletter.js'
import { routes } from './routes.js'

const pageModules = import.meta.glob<Record<string, unknown>>('./pages/**/*.ts')

// ── Per-page hydration ───────────────────────────────
// Determine current route from the pathname, then run the page's init() if it has one.
// All page content is pre-rendered at build time, so we only need to wire up interactivity.
function currentRoute(): string {
  const path = location.pathname.replace(/^\/|\/$/g, '')
  return path || 'home'
}

async function hydratePage() {
  const route = currentRoute()
  const config = routes.find(r => r.path === route)
  if (!config) return

  if (config.initFn) {
    const loader = pageModules[config.modulePath]
    if (!loader) return
    const mod = await loader()
    const init = mod[config.initFn] as (() => void) | undefined
    init?.()
  }

  if (config.isTool) {
    initNewsletterSignup()
  }
}

// ── Footer newsletter (present on every page) ────────
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

// ── Hydrate the current page ─────────────────────────
hydratePage()

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
