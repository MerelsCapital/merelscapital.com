export function renderFooter(): string {
  return `
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">Merels Capital</span>
        <p>Independent wealth management for individuals, families, and institutions.</p>
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
          <a data-route="institutions" href="#">Institutions</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a data-route="about" href="#">About Us</a>
          <a data-route="articles" href="#">Articles</a>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="https://adviserinfo.sec.gov/firm/summary/339181" target="_blank" rel="noopener">ADV Documents</a>
          <a data-route="privacy" href="#">Privacy Policy</a>
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
