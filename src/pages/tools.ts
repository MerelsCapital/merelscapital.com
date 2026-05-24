export function renderTools(): string {
  return `
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">TOOLS</span>
          <h1>Free planning tools to help you think through the numbers.</h1>
          <p class="about-hero-subtitle">Practical calculators and assessments for retirement, taxes, savings, and investing. Use them on your own, or bring the results into a conversation with us.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-tools-banner.jpg"><img src="/images/desktop/page-tools-banner.jpg" alt="Financial planning tools from Merels Capital"></picture>
      </div>
    </section>

    <section class="posts-section bg-off-white">
      <div class="posts-section-inner">
        <div class="posts-grid">
          <a href="/tools/retirement-calculator/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Retirement</span>
              <h3 class="post-title">Retirement Savings Calculator</h3>
              <p class="post-excerpt">Estimate how much you need to save for retirement and whether you're on track. Adjust contributions, returns, and timeline to model different scenarios.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/retirement-quiz/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Retirement</span>
              <h3 class="post-title">Retirement Readiness Quiz</h3>
              <p class="post-excerpt">Answer a few questions to assess your retirement readiness and identify gaps in your plan.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/social-security/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Retirement</span>
              <h3 class="post-title">Social Security Timing Calculator</h3>
              <p class="post-excerpt">Find the optimal age to claim Social Security benefits based on your health, income needs, and break-even analysis.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/rmd-planner/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Retirement</span>
              <h3 class="post-title">Required Minimum Distribution Planner</h3>
              <p class="post-excerpt">Calculate your annual required minimum distributions from IRAs and retirement accounts and plan your withdrawal strategy.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/roth-conversion/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Retirement</span>
              <h3 class="post-title">Roth Conversion Calculator</h3>
              <p class="post-excerpt">Model the long-term impact of converting traditional IRA or 401(k) funds to a Roth account and find the optimal conversion amount.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/401k-rollover/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Retirement</span>
              <h3 class="post-title">401(k) Rollover Guide</h3>
              <p class="post-excerpt">Understand your options when leaving an employer — rolling over a 401(k) to an IRA, a new plan, or taking a distribution.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/529-planner/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Savings</span>
              <h3 class="post-title">529 College Savings Planner</h3>
              <p class="post-excerpt">Estimate how much to save for college using a 529 plan and project future account balances based on contributions and investment growth.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/savings-goal/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Savings</span>
              <h3 class="post-title">Savings Goal Calculator</h3>
              <p class="post-excerpt">Calculate how much you need to save each month to reach a specific financial goal — from an emergency fund to a major purchase.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/tax-savings/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Tax</span>
              <h3 class="post-title">Tax Savings Estimator</h3>
              <p class="post-excerpt">Estimate how much you could save in taxes through retirement plan contributions, deductions, and other strategies available to business owners.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
          <a href="/tools/risk-tolerance/" class="post-card post-card--linked post-card--no-image">
            <div class="post-body">
              <span class="post-category">Investing</span>
              <h3 class="post-title">Investment Risk Tolerance Assessment</h3>
              <p class="post-excerpt">Identify your investment risk tolerance and see what asset allocation might be appropriate for your goals and timeline.</p>
              <div class="post-card-footer">
                <span class="text-link">Open tool →</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Want help interpreting your results?</h2>
        <p>The tools give you a starting point. A conversation with a real advisor turns that starting point into a plan you can act on.</p>
        <a href="/contact/" class="btn-primary-light">Start a Conversation</a>
      </div>
    </section>
  `
}
