export function renderFamilyOffices(): string {
  return `
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">FAMILY OFFICES</span>
          <h1>Institutional rigor for the families you serve.</h1>
          <p class="about-hero-subtitle">Coordinated investment management, governance, and reporting for single and multi-family office structures.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/hero-familyoffice.png"><img src="/images/desktop/hero-familyoffice.png" alt="Family office wealth management"></picture>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">WHAT WE DO</span>
          <h2>Serving the complexity of multi-generational wealth</h2>
          <p>Family offices require more than investment management — they demand coordinated oversight of governance, reporting, tax planning, and legacy strategy across generations. We provide the institutional rigor and personalized service that complex family structures require.</p>
          <p>We work as an extension of your family office, bringing capabilities that would otherwise require building an entire internal team.</p>
        </div>
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-familyoffice-whatwedo.jpg"><img class="placeholder-image" src="/images/desktop/page-familyoffice-whatwedo.jpg" alt="Multi-generational family wealth"></picture>
      </div>
    </section>

    <section class="section-padded bg-white">
      <div class="section-header centered">
        <span class="section-label">CAPABILITIES</span>
        <h2>What we bring to family offices</h2>
        <p class="section-intro">A full suite of capabilities designed to operate seamlessly alongside your existing family office structure.</p>
      </div>
      <div class="pillars-grid">
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Investment Oversight</h3>
          <p>Open-architecture investment management with access to the full investment universe.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Consolidated Reporting</h3>
          <p>A single, unified view of all assets, liabilities, and performance across entities.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Governance Support</h3>
          <p>Investment policy statement development, trustee support, and committee facilitation.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Tax Coordination</h3>
          <p>Multi-entity tax planning coordinated across personal, trust, and business structures.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Minor &amp; Trust Accounts</h3>
          <p>Establishing custodial accounts, 529 plans, and irrevocable trusts to grow and protect assets designated for minor beneficiaries.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Philanthropic Strategy</h3>
          <p>Structuring charitable giving to maximize impact and tax efficiency across generations.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Alternative Investments</h3>
          <p>Access to private equity, real assets, and hedge strategies appropriate for family office portfolios.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Concentrated Position Management</h3>
          <p>Strategic reduction and hedging of large single-stock or closely-held business positions to manage risk while minimising tax consequences.</p>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner reverse">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-familyoffice-partner.jpg"><img class="placeholder-image" src="/images/desktop/page-familyoffice-partner.jpg" alt="Independence that serves the family"></picture>
        <div class="section-text">
          <span class="section-label">WHY WORK WITH US</span>
          <h2>Independence that serves the family, not the institution</h2>
          <p>Our open-architecture approach and freedom from proprietary products means every recommendation is made in your family's best interest. No hidden incentives, no preferred managers, no conflicts. Just straightforward advice from advisors who answer only to you.</p>
          <a href="/contact/" class="text-link">Start a conversation →</a>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Let's discuss how we can support your family office.</h2>
        <p>We work with family offices of all sizes and structures. Tell us about your situation.</p>
        <a href="/contact/" class="btn-primary-light">Get in Touch</a>
      </div>
    </section>
  `
}
