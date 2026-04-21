export function renderArticles(): string {
  return `
    <section class="about-hero">
      <div class="about-hero-inner">
        <span class="section-label light">ARTICLES</span>
        <h1>Plain-language guidance on complex topics.</h1>
        <p class="about-hero-subtitle">Educational content on financial planning, investing, tax strategy, and estate planning — written to inform, not to sell.</p>
      </div>
    </section>

    <section class="posts-section bg-off-white">
      <div class="posts-section-inner">
        <div class="posts-grid">
          <article class="post-card">
            <div class="post-image"></div>
            <div class="post-body">
              <span class="post-category">Financial Planning</span>
              <h3 class="post-title">What Does a Comprehensive Financial Plan Actually Include?</h3>
              <p class="post-excerpt">Many investors have an investment account but not a financial plan. We walk through what a true plan covers — and why the difference matters.</p>
              <span class="post-date">March 2026</span>
            </div>
          </article>
          <article class="post-card">
            <div class="post-image post-image-2"></div>
            <div class="post-body">
              <span class="post-category">Retirement</span>
              <h3 class="post-title">The 4% Rule: A Starting Point, Not a Prescription</h3>
              <p class="post-excerpt">The conventional 4% withdrawal rule is widely cited but frequently misapplied. Here's what it actually says — and what it doesn't.</p>
              <span class="post-date">February 2026</span>
            </div>
          </article>
          <article class="post-card">
            <div class="post-image post-image-3"></div>
            <div class="post-body">
              <span class="post-category">Investing</span>
              <h3 class="post-title">Active vs. Passive: A Framework for Deciding</h3>
              <p class="post-excerpt">The debate between active and passive investing is often treated as binary. The more useful question is: where does active management add value, and where doesn't it?</p>
              <span class="post-date">January 2026</span>
            </div>
          </article>
          <article class="post-card">
            <div class="post-image post-image-4"></div>
            <div class="post-body">
              <span class="post-category">Tax Strategy</span>
              <h3 class="post-title">Understanding Roth Conversions: When They Make Sense</h3>
              <p class="post-excerpt">Converting pre-tax retirement savings to Roth can be a powerful long-term strategy — but only under the right circumstances. We explain the key variables.</p>
              <span class="post-date">December 2025</span>
            </div>
          </article>
          <article class="post-card">
            <div class="post-image post-image-5"></div>
            <div class="post-body">
              <span class="post-category">Estate Planning</span>
              <h3 class="post-title">Revocable Trusts: What They Do (and Don't) Accomplish</h3>
              <p class="post-excerpt">Revocable living trusts are one of the most commonly recommended estate planning tools — and one of the most commonly misunderstood. Here's a clear-eyed look at the benefits and limitations.</p>
              <span class="post-date">November 2025</span>
            </div>
          </article>
          <article class="post-card">
            <div class="post-image post-image-6"></div>
            <div class="post-body">
              <span class="post-category">Financial Planning</span>
              <h3 class="post-title">How to Think About Risk Tolerance — Beyond the Questionnaire</h3>
              <p class="post-excerpt">Standard risk tolerance questionnaires measure how you feel about risk today, not how you'll behave when markets fall. Building a resilient portfolio requires going deeper.</p>
              <span class="post-date">October 2025</span>
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
