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
        <img src="/images/hero-aboutus.jpeg" alt="About Merels Capital" />
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

    <section class="about-founding">
      <div class="about-founding-inner">
        <div class="section-header centered">
          <span class="section-label">WHY WE BUILT THIS FIRM</span>
          <h2>Because the industry's incentives were pointed in the wrong direction.</h2>
        </div>
        <div class="founding-body">
          <div class="founding-text">
            <p>Most wealth management firms are built around products. The advice they give is shaped, even if subtly, by what they sell, what their parent company manufactures, and how their advisors are compensated. For clients, that creates a persistent question: is this recommendation in my interest, or theirs?</p>
            <p>We built Merels Capital to make that question unnecessary. By remaining independent with no proprietary products, no parent company, and no distribution incentives we can give advice that is structurally unconflicted. Not just claimed to be, but actually designed to be. Every recommendation we make stands on one criterion alone: is this the right thing for this client?</p>
            <p>We also believed that genuine wealth management requires a depth of relationship that large institutions struggle to provide. When your advisor changes every few years, when your portfolio is built from a centralized model, when you're one of thousands of clients, something important gets lost. We built this firm to be different on that dimension too: fewer clients, deeper relationships, senior advisors engaged at every stage.</p>
            <p>That is the firm we set out to build. It is the firm we intend to remain.</p>
          </div>
          <div class="founding-image">
            <img src="/images/page-aboutus-founding.jpg" alt="A conversation at Merels Capital" />
          </div>
        </div>
      </div>
    </section>

    <section class="about-values-practice">
      <div class="about-values-practice-inner">
        <div class="section-header centered">
          <span class="section-label">OUR VALUES IN PRACTICE</span>
          <h2>What our principles look like in a real client relationship.</h2>
        </div>
        <div class="practice-grid">
          <div class="practice-card">
            <h3>We listen before we recommend.</h3>
            <p>We don't arrive at a first meeting with a set of products to sell. Before we suggest anything, we spend time understanding your situation, your goals, your concerns, the trade-offs you're willing to make, and what prosperity actually means to you. The plan follows from that conversation, not the other way around.</p>
          </div>
          <div class="practice-card">
            <h3>We tell you what we actually think.</h3>
            <p>If an investment you're excited about doesn't make sense for your situation, we'll say so. If the market is doing something that doesn't change what you should do, we'll say that too. Our job is to give you our honest assessment, not to validate decisions you've already made or tell you what you want to hear.</p>
          </div>
          <div class="practice-card">
            <h3>We think about taxes every time.</h3>
            <p>An investment decision and a tax decision are the same decision. We don't treat tax planning as something that happens in April, it's embedded in every portfolio decision we make, from how we harvest losses to how we think about the location of assets across your accounts.</p>
          </div>
          <div class="practice-card">
            <h3>We stay engaged when it matters most.</h3>
            <p>The moments when clients most need their advisor, a business sale, an inheritance, a divorce, a market crisis, are exactly when some firms go quiet or hand you off to a junior associate. We remain directly involved at every inflection point, because those are the moments that define a financial life.</p>
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
