'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

const pages = ['Program overview', 'A.I.M. framework', 'Week 1 · Assess', 'Week 2 · Implement', 'Week 3 · Measure'];

const programDetails = [
  ['Duration', '3 weeks'],
  ['Cohort size', '8 participants · high-touch'],
  ['Live sessions', 'One 2.5–3 hour guided session per week'],
  ['Async work', '4–6 hours per week'],
  ['Support', 'Weekly personalized feedback'],
];

type WeekSlideProps = {
  phase: string;
  theme: string;
  topics: string[];
  asyncWork: string[];
  deliverable: string;
};

function WeekSlide({ phase, theme, topics, asyncWork, deliverable }: WeekSlideProps) {
  return <>
    <p className="deck-overline">{phase}</p>
    <h2>{theme}</h2>
    <div className="deck-two-column">
      <section><h3>Live session topics</h3><ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></section>
      <section><h3>Async work</h3><ul>{asyncWork.map((task) => <li key={task}>{task}</li>)}</ul></section>
    </div>
    <p className="deck-deliverable"><strong>Deliverable progress:</strong> {deliverable}</p>
  </>;
}

export default function CourseOutlineDeck() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = pages.length;

  const goToPage = useCallback((page: number) => {
    const nextPage = Math.max(0, Math.min(page, pageCount - 1));
    scrollerRef.current?.scrollTo({ left: scrollerRef.current.clientWidth * nextPage, behavior: 'smooth' });
    setCurrentPage(nextPage);
  }, [pageCount]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') { event.preventDefault(); goToPage(currentPage + 1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); goToPage(currentPage - 1); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [currentPage, goToPage]);

  return (
    <main className="deck-page" data-screen-label="Agentic AI Leadership Intensive course outline">
      <header className="deck-header">
        <Link className="deck-wordmark" href="/" aria-label="AgentHappy home">AGENT<span>HAPPY</span></Link>
        <details className="deck-toc">
          <summary>Table of contents <span aria-hidden="true">+</span></summary>
          <ol>{pages.map((page, index) => <li key={page}><button type="button" onClick={() => goToPage(index)} aria-current={currentPage === index ? 'page' : undefined}>{index + 1}. {page}</button></li>)}</ol>
        </details>
      </header>

      <div className="deck-scroller" ref={scrollerRef} onScroll={(event) => setCurrentPage(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))}>
        <section className="deck-slide" aria-label="Page 1: Program overview"><div className="deck-content deck-hero">
          <p className="deck-kicker">3 weeks — live &amp; AI-guided</p>
          <p className="deck-overline">AgentHappy presents</p>
          <h1>Agentic AI<br />Leadership Intensive</h1>
          <p className="deck-subtitle">A practical executive workshop for leaders ready to move from AI interest to production-ready workflows.</p>
          <p className="deck-intro">For mid-market leaders in construction, contracting, engineering, and operations. Participants identify high-value agentic AI opportunities, design a real workflow, and create an implementation plan they can take back to their organization. No coding experience required.</p>
          <dl className="deck-details">{programDetails.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </div></section>

        <section className="deck-slide" aria-label="Page 2: A.I.M. framework"><div className="deck-content">
          <p className="deck-overline">Core framework</p><h2>Built on the A.I.M. framework</h2>
          <div className="deck-aim"><article><span>01</span><h3>Assess</h3><p>Opportunity identification and prioritization.</p><strong>Clear high-value use cases</strong></article><article><span>02</span><h3>Implement</h3><p>Workflow design and technical architecture.</p><strong>Detailed Workflow Design</strong></article><article><span>03</span><h3>Measure</h3><p>Rollout planning, governance, and ROI.</p><strong>Complete implementation approach</strong></article></div>
          <h3 className="deck-objectives-title">By the end, participants can</h3>
          <ul className="deck-objectives"><li>Assess high-impact agentic AI opportunities.</li><li>Design a production-oriented workflow.</li><li>Understand tools, orchestration, governance, and security.</li><li>Build a realistic roadmap for talent, risk, and ROI.</li><li>Confidently lead or sponsor AI initiatives.</li></ul>
        </div></section>

        <section className="deck-slide" aria-label="Page 3: Week 1"><div className="deck-content"><p className="deck-page-label">Week 1 of 3</p><WeekSlide phase="Assess" theme="Identifying and prioritizing high-value opportunities" topics={['What agentic AI is (Anthropic & OpenAI definitions)', 'Tools vs Skills vs Pipelines', 'The Assess phase methodology', 'Opportunity assessment techniques for construction and operations businesses', 'Live demo: Lead Qualification → Bid Preparation Agent']} asyncWork={['Complete the Use Case Canvas for your organization', 'Select your Capstone workflow', 'Submit your weekly progress update']} deliverable="Use Case Canvas" /></div></section>
        <section className="deck-slide" aria-label="Page 4: Week 2"><div className="deck-content"><p className="deck-page-label">Week 2 of 3</p><WeekSlide phase="Implement" theme="Designing production-ready agentic workflows" topics={['Designing multi-step agentic flows', 'Tool design best practices', 'Governance, guardrails, and security overview (NeMo Guardrails + NemoClaw)', 'Human-in-the-loop patterns', 'Live demo: Job Scheduling & Resource Allocation Agent']} asyncWork={['Draft the Agentic Workflow Design for your chosen process', 'Receive and apply personalized feedback']} deliverable="Agentic Workflow Design" /></div></section>
        <section className="deck-slide" aria-label="Page 5: Week 3 and outcomes"><div className="deck-content deck-final"><p className="deck-page-label">Week 3 of 3</p><WeekSlide phase="Measure" theme="Implementation planning, governance, and measuring success" topics={['Implementation planning and change management', 'Talent and recruitment considerations', 'Build vs Buy / Agency engagement', 'ROI measurement and continuous improvement', 'Live demo: Change Order Processing + Governance example', 'Capstone presentations (5–7 minutes each)']} asyncWork={['Finalize both deliverables', 'Prepare a short presentation of your plan']} deliverable="Complete Use Case Canvas + Agentic Workflow Design" /><div className="deck-outcomes"><h3>Final deliverables</h3><p><strong>Use Case Canvas:</strong> prioritized opportunities mapped to business value, feasibility, risk, and implementation considerations.</p><p><strong>Agentic Workflow Design:</strong> agent roles, tools, human handoffs, governance checkpoints, and technical specifications ready for implementation.</p><p><strong>Technology concepts:</strong> LangChain / LangGraph, tools-first architecture, NVIDIA NeMo Guardrails, NemoClaw, Evaluator, observability, and evaluation.</p></div></div></section>
      </div>

      <nav className="deck-controls" aria-label="Course outline pages"><button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0} aria-label="Previous page">←</button><span>{currentPage + 1} / {pageCount}</span><button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pageCount - 1} aria-label="Next page">→</button></nav>
    </main>
  );
}
