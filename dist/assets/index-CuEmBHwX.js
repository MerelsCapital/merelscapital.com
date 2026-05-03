(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new Map,t=new Map;function n(n,r,i){e.set(n,r),i&&t.set(n,i)}function r(e){return e===`home`?`/`:`/${e}`}function i(e){return e.replace(/^\//,``)||`home`}function a(n,r){let i=e.has(n)?n:`home`,a=document.getElementById(`main-content`);a.innerHTML=e.get(i)(),t.get(i)?.(),r?document.getElementById(r)?.scrollIntoView({behavior:`smooth`}):window.scrollTo({top:0,behavior:`instant`})}function o(e,t){history.pushState({route:e,scrollTarget:t},``,r(e)),a(e,t)}function s(){window.addEventListener(`popstate`,e=>{a(e.state?.route??i(location.pathname),e.state?.scrollTarget)}),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-route]`);t&&(e.preventDefault(),o(t.dataset.route,t.dataset.scroll))});let e=i(location.pathname);history.replaceState({route:e},``,r(e)),a(e)}function c(){return`
    <section id="hero">
      <div class="hero-left">
        <div class="hero-content">
          <p class="hero-eyebrow">Independent Wealth Management</p>
          <h1>Welcome to Merels Capital</h1>
          <p class="hero-subtitle">Financial planning for business owners, from your first hire through to your exit.</p>
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
            <button class="audience-tab active" data-audience="businesses">Businesses</button>
            <button class="audience-tab" data-audience="individuals">Individuals &amp; Families</button>
            <button class="audience-tab" data-audience="family-offices">Family Offices</button>
          </div>
        </div>
      </div>
      <div class="hero-carousel">
        <div class="carousel-track" id="carousel-track">
          <div class="carousel-slide"><img data-src="/images/desktop/carousel-newyork.jpeg" alt="New York City skyline" /></div>
          <div class="carousel-slide"><img data-src="/images/desktop/carousel-london.jpeg" alt="London skyline" /></div>
          <div class="carousel-slide"><img data-src="/images/desktop/carousel-hongkong.jpeg" alt="Hong Kong skyline" /></div>
          <div class="carousel-slide"><img data-src="/images/desktop/carousel-singapore.jpeg" alt="Singapore skyline" /></div>
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
      <div class="audience-panel active" id="panel-businesses">
        <div class="content-row bg-off-white">
          <div class="content-row-inner">
            <div class="section-text">
              <span class="section-label">WHAT WE DO</span>
              <h2>Financial guidance for business owners at every stage</h2>
              <p>Running a business and building personal wealth require different disciplines, but the two are inseparable. We help business owners integrate their business and personal finances, plan for growth, and prepare for what comes next, whether that's an exit, a succession, or retirement on your own terms.</p>
              <a data-route="businesses" href="#" class="text-link">Explore our approach →</a>
            </div>
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/audience-smallbusiness-whatwedo.jpg"><img class="placeholder-image" src="/images/desktop/audience-smallbusiness-whatwedo.jpg" alt="Business financial planning"></picture>
          </div>
        </div>
        <div class="content-row bg-white">
          <div class="content-row-inner reverse">
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/audience-smallbusiness-partner.jpg"><img class="placeholder-image" src="/images/desktop/audience-smallbusiness-partner.jpg" alt="Business owner wealth management"></picture>
            <div class="section-text">
              <span class="section-label">WHY WORK WITH US</span>
              <h2>A partner who understands the complexity of business ownership</h2>
              <p>Most advisors treat business owners like any other client. We understand that your business is your largest asset, your primary income source, and often your retirement plan all at once. We bring the planning depth that complexity demands, so you can focus on running your business.</p>
              <a data-route="contact" href="#" class="text-link">Start a conversation →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="audience-panel" id="panel-individuals">
        <div class="content-row bg-off-white">
          <div class="content-row-inner">
            <div class="section-text">
              <span class="section-label">WHAT WE DO</span>
              <h2>Wealth advisory built around your vision of prosperity</h2>
              <p>We provide comprehensive financial planning and investment management grounded in what matters most to you, not an abstract benchmark. Every recommendation we make is shaped by your goals, your values, and the life you want to live.</p>
              <a data-route="individuals" href="#" class="text-link">Explore our approach →</a>
            </div>
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/audience-individuals-whatwedo.jpg"><img class="placeholder-image" src="/images/desktop/audience-individuals-whatwedo.jpg" alt="Wealth advisory partnership"></picture>
          </div>
        </div>
        <div class="content-row bg-white">
          <div class="content-row-inner reverse">
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/audience-individuals-partner.jpg"><img class="placeholder-image" src="/images/desktop/audience-individuals-partner.jpg" alt="A partner through every defining moment"></picture>
            <div class="section-text">
              <span class="section-label">WHY WORK WITH US</span>
              <h2>A partner through every defining moment</h2>
              <p>The most important financial decisions in life rarely come with a roadmap. Whether you're navigating a liquidity event, planning for the next generation, or redefining what retirement means to you, we're here to provide clarity and confidence at every step.</p>
              <a data-route="contact" href="#" class="text-link">Start a conversation →</a>
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
              <p>Family offices require more than investment management. They demand coordinated oversight of governance, reporting, tax planning, and legacy strategy. We provide the institutional rigor and personalized service that complex family structures require.</p>
              <a data-route="family-offices" href="#" class="text-link">Explore our approach →</a>
            </div>
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/audience-familyoffice-whatwedo.jpeg"><img class="placeholder-image" src="/images/desktop/audience-familyoffice-whatwedo.jpeg" alt="Family office wealth management"></picture>
          </div>
        </div>
        <div class="content-row bg-white">
          <div class="content-row-inner reverse">
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/audience-familyoffice-partner.jpeg"><img class="placeholder-image" src="/images/desktop/audience-familyoffice-partner.jpeg" alt="Multi-generational family wealth"></picture>
            <div class="section-text">
              <span class="section-label">WHY WORK WITH US</span>
              <h2>Independence that serves the family, not the institution</h2>
              <p>Our open-architecture approach and freedom from proprietary products means every recommendation is made in your family's best interest. We act as a trusted extension of your family office, bringing capabilities that would otherwise require an entire internal team.</p>
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
          <p>At Merels Capital, we believe the most important work in wealth management happens before a single investment is made. It begins with a genuine understanding of who our clients are: their values, their ambitions, and the responsibilities they carry toward the people and causes they care about most.</p>
          <p>Our role is not simply to grow portfolios. It is to translate your financial life into a coherent, enduring strategy that serves your vision of prosperity, remaining resilient across markets, milestones, and generations.</p>
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
          <p>No two clients receive the same portfolio. Each is built around your specific situation.</p>
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
           <picture><source media="(max-width: 768px)" srcset="/images/mobile/stories-smallbusiness.jpg"><img class="story-image" src="/images/desktop/stories-smallbusiness.jpg" alt="Business Planning"></picture>
          <div class="story-content">
            <h3>Business Planning</h3>
            <p>After decades building a company, a liquidity event brings as many questions as answers. We help structure the transition, manage the tax implications, and build a lasting wealth plan for what comes next.</p>
          </div>
        </div>
        <div class="story-card">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/stories-retirement.jpeg"><img class="story-image" src="/images/desktop/stories-retirement.jpeg" alt="Retirement Planning"></picture>
          <div class="story-content">
            <h3>Retirement Planning</h3>
            <p>Retirement isn't one-size-fits-all. We work with families to build financial plans that support their specific vision, whether that means travel, philanthropy, legacy, or simply peace of mind.</p>
          </div>
        </div>
        <div class="story-card">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/stories-trusts.jpeg"><img class="story-image" src="/images/desktop/stories-trusts.jpeg" alt="Trust Planning"></picture>
          <div class="story-content">
            <h3>Trust Planning</h3>
            <p>A well-structured trust does more than transfer assets. It defines how wealth is held, managed, and distributed across generations. We help families identify the right trust structures and ensure they work in concert with the broader financial plan.</p>
          </div>
        </div>
        <div class="story-card">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/stories-estateplanning.jpg"><img class="story-image" src="/images/desktop/stories-estateplanning.jpg" alt="Estate Planning"></picture>
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
  `}var l=null;function u(){let e=document.querySelectorAll(`.audience-tab`),t=document.querySelectorAll(`.audience-panel`);e.forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.audience;e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let i=document.getElementById(`panel-${r}`);i&&i.classList.add(`active`),document.getElementById(`audience-content`)?.scrollIntoView({behavior:`smooth`})})}),window.matchMedia(`(min-width: 768px)`).matches&&document.querySelectorAll(`.carousel-slide img[data-src]`).forEach((e,t)=>{e.src=e.dataset.src,t===0?(e.setAttribute(`fetchpriority`,`high`),e.loading=`eager`):e.loading=`lazy`}),l&&clearInterval(l);let n=document.getElementById(`carousel-track`),r=document.querySelectorAll(`.carousel-dot`),i=r.length,a=0;function o(e){a=e,n.style.transform=`translateX(-${a*25}%)`,r.forEach((e,t)=>e.classList.toggle(`active`,t===a))}r.forEach(e=>{e.addEventListener(`click`,()=>o(Number(e.dataset.index)))}),l=setInterval(()=>o((a+1)%i),4500)}function d(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">ABOUT US</span>
          <h1>Built differently, by design.</h1>
          <p class="about-hero-subtitle">We believe the most complex financial lives belong to business owners, and that they deserve an advisor built around that complexity, not despite it.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/hero-aboutus.jpeg"><img src="/images/desktop/hero-aboutus.jpeg" alt="About Merels Capital"></picture>
      </div>
    </section>

    <section class="about-mission">
      <div class="about-mission-inner">
        <div class="about-pull-quote">
          <blockquote>
            "Our only obligation is to you. No parent company. No proprietary products. No hidden incentives. Just straightforward advice in your best interest, whether that means growing your business, protecting what you've built, or planning the exit on your terms."
          </blockquote>
        </div>
        <div class="about-story">
          <span class="section-label">OUR STORY</span>
          <h2>Founded on the belief that independence changes everything</h2>
          <p>Merels Capital was founded with a simple but consequential premise: that truly unconflicted advice requires structural independence. When an advisor has no proprietary products to sell and no parent company to answer to, every recommendation can be made purely on its merits.</p>
          <p>We built this firm primarily to serve business owners: founders, operators, and entrepreneurs whose financial lives don't fit neatly into a standard wealth management model. Your business is your largest asset, your income source, and often the foundation of your retirement. Managing that well requires an advisor who understands all of it, not just the investable assets.</p>
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
            <p>We have no parent company and sell no proprietary products. Our independence isn't a marketing claim. It is baked into how we're built. That structure is what allows us to give advice that is genuinely unconflicted, whether we're evaluating a retirement plan design or the structure of your business sale.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">◈</div>
            <h3>Understanding Before Action</h3>
            <p>We don't arrive at client meetings with a portfolio pre-loaded. Business owners face a different set of trade-offs than salaried employees: variable income, illiquid equity, and competing capital demands. We start by understanding yours before offering a single recommendation.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">◈</div>
            <h3>Long-Term Partnership</h3>
            <p>We measure our success over years, not quarters. We want to be the advisor you call when something changes in your business, and the one still there when you're ready to step back from it, whether that means a sale, a succession, or simply building enough outside the business that you have a choice.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-founding">
      <div class="about-founding-inner">
        <div class="section-header centered">
          <span class="section-label">WHY WE BUILT THIS FIRM</span>
          <h2>Because business owners deserve better than a standard wealth management playbook.</h2>
        </div>
        <div class="founding-body">
          <div class="founding-text">
            <p>Most wealth management firms are built around publicly traded portfolios. Their models assume a client with a salary, a 401(k), and a relatively predictable financial life. Business owners don't fit that model, and the advice they receive often reflects that mismatch.</p>
            <p>We built Merels Capital to serve clients whose wealth is built differently. For a business owner, the most important financial decisions often have nothing to do with stock selection: how to structure owner compensation, how to build retirement wealth inside the business, how to separate personal liquidity from operating capital, how to prepare for a transaction years in advance. These are the decisions that move the needle.</p>
            <p>We also believed that genuinely useful advice for business owners requires a depth of relationship that large institutions struggle to provide. When your situation changes, whether that brings a new partner, a line of credit, or a potential buyer, you need an advisor who already understands your business, not one who needs to be briefed from scratch. We built this firm to be that advisor: fewer clients, deeper relationships, senior advisors engaged at every stage.</p>
            <p>That is the firm we set out to build. It is the firm we intend to remain.</p>
          </div>
          <div class="founding-image">
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-aboutus-founding.jpg"><img src="/images/desktop/page-aboutus-founding.jpg" alt="A conversation at Merels Capital"></picture>
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
            <p>We don't arrive at a first meeting with a set of products to sell. Before we suggest anything, we spend time understanding your business, your goals, the trade-offs you're willing to make, and what financial independence actually looks like for you. The plan follows from that conversation, not the other way around.</p>
          </div>
          <div class="practice-card">
            <h3>We tell you what we actually think.</h3>
            <p>If a strategy you're considering doesn't make sense for your situation, we'll say so. If keeping capital in the business makes more sense than investing it, we'll say that too. Our job is to give you our honest assessment, not to validate decisions you've already made or recommend what's easiest for us to implement.</p>
          </div>
          <div class="practice-card">
            <h3>We think about taxes every time.</h3>
            <p>For business owners, tax planning isn't a year-end exercise. It is embedded in every decision, from how you structure compensation to how you time a liquidity event. We coordinate with your CPA and think about the tax consequences of every recommendation we make, because for business owners the tax tail often wags the dog.</p>
          </div>
          <div class="practice-card">
            <h3>We stay engaged when it matters most.</h3>
            <p>The moments when business owners most need an advisor, whether a potential acquisition, a partner dispute, or a sudden liquidity event, are exactly when some firms go quiet or hand you off to a junior associate. We remain directly involved at every inflection point, because those are the moments that define a financial life.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Let's start with a conversation.</h2>
        <p>No obligation, no pressure. Just a straightforward discussion about where your business is, where you want it to go, and how your personal finances fit into that picture.</p>
        <a data-route="contact" href="#" class="btn-primary-light">Get in Touch</a>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/hero-individuals.jpg"><img src="/images/desktop/hero-individuals.jpg" alt="Wealth advisory for individuals and families"></picture>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-individuals-whatwedo.jpg"><img class="placeholder-image" src="/images/desktop/page-individuals-whatwedo.jpg" alt="Individuals and families wealth planning"></picture>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-individuals-partner.jpg"><img class="placeholder-image" src="/images/desktop/page-individuals-partner.jpg" alt="A partner through every defining moment"></picture>
        <div class="section-text">
          <span class="section-label">HOW WE HELP</span>
          <h2>A partner through every defining moment</h2>
          <p>The most consequential financial decisions rarely come with a manual. Whether you're approaching a business exit, navigating an inheritance, planning for a child's education, or thinking carefully about what retirement looks like for you. We provide clarity and confidence at every step.</p>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/hero-familyoffice.png"><img src="/images/desktop/hero-familyoffice.png" alt="Family office wealth management"></picture>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-familyoffice-whatwedo.jpg"><img class="placeholder-image" src="/images/desktop/page-familyoffice-whatwedo.jpg" alt="Multi-generational family wealth"></picture>
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
          <h3>Minor &amp; Trust Accounts</h3>
          <p>Establishing custodial accounts, 529 plans, and irrevocable trusts to grow and protect assets designated for minor beneficiaries.</p>
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
          <h3>Concentrated Position Management</h3>
          <p>Strategic reduction and hedging of large single-stock or closely-held business positions to manage risk while minimising tax consequences.</p>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner reverse">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-familyoffice-partner.jpg"><img class="placeholder-image" src="/images/desktop/page-familyoffice-partner.jpg" alt="Independence that serves the family"></picture>
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
          <span class="section-label light">BUSINESSES</span>
          <h1>Wealth planning built around your business.</h1>
          <p class="about-hero-subtitle">Comprehensive financial guidance for business owners navigating growth, succession, and the transition to personal wealth.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/hero-smallbusiness.jpg"><img src="/images/desktop/hero-smallbusiness.jpg" alt="Small business financial planning"></picture>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">WHAT WE DO</span>
          <h2>Integrating your business and personal financial life</h2>
          <p>For most business owners, the line between personal and business finances is blurred by design. Your business is your largest asset, your primary income source, and often the foundation of your retirement plan. We help you manage that complexity by coordinating business cash flow, personal savings, tax strategy, and long-term planning into a single coherent picture.</p>
          <p>Whether you're in growth mode, preparing for a sale, or planning for the next generation, we bring the depth of planning your situation demands.</p>
        </div>
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-smallbusiness-whatwedo.jpg"><img class="placeholder-image" src="/images/desktop/page-smallbusiness-whatwedo.jpg" alt="Integrating business and personal finances"></picture>
      </div>
    </section>

    <section class="section-padded bg-white">
      <div class="section-header centered">
        <span class="section-label">HOW WE HELP</span>
        <h2>Services for business owners</h2>
        <p class="section-intro">From day-to-day planning to once-in-a-lifetime transactions, we support business owners, from sole proprietors to mid-market companies, across every dimension of their financial life.</p>
      </div>
      <div class="pillars-grid">
        <div class="pillar">
          <div class="pillar-icon">◈</div>
          <h3>Business Succession Planning</h3>
          <p>Structuring ownership transitions, whether to family, key employees, or a third-party buyer, to preserve value and minimize tax.</p>
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
          <p>Building and managing a diversified personal portfolio that complements your business exposure without duplicating it.</p>
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
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">EXIT STRATEGY &amp; SUCCESSION</span>
          <h2>Planning your exit before you need one</h2>
          <p>The most expensive mistake business owners make is waiting until they're ready to sell before thinking about the transaction. The decisions that determine how much you keep, including business structure, asset vs. stock sale, installment arrangements, and Qualified Small Business Stock exclusions, need to be made years in advance to have their full effect.</p>
          <p>We work with business owners well before a liquidity event to position the business and its ownership structure for the best possible after-tax outcome. That includes coordinating with M&amp;A attorneys and CPAs, evaluating third-party sale vs. internal succession options, and making sure the proceeds translate into a lasting personal financial plan, not just a large deposit that gets mismanaged post-close.</p>
          <ul class="content-list">
            <li>Pre-sale tax positioning and deal structure analysis</li>
            <li>Qualified Small Business Stock (QSBS) planning</li>
            <li>Installment sales, earnouts, and seller financing strategy</li>
            <li>Family and key-employee succession structuring</li>
            <li>Post-exit investment and income planning</li>
          </ul>
        </div>
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-smallbusiness-exit-strat.jpg"><img class="placeholder-image" src="/images/desktop/page-smallbusiness-exit-strat.jpg" alt="Exit and succession planning"></picture>
      </div>
    </section>

    <section class="content-row bg-white">
      <div class="content-row-inner reverse">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-smallbusiness-partner.jpg"><img class="placeholder-image" src="/images/desktop/page-smallbusiness-partner.jpg" alt="Business cash flow planning"></picture>
        <div class="section-text">
          <span class="section-label">CASH FLOW PLANNING</span>
          <h2>Separating personal wealth from business capital</h2>
          <p>Business owners often conflate their personal and business finances, drawing more when business is good, less when it isn't, and hoping it evens out. It rarely does. Without a deliberate structure separating business capital from personal income, it's difficult to build real personal wealth independent of the business, manage tax liability efficiently, or plan accurately for the future.</p>
          <p>We help owners establish a clear framework: how much to pay yourself in salary vs. distributions, how to build personal liquidity buffers that can weather a slow business cycle, and how to deploy excess business cash in a way that serves both the business and your personal balance sheet.</p>
          <ul class="content-list">
            <li>Salary vs. distribution optimization for S-Corp and LLC owners</li>
            <li>Personal liquidity planning independent of business performance</li>
            <li>Managing variable income through conservative spending frameworks</li>
            <li>Coordinating business and personal cash flow across tax years</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">OWNER RETIREMENT PLANS</span>
          <h2>Building retirement wealth inside your business</h2>
          <p>Business owners have access to some of the most powerful retirement savings vehicles available, but choosing the right one, and structuring it correctly, requires matching the plan to your business profile. A Solo 401(k) can allow a self-employed owner to defer up to $70,000 per year. A SEP-IRA is simpler but capped differently. A defined benefit or cash balance plan can allow high-income owners to defer $100,000 or more annually, with a significant tax deduction in the year of contribution.</p>
          <p>Getting this right matters enormously over time. We evaluate the full landscape of plan options for your situation and implement the structure that maximizes your retirement contributions, reduces your current tax burden, and integrates with your overall financial plan.</p>
          <ul class="content-list">
            <li>Solo 401(k): highest contribution limits for self-employed and owner-only businesses</li>
            <li>SEP-IRA: simple, flexible, no annual filing requirement</li>
            <li>SIMPLE IRA: designed for small businesses with a handful of employees</li>
            <li>Defined Benefit &amp; Cash Balance Plans: for high earners seeking outsized annual deferrals</li>
            <li>Profit-sharing plan design and annual contribution optimization</li>
          </ul>
        </div>
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-smallbusiness-owner-retirement.jpg"><img class="placeholder-image" src="/images/desktop/page-smallbusiness-owner-retirement.jpg" alt="Owner retirement plan design"></picture>
      </div>
    </section>

    <section class="content-row bg-white">
      <div class="content-row-inner reverse">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-smallbusiness-tax-efficiency.jpg"><img class="placeholder-image" src="/images/desktop/page-smallbusiness-tax-efficiency.jpg" alt="Tax-efficient wealth extraction"></picture>
        <div class="section-text">
          <span class="section-label">TAX-EFFICIENT WEALTH EXTRACTION</span>
          <h2>Keeping more of what your business generates</h2>
          <p>For business owners, the tax return is one of the most important financial planning documents of the year, and one of the most underutilized. The difference between a well-structured and a poorly structured owner compensation strategy can easily be tens of thousands of dollars annually, compounded over the life of a business.</p>
          <p>We work closely with your CPA to identify and implement strategies that legally reduce your tax burden at both the business and personal level, coordinating the timing of income, the structure of deductions, and the use of tax-advantaged accounts to build wealth more efficiently year over year.</p>
          <ul class="content-list">
            <li>Entity structure review: S-Corp, LLC, and C-Corp tax treatment</li>
            <li>Qualified Business Income (QBI) deduction optimization</li>
            <li>Section 179 and bonus depreciation strategies</li>
            <li>Roth conversion planning in low-income business years</li>
            <li>Charitable giving strategies, including Donor-Advised Funds and appreciated asset gifting</li>
            <li>Deferred compensation and benefits structuring</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner reverse">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-smallbusiness-who-we-serve.jpg"><img class="placeholder-image" src="/images/desktop/page-smallbusiness-who-we-serve.jpg" alt="Business owners at every stage"></picture>
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
        <button data-action="open-booking" class="btn-primary-light">Schedule a Consultation</button>
      </div>
    </section>
  `}function h(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">ARTICLES</span>
          <h1>Plain-language guidance on complex topics.</h1>
          <p class="about-hero-subtitle">Educational content on financial planning, investing, tax strategy, and estate planning. Written to inform, not to sell.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/hero-articles.jpeg"><img src="/images/desktop/hero-articles.jpeg" alt="Articles from Merels Capital"></picture>
      </div>
    </section>

    <section class="posts-section bg-off-white">
      <div class="posts-section-inner">
        <div class="posts-grid">
          <article class="post-card post-card--linked" data-route="articles/fed-2026">
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-5/Article-5_Banner.jpg"><img class="post-image" src="/images/desktop/articles/article-5/Article-5_Banner.jpg" alt="The Fed's New Reality"></picture>
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
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-4/Article-4_Banner.jpg"><img class="post-image" src="/images/desktop/articles/article-4/Article-4_Banner.jpg" alt="The Energy Sector: Data Center Demand Boom Meets Iranian War Supply Shocks"></picture>
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
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-3/Article-3_Banner.jpg"><img class="post-image" src="/images/desktop/articles/article-3/Article-3_Banner.jpg" alt="The US Dollar in 2026"></picture>
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
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-2/Article-2_Banner.jpg"><img class="post-image" src="/images/desktop/articles/article-2/Article-2_Banner.jpg" alt="Private Credit in Corporate Debt Markets"></picture>
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
            <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-1/Article-1_Banner.jpg"><img class="post-image" src="/images/desktop/articles/article-1/Article-1_Banner.jpg" alt="Gold's 2025 Surge"></picture>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-1/Article-1_Banner.jpg"><img src="/images/desktop/articles/article-1/Article-1_Banner.jpg" alt="Ancient gold coins"></picture>
      </div>
    </section>

    <section class="article-body">
      <div class="article-container">

        <p class="article-lead">We are predicting a rise in gold prices up to $5,300/toz due to an increase in private sector investment into the gold market.</p>

        <p>Private sector investors hedge into gold primarily as a strategic diversifier and protection against persistent macro and policy uncertainties. Amid elevated geopolitical risks, fiscal sustainability concerns in advanced economies, potential currency debasement from high debt levels, and lingering inflation pressures, gold serves as a non-yielding asset with low correlation to traditional stocks and bonds, offering downside protection during market drawdowns or periods of volatility.</p>

        <h2>Key Catalysts Fueling Gold's Upward Momentum</h2>

        <p>Recent trends show private-sector demand broadening beyond central bank buying, with inflows into gold ETFs, physical bars and coins, and derivatives (like call options) reflecting "sticky" hedges against global policy risks — such as sanctions exposure, monetary fragmentation, or unexpected shifts in interest rates.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-1/Article-1_Image-1.png"><img src="/images/desktop/articles/article-1/Article-1_Image-1.png" alt="Gold ETF demand by quarter, 2014–2025"></picture>
          <figcaption><strong>Exhibit 1:</strong> Gold ETFs dominated US gold demand in every quarter of 2025</figcaption>
        </figure>

        <p>The surging gold price, which reached 53 new all-time highs in 2025, created a self-reinforcing cycle of demand: as prices climbed, investment in gold ETFs increased in tandem with the rising underlying value of the metal. Consequently, gold ETFs emerged as a dominant force in the market, contributing approximately two-thirds of both quarterly and full-year demand.</p>

        <p>The strong momentum in central bank gold purchases, which intensified after Russia's reserves were frozen in February 2022, played a key role in supporting gold's price gains of 15% in 2023 and 26% in 2024. This official-sector demand became even more pronounced in 2025, fueling a dramatic 67% rally and pushing prices to new highs, with the spot gold price currently around $4,980 year-to-date. The acceleration stemmed from central banks increasingly competing with private investors for a constrained supply of physical bullion.</p>

        <p>This sustained official buying continues to underpin the market's structural strength, even as private-sector ETF inflows have also surged in response to the rising price environment.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-1/Article-1_Image-2.png"><img src="/images/desktop/articles/article-1/Article-1_Image-2.png" alt="Central bank gold demand 2010–2025"></picture>
          <figcaption><strong>Exhibit 2:</strong> Central bank gold demand — Source: Metals Focus, Refinitiv GFMS, World Gold Council</figcaption>
        </figure>

        <p>Twenty-two central banks reported adding roughly one tonne or more to their gold reserves over the course of 2025, with just seven institutions accounting for the majority of the year's net purchases. The remaining buying activity came from a broad group of smaller, consistent acquirers, creating a diversified base of official-sector support for the market.</p>

        <p>This pattern of widespread yet concentrated demand from central banks aligns with the broader momentum seen in private investment flows, where ETF inflows have also accelerated amid the price rally. Additionally, individuals buying gold has increased, with high-net-worth families looking for ways to store gold as a hedge against inflation.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-1/Article-1_Image-3.png"><img src="/images/desktop/articles/article-1/Article-1_Image-3.png" alt="Google search trends for Gold, 2022–2026"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-1/Article-1_Image-4.png"><img src="/images/desktop/articles/article-1/Article-1_Image-4.png" alt="Gold price vs inverted real 10-year Treasury yield"></picture>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-2/Article-2_Banner.jpg"><img src="/images/desktop/articles/article-2/Article-2_Banner.jpg" alt="Private credit and corporate debt markets"></picture>
      </div>
    </section>

    <section class="article-body">
      <div class="article-container">

        <p class="article-lead">Private credit serves as a key financing avenue for businesses, especially in small and mid-sized sectors, as an option alongside conventional bank financing and capital markets. The sector has expanded substantially, with US assets under management hitting approximately $422 billion at the end of 2025.</p>

        <p>In this approach, non-bank lenders extend debt, and recent analyses project global private credit AUM surpassing $2 trillion in 2026, with forecasts approaching $4 trillion by 2030, driven by sustained investor inflows, expansion into asset-backed finance (ABF), and growth in new regions. Companies appreciate its dependability and adaptability, particularly in turbulent markets where broadly syndicated loans (BSL) or bond availability can waver. With stabilising economies, private credit is both rivalling and supporting BSL, delivering funding when traditional avenues are limited.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-2/Article-2_Image-1.jpg"><img src="/images/desktop/articles/article-2/Article-2_Image-1.jpg" alt="Private credit AUM growth"></picture>
          <figcaption>Source: IMF</figcaption>
        </figure>

        <p>The move to private credit shows in origination figures. US direct lending deal volumes reached approximately $231 billion through the first nine months of 2025, with full-year estimates ranging from $300–$310 billion, indicating strong borrower interest in reliable closings despite competitive pressures. BSL volumes led for lower-rated entities in 2020 and 2021, but by 2022 the markets were roughly equal. From then on, private credit frequently outpaced BSL for B- and lower-rated debt — a pattern holding for the fourth year in 2025. This shift emphasises private credit's function in bridging voids in sentiment-sensitive public arenas, notably for firms with profiles less appealing to wide audiences.</p>

        <p>Future refinancing needs will challenge both systems' strength. Projections for US speculative-grade debt expirations show a sharp climb, with roughly $344 billion due from 2026 to 2028, more than half rated B- or below. From about $50 billion in 2026, these climb to a high of nearly $400 billion in 2028, then ease. Joint BSL and private credit originations topped $225 billion yearly in 2024 and 2025, indicating capacity for immediate demands, yet the 2028–2029 spike may call for additional channels. Lower-tier firms are poised to lean on private credit for assured delivery, mixing public and private sources to address growing needs.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-2/Article-2_Image-2.jpg"><img src="/images/desktop/articles/article-2/Article-2_Image-2.jpg" alt="US speculative-grade debt refinancing wall"></picture>
          <figcaption>Source: S&P Global</figcaption>
        </figure>

        <p>Advances in fund financing are merging fund and securitisation lines, boosting liquidity for private equity and credit managers. Hybrid structures — such as feeder funds, net asset value (NAV) loans, and collateralised fund obligations — blend securitisation features like tiered credit and event-based triggers, delivering custom adaptability over typical collateralised loan obligations (CLOs). Managers employ these to cover capital call delays, enhance holdings, or offer credit support for limited partners (LPs), including insurers pursuing regulatory capital benefits. As the arena grows, standardisation is anticipated, driven by regulatory changes and demands for transparency, with some jurisdiction-specific variations persisting.</p>

        <p>Private credit's funders are broadening past banks, incorporating sovereign funds, pension plans, and life insurers adding new capital. Bank advances to private equity and credit funds hit $497 billion in Q2 2025, up 59% from Q4 2024, per the International Monetary Fund. This supports moves into asset-linked funding covering digital infrastructure and transport holdings, plus adaptive multi-strategy funds. Life insurers, aligning extended obligations with complex instruments, accelerate this via feeder notes reframing equity-like positions. Globally, EMEA and APAC are gaining traction, with APAC poised for the fastest regional expansion in 2026 due to infrastructure needs, digitalisation, and bank constraints.</p>

        <p>Private credit now reaches larger borrowers, with roughly 20% carrying over $500 million in obligations by 2025, up from 8% in 2021. This draws larger firms seeking quick closings and bespoke conditions, despite broader margins. Yet global strains affect the field, with cash interest coverage falling to approximately 1.6x mid-2025 from 2.4x in 2021. Defaults lingered near 4% in Q2 — below wider speculative benchmarks but reflecting growing tension, with downgrades at a yearly peak.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-2/Article-2_Image-3.jpg"><img src="/images/desktop/articles/article-2/Article-2_Image-3.jpg" alt="Private credit interest coverage and defaults"></picture>
          <figcaption>Source: Lincoln International</figcaption>
        </figure>

        <p>As private credit matures in 2026, risks are evolving. Increasing competition has compressed yields to 8–8.5%, potentially eroding the illiquidity premium and raising "shadow default" rates — restructurings and amendments that avoid formal default — as borrowers opt for modifications over outright defaults. Liquidity concerns may intensify with rapid growth in complex structures, though interconnections with banks could provide stability by enabling risk-sharing.</p>

        <p>In fund finance, two common structures serve different purposes. NAV lending typically involves borrowing at 20–55% of the fund's loan-to-value ratio, allowing managers to increase potential returns by using borrowed capital to acquire additional assets or support existing investments. Leveraged feeders use higher leverage — usually 60–90% depending on strategy — and make it easier for regulated institutions to participate by splitting contributions into debt and equity layers, often with safety features such as reserved uncalled capital commitments. Significant risk transfers (SRTs) allow banks to pass credit risk from their loans to private credit funds, typically involving commercial loans or SME lending, with funds then adding leverage via repurchase agreements or NAV facilities.</p>

        <p>As interest from everyday investors grows — through vehicles like business development companies and ETFs — institutional managers may move toward more specialised, less liquid areas, driving further innovation. Access for retail investors is expanding rapidly via semi-liquid and evergreen funds. These now hold a substantial share of the US direct lending market, with evergreen private credit funds reaching approximately $644 billion in AUM as of mid-2025. Projections suggest retail involvement in private credit will continue to grow substantially by 2030, though this trend may encourage big institutions to focus on niche, less liquid opportunities such as asset-based finance.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-2/Article-2_Image-4.jpg"><img src="/images/desktop/articles/article-2/Article-2_Image-4.jpg" alt="Private credit retail and institutional AUM outlook"></picture>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-3/Article-3_Banner.jpg"><img src="/images/desktop/articles/article-3/Article-3_Banner.jpg" alt="The US Dollar in 2026"></picture>
      </div>
    </section>

    <section class="article-body">
      <div class="article-container">

        <p class="article-lead">The US dollar remains the linchpin of the global financial system, serving as the primary reserve currency, a safe-haven asset, and the pricing benchmark for commodities and cross-border debt. The DXY stood at 97.61 as of February 27, 2026 — down 9.27% year-over-year but rebounding modestly on resilient US inflation and labour data.</p>

        <p>This article examines the dollar's historical patterns, its cyclical nature with supporting evidence, recent trends through early 2026, consensus forecasts for the next 12 months, and broader implications for investors, policy, and global markets. While structural factors like dollar dominance endure, the evidence strongly supports viewing the USD as a cyclical asset whose multi-year bull and bear regimes are driven by relative US economic performance, monetary policy differentials, and global risk sentiment.</p>

        <h2>Historical Analysis: Decades of Distinct Regimes</h2>

        <p>Since the end of the Bretton Woods system in 1971 and the advent of floating exchange rates in 1973, the dollar has exhibited prolonged periods of strength and weakness, typically lasting 8.7 years on average. These are not random fluctuations but regime shifts tied to macroeconomic fundamentals.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-3/Article-3_Image-1.png"><img src="/images/desktop/articles/article-3/Article-3_Image-1.png" alt="DXY historical bull and bear phases"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-3/Article-3_Image-2.png"><img src="/images/desktop/articles/article-3/Article-3_Image-2.png" alt="Dollar cyclicality — empirical evidence"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-3/Article-3_Image-3.png"><img src="/images/desktop/articles/article-3/Article-3_Image-3.png" alt="DXY projection through 2027"></picture>
          <figcaption>Projection for DXY leading into 2027</figcaption>
        </figure>

        <h2>Broader Relevance: Investor Implications and Enduring Dominance</h2>

        <p>A weaker dollar regime typically benefits US exporters (via competitiveness), commodity producers (as most are dollar-denominated), and emerging-market assets (lower debt-service costs, capital inflows). International equities have historically outperformed in bear phases. For carry-trade strategies, the dollar's appeal as a high-carry funding or target currency has diminished as US–foreign rate spreads narrow, shifting opportunities toward higher-yielding EM currencies.</p>

        <p>Risks include an abrupt reversal if US exceptionalism reasserts (e.g., via productivity surprises from AI or deregulation), disorderly unwinds if fiscal sustainability concerns escalate, or a structural acceleration of de-dollarisation — though evidence suggests this remains gradual. The dollar's liquidity, rule-of-law backing, and network effects ensure its reserve status persists even through cyclical weakness.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-3/Article-3_Image-4.png"><img src="/images/desktop/articles/article-3/Article-3_Image-4.png" alt="IMF COFER global reserve currency shares"></picture>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-4/Article-4_Banner.jpg"><img src="/images/desktop/articles/article-4/Article-4_Banner.jpg" alt="The Energy Sector: Data Center Demand Boom Meets Iranian War Supply Shocks"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-4/Article-4_Image-1.png"><img src="/images/desktop/articles/article-4/Article-4_Image-1.png" alt="IEA year-on-year electricity demand changes by region"></picture>
          <figcaption>IEA: Year-on-year percent changes in electricity demand in selected regions, 2020–2030</figcaption>
        </figure>

        <p>Supply response lags badly. Regulatory approval times for new grid connections have stretched to a median 4.5 years (up from under 2 years in 2000), compounded by shortages of gas turbines, transformers, and skilled labour. Renewable additions are accelerating rapidly but remain intermittent. According to the EIA, developers plan a record 86 GW of new US utility-scale generating capacity in 2026, with solar accounting for 51% (~43 GW) and wind 14% (~12 GW), plus ~24 GW of battery storage. Globally, the IEA projects renewable generation to grow by ~1,000 TWh annually through 2030 (8% yearly growth), with solar PV alone contributing over 600 TWh. We expect wholesale power prices to rise sharply in tight markets as spare capacity shrinks.</p>

        <p>From our perspective, this is a boon for regulated utilities. Higher capex translates into rate-base growth and allowed returns, supporting dividends in the sector. However, the cost is being passed through: consumer electricity inflation is running at 6.9% year-over-year through December 2025 (versus 2.9% headline PCE), and we forecast it to hold near 6% in 2026–2027 before easing to ~3–3.5% in 2028 on softer natural gas prices.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-4/Article-4_Image-2.png"><img src="/images/desktop/articles/article-4/Article-4_Image-2.png" alt="FRED energy price per kWh"></picture>
          <figcaption>US consumer electricity price per kWh — Source: FRED</figcaption>
        </figure>

        <h2>Iran Conflict and Strait of Hormuz Disruption</h2>

        <p>Overlaying this demand surge is the March 2026 escalation in Iran: Israeli and US military actions led to the death of Supreme Leader Ayatollah Ali Khamenei, prompting Iranian retaliatory missile and drone strikes across the region. Tanker traffic through the Strait of Hormuz (carrying ~20% of global oil and 19% of LNG) has been severely disrupted. Three tankers damaged, precautionary halts by shippers, and reports of explosions at Iran's Kharg Island terminal have already embedded significant risk premia.</p>

        <p>Iran itself produces ~3.5 mb/d crude plus condensate (4% of global supply) and exports heavily via the Strait (13.4 mb/d crude average in 2025 across key Gulf exporters). A full closure puts ~16 mb/d net oil at risk after pipeline offsets (~4.2 mb/d). LNG risk centres on Qatar's 80 mtpa flows. We estimate an immediate $18/bbl real-time risk premium in crude (98th percentile historically), pricing in roughly a one-month full halt or a 2.3 mb/d one-year disruption. Natural gas markets show smaller initial premia, but a one-month LNG halt could send European TTF prices to €74/MWh ($25/mmBtu) — 130% above current levels.</p>

        <p>The EIA's March 2026 Short-Term Energy Outlook (released March 10) explicitly incorporates these risks, revising Brent crude forecasts sharply higher: $79/bbl average in 2026 (up 37% from the prior outlook) and $64/bbl in 2027. Current spot Brent sits near $98/bbl as of March, and is expected to stay above $95/bbl short-term before easing. US crude production edges up modestly to 13.6 mb/d in 2026, aided by higher prices incentivising shale output.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-4/Article-4_Image-3.png"><img src="/images/desktop/articles/article-4/Article-4_Image-3.png" alt="EIA Brent crude price forecast"></picture>
          <figcaption>EIA Brent crude forecast — Source: EIA Short-Term Energy Outlook, March 2026</figcaption>
        </figure>

        <h2>Price Transmission: Oil, Gas, Electricity, and the Interplay</h2>

        <p>The convergence is potent. Data-center demand lifts natural gas and power needs (US generation mix in 2026: 40% natural gas, 16% coal, 18% nuclear, with wind/solar approaching 20% combined and total renewables nearing 25%), while Iranian disruptions spike oil and risk LNG. EIA Henry Hub natural gas averages $3.76/MMBtu in 2026 (down from near-term winter spikes of $7.72/MMBtu in January 2026 due to Winter Storm Fern), but war-related LNG risks could push European prices far higher. Retail gasoline and diesel are forecast up 14.7% and 20.1% respectively in 2026.</p>

        <p>The shock is mostly limited to energy, muting second-round effects versus 2021–2022. Non-energy trade exposure to the Gulf is &lt;1% of global trade, and chemical/metal price spikes (e.g. 25% in methanol) add at most 0.1 percentage points to global inflation. Still, expected global GDP growth is closer to 2.6% (down from 2.9%) and headline inflation lifts to 2.9% Q4/Q4, with oil alone shaving 0.3% off GDP and adding 0.5–0.6 percentage points to inflation. Central banks have responded: front-end rates have sold off, pricing in +40 basis points higher end-2026 policy rates in the US.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-4/Article-4_Image-4.png"><img src="/images/desktop/articles/article-4/Article-4_Image-4.png" alt="Front-end rate pricing"></picture>
          <figcaption>Front-end rate market pricing, 2026</figcaption>
        </figure>

        <h2>Renewables: Rapid Growth Amid Intermittency and Opportunity</h2>

        <p>Renewables are performing strongly and occupy a growing place in the market as the primary response to the structural demand surge. In 2025, wind and solar already supplied a record 19% of US net generation (utility-scale and small-scale solar). With the massive 2026 capacity pipeline, that share is on track to reach ~21% by 2027, and total renewables (including hydro and biomass) are forecast by the EIA to hit 25% in 2026 and 27% in 2027. Corporate power purchase agreements from hyperscalers have become a dominant financing mechanism — nearly half of all global corporate clean-energy procurement in 2025 came from data-center operators locking in long-term renewable supply to meet sustainability and hedging goals.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-4/Article-4_Image-5.jpeg"><img src="/images/desktop/articles/article-4/Article-4_Image-5.jpeg" alt="IEA energy production by source"></picture>
          <figcaption>Energy production by source — Source: IEA</figcaption>
        </figure>

        <p>Intermittency remains the main limiting factor: data centers require reliable 24/7 power, so renewables are typically paired with battery storage (which is itself seeing record additions) and flexible gas peakers. The Iranian supply shock indirectly boosts renewables by elevating fossil-fuel risk premia and wholesale prices, improving project economics and dispatch priority for existing wind and solar assets. Overall, renewables are no longer a marginal supplement — they are now the default lowest-cost source for incremental electricity supply and a critical hedge against geopolitical fossil-fuel volatility.</p>

        <figure class="article-exhibit">
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-4/Article-4_Image-6.jpeg"><img src="/images/desktop/articles/article-4/Article-4_Image-6.jpeg" alt="IEA electricity usage by type"></picture>
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
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-5/Article-5_Banner.jpg"><img src="/images/desktop/articles/article-5/Article-5_Banner.jpg" alt="The Fed's New Reality"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-5/Article-5_Image-1.png"><img src="/images/desktop/articles/article-5/Article-5_Image-1.png" alt="CPI headline vs. core inflation year-over-year"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-5/Article-5_Image-2.png"><img src="/images/desktop/articles/article-5/Article-5_Image-2.png" alt="Unemployment rate and total job openings"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-5/Article-5_Image-3.png"><img src="/images/desktop/articles/article-5/Article-5_Image-3.png" alt="The Fed's dual mandate in conflict"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-5/Article-5_Image-4.png"><img src="/images/desktop/articles/article-5/Article-5_Image-4.png" alt="FOMC March 2026 dot plot"></picture>
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
          <picture><source media="(max-width: 768px)" srcset="/images/mobile/articles/article-5/Article-5_Image-5.png"><img src="/images/desktop/articles/article-5/Article-5_Image-5.png" alt="30-year mortgage rate vs. 10-year Treasury yield"></picture>
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
  `}function x(){let e=document.getElementById(`contact-form`),t=document.getElementById(`contact-submit`),n=document.getElementById(`contact-feedback`);e.addEventListener(`submit`,async r=>{r.preventDefault(),t.disabled=!0,t.textContent=`Sending…`,n.hidden=!0,n.className=`contact-feedback`;let i=new FormData(e),a={first_name:i.get(`first_name`),last_name:i.get(`last_name`),email:i.get(`email`),phone:i.get(`phone`),subject:i.get(`subject`),message:i.get(`message`)};try{if((await fetch(`https://api.merelscapital.com/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)})).ok)n.textContent=`Your message has been sent. We'll be in touch shortly.`,n.classList.add(`contact-feedback--success`),e.reset(),t.textContent=`Message Sent`,window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`contact_form_complete`});else throw Error(`Server error`)}catch{n.textContent=`Something went wrong. Please try again or email us directly at info@merelscapital.com.`,n.classList.add(`contact-feedback--error`),t.disabled=!1,t.textContent=`Send Message`}n.hidden=!1})}function ee(){return`
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">CONTACT</span>
          <h1>Let's start a conversation.</h1>
          <p class="about-hero-subtitle">No obligation, no pressure. Tell us a little about your situation and we'll be in touch.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/hero-contact.jpeg"><img src="/images/desktop/hero-contact.jpeg" alt="Contact Merels Capital"></picture>
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
                <option value="businesses">Business Services</option>
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
  `}var S=e=>`$`+Math.round(e).toLocaleString(`en-US`);function C(){return Math.sqrt(-2*Math.log(Math.random()||1e-10))*Math.cos(2*Math.PI*Math.random())}function w(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Retirement Calculator</h1>
          <p>Project your savings growth and estimate the probability your portfolio will last through retirement using Monte Carlo simulation across 500 market scenarios.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="rc-current-age">Current Age</label>
              <input type="number" id="rc-current-age" value="40" min="18" max="80" />
            </div>
            <div class="tool-field">
              <label for="rc-retirement-age">Target Retirement Age</label>
              <input type="number" id="rc-retirement-age" value="65" min="50" max="85" />
            </div>
            <div class="tool-field">
              <label for="rc-savings">Current Retirement Savings ($)</label>
              <input type="number" id="rc-savings" value="150000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc-contribution">Monthly Contribution ($)</label>
              <input type="number" id="rc-contribution" value="1500" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc-return">Expected Annual Return (%)</label>
              <input type="number" id="rc-return" value="7" min="1" max="20" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="rc-volatility">Annual Return Volatility (%) <span class="tool-label-hint">12% = typical diversified portfolio</span></label>
              <input type="number" id="rc-volatility" value="12" min="1" max="30" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="rc-income">Annual Income Needed in Retirement (today's $)</label>
              <input type="number" id="rc-income" value="80000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc-inflation">Inflation Rate (%)</label>
              <input type="number" id="rc-inflation" value="3" min="0" max="10" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="rc-years-retired">Years in Retirement</label>
              <input type="number" id="rc-years-retired" value="25" min="5" max="50" />
            </div>
            <button class="tool-calculate-btn" id="rc-calc-btn">Run Simulation</button>
          </div>
          <div class="tool-results" id="rc-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your details and click Run Simulation to see projected outcomes across 500 market scenarios.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">This tool uses Monte Carlo simulation for educational purposes only. Results are hypothetical projections and do not guarantee future performance. Past market behaviour does not predict future results. Consult a qualified financial advisor before making investment decisions.</p>
    </div>
  `}function T(){document.getElementById(`rc-calc-btn`)?.addEventListener(`click`,()=>{let e=e=>{document.getElementById(`rc-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},t=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n},n=e=>Number(document.getElementById(e).value),r=n(`rc-current-age`),i=n(`rc-retirement-age`),a=n(`rc-savings`),o=n(`rc-contribution`),s=n(`rc-return`)/100,c=n(`rc-volatility`)/100,l=n(`rc-income`),u=n(`rc-inflation`)/100,d=n(`rc-years-retired`);if(t(`rc-current-age`)===null)return e(`Please enter your current age.`);if(t(`rc-retirement-age`)===null)return e(`Please enter a target retirement age.`);if(i<=r)return e(`Retirement age must be greater than your current age.`);if(t(`rc-savings`)===null)return e(`Please enter your current savings (enter 0 if none).`);if(t(`rc-contribution`)===null)return e(`Please enter your monthly contribution (enter 0 if none).`);if(t(`rc-return`)===null)return e(`Please enter an expected annual return.`);if(t(`rc-volatility`)===null)return e(`Please enter an annual volatility.`);if(t(`rc-income`)===null)return e(`Please enter your desired annual retirement income.`);if(t(`rc-inflation`)===null)return e(`Please enter an inflation rate.`);if(t(`rc-years-retired`)===null)return e(`Please enter how many years you expect to be in retirement.`);let f=i-r;if(f<=0)return;let p=l*(1+u)**+f,m=[],h=0;for(let e=0;e<500;e++){let e=a;for(let t=0;t<f;t++){let t=s+c*C();e=e*(1+t)+o*12,e<0&&(e=0)}m.push(e);let t=e;for(let e=0;e<d;e++){let e=s+c*C();if(t=t*(1+e)-p,t<=0){t=0;break}}t>0&&h++}m.sort((e,t)=>e-t);let g=m[250],_=m[50],v=m[450],y=h/500*100,b=y>=80?`tool-metric-positive`:y>=60?`tool-metric-warning`:`tool-metric-negative`,x=y>=80?`Strong — portfolio likely sustains withdrawals`:y>=60?`Moderate — consider increasing contributions`:`At risk — significant shortfall in many scenarios`;document.getElementById(`rc-results`).innerHTML=`
      <h3>Results</h3>
      <div class="tool-metric">
        <div class="tool-metric-label">Success Probability</div>
        <div class="tool-metric-value ${b}">${y.toFixed(0)}%</div>
        <div class="tool-metric-sub">${x}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Projected Balance at Age ${i}</div>
        <div class="tool-metric-value">${S(g)}</div>
        <div class="tool-metric-sub">Median across 500 simulations</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Range (10th – 90th Percentile)</div>
        <div class="tool-metric-value" style="font-size:1.15rem">${S(_)} – ${S(v)}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Annual Income Needed (inflation-adjusted)</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${S(p)}</div>
        <div class="tool-metric-sub">In ${f} years at ${(u*100).toFixed(1)}% inflation</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Implied Portfolio Multiple at Retirement</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${(g/p).toFixed(1)}x annual income</div>
        <div class="tool-metric-sub">Rule of thumb: 25× is often cited as a target</div>
      </div>
    `})}var E=[{text:`How much of your income are you currently saving for retirement?`,options:[`Less than 5%`,`5–10%`,`10–15%`,`More than 15%`]},{text:`Do you have a dedicated retirement account (401k, IRA, etc.)?`,options:[`No retirement account`,`Yes, but contributions are inconsistent`,`Yes, and I contribute regularly`,`Yes, and I am maximising contributions`]},{text:`How many months of expenses do you have in an emergency fund?`,options:[`Less than 1 month`,`1–3 months`,`3–6 months`,`More than 6 months`]},{text:`Do you have a plan for healthcare coverage in retirement?`,options:[`No, I haven't thought about it`,`Aware of the issue but no plan yet`,`Partial plan (Medicare + supplemental)`,`Comprehensive plan including long-term care`]},{text:`Do you know how much you will need to retire comfortably?`,options:[`No idea`,`I have a rough guess`,`I have done some research`,`I have a detailed, written plan`]},{text:`What is your current debt situation?`,options:[`Significant high-interest debt`,`Moderate debt with a repayment plan`,`Only mortgage or low-interest debt`,`Little to no debt`]},{text:`Have you planned for income sources in retirement?`,options:[`Haven't thought about it`,`Social Security only`,`Social Security plus some savings`,`Multiple streams: SS, savings, pension, or part-time income`]},{text:`How would you describe your investment strategy?`,options:[`I don't invest`,`Basic investments, no clear strategy`,`A strategy, but reviewed infrequently`,`Clear, regularly reviewed strategy`]},{text:`Do you have estate planning documents in place (will, power of attorney, etc.)?`,options:[`None`,`I've thought about it but haven't acted`,`Some basics in place`,`Comprehensive estate plan completed`]},{text:`How confident are you that you are on track for retirement?`,options:[`Not at all confident`,`Somewhat worried`,`Reasonably confident`,`Very confident with a clear plan`]}],te=[{min:0,max:9,label:`Early Stage`,color:`#b91c1c`,desc:`Your retirement foundation is still being built. The good news: starting now has an outsized impact. Focus first on building an emergency fund and opening a retirement account, even with small contributions.`},{min:10,max:18,label:`Building Momentum`,color:`#b45309`,desc:`You have made a start and have some building blocks in place. Now is the time to increase consistency — in contributions, in planning, and in reviewing your strategy at least annually.`},{min:19,max:24,label:`On Track`,color:`#1a7a4a`,desc:`You are demonstrating solid retirement habits across most dimensions. Look for gaps — healthcare planning and estate documents are common areas where otherwise well-prepared people fall short.`},{min:25,max:30,label:`Well Prepared`,color:`#1B2774`,desc:`You have built a comprehensive retirement foundation. The priority now is maintaining your plan, reviewing it as life changes, and ensuring your estate and healthcare plans remain current.`}];function ne(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Retirement Readiness Quiz</h1>
          <p>Answer 10 questions to get a snapshot of your retirement preparedness across savings, income planning, healthcare, and estate planning.</p>
        </div>
      </div>
      <div class="tool-quiz-body">
        ${E.map((e,t)=>`
    <div class="quiz-question">
      <div class="quiz-question-number">Question ${t+1} of ${E.length}</div>
      <div class="quiz-question-text">${e.text}</div>
      <div class="quiz-options">
        ${e.options.map((e,n)=>`
          <label class="quiz-option">
            <input type="radio" name="q${t}" value="${n}" />
            <span>${e}</span>
          </label>
        `).join(``)}
      </div>
    </div>
  `).join(``)}
        <button class="tool-calculate-btn" id="rq-submit-btn">See My Results</button>
        <div id="rq-results" hidden></div>
      </div>
      <p class="tool-disclaimer">This quiz is for educational purposes only and does not constitute financial advice. For a personalised retirement plan, consult a qualified financial advisor.</p>
    </div>
  `}function re(){document.getElementById(`rq-submit-btn`)?.addEventListener(`click`,()=>{let e=0,t=0;for(let n=0;n<E.length;n++){let r=document.querySelector(`input[name="q${n}"]:checked`);r?e+=Number(r.value):t++}if(t>0){alert(`Please answer all questions (${t} remaining).`);return}let n=te.find(t=>e>=t.min&&e<=t.max),r=Math.round(e/30*100),i=document.getElementById(`rq-results`);i.hidden=!1,i.innerHTML=`
      <div class="quiz-result-card" style="background:${n.color}">
        <div class="quiz-result-score">${e} / 30</div>
        <div class="quiz-result-label">${n.label}</div>
        <div class="tool-progress-bar" style="max-width:320px;margin:1rem auto 1.25rem">
          <div class="tool-progress-fill" style="width:${r}%;background:rgba(255,255,255,0.7)"></div>
        </div>
        <div class="quiz-result-desc">${n.desc}</div>
      </div>
      <div style="text-align:center;margin-top:2rem">
        <p style="color:var(--text-light);margin-bottom:1rem">Want a personalised plan based on where you are today?</p>
        <button data-action="open-booking" class="tool-calculate-btn" style="max-width:280px;margin:0 auto">Talk to an Advisor</button>
      </div>
    `,i.scrollIntoView({behavior:`smooth`})})}var D=e=>`$`+Math.round(e).toLocaleString(`en-US`);function ie(e){return e<=1954?66:e===1955?66.16666666666667:e===1956?66.33333333333333:e===1957?66.5:e===1958?66.66666666666667:e===1959?66.83333333333333:67}function O(e){return e<=1954?`66`:e===1955?`66 + 2 months`:e===1956?`66 + 4 months`:e===1957?`66 + 6 months`:e===1958?`66 + 8 months`:e===1959?`66 + 10 months`:`67`}function k(e){let t=e*.75/12,n=1174,r=7078,i=0;return i=t<=n?t*.9:t<=r?n*.9+(t-n)*.32:n*.9+(r-n)*.32+(t-r)*.15,Math.min(i,3822)}function A(){let e=new Date().getFullYear();return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Social Security Optimizer</h1>
          <p>Estimate your Social Security benefits at different claiming ages and explore spousal strategies to maximise your lifetime income.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="ss-birth-year">Your Birth Year</label>
              <input type="number" id="ss-birth-year" value="${e-55}" min="1944" max="${e-40}" />
            </div>
            <div class="tool-field">
              <label for="ss-income">Current Annual Income ($)</label>
              <input type="number" id="ss-income" value="90000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ss-marital">Marital Status</label>
              <select id="ss-marital">
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
            <div id="ss-spouse-section" hidden>
              <div class="tool-field">
                <label for="ss-spouse-income">Spouse Annual Income ($) <span class="tool-label-hint">0 if not working</span></label>
                <input type="number" id="ss-spouse-income" value="60000" min="0" />
              </div>
              <div class="tool-field">
                <label for="ss-spouse-birth-year">Spouse Birth Year</label>
                <input type="number" id="ss-spouse-birth-year" value="${e-53}" min="1944" max="${e-40}" />
              </div>
            </div>
            <button class="tool-calculate-btn" id="ss-calc-btn">Estimate Benefits</button>
          </div>
          <div class="tool-results" id="ss-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see estimated benefits at each claiming age and breakeven analysis.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Estimates are based on simplified Social Security benefit formulas and assume a consistent career earnings history. Actual benefits are determined by the SSA based on your full earnings record. This is for educational purposes only.</p>
    </div>
  `}function ae(){let e=document.getElementById(`ss-marital`),t=document.getElementById(`ss-spouse-section`);e.addEventListener(`change`,()=>{t.hidden=e.value!==`married`}),document.getElementById(`ss-calc-btn`)?.addEventListener(`click`,()=>{let t=e=>{document.getElementById(`ss-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},n=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n},r=new Date().getFullYear();if(n(`ss-birth-year`)===null)return t(`Please enter your birth year.`);let i=Number(document.getElementById(`ss-birth-year`).value);if(i<1924||i>r-40)return t(`Please enter a valid birth year.`);if(n(`ss-income`)===null||Number(document.getElementById(`ss-income`).value)<0)return t(`Please enter your current annual income.`);if(e.value===`married`){if(n(`ss-spouse-income`)===null)return t(`Please enter your spouse's annual income (enter 0 if not working).`);if(n(`ss-spouse-birth-year`)===null)return t(`Please enter your spouse's birth year.`)}let a=Number(document.getElementById(`ss-birth-year`).value),o=Number(document.getElementById(`ss-income`).value),s=e.value===`married`,c=s?Number(document.getElementById(`ss-spouse-income`).value):0,l=s?Number(document.getElementById(`ss-spouse-birth-year`).value):0,u=ie(a),d=O(a),f=k(o),p=(u-62)*12,m=0;m=p<=36?5/900*p:5/900*36+(p-36)*(5/1200);let h=f*(1-m),g=f,_=f*(1+(70-u)*.08),v=Math.round(62+g*12*(u-62)/((g-h)*12)),y=Math.round(u+_*12*(70-u)/((_-g)*12)),b=``;if(s&&c===0)b=`
        <hr class="tool-divider" />
        <div class="tool-metric">
          <div class="tool-metric-label">Spousal Benefit (non-working spouse at FRA)</div>
          <div class="tool-metric-value" style="font-size:1.15rem">${D(Math.min(f*.5,k(0))*12)}/yr</div>
          <div class="tool-metric-sub">50% of your PIA — available at your spouse's FRA</div>
        </div>
      `;else if(s&&c>0){let e=k(c);b=`
        <hr class="tool-divider" />
        <div class="tool-metric">
          <div class="tool-metric-label">Spouse Estimated Benefit at FRA (age ${O(l)})</div>
          <div class="tool-metric-value" style="font-size:1.15rem">${D(e*12)}/yr</div>
          <div class="tool-metric-sub">Combined household at both FRAs: ${D((f+e)*12)}/yr</div>
        </div>
      `}document.getElementById(`ss-results`).innerHTML=`
      <h3>Estimated Monthly Benefits</h3>
      <table class="tool-table">
        <thead><tr><th>Claiming Age</th><th>Monthly</th><th>Annual</th><th>vs FRA</th></tr></thead>
        <tbody>
          <tr>
            <td>Age 62 (earliest)</td>
            <td>${D(h)}</td>
            <td>${D(h*12)}</td>
            <td style="color:#b91c1c">−${((1-h/f)*100).toFixed(0)}%</td>
          </tr>
          <tr style="background:rgba(27,39,116,0.05)">
            <td>Age ${d} (FRA)</td>
            <td>${D(g)}</td>
            <td>${D(g*12)}</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Age 70 (maximum)</td>
            <td>${D(_)}</td>
            <td>${D(_*12)}</td>
            <td style="color:#1a7a4a">+${((_/f-1)*100).toFixed(0)}%</td>
          </tr>
        </tbody>
      </table>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Breakeven: Claiming at 62 vs FRA</div>
        <div class="tool-metric-value" style="font-size:1.2rem">Age ${v}</div>
        <div class="tool-metric-sub">If you live past this age, waiting to FRA pays more in total</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Breakeven: Claiming at FRA vs Age 70</div>
        <div class="tool-metric-value" style="font-size:1.2rem">Age ${y}</div>
        <div class="tool-metric-sub">If you live past this age, delaying to 70 pays more in total</div>
      </div>
      ${b}
    `})}var j=e=>`$`+Math.round(e).toLocaleString(`en-US`),M={72:27.4,73:26.5,74:25.5,75:24.6,76:23.7,77:22.9,78:22,79:21.1,80:20.2,81:19.4,82:18.5,83:17.7,84:16.8,85:16,86:15.2,87:14.4,88:13.7,89:12.9,90:12.2,91:11.5,92:10.8,93:10.1,94:9.5,95:8.9,96:8.4,97:7.8,98:7.3,99:6.8,100:6.4},oe={10:.1,12:.12,22:.22,24:.24,32:.32,35:.35,37:.37};function se(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>RMD Planner</h1>
          <p>Calculate your Required Minimum Distributions for the next 20 years and understand the tax implications of each withdrawal.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="rmd-age">Current Age</label>
              <input type="number" id="rmd-age" value="72" min="60" max="100" />
            </div>
            <div class="tool-field">
              <label for="rmd-balance">Current IRA / 401k Balance ($)</label>
              <input type="number" id="rmd-balance" value="750000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rmd-growth">Expected Annual Growth Rate (%)</label>
              <input type="number" id="rmd-growth" value="6" min="0" max="15" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="rmd-tax">Marginal Tax Bracket</label>
              <select id="rmd-tax">
                <option value="10">10%</option>
                <option value="12">12%</option>
                <option value="22" selected>22%</option>
                <option value="24">24%</option>
                <option value="32">32%</option>
                <option value="35">35%</option>
                <option value="37">37%</option>
              </select>
            </div>
            <button class="tool-calculate-btn" id="rmd-calc-btn">Calculate RMDs</button>
          </div>
          <div class="tool-results" id="rmd-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see your projected RMD schedule and estimated tax impact for the next 20 years.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">RMD calculations use the IRS Uniform Lifetime Table (2022 update). RMDs begin at age 73 under SECURE Act 2.0 for those born after 1950. This tool is for educational purposes only and does not constitute tax advice.</p>
    </div>
  `}function ce(){document.getElementById(`rmd-calc-btn`)?.addEventListener(`click`,()=>{let e=e=>{document.getElementById(`rmd-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},t=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(t(`rmd-age`)===null)return e(`Please enter your current age.`);if(t(`rmd-balance`)===null||Number(document.getElementById(`rmd-balance`).value)<0)return e(`Please enter your current IRA / 401k balance.`);if(t(`rmd-growth`)===null)return e(`Please enter an expected annual growth rate.`);let n=Number(document.getElementById(`rmd-age`).value),r=Number(document.getElementById(`rmd-balance`).value),i=Number(document.getElementById(`rmd-growth`).value)/100,a=oe[document.getElementById(`rmd-tax`).value],o=[];for(let e=0;e<20;e++){let t=n+e;r*=1+i;let s=M[Math.min(t,100)];if(t>=73&&s){let e=r/s;r-=e,o.push({age:t,balance:r,rmd:e,tax:e*a})}else o.push({age:t,balance:r,rmd:0,tax:0})}let s=o.reduce((e,t)=>e+t.rmd,0),c=o.reduce((e,t)=>e+t.tax,0),l=o.map(e=>`
      <tr>
        <td>${e.age}</td>
        <td>${j(e.balance)}</td>
        <td>${e.rmd>0?j(e.rmd):`—`}</td>
        <td>${e.rmd>0?j(e.tax):`—`}</td>
      </tr>
    `).join(``);document.getElementById(`rmd-results`).innerHTML=`
      <h3>20-Year RMD Schedule</h3>
      <div class="tool-metric" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
        <div>
          <div class="tool-metric-label">Total RMDs (20 yr)</div>
          <div class="tool-metric-value" style="font-size:1.2rem">${j(s)}</div>
        </div>
        <div>
          <div class="tool-metric-label">Est. Total Tax</div>
          <div class="tool-metric-value tool-metric-warning" style="font-size:1.2rem">${j(c)}</div>
        </div>
      </div>
      <div style="overflow-x:auto">
        <table class="tool-table">
          <thead><tr><th>Age</th><th>Year-End Balance</th><th>RMD</th><th>Est. Tax</th></tr></thead>
          <tbody>${l}</tbody>
        </table>
      </div>
    `})}var N=e=>`$`+Math.round(e).toLocaleString(`en-US`);function le(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Roth Conversion Analyzer</h1>
          <p>See the long-term tax impact of converting a Traditional IRA or 401k to a Roth account and find the strategy that keeps more in your pocket.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="rc2-balance">Traditional IRA / 401k Balance ($)</label>
              <input type="number" id="rc2-balance" value="400000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc2-annual">Annual Conversion Amount ($) <span class="tool-label-hint">0 = no conversion</span></label>
              <input type="number" id="rc2-annual" value="50000" min="0" />
            </div>
            <div class="tool-field">
              <label for="rc2-current-rate">Current Marginal Tax Rate (%)</label>
              <input type="number" id="rc2-current-rate" value="22" min="0" max="50" />
            </div>
            <div class="tool-field">
              <label for="rc2-future-rate">Expected Tax Rate in Retirement (%)</label>
              <input type="number" id="rc2-future-rate" value="25" min="0" max="50" />
            </div>
            <div class="tool-field">
              <label for="rc2-years">Years Until Retirement</label>
              <input type="number" id="rc2-years" value="15" min="1" max="40" />
            </div>
            <div class="tool-field">
              <label for="rc2-return">Expected Annual Return (%)</label>
              <input type="number" id="rc2-return" value="7" min="1" max="15" step="0.5" />
            </div>
            <button class="tool-calculate-btn" id="rc2-calc-btn">Analyze Conversion</button>
          </div>
          <div class="tool-results" id="rc2-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see a comparison of conversion vs. no conversion over your retirement horizon.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Conversions are modeled as tax being withheld from the converted amount; state income taxes are not included. Results are illustrative only. Tax laws change frequently — consult a qualified tax advisor before executing a Roth conversion strategy.</p>
    </div>
  `}function ue(){document.getElementById(`rc2-calc-btn`)?.addEventListener(`click`,()=>{let e=e=>{document.getElementById(`rc2-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},t=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(t(`rc2-balance`)===null||Number(document.getElementById(`rc2-balance`).value)<0)return e(`Please enter your Traditional IRA / 401k balance.`);if(t(`rc2-annual`)===null)return e(`Please enter the annual conversion amount (enter 0 to model no conversion).`);if(t(`rc2-current-rate`)===null)return e(`Please enter your current marginal tax rate.`);if(t(`rc2-future-rate`)===null)return e(`Please enter your expected tax rate in retirement.`);if(t(`rc2-years`)===null||Number(document.getElementById(`rc2-years`).value)<1)return e(`Please enter a valid number of years until retirement (minimum 1).`);if(t(`rc2-return`)===null)return e(`Please enter an expected annual return.`);let n=Number(document.getElementById(`rc2-balance`).value),r=Number(document.getElementById(`rc2-annual`).value),i=Number(document.getElementById(`rc2-current-rate`).value)/100,a=Number(document.getElementById(`rc2-future-rate`).value)/100,o=Number(document.getElementById(`rc2-years`).value),s=Number(document.getElementById(`rc2-return`).value)/100,c=n;for(let e=0;e<o;e++)c*=1+s;let l=c*(1-a),u=n,d=0,f=0;for(let e=0;e<o;e++){let e=Math.min(u,r);f+=e*i,u=(u-e)*(1+s),d=d*(1+s)+e*(1-i)}let p=d+u*(1-a),m=p-l,h=n,g=0,_=[],v=0;for(let e=1;e<=Math.min(o,15);e++){let t=Math.min(h,r);v+=t*i,h=(h-t)*(1+s),g=g*(1+s)+t*(1-i),_.push({year:e,trad:h,roth:g,combined:h+g,cumTax:v})}let y=m>0?`tool-metric-positive`:`tool-metric-warning`,b=_.map(e=>`
      <tr>
        <td>Year ${e.year}</td>
        <td>${N(e.trad)}</td>
        <td>${N(e.roth)}</td>
        <td>${N(e.combined)}</td>
      </tr>
    `).join(``);document.getElementById(`rc2-results`).innerHTML=`
      <h3>At Retirement (${o} years)</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem">
        <div class="tool-metric">
          <div class="tool-metric-label">No Conversion (after tax)</div>
          <div class="tool-metric-value" style="font-size:1.1rem">${N(l)}</div>
        </div>
        <div class="tool-metric">
          <div class="tool-metric-label">With Conversion (after tax)</div>
          <div class="tool-metric-value" style="font-size:1.1rem">${N(p)}</div>
        </div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Net Benefit of Conversion</div>
        <div class="tool-metric-value ${y}">${m>=0?`+`:``}${N(m)}</div>
        <div class="tool-metric-sub">${m>0?`Conversion adds ${N(m)} in after-tax value`:`Staying traditional is more efficient by ${N(Math.abs(m))}`}</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Total Conversion Tax Cost</div>
        <div class="tool-metric-value tool-metric-warning" style="font-size:1.1rem">${N(f)}</div>
        <div class="tool-metric-sub">Paid now at ${(i*100).toFixed(0)}% to avoid ${(a*100).toFixed(0)}% later</div>
      </div>
      <hr class="tool-divider" />
      <h3 style="font-size:0.9rem;margin-bottom:0.75rem">Balance Projection (first ${Math.min(o,15)} years)</h3>
      <div style="overflow-x:auto">
        <table class="tool-table">
          <thead><tr><th>Year</th><th>Traditional</th><th>Roth</th><th>Combined</th></tr></thead>
          <tbody>${b}</tbody>
        </table>
      </div>
    `})}var P=e=>`$`+Math.round(e).toLocaleString(`en-US`),F=(e,t)=>{document.getElementById(e).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${t}</p>`};function I(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>401k Rollover Comparison</h1>
          <p>Compare your options for an old employer retirement plan — rollover to an IRA, stay in the old plan, move to a new employer plan, or cash out — and see the long-term impact of each choice.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="kr-balance">Old Plan Balance ($)</label>
              <input type="number" id="kr-balance" value="120000" min="0" />
            </div>
            <div class="tool-field">
              <label for="kr-age">Current Age</label>
              <input type="number" id="kr-age" value="42" min="18" max="70" />
            </div>
            <div class="tool-field">
              <label for="kr-retirement-age">Target Retirement Age</label>
              <input type="number" id="kr-retirement-age" value="65" min="50" max="80" />
            </div>
            <div class="tool-field">
              <label for="kr-return">Expected Annual Return (%)</label>
              <input type="number" id="kr-return" value="7" min="1" max="15" step="0.5" />
            </div>
            <div class="tool-field">
              <label for="kr-old-er">Old Plan Expense Ratio (%)</label>
              <input type="number" id="kr-old-er" value="0.80" min="0" max="3" step="0.05" />
            </div>
            <div class="tool-field">
              <label for="kr-ira-er">IRA Expense Ratio (%) <span class="tool-label-hint">— leave blank to exclude this option</span></label>
              <input type="number" id="kr-ira-er" value="0.10" min="0" max="3" step="0.05" placeholder="e.g. 0.10" />
            </div>
            <div class="tool-field">
              <label for="kr-new-er">New Employer Plan Expense Ratio (%) <span class="tool-label-hint">— leave blank to exclude this option</span></label>
              <input type="number" id="kr-new-er" placeholder="e.g. 0.40" min="0" max="3" step="0.05" />
            </div>
            <div class="tool-field">
              <label for="kr-tax-rate">Marginal Tax Bracket (for cash-out scenario)</label>
              <select id="kr-tax-rate">
                <option value="10">10%</option>
                <option value="12">12%</option>
                <option value="22" selected>22%</option>
                <option value="24">24%</option>
                <option value="32">32%</option>
                <option value="35">35%</option>
                <option value="37">37%</option>
              </select>
            </div>
            <button class="tool-calculate-btn" id="kr-calc-btn">Compare Options</button>
          </div>
          <div class="tool-results" id="kr-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to compare rollover options side by side at retirement. Leave an expense ratio blank to exclude that option.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Cash-out calculation assumes a 10% early withdrawal penalty (waived after age 59½) plus income tax. This tool is for educational purposes only and does not constitute financial or tax advice.</p>
    </div>
  `}function L(){document.getElementById(`kr-calc-btn`)?.addEventListener(`click`,()=>{let e=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n},t=e(`kr-balance`),n=e(`kr-age`),r=e(`kr-retirement-age`),i=e(`kr-return`),a=e(`kr-old-er`),o=e(`kr-ira-er`),s=e(`kr-new-er`),c=Number(document.getElementById(`kr-tax-rate`).value)/100;if(t===null||t<0)return F(`kr-results`,`Please enter a valid old plan balance.`);if(n===null||n<18)return F(`kr-results`,`Please enter a valid current age.`);if(r===null)return F(`kr-results`,`Please enter a target retirement age.`);if(r<=n)return F(`kr-results`,`Retirement age must be greater than your current age.`);if(i===null)return F(`kr-results`,`Please enter an expected annual return.`);if(a===null||a<0)return F(`kr-results`,`Please enter the old plan expense ratio.`);if(o===null&&s===null)return F(`kr-results`,`Please enter at least one rollover destination expense ratio (IRA or new employer plan) to compare.`);let l=r-n,u=(e,t)=>e*(1+i/100-t/100)**l,d=u(t,a),f=n<59.5?.1:0,p=t*(1-c-f),m=[{label:`Leave in Old Plan`,value:d,er:a,badge:``,isCash:!1},{label:`Cash Out Now`,value:p,er:0,badge:`Not recommended`,isCash:!0}];o!==null&&m.push({label:`Rollover to IRA`,value:u(t,o),er:o,badge:`Most flexible`,isCash:!1}),s!==null&&m.push({label:`Rollover to New Employer Plan`,value:u(t,s),er:s,badge:``,isCash:!1}),m.sort((e,t)=>t.value-e.value);let h=m[0],g=m.map(e=>{let t=Math.round(e.value/h.value*100),r=e.value===h.value?`green`:e.isCash?`red`:`navy`,a=e.isCash?`After ${(c*100).toFixed(0)}% tax${n<59.5?` + 10% early withdrawal penalty`:``}`:`Net return: ${(i-e.er).toFixed(2)}%/yr`;return`
        <div class="tool-bar-row">
          <div class="tool-bar-label">
            <span>${e.label}${e.badge?` <em style="font-style:normal;font-size:0.75rem;opacity:0.7">(${e.badge})</em>`:``}</span>
            <span>${P(e.value)}</span>
          </div>
          <div class="tool-bar"><div class="tool-bar-fill ${r}" style="width:${t}%"></div></div>
          <div style="font-size:0.75rem;color:var(--text-light);margin-top:0.2rem">${a}</div>
        </div>
      `}).join(``),_=m.find(e=>e.isCash),v=m.find(e=>e.label===`Rollover to IRA`)??m.find(e=>e.label===`Rollover to New Employer Plan`);document.getElementById(`kr-results`).innerHTML=`
      <h3>Value at Retirement (${l} years)</h3>
      ${g}
      ${v?`
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">${v.label} vs Leave in Old Plan</div>
        <div class="tool-metric-value ${v.value>=d?`tool-metric-positive`:`tool-metric-warning`}" style="font-size:1.15rem">
          ${v.value>=d?`+`:``}${P(v.value-d)}
        </div>
        <div class="tool-metric-sub">Difference from lower expense ratio over ${l} years</div>
      </div>`:``}
      ${_?`
      <div class="tool-metric">
        <div class="tool-metric-label">Cost of Cashing Out vs Best Option</div>
        <div class="tool-metric-value tool-metric-negative" style="font-size:1.15rem">−${P(h.value-_.value)}</div>
        <div class="tool-metric-sub">Foregone growth by taking cash today</div>
      </div>`:``}
    `})}var R=e=>`$`+Math.round(e).toLocaleString(`en-US`),z={"public-in":{label:`Public In-State`,annual:28e3},"public-out":{label:`Public Out-of-State`,annual:46e3},private:{label:`Private University`,annual:6e4}},B=.05;function V(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>529 Education Planner</h1>
          <p>Project future education costs and see whether your 529 savings are on track — including how much you need to save monthly to close any gap.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="p529-child-age">Child's Current Age</label>
              <input type="number" id="p529-child-age" value="5" min="0" max="17" />
            </div>
            <div class="tool-field">
              <label for="p529-school">School Type</label>
              <select id="p529-school">
                <option value="public-in">Public In-State (~$28k/yr today)</option>
                <option value="public-out">Public Out-of-State (~$46k/yr today)</option>
                <option value="private">Private University (~$60k/yr today)</option>
              </select>
            </div>
            <div class="tool-field">
              <label for="p529-balance">Current 529 Balance ($)</label>
              <input type="number" id="p529-balance" value="15000" min="0" />
            </div>
            <div class="tool-field">
              <label for="p529-monthly">Monthly Contribution ($)</label>
              <input type="number" id="p529-monthly" value="400" min="0" />
            </div>
            <div class="tool-field">
              <label for="p529-return">Expected Annual Return (%)</label>
              <input type="number" id="p529-return" value="7" min="1" max="12" step="0.5" />
            </div>
            <button class="tool-calculate-btn" id="p529-calc-btn">Project Savings</button>
          </div>
          <div class="tool-results" id="p529-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see projected education costs and whether your savings will cover them.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">College cost projections assume 5% annual tuition inflation. Investment returns are not guaranteed. 529 funds must be used for qualified education expenses to maintain tax advantages. This is for educational purposes only.</p>
    </div>
  `}function H(){document.getElementById(`p529-calc-btn`)?.addEventListener(`click`,()=>{let e=e=>{document.getElementById(`p529-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},t=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(t(`p529-child-age`)===null)return e(`Please enter your child's current age.`);if(Number(document.getElementById(`p529-child-age`).value)>=18)return e(`This tool is for children under 18. For a student already enrolled in college, speak with an advisor about other options.`);if(t(`p529-balance`)===null)return e(`Please enter the current 529 balance (enter 0 if starting fresh).`);if(t(`p529-monthly`)===null)return e(`Please enter your planned monthly contribution (enter 0 to see the savings gap).`);if(t(`p529-return`)===null)return e(`Please enter an expected annual return.`);let n=Number(document.getElementById(`p529-child-age`).value),r=document.getElementById(`p529-school`).value,i=Number(document.getElementById(`p529-balance`).value),a=Number(document.getElementById(`p529-monthly`).value),o=Number(document.getElementById(`p529-return`).value)/100,s=z[r],c=Math.max(18-n,1),l=o,u=s.annual*(1+B)**+c,d=u*4,f=l/12,p=c*12,m=i*(1+l)**+c,h=m+a*((1+f)**+p-1)/f,g=d-h,_=Math.min(h/d*100,100),v=Math.max(g,0)>0?(d-m)/(((1+f)**+p-1)/f):0,y=_>=90?`tool-metric-positive`:_>=60?`tool-metric-warning`:`tool-metric-negative`;document.getElementById(`p529-results`).innerHTML=`
      <h3>Projection at Age 18</h3>
      <div class="tool-metric">
        <div class="tool-metric-label">Projected Savings at College Start</div>
        <div class="tool-metric-value">${R(h)}</div>
        <div class="tool-metric-sub">In ${c} years at ${(l*100).toFixed(1)}% return</div>
      </div>
      <div class="tool-metric">
        <div class="tool-metric-label">Estimated 4-Year Cost (${s.label})</div>
        <div class="tool-metric-value" style="font-size:1.2rem">${R(d)}</div>
        <div class="tool-metric-sub">${R(u)}/yr — inflated at 5%/yr from today's ${R(s.annual*4)}</div>
      </div>
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">Coverage</div>
        <div class="tool-metric-value ${y}">${_.toFixed(0)}%</div>
      </div>
      <div class="tool-progress-bar" style="margin-bottom:1.25rem">
        <div class="tool-progress-fill" style="width:${_}%"></div>
      </div>
      ${g>0?`
      <div class="tool-metric">
        <div class="tool-metric-label">Shortfall</div>
        <div class="tool-metric-value tool-metric-negative" style="font-size:1.1rem">${R(g)}</div>
        <div class="tool-metric-sub">To fully fund: save ${R(v+a)}/month total (add ${R(Math.max(v,0))}/mo)</div>
      </div>`:`
      <div class="tool-metric">
        <div class="tool-metric-label">Surplus</div>
        <div class="tool-metric-value tool-metric-positive" style="font-size:1.1rem">${R(-g)}</div>
        <div class="tool-metric-sub">You are on track to fully cover projected costs</div>
      </div>`}
    `})}var U=[{text:`How long before you expect to need most of these funds?`,options:[{label:`Less than 3 years`,score:1},{label:`3–7 years`,score:2},{label:`7–15 years`,score:3},{label:`More than 15 years`,score:4}]},{text:`If your portfolio dropped 25% in value over three months, you would:`,options:[{label:`Sell everything to prevent further losses`,score:1},{label:`Sell some holdings to reduce risk`,score:2},{label:`Hold steady and wait for recovery`,score:3},{label:`Buy more while prices are low`,score:4}]},{text:`What is your primary investment goal?`,options:[{label:`Preserve the value I already have`,score:1},{label:`Generate steady, reliable income`,score:2},{label:`Moderate growth with some stability`,score:3},{label:`Maximum long-term growth`,score:4}]},{text:`Which investment scenario would you choose?`,options:[{label:`Guaranteed 3% return annually`,score:1},{label:`50% chance of 8%, 50% chance of 2%`,score:2},{label:`50% chance of 15%, 50% chance of −3%`,score:3},{label:`50% chance of 25%, 50% chance of −12%`,score:4}]},{text:`What portion of your total savings does this investment represent?`,options:[{label:`Almost all of it — my primary financial resource`,score:1},{label:`More than half of my savings`,score:2},{label:`About half`,score:3},{label:`A small portion — I have significant other assets`,score:4}]},{text:`How stable is your income and employment?`,options:[{label:`Uncertain or highly variable`,score:1},{label:`Somewhat stable`,score:2},{label:`Stable employment with reliable income`,score:3},{label:`Multiple income sources — very stable`,score:4}]},{text:`How would a 30% portfolio decline affect your financial life?`,options:[{label:`It would be devastating to my lifestyle`,score:1},{label:`It would cause significant financial hardship`,score:2},{label:`It would be uncomfortable but manageable`,score:3},{label:`It would have little effect on my day-to-day life`,score:4}]},{text:`How would you describe your investment knowledge and experience?`,options:[{label:`Little to no investing experience`,score:1},{label:`Basic knowledge of stocks and bonds`,score:2},{label:`Comfortable with most investment types`,score:3},{label:`Experienced across multiple asset classes`,score:4}]}],de=[{min:8,max:13,label:`Conservative`,desc:`Capital preservation is your priority. You prefer stability over growth and are uncomfortable with significant fluctuations in portfolio value.`,stocks:20,bonds:65,alt:15,color:`#1B2774`},{min:14,max:19,label:`Moderately Conservative`,desc:`You want some growth but lean heavily toward stability. A modest equity allocation with a strong fixed-income core suits your temperament.`,stocks:40,bonds:50,alt:10,color:`#2535a0`},{min:20,max:25,label:`Moderate`,desc:`You seek a balance between growth and stability. You can tolerate moderate fluctuations in exchange for higher long-term returns.`,stocks:60,bonds:35,alt:5,color:`#1a7a4a`},{min:26,max:28,label:`Moderately Aggressive`,desc:`Growth is your primary focus. You are comfortable with meaningful short-term volatility in pursuit of superior long-term returns.`,stocks:78,bonds:17,alt:5,color:`#b45309`},{min:29,max:32,label:`Aggressive`,desc:`Maximum long-term growth is your objective. You have a high tolerance for volatility and a long time horizon to ride out downturns.`,stocks:90,bonds:10,alt:0,color:`#b91c1c`}];function fe(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Risk Tolerance Questionnaire</h1>
          <p>Eight questions to assess your investment comfort level and suggest a portfolio allocation suited to your temperament and goals.</p>
        </div>
      </div>
      <div class="tool-quiz-body">
        ${U.map((e,t)=>`
    <div class="quiz-question">
      <div class="quiz-question-number">Question ${t+1} of ${U.length}</div>
      <div class="quiz-question-text">${e.text}</div>
      <div class="quiz-options">
        ${e.options.map(e=>`
          <label class="quiz-option">
            <input type="radio" name="rtq${t}" value="${e.score}" />
            <span>${e.label}</span>
          </label>
        `).join(``)}
      </div>
    </div>
  `).join(``)}
        <button class="tool-calculate-btn" id="rtq-submit-btn">See My Risk Profile</button>
        <div id="rtq-results" hidden></div>
      </div>
      <p class="tool-disclaimer">This questionnaire is for educational purposes only. Risk tolerance is one input among many in building an investment strategy. Consult a financial advisor for personalised portfolio recommendations.</p>
    </div>
  `}function pe(){document.getElementById(`rtq-submit-btn`)?.addEventListener(`click`,()=>{let e=0,t=0;for(let n=0;n<U.length;n++){let r=document.querySelector(`input[name="rtq${n}"]:checked`);r?e+=Number(r.value):t++}if(t>0){alert(`Please answer all questions (${t} remaining).`);return}let n=de.find(t=>e>=t.min&&e<=t.max),r=[{label:`Equities`,pct:n.stocks,color:`navy`},{label:`Fixed Income`,pct:n.bonds,color:`green`},{label:`Alternatives / Cash`,pct:n.alt,color:`amber`}].map(e=>`
      <div class="tool-bar-row">
        <div class="tool-bar-label"><span>${e.label}</span><span>${e.pct}%</span></div>
        <div class="tool-bar"><div class="tool-bar-fill ${e.color}" style="width:${e.pct}%"></div></div>
      </div>
    `).join(``),i=document.getElementById(`rtq-results`);i.hidden=!1,i.innerHTML=`
      <div class="quiz-result-card" style="background:${n.color}">
        <div class="quiz-result-score">${e} / 32</div>
        <div class="quiz-result-label">${n.label}</div>
        <div class="quiz-result-desc">${n.desc}</div>
      </div>
      <div style="margin-top:2rem;padding:1.5rem;background:var(--off-white);border-radius:8px;border:1px solid var(--gray-light)">
        <h3 style="font-size:0.9rem;font-weight:600;color:var(--navy);margin-bottom:1.25rem">Suggested Allocation</h3>
        ${r}
      </div>
      <div style="text-align:center;margin-top:2rem">
        <p style="color:var(--text-light);margin-bottom:1rem">Want a portfolio built around your specific situation and goals?</p>
        <button data-action="open-booking" class="tool-calculate-btn" style="max-width:280px;margin:0 auto">Talk to an Advisor</button>
      </div>
    `,i.scrollIntoView({behavior:`smooth`})})}var W=e=>`$`+Math.round(e).toLocaleString(`en-US`),me={single:14600,married:29200,hoh:21900},G=23e3,he=7500,ge=4150,_e=8300,ve=105e3;function ye(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Tax Savings Estimator</h1>
          <p>Estimate potential tax savings from strategies like QCDs, deduction bunching, HSA contributions, and maximising retirement account contributions.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Situation</h3>
            <div class="tool-field">
              <label for="ts-filing">Filing Status</label>
              <select id="ts-filing">
                <option value="single">Single</option>
                <option value="married" selected>Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div class="tool-field">
              <label for="ts-income">Gross Annual Income ($)</label>
              <input type="number" id="ts-income" value="180000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ts-age">Age <span class="tool-label-hint">Affects QCD eligibility and catch-up limits</span></label>
              <input type="number" id="ts-age" value="55" min="18" max="90" />
            </div>
            <div class="tool-field">
              <label for="ts-marginal">Marginal Tax Rate (%)</label>
              <input type="number" id="ts-marginal" value="24" min="0" max="50" />
            </div>
            <div class="tool-field">
              <label for="ts-charitable">Annual Charitable Giving ($)</label>
              <input type="number" id="ts-charitable" value="5000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ts-current-itemized">Other Itemised Deductions (mortgage interest, SALT, etc.) ($)</label>
              <input type="number" id="ts-current-itemized" value="18000" min="0" />
            </div>
            <div class="tool-field">
              <label for="ts-401k-contrib">Current 401k Contribution (% of income)</label>
              <input type="number" id="ts-401k-contrib" value="10" min="0" max="100" />
            </div>
            <div class="tool-field">
              <label for="ts-hsa">HSA Coverage</label>
              <select id="ts-hsa">
                <option value="none">Not HSA-eligible</option>
                <option value="self">Self-only HDHP</option>
                <option value="family">Family HDHP</option>
              </select>
            </div>
            <div class="tool-field">
              <label for="ts-current-hsa">Current Annual HSA Contribution ($)</label>
              <input type="number" id="ts-current-hsa" value="0" min="0" />
            </div>
            <button class="tool-calculate-btn" id="ts-calc-btn">Estimate Savings</button>
          </div>
          <div class="tool-results" id="ts-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see estimated savings from each tax strategy.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Estimates are based on federal tax rules only and do not account for state taxes, AMT, phase-outs, or other factors that may affect your situation. This is for educational purposes only and does not constitute tax advice. Consult a qualified tax professional.</p>
    </div>
  `}function be(){document.getElementById(`ts-calc-btn`)?.addEventListener(`click`,()=>{let e=e=>{document.getElementById(`ts-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},t=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(t(`ts-income`)===null||Number(document.getElementById(`ts-income`).value)<=0)return e(`Please enter your gross annual income.`);if(t(`ts-age`)===null||Number(document.getElementById(`ts-age`).value)<18)return e(`Please enter a valid age.`);if(t(`ts-marginal`)===null)return e(`Please enter your marginal tax rate.`);if(t(`ts-charitable`)===null)return e(`Please enter your annual charitable giving (enter 0 if none).`);if(t(`ts-current-itemized`)===null)return e(`Please enter your other itemised deductions (enter 0 if none).`);if(t(`ts-401k-contrib`)===null)return e(`Please enter your current 401k contribution percentage (enter 0 if none).`);if(t(`ts-current-hsa`)===null)return e(`Please enter your current HSA contribution (enter 0 if none).`);let n=document.getElementById(`ts-filing`).value,r=Number(document.getElementById(`ts-income`).value),i=Number(document.getElementById(`ts-age`).value),a=Number(document.getElementById(`ts-marginal`).value)/100,o=Number(document.getElementById(`ts-charitable`).value),s=Number(document.getElementById(`ts-current-itemized`).value),c=Number(document.getElementById(`ts-401k-contrib`).value)/100,l=document.getElementById(`ts-hsa`).value,u=Number(document.getElementById(`ts-current-hsa`).value),d=me[n],f=o+s,p=Math.max(d,f),m=[],h=((o*2+s+d)/2-p)*a;if(h>50&&m.push({name:`Deduction Bunching`,saving:h,detail:`Bundle ${W(o*2)} of charitable giving every other year vs. ${W(o)}/yr — extra deduction of ~${W(h/a)}/yr on average`}),i>=70){let e=Math.min(o,ve),t=e*a;t>0&&m.push({name:`Qualified Charitable Distribution (QCD)`,saving:t,detail:`Donate ${W(e)} directly from your IRA, excluding it from taxable income entirely`})}let g=G+(i>=50?he:0),_=r*c,v=Math.max(g-_,0);if(v>500&&m.push({name:`Maximise 401k Contributions`,saving:v*a,detail:`Increase contributions by ${W(v)} to reach the ${`$${(g/1e3).toFixed(0)}k`} ${i>=50?`catch-up`:``} limit`}),l!==`none`){let e=l===`family`?_e:ge,t=Math.max(e-u,0);t>200&&m.push({name:`Maximise HSA Contributions`,saving:t*a,detail:`Add ${W(t)} to your HSA to reach the ${W(e)} ${l===`family`?`family`:`self-only`} limit — triple tax advantage`})}let y=f-d;y<0&&y>-3e3&&m.push({name:`Accelerate Deductions`,saving:-y*a,detail:`You are ${W(-y)} below the standard deduction. Prepaying deductible expenses could push you above it`});let b=m.reduce((e,t)=>e+t.saving,0),x=m.length>0?m.map(e=>`
          <div class="tool-metric" style="margin-bottom:1.25rem">
            <div style="display:flex;justify-content:space-between;align-items:baseline">
              <div class="tool-metric-label">${e.name}</div>
              <div style="font-size:1.1rem;font-weight:700;color:#1a7a4a">~${W(e.saving)}/yr</div>
            </div>
            <div class="tool-metric-sub">${e.detail}</div>
          </div>
        `).join(``):`<p style="color:var(--text-light);font-size:0.9rem">No significant additional savings identified based on the information provided. Your current strategy may already be well-optimised.</p>`;document.getElementById(`ts-results`).innerHTML=`
      <h3>Estimated Annual Tax Savings</h3>
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Total Potential Savings</div>
        <div class="tool-metric-value tool-metric-positive">${W(b)}/yr</div>
        <div class="tool-metric-sub">Across ${m.length} identified ${m.length===1?`strategy`:`strategies`}</div>
      </div>
      <hr class="tool-divider" />
      ${x}
    `})}var K=e=>`$`+Math.round(e).toLocaleString(`en-US`),xe=[{label:`Conservative`,return:.04,color:`#1B2774`},{label:`Moderate`,return:.07,color:`#1a7a4a`},{label:`Aggressive`,return:.1,color:`#b45309`}];function Se(){return`
    <div class="tool-page">
      <div class="tool-hero">
        <div class="tool-hero-inner">
          <span class="section-label light">TOOLS</span>
          <h1>Savings Goal Estimator</h1>
          <p>Map your income and expenses against a savings goal to see if you are on track — and compare how different investment returns affect the monthly contribution you need.</p>
        </div>
      </div>
      <div class="tool-body">
        <div class="tool-grid">
          <div class="tool-inputs">
            <h3>Your Information</h3>
            <div class="tool-field">
              <label for="sg-income">Monthly Take-Home Income ($)</label>
              <input type="number" id="sg-income" value="7500" min="0" />
            </div>
            <div class="tool-field">
              <label for="sg-expenses">Monthly Essential Expenses ($) <span class="tool-label-hint">Rent, bills, food, transport</span></label>
              <input type="number" id="sg-expenses" value="4500" min="0" />
            </div>
            <div class="tool-field">
              <label for="sg-current-savings">Current Savings Toward This Goal ($)</label>
              <input type="number" id="sg-current-savings" value="10000" min="0" />
            </div>
            <div class="tool-field">
              <label for="sg-goal">Target Goal Amount ($)</label>
              <input type="number" id="sg-goal" value="100000" min="0" />
            </div>
            <div class="tool-field">
              <label for="sg-timeline">Target Timeline (years)</label>
              <input type="number" id="sg-timeline" value="7" min="1" max="40" />
            </div>
            <div class="tool-field">
              <label for="sg-monthly-saving">Planned Monthly Contribution ($) <span class="tool-label-hint">Leave blank to calculate required amount</span></label>
              <input type="number" id="sg-monthly-saving" value="" min="0" placeholder="Auto-calculate" />
            </div>
            <button class="tool-calculate-btn" id="sg-calc-btn">Estimate</button>
          </div>
          <div class="tool-results" id="sg-results">
            <h3>Results</h3>
            <p class="tool-results-placeholder">Enter your information to see how your savings stack up across different investment return scenarios.</p>
          </div>
        </div>
      </div>
      <p class="tool-disclaimer">Projections assume consistent monthly contributions and do not account for taxes on investment gains. Returns are hypothetical. This tool is for educational purposes only.</p>
    </div>
  `}function Ce(){document.getElementById(`sg-calc-btn`)?.addEventListener(`click`,()=>{let e=e=>{document.getElementById(`sg-results`).innerHTML=`<h3>Results</h3><p class="tool-error-msg">${e}</p>`},t=e=>{let t=document.getElementById(e).value.trim();if(t===``)return null;let n=Number(t);return isNaN(n)?null:n};if(t(`sg-income`)===null||Number(document.getElementById(`sg-income`).value)<=0)return e(`Please enter your monthly take-home income.`);if(t(`sg-expenses`)===null||Number(document.getElementById(`sg-expenses`).value)<0)return e(`Please enter your monthly expenses (enter 0 if none).`);if(t(`sg-current-savings`)===null)return e(`Please enter your current savings toward this goal (enter 0 if starting fresh).`);if(t(`sg-goal`)===null||Number(document.getElementById(`sg-goal`).value)<=0)return e(`Please enter a goal amount greater than zero.`);if(t(`sg-timeline`)===null||Number(document.getElementById(`sg-timeline`).value)<1)return e(`Please enter a timeline of at least 1 year.`);let n=Number(document.getElementById(`sg-income`).value),r=Number(document.getElementById(`sg-expenses`).value),i=Number(document.getElementById(`sg-current-savings`).value),a=Number(document.getElementById(`sg-goal`).value),o=Number(document.getElementById(`sg-timeline`).value),s=document.getElementById(`sg-monthly-saving`).value,c=s===``?null:Number(s),l=n-r,u=o*12;function d(e,t){let n=t/12;return i*(1+t)**+o+(n>0?e*((1+n)**+u-1)/n:e*u)}function f(e){let t=e/12,n=a-i*(1+e)**+o;return n<=0?0:n/(t>0?((1+t)**+u-1)/t:u)}let p=xe.map(e=>{let t=c===null?f(e.return):c,n=d(t,e.return),r=n>=a,i=Math.min(n/a*100,100);return{...e,contrib:t,achieved:n,onTrack:r,pct:i}}),m=p.map(e=>`
      <div style="margin-bottom:1.5rem">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:0.25rem">
          <span style="font-size:0.85rem;font-weight:600;color:var(--text)">${e.label} (${(e.return*100).toFixed(0)}%/yr)</span>
          <span style="font-size:0.9rem;font-weight:700;color:${e.color}">${K(e.achieved)}</span>
        </div>
        <div class="tool-progress-bar" style="margin-bottom:0.3rem">
          <div class="tool-progress-fill" style="width:${e.pct}%;background:${e.color}"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--text-light)">
          <span>Monthly needed: ${K(e.contrib)}</span>
          <span>${e.onTrack?`✓ On track`:`Shortfall: ${K(a-e.achieved)}`}</span>
        </div>
      </div>
    `).join(``),h=c===null?f(0):c,g=i+(c===null?h:c)*u,_=l-(c===null?p[1].contrib:c),v=_>=0?`tool-metric-positive`:`tool-metric-negative`;document.getElementById(`sg-results`).innerHTML=`
      <h3>Goal: ${K(a)} in ${o} years</h3>
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Monthly Cash Available for Savings</div>
        <div class="tool-metric-value">${K(l)}/mo</div>
        <div class="tool-metric-sub">${K(n)} income − ${K(r)} expenses</div>
      </div>
      ${c===null?``:`
      <div class="tool-metric" style="margin-bottom:1.5rem">
        <div class="tool-metric-label">Planned Contribution vs Available</div>
        <div class="tool-metric-value ${v}">${_>=0?`+`:``}${K(_)}/mo</div>
        <div class="tool-metric-sub">${_>=0?`You have room in your budget`:`Contribution exceeds available income`}</div>
      </div>`}
      <hr class="tool-divider" />
      <h3 style="font-size:0.9rem;font-weight:600;color:var(--navy);margin-bottom:1rem">Projected Outcome by Return Scenario</h3>
      ${m}
      <hr class="tool-divider" />
      <div class="tool-metric">
        <div class="tool-metric-label">No-Investment Baseline (savings account)</div>
        <div class="tool-metric-value" style="font-size:1rem">${K(g)}</div>
        <div class="tool-metric-sub">Flat savings at ${K(h)}/mo — no investment return</div>
      </div>
    `})}function we(){return`
    <nav class="nav-container">
      <a data-route="home" href="/" class="logo"><img src="/Eagle.svg" alt="Merels Capital" height="32"/>Merels Capital</a>
      <div class="nav-links" id="nav-links">
        <a data-route="home" data-scroll="audience-content" href="/#audience-content">Services</a>
        <a data-route="home" data-scroll="philosophy" href="/#philosophy">Philosophy</a>
        <a data-route="home" data-scroll="approach" href="/#approach">Our Approach</a>
        <a data-route="home" data-scroll="insights" href="/#insights">Insights</a>
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
        <a data-route="articles" href="#">Articles</a>
        <button id="book-now-btn" class="nav-cta">Book Now!</button>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `}function Te(){return`
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
          <a data-route="businesses" href="#">Businesses</a>
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
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p class="footer-newsletter-tagline">Monthly insights on wealth management, tax strategy, and markets.</p>
          <form id="footer-nl-form" class="footer-newsletter-form" novalidate>
            <div class="footer-newsletter-row">
              <input type="email" id="footer-nl-email" placeholder="Your email" autocomplete="email" />
              <button type="submit" aria-label="Subscribe">→</button>
            </div>
            <p id="footer-nl-msg" class="footer-newsletter-msg" hidden></p>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Merels Capital. All rights reserved.</p>
      <p>Investment advisory services offered through Merels Capital, LLC, a registered investment adviser.</p>
    </div>
  `}var q=`https://api.merelscapital.com/subscribe`;function Ee(){return`
    <div class="tool-newsletter">
      <div class="tool-newsletter-inner">
        <div class="tool-newsletter-text">
          <h3>Stay Ahead of Your Finances</h3>
          <p>Join our newsletter for monthly insights on retirement planning, tax strategy, market trends, and wealth management — delivered directly to your inbox.</p>
        </div>
        <form id="tool-nl-form" class="tool-newsletter-form" novalidate>
          <div class="tool-newsletter-fields">
            <input type="text" id="tool-nl-first" placeholder="First name" autocomplete="given-name" />
            <input type="text" id="tool-nl-last" placeholder="Last name" autocomplete="family-name" />
            <input type="email" id="tool-nl-email" placeholder="Email address" autocomplete="email" />
          </div>
          <button type="submit" class="tool-newsletter-btn">Subscribe to Newsletter</button>
          <p id="tool-nl-msg" class="tool-newsletter-msg" hidden></p>
        </form>
      </div>
    </div>
  `}function De(){let e=document.getElementById(`tool-nl-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`tool-nl-email`).value.trim(),r=document.getElementById(`tool-nl-first`).value.trim(),i=document.getElementById(`tool-nl-last`).value.trim(),a=document.getElementById(`tool-nl-msg`),o=e.querySelector(`button`);if(!n){a.textContent=`Please enter your email address.`,a.className=`tool-newsletter-msg tool-newsletter-error`,a.hidden=!1;return}o.disabled=!0,o.textContent=`Subscribing...`,a.hidden=!0;try{let t=await(await fetch(q,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:n,first_name:r,last_name:i})})).json();t.success?(a.textContent=`You're subscribed! Welcome to the Merels Capital newsletter.`,a.className=`tool-newsletter-msg tool-newsletter-success`,e.reset()):(a.textContent=t.error??`Something went wrong. Please try again.`,a.className=`tool-newsletter-msg tool-newsletter-error`),a.hidden=!1}catch{a.textContent=`Connection error. Please try again.`,a.className=`tool-newsletter-msg tool-newsletter-error`,a.hidden=!1}finally{o.disabled=!1,o.textContent=`Subscribe to Newsletter`}})}function Oe(){let e=document.getElementById(`footer-nl-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`footer-nl-email`).value.trim(),r=document.getElementById(`footer-nl-msg`),i=e.querySelector(`button`);if(n){i.disabled=!0,r.hidden=!0;try{let t=await(await fetch(q,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:n})})).json();r.textContent=t.success?`You're subscribed!`:t.error??`Something went wrong.`,r.className=t.success?`footer-newsletter-msg footer-nl-success`:`footer-newsletter-msg footer-nl-error`,r.hidden=!1,t.success&&e.reset()}catch{r.textContent=`Connection error. Please try again.`,r.className=`footer-newsletter-msg footer-nl-error`,r.hidden=!1}finally{i.disabled=!1}}})}function J(e,t,r){n(e,()=>t()+Ee(),()=>{r?.(),De()})}n(`home`,c,u),n(`about`,d),n(`individuals`,f),n(`family-offices`,p),n(`businesses`,m),n(`articles`,h),n(`articles/gold-2025`,g),n(`articles/private-credit-2026`,_),n(`articles/usd-2026`,v),n(`articles/energy-2026`,y),n(`articles/fed-2026`,b),n(`contact`,ee,x),J(`tools/retirement-calculator`,w,T),J(`tools/retirement-quiz`,ne,re),J(`tools/social-security`,A,ae),J(`tools/rmd-planner`,se,ce),J(`tools/roth-conversion`,le,ue),J(`tools/401k-rollover`,I,L),J(`tools/529-planner`,V,H),J(`tools/risk-tolerance`,fe,pe),J(`tools/tax-savings`,ye,be),J(`tools/savings-goal`,Se,Ce),document.getElementById(`header`).innerHTML=we(),document.getElementById(`footer`).innerHTML=Te(),Oe();var ke=document.getElementById(`header`);window.addEventListener(`scroll`,()=>{ke.classList.toggle(`scrolled`,window.scrollY>10)},{passive:!0});var Y=document.getElementById(`mobile-menu-btn`),Ae=document.getElementById(`nav-links`),je=document.getElementById(`nav-actions`);Y.addEventListener(`click`,()=>{let e=Ae.classList.toggle(`open`);je.classList.toggle(`open`,e),Y.setAttribute(`aria-label`,e?`Close menu`:`Open menu`)});var X=document.getElementById(`tools-dropdown-btn`);if(X){let e=X.closest(`.nav-dropdown`);X.addEventListener(`click`,t=>{t.stopPropagation();let n=e.classList.toggle(`open`);X.setAttribute(`aria-expanded`,String(n))}),document.addEventListener(`click`,()=>{e.classList.remove(`open`),X.setAttribute(`aria-expanded`,`false`)})}var Me=document.getElementById(`book-now-btn`),Z=document.getElementById(`booking-modal`),Ne=document.getElementById(`booking-modal-close`),Pe=Z.querySelector(`.booking-modal-backdrop`),Fe=document.getElementById(`booking-iframe`),Ie=!1;function Q(){Ie||=(Fe.src=`https://bookings.merelscapital.com`,!0),Z.hidden=!1,document.body.style.overflow=`hidden`}Me.addEventListener(`click`,Q),document.addEventListener(`click`,e=>{e.target.closest(`[data-action="open-booking"]`)&&Q()});function $(){Z.hidden=!0,document.body.style.overflow=``}Ne.addEventListener(`click`,$),Pe.addEventListener(`click`,$),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&$()}),s();function Le(){let e=new Date;for(e.setDate(e.getDate()+1);e.getDay()===0||e.getDay()===6;)e.setDate(e.getDate()+1);let t=e.toLocaleDateString(`en-CA`,{timeZone:`America/Denver`});fetch(`https://api.merelscapital.com/slots?date=${t}`).catch(()=>{})}window.addEventListener(`load`,()=>{setTimeout(Le,3e3)});