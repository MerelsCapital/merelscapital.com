export function renderGuideTaxPlanning(): string {
  return `
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">TAX PLANNING</span>
          <h1>Tax Planning for Business Owners</h1>
          <p class="about-hero-subtitle">Business owners have more tax levers available than most people realise. Using them well is one of the highest-return activities in your entire financial plan.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/guide-tax-planning-banner.jpg"><img src="/images/desktop/guide-tax-planning-banner.jpg" alt="Tax planning for business owners"></picture>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">WHY TAX PLANNING MATTERS MORE FOR BUSINESS OWNERS</span>
          <h2>The gap between a good year and a well-planned year</h2>
          <p>Employees have almost no control over the timing or character of their income. Their wages hit their W-2 and they work with what is left after withholding. Business owners operate in a fundamentally different position. They can accelerate or defer income across tax years, choose how much of their earnings appear as salary versus distribution, decide when to recognise a gain, and access deductions that do not exist for employees. That control, exercised deliberately, is worth real money every single year.</p>
          <p>The gap between a well-planned and a poorly-planned tax year for a successful business owner is commonly in the range of tens of thousands of dollars. Over a decade of ownership, cumulative savings can dwarf the cost of any professional advice engaged to produce them. The problem is that most business owners treat taxes as a compliance function rather than a planning opportunity. The return gets filed, the check gets written, and the window for action has closed. The strategies that actually reduce tax bills require decisions made during the year, not after it ends.</p>
          <p>Effective tax planning for business owners is not about aggressive positions or grey-area structures. It is about fully utilising what the tax code explicitly permits: retirement contributions, entity structure, timing of deductions, and qualified exclusions. Most owners leave a material amount on the table simply because no one has walked through the full landscape with them in a coordinated way.</p>
        </div>
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/guide-tax-planning-1.jpg"><img src="/images/desktop/guide-tax-planning-1.jpg" alt="Tax planning gap for business owners"></picture>
      </div>
    </section>

    <section class="content-row bg-white">
      <div class="content-row-inner reverse">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/guide-tax-planning-2.jpg"><img src="/images/desktop/guide-tax-planning-2.jpg" alt="Business entity structure and tax treatment"></picture>
        <div class="section-text">
          <span class="section-label">ENTITY STRUCTURE AND TAX TREATMENT</span>
          <h2>Your entity choice determines your tax baseline</h2>
          <p>The single most consequential tax decision most business owners make is how their entity is structured, and many made that choice years ago without thinking through the long-term tax implications. Entity structure determines what taxes apply to your earnings, what rate they apply at, and what planning tools are available to you. Revisiting that structure as income grows is a legitimate and often rewarding exercise.</p>
          <p>There is no universally correct entity type. The right answer depends on your income level, whether you have employees, your plans for reinvesting vs. distributing earnings, and your time horizon for the business. What matters is that the choice is made deliberately with current numbers in hand, not held over from a formation decision made when the business was much smaller.</p>
          <ul class="content-list">
            <li><strong>Sole Proprietor / Single-Member LLC (disregarded):</strong> all net profit is subject to self-employment tax (15.3% on the first $176,100, 2.9% above that) in addition to income tax. Simple to operate, but the SE tax burden is significant at higher income levels.</li>
            <li><strong>S-Corporation:</strong> allows the owner to split earnings between a reasonable W-2 salary (subject to payroll taxes) and distributions (not subject to SE tax). At meaningful income levels, the payroll tax savings on distributions can run to tens of thousands of dollars annually, well in excess of the cost of maintaining the S-Corp.</li>
            <li><strong>C-Corporation:</strong> pays a flat 21% federal corporate tax rate, which is attractive for earnings retained and reinvested in the business. The tradeoff is double taxation when profits are eventually distributed as dividends. C-Corp structure is also required to access QSBS benefits under Section 1202.</li>
            <li><strong>Partnership / Multi-Member LLC:</strong> income passes through to members and is taxed at individual rates. Flexible in how profits and losses are allocated, and can be structured with different classes of interest to serve different ownership objectives.</li>
            <li><strong>Check-the-box elections:</strong> LLCs can elect to be taxed as a sole proprietorship, partnership, S-Corp, or C-Corp. That flexibility means the legal structure and the tax structure do not have to match, which is worth reviewing with a CPA if your income has grown substantially.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">ANNUAL TAX REDUCTION STRATEGIES</span>
          <h2>Deductions and elections that reduce your bill today</h2>
          <p>Beyond entity structure, business owners have access to a collection of annual strategies that can meaningfully reduce taxable income. None of them are exotic, and all of them are explicitly available under current tax law. The challenge is awareness and coordination: many owners use one or two but miss several others that apply to their situation.</p>
          <p>Year-end planning, ideally beginning in October, is the window during which most of these strategies need to be executed. Retirement plan contributions must be made before year end in most cases. Equipment purchases must be placed in service. The Augusta Rule days must be documented. Waiting until April to think about the prior tax year means the opportunities are gone.</p>
          <ul class="content-list">
            <li><strong>Qualified Business Income (QBI) deduction, Section 199A:</strong> eligible pass-through business owners may deduct up to 20% of qualified business income from taxable income. Income limits and specified service trade or business rules apply, making the planning around this deduction worth careful attention at higher income levels.</li>
            <li><strong>Section 179 expensing:</strong> allows immediate deduction of the full cost of qualifying equipment and software rather than depreciating it over years. The 2025 limit is $1.16 million. Combined with bonus depreciation, this can produce a substantial deduction in the year of purchase.</li>
            <li><strong>Bonus depreciation:</strong> applies to new and used qualified property. Rates have phased down from 100% in 2022, but partial bonus depreciation remains available and still produces front-loaded deductions that improve after-tax cash flow.</li>
            <li><strong>Home office deduction:</strong> if you use part of your home regularly and exclusively for business, you can deduct a proportionate share of home expenses. The simplified method ($5 per square foot, up to 300 sq ft) or the actual expense method both work; the actual method typically produces the larger deduction.</li>
            <li><strong>Augusta Rule, Section 280A(g):</strong> you can rent your personal residence to your business for up to 14 days per year without the rental income being taxable to you personally. The business deducts the rent at fair market rates. With proper documentation, this shifts income from personal to business at no net tax cost.</li>
            <li><strong>Accountable plan for reimbursements:</strong> rather than paying personal expenses and treating them as taxable compensation, an accountable plan allows the business to reimburse documented business expenses tax-free. This includes mileage, home office, phone, and professional development costs.</li>
            <li><strong>Self-employed health insurance deduction:</strong> premiums paid for health, dental, and long-term care insurance for yourself, your spouse, and your dependents are deductible directly from gross income, not just as an itemized deduction. This is one of the most consistently overlooked deductions among self-employed owners.</li>
          </ul>
        </div>
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/guide-tax-planning-3.jpg"><img src="/images/desktop/guide-tax-planning-3.jpg" alt="Annual tax reduction strategies for business owners"></picture>
      </div>
    </section>

    <section class="content-row bg-white">
      <div class="content-row-inner reverse">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/guide-tax-planning-4.jpg"><img src="/images/desktop/guide-tax-planning-4.jpg" alt="Retirement plans as a tax tool for business owners"></picture>
        <div class="section-text">
          <span class="section-label">RETIREMENT PLANS AS A TAX TOOL</span>
          <h2>The most powerful deduction available to business owners</h2>
          <p>Retirement plan contributions are simultaneously the best retirement savings mechanism and the single largest annual tax deduction most business owners can access. A Solo 401(k) allows a self-employed owner to contribute as both employee and employer, reaching up to $70,000 per year in 2025 with a $7,500 catch-up for those 50 and older. Every dollar contributed reduces taxable income dollar for dollar. At a combined federal and state marginal rate of 40%, that is $28,000 or more in taxes deferred or eliminated on a maximum contribution.</p>
          <p>For high-income owners who have maximised a defined contribution plan and still want more, a Defined Benefit or Cash Balance plan can allow annual contributions well in excess of $100,000, sometimes approaching $275,000 or more depending on age and income. These plans carry actuarial and administrative requirements, and contributions must be made consistently, but for an owner in their late 40s or 50s with substantial earnings, the annual tax savings can fund the plan's administrative cost many times over.</p>
          <p>Choosing the right plan structure requires matching the vehicle to your business profile: whether you have employees, how variable your income is, whether you want Roth options, and how large your contribution goal is. Getting this wrong means either leaving contribution room unused or setting up a plan with obligations you cannot sustain in a down year.</p>
          <ul class="content-list">
            <li><strong>SEP-IRA:</strong> up to 25% of net self-employment income or $70,000, whichever is less. Simple to establish with no annual filing requirement. Contributions are flexible year to year. Does not allow employee Roth contributions.</li>
            <li><strong>Solo 401(k):</strong> for owner-only businesses with no full-time W-2 employees. Allows employee deferrals plus employer profit-sharing up to the combined limit. Supports Roth contributions and plan loans. Requires a Form 5500 filing once plan assets exceed $250,000.</li>
            <li><strong>SIMPLE IRA:</strong> designed for small businesses with employees. Lower contribution limits than a 401(k), but simpler to administer. Mandatory employer matching or non-elective contributions apply.</li>
            <li><strong>Defined Benefit / Cash Balance Plan:</strong> actuarially calculated contributions can far exceed defined contribution limits. Particularly powerful for owners in their 50s with high, stable income who want to build retirement assets quickly while generating outsized current-year deductions.</li>
            <li><strong>Stacking strategies:</strong> in some cases, a business owner can maintain both a defined benefit plan and a defined contribution plan simultaneously, further increasing annual deductible contributions. This requires careful coordination with an actuary and CPA.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-row bg-off-white">
      <div class="content-row-inner">
        <div class="section-text">
          <span class="section-label">EXIT AND LIQUIDITY EVENT TAX PLANNING</span>
          <h2>The tax decisions that determine what you keep at the close</h2>
          <p>A business sale is often the largest financial transaction of an owner's life, and the difference between a well-structured and a poorly-structured exit can easily be seven figures in after-tax proceeds. The strategies that produce the best outcomes are not available at the closing table. They require decisions made years, sometimes many years, before the transaction. Owners who begin exit tax planning only when they are ready to sell have already missed most of the planning window.</p>
          <p>The two most important questions are whether the transaction will be structured as an asset sale or a stock sale, and what the tax character of the gain will be. Buyers typically prefer asset sales because they get a stepped-up basis in the assets acquired. Sellers typically prefer stock sales because they receive capital gains treatment on the entire purchase price. The negotiation between those preferences, and the use of structures that satisfy both parties, is where significant value is created or lost.</p>
          <p>Parallel to deal structure, owners with qualifying C-Corporation stock should evaluate their eligibility for the Section 1202 exclusion well before they are close to a sale. If certain conditions are met, that exclusion can eliminate federal capital gains tax on a gain of up to $10 million or 10 times the owner's adjusted basis, whichever is greater. That is not a planning technique to discover after you have signed a letter of intent.</p>
          <ul class="content-list">
            <li><strong>Qualified Small Business Stock (QSBS), Section 1202:</strong> C-Corporation stock acquired at original issuance and held for more than five years may qualify for an exclusion of up to $10 million or 10x adjusted basis in federal capital gains. State conformity varies. Requires planning of the entity structure long before any sale.</li>
            <li><strong>Installment sale:</strong> spreading gain recognition across multiple tax years by accepting payment over time rather than in a lump sum. This can keep annual gain within lower brackets and reduce the net tax rate on the transaction, though the seller takes on credit risk from the buyer.</li>
            <li><strong>Opportunity Zone reinvestment:</strong> gain from a business sale can be invested into a Qualified Opportunity Zone Fund, deferring and potentially reducing the tax on that gain if the investment is held for the required period.</li>
            <li><strong>Charitable Remainder Trust (CRT) with appreciated business interests:</strong> contributing appreciated stock or business interests to a CRT before a sale allows the trust to sell the asset without immediate capital gains tax. The trust then pays an income stream to the owner, with the remainder passing to charity. This is a complex technique suited to owners with charitable intent and the right asset profile.</li>
            <li><strong>Employee Stock Ownership Plan (ESOP):</strong> selling to an ESOP can provide tax-advantaged liquidity for the owner while creating an employee ownership structure. For C-Corp owners selling to an ESOP, Section 1042 allows deferral of capital gains through reinvestment in qualifying replacement securities.</li>
            <li><strong>Pre-sale entity conversion:</strong> converting from an S-Corp to a C-Corp well before a sale to qualify for QSBS, or restructuring ownership interests, requires time to satisfy holding periods. These decisions cannot be rushed.</li>
          </ul>
        </div>
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/guide-tax-planning-5.jpg"><img src="/images/desktop/guide-tax-planning-5.jpg" alt="Exit and liquidity event tax planning"></picture>
      </div>
    </section>

    <section class="content-row bg-white">
      <div class="content-row-inner reverse">
        <picture><source media="(max-width: 768px)" srcset="/images/mobile/guide-tax-planning-6.jpg"><img src="/images/desktop/guide-tax-planning-6.jpg" alt="Working with your CPA and financial advisor on tax planning"></picture>
        <div class="section-text">
          <span class="section-label">WORKING WITH YOUR CPA</span>
          <h2>Coordinating your advisor and your accountant</h2>
          <p>The most effective tax planning happens when a financial advisor and a CPA work together, not in separate conversations with the business owner as the translator between them. The CPA understands the tax law and the return. The advisor understands the broader financial plan: the retirement timeline, the investment accounts, the cash flow needs, and the exit horizon. When those two pictures are aligned, strategies that neither professional would have surfaced alone become visible.</p>
          <p>Quarterly estimated tax payments are the operational rhythm that keeps planning grounded. Rather than simply paying four equal instalments based on last year's liability, a well-coordinated approach adjusts each quarter based on actual year-to-date income and planned deductions. That keeps you neither over-paying (losing the use of your cash) nor under-paying (facing underpayment penalties). It also creates natural checkpoints during the year to revisit whether planned strategies are on track.</p>
          <p>The October through December window is the most important planning period of the year. Year-end bonuses and distributions can be adjusted. Equipment can be purchased and placed in service before year end. Retirement plan contributions can be finalised. Tax-loss harvesting in the investment portfolio can offset gains. Multi-year tax modeling, looking at this year, next year, and the year after together, is more valuable than optimising any single year in isolation, particularly for owners whose income fluctuates or who are approaching a major transaction.</p>
          <ul class="content-list">
            <li>Quarterly estimated taxes: recalculate each quarter based on actual income and planned deductions, not just last year's liability</li>
            <li>Year-end planning window: October through December is when most actionable strategies must be executed</li>
            <li>Multi-year tax modeling: plan across a three-to-five year horizon, particularly around large income events or anticipated exits</li>
            <li>Advisor-CPA coordination: share financial plan details, retirement contribution targets, and investment activity with your CPA before the return is filed</li>
            <li>Roth conversion opportunities: low-income years within a business cycle are often the right time to convert pre-tax retirement assets to Roth at a reduced rate</li>
            <li>Documentation habits: the Augusta Rule, home office deduction, and accountable plan reimbursements all require contemporaneous records to survive scrutiny</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="cta-inner">
        <h2>Your tax return should reflect a plan, not an afterthought.</h2>
        <p>We work alongside your CPA to identify what you are leaving on the table and put a coordinated strategy in place before the window closes.</p>
        <button data-action="open-booking" class="btn-primary-light">Schedule a Consultation</button>
      </div>
    </section>
  `
}
