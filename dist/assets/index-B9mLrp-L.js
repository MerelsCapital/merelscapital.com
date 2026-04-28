(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new Map,t=new Map;function n(n,r,i){e.set(n,r),i&&t.set(n,i)}function r(e){return e===`home`?`/`:`/${e}`}function i(e){return e.replace(/^\//,``)||`home`}function a(n,r){let i=e.has(n)?n:`home`,a=document.getElementById(`main-content`);a.innerHTML=e.get(i)(),t.get(i)?.(),r?document.getElementById(r)?.scrollIntoView({behavior:`smooth`}):window.scrollTo({top:0,behavior:`instant`})}function o(e,t){history.pushState({route:e,scrollTarget:t},``,r(e)),a(e,t)}function s(){window.addEventListener(`popstate`,e=>{a(e.state?.route??i(location.pathname),e.state?.scrollTarget)}),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-route]`);t&&(e.preventDefault(),o(t.dataset.route,t.dataset.scroll))});let e=i(location.pathname);history.replaceState({route:e},``,r(e)),a(e)}function c(){return`
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
          <div class="carousel-slide"><img src="/images/carousel-newyork.jpeg" alt="New York City skyline" /></div>
          <div class="carousel-slide"><img src="/images/carousel-london.jpeg" alt="London skyline" /></div>
          <div class="carousel-slide"><img src="/images/carousel-hongkong.jpeg" alt="Hong Kong skyline" /></div>
          <div class="carousel-slide"><img src="/images/carousel-singapore.jpeg" alt="Singapore skyline" /></div>
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
        <p class="section-intro">Our investment platform combines open-architecture independence with disciplined research—giving you access to best-in-class opportunities without conflicts of interest.</p>
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
  `}var l=null;function u(){let e=document.querySelectorAll(`.audience-tab`),t=document.querySelectorAll(`.audience-panel`);e.forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.audience;e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let i=document.getElementById(`panel-${r}`);i&&i.classList.add(`active`),document.getElementById(`audience-content`)?.scrollIntoView({behavior:`smooth`})})}),l&&clearInterval(l);let n=document.getElementById(`carousel-track`),r=document.querySelectorAll(`.carousel-dot`),i=r.length,a=0;function o(e){a=e,n.style.transform=`translateX(-${a*25}%)`,r.forEach((e,t)=>e.classList.toggle(`active`,t===a))}r.forEach(e=>{e.addEventListener(`click`,()=>o(Number(e.dataset.index)))}),l=setInterval(()=>o((a+1)%i),4500)}function d(){return`
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
            <p>Most wealth management firms are built around products. The advice they give is shaped — even if subtly — by what they sell, what their parent company manufactures, and how their advisors are compensated. For clients, that creates a persistent question: is this recommendation in my interest, or theirs?</p>
            <p>We built Merels Capital to make that question unnecessary. By remaining independent — with no proprietary products, no parent company, and no distribution incentives — we can give advice that is structurally unconflicted. Not just claimed to be, but actually designed to be. Every recommendation we make stands on one criterion alone: is this the right thing for this client?</p>
            <p>We also believed that genuine wealth management requires a depth of relationship that large institutions struggle to provide. When your advisor changes every few years, when your portfolio is built from a centralized model, when you're one of thousands of clients — something important gets lost. We built this firm to be different on that dimension too: fewer clients, deeper relationships, senior advisors engaged at every stage.</p>
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
            <p>We don't arrive at a first meeting with a portfolio pre-loaded. Before we suggest anything, we spend time understanding your situation — your goals, your concerns, the trade-offs you're willing to make, and what prosperity actually means to you. The plan follows from that conversation, not the other way around.</p>
          </div>
          <div class="practice-card">
            <h3>We tell you what we actually think.</h3>
            <p>If an investment you're excited about doesn't make sense for your situation, we'll say so. If the market is doing something that doesn't change what you should do, we'll say that too. Our job is to give you our honest assessment — not to validate decisions you've already made or tell you what you want to hear.</p>
          </div>
          <div class="practice-card">
            <h3>We think about taxes every time.</h3>
            <p>An investment decision and a tax decision are the same decision. We don't treat tax planning as something that happens in April — it's embedded in every portfolio decision we make, from how we harvest losses to how we think about the location of assets across your accounts.</p>
          </div>
          <div class="practice-card">
            <h3>We stay engaged when it matters most.</h3>
            <p>The moments when clients most need their advisor — a business sale, an inheritance, a divorce, a market crisis — are exactly when some firms go quiet or hand you off to a junior associate. We remain directly involved at every inflection point, because those are the moments that define a financial life.</p>
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
  `}function f(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">INDIVIDUALS &amp; FAMILIES</span>
          <h1>Wealth advisory built around your life.</h1>
          <p class="about-hero-subtitle">Comprehensive financial planning and investment management for individuals and families at every stage of wealth.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/hero-individuals.jpg" alt="Wealth advisory for individuals and families" />
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">WHAT WE DO</span>
          <h2>Your entire financial picture, coordinated in one place</h2>
          <p>We provide fully integrated wealth management that goes beyond the portfolio. From financial planning and tax strategy to estate structures and insurance review, we coordinate every dimension of your financial life so nothing falls through the cracks.</p>
          <p>Our approach starts with understanding you — your goals, your values, and the trade-offs you're willing to make. Only then do we build a plan.</p>
        </div>
        <img class="placeholder-image" src="/images/page-individuals-whatwedo.jpg" alt="Individuals and families wealth planning" />
      </div>
    </section>

    <section class="section-padded bg-white">
      <div class="section-header centered">
        <span class="section-label">OUR SERVICES</span>
        <h2>How we serve individuals and families</h2>
        <p class="section-intro">Every service we provide is designed to work together as part of a coherent, coordinated strategy.</p>
      </div>
      <div class="pillars-grid">
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Financial Planning</h3>
          <p>Comprehensive planning across income, savings, goals, and life transitions.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Investment Management</h3>
          <p>Tailored portfolios built for your specific time horizon, risk tolerance, and objectives.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Tax Strategy</h3>
          <p>Proactive tax planning with investment decisions made with their full tax consequences in mind.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Estate Planning</h3>
          <p>Structuring your estate to pass wealth efficiently to the people and causes you care about.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Insurance Review</h3>
          <p>Objective analysis of your coverage — life, disability, liability, and long-term care.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Cash Flow Planning</h3>
          <p>Mapping income and spending to ensure your plan is funded now and in retirement.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Business Owner Services</h3>
          <p>Liquidity planning, exit strategy, and succession planning for owner-operators.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Retirement Income</h3>
          <p>Structuring assets to generate reliable, tax-efficient income throughout retirement.</p>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner reverse">
        <img class="placeholder-image" src="/images/page-individuals-partner.jpg" alt="A partner through every defining moment" />
        <div class="section-text">
          <span class="section-label">HOW WE HELP</span>
          <h2>A partner through every defining moment</h2>
          <p>The most consequential financial decisions rarely come with a manual. Whether you're approaching a business exit, navigating an inheritance, planning for a child's education, or thinking carefully about what retirement looks like for you — we provide clarity and confidence at every step.</p>
          <a data-route="contact" href="#" class="text-link">Start a conversation →</a>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Ready to build a plan that's truly yours?</h2>
        <p>Every engagement begins with an honest conversation about where you are and where you want to go.</p>
        <a data-route="contact" href="#" class="btn-primary-light">Schedule an Introduction</a>
      </div>
    </section>
  `}function p(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">FAMILY OFFICES</span>
          <h1>Institutional rigor for the families you serve.</h1>
          <p class="about-hero-subtitle">Coordinated investment management, governance, and reporting for single and multi-family office structures.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/hero-familyoffice.png" alt="Family office wealth management" />
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">WHAT WE DO</span>
          <h2>Serving the complexity of multi-generational wealth</h2>
          <p>Family offices require more than investment management — they demand coordinated oversight of governance, reporting, tax planning, and legacy strategy across generations. We provide the institutional rigor and personalized service that complex family structures require.</p>
          <p>We work as an extension of your family office, bringing capabilities that would otherwise require building an entire internal team.</p>
        </div>
        <img class="placeholder-image" src="/images/page-familyoffice-whatwedo.jpg" alt="Multi-generational family wealth" />
      </div>
    </section>

    <section class="section-padded bg-white">
      <div class="section-header centered">
        <span class="section-label">CAPABILITIES</span>
        <h2>What we bring to family offices</h2>
        <p class="section-intro">A full suite of capabilities designed to operate seamlessly alongside your existing family office structure.</p>
      </div>
      <div class="pillars-grid">
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Investment Oversight</h3>
          <p>Open-architecture investment management with access to the full investment universe.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Consolidated Reporting</h3>
          <p>A single, unified view of all assets, liabilities, and performance across entities.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Governance Support</h3>
          <p>Investment policy statement development, trustee support, and committee facilitation.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Tax Coordination</h3>
          <p>Multi-entity tax planning coordinated across personal, trust, and business structures.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Next-Generation Planning</h3>
          <p>Preparing rising generation members to steward and grow inherited wealth responsibly.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Philanthropic Strategy</h3>
          <p>Structuring charitable giving to maximize impact and tax efficiency across generations.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Alternative Investments</h3>
          <p>Access to private equity, real assets, and hedge strategies appropriate for family office portfolios.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Manager Selection</h3>
          <p>Independent evaluation and monitoring of external investment managers and strategies.</p>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner reverse">
        <img class="placeholder-image" src="/images/page-familyoffice-partner.jpg" alt="Independence that serves the family" />
        <div class="section-text">
          <span class="section-label">WHY WORK WITH US</span>
          <h2>Independence that serves the family, not the institution</h2>
          <p>Our open-architecture approach and freedom from proprietary products means every recommendation is made in your family's best interest. No hidden incentives, no preferred managers, no conflicts. Just straightforward advice from advisors who answer only to you.</p>
          <a data-route="contact" href="#" class="text-link">Start a conversation →</a>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Let's discuss how we can support your family office.</h2>
        <p>We work with family offices of all sizes and structures. Tell us about your situation.</p>
        <a data-route="contact" href="#" class="btn-primary-light">Get in Touch</a>
      </div>
    </section>
  `}function m(){return`
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
          <p>For most business owners, the line between personal and business finances is blurred by design. Your business is your largest asset, your primary income source, and often the foundation of your retirement plan. We help you manage that complexity—coordinating business cash flow, personal savings, tax strategy, and long-term planning into a single coherent picture.</p>
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
  `}function h(){return`
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
          <article class="post-card post-card--linked" data-route="articles/fed-2026">
            <img class="post-image" src="/images/articles/article-5/Article-5_Banner.jpg" alt="The Fed's New Reality" />
            <div class="post-body">
              <span class="post-category">Markets</span>
              <h3 class="post-title">The Fed's New Reality: Navigating Sticky Inflation and a Slowing Labor Market</h3>
              <p class="post-excerpt">The FOMC faces a complicated balancing act: headline inflation has reaccelerated on an energy spike while the labor market shows clear signs of cooling — pointing to a "higher for longer" rate environment.</p>
              <div class="post-card-footer">
                <span class="post-date">May 2026</span>
                <a data-route="articles/fed-2026" href="#" class="text-link">Read →</a>
              </div>
            </div>
          </article>
          <article class="post-card post-card--linked" data-route="articles/energy-2026">
            <img class="post-image" src="/images/articles/article-4/Article-4_Banner.jpg" alt="The Energy Sector: Data Center Demand Boom Meets Iranian War Supply Shocks" />
            <div class="post-body">
              <span class="post-category">Markets</span>
              <h3 class="post-title">The Energy Sector: Data Center Demand Boom Meets Iranian War Supply Shocks</h3>
              <p class="post-excerpt">Surging electricity demand from AI-powered data centers is colliding with acute geopolitical supply risks from the escalating war in Iran — reshaping commodity prices, utility revenues, and broader macroeconomic outcomes.</p>
              <div class="post-card-footer">
                <span class="post-date">April 2026</span>
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
                <span class="post-date">March 2026</span>
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
                <span class="post-date">February 2026</span>
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
                <span class="post-date">January 2026</span>
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
  `}function g(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">INVESTING</span>
          <h1>Gold's 2025 Surge: Drivers and Outlook for 2026</h1>
          <p class="about-hero-subtitle">May 28, 2026 &nbsp;·&nbsp; 8 min read</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/articles/article-1/Article-1_Banner.jpg" alt="Ancient gold coins" />
      </div>
    </section>

    <section class="article-body">
      <div class="article-container">

        <p class="article-lead">We are predicting a rise in gold prices up to $5,300/toz due to an increase in private sector investment into the gold market.</p>

        <p>Private sector investors hedge into gold primarily as a strategic diversifier and protection against persistent macro and policy uncertainties. Amid elevated geopolitical risks, fiscal sustainability concerns in advanced economies, potential currency debasement from high debt levels, and lingering inflation pressures, gold serves as a non-yielding asset with low correlation to traditional stocks and bonds, offering downside protection during market drawdowns or periods of volatility.</p>

        <h2>Key Catalysts Fueling Gold's Upward Momentum</h2>

        <p>Recent trends show private-sector demand broadening beyond central bank buying, with inflows into gold ETFs, physical bars and coins, and derivatives (like call options) reflecting "sticky" hedges against global policy risks — such as sanctions exposure, monetary fragmentation, or unexpected shifts in interest rates.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-1/Article-1_Image-1.png" alt="Gold ETF demand by quarter, 2014–2025" />
          <figcaption><strong>Exhibit 1:</strong> Gold ETFs dominated US gold demand in every quarter of 2025</figcaption>
        </figure>

        <p>The surging gold price, which reached 53 new all-time highs in 2025, created a self-reinforcing cycle of demand: as prices climbed, investment in gold ETFs increased in tandem with the rising underlying value of the metal. Consequently, gold ETFs emerged as a dominant force in the market, contributing approximately two-thirds of both quarterly and full-year demand.</p>

        <p>The strong momentum in central bank gold purchases, which intensified after Russia's reserves were frozen in February 2022, played a key role in supporting gold's price gains of 15% in 2023 and 26% in 2024. This official-sector demand became even more pronounced in 2025, fueling a dramatic 67% rally and pushing prices to new highs, with the spot gold price currently around $4,980 year-to-date. The acceleration stemmed from central banks increasingly competing with private investors for a constrained supply of physical bullion.</p>

        <p>This sustained official buying continues to underpin the market's structural strength, even as private-sector ETF inflows have also surged in response to the rising price environment.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-1/Article-1_Image-2.png" alt="Central bank gold demand 2010–2025" />
          <figcaption><strong>Exhibit 2:</strong> Central bank gold demand — Source: Metals Focus, Refinitiv GFMS, World Gold Council</figcaption>
        </figure>

        <p>Twenty-two central banks reported adding roughly one tonne or more to their gold reserves over the course of 2025, with just seven institutions accounting for the majority of the year's net purchases. The remaining buying activity came from a broad group of smaller, consistent acquirers, creating a diversified base of official-sector support for the market.</p>

        <p>This pattern of widespread yet concentrated demand from central banks aligns with the broader momentum seen in private investment flows, where ETF inflows have also accelerated amid the price rally. Additionally, individuals buying gold has increased, with high-net-worth families looking for ways to store gold as a hedge against inflation.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-1/Article-1_Image-3.png" alt="Google search trends for Gold, 2022–2026" />
          <figcaption><strong>Exhibit 3:</strong> Google searches for "Gold" — Source: Google Trends</figcaption>
        </figure>

        <p>In 2025, a notable portion of central bank gold accumulation continued to occur without immediate public disclosure. The persistent difference between Metals Focus' comprehensive estimates and officially reported figures points to significant unreported activity, accounting for approximately 57% of the year's total purchases. This pattern suggests that certain official institutions are steadily building their reserves discreetly — a trend that has been evident across recent years and reflects strategic timing or policy preferences among some buyers.</p>

        <p>This element of opaque official demand adds another layer of structural support to the gold market, complementing the visible private-sector inflows and the self-reinforcing price cycle driven by ETF investment.</p>

        <h2>The Enduring Impact of Macro Policy Hedging</h2>

        <p>It is our assumption that the driver behind gold's price rise is individuals, private institutions, and central banks hedging against potential changes in global macro policy, and that these hedges will remain in place through 2026.</p>

        <p>This stands in contrast to similar situations such as in early 2020, when gold rose approximately 25–30% from January to August peaks around $2,000/oz as a hedge against pandemic-induced lockdowns and economic shutdowns. The initial flight-to-safety was sharp, but as central banks flooded markets with liquidity and vaccines brought optimism, gold corrected notably in late 2020–early 2021, falling 15–20% from its highs.</p>

        <p>These perceived macro policy risks — such as concerns over long-term fiscal sustainability — appear to have taken on a more durable character among investors. Accordingly, we anticipate that hedging activity directed at these global macro policy uncertainties will remain relatively steady through 2026, as many of these underlying issues (such as structural debt dynamics or policy fragmentation) are unlikely to fully resolve within the year.</p>

        <h2>When Would We Revise Our Position</h2>

        <p>Gold rallies tend to reverse primarily when overall demand begins to weaken, which typically occurs due to one or more of the following developments: (1) a meaningful easing of geopolitical tensions that reduces the need for central banks to diversify reserves into gold; (2) a reduction in perceived macro policy risks that lessens private investors' motivation to hedge; or (3) a shift in Federal Reserve policy from rate-cutting to rate-hiking.</p>

        <p>On the central bank side, a sustained decline in demand toward or below pre-2022 levels (around 16 tonnes per month) would serve as a significant warning signal. Central bank gold demand has historically moved in extended cycles: net purchases often accelerate when the perceived neutrality or safety of traditional reserve assets weakens, as seen in the 1970s or following the 2022 freezing of Russian reserves. Conversely, once hedging needs subside, urgency to accumulate gold diminishes.</p>

        <p>From the private-sector perspective, Federal Reserve rate hikes could dampen gold demand through two channels: the classic opportunity-cost effect (higher yields make non-yielding assets less attractive) and reduced investor anxiety about central bank independence or policy credibility.</p>

        <h2>Gold Prices and Real Yields</h2>

        <p>Gold's relationship with bond yields is most reliably characterised as an inverse correlation with real yields — nominal Treasury yields adjusted for expected inflation, such as 10-year TIPS yields — rather than nominal yields alone. When real yields decline, the opportunity cost of holding non-yielding gold falls, making it more appealing relative to interest-bearing assets. Historical data shows strong negative correlations (frequently in the -0.6 to -0.8 range over multi-year periods) during eras of low or negative real rates, such as post-2008 quantitative easing or 2019–2021.</p>

        <p>However, this link is not fixed and has shown notable weakening in recent years, particularly since 2022–2023 and into 2026. Gold has at times risen or held firm even as real yields increased, supported by structural drivers including persistent central bank accumulation, geopolitical uncertainty, fiscal concerns, and private-sector diversification flows that outweigh traditional yield sensitivity.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-1/Article-1_Image-4.png" alt="Gold price vs inverted real 10-year Treasury yield" />
          <figcaption><strong>Exhibit 4:</strong> Gold price vs. inverted real 10-year Treasury yield — Source: longtermtrends.com</figcaption>
        </figure>

        <p>In summary, our outlook for gold remains constructive, with prices potentially climbing to $5,300 per ounce amid sustained demand from private investors, central banks, and high-net-worth individuals hedging against persistent uncertainties. While structural supports like diversification needs and official buying provide a strong foundation, vigilance is essential for potential reversals tied to easing geopolitical risks or shifts in Fed policy.</p>

        <div class="article-footer">
          <a data-route="articles" href="#" class="text-link">← Back to Articles</a>
        </div>

      </div>
    </section>
  `}function _(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">INVESTING</span>
          <h1>The Evolving Role of Private Credit in Corporate Debt Markets</h1>
          <p class="about-hero-subtitle">June 2026 &nbsp;·&nbsp; 10 min read</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/articles/article-2/Article-2_Banner.jpg" alt="Private credit and corporate debt markets" />
      </div>
    </section>

    <section class="article-body">
      <div class="article-container">

        <p class="article-lead">Private credit serves as a key financing avenue for businesses, especially in small and mid-sized sectors, as an option alongside conventional bank financing and capital markets. The sector has expanded substantially, with US assets under management hitting approximately $422 billion at the end of 2025.</p>

        <p>In this approach, non-bank lenders extend debt, and recent analyses project global private credit AUM surpassing $2 trillion in 2026, with forecasts approaching $4 trillion by 2030, driven by sustained investor inflows, expansion into asset-backed finance (ABF), and growth in new regions. Companies appreciate its dependability and adaptability, particularly in turbulent markets where broadly syndicated loans (BSL) or bond availability can waver. With stabilising economies, private credit is both rivalling and supporting BSL, delivering funding when traditional avenues are limited.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-2/Article-2_Image-1.jpg" alt="Private credit AUM growth" />
          <figcaption>Source: IMF</figcaption>
        </figure>

        <p>The move to private credit shows in origination figures. US direct lending deal volumes reached approximately $231 billion through the first nine months of 2025, with full-year estimates ranging from $300–$310 billion, indicating strong borrower interest in reliable closings despite competitive pressures. BSL volumes led for lower-rated entities in 2020 and 2021, but by 2022 the markets were roughly equal. From then on, private credit frequently outpaced BSL for B- and lower-rated debt — a pattern holding for the fourth year in 2025. This shift emphasises private credit's function in bridging voids in sentiment-sensitive public arenas, notably for firms with profiles less appealing to wide audiences.</p>

        <p>Future refinancing needs will challenge both systems' strength. Projections for US speculative-grade debt expirations show a sharp climb, with roughly $344 billion due from 2026 to 2028, more than half rated B- or below. From about $50 billion in 2026, these climb to a high of nearly $400 billion in 2028, then ease. Joint BSL and private credit originations topped $225 billion yearly in 2024 and 2025, indicating capacity for immediate demands, yet the 2028–2029 spike may call for additional channels. Lower-tier firms are poised to lean on private credit for assured delivery, mixing public and private sources to address growing needs.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-2/Article-2_Image-2.jpg" alt="US speculative-grade debt refinancing wall" />
          <figcaption>Source: S&P Global</figcaption>
        </figure>

        <p>Advances in fund financing are merging fund and securitisation lines, boosting liquidity for private equity and credit managers. Hybrid structures — such as feeder funds, net asset value (NAV) loans, and collateralised fund obligations — blend securitisation features like tiered credit and event-based triggers, delivering custom adaptability over typical collateralised loan obligations (CLOs). Managers employ these to cover capital call delays, enhance holdings, or offer credit support for limited partners (LPs), including insurers pursuing regulatory capital benefits. As the arena grows, standardisation is anticipated, driven by regulatory changes and demands for transparency, with some jurisdiction-specific variations persisting.</p>

        <p>Private credit's funders are broadening past banks, incorporating sovereign funds, pension plans, and life insurers adding new capital. Bank advances to private equity and credit funds hit $497 billion in Q2 2025, up 59% from Q4 2024, per the International Monetary Fund. This supports moves into asset-linked funding covering digital infrastructure and transport holdings, plus adaptive multi-strategy funds. Life insurers, aligning extended obligations with complex instruments, accelerate this via feeder notes reframing equity-like positions. Globally, EMEA and APAC are gaining traction, with APAC poised for the fastest regional expansion in 2026 due to infrastructure needs, digitalisation, and bank constraints.</p>

        <p>Private credit now reaches larger borrowers, with roughly 20% carrying over $500 million in obligations by 2025, up from 8% in 2021. This draws larger firms seeking quick closings and bespoke conditions, despite broader margins. Yet global strains affect the field, with cash interest coverage falling to approximately 1.6x mid-2025 from 2.4x in 2021. Defaults lingered near 4% in Q2 — below wider speculative benchmarks but reflecting growing tension, with downgrades at a yearly peak.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-2/Article-2_Image-3.jpg" alt="Private credit interest coverage and defaults" />
          <figcaption>Source: Lincoln International</figcaption>
        </figure>

        <p>As private credit matures in 2026, risks are evolving. Increasing competition has compressed yields to 8–8.5%, potentially eroding the illiquidity premium and raising "shadow default" rates — restructurings and amendments that avoid formal default — as borrowers opt for modifications over outright defaults. Liquidity concerns may intensify with rapid growth in complex structures, though interconnections with banks could provide stability by enabling risk-sharing.</p>

        <p>In fund finance, two common structures serve different purposes. NAV lending typically involves borrowing at 20–55% of the fund's loan-to-value ratio, allowing managers to increase potential returns by using borrowed capital to acquire additional assets or support existing investments. Leveraged feeders use higher leverage — usually 60–90% depending on strategy — and make it easier for regulated institutions to participate by splitting contributions into debt and equity layers, often with safety features such as reserved uncalled capital commitments. Significant risk transfers (SRTs) allow banks to pass credit risk from their loans to private credit funds, typically involving commercial loans or SME lending, with funds then adding leverage via repurchase agreements or NAV facilities.</p>

        <p>As interest from everyday investors grows — through vehicles like business development companies and ETFs — institutional managers may move toward more specialised, less liquid areas, driving further innovation. Access for retail investors is expanding rapidly via semi-liquid and evergreen funds. These now hold a substantial share of the US direct lending market, with evergreen private credit funds reaching approximately $644 billion in AUM as of mid-2025. Projections suggest retail involvement in private credit will continue to grow substantially by 2030, though this trend may encourage big institutions to focus on niche, less liquid opportunities such as asset-based finance.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-2/Article-2_Image-4.jpg" alt="Private credit retail and institutional AUM outlook" />
          <figcaption>Source: With Intelligence</figcaption>
        </figure>

        <p>2026 is shaping up as private credit's first substantive credit-cycle test. While global AUM is still on track to exceed $2 trillion — and approach $4 trillion by 2030 — growth will be more dispersed: strong in asset-backed finance (especially data centres, infrastructure, and AI-related lending), special situations, and larger deals, but tempered in core direct lending by heightened competition from returning banks and greater manager selectivity. Refinancing needs peaking in 2028 remain a tailwind for hybrid public–private solutions.</p>

        <p>The sector's maturation — greater transparency demands, standardisation, and liquidity-management discipline — will be accelerated by recent events. Yet its core strengths in certainty of execution, flexibility, and diversification position it to support lower-tier borrowers and capture new opportunities. Private credit is aiming to cement itself as a core pillar of corporate finance, now trying to prove its resilience under real stress.</p>

        <div class="article-footer">
          <a data-route="articles" href="#" class="text-link">← Back to Articles</a>
        </div>

      </div>
    </section>
  `}function v(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">MARKETS</span>
          <h1>The US Dollar in 2026: Navigating Cyclical Regimes Amid Persistent Global Dominance</h1>
          <p class="about-hero-subtitle">July 2026 &nbsp;·&nbsp; 12 min read</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/articles/article-3/Article-3_Banner.jpg" alt="The US Dollar in 2026" />
      </div>
    </section>

    <section class="article-body">
      <div class="article-container">

        <p class="article-lead">The US dollar remains the linchpin of the global financial system, serving as the primary reserve currency, a safe-haven asset, and the pricing benchmark for commodities and cross-border debt. The DXY stood at 97.61 as of February 27, 2026 — down 9.27% year-over-year but rebounding modestly on resilient US inflation and labour data.</p>

        <p>This article examines the dollar's historical patterns, its cyclical nature with supporting evidence, recent trends through early 2026, consensus forecasts for the next 12 months, and broader implications for investors, policy, and global markets. While structural factors like dollar dominance endure, the evidence strongly supports viewing the USD as a cyclical asset whose multi-year bull and bear regimes are driven by relative US economic performance, monetary policy differentials, and global risk sentiment.</p>

        <h2>Historical Analysis: Decades of Distinct Regimes</h2>

        <p>Since the end of the Bretton Woods system in 1971 and the advent of floating exchange rates in 1973, the dollar has exhibited prolonged periods of strength and weakness, typically lasting 8.7 years on average. These are not random fluctuations but regime shifts tied to macroeconomic fundamentals.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-3/Article-3_Image-1.png" alt="DXY historical bull and bear phases" />
          <figcaption>DXY periods of strength and weakness</figcaption>
        </figure>

        <p>Key historical episodes include:</p>

        <ul class="article-list">
          <li>The <strong>1970s bear market</strong> (roughly 1971–1978), when high US inflation and loose policy led to a ~32% decline in the DXY, boosting commodities and non-US assets.</li>
          <li>The powerful <strong>1980–1985 bull run</strong> (+96% peak), fuelled by Federal Reserve Chair Paul Volcker's aggressive rate hikes to combat inflation, which ended with the Plaza Accord as policymakers intervened to weaken the overvalued dollar.</li>
          <li>The <strong>1985–1992 bear phase</strong> (~51% drop), followed by a <strong>1992–2002 bull</strong> (~52% gain) amid US tech-led growth and the "strong dollar" policy under Treasury Secretary Robert Rubin.</li>
          <li>The <strong>2002–2008 bear</strong> (~40% decline) during the housing boom and global carry-trade era.</li>
          <li>The <strong>extended post-GFC bull from March 2008 to September 2022</strong> (+56%), driven by repeated safe-haven flows during crises (2008, 2011, 2020), US shale energy independence, and exceptional post-2021 rate hikes that widened yield differentials.</li>
        </ul>

        <p>These cycles remain highly relevant in 2026. The 2008–2022 bull, significanlty longer than the historical average at 14.5 years, reflected a combination of US growth outperformance, quantitative easing divergence, and the dollar's safe-haven status during COVID-19 volatility and the 2022 inflation shock. The subsequent weakening — which accelerated in the first half of 2025 with an ~11% drop, the largest since 1973 — mirrors classic bear-phase dynamics: narrowing interest-rate differentials as global central banks caught up, combined with capital reallocation toward higher-yielding or undervalued non-US assets.</p>

        <h2>Evidence That the Dollar Is a Cyclical Asset</h2>

        <p>The dollar qualifies as a cyclical asset because its value fluctuates systematically with the global business and financial cycles rather than drifting randomly or following a pure secular trend. Multiple independent lines of evidence support this.</p>

        <p><strong>Multi-year regime analysis</strong> demonstrates clear alternation between bull and bear phases averaging 9.25 years (bulls, +67% cumulative) and 8.3 years (bears, -41% cumulative). In bull phases, the S&amp;P 500 has historically outperformed global ex-US equities (220% vs. 43% cumulative); in bear phases, the reverse holds sharply (90% vs. 140%).</p>

        <p><strong>Correlation with relative economic fundamentals:</strong> Stronger US growth or higher real yields relative to the rest of the world reliably drives appreciation. Historical overlays show the dollar rising during periods when US GDP growth outpaces the G10 average and falling when the gap narrows.</p>

        <p><strong>The dollar in relation to global liquidity:</strong> The nominal effective dollar exchange rate tracks a global financial-conditions index with a correlation of -0.54 since 2000. A stronger dollar coincides with tighter global liquidity, higher risk aversion, and slower growth — especially in emerging-market and developing economies (EMDEs), where the correlation with output growth is -0.59 (2001–2021). A 10% dollar appreciation shock predicts a -1.5% trough in EMDE GDP after eight quarters, amplified by dollar-denominated debt burdens.</p>

        <p><strong>Safe-haven and risk-sentiment dynamics:</strong> In risk-off episodes (e.g., 2008, March 2020), the dollar surges as investors seek liquidity in the world's deepest markets; in risk-on expansions, it weakens as capital flows outward. This counter-cyclical element in crises but pro-cyclical link to US relative strength makes it distinctly cyclical.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-3/Article-3_Image-2.png" alt="Dollar cyclicality — empirical evidence" />
          <figcaption>Dollar correlation with global financial conditions and EMDE growth</figcaption>
        </figure>

        <p>These patterns contradict a purely structural narrative of inexorable decline. While gradual de-dollarisation trends exist, IMF COFER data show the dollar's share of allocated reserves hovering near 58–59% as of late 2025 — stable over the cycle. Valuation models (PPP, BEER) often show the dollar as 10–15% overvalued at peaks, setting the stage for mean-reversion bear phases.</p>

        <h2>Recent Trends: From Post-2022 Peak to Early-2026 Stabilisation</h2>

        <p>The dollar peaked near 114 in late 2022 amid the Federal Reserve's aggressive tightening campaign, which created the widest US yield advantage in years. It then entered a multi-phase decline: gradual in 2023–early 2024 as other central banks hiked, then sharper in 2025 as US growth expectations moderated, rate-cut pricing accelerated, and investors rotated into international equities and bonds. The first half of 2025 alone saw an ~11% drop, marking the end of the long bull cycle that began around 2011.</p>

        <p>In early 2026, the DXY has stabilised and rebounded modestly, trading in the 97–98 range. Drivers include hotter-than-expected January 2026 PPI (+0.5% m/m) reinforcing "higher for longer" expectations for Fed funds (currently 3.50%–3.75%), resilient jobless claims data, and speculation around potential tariff hikes that could support US growth. However, the 12-month trend remains decisively lower, with the broad index still reflecting a ~9% annualised softening.</p>

        <h2>Forecasts for the Next 12 Months</h2>

        <p>We project mild further net weakness in 2026, with the DXY likely trading in a 93–98 range and ending the year around 95–96, before potential stabilisation or modest rebound in 2027 as differentials bottom.</p>

        <p>The mild depreciation outlook stems from expected convergence in global growth rates, which historically correlates with dollar softening (-0.63 correlation with EMDE output growth over 1980–2021). IMF projections indicate global GDP expansion of 3.3% in 2026, outpacing anticipated US growth of around 2.0–2.5%, based on Q3 2025 US GDP at 2.1% annualised amid cooling consumer spending and investment. This narrowing gap reduces capital inflows to US assets as foreign economies recover from prior dollar-strength-induced slowdowns.</p>

        <p>Interest rate differentials further underpin the forecast. The Federal Reserve's December 2025 dot plot projects a modest 25 basis point reduction for 2026, potentially bringing the federal funds rate to 3.25–3.50% by year-end, assuming inflation moderates toward the 2% PCE target (projected at 2.4% for end-2026). Combined with stable or rising yields in G10 peers, this could compress US–G10 yield spreads from current levels near 1.5–2%, historically linked to 5–10% dollar declines per 1% of spread narrowing.</p>

        <p>Potential upside risks to the dollar include stronger US data, delayed Fed cuts, or risk-off events that trigger safe-haven flows. Volatility is expected to remain elevated due to policy uncertainty around tariffs, geopolitics, and the ongoing transition in the dollar cycle.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-3/Article-3_Image-3.png" alt="DXY projection through 2027" />
          <figcaption>Projection for DXY leading into 2027</figcaption>
        </figure>

        <h2>Broader Relevance: Investor Implications and Enduring Dominance</h2>

        <p>A weaker dollar regime typically benefits US exporters (via competitiveness), commodity producers (as most are dollar-denominated), and emerging-market assets (lower debt-service costs, capital inflows). International equities have historically outperformed in bear phases. For carry-trade strategies, the dollar's appeal as a high-carry funding or target currency has diminished as US–foreign rate spreads narrow, shifting opportunities toward higher-yielding EM currencies.</p>

        <p>Risks include an abrupt reversal if US exceptionalism reasserts (e.g., via productivity surprises from AI or deregulation), disorderly unwinds if fiscal sustainability concerns escalate, or a structural acceleration of de-dollarisation — though evidence suggests this remains gradual. The dollar's liquidity, rule-of-law backing, and network effects ensure its reserve status persists even through cyclical weakness.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-3/Article-3_Image-4.png" alt="IMF COFER global reserve currency shares" />
          <figcaption>Global reserve currency composition — Source: IMF COFER</figcaption>
        </figure>

        <h2>Conclusion</h2>

        <p>The US dollar in early 2026 sits at the intersection of a maturing cyclical bear phase and structural resilience. Historical regimes, robust empirical correlations with global financial conditions and EM growth, and consistent regime-shift patterns provide compelling evidence that the dollar is indeed a cyclical asset offering tactical opportunities for diversified portfolios. While 2026 forecasts lean toward moderate further softening, monitoring Fed projections, relative growth data, and risk sentiment will be key. Investors should prepare for volatility but recognise that reports of the dollar's demise remain, as ever, premature. The greenback's dominance endures; its value, however, will continue to dance to the rhythm of the global cycle.</p>

        <div class="article-footer">
          <a data-route="articles" href="#" class="text-link">← Back to Articles</a>
        </div>

      </div>
    </section>
  `}function y(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">MARKETS</span>
          <h1>The Energy Sector: Data Center Demand Boom Meets Iranian War Supply Shocks</h1>
          <p class="about-hero-subtitle">March 2026 &nbsp;·&nbsp; 8 min read</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/articles/article-4/Article-4_Banner.jpg" alt="The Energy Sector: Data Center Demand Boom Meets Iranian War Supply Shocks" />
      </div>
    </section>

    <section class="article-body">
      <div class="article-container">

        <p class="article-lead">As of March 2026, the global energy sector stands at a critical inflection point for investors. Surging electricity demand from AI-powered data centers is colliding with acute geopolitical supply risks stemming from the escalating war in Iran, including disruptions to the Strait of Hormuz. These dual forces are reshaping commodity prices, utility revenues, and broader macroeconomic outcomes.</p>

        <p>From a finance lens, this creates a bifurcated opportunity: upstream oil and gas producers stand to benefit from price spikes and risk premia, while utilities face a capex-driven growth cycle tempered by inflation pass-through challenges. Downstream, higher energy costs threaten to erode consumer spending and corporate margins, yet the scale of AI productivity gains far outweighs the drags.</p>

        <h2>The Data Center and AI Demand Explosion: Powering the Next Wave of Electricity Inflation</h2>

        <p>Global electricity demand is accelerating at its fastest pace in decades, with data centers and artificial intelligence emerging as the dominant structural driver, particularly in advanced economies. According to the IEA's Electricity 2026 report, worldwide electricity consumption is projected to rise by an average of 1,100 TWh annually between 2026 and 2030 (reaching 33,600 TWh by 2030), and growing at 3.6% per year thereafter — significantly higher than the prior decade and at least 2.5 times faster than overall energy demand. Emerging markets and developing economies (led by China) will drive ~80% of the growth, but advanced economies are experiencing a resurgence after 15 years of stagnation, with data centers playing an outsized role.</p>

        <p>In the United States, data centers alone are expected to account for roughly 50% of total electricity demand growth through 2030, adding over 420 TWh cumulatively and contributing nearly 2 percentage points to annual US power demand growth. The European Union sees a similar pattern, with data centers fueling a significant share of the buildings sector's 300 TWh increase. Data centers, currently ~7% of US power demand, are expected to drive ~40% of total US power demand growth over the next five years, adding 1.2 percentage points annually on average to overall demand.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-4/Article-4_Image-1.png" alt="IEA year-on-year electricity demand changes by region" />
          <figcaption>IEA: Year-on-year percent changes in electricity demand in selected regions, 2020–2030</figcaption>
        </figure>

        <p>Supply response lags badly. Regulatory approval times for new grid connections have stretched to a median 4.5 years (up from under 2 years in 2000), compounded by shortages of gas turbines, transformers, and skilled labour. Renewable additions are accelerating rapidly but remain intermittent. According to the EIA, developers plan a record 86 GW of new US utility-scale generating capacity in 2026, with solar accounting for 51% (~43 GW) and wind 14% (~12 GW), plus ~24 GW of battery storage. Globally, the IEA projects renewable generation to grow by ~1,000 TWh annually through 2030 (8% yearly growth), with solar PV alone contributing over 600 TWh. We expect wholesale power prices to rise sharply in tight markets as spare capacity shrinks.</p>

        <p>From our perspective, this is a boon for regulated utilities. Higher capex translates into rate-base growth and allowed returns, supporting dividends in the sector. However, the cost is being passed through: consumer electricity inflation is running at 6.9% year-over-year through December 2025 (versus 2.9% headline PCE), and we forecast it to hold near 6% in 2026–2027 before easing to ~3–3.5% in 2028 on softer natural gas prices.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-4/Article-4_Image-2.png" alt="FRED energy price per kWh" />
          <figcaption>US consumer electricity price per kWh — Source: FRED</figcaption>
        </figure>

        <h2>Iran Conflict and Strait of Hormuz Disruption</h2>

        <p>Overlaying this demand surge is the March 2026 escalation in Iran: Israeli and US military actions led to the death of Supreme Leader Ayatollah Ali Khamenei, prompting Iranian retaliatory missile and drone strikes across the region. Tanker traffic through the Strait of Hormuz (carrying ~20% of global oil and 19% of LNG) has been severely disrupted. Three tankers damaged, precautionary halts by shippers, and reports of explosions at Iran's Kharg Island terminal have already embedded significant risk premia.</p>

        <p>Iran itself produces ~3.5 mb/d crude plus condensate (4% of global supply) and exports heavily via the Strait (13.4 mb/d crude average in 2025 across key Gulf exporters). A full closure puts ~16 mb/d net oil at risk after pipeline offsets (~4.2 mb/d). LNG risk centres on Qatar's 80 mtpa flows. We estimate an immediate $18/bbl real-time risk premium in crude (98th percentile historically), pricing in roughly a one-month full halt or a 2.3 mb/d one-year disruption. Natural gas markets show smaller initial premia, but a one-month LNG halt could send European TTF prices to €74/MWh ($25/mmBtu) — 130% above current levels.</p>

        <p>The EIA's March 2026 Short-Term Energy Outlook (released March 10) explicitly incorporates these risks, revising Brent crude forecasts sharply higher: $79/bbl average in 2026 (up 37% from the prior outlook) and $64/bbl in 2027. Current spot Brent sits near $98/bbl as of March, and is expected to stay above $95/bbl short-term before easing. US crude production edges up modestly to 13.6 mb/d in 2026, aided by higher prices incentivising shale output.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-4/Article-4_Image-3.png" alt="EIA Brent crude price forecast" />
          <figcaption>EIA Brent crude forecast — Source: EIA Short-Term Energy Outlook, March 2026</figcaption>
        </figure>

        <h2>Price Transmission: Oil, Gas, Electricity, and the Interplay</h2>

        <p>The convergence is potent. Data-center demand lifts natural gas and power needs (US generation mix in 2026: 40% natural gas, 16% coal, 18% nuclear, with wind/solar approaching 20% combined and total renewables nearing 25%), while Iranian disruptions spike oil and risk LNG. EIA Henry Hub natural gas averages $3.76/MMBtu in 2026 (down from near-term winter spikes of $7.72/MMBtu in January 2026 due to Winter Storm Fern), but war-related LNG risks could push European prices far higher. Retail gasoline and diesel are forecast up 14.7% and 20.1% respectively in 2026.</p>

        <p>The shock is mostly limited to energy, muting second-round effects versus 2021–2022. Non-energy trade exposure to the Gulf is &lt;1% of global trade, and chemical/metal price spikes (e.g. 25% in methanol) add at most 0.1 percentage points to global inflation. Still, expected global GDP growth is closer to 2.6% (down from 2.9%) and headline inflation lifts to 2.9% Q4/Q4, with oil alone shaving 0.3% off GDP and adding 0.5–0.6 percentage points to inflation. Central banks have responded: front-end rates have sold off, pricing in +40 basis points higher end-2026 policy rates in the US.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-4/Article-4_Image-4.png" alt="Front-end rate pricing" />
          <figcaption>Front-end rate market pricing, 2026</figcaption>
        </figure>

        <h2>Renewables: Rapid Growth Amid Intermittency and Opportunity</h2>

        <p>Renewables are performing strongly and occupy a growing place in the market as the primary response to the structural demand surge. In 2025, wind and solar already supplied a record 19% of US net generation (utility-scale and small-scale solar). With the massive 2026 capacity pipeline, that share is on track to reach ~21% by 2027, and total renewables (including hydro and biomass) are forecast by the EIA to hit 25% in 2026 and 27% in 2027. Corporate power purchase agreements from hyperscalers have become a dominant financing mechanism — nearly half of all global corporate clean-energy procurement in 2025 came from data-center operators locking in long-term renewable supply to meet sustainability and hedging goals.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-4/Article-4_Image-5.jpeg" alt="IEA energy production by source" />
          <figcaption>Energy production by source — Source: IEA</figcaption>
        </figure>

        <p>Intermittency remains the main limiting factor: data centers require reliable 24/7 power, so renewables are typically paired with battery storage (which is itself seeing record additions) and flexible gas peakers. The Iranian supply shock indirectly boosts renewables by elevating fossil-fuel risk premia and wholesale prices, improving project economics and dispatch priority for existing wind and solar assets. Overall, renewables are no longer a marginal supplement — they are now the default lowest-cost source for incremental electricity supply and a critical hedge against geopolitical fossil-fuel volatility.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-4/Article-4_Image-6.jpeg" alt="IEA electricity usage by type" />
          <figcaption>Electricity usage by type — Source: IEA</figcaption>
        </figure>

        <h2>Investment Implications: Winners, Losers, and Portfolio Positioning</h2>

        <p>Upstream energy equities (majors with Middle East exposure or US shale) are positioned for windfall gains from higher oil realisations and risk premium. OPEC+ spare capacity and US production flexibility provide buffers, but sustained Hormuz issues could hold Brent well above $90/bbl. Refiners face mixed diesel/jet fuel margin upside. Utilities are the clearest structural play, with an estimated 7% annual capex growth through 2029, rate-base expansion, and regulated returns amid 6%+ electricity inflation. Regional differentiation matters, with Midwest and Texas names facing the sharpest wholesale price upside.</p>

        <p>Downside risks include regulatory pushback on cost allocation to data centers or prolonged outages (costing $8.4/kWh economically). Renewables developers, storage providers, and grid infrastructure companies (transformers, transmission) also benefit strongly from the flexibility needs highlighted by the IEA, with solar and battery plays particularly well-positioned for outsized returns given the record 2026 capacity additions and hyperscaler power purchase agreements.</p>

        <p>Broader markets face modest headwinds: a 0.2 percentage point consumer spending drag in 2026–2027, larger for lower-income households and data-center-heavy regions. However, AI's productivity boost dwarfs this drag in consumer spending.</p>

        <h2>Outlook and Key Risks for Investors</h2>

        <p>Base-case assumptions see Brent easing to the mid-$60s–$70s by late 2026 as disruptions ease and inventories build (+1.9 mb/d globally). Electricity inflation decelerates in 2028 on lower gas prices. However, risks are skewed to the upside: a prolonged closure of the Strait of Hormuz, Iranian production halts, or accelerated AI capex could all exacerbate market tightness.</p>

        <p>On the renewables side, our updated projections show continued robust expansion, with solar and wind expected to capture over 60% of incremental US electricity demand growth through 2027 and battery storage deployments more than doubling in key regions to manage intermittency. By 2028, the rapid buildout should begin easing long-term wholesale price pressures and further cushion the macro economy against fossil-fuel shocks.</p>

        <p>Investors should overweight energy names with strong free-cash-flow profiles and geographic diversification, pair utilities with data-center adjacency, and add dedicated exposure to renewable developers and storage technology. Hedge inflation via TIPS or short-duration bonds. Monitor Strait tanker flows, US/Iran communications, and capacity auction results. The next 6–12 months will separate winners in what is shaping up as the most consequential energy market reset since 2022.</p>

        <p>In summary, the 2026 energy sector offers compelling risk/reward for disciplined capital allocators. Data centers provide secular demand tailwinds; the Iranian conflict adds near-term price volatility and geopolitical premia; and the accelerating renewable buildout supplies both a long-term supply buffer and attractive investment opportunities. The net result: higher returns for energy investors, tempered macro drag, and a powerful reminder that the energy transition and geopolitics remain inextricably linked.</p>

        <div class="article-footer">
          <a data-route="articles" href="#" class="text-link">← Back to Articles</a>
        </div>

      </div>
    </section>
  `}function b(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">MARKETS</span>
          <h1>The Fed's New Reality: Navigating Sticky Inflation and a Slowing Labor Market</h1>
          <p class="about-hero-subtitle">April 2026 &nbsp;·&nbsp; 10 min read</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/articles/article-5/Article-5_Banner.jpg" alt="The Fed's New Reality" />
      </div>
    </section>

    <section class="article-body">
      <div class="article-container">

        <p class="article-lead">As the Federal Open Market Committee (FOMC) gathers for its April 28–29, 2026 meeting, one message is crystal clear: the era of easy monetary policy is over, at least for now. The U.S. economy remains resilient, but the Federal Reserve faces a complicated balancing act. Inflation has reaccelerated in the headline numbers, driven by a sharp energy spike tied to geopolitical tensions in the Middle East, while the labor market shows clear signs of cooling beneath a still-low unemployment rate.</p>

        <p>This is the Fed's new reality: sticky underlying inflation that refuses to cooperate with the 2% target, paired with a slowing labor market that is no longer adding jobs at a robust pace. The result? A likely "higher for longer" interest rate environment that will shape borrowing costs, investment decisions, and household finances well into 2027 and beyond.</p>

        <h2>The Inflation Surprise No One Wanted</h2>

        <p>On April 10, the Bureau of Labor Statistics released March 2026 Consumer Price Index (CPI) data that jolted markets and policymakers alike. Headline CPI rose 0.9% month-over-month — the largest gain in over a year — and 3.3% year-over-year, up sharply from 2.4% in February.</p>

        <p>The culprit? Energy. Gasoline prices surged as the ongoing conflict involving Iran disrupted oil supplies and WTI briefly surpassed $110/bbl in March. Food prices also remained elevated, with the food index up 2.7% over the past year.</p>

        <p>Core CPI (which strips out volatile food and energy) told a slightly better but still concerning story: it rose 2.6% year-over-year, only modestly above February's 2.5% reading. While core has been trending in the right direction for much of the past two years, progress has stalled.</p>

        <p>The Federal Reserve's preferred measure — core Personal Consumption Expenditures (PCE) price index — is projected at 2.7% for all of 2026 in the March Summary of Economic Projections (SEP), before easing to 2.2% in 2027 and 2.0% in 2028.</p>

        <p class="article-callout"><strong>Why this matters:</strong> Headline inflation grabs headlines and affects voter sentiment, but core inflation reveals the underlying trend. When energy prices spike and then fade, headline numbers can look better quickly. But if those spikes feed into wages, rents, or other services prices, inflation becomes "sticky" — harder for the Fed to dislodge without aggressive action.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-5/Article-5_Image-1.png" alt="CPI headline vs. core inflation year-over-year" />
          <figcaption>U.S. CPI headline vs. core inflation year-over-year, January 2023 – March 2026 — Source: Bureau of Labor Statistics</figcaption>
        </figure>

        <h2>The Labor Market: Resilient on the Surface, Fragile Beneath</h2>

        <p>At first glance, the labor market looks healthy. The unemployment rate has hovered around 4.3–4.4% for months, near historic lows and well below the Fed's long-run estimate of ~4.2–4.4%. But dig deeper and the picture changes.</p>

        <p>The February JOLTS (Job Openings and Labor Turnover Survey) report showed job openings falling to 6.882 million, the lowest level in years. The hiring rate dropped to 3.1%, its lowest since 2020. Nonfarm payroll growth has slowed markedly, and many economists now describe the market as "low-hire, low-fire." Companies are neither aggressively adding staff nor laying people off in large numbers.</p>

        <p>Several factors explain this:</p>
        <ul class="article-list">
          <li>Sharply lower immigration flows have reduced labour supply growth.</li>
          <li>AI and automation are beginning to substitute for certain roles, particularly in tech, finance, and administrative work.</li>
          <li>Businesses remain cautious after the 2025 government shutdown and amid ongoing policy uncertainty.</li>
        </ul>

        <p>The Fed's March SEP projects the unemployment rate at 4.4% for 2026, 4.3% in 2027, and 4.2% in 2028 — essentially flat. That stability masks a deeper truth: job growth is barely keeping pace with population increases in many forecasts.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-5/Article-5_Image-2.png" alt="Unemployment rate and total job openings" />
          <figcaption>Unemployment rate vs. total job openings (millions), 2022 – present — Source: BLS JOLTS, FRED</figcaption>
        </figure>

        <h2>The Dual Mandate in Conflict</h2>

        <p>The Fed's statutory goals are maximum employment and price stability (defined as 2% inflation over the longer run). For most of 2023–2025, these goals aligned nicely: inflation was falling while the labor market stayed strong. Now they are pulling in opposite directions.</p>

        <ul class="article-list">
          <li><strong>Inflation side:</strong> Energy-driven headline spikes and still-elevated core readings (especially in services and shelter) raise the risk that inflation expectations could drift higher. If households and businesses start expecting 3%+ inflation permanently, it becomes self-fulfilling through wage demands and pricing power.</li>
          <li><strong>Employment side:</strong> Further rate hikes or a prolonged hold could tip the already-softening labor market into outright contraction. The "low-hire, low-fire" dynamic is fragile — a shock could quickly turn into rising layoffs.</li>
        </ul>

        <p>This tension is exactly why Fed minutes from the March meeting noted that some participants judged there was a strong case for a "two-sided description" of future policy — meaning the Committee is now explicitly considering both rate cuts and possible hikes depending on incoming data.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-5/Article-5_Image-3.png" alt="The Fed's dual mandate in conflict" />
          <figcaption>The Fed's 2026 tightrope: price stability vs. maximum employment — Source: FOMC March 2026 SEP</figcaption>
        </figure>

        <h2>"Higher for Longer" — What It Actually Means</h2>

        <p>"Higher for longer" is no longer just Wall Street jargon. It means the federal funds rate — currently targeted at 3.50%–3.75% — is likely to stay in this elevated range well into 2027, rather than returning quickly to the near-zero levels of the 2010s or even the 2–3% range many expected in late 2025.</p>

        <p>The March dot plot (the "dots" showing each FOMC member's rate projection) shows the median federal funds rate path drifting higher than previous forecasts, with the long-run neutral rate now estimated around 3.1% — the highest since 2016.</p>

        <p>Why is this happening?</p>
        <ul class="article-list">
          <li>The oil shock has pushed 2026 inflation forecasts up.</li>
          <li>The labor market is cooling gradually, not collapsing, so the Fed does not feel urgent pressure to cut aggressively to save jobs.</li>
          <li>Strong corporate profits and AI-driven investment are supporting growth, giving the Fed room to be patient.</li>
        </ul>

        <p class="article-callout"><strong>Plain-language translation:</strong> Think of interest rates like the temperature in your house. The Fed wants the economy at a comfortable 72°F (2% inflation + full employment). Right now the thermostat is set too high because of the energy shock. Instead of immediately turning the AC on full blast (big rate cuts), the Fed is keeping the fan on medium ("higher for longer") until it's sure the temperature will stay down on its own.</p>

        <figure class="article-exhibit">
          <img src="/images/articles/article-5/Article-5_Image-4.png" alt="FOMC March 2026 dot plot" />
          <figcaption>FOMC dot plot — individual member projections for the federal funds rate, March 2026 — Source: Federal Reserve</figcaption>
        </figure>

        <h2>What This Means for Everyday Americans and Investors</h2>

        <ul class="article-list">
          <li><strong>Borrowers:</strong> Mortgage rates, auto loans, and credit cards are likely to stay higher than many hoped. Refinancing a 30-year mortgage may not make sense until late 2027 at the earliest.</li>
          <li><strong>Savers:</strong> High-yield savings accounts and CDs yielding 4–5% could remain attractive longer than expected — good news for retirees and emergency funds.</li>
          <li><strong>Homebuyers:</strong> Affordability remains challenged. Even if home prices cool modestly, the combination of high rates and sticky inflation keeps monthly payments elevated.</li>
          <li><strong>Stock market:</strong> Higher rates for longer typically pressure valuation multiples, especially for growth stocks. However, strong earnings growth (projected ~16% for S&P 500 companies in 2026) and AI tailwinds have so far offset much of that pressure.</li>
          <li><strong>Businesses:</strong> Higher borrowing costs make expansion and hiring more expensive. Companies with strong balance sheets and pricing power — tech, healthcare, consumer staples — will outperform.</li>
        </ul>

        <figure class="article-exhibit">
          <img src="/images/articles/article-5/Article-5_Image-5.png" alt="30-year mortgage rate vs. 10-year Treasury yield" />
          <figcaption>30-year fixed mortgage rate vs. 10-year Treasury yield, 2023–2026 — Source: Freddie Mac, FRED</figcaption>
        </figure>

        <h2>Risks on the Horizon</h2>

        <p>The biggest near-term wildcard is the Middle East conflict and oil prices. A quick resolution and falling energy costs could reopen the door to rate cuts by late 2026. A prolonged standoff keeps inflation sticky and raises the odds of at least one rate hike later this year — an outcome few expected six months ago.</p>

        <p>Other risks include:</p>
        <ul class="article-list">
          <li>Renewed tariff effects on goods prices.</li>
          <li>Disappointment in AI-driven productivity gains.</li>
          <li>A sharper-than-expected labour market deterioration.</li>
        </ul>

        <h2>The Bottom Line</h2>

        <p>The Federal Reserve is no longer in "emergency mode." It is managing a mature but uneven expansion where inflation is proving stickier than hoped and the labor market is cooling from the top. The April 28–29 decision is almost certain to hold rates steady, but the statement and press conference will be scrutinised for any shift in language around "two-sided risks."</p>

        <p>For investors and households, the message is clear: plan for a world where the cost of money stays elevated longer than the optimistic forecasts of 2025 suggested. Focus on quality, cash flow, and flexibility. The economy is not in crisis — but the Fed's job has become significantly harder.</p>

        <div class="article-footer">
          <a data-route="articles" href="#" class="text-link">← Back to Articles</a>
        </div>

      </div>
    </section>
  `}function x(){let e=document.getElementById(`contact-form`),t=document.getElementById(`contact-submit`),n=document.getElementById(`contact-feedback`);e.addEventListener(`submit`,async r=>{r.preventDefault(),t.disabled=!0,t.textContent=`Sending…`,n.hidden=!0,n.className=`contact-feedback`;let i=new FormData(e),a={first_name:i.get(`first_name`),last_name:i.get(`last_name`),email:i.get(`email`),phone:i.get(`phone`),subject:i.get(`subject`),message:i.get(`message`)};try{if((await fetch(`https://api.merelscapital.com/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)})).ok)n.textContent=`Your message has been sent. We'll be in touch shortly.`,n.classList.add(`contact-feedback--success`),e.reset(),t.textContent=`Message Sent`,window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`contact_form_complete`});else throw Error(`Server error`)}catch{n.textContent=`Something went wrong. Please try again or email us directly at info@merelscapital.com.`,n.classList.add(`contact-feedback--error`),t.disabled=!1,t.textContent=`Send Message`}n.hidden=!1})}function S(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">CONTACT</span>
          <h1>Let's start a conversation.</h1>
          <p class="about-hero-subtitle">No obligation, no pressure. Tell us a little about your situation and we'll be in touch.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/hero-contact.jpeg" alt="Contact Merels Capital" />
      </div>
    </section>

    <section class="contact-section bg-off-white">
      <div class="contact-inner">
        <div class="contact-form-col">
          <h2>Get in touch</h2>
          <p class="contact-intro">Fill out the form below and a member of our team will respond within one business day.</p>
          <form class="contact-form" id="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="contact-first">First Name</label>
                <input type="text" id="contact-first" name="first_name" placeholder="Jane" autocomplete="given-name" required />
              </div>
              <div class="form-group">
                <label for="contact-last">Last Name</label>
                <input type="text" id="contact-last" name="last_name" placeholder="Smith" autocomplete="family-name" required />
              </div>
            </div>
            <div class="form-group">
              <label for="contact-email">Email Address</label>
              <input type="email" id="contact-email" name="email" placeholder="jane@example.com" autocomplete="email" required />
            </div>
            <div class="form-group">
              <label for="contact-phone">Phone Number <span class="form-optional">(optional)</span></label>
              <input type="tel" id="contact-phone" name="phone" placeholder="(303) 555-0100" autocomplete="tel" />
            </div>
            <div class="form-group">
              <label for="contact-subject">I am interested in</label>
              <select id="contact-subject" name="subject">
                <option value="" disabled selected>Select a topic…</option>
                <option value="individuals">Wealth Management for Individuals &amp; Families</option>
                <option value="family-offices">Family Office Services</option>
                <option value="small-businesses">Small Business Services</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact-message">Message <span class="form-optional">(optional)</span></label>
              <textarea id="contact-message" name="message" rows="5" placeholder="Tell us a little about your situation…"></textarea>
            </div>
            <div id="contact-feedback" class="contact-feedback" hidden></div>
            <button type="submit" class="form-submit" id="contact-submit">Send Message</button>
            <p class="form-disclaimer">By submitting this form you agree to be contacted by Merels Capital. We will never sell or share your information with third parties.</p>
          </form>
        </div>

        <div class="contact-info-col">
          <div class="contact-info-block">
            <h3>Office</h3>
            <p>Denver, Colorado</p>
            <p>Serving clients nationally</p>
          </div>
          <div class="contact-info-block">
            <h3>Email</h3>
            <p><a href="mailto:info@merelscapital.com" class="text-link">info@merelscapital.com</a></p>
          </div>
          <div class="contact-info-block">
            <h3>Hours</h3>
            <p>Monday – Friday<br>8:00 AM – 5:00 PM MT</p>
          </div>
          <div class="contact-info-block">
            <h3>What to expect</h3>
            <p>We typically respond within one business day. An initial conversation is a no-obligation opportunity to learn whether Merels Capital is the right fit for your needs.</p>
          </div>
        </div>
      </div>
    </section>
  `}function C(){return`
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
  `}function w(){return`
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">Merels Capital</span>
        <p>Independent wealth management for individuals, families, and businesses.</p>
        <div class="footer-contact">
          <a href="tel:+13039014631" class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (303) 901-4631
          </a>
          <a href="mailto:contact@merelscapital.com" class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            contact@merelscapital.com
          </a>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61587203963262" target="_blank" rel="noopener" aria-label="Facebook">f</a>
          <a href="https://x.com/MerelsCapital" target="_blank" rel="noopener" aria-label="X">𝕏</a>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Services</h4>
          <a data-route="individuals" href="#">Individuals &amp; Families</a>
          <a data-route="family-offices" href="#">Family Offices</a>
          <a data-route="small-businesses" href="#">Small Businesses</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a data-route="about" href="#">About Us</a>
          <a data-route="articles" href="#">Articles</a>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="https://adviserinfo.sec.gov/firm/summary/339181" target="_blank" rel="noopener">ADV Documents</a>
          <a href="files/privacy-policy.pdf" download="privacy-policy.pdf" rel="noopener">Privacy Policy</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a data-route="contact" href="#">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Merels Capital. All rights reserved.</p>
      <p>Investment advisory services offered through Merels Capital, LLC, a registered investment adviser.</p>
    </div>
  `}n(`home`,c,u),n(`about`,d),n(`individuals`,f),n(`family-offices`,p),n(`small-businesses`,m),n(`articles`,h),n(`articles/gold-2025`,g),n(`articles/private-credit-2026`,_),n(`articles/usd-2026`,v),n(`articles/energy-2026`,y),n(`articles/fed-2026`,b),n(`contact`,S,x),document.getElementById(`header`).innerHTML=C(),document.getElementById(`footer`).innerHTML=w();var T=document.getElementById(`header`);window.addEventListener(`scroll`,()=>{T.classList.toggle(`scrolled`,window.scrollY>10)},{passive:!0});var E=document.getElementById(`mobile-menu-btn`),D=document.getElementById(`nav-links`),O=document.getElementById(`nav-actions`);E.addEventListener(`click`,()=>{let e=D.classList.toggle(`open`);O.classList.toggle(`open`,e),E.setAttribute(`aria-label`,e?`Close menu`:`Open menu`)});var k=document.getElementById(`book-now-btn`),A=document.getElementById(`booking-modal`),j=document.getElementById(`booking-modal-close`),M=A.querySelector(`.booking-modal-backdrop`),N=document.getElementById(`booking-iframe`),P=!1;function F(){P||=(N.src=`https://bookings.merelscapital.com`,!0),A.hidden=!1,document.body.style.overflow=`hidden`}k.addEventListener(`click`,F),document.addEventListener(`click`,e=>{e.target.closest(`[data-action="open-booking"]`)&&F()});function I(){A.hidden=!0,document.body.style.overflow=``}j.addEventListener(`click`,I),M.addEventListener(`click`,I),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&I()}),s();function L(){let e=[],t=new Date;for(;e.length<5;){t.setDate(t.getDate()+1);let n=t.toLocaleDateString(`en-CA`,{timeZone:`America/Denver`}),[r,i,a]=n.split(`-`).map(Number),o=new Date(r,i-1,a).getDay();o!==0&&o!==6&&e.push(n)}e.forEach(e=>fetch(`https://api.merelscapital.com/slots?date=${e}`).catch(()=>{}))}window.addEventListener(`load`,()=>{(window.requestIdleCallback??(e=>setTimeout(e,200)))(L)});