import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="wordmark" href="/" aria-label="AgentHappy home">
            AGENT<span>HAPPY</span>
          </Link>
          <nav className="main-nav" aria-label="Primary navigation">
            <Link href="/about" aria-current="page">About</Link>
            <a href="mailto:kenny@agenthappy.dev">Contact</a>
          </nav>
        </div>
      </header>

      <section className={styles.introduction} aria-labelledby="about-title">
        <div className={styles.introductionInner}>
          <h1 id="about-title">AgentHappy designs and builds production-ready, agentic workflows.</h1>
          <a className="btn" href="mailto:kenny@agenthappy.dev">GET IN TOUCH <span className="arr" aria-hidden="true">→</span></a>
          <p>We offer training workshops and consulting services.</p>
        </div>
      </section>

      <section className={styles.team} aria-labelledby="team-title">
        <h2 id="team-title" className={styles.visuallyHidden}>Team</h2>
        <article className={styles.member}>
          <Image className={styles.avatar} src="/images/ava2.png" alt="Kenny Mack" width={76} height={76} priority />
          <div className={styles.memberDetails}>
            <p className={styles.role}>Founder</p>
            <h3>Kenny Mack</h3>
            <a className={styles.linkedIn} href="https://linkedin.com/knnymck" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
