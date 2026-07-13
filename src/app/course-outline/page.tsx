import Link from 'next/link';

export default function CourseOutlinePage() {
  return (
    <>
      <header className="topbar course-topbar">
        <div className="topbar-inner course-topbar-inner">
          <Link className="wordmark" href="/" aria-label="AgentHappy home">AGENT<span>HAPPY</span></Link>
        </div>
      </header>
      <main className="course-page" data-screen-label="Course outline download">
        <section className="course-hero">
          <div className="shell course-shell">
            <div className="course-card">
              <aside className="course-card-panel course-card-intro" aria-label="Course resources">
                <div className="course-check" aria-hidden="true">✓</div>
                <p className="eyebrow course-eyebrow">Course outline</p>
                <h1>Thank you for your interest in AI training for corporate leadership and management teams.</h1>
                <nav className="course-resource-list" aria-label="Next steps">
                  <a href="/downloads/agenthappy-course-outline.pdf" download>
                    <span className="course-resource-icon" aria-hidden="true">↓</span>
                    <span>Download the outline</span>
                  </a>
                  <a href="#schedule-call">
                    <span className="course-resource-icon" aria-hidden="true">☎</span>
                    <span>Schedule a call with a consultant</span>
                  </a>
                  <a href="#referral-benefit">
                    <span className="course-resource-icon" aria-hidden="true">$</span>
                    <span>Referral benefit</span>
                  </a>
                </nav>
              </aside>
              <section className="course-card-panel course-card-next" aria-label="Continue registration">
                <p className="eyebrow course-eyebrow">Next step</p>
                <h2>Download your course outline and choose the best follow-up path.</h2>
                <p>Use the links on this page to review the course outline, talk through fit with a consultant, or learn how referral benefits work. We&rsquo;ll continue expanding this page with FAQs, the full outline accordion, and registration details.</p>
                <div className="course-next-actions">
                  <a className="btn" href="/downloads/agenthappy-course-outline.pdf" download>Download outline</a>
                  <a className="btn btn-secondary" href="#schedule-call">Schedule a call</a>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="course-summary" aria-label="Program details">
          <div className="shell course-summary-grid">
            <article>
              <span className="eyebrow">Start</span>
              <strong>August 5, 2026</strong>
            </article>
            <article>
              <span className="eyebrow">Format</span>
              <strong>Live webinar and team training</strong>
            </article>
            <article>
              <span className="eyebrow">For teams</span>
              <strong>Leadership and management groups</strong>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
