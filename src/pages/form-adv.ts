export function renderFormAdv(): string {
  return `
    <section class="split-hero">
      <div class="split-hero-left">
        <div class="split-hero-content">
          <span class="section-label light">LEGAL</span>
          <h1>Form ADV</h1>
          <p class="about-hero-subtitle">Regulatory disclosure documents filed with the U.S. Securities and Exchange Commission.</p>
        </div>
      </div>
      <div class="split-hero-image">
        <img src="/images/Form.png" alt="Financial documents" />
      </div>
    </section>

    <section class="legal-section bg-off-white">
      <div class="legal-inner">
        <div class="legal-intro">
          <h2>About Form ADV</h2>
          <p>Form ADV is the uniform form used by investment advisers to register with the Securities and Exchange Commission (SEC) and state securities authorities. It consists of two parts and provides important disclosure information about Merels Capital, our advisory services, fees, and potential conflicts of interest.</p>
          <p>As a registered investment adviser, Merels Capital is required to provide clients and prospective clients with our Form ADV Part 2 (Brochure) and Part 2B (Brochure Supplement) prior to or at the time of entering into an advisory contract. We update these documents at least annually.</p>
        </div>

        <div class="adv-parts">
          <div class="adv-part">
            <div class="adv-part-header">
              <div class="adv-part-icon">◈</div>
              <div>
                <h3>Form ADV Part 1</h3>
                <p class="adv-part-subtitle">Organizational and operational information filed with the SEC.</p>
              </div>
            </div>
            <p>Part 1 contains information about the adviser's business, ownership, clients, employees, business practices, affiliations, and any disciplinary events. This information is publicly available through the SEC's Investment Adviser Public Disclosure (IAPD) database.</p>
            <a href="#" class="text-link">View on SEC IAPD →</a>
          </div>

          <div class="adv-part">
            <div class="adv-part-header">
              <div class="adv-part-icon">◈</div>
              <div>
                <h3>Form ADV Part 2A — Firm Brochure</h3>
                <p class="adv-part-subtitle">Plain-language disclosure of our advisory services, fees, and conflicts.</p>
              </div>
            </div>
            <p>Part 2A describes our advisory services, fee schedule, investment strategies, risk factors, disciplinary history, and conflicts of interest. We encourage all clients and prospective clients to read this document carefully.</p>
            <a href="#" class="text-link">Download Part 2A (PDF) →</a>
          </div>

          <div class="adv-part">
            <div class="adv-part-header">
              <div class="adv-part-icon">◈</div>
              <div>
                <h3>Form ADV Part 2B — Brochure Supplement</h3>
                <p class="adv-part-subtitle">Background and qualifications of individual advisory personnel.</p>
              </div>
            </div>
            <p>Part 2B provides information about the educational background, business experience, and disciplinary history of the individual advisers who will provide advisory services to your account.</p>
            <a href="#" class="text-link">Download Part 2B (PDF) →</a>
          </div>
        </div>

        <div class="legal-note">
          <p>If you have questions about any of these disclosures or would like a printed copy delivered to you at no charge, please <a data-route="contact" href="#" class="text-link">contact us</a>.</p>
        </div>
      </div>
    </section>
  `
}
