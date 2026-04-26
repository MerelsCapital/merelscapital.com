import './style.css'
import { registerRoute, initRouter } from './router.js'
import { renderHome, initHome } from './pages/home.js'
import { renderAbout } from './pages/about.js'
import { renderIndividuals } from './pages/individuals.js'
import { renderFamilyOffices } from './pages/family-offices.js'
import { renderSmallBusinesses } from './pages/small-businesses.js'
import { renderArticles } from './pages/articles.js'
import { renderContact, initContact } from './pages/contact.js'
import { renderHeader } from './components/header.js'
import { renderFooter } from './components/footer.js'

registerRoute('home',          renderHome,        initHome)
registerRoute('about',         renderAbout)
registerRoute('individuals',   renderIndividuals)
registerRoute('family-offices',renderFamilyOffices)
registerRoute('small-businesses', renderSmallBusinesses)
registerRoute('articles',      renderArticles)
registerRoute('contact',       renderContact, initContact)

document.getElementById('header')!.innerHTML = renderHeader()
document.getElementById('footer')!.innerHTML = renderFooter()

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

// ── Prefetch slot availability for the next 5 business days ──
function prefetchSlots(): void {
  const dates: string[] = []
  const d = new Date()
  while (dates.length < 5) {
    d.setDate(d.getDate() + 1)
    const dateStr = d.toLocaleDateString('en-CA', { timeZone: 'America/Denver' })
    const [year, month, day] = dateStr.split('-').map(Number)
    const dow = new Date(year, month - 1, day).getDay()
    if (dow !== 0 && dow !== 6) dates.push(dateStr)
  }
  dates.forEach(date =>
    fetch(`https://api.merelscapital.com/slots?date=${date}`).catch(() => {})
  )
}

window.addEventListener('load', () => {
  const schedule = (window as any).requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200))
  schedule(prefetchSlots)
})
