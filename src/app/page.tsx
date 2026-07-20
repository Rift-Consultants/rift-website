import Image from 'next/image';
import ScrollHeaderState from './scroll-header-state';
import WebinarRegistrationClient, { BookingCalendarClient } from './webinar-registration-client';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#top" aria-label="AgentHappy home">AGENT<span>HAPPY</span></a>
          <input className="menu-toggle" type="checkbox" id="mobile-menu-toggle" aria-label="Toggle navigation menu" />
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="/training">Training</a>
            <a href="/consulting">Consulting</a>
            <a href="#pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="#faqs">FAQs</a>
          </nav>
          <a className="nav-cta" href="#reserve">Talk to us</a>
          <label className="menu-button" htmlFor="mobile-menu-toggle" aria-label="Toggle navigation menu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </label>
        </div>
      </header>
      <ScrollHeaderState />
      <main id="top">
        <section className="fold" id="reserve" data-screen-label="Above the fold (form-first)">
          <div className="hero">

            <div className="hero-inner">
              <div className="hero-copy reveal">
                <h1>AI training workshops and implementation for corporate leadership <br /> and management teams. Turn single-prompt chats, untracked <br /> token usage, and AI hallucinations into multi-agent production workflows</h1>
                <div className="hero-actions" aria-label="Hero calls to action">
                  <a className="btn" href="#reserve" data-anchor-cta="">join the workshop</a>
                  <a className="btn btn-secondary" href="#reserve" data-anchor-cta="">start a project</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="logo-wall" aria-label="Technologies we work with">
          <div className="logo-wall-inner">
            <p className="eyebrow logo-wall-label">Technologies we work with</p>
            <div className="logo-wall-grid">
              <span className="logo-tile"><Image src="/images/logos/chatgpt-text.png" alt="OpenAI" width={150} height={48} /></span>
              <span className="logo-tile"><Image src="/images/logos/claude-text.png" alt="Claude" width={150} height={48} /></span>
              <span className="logo-tile"><Image src="/images/logos/gemini-text.png" alt="Gemini" width={150} height={48} /></span>
              <span className="logo-tile"><Image src="/images/logos/wispr-text.png" alt="Wispr Flow" width={190} height={48} /></span>
              <span className="logo-tile"><Image src="/images/logos/microsoft-text.png" alt="Microsoft" width={170} height={48} /></span>
              <span className="logo-tile"><Image className="logo-image-preserve" src="/images/logos/glean-logo.png" alt="Glean" width={150} height={48} /></span>
              <span className="logo-tile"><Image className="logo-image-preserve" src="/images/logos/langchain-logo.png" alt="LangChain" width={170} height={48} /></span>
            </div>
          </div>
        </section>
        <WebinarRegistrationClient />
        <section className="featured learn-section" data-screen-label="What you'll learn">
          <div className="shell learn-shell">
            <div className="featured-copy learn-copy">
              <span className="eyebrow">3-week workshop</span>
              <h2>What you&rsquo;ll leave with</h2>
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
                    <p>Apply the AIM framework to redesign a workflow for autonomous operation, human-agent collaboration, governance checkpoints, and technical handoff.</p>
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
                src="/images/agenthappy-cubes.png"
                alt="Agentic AI workflow graphic"
                className="learn-visual-image"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="featured consulting-section" data-screen-label="Consulting services">
          <div className="shell consulting-shell">
            <div className="learn-visual consulting-visual">
              <img
                src="/images/agenthappy-circles.png"
                alt="Applied AI consulting team working through an enterprise deployment plan"
                className="learn-visual-image"
                loading="lazy"
              />
            </div>
            <div className="featured-copy consulting-copy">
              <span className="eyebrow">Consulting</span>
              <h2>AI workflows beyond a single chat prompt.</h2>
              <div className="prop-tag">AI agent strategy · deployment consulting</div>
              <p className="body">We work with leaders, operators, and frontline teams to identify where agents can make the biggest impact, redesign critical workflows around intelligence, and deploy durable systems connected to your data, tools, controls, and business processes.</p>
              <div className="sec-cta"><a className="btn" href="#reserve" data-anchor-cta="">Book a call <span className="arr">→</span></a></div>
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
            <div className="pricing-options">
              <input type="radio" id="pricing-monthly" name="pricing-plan" defaultChecked />
              <input type="radio" id="pricing-project" name="pricing-plan" />
              <div className="pricing-toggle" aria-label="Pricing options">
                <label htmlFor="pricing-monthly">3-week workshop</label>
                <label htmlFor="pricing-project">development retainer</label>
              </div>
              <div className="pricing-panel monthly-panel">
                <div className="pricing-benefits">
                  <ul>
                    <li>Live online sessions each Tuesday, Wednesday, and Thursday.</li>
                    <li>Guided learnings to work at your own pace.</li>
                    <li>Weekly strategy and delivery check-ins to keep momentum high.</li>
                    <li>Redesign one current high-value workflow as an AI agentic workflow.</li>
                    <li>Leave with (3) deliverables: (1) a use case canvas, (2) a agentic workflow design document, (3) a platform to create future agentic workflows</li>
                  </ul>
                  <p>We keep it simple and flexible.</p>
                  <span className="pricing-note">Location and time: Texas (CST)</span>
                </div>
                <article className="pricing-card">
                  <div className="availability"><span aria-hidden="true" />4 slots available</div>
                  <h3>3-Week Agentic AI Workshop</h3>
                  <p>For leadership teams, redesign one high-value workflow into an agentic ai-first workflow for your department and teams.</p>
                  <div className="pricing-rule" />
                  <div className="price">$2,395 <span>/ month</span></div>
                  <a className="btn" href="#reserve" data-anchor-cta="">join the workshop</a>
                </article>
              </div>
              <div className="pricing-panel project-panel">
                <div className="pricing-benefits">
                  <ul>
                    <li>Full-time development support with a dedicated team.</li>
                    <li>Transparent, predictable pricing.</li>
                    <li>Easy collaboration with your existing departments and teams.</li>
                    <li>Team training, documentation, and launch support.</li>
                  </ul>
                  <p>Ideal when you need flexible development support.</p>
                  <span className="pricing-note">Typical timeline: 4–8 weeks per workflow</span>
                </div>
                <article className="pricing-card">
                  <div className="availability"><span aria-hidden="true" />Fixed scope</div>
                  <h3>Monthly retainer</h3>
                  <p>A focused engagement to design, build, and hand off a specific AI workflow or agent for your team.</p>
                  <div className="pricing-rule" />
                  <div className="price">Custom <span>/ project</span></div>
                  <a className="btn" href="#reserve" data-anchor-cta="">Scope a one-off project</a>
                </article>
              </div>
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
                <h2>Ready to map your AI opportunity?</h2>
                <p>Book a 15-minute discovery call to discuss your goals, identify high-impact AI opportunities, and explore the right next step for your team.</p>
              </div>
              <a className="btn" href="#book-a-call" data-anchor-cta="">Book a 15-minute discovery call</a>
            </div>
          </div>
        </section>
        <BookingCalendarClient />
        <footer className="site-footer" data-screen-label="Footer CTA">
          <div className="shell footer-bottom">
            <div className={`footer-social ${styles.footerSocialRight}`} aria-label="Social links">
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
