import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agentic AI Leadership Intensive | AgentHappy',
  description: 'Course outline for the AgentHappy Agentic AI Leadership Intensive, built on the A.I.M. framework: Assess, Implement, and Measure.',
};

const programDetails = [
  ['Duration', '3 weeks · intensive by design'],
  ['Cohort size', '8 participants · high-touch learning experience'],
  ['Live sessions', 'One 2.5–3 hour guided session per week'],
  ['Async work', '4–6 hours per week, applied to your organization'],
  ['Total live instruction', 'Approximately 8–9 hours'],
  ['Support', 'Weekly personalized feedback on deliverables'],
];

const weeks = [
  {
    number: 'Week 1',
    phase: 'Assess',
    theme: 'Identifying and prioritizing high-value opportunities',
    topics: ['What agentic AI is (Anthropic & OpenAI definitions)', 'Tools vs Skills vs Pipelines', 'The Assess phase methodology', 'Opportunity assessment techniques for construction and operations businesses', 'Live demo: Lead Qualification → Bid Preparation Agent'],
    asyncWork: ['Complete the Use Case Canvas for your organization', 'Select your Capstone workflow', 'Submit your weekly progress update'],
    deliverable: 'Use Case Canvas',
  },
  {
    number: 'Week 2',
    phase: 'Implement',
    theme: 'Designing production-ready agentic workflows',
    topics: ['Designing multi-step agentic flows', 'Tool design best practices', 'Governance, guardrails, and security overview (NeMo Guardrails + NemoClaw)', 'Human-in-the-loop patterns', 'Live demo: Job Scheduling & Resource Allocation Agent'],
    asyncWork: ['Draft the Agentic Workflow Design for your chosen process', 'Receive and apply personalized feedback'],
    deliverable: 'Agentic Workflow Design',
  },
  {
    number: 'Week 3',
    phase: 'Measure',
    theme: 'Implementation planning, governance, and measuring success',
    topics: ['Implementation planning and change management', 'Talent and recruitment considerations', 'Build vs Buy / Agency engagement', 'ROI measurement and continuous improvement', 'Live demo: Change Order Processing + Governance example', 'Capstone presentations (5–7 minutes each)'],
    asyncWork: ['Finalize both deliverables', 'Prepare a short presentation of your plan'],
    deliverable: 'Complete Use Case Canvas + Agentic Workflow Design',
  },
];

