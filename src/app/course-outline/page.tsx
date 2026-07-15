import Link from 'next/link';

export default function CourseOutlinePage() {
  return (
    <>
      <div className="course-offer-bar" role="status">Enroll by July 21, 2026 at 11:59 PM to receive 10% off.</div>
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
              <section className="course-card-panel course-card-next" aria-label="Create an account to continue registration">
                <p className="eyebrow course-eyebrow">Next step</p>
                <h2>Create your account to continue registration.</h2>
                <p>Your course outline preview is ready. Set a password now so you can register for the course and return to your application at any time.</p>
                <form className="course-account-form" action="#register" method="post">
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" autoComplete="email" placeholder="you@company.com" />
                  </label>
                  <label>
                    <span>Password</span>
                    <input type="password" name="password" autoComplete="new-password" placeholder="Set password" />
                  </label>
                  <button className="btn" type="submit">Create account</button>
                </form>
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
