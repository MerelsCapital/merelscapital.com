export function renderSmallBusinesses(): string {
  return `
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">SMALL BUSINESSES</span>
          <h1>Wealth planning built around your business.</h1>
          <p class="about-hero-subtitle">Comprehensive financial guidance for business owners navigating growth, succession, and the transition to personal wealth.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/hero-smallbusiness.jpg" alt="Small business financial planning" />
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">WHAT WE DO</span>
          <h2>Integrating your business and personal financial life</h2>
          <p>For most business owners, the line between personal and business finances is blurred by design. Your business is your largest asset, your primary income source, and often the foundation of your retirement plan. We help you manage that complexity, coordinating business cash flow, personal savings, tax strategy, and long-term planning into a single coherent picture.</p>
          <p>Whether you're in growth mode, preparing for a sale, or planning for the next generation, we bring the depth of planning your situation demands.</p>
        </div>
        <img class="placeholder-image" src="/images/page-smallbusiness-whatwedo.jpg" alt="Integrating business and personal finances" />
      </div>
    </section>

    <section class="section-padded bg-white">
      <div class="section-header centered">
        <span class="section-label">HOW WE HELP</span>
        <h2>Services for business owners</h2>
        <p class="section-intro">From day-to-day planning to once-in-a-lifetime transactions, we support business owners across every dimension of their financial life.</p>
      </div>
      <div class="pillars-grid">
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Business Succession Planning</h3>
          <p>Structuring ownership transitions—whether to family, key employees, or a third-party buyer—to preserve value and minimize tax.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Liquidity Event Planning</h3>
          <p>Preparing for a business sale well in advance to maximize after-tax proceeds and deploy capital effectively.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Retirement Plan Design</h3>
          <p>Establishing and optimizing defined contribution and defined benefit plans to build tax-advantaged wealth inside your business.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Tax-Efficient Compensation</h3>
          <p>Structuring owner compensation, distributions, and deferred compensation to minimize your overall tax burden.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Personal Investment Management</h3>
          <p>Building and managing a diversified personal portfolio that complements—not duplicates—your business exposure.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Estate &amp; Legacy Planning</h3>
          <p>Coordinating business interests with estate planning to protect what you've built and transfer it on your terms.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Key Person &amp; Buy-Sell Planning</h3>
          <p>Ensuring your business and your family are protected if something unexpected happens to you or a business partner.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Cash Flow &amp; Income Planning</h3>
          <p>Managing the variability of business income to support a stable personal financial plan through every business cycle.</p>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner reverse">
        <img class="placeholder-image" src="/images/page-smallbusiness-partner.jpg" alt="Business owners at every stage" />
        <div class="section-text">
          <span class="section-label">WHO WE SERVE</span>
          <h2>Owners at every stage of the journey</h2>
          <p>We work with founders, operators, and transitioning owners across a wide range of industries and business sizes. Whether you're still building, preparing to exit, or navigating what comes after, we're here to make sure your financial life keeps pace with your business.</p>
          <a data-route="contact" href="#" class="text-link">Start a conversation →</a>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Let's talk about your business and your future.</h2>
        <p>Every business owner's situation is different. Tell us where you are and we'll help you think through what comes next.</p>
        <a data-route="contact" href="#" class="btn-primary-light">Schedule a Consultation</a>
      </div>
    </section>
  `
}
