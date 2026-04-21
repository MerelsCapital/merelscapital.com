export function renderContact(): string {
  return `
    <section class="about-hero">
      <div class="about-hero-inner">
        <span class="section-label light">CONTACT</span>
        <h1>Let's start a conversation.</h1>
        <p class="about-hero-subtitle">No obligation, no pressure. Tell us a little about your situation and we'll be in touch.</p>
      </div>
    </section>

    <section class="contact-section bg-off-white">
      <div class="contact-inner">
        <div class="contact-form-col">
          <h2>Get in touch</h2>
          <p class="contact-intro">Fill out the form below and a member of our team will respond within one business day.</p>
          <form class="contact-form" onsubmit="return false;">
            <div class="form-row">
              <div class="form-group">
                <label for="contact-first">First Name</label>
                <input type="text" id="contact-first" name="first_name" placeholder="Jane" autocomplete="given-name" />
              </div>
              <div class="form-group">
                <label for="contact-last">Last Name</label>
                <input type="text" id="contact-last" name="last_name" placeholder="Smith" autocomplete="family-name" />
              </div>
            </div>
            <div class="form-group">
              <label for="contact-email">Email Address</label>
              <input type="email" id="contact-email" name="email" placeholder="jane@example.com" autocomplete="email" />
            </div>
            <div class="form-group">
              <label for="contact-phone">Phone Number <span class="form-optional">(optional)</span></label>
              <input type="tel" id="contact-phone" name="phone" placeholder="(303) 555-0100" autocomplete="tel" />
            </div>
            <div class="form-group">
              <label for="contact-subject">I am interested in</label>
              <select id="contact-subject" name="subject">
                <option value="" disabled selected>Select a topic…</option>
                <option value="individuals">Wealth Management for Individuals &amp; Families</option>
                <option value="family-offices">Family Office Services</option>
                <option value="institutions">Institutional / OCIO Services</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact-message">Message <span class="form-optional">(optional)</span></label>
              <textarea id="contact-message" name="message" rows="5" placeholder="Tell us a little about your situation…"></textarea>
            </div>
            <button type="submit" class="form-submit">Send Message</button>
            <p class="form-disclaimer">By submitting this form you agree to be contacted by Merels Capital. We will never sell or share your information with third parties.</p>
          </form>
        </div>

        <div class="contact-info-col">
          <div class="contact-info-block">
            <h3>Office</h3>
            <p>Denver, Colorado</p>
            <p>Serving clients nationally</p>
          </div>
          <div class="contact-info-block">
            <h3>Email</h3>
            <p><a href="mailto:info@merelscapital.com" class="text-link">info@merelscapital.com</a></p>
          </div>
          <div class="contact-info-block">
            <h3>Hours</h3>
            <p>Monday – Friday<br>8:00 AM – 5:00 PM MT</p>
          </div>
          <div class="contact-info-block">
            <h3>What to expect</h3>
            <p>We typically respond within one business day. An initial conversation is a no-obligation opportunity to learn whether Merels Capital is the right fit for your needs.</p>
          </div>
        </div>
      </div>
    </section>
  `
}
