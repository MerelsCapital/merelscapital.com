export function renderFooter(): string {
  return `
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">Merels Capital</span>
        <p>Independent wealth management for individuals, families, and businesses.</p>
        <div class="footer-contact">
          <a href="tel:+13039014631" class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (303) 901-4631
          </a>
          <a href="mailto:contact@merelscapital.com" class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            contact@merelscapital.com
          </a>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61587203963262" target="_blank" rel="noopener" aria-label="Facebook">f</a>
          <a href="https://x.com/MerelsCapital" target="_blank" rel="noopener" aria-label="X">𝕏</a>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Services</h4>
          <a data-route="individuals" href="#">Individuals &amp; Families</a>
          <a data-route="family-offices" href="#">Family Offices</a>
          <a data-route="small-businesses" href="#">Small Businesses</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a data-route="about" href="#">About Us</a>
          <a data-route="articles" href="#">Articles</a>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="https://adviserinfo.sec.gov/firm/summary/339181" target="_blank" rel="noopener">ADV Documents</a>
          <a href="/files/privacy-policy.pdf" target="_blank" rel="noopener">Privacy Policy</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a data-route="contact" href="#">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Merels Capital. All rights reserved.</p>
      <p>Investment advisory services offered through Merels Capital, LLC, a registered investment adviser.</p>
    </div>
  `
}
