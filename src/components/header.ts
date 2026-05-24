export function renderHeader(): string {
  return `
    <nav class="nav-container">
      <a href="/" class="logo"><img src="/Eagle.svg" alt="Merels Capital" height="32"/>Merels Capital</a>
      <div class="nav-links" id="nav-links">
        <a href="/#audience-content">Services</a>
        <a href="/#philosophy">Philosophy</a>
        <a href="/#approach">Our Approach</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-trigger" id="articles-dropdown-btn" aria-expanded="false">
            Articles <span class="nav-dropdown-arrow">▾</span>
          </button>
          <div class="nav-dropdown-menu">
            <a href="/guides/trusts/">Trusts: A Detailed Overview</a>
            <a href="/guides/retirement-planning/">Retirement Planning Options</a>
            <a href="/guides/tax-planning/">Tax Planning for Business Owners</a>
            <a href="/guides/cash-flow/">Cash Flow Management</a>
            <a href="/guides/employee-benefits/">Employee Benefits</a>
            <div class="nav-dropdown-divider"></div>
            <a href="/articles/">All Articles</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown-trigger" id="tools-dropdown-btn" aria-expanded="false">
            Tools <span class="nav-dropdown-arrow">▾</span>
          </button>
          <div class="nav-dropdown-menu">
            <a href="/tools/retirement-calculator/">Retirement Calculator</a>
            <a href="/tools/retirement-quiz/">Retirement Readiness Quiz</a>
            <a href="/tools/social-security/">Social Security Optimizer</a>
            <a href="/tools/rmd-planner/">RMD Planner</a>
            <a href="/tools/roth-conversion/">Roth Conversion Analyzer</a>
            <a href="/tools/401k-rollover/">401k Rollover Comparison</a>
            <a href="/tools/529-planner/">529 Education Planner</a>
            <a href="/tools/risk-tolerance/">Risk Tolerance Questionnaire</a>
            <a href="/tools/tax-savings/">Tax Savings Estimator</a>
            <a href="/tools/savings-goal/">Savings Goal Estimator</a>
          </div>
        </div>
      </div>
      <div class="nav-actions" id="nav-actions">
        <a href="/about/">About Us</a>
        <button id="book-now-btn" class="nav-cta">Book Now!</button>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `
}
