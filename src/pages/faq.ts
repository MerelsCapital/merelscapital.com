interface FAQ {
  q: string
  a: string
}

interface FAQSection {
  category: string
  label: string
  questions: FAQ[]
}

const faqSections: FAQSection[] = [
  {
    category: 'about',
    label: 'About Merels Capital',
    questions: [
      {
        q: 'What is Merels Capital?',
        a: 'Merels Capital is an independent, fee-only registered investment advisory firm (RIA) based in Denver, Colorado, serving clients nationally. We provide comprehensive wealth management, financial planning, tax strategy, and estate planning services to individuals, families, family offices, and business owners. We are a fiduciary, which means we are legally required to act in our clients\' best interests at all times.',
      },
      {
        q: 'Where is Merels Capital located?',
        a: 'Our office is in Denver, Colorado. We work with clients throughout Colorado and across the United States. Meetings can be conducted in person at our Denver office, over secure video conference, or by phone, depending on what is most convenient for the client.',
      },
      {
        q: 'What does "independent" mean for an advisory firm?',
        a: 'Independent means we are not owned by, affiliated with, or compensated by any bank, insurance company, mutual fund family, or brokerage firm. We do not sell proprietary products and we do not receive commissions, kickbacks, or referral fees from any investment provider. Our only source of compensation is the fees our clients pay us directly, which removes conflicts of interest from our recommendations.',
      },
      {
        q: 'What does "fee-only" mean?',
        a: 'Fee-only means we are compensated exclusively through fees paid by our clients. We do not earn commissions on the products we recommend, we do not receive payments from third parties for placing client assets in particular funds, and we do not sell insurance or annuities for compensation. This is distinct from "fee-based" advisors, who may charge fees but also collect commissions on certain products.',
      },
      {
        q: 'What is a fiduciary, and is Merels Capital one?',
        a: 'A fiduciary is legally and ethically obligated to act in their client\'s best interest at all times, putting the client\'s interests ahead of their own. Yes, Merels Capital is a fiduciary 100% of the time, in all client relationships. Many brokers and insurance agents are only held to a lower "suitability" standard, which requires that recommendations be suitable but not necessarily the best option for the client.',
      },
      {
        q: 'Who founded Merels Capital and why?',
        a: 'Merels Capital was founded to provide truly independent wealth management to clients who want personal attention without the conflicts of interest common at large brokerage firms. The firm was built around the belief that financial advice should be guided solely by what is best for the client, not by what products generate the highest commissions.',
      },
    ],
  },
  {
    category: 'fees',
    label: 'Fees and Pricing',
    questions: [
      {
        q: 'How does Merels Capital get paid?',
        a: 'We charge an annual advisory fee, typically calculated as a percentage of assets under management (AUM) and billed quarterly in arrears. For clients who prefer a different structure or whose situation calls for it, we also offer flat-fee planning engagements and hourly consultations. All fees are disclosed in writing before any engagement begins and are spelled out in our Form ADV.',
      },
      {
        q: 'What are your advisory fees?',
        a: 'Our standard advisory fee schedule is tiered based on the size of assets under management. We provide full fee transparency during the initial consultation and document all fees in our Form ADV Part 2A and the client advisory agreement. Clients can review actual fees deducted from their accounts on every custodian statement.',
      },
      {
        q: 'Are there account minimums to work with Merels Capital?',
        a: 'We work with clients across a range of asset levels. Specific minimums depend on the type of engagement: investment management relationships, comprehensive planning engagements, and project-based work each have different thresholds. The best way to determine fit is to schedule an introductory call, during which we will discuss your situation and whether our services are appropriate for your needs.',
      },
      {
        q: 'Do you charge for the initial consultation?',
        a: 'No. The initial consultation is free, with no obligation. It is an opportunity for both parties to determine whether we are a good fit. If we agree to move forward, all fees are disclosed and agreed to in writing before any work begins.',
      },
      {
        q: 'Do you receive commissions from any of the investments you recommend?',
        a: 'No. We do not accept commissions, finder\'s fees, 12b-1 fees, soft-dollar arrangements, or any other form of third-party compensation. Our only compensation is the fees our clients pay us directly. This is a defining feature of being a fee-only RIA.',
      },
      {
        q: 'Are your fees tax deductible?',
        a: 'Advisory fees paid from taxable accounts are generally not deductible at the federal level under current tax law (the Tax Cuts and Jobs Act suspended this deduction through 2025, and recent legislation has affected its status). However, fees deducted from tax-deferred accounts like IRAs are paid with pre-tax dollars, which provides an indirect tax benefit. Consult your tax advisor for guidance on your specific situation.',
      },
    ],
  },
  {
    category: 'services',
    label: 'Services',
    questions: [
      {
        q: 'What services does Merels Capital offer?',
        a: 'We offer comprehensive wealth management that includes investment management, financial planning, retirement planning, tax strategy, estate planning coordination, business advisory services, and family office services. We integrate these services into a coherent strategy rather than treating them as separate products.',
      },
      {
        q: 'Do you offer financial planning without managing my investments?',
        a: 'Yes. We offer standalone financial planning engagements for clients who want a comprehensive plan but prefer to manage their own investments or have an existing investment relationship they want to keep. These are typically flat-fee or hourly engagements.',
      },
      {
        q: 'Do you provide tax preparation services?',
        a: 'We do not prepare tax returns directly. We focus on tax strategy and planning, which we coordinate closely with your CPA or tax preparer. If you do not have a CPA, we can recommend qualified tax professionals who understand the planning strategies we use.',
      },
      {
        q: 'Do you prepare legal documents like trusts or wills?',
        a: 'No, we are not attorneys and do not prepare legal documents. We work alongside estate planning attorneys, providing the financial analysis and strategic input that helps them draft documents reflecting your goals. We are happy to coordinate with your existing attorney or refer you to attorneys we trust.',
      },
      {
        q: 'Do you sell insurance?',
        a: 'No, we do not sell insurance products of any kind. When insurance is needed as part of a financial plan (life, disability, long-term care, etc.), we analyze the need objectively and refer clients to independent insurance brokers we have vetted. This separation ensures our analysis is not influenced by commissions.',
      },
      {
        q: 'Can you help with my 401(k) at work?',
        a: 'Yes. We regularly advise clients on their employer-sponsored retirement plans, including 401(k), 403(b), and 457 plans. This includes contribution strategy, investment selection within the plan menu, Roth versus traditional decisions, and integration with your broader financial picture. We can advise on plans where assets are not directly under our management.',
      },
      {
        q: 'Do you advise on Social Security claiming strategies?',
        a: 'Yes. Social Security timing is one of the highest-leverage decisions in retirement planning. We model your specific situation, factoring in spousal benefits, longevity expectations, tax brackets, and income needs, to recommend a claiming strategy that maximizes lifetime household value.',
      },
      {
        q: 'Do you work with business owners on selling their business?',
        a: 'Yes. Exit planning is a significant focus area. We help business owners structure the sale to minimize taxes, coordinate with transaction attorneys and investment bankers, plan for post-sale liquidity management, and integrate the proceeds into a long-term wealth plan. Effective exit planning typically begins several years before a transaction.',
      },
    ],
  },
  {
    category: 'investment',
    label: 'Investment Approach',
    questions: [
      {
        q: 'What is your investment philosophy?',
        a: 'We believe in evidence-based investing grounded in academic research, broad diversification across asset classes, low costs, tax efficiency, and disciplined adherence to a long-term plan. We construct portfolios specifically for each client\'s goals, time horizon, and risk tolerance rather than putting clients into model portfolios. We do not try to time the market or chase recent winners.',
      },
      {
        q: 'Do you use active or passive investments?',
        a: 'We use both, depending on the asset class and the specific opportunity. We generally favor low-cost index funds and ETFs for core exposures in efficient markets (such as US large-cap stocks), while selectively using active management in areas where research and skill have historically added value (such as certain fixed income segments and some international markets).',
      },
      {
        q: 'Do you use individual stocks or only funds?',
        a: 'For most clients, we build portfolios primarily from mutual funds, ETFs, and similar pooled vehicles to achieve broad diversification at low cost. For clients with concentrated stock positions, large taxable portfolios, or specific tax-management needs, individual securities may be appropriate as part of a coordinated strategy.',
      },
      {
        q: 'Do you invest in cryptocurrency?',
        a: 'We approach cryptocurrency with the same evidence-based discipline we apply to any asset class. For most clients, direct cryptocurrency exposure is not part of our recommended portfolio. For clients with specific interest, we discuss the role, risks, and appropriate sizing of any crypto allocation and ensure it does not compromise the overall plan.',
      },
      {
        q: 'Do you offer ESG or socially responsible investing?',
        a: 'Yes. We can build portfolios that incorporate environmental, social, and governance (ESG) considerations or align with specific religious or values-based screens. We discuss the tradeoffs honestly, including any expected differences in cost or expected return.',
      },
      {
        q: 'What about alternative investments like private equity or hedge funds?',
        a: 'For qualified clients with appropriate net worth, time horizons, and liquidity flexibility, we evaluate alternative investments on a case-by-case basis. We have access to institutional-quality private investments but apply rigorous due diligence and ensure they fit a clear role in the overall portfolio.',
      },
      {
        q: 'How often do you rebalance portfolios?',
        a: 'We use a disciplined rebalancing approach driven by asset allocation drift and tax considerations rather than a fixed calendar schedule. This typically means reviewing portfolios quarterly and rebalancing when allocations have drifted meaningfully from targets, with attention to tax-loss harvesting opportunities and the avoidance of unnecessary short-term capital gains.',
      },
      {
        q: 'How do you handle market downturns?',
        a: 'Our process anticipates that markets will experience periodic declines and structures portfolios so that clients can stay invested through them. During downturns, we communicate proactively, look for tax-loss harvesting opportunities, evaluate rebalancing into depressed asset classes, and remind clients of the long-term plan we built together specifically to weather these periods.',
      },
    ],
  },
  {
    category: 'becoming-client',
    label: 'Becoming a Client',
    questions: [
      {
        q: 'How do I become a client?',
        a: 'The process begins with a free, no-obligation introductory call. If both parties decide to proceed, we conduct a discovery meeting to understand your financial situation and goals, present a proposed scope of work and fee, sign an advisory agreement, and then begin the onboarding process. The full onboarding typically takes two to four weeks from initial call to fully operational.',
      },
      {
        q: 'What happens during the first call?',
        a: 'The first call is typically 30 to 45 minutes. We listen to what brought you to us, ask questions about your situation and goals, explain how we work and what we charge, and answer your questions. There is no sales pitch, no obligation, and no homework required in advance. If we are not a good fit, we will say so directly and, when possible, point you toward someone who is.',
      },
      {
        q: 'What information do I need to bring to the first meeting?',
        a: 'For the introductory call, nothing is required. If we move forward to a discovery meeting, we will provide a checklist of documents to gather, typically including recent account statements, tax returns, insurance policies, estate documents, and any existing financial plans. We provide a secure document upload portal for sharing these materials.',
      },
      {
        q: 'How long does onboarding take?',
        a: 'Most onboarding is complete within two to four weeks of signing the advisory agreement. This includes opening accounts at our custodian, transferring assets, completing risk profiling, finalizing the investment plan, and scheduling the first review meeting. Complex situations involving multiple accounts, business interests, or coordinated estate planning may take longer.',
      },
      {
        q: 'Can I stay with my current accountant or attorney?',
        a: 'Yes, and we encourage it. We work alongside your existing professional team and coordinate closely with them. If you do not have a CPA or estate planning attorney, we can recommend professionals we trust who work well with our process.',
      },
    ],
  },
  {
    category: 'working-together',
    label: 'Working Together',
    questions: [
      {
        q: 'How often will we meet?',
        a: 'New clients typically have more frequent meetings during the first year as we implement the plan. Ongoing, most clients meet with us formally twice a year (semi-annual reviews), with additional check-ins as life events warrant. You can reach out anytime between meetings via phone, email, or our secure messaging portal.',
      },
      {
        q: 'How do I get in touch between meetings?',
        a: 'Clients can contact us anytime via phone, email, or the secure client portal. We respond to all inquiries within one business day, usually the same day. For complex issues, we will schedule a dedicated call rather than try to resolve them over email.',
      },
      {
        q: 'Will I always work with the same advisor?',
        a: 'Yes. Each client is assigned a primary advisor who is their main point of contact. While our team collaborates on planning and analysis, you will not be handed off to a junior staffer or different advisor each year. This continuity is central to how we work.',
      },
      {
        q: 'What happens if my advisor leaves the firm?',
        a: 'We have a continuity plan in place. If your primary advisor is unavailable, another qualified team member who is familiar with your situation will take over your relationship. We also work to ensure that institutional knowledge is documented, not held in a single person\'s head.',
      },
      {
        q: 'What kind of reporting will I receive?',
        a: 'Clients receive quarterly performance reports covering their portfolio returns, asset allocation, and a summary of activity. Custodian statements are available monthly directly from the custodian. We also provide annual reviews of financial planning topics including tax strategy, estate plan status, and progress toward goals.',
      },
      {
        q: 'Can I see my accounts online?',
        a: 'Yes. You will have online access to your accounts through the custodian (real-time balances and transactions) and through our client portal (consolidated reporting, performance, and planning documents). The portal is accessible 24/7 from any device.',
      },
    ],
  },
  {
    category: 'safety',
    label: 'Regulatory and Safety',
    questions: [
      {
        q: 'Where are client assets held?',
        a: 'Client assets are held at an independent third-party custodian, separate from Merels Capital. We are the advisor with authority to trade and rebalance on your behalf, but we never take physical custody of your assets. Account statements come directly from the custodian, providing an independent verification of your holdings.',
      },
      {
        q: 'How are my assets protected?',
        a: 'Assets held at our custodian are protected by SIPC insurance (which covers securities up to $500,000 per account, including $250,000 in cash) and typically by supplemental insurance the custodian carries on top of SIPC. Additionally, securities held at a brokerage are segregated from the brokerage\'s own assets and would not be available to the brokerage\'s creditors in a bankruptcy.',
      },
      {
        q: 'Are you registered with the SEC?',
        a: 'Registered investment advisers must register either with the U.S. Securities and Exchange Commission (SEC) or with the state(s) in which they do business, depending on the firm\'s size and circumstances. Our current registration status is disclosed in our Form ADV, which is publicly available on the SEC\'s Investment Adviser Public Disclosure (IAPD) website.',
      },
      {
        q: 'What is Form ADV and where can I see yours?',
        a: 'Form ADV is the regulatory disclosure document every registered investment adviser must file. It describes the firm\'s services, fees, business practices, conflicts of interest, disciplinary history, and key personnel. Our Form ADV is publicly available on the SEC\'s IAPD website at adviserinfo.sec.gov and is also provided directly to all prospective clients before engagement.',
      },
      {
        q: 'Do you have any disciplinary history?',
        a: 'Disciplinary information for any registered investment adviser is publicly disclosed in Form ADV and on the SEC\'s IAPD website at adviserinfo.sec.gov. We encourage prospective clients to review this information for any firm or advisor they are considering working with.',
      },
      {
        q: 'How is my personal information protected?',
        a: 'We follow strict privacy practices required under SEC Regulation S-P, including encryption of data at rest and in transit, multi-factor authentication on all client systems, strict access controls limiting which staff can see client data, and regular security audits. We never sell or share client information with third parties for marketing purposes.',
      },
    ],
  },
  {
    category: 'business-owners',
    label: 'For Business Owners',
    questions: [
      {
        q: 'How do you help business owners differently from other clients?',
        a: 'Business owners have unique planning needs because their wealth is concentrated in their business, their cash flow is variable, and their tax situation is more complex. We address all three by integrating personal and business planning: structuring retirement plans that maximize the owner\'s deductible contributions, coordinating tax strategy across personal and business income, planning for liquidity needs, and preparing for eventual exit or succession.',
      },
      {
        q: 'Can you help me set up a retirement plan for my business?',
        a: 'Yes. We help business owners design and implement retirement plans appropriate for their situation, including Solo 401(k), SEP-IRA, SIMPLE IRA, traditional 401(k), and defined benefit plans. Plan selection depends on the number of employees, owner age and income, and contribution goals. We coordinate with third-party administrators and recordkeepers as needed.',
      },
      {
        q: 'What is the best retirement plan for a small business?',
        a: 'It depends on the business. Self-employed individuals or owner-only businesses often benefit from a Solo 401(k), which combines employee and employer contributions to allow up to $70,000 in deductible contributions (2025 limits, plus catch-up for those over 50). Businesses with employees may use SEP-IRAs (simpler), SIMPLE IRAs (mid-size), or full 401(k) plans (most flexible but more administrative complexity). We analyze the tradeoffs for your specific situation.',
      },
      {
        q: 'Do you help with succession planning?',
        a: 'Yes. Whether you plan to sell to an outside buyer, transition to family, sell to employees through an ESOP, or wind down, succession planning is a multi-year process that we help structure. We coordinate with your attorney, CPA, and any transaction advisors to ensure the financial outcome aligns with your personal goals.',
      },
      {
        q: 'How early should I start exit planning?',
        a: 'Ideally five to seven years before a planned exit, though meaningful work can be done in shorter windows. Earlier planning allows for tax-efficient restructuring, building enterprise value, identifying and developing successors, and personal financial preparation for life after the business. Owners who wait until the last year before sale leave significant value on the table.',
      },
    ],
  },
  {
    category: 'retirement',
    label: 'For Retirement Planning',
    questions: [
      {
        q: 'When should I start planning for retirement?',
        a: 'The earlier the better. The most important variable in retirement planning is time: starting in your 20s or 30s allows compound growth to do most of the work, while starting in your 50s requires significantly higher savings rates. That said, it is never too late to improve your situation, and clients within five to ten years of retirement particularly benefit from coordinated planning around Social Security, withdrawal strategy, and tax efficiency.',
      },
      {
        q: 'How much do I need to retire?',
        a: 'There is no universal number. The right answer depends on your desired spending, expected longevity, Social Security and pension income, healthcare costs, legacy goals, and risk tolerance. As a rough framework, many planners suggest the ability to safely withdraw 4 percent of your portfolio annually for at least 30 years, which implies a portfolio of roughly 25 times your annual spending needs (net of Social Security and other income).',
      },
      {
        q: 'When should I claim Social Security?',
        a: 'Generally, delaying Social Security past Full Retirement Age increases your benefit by approximately 8 percent per year until age 70, which is one of the highest guaranteed returns available to most retirees. However, the optimal claiming age depends on your health, spousal benefits, tax situation, and need for current income. We model each client\'s specific situation.',
      },
      {
        q: 'Should I do a Roth conversion?',
        a: 'Roth conversions can be powerful when done strategically. They make most sense when your current tax bracket is lower than your expected future tax bracket, when you have non-retirement assets to pay the conversion tax, and when you have many years of tax-free growth ahead. We model multi-year conversion strategies that fill lower tax brackets without pushing you into higher ones.',
      },
      {
        q: 'How do I take money out of my retirement accounts in retirement?',
        a: 'Optimal withdrawal sequencing minimizes lifetime taxes and preserves account growth. The general framework: spend from taxable accounts first while continuing to defer IRAs, use Roth conversions in lower-income years, harvest capital gains at the 0% rate when possible, and time required minimum distributions to avoid bracket jumps. The specifics depend heavily on your account mix and tax situation.',
      },
    ],
  },
  {
    category: 'family-office',
    label: 'For Family Offices and High Net Worth',
    questions: [
      {
        q: 'Do you serve as a family office?',
        a: 'Yes. For high-net-worth families with complex financial lives, we provide institutional-quality family office services including consolidated reporting, multi-generational planning, governance and education for the next generation, coordinated investment management across entities, and integration with attorneys, accountants, and other professionals.',
      },
      {
        q: 'What is the difference between a multi-family office and a single-family office?',
        a: 'A single-family office serves one wealthy family, typically requiring hundreds of millions in net worth to justify the overhead. A multi-family office serves multiple families, sharing infrastructure and expertise to deliver similar services at a fraction of the cost. We function as a multi-family office for clients whose situations call for that level of service.',
      },
      {
        q: 'Do you help with multi-generational wealth transfer?',
        a: 'Yes. We work with families on coordinated estate planning, education of the next generation in financial literacy and stewardship, family governance structures, philanthropic strategies including donor-advised funds and private foundations, and the financial mechanics of wealth transfer including trusts, gifting strategies, and tax-efficient ownership structures.',
      },
      {
        q: 'Can you coordinate with my existing attorney and CPA?',
        a: 'Yes. For high-net-worth clients, we routinely serve as the coordinator of the broader professional team, ensuring that estate plans, tax strategies, and investment decisions are aligned and that nothing falls through the cracks between professionals.',
      },
    ],
  },
  {
    category: 'other',
    label: 'Other Common Questions',
    questions: [
      {
        q: 'What if I am not in Denver? Can you still be my advisor?',
        a: 'Yes. We serve clients across the United States. Most ongoing client interactions are conducted via secure video conference or phone, and our technology stack supports a fully remote relationship. Many of our clients have never visited our physical office.',
      },
      {
        q: 'Can I leave at any time?',
        a: 'Yes. Our advisory agreements have no long-term commitment and can be terminated by either party at any time without penalty. We believe clients should stay because we are providing value, not because they are locked in. Termination procedures are spelled out in the advisory agreement.',
      },
      {
        q: 'What happens to my accounts if I decide to leave?',
        a: 'Your accounts remain at the custodian under your name. If you choose to leave, you can either continue managing them yourself, transfer to another advisor, or maintain accounts at the custodian without an advisor. We assist with the transition and provide all reasonable cooperation.',
      },
      {
        q: 'Do you have a minimum age to work with you?',
        a: 'No. We work with clients across age ranges. While many of our clients are pre-retirees, retirees, or established business owners, we also work with younger professionals building wealth and with the adult children of existing clients.',
      },
      {
        q: 'Can you help with a one-time financial question without becoming an ongoing client?',
        a: 'Yes. We offer hourly consultations and project-based engagements for clients who want a second opinion, a specific analysis (such as a Roth conversion strategy or retirement income plan), or guidance on a particular decision without entering into an ongoing relationship.',
      },
      {
        q: 'How do I schedule an introductory call?',
        a: 'You can schedule an introductory call directly through our website by clicking the "Book Now" button at the top of any page, or by reaching out through our contact form. We typically respond within one business day to confirm a time that works for you.',
      },
    ],
  },
]

