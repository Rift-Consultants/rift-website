import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#top" aria-label="AgentHappy home">
            AGENT<span>HAPPY</span>
          </a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="/about">About</a>
            <a href="mailto:kenny@agenthappy.dev">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className={styles.main}>
        <section className="fold" aria-labelledby="hero-title">
          <div className="hero">
            <div className="hero-inner">
              <div className="hero-copy reveal">
                <h1 id="hero-title">
                  AI training and implementation for corporate leadership <br />
                  and management teams. Turn single-prompt chats, untracked <br />
                  token usage, and AI hallucinations into multi-agent production workflows
                </h1>
                <div className="hero-actions" aria-label="Hero calls to action">
                  <a className="btn" href="mailto:kenny@agenthappy.dev">JOIN THE WORKSHOP</a>
                  <a className="btn btn-secondary" href="mailto:kenny@agenthappy.dev">START A PROJECT</a>
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
      </main>
    </div>
  );
}