export default function CourseOutlinePage() {
  return (
    <main className="outline-page" data-screen-label="Agentic AI Leadership Intensive course outline">
      <header className="outline-header">
        <Link className="outline-wordmark" href="/" aria-label="AgentHappy home">AGENT<span>HAPPY</span></Link>
        <span>Agentic AI Leadership Intensive</span>
      </header>

      <section className="outline-hero">
        <div className="outline-shell">
          <p className="outline-kicker">3 weeks — live &amp; AI-guided</p>
          <p className="outline-overline">AgentHappy presents</p>
          <h1>Agentic AI<br />Leadership Intensive</h1>
          <p className="outline-subtitle">A practical executive workshop for leaders ready to move from AI interest to production-ready workflows.</p>
          <p className="outline-intro">Designed for mid-market leaders in construction, contracting, engineering, and operations. In three focused weeks, participants identify high-value AI opportunities, design a real workflow, and leave with a clear implementation plan for their organization. No coding experience required.</p>
        </div>
      </section>

      <section className="outline-section">
        <div className="outline-shell">
          <p className="outline-overline">Program at a glance</p>
          <h2>Intensive by design — be implementation-ready in weeks, not months.</h2>
          <p className="outline-lede">A high-touch executive workshop centered on leadership decision-making, practical architecture, governance, and execution.</p>
          <dl className="outline-details">
            {programDetails.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>

          <h3 className="outline-minor-heading">Learning objectives</h3>
          <ul className="outline-bullets">
            <li>Assess your organization for high-impact agentic AI opportunities.</li>
            <li>Design a complete, production-oriented agentic workflow.</li>
            <li>Understand tools, skills, orchestration, governance, and security.</li>
            <li>Build a realistic implementation roadmap, including talent, risk, and ROI.</li>
            <li>Confidently lead or sponsor agentic AI initiatives.</li>
          </ul>
        </div>
      </section>

      <section className="outline-section outline-framework-section">
        <div className="outline-shell">
          <p className="outline-overline">Core framework</p>
          <h2>Built on the A.I.M. framework</h2>
          <p className="outline-lede">Each week turns a real organizational opportunity into a concrete, decision-ready output.</p>
          <div className="aim-grid">
            <article><span>01</span><h3>Assess</h3><p>Opportunity identification and prioritization.</p><strong>Outcome: Clear high-value use cases</strong></article>
            <article><span>02</span><h3>Implement</h3><p>Workflow design and technical architecture.</p><strong>Outcome: Detailed Workflow Design</strong></article>
            <article><span>03</span><h3>Measure</h3><p>Rollout planning, governance, and ROI.</p><strong>Outcome: Complete implementation approach</strong></article>
          </div>
        </div>
      </section>

      <section className="outline-section">
        <div className="outline-shell">
          <p className="outline-overline">Curriculum structure</p>
          <h2>Week-by-week outline</h2>
          <p className="outline-lede">Three guided sessions anchor the program. Between sessions, participants apply the material directly to their own organization and receive personalized feedback.</p>
          <div className="outline-weeks">
            {weeks.map((week) => (
              <article className="outline-week" key={week.number}>
                <div className="outline-week-heading"><span>{week.number}</span><h3>{week.phase}</h3></div>
                <p className="outline-week-theme">{week.theme}</p>
                <div className="outline-week-content">
                  <div><h4>Live session topics</h4><ul>{week.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
                  <div><h4>Async work</h4><ul>{week.asyncWork.map((task) => <li key={task}>{task}</li>)}</ul></div>
                </div>
                <p className="outline-deliverable"><strong>Deliverable progress:</strong> {week.deliverable}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outline-section outline-deliverables-section">
        <div className="outline-shell">
          <p className="outline-overline">Your agentic AI strategy</p>
          <h2>What participants build</h2>
          <p className="outline-lede">Participants leave with two concrete documents grounded in their own organizational context — not abstract exercises or code samples.</p>
          <div className="outline-deliverables">
            <article><h3>Use Case Canvas</h3><p>A prioritized overview of agentic AI opportunities mapped to business value, feasibility, risk, and implementation considerations.</p><ul><li>High-value opportunities prioritized</li><li>Business value and feasibility mapped</li><li>Risk and implementation considerations defined</li></ul></article>
            <article><h3>Agentic Workflow Design</h3><p>A detailed redesign of one high-value organizational workflow, ready to move into implementation.</p><ul><li>Agent roles and tools specified</li><li>Human handoffs and governance checkpoints mapped</li><li>Technical specifications ready for implementation</li></ul></article>
          </div>
          <div className="outline-capstone"><p className="outline-overline">Capstone project</p><h3>Agentic AI Implementation Plan for My Organization</h3><p>The two final deliverables form a complete capstone package: a prioritized opportunity landscape and a production-ready plan for implementing one meaningful AI capability.</p></div>
        </div>
      </section>

      <section className="outline-section outline-technology-section">
        <div className="outline-shell">
          <p className="outline-overline">Technology concepts covered</p>
          <h2>Leadership fluency for the systems that make agentic AI work.</h2>
          <ul className="outline-tech-list"><li>LangChain / LangGraph for agent orchestration</li><li>Tools-first architecture as the preferred approach</li><li>NVIDIA NeMo suite: Guardrails, NemoClaw, and Evaluator</li><li>Observability and evaluation concepts</li></ul>
        </div>
      </section>

      <footer className="outline-footer"><div className="outline-shell"><Link className="outline-wordmark" href="/">AGENT<span>HAPPY</span></Link><p>Agentic AI Leadership Intensive · A.I.M. Framework: Assess · Implement · Measure</p></div></footer>
    </main>
  );
}
