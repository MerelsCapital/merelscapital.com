export function renderArticles(): string {
  return `
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">ARTICLES</span>
          <h1>Plain-language guidance on complex topics.</h1>
          <p class="about-hero-subtitle">Educational content on financial planning, investing, tax strategy, and estate planning — written to inform, not to sell.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/hero-articles.jpeg" alt="Articles from Merels Capital" />
      </div>
    </section>

    <section class="posts-section bg-off-white">
      <div class="posts-section-inner">
        <div class="posts-grid">
          <article class="post-card post-card--linked" data-route="articles/energy-2026">
            <img class="post-image" src="/images/articles/article-4/Article-4_Banner.jpg" alt="The Energy Sector: Data Center Demand Boom Meets Iranian War Supply Shocks" />
            <div class="post-body">
              <span class="post-category">Markets</span>
              <h3 class="post-title">The Energy Sector: Data Center Demand Boom Meets Iranian War Supply Shocks</h3>
              <p class="post-excerpt">Surging electricity demand from AI-powered data centers is colliding with acute geopolitical supply risks from the escalating war in Iran — reshaping commodity prices, utility revenues, and broader macroeconomic outcomes.</p>
              <div class="post-card-footer">
                <span class="post-date">March 2026</span>
                <a data-route="articles/energy-2026" href="#" class="text-link">Read →</a>
              </div>
            </div>
          </article>
          <article class="post-card post-card--linked" data-route="articles/usd-2026">
            <img class="post-image" src="/images/articles/article-3/Article-3_Banner.jpg" alt="The US Dollar in 2026" />
            <div class="post-body">
              <span class="post-category">Markets</span>
              <h3 class="post-title">The US Dollar in 2026: Navigating Cyclical Regimes Amid Persistent Global Dominance</h3>
              <p class="post-excerpt">The DXY stood at 97.61 as of February 27, 2026 — down 9.27% year-over-year but rebounding modestly on resilient US inflation and labour data.</p>
              <div class="post-card-footer">
                <span class="post-date">July 2026</span>
                <a data-route="articles/usd-2026" href="#" class="text-link">Read →</a>
              </div>
            </div>
          </article>
          <article class="post-card post-card--linked" data-route="articles/private-credit-2026">
            <img class="post-image" src="/images/articles/article-2/Article-2_Banner.jpg" alt="Private Credit in Corporate Debt Markets" />
            <div class="post-body">
              <span class="post-category">Investing</span>
              <h3 class="post-title">The Evolving Role of Private Credit in Corporate Debt Markets</h3>
              <p class="post-excerpt">Global private credit AUM is projected to surpass $2 trillion in 2026 and approach $4 trillion by 2030 — but 2026 marks the sector's first real credit-cycle test.</p>
              <div class="post-card-footer">
                <span class="post-date">June 2026</span>
                <a data-route="articles/private-credit-2026" href="#" class="text-link">Read →</a>
              </div>
            </div>
          </article>
          <article class="post-card post-card--linked" data-route="articles/gold-2025">
            <img class="post-image" src="/images/articles/article-1/Article-1_Banner.jpg" alt="Gold's 2025 Surge" />
            <div class="post-body">
              <span class="post-category">Investing</span>
              <h3 class="post-title">Gold's 2025 Surge: Understanding the Drivers and Outlook for 2026</h3>
              <p class="post-excerpt">We are predicting a rise in gold prices up to $5,300/toz due to an increase in private sector investment into the gold market.</p>
              <div class="post-card-footer">
                <span class="post-date">May 2026</span>
                <a data-route="articles/gold-2025" href="#" class="text-link">Read →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Want to discuss any of these topics?</h2>
        <p>Our advisors are happy to talk through how these concepts apply to your specific situation.</p>
        <a data-route="contact" href="#" class="btn-primary-light">Start a Conversation</a>
      </div>
    </section>
  `
}
