export function renderAbout(): string {
  return `
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">ABOUT US</span>
          <h1>Built differently, by design.</h1>
          <p class="about-hero-subtitle">We believe great wealth management starts with a genuine relationship—not a product pitch. Everything we do flows from that conviction.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/About-Us.jpeg" alt="About Merels Capital" />
      </div>
    </section>

    <section class="about-mission">
      <div class="about-mission-inner">
        <div class="about-pull-quote">
          <blockquote>
            "Our only obligation is to you. No parent company. No proprietary products. No hidden incentives. Just straightforward advice in your best interest."
          </blockquote>
        </div>
        <div class="about-story">
          <span class="section-label">OUR STORY</span>
          <h2>Founded on the belief that independence changes everything</h2>
          <p>Merels Capital was founded with a simple but consequential premise: that truly unconflicted advice requires structural independence. When an advisor has no proprietary products to sell and no parent company to answer to, every recommendation can be made purely on its merits.</p>
          <p>We built this firm to be the kind of advisor we would want for our own families—one that listens deeply, thinks long-term, and holds itself to a fiduciary standard in every client interaction. That clarity of purpose shapes every decision we make.</p>
        </div>
      </div>
    </section>

    <section class="about-values">
      <div class="about-values-inner">
        <div class="section-header centered">
          <span class="section-label">OUR PRINCIPLES</span>
          <h2>What guides every decision we make</h2>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">◈</div>
            <h3>Structural Independence</h3>
            <p>We have no parent company and sell no proprietary products. Our independence isn't a marketing claim—it's baked into how we're built. That structure is what allows us to give advice that is genuinely unconflicted.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">◈</div>
            <h3>Understanding Before Action</h3>
            <p>We don't arrive at client meetings with a portfolio pre-loaded. We start by listening—understanding your situation, your goals, and the trade-offs you're willing to make before we offer a single recommendation.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">◈</div>
            <h3>Long-Term Partnership</h3>
            <p>We measure our success over years, not quarters. We want to be the advisor you call when something changes in your life, and the one who is still there when your children are ready to build their own financial futures.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-team">
      <div class="about-team-inner">
        <div class="section-header centered">
          <span class="section-label">OUR TEAM</span>
          <h2>Experienced advisors. Genuine relationships.</h2>
          <p class="section-intro">Our team brings decades of experience across wealth management, financial planning, and investment research—all in service of the clients we work with every day.</p>
        </div>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-avatar team-avatar-1"></div>
            <div class="team-info">
              <h3>Placeholder Name</h3>
              <p class="team-title">Founder &amp; Managing Director</p>
              <p class="team-bio">Placeholder bio — over 20 years of experience in wealth management, formerly with [Institution]. Focuses on integrated financial planning and tax-efficient investing for high-net-worth families.</p>
            </div>
          </div>
          <div class="team-card">
            <div class="team-avatar team-avatar-2"></div>
            <div class="team-info">
              <h3>Placeholder Name</h3>
              <p class="team-title">Director, Investment Strategy</p>
              <p class="team-bio">Placeholder bio — background in institutional investment management and portfolio construction. Leads research and asset allocation across client portfolios.</p>
            </div>
          </div>
          <div class="team-card">
            <div class="team-avatar team-avatar-3"></div>
            <div class="team-info">
              <h3>Placeholder Name</h3>
              <p class="team-title">Director, Financial Planning</p>
              <p class="team-bio">Placeholder bio — specialist in estate planning, tax strategy, and retirement income. Works closely with clients navigating major life transitions and liquidity events.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Let's start with a conversation.</h2>
        <p>No obligation, no pressure. Just a straightforward discussion about where you are and where you want to go.</p>
        <a href="/contact" class="btn-primary-light">Get in Touch</a>
      </div>
    </section>
  `
}