function escapeJson(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderJsonLd(): string {
  const mainEntity = faqSections.flatMap(s => s.questions).map(item => `{
    "@type": "Question",
    "name": "${escapeJson(item.q)}",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "${escapeJson(item.a)}"
    }
  }`).join(',\n')

  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
${mainEntity}
  ]
}
</script>`
}

function renderSection(section: FAQSection): string {
  const items = section.questions.map(item => `
        <details class="faq-item" itemscope itemtype="https://schema.org/Question">
          <summary class="faq-question" itemprop="name">
            <span class="faq-question-text">${escapeHtml(item.q)}</span>
            <span class="faq-question-icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-answer" itemscope itemtype="https://schema.org/Answer" itemprop="acceptedAnswer">
            <p itemprop="text">${escapeHtml(item.a)}</p>
          </div>
        </details>`).join('')

  return `
    <section class="faq-section" id="faq-${section.category}">
      <div class="faq-section-inner">
        <h2 class="faq-section-title">${escapeHtml(section.label)}</h2>
        <div class="faq-list">${items}
        </div>
      </div>
    </section>`
}

export function renderFAQ(): string {
  const navLinks = faqSections.map(s => `<a href="#faq-${s.category}">${escapeHtml(s.label)}</a>`).join('')
  const sections = faqSections.map(renderSection).join('')

  return `
    ${renderJsonLd()}

    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">FREQUENTLY ASKED QUESTIONS</span>
          <h1>Answers to the questions we hear most often.</h1>
          <p class="about-hero-subtitle">Honest, plain-language answers about how we work, what we charge, how your assets are protected, and what to expect as a client of Merels Capital.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/page-faq-banner.jpg"><img src="/images/desktop/page-faq-banner.jpg" alt="Frequently asked questions about Merels Capital"></picture>
      </div>
    </section>

    <section class="faq-nav-section bg-off-white">
      <div class="faq-nav-inner">
        <h2 class="faq-nav-title">Jump to a topic</h2>
        <nav class="faq-nav">${navLinks}</nav>
      </div>
    </section>
    ${sections}

    <section id="cta">
      <div class="cta-inner">
        <h2>Still have questions?</h2>
        <p>Every situation is different. The best way to get answers specific to you is a no-obligation conversation with one of our advisors.</p>
        <a href="/contact/" class="btn-primary-light">Start a Conversation</a>
      </div>
    </section>
  `
}
