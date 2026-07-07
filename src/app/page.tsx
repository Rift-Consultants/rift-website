import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#top" aria-label="Rift Consultants home">Rift <span>Consultants</span></a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="/services">Services</a>
            <a href="/industries">Industries</a>
            <a href="/events">Events</a>
            <a href="#pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="#faqs">FAQs</a>
          </nav>
          <a className="nav-cta" href="#reserve">Book a call</a>
        </div>
      </header>
      <main id="top">
        <section className="fold" id="reserve" data-screen-label="Above the fold (form-first)">
          <div className="hero">

            <div className="hero-inner">
              <div className="hero-copy reveal">
                <h1>AI training and implementation for corporate leadership and management teams</h1>
                <div className="hero-actions" aria-label="Hero calls to action">
                  <a className="btn" href="#reserve" data-anchor-cta="">start a project</a>
                  <a className="btn btn-secondary" href="#reserve" data-anchor-cta="">register for training</a>
                </div>
              </div>
            </div>
          </div>
          <div className="formstrip reveal d1">
            <div className="formstrip-inner">
              <div className="hs-embed-wrap">
                <span id="hs_cos_wrapper_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_form" data-hs-cos-general-type="widget" data-hs-cos-type="form">
                  <h3 id="hs_cos_wrapper_form_991479870_title" className="hs_cos_wrapper form-title" data-hs-cos-general-type="widget_field" data-hs-cos-type="text" />
                  <div id="hs_form_target_form_991479870" className="hs-form-html" data-form-id="92c80c30-5e96-4801-b771-46ebf47b902d" data-portal-id="39849130" data-region="na2" />
                </span>
              </div>
              <div className="confirm-card" data-screen-label="Confirmation state">
                <span className="eyebrow">Confirmed</span>
                <h3>You&apos;re in.</h3>
                <p>We&apos;ll send you the join link by email. See you Wednesday at 5pm PT.</p>
                <div className="confirm-sub">Check your inbox for a message from COMMUNE Capital. The link is unique to you.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="logo-wall" aria-label="Technologies we work with">
          <div className="logo-wall-inner">
            <p className="logo-wall-label">Technologies we work with</p>
            <div className="logo-wall-grid">
              <Image src="/images/logos/chatgpt-text.png" alt="OpenAI" width={150} height={48} />
              <Image src="/images/logos/claude-text.png" alt="Claude" width={150} height={48} />
              <Image src="/images/logos/gemini-text.png" alt="Gemini" width={150} height={48} />
              <Image src="/images/logos/wispr-text.png" alt="Wispr Flow" width={190} height={48} />
              <Image src="/images/logos/microsoft-text.png" alt="Microsoft" width={170} height={48} />
            </div>
          </div>
        </section>
        <section className="webinar" data-screen-label="Webinar registration">
          <div className="shell webinar-shell">
            <div className="webinar-copy">
              <span className="eyebrow">LIVE WEBINAR</span>
              <h2>IT&rsquo;s Time to Build:<br /><em>Your First IT Agent</em></h2>
              <p className="body">Join Rift Consultants for a practical 30-minute session on designing, prompting, and deploying an IT agent that can triage requests, surface context, and help your team move from AI curiosity to useful automation.</p>
              <div className="speaker-row" aria-label="Webinar speakers">
                <div className="speaker-item">
                  <span className="speaker-avatar" aria-hidden="true">RC</span>
                  <div>
                    <strong>Rift Consultants</strong>
                    <span>Applied AI Strategy Team</span>
                  </div>
                </div>
                <div className="speaker-item">
                  <span className="speaker-avatar" aria-hidden="true">IT</span>
                  <div>
                    <strong>IT Agent Lab</strong>
                    <span>Implementation Specialists</span>
                  </div>
                </div>
              </div>
              <div className="webinar-date">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2v3M17 2v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                </svg>
                <span>July 1, 2026 · 9:00 - 9:30 AM PT</span>
              </div>
            </div>
            <form className="webinar-card">
              <div className="field-grid">
                <label>
                  <span>First name</span>
                  <input type="text" name="firstName" autoComplete="given-name" />
                </label>
                <label>
                  <span>Last name</span>
                  <input type="text" name="lastName" autoComplete="family-name" />
                </label>
              </div>
              <label>
                <span>Work email</span>
                <input type="email" name="email" autoComplete="email" />
              </label>
              <label className="consent-row">
                <input type="checkbox" name="marketingConsent" defaultChecked />
                <span>I agree to receive webinar reminders and related resources from Rift Consultants.</span>
              </label>
              <p className="webinar-terms">By registering, you agree to receive communications about this event. Your information will be handled in accordance with our privacy practices, and you can unsubscribe at any time.</p>
              <button className="btn" type="submit">Register Now</button>
            </form>
          </div>
        </section>
        <section className="featured learn-section" data-screen-label="What you'll learn">
          <div className="shell learn-shell">
            <div className="featured-copy learn-copy">
              <h2>What you&rsquo;ll learn</h2>
              <div className="learn-list">
                <div className="learn-item">
                  <span className="learn-check" aria-hidden="true">✓</span>
                  <div>
                    <h3>Identify your highest-value agentic AI use case</h3>
                    <p>Map the pain points, workflows, and strategic opportunities where AI agents can create the biggest operational impact for your organization.</p>
                  </div>
                </div>
                <div className="learn-item">
                  <span className="learn-check" aria-hidden="true">✓</span>
                  <div>
                    <h3>Design an agent-first workflow</h3>
                    <p>Apply the AGENT framework to redesign a workflow for autonomous operation, human-agent collaboration, governance checkpoints, and technical handoff.</p>
                  </div>
                </div>
                <div className="learn-item">
                  <span className="learn-check" aria-hidden="true">✓</span>
                  <div>
                    <h3>Prepare an implementation brief for your team</h3>
                    <p>Leave with a practical roadmap covering build-vs-buy recommendations, vendor evaluation criteria, risk controls, resource requirements, and success metrics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="learn-visual">
              <img
                src="/images/graphic-2.png"
                alt="Agentic AI workflow graphic"
                className="learn-visual-image"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="featured consulting-section" data-screen-label="Consulting services">
          <div className="featured-media"><img src="https://invest.communecapital.com/hubfs/COMMUNE/images/ventura-rendering.jpg" alt="Applied AI consulting team working through an enterprise deployment plan" loading="lazy" /></div>
          <div className="shell"><div className="featured-copy">
            <span className="eyebrow">Consulting</span>
            <h2>AI workflows beyond a single chat prompt.</h2>
            <div className="prop-tag">AI agent strategy · deployment consulting</div>
            <p className="body">We work with leaders, operators, and frontline teams to identify where agents can make the biggest impact, redesign critical workflows around intelligence, and deploy durable systems connected to your data, tools, controls, and business processes.</p>
            <div className="sec-cta"><a className="btn" href="#reserve" data-anchor-cta="">Book a call <span className="arr">→</span></a></div>
          </div></div>
        </section>
        <section className="format" data-screen-label="Format">
          <div className="shell"><span className="eyebrow">The format</span><h2>What the live call covers</h2>
            <div className="format-list">
              <div className="format-row"><div className="format-dur">30 min</div><div><h3>The week&apos;s education topic</h3><p>A focused session on one part of how real estate ownership works. No fluff.</p></div></div>
              <div className="format-row"><div className="format-dur">15 min</div><div><h3>What COMMUNE is doing today</h3><p>A look at where we&apos;re currently allocating capital and what we&apos;re building. Real assets, real markets, real numbers.</p></div></div>
              <div className="format-row"><div className="format-dur">15 to 30 min</div><div><h3>Live Q&amp;A</h3><p>Ask the team anything. We stay until the questions are done.</p></div></div>
            </div>
          </div>
        </section>
        <section className="pricing-section" id="pricing" data-screen-label="Pricing">
          <div className="shell pricing-shell">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>No more budget worries<br />—simple and flexible.</h2>
              <p>Choose between ongoing AI implementation support and one-time fixed-scope projects.</p>
            </div>
            <div className="pricing-toggle" aria-label="Pricing options">
              <span className="active">Monthly Retainer</span>
              <span>One-Off Project</span>
            </div>
            <div className="pricing-panel">
              <div className="pricing-benefits">
                <ul>
                  <li>Continuous AI workflow discovery, design, and implementation support.</li>
                  <li>Priority access to a dedicated AI workflow team each month.</li>
                  <li>Weekly strategy and delivery check-ins to keep momentum high.</li>
                  <li>Roadmap management across agents, automations, tools, and data connections.</li>
                  <li>Specialized expertise in AI agents, automations, and operational systems.</li>
                </ul>
                <p>We keep it simple and flexible.</p>
                <span className="pricing-note">Location and time: Los Angeles (PST)</span>
              </div>
              <article className="pricing-card">
                <div className="availability"><span aria-hidden="true" />4 slots available</div>
                <h3>Monthly AI Retainer</h3>
                <p>Ongoing strategy, implementation, and optimization support for teams building AI into daily operations.</p>
                <div className="pricing-rule" />
                <div className="price">$8,000 <span>/ month</span></div>
                <a className="btn" href="#reserve" data-anchor-cta="">Start your monthly retainer</a>
              </article>
            </div>
          </div>
        </section>
        <section className="faq-section" id="faqs" data-screen-label="FAQ">
          <div className="shell faq-shell">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
            <div className="faq-list">
              <details>
                <summary>What is included in a monthly retainer?</summary>
                <p>Strategy, workflow design, implementation support, weekly check-ins, and roadmap management across AI tools, automations, agents, and data connections.</p>
              </details>
              <details>
                <summary>How is a one-off project scoped?</summary>
                <p>We define a fixed outcome, timeline, and deliverables before work begins so your team knows exactly what will be built and implemented.</p>
              </details>
              <details>
                <summary>Can you work with our existing tools and data?</summary>
                <p>Yes. We design around your current systems and identify practical integrations that improve daily operations without unnecessary tool sprawl.</p>
              </details>
              <details>
                <summary>How soon can we start?</summary>
                <p>Most engagements begin with a discovery call, followed by a short implementation plan and kickoff once scope and availability are confirmed.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="reprompt" data-screen-label="Closing CTA"><div className="shell"><div className="reprompt-inner"><div><h2>Take the next step.</h2><p>Join us this Wednesday at 5pm PT. Register once and you are on the list — the join link arrives by email before every call.</p></div><a className="btn" href="#reserve" data-anchor-cta="">Reserve my seat</a></div></div></section>
        <footer className="compliance" data-screen-label="Disclosures footer"><div className="shell"><span className="eyebrow">DISCLAIMER</span><p id="eligibility">All content available on this webpage is general in nature, not directed or tailored to any particular person, and is for informational purposes only. This webpage and the contents herein do not constitute, and should not be construed as, an offer to purchase securities of Commune Omni Fund, LLC (&quot;Omni&quot;). Such an offer will only be made pursuant to an Offering Statement filed with the Securities and Exchange Commission available at <a href="https://www.sec.gov/Archives/edgar/data/2046788/000110465925080221/tm2519245d2_partiiandiii.htm" target="_blank" rel="noopener">Offering Statement link</a>. The offering referred to in the Offering Statement is being conducted by Omni pursuant to Tier 2 of Regulation A under the Securities Act of 1933, as amended. Prospective investors should carefully read and review the Offering Statement. Like all investments in securities, investing in Omni is highly speculative and involves significant risks, including the possible loss of your entire investment. Past performance is not a guarantee or indicative of future results. Only persons satisfying the investor eligibility standards may subscribe for an interest in Omni. Please see the Offering Statement for eligibility information. This webpage may contain forward-looking statements that involve substantial risks and uncertainties. Actual risks may differ materially from those expressed or implied in such statements, and such statements should not be relied upon as guarantees of future performance. Any forward-looking statements are speculative and are qualified in their entirety by the information and risks disclosed in the Offering Statement.</p><p>The SEC has not approved or passed upon the merits of the securities being offered in the Offering or the terms of the Offering. Neither this webpage nor its contents should be construed as legal, tax, investment, or other advice. Individuals are urged to consult with their own tax, legal, and investment advisers before making any investment decision. Securities are offered through Andes Capital Group, LLC, a registered broker-dealer, member FINRA/SIPC (CRD# 139212), acting as broker of record. Andes Capital Group, LLC may receive compensation in connection with this offering as disclosed in the offering circular.</p><div className="legalbar"><div>© 2026 COMMUNE Capital LLC</div><nav aria-label="Footer links"><a href="https://communecapital.com" target="_blank" rel="noopener">communecapital.com</a><span className="sep">·</span><a href="https://www.sec.gov/Archives/edgar/data/2046788/000110465925080221/tm2519245d2_partiiandiii.htm" target="_blank" rel="noopener">Offering Circular</a><span className="sep">·</span><a href="https://communecapital.com/investorportal" target="_blank" rel="noopener">Investor Login</a></nav></div></div></footer>
      </main>
      <div className="stickybar" aria-hidden="true"><a className="btn" href="#reserve" data-anchor-cta="">Reserve my seat</a></div>
    </>
  );
}
