export function renderHome(): string {
  return `
    <section id="hero">
      <div class="hero-left">
        <div class="hero-content">
          <p class="hero-eyebrow">Independent Wealth Management</p>
          <h1>Welcome to Merels Capital</h1>
          <p class="hero-subtitle">Where your financial life is managed with the depth, independence, and personal attention it deserves.</p>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Independent &amp; unconflicted</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="stat-number">Holistic</span>
              <span class="stat-label">Advice across every dimension of wealth</span>
            </div>
          </div>
          <div class="audience-tabs">
            <button class="audience-tab active" data-audience="individuals">Individuals &amp; Families</button>
            <button class="audience-tab" data-audience="family-offices">Family Offices</button>
            <button class="audience-tab" data-audience="small-businesses">Small Businesses</button>
          </div>
        </div>
      </div>
      <div class="hero-carousel">
        <div class="carousel-track" id="carousel-track">
          <div class="carousel-slide"><img src="/images/carousel-newyork.jpeg" alt="New York City skyline" loading="eager" fetchpriority="high" /></div>
          <div class="carousel-slide"><img src="/images/carousel-london.jpeg" alt="London skyline" loading="lazy" /></div>
          <div class="carousel-slide"><img src="/images/carousel-hongkong.jpeg" alt="Hong Kong skyline" loading="lazy" /></div>
          <div class="carousel-slide"><img src="/images/carousel-singapore.jpeg" alt="Singapore skyline" loading="lazy" /></div>
        </div>
        <div class="carousel-dots" id="carousel-dots">
          <button class="carousel-dot active" data-index="0" aria-label="New York City"></button>
          <button class="carousel-dot" data-index="1" aria-label="London"></button>
          <button class="carousel-dot" data-index="2" aria-label="Hong Kong"></button>
          <button class="carousel-dot" data-index="3" aria-label="Singapore"></button>
        </div>
      </div>
    </section>

    <section id="audience-content">
      <div class="audience-panel active" id="panel-individuals">
        <div class="content-row bg-off-white">
          <div class="content-row-inner">
            <div class="section-text">
              <span class="section-label">WHAT WE DO</span>
              <h2>Wealth advisory built around your vision of prosperity</h2>
              <p>We provide comprehensive financial planning and investment management grounded in what matters most to you—not an abstract benchmark. Every recommendation we make is shaped by your goals, your values, and the life you want to live.</p>
              <a data-route="individuals" href="#" class="text-link">Explore our approach →</a>
            </div>
            <img class="placeholder-image" src="/images/audience-individuals-whatwedo.jpg" alt="Wealth advisory partnership" />
          </div>
        </div>
        <div class="content-row bg-white">
          <div class="content-row-inner reverse">
            <img class="placeholder-image" src="/images/audience-individuals-partner.jpg" alt="A partner through every defining moment" />
            <div class="section-text">
              <span class="section-label">WHY WORK WITH US</span>
              <h2>A partner through every defining moment</h2>
              <p>The most important financial decisions in life rarely come with a roadmap. Whether you're navigating a liquidity event, planning for the next generation, or redefining what retirement means to you, we're here to provide clarity and confidence at every step.</p>
              <a href="/contact" class="text-link">Start a conversation →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="audience-panel" id="panel-family-offices">
        <div class="content-row bg-off-white">
          <div class="content-row-inner">
            <div class="section-text">
              <span class="section-label">WHAT WE DO</span>
              <h2>Serving the complexity of multi-generational wealth</h2>
              <p>Family offices require more than investment management—they demand coordinated oversight of governance, reporting, tax planning, and legacy strategy. We provide the institutional rigor and personalized service that complex family structures require.</p>
              <a data-route="family-offices" href="#" class="text-link">Explore our approach →</a>
            </div>
            <img class="placeholder-image" src="/images/audience-familyoffice-whatwedo.jpeg" alt="Family office wealth management" />
          </div>
        </div>
        <div class="content-row bg-white">
          <div class="content-row-inner reverse">
            <img class="placeholder-image" src="/images/audience-familyoffice-partner.jpeg" alt="Multi-generational family wealth" />
            <div class="section-text">
              <span class="section-label">WHY WORK WITH US</span>
              <h2>Independence that serves the family, not the institution</h2>
              <p>Our open-architecture approach and freedom from proprietary products means every recommendation is made in your family's best interest. We act as a trusted extension of your family office, bringing capabilities that would otherwise require an entire internal team.</p>
              <a href="/contact" class="text-link">Start a conversation →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="audience-panel" id="panel-small-businesses">
        <div class="content-row bg-off-white">
          <div class="content-row-inner">
            <div class="section-text">
              <span class="section-label">WHAT WE DO</span>
              <h2>Financial guidance for business owners at every stage</h2>
              <p>Running a business and building personal wealth require different disciplines—but they're inseparable. We help small business owners integrate their business and personal finances, plan for growth, and prepare for what comes next, whether that's succession, a sale, or retirement.</p>
              <a data-route="small-businesses" href="#" class="text-link">Explore our approach →</a>
            </div>
            <img class="placeholder-image" src="/images/audience-smallbusiness-whatwedo.jpg" alt="Small business financial planning" />
          </div>
        </div>
        <div class="content-row bg-white">
          <div class="content-row-inner reverse">
            <img class="placeholder-image" src="/images/audience-smallbusiness-partner.jpg" alt="Business owner wealth management" />
            <div class="section-text">
              <span class="section-label">WHY WORK WITH US</span>
              <h2>A partner who understands the complexity of business ownership</h2>
              <p>Most advisors treat business owners like any other client. We understand that your business is your largest asset, your primary income source, and often your retirement plan all at once. We bring the planning depth that complexity demands—so you can focus on running your business.</p>
              <a data-route="contact" href="#" class="text-link">Start a conversation →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="philosophy">
      <div class="philosophy-inner">
        <span class="section-label light">OUR PHILOSOPHY</span>
        <h2>Wealth management that begins with understanding who you are</h2>
        <div class="philosophy-columns">
          <p>At Merels Capital, we believe the most important work in wealth management happens before a single investment is made. It begins with a genuine understanding of who our clients are—their values, their ambitions, and the responsibilities they carry toward the people and causes they care about most.</p>
          <p>Our role is not simply to grow portfolios. It is to translate your financial life into a coherent, enduring strategy that serves your vision of prosperity—and that remains resilient across markets, milestones, and generations.</p>
        </div>
        <a href="/contact" class="btn-outline-light">Learn about our approach</a>
      </div>
    </section>

    <section id="approach">
      <div class="section-header centered">
        <span class="section-label">OUR INVESTMENT APPROACH</span>
        <h2>Investment expertise in service of your goals</h2>
        <p class="section-intro">Our investment methodlogy combines open-architecture independence with disciplined research giving you access to best-in-class opportunities without conflicts of interest.</p>
      </div>
      <div class="pillars-grid">
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Independent Research</h3>
          <p>Our analysis is never influenced by proprietary products or distribution incentives.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Open Architecture</h3>
          <p>We access the full investment universe to find solutions best suited to your goals.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Tailored Portfolios</h3>
          <p>No two clients receive the same portfolio—each is built around your specific situation.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Risk Intelligence</h3>
          <p>We build portfolios designed to weather uncertainty without sacrificing long-term growth.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Tax Efficiency</h3>
          <p>Investment decisions are never made in isolation from their tax consequences.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Strategic Allocation</h3>
          <p>Asset allocation is grounded in long-term fundamentals and your unique time horizon.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Generational Planning</h3>
          <p>We help families build wealth structures designed to endure across multiple generations.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Transparent Reporting</h3>
          <p>You always have a clear, consolidated view of your complete financial picture.</p>
        </div>
      </div> 
    </section>

    <section id="insights">
      <div class="section-header centered">
        <span class="section-label">HOW WE HELP</span>
        <h2>The complexity we navigate, every day</h2>
      </div>
      <div class="stories-grid">
        <div class="story-card">
           <img class="story-image" src="/images/stories-smallbusiness.jpg" alt="Small Business Planning" />
          <div class="story-content">
            <h3>Small Business Planning</h3>
            <p>After decades building a company, a liquidity event brings as many questions as answers. We help structure the transition, manage the tax implications, and build a lasting wealth plan for what comes next.</p>
          </div>
        </div>
        <div class="story-card">
          <img class="story-image" src="/images/stories-retirement.jpeg" alt="Retirement Planning" />
          <div class="story-content">
            <h3>Retirement Planning</h3>
            <p>Retirement isn't one-size-fits-all. We work with families to build financial plans that support their specific vision—whether that means travel, philanthropy, legacy, or simply peace of mind.</p>
          </div>
        </div>
        <div class="story-card">
          <img class="story-image" src="/images/stories-trusts.jpeg" alt="Trust Planning" />
          <div class="story-content">
            <h3>Trust Planning</h3>
            <p>A well-structured trust does more than transfer assets—it defines how wealth is held, managed, and distributed across generations. We help families identify the right trust structures and ensure they work in concert with the broader financial plan.</p>
          </div>
        </div>
        <div class="story-card">
          <img class="story-image" src="/images/stories-estateplanning.jpg" alt="Estate Planning" />
          <div class="story-content">
            <h3>Estate Planning</h3>
            <p>Multi-generational wealth requires more than financial management. We help families establish the structures and communication frameworks that keep wealth unified across generations.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Ready to explore what's possible?</h2>
        <p>Every client relationship begins with a conversation. Tell us where you are and where you want to go.</p>
        <button data-action="open-booking" class="btn-primary-light">Start a Conversation</button>
      </div>
    </section>
  `
}

let carouselTimer: ReturnType<typeof setInterval> | null = null

export function initHome(): void {
  // Audience tabs
  const tabs   = document.querySelectorAll<HTMLButtonElement>('.audience-tab')
  const panels = document.querySelectorAll<HTMLElement>('.audience-panel')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.audience
      tabs.forEach(t  => t.classList.remove('active'))
      panels.forEach(p => p.classList.remove('active'))
      tab.classList.add('active')
      const panel = document.getElementById(`panel-${target}`)
      if (panel) panel.classList.add('active')
      document.getElementById('audience-content')?.scrollIntoView({ behavior: 'smooth' })
    })
  })

  // Carousel
  if (carouselTimer) clearInterval(carouselTimer)

  const track = document.getElementById('carousel-track') as HTMLElement
  const dots  = document.querySelectorAll<HTMLButtonElement>('.carousel-dot')
  const total = dots.length
  let current = 0


  function goTo(index: number) {
    current = index
    track.style.transform = `translateX(-${current * 25}%)`
    dots.forEach((d, i) => d.classList.toggle('active', i === current))
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(Number(dot.dataset.index)))
  })

  carouselTimer = setInterval(() => goTo((current + 1) % total), 4500)
}
