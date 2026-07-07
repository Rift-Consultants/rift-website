import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#top" aria-label="AgentHappy home">AGENT<span>HAPPY</span></a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="/services">Services</a>
            <a href="/industries">Industries</a>
            <a href="/events">Events</a>
            <a href="#pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="#faqs">FAQs</a>
          </nav>
          <a className="nav-cta" href="#reserve">Talk to us</a>
        </div>
      </header>
      <main id="top">
        <section className="fold" id="reserve" data-screen-label="Above the fold (form-first)">
          <div className="hero">

            <div className="hero-inner">
              <div className="hero-copy reveal">
                <h1>AI training and implementation for corporate leadership <br /> and management teams. Turn single-prompt chats, untracked <br /> token usage, and AI hallucinations into multi-agent production workflows</h1>
                <div className="hero-actions" aria-label="Hero calls to action">
                  <a className="btn" href="#reserve" data-anchor-cta="">sign up for training</a>
                  <a className="btn btn-secondary" href="#reserve" data-anchor-cta="">start a project</a>
                </div>
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
              <p className="body">Join AgentHappy for a practical 30-minute session on designing, prompting, and deploying an IT agent that can triage requests, surface context, and help your team move from AI curiosity to useful automation.</p>
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
                    <strong>Kenny Mack</strong>
                    <span>Applied AI Engineer</span>
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
        <section className="reprompt" data-screen-label="Closing CTA">
          <div className="shell">
            <div className="reprompt-inner">
              <div>
                <h2>Take the next step.</h2>
                <p>Join us this Wednesday at 5pm PT. Register once and you are on the list — the join link arrives by email before every call.</p>
              </div>
              <a className="btn" href="#reserve" data-anchor-cta="">Reserve my seat</a>
            </div>
          </div>
        </section>
        <footer className="site-footer" data-screen-label="Footer CTA">
          <div className="shell footer-bottom">
            <nav aria-label="Footer navigation">
              <a href="/services">Services</a>
              <a href="/industries">Industries</a>
              <a href="/events">Events</a>
              <a href="#pricing">Pricing</a>
              <a href="/about">About</a>
              <a href="#faqs">FAQs</a>
            </nav>
            <div className="footer-social" aria-label="Social links">
              <a href="https://x.com" target="_blank" rel="noopener" aria-label="X">X</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
            </div>
          </div>
          <div className="shell footer-credit">© AgentHappy 2026</div>
        </footer>
      </main>
      <div className="stickybar" aria-hidden="true"><a className="btn" href="#reserve" data-anchor-cta="">Reserve my seat</a></div>
    </>
  );
}
