function e(){let e=document.getElementById(`contact-form`),t=document.getElementById(`contact-submit`),n=document.getElementById(`contact-feedback`);e.addEventListener(`submit`,async r=>{r.preventDefault(),t.disabled=!0,t.textContent=`Sending…`,n.hidden=!0,n.className=`contact-feedback`;let i=new FormData(e),a={first_name:i.get(`first_name`),last_name:i.get(`last_name`),email:i.get(`email`),phone:i.get(`phone`),subject:i.get(`subject`),message:i.get(`message`)};try{if((await fetch(`https://api.merelscapital.com/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)})).ok)n.textContent=`Your message has been sent. We'll be in touch shortly.`,n.classList.add(`contact-feedback--success`),e.reset(),t.textContent=`Message Sent`,window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`contact_form_complete`});else throw Error(`Server error`)}catch{n.textContent=`Something went wrong. Please try again or email us directly at info@merelscapital.com.`,n.classList.add(`contact-feedback--error`),t.disabled=!1,t.textContent=`Send Message`}n.hidden=!1})}function t(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">CONTACT</span>
          <h1>Let's start a conversation.</h1>
          <p class="about-hero-subtitle">No obligation, no pressure. Tell us a little about your situation and we'll be in touch.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/hero-contact.jpeg"><img src="/images/desktop/hero-contact.jpeg" alt="Contact Merels Capital"></picture>
      </div>
    </section>

    <section class="contact-section bg-off-white">
      <div class="contact-inner">
        <div class="contact-form-col">
          <h2>Get in touch</h2>
          <p class="contact-intro">Fill out the form below and a member of our team will respond within one business day.</p>
          <form class="contact-form" id="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="contact-first">First Name</label>
                <input type="text" id="contact-first" name="first_name" placeholder="Jane" autocomplete="given-name" required />
              </div>
              <div class="form-group">
                <label for="contact-last">Last Name</label>
                <input type="text" id="contact-last" name="last_name" placeholder="Smith" autocomplete="family-name" required />
              </div>
            </div>
            <div class="form-group">
              <label for="contact-email">Email Address</label>
              <input type="email" id="contact-email" name="email" placeholder="jane@example.com" autocomplete="email" required />
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
                <option value="businesses">Business Services</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact-message">Message <span class="form-optional">(optional)</span></label>
              <textarea id="contact-message" name="message" rows="5" placeholder="Tell us a little about your situation…"></textarea>
            </div>
            <div id="contact-feedback" class="contact-feedback" hidden></div>
            <button type="submit" class="form-submit" id="contact-submit">Send Message</button>
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
  `}export{e as initContact,t as renderContact};