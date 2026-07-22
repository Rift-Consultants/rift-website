import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const technologies = [
  ["/images/logos/chatgpt-text.png", "OpenAI", 150],
  ["/images/logos/claude-text.png", "Claude", 150],
  ["/images/logos/gemini-text.png", "Gemini", 150],
  ["/images/logos/wispr-text.png", "Wispr Flow", 190],
  ["/images/logos/microsoft-text.png", "Microsoft", 170],
  ["/images/logos/glean-logo.png", "Glean", 150],
  ["/images/logos/langchain-logo.png", "LangChain", 170],
] as const;

export default function Home() {
  return (
    <main className={styles.page}>
      <Image
        className={styles.backgroundImage}
        src="/images/rift-hero-banner-1.png"
        alt="Leaders discussing AI workflows at a conference table"
        fill
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} />

      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="AgentHappy home">
          AGENT<span>HAPPY</span>
        </Link>
        <nav className={styles.navigation} aria-label="Primary navigation">
          <Link href="/about">About</Link>
          <a href="mailto:kenny@agenthappy.dev">Contact</a>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <p className={styles.kicker}>Agentic AI, made practical</p>
        <h1 id="hero-title">AI systems that move your business forward.</h1>
        <p className={styles.introduction}>
          We help leadership teams turn AI possibilities into durable workflows that work with the people, tools, and data they already have.
        </p>
        <a className={styles.contactButton} href="mailto:kenny@agenthappy.dev">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className={styles.technologies} aria-label="Technologies we work with">
        <p>Technologies we work with</p>
        <div className={styles.logoGrid}>
          {technologies.map(([src, alt, width]) => (
            <Image key={src} src={src} alt={alt} width={width} height={48} />
          ))}
        </div>
      </section>
    </main>
  );
}
