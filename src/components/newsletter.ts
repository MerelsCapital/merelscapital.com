const API = 'https://api.merelscapital.com/subscribe'

export function renderNewsletterSignup(): string {
  return `
    <div class="tool-newsletter">
      <div class="tool-newsletter-inner">
        <div class="tool-newsletter-text">
          <h3>Stay Ahead of Your Finances</h3>
          <p>Join our newsletter for monthly insights on retirement planning, tax strategy, market trends, and wealth management — delivered directly to your inbox.</p>
        </div>
        <form id="tool-nl-form" class="tool-newsletter-form" novalidate>
          <div class="tool-newsletter-fields">
            <input type="text" id="tool-nl-first" placeholder="First name" autocomplete="given-name" />
            <input type="text" id="tool-nl-last" placeholder="Last name" autocomplete="family-name" />
            <input type="email" id="tool-nl-email" placeholder="Email address" autocomplete="email" />
          </div>
          <button type="submit" class="tool-newsletter-btn">Subscribe to Newsletter</button>
          <p id="tool-nl-msg" class="tool-newsletter-msg" hidden></p>
        </form>
      </div>
    </div>
  `
}

export function initNewsletterSignup(): void {
  const form = document.getElementById('tool-nl-form') as HTMLFormElement | null
  if (!form) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email     = (document.getElementById('tool-nl-email') as HTMLInputElement).value.trim()
    const firstName = (document.getElementById('tool-nl-first') as HTMLInputElement).value.trim()
    const lastName  = (document.getElementById('tool-nl-last') as HTMLInputElement).value.trim()
    const msg = document.getElementById('tool-nl-msg')!
    const btn = form.querySelector('button')!

    if (!email) {
      msg.textContent = 'Please enter your email address.'
      msg.className = 'tool-newsletter-msg tool-newsletter-error'
      msg.hidden = false
      return
    }

    btn.disabled = true
    btn.textContent = 'Subscribing...'
    msg.hidden = true

    try {
      const res  = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, first_name: firstName, last_name: lastName }),
      })
      const data = await res.json() as { success?: boolean; error?: string }

      if (data.success) {
        msg.textContent = "You're subscribed! Welcome to the Merels Capital newsletter."
        msg.className = 'tool-newsletter-msg tool-newsletter-success'
        form.reset()
      } else {
        msg.textContent = data.error ?? 'Something went wrong. Please try again.'
        msg.className = 'tool-newsletter-msg tool-newsletter-error'
      }
      msg.hidden = false
    } catch {
      msg.textContent = 'Connection error. Please try again.'
      msg.className = 'tool-newsletter-msg tool-newsletter-error'
      msg.hidden = false
    } finally {
      btn.disabled = false
      btn.textContent = 'Subscribe to Newsletter'
    }
  })
}

export function initFooterNewsletter(): void {
  const form = document.getElementById('footer-nl-form') as HTMLFormElement | null
  if (!form) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = (document.getElementById('footer-nl-email') as HTMLInputElement).value.trim()
    const msg   = document.getElementById('footer-nl-msg')!
    const btn   = form.querySelector('button')!

    if (!email) return

    btn.disabled = true
    msg.hidden = true

    try {
      const res  = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json() as { success?: boolean; error?: string }

      msg.textContent = data.success
        ? "You're subscribed!"
        : (data.error ?? 'Something went wrong.')
      msg.className = data.success
        ? 'footer-newsletter-msg footer-nl-success'
        : 'footer-newsletter-msg footer-nl-error'
      msg.hidden = false
      if (data.success) form.reset()
    } catch {
      msg.textContent = 'Connection error. Please try again.'
      msg.className = 'footer-newsletter-msg footer-nl-error'
      msg.hidden = false
    } finally {
      btn.disabled = false
    }
  })
}
