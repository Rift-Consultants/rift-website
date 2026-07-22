import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="AgentHappy home">
          AGENT<span>HAPPY</span>
        </Link>
        <nav className={styles.navigation} aria-label="Primary navigation">
          <Link href="/about" aria-current="page">About</Link>
          <a href="mailto:kenny@agenthappy.dev">Contact</a>
        </nav>
      </header>

      <section className={styles.introduction} aria-labelledby="about-title">
        <h1 id="about-title">AgentHappy designs and builds production-ready, agentic workflows.</h1>
        <a className={styles.contactButton} href="mailto:kenny@agenthappy.dev">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <p>We offer training workshops and consulting services.</p>
      </section>

      <section className={styles.team} aria-labelledby="team-title">
        <h2 id="team-title" className={styles.visuallyHidden}>Team</h2>
        <article className={styles.member}>
          <p className={styles.role}>Founder</p>
          <h3>Kenny Mack</h3>
          <a className={styles.linkedIn} href="https://linkedin.com/knnymck" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>
    </main>
  );
}
