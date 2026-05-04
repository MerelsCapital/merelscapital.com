export function renderHeader(): string {
  return `
    <nav class="nav-container">
      <a data-route="home" href="/" class="logo"><img src="/Eagle.svg" alt="Merels Capital" height="32"/>Merels Capital</a>
      <div class="nav-links" id="nav-links">
        <a data-route="home" data-scroll="audience-content" href="/#audience-content">Services</a>
        <a data-route="home" data-scroll="philosophy" href="/#philosophy">Philosophy</a>
        <a data-route="home" data-scroll="approach" href="/#approach">Our Approach</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-trigger" id="articles-dropdown-btn" aria-expanded="false">
            Articles <span class="nav-dropdown-arrow">▾</span>
          </button>
          <div class="nav-dropdown-menu">
            <a data-route="guides/trusts" href="#">Trusts: A Detailed Overview</a>
            <a data-route="guides/retirement-planning" href="#">Retirement Planning Options</a>
            <a data-route="guides/tax-planning" href="#">Tax Planning for Business Owners</a>
            <a data-route="guides/cash-flow" href="#">Cash Flow Management</a>
            <a data-route="guides/employee-benefits" href="#">Employee Benefits</a>
            <div class="nav-dropdown-divider"></div>
            <a data-route="articles" href="#">All Articles</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown-trigger" id="tools-dropdown-btn" aria-expanded="false">
            Tools <span class="nav-dropdown-arrow">▾</span>
          </button>
          <div class="nav-dropdown-menu">
            <a data-route="tools/retirement-calculator" href="#">Retirement Calculator</a>
            <a data-route="tools/retirement-quiz" href="#">Retirement Readiness Quiz</a>
            <a data-route="tools/social-security" href="#">Social Security Optimizer</a>
            <a data-route="tools/rmd-planner" href="#">RMD Planner</a>
            <a data-route="tools/roth-conversion" href="#">Roth Conversion Analyzer</a>
            <a data-route="tools/401k-rollover" href="#">401k Rollover Comparison</a>
            <a data-route="tools/529-planner" href="#">529 Education Planner</a>
            <a data-route="tools/risk-tolerance" href="#">Risk Tolerance Questionnaire</a>
            <a data-route="tools/tax-savings" href="#">Tax Savings Estimator</a>
            <a data-route="tools/savings-goal" href="#">Savings Goal Estimator</a>
          </div>
        </div>
      </div>
      <div class="nav-actions" id="nav-actions">
        <a data-route="about" href="#">About Us</a>
        <button id="book-now-btn" class="nav-cta">Book Now!</button>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `
}
