export function renderHeader(): string {
  return `
    <nav class="nav-container">
      <a data-route="home" href="/" class="logo"><img src="/Eagle.png" alt="Merels Capital" height="32"/>Merels Capital</a>
      <div class="nav-links" id="nav-links">
        <a data-route="home" data-scroll="audience-content" href="/#audience-content">Services</a>
        <a data-route="home" data-scroll="philosophy" href="/#philosophy">Philosophy</a>
        <a data-route="home" data-scroll="approach" href="/#approach">Our Approach</a>
        <a data-route="home" data-scroll="insights" href="/#insights">Insights</a>
      </div>
      <div class="nav-actions" id="nav-actions">
        <a data-route="about" href="#">About Us</a>
        <a data-route="articles" href="#">Articles</a>
        <button id="book-now-btn" class="nav-cta">Book Now!</button>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `
}
