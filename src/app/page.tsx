import Image from "next/image";
import Link from "next/link";

const navigation = [
  "Home",
  "Services",
  "Pricing",
  "About",
  "Insights",
  "Contact",
];

const services = [
  {
    title: "AI Agent Training",
    description:
      "Equip leaders and operators with practical AI fluency, prompting systems, and agent oversight habits they can use immediately.",
    eyebrow: "Training",
  },
  {
    title: "Workflow Automation",
    description:
      "Map repeatable management workflows, remove manual handoffs, and introduce secure automations that save time every week.",
    eyebrow: "Operations",
  },
  {
    title: "Custom AI Solutions for SMBs",
    description:
      "Design fit-for-purpose AI assistants, knowledge workflows, and decision-support tools around your data, team, and goals.",
    eyebrow: "Build",
  },
  {
    title: "Team Enablement",
    description:
      "Create playbooks, governance, and adoption rituals so your team keeps improving long after the first deployment.",
    eyebrow: "Adoption",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    highlight: "Get AI-literate fast",
    price: "$400",
    cadence: "per workshop",
    rate: "$200/hr",
    cta: "Book This Workshop",
    features: [
      "2-hour virtual workshop",
      "Intro to AI fundamentals and popular tools",
      "Perfect for teams exploring AI",
      "Practical next-step recommendations",
    ],
  },
  {
    name: "Growth",
    highlight: "Connect AI to your daily tools",
    price: "$800",
    cadence: "per workshop",
    rate: "$200/hr",
    cta: "Get Started",
    features: [
      "4-hour workshop for busy management teams",
      "AI fundamentals with practical tool walkthroughs",
      "Gmail / Outlook and Calendar integration examples",
      "Automate email summaries, meeting prep, and follow-ups",
    ],
  },
  {
    name: "Immersion",
    highlight: "Hands-on practice with real workflows",
    price: "$1,200",
    cadence: "per workshop",
    rate: "$200/hr",
    cta: "Book This Workshop",
    popular: true,
    features: [
      "6-hour hands-on workshop with laptops out",
      "Deep dive into prompting and reusable prompt systems",
      "Build simple agents for team workflows",
      "Workflow exercises using placeholder team scenarios",
    ],
  },
  {
    name: "Custom",
    highlight: "Built exactly for your team",
    price: "$200",
    cadence: "billed hourly",
    rate: "Flexible scope",
    cta: "Get Started",
    features: [
      "Fully tailored engagement of any duration",
      "Custom AI solutions and workflow design",
      "Multi-session training for departments or leaders",
      "Full implementation support with placeholder deliverables",
    ],
  },
];

const benefits = [
  "Executive-ready strategy without enterprise-consulting overhead",
  "Hands-on implementation focused on measurable workflow gains",
  "Secure, practical AI adoption built around how your team works",
  "Training that turns cautious managers into confident AI operators",
];

const caseStudies = [
  {
    title: "Operations team productivity sprint",
    metric: "18 hrs/week",
    description:
      "Placeholder story for a management team that automated status updates, reporting, and routine follow-ups.",
  },
  {
    title: "AI-enabled client service desk",
    metric: "42% faster",
    description:
      "Placeholder story for a service business that reduced response times with a curated AI knowledge assistant.",
  },
  {
    title: "Leadership AI adoption program",
    metric: "30 days",
    description:
      "Placeholder story for a leadership cohort that moved from AI curiosity to repeatable use cases in one month.",
  },
];

const insights = [
  "How SMB leaders should evaluate AI opportunities in 2026",
  "The difference between automation, agents, and better processes",
  "A practical governance checklist for AI-enabled management teams",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07182f]/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            className="flex items-center gap-3"
            aria-label="Rift Consultants home"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-white shadow-lg shadow-blue-950/20">
              <Image
                src="/globe.svg"
                alt="Rift Consultants logo mark"
                width={26}
                height={26}
                priority
              />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              Rift Consultants
            </span>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-blue-100/80 transition hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#07182f] transition hover:bg-blue-100 sm:inline-flex"
          >
            Book a Strategy Session
          </Link>
        </nav>
        <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 pb-4 text-sm font-medium text-blue-100/80 sm:px-8 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="shrink-0 transition hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </header>

      <section
        id="home"
        className="relative isolate overflow-hidden bg-[#07182f] pt-40 text-white sm:pt-40 lg:pt-40"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(53,127,255,0.32),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(125,211,252,0.18),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32">
          <div className="animate-rise">
            <p className="mb-6 inline-flex rounded-full border border-blue-200/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              AI Training & Agentic Workflows for SMB Management Teams
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Turn AI hype into real business results.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-50/80 sm:text-xl">
              Rift Consultants helps management teams identify high-value AI
              opportunities, train their people, and deploy practical agentic
              workflows that improve daily operations.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-blue-400 px-7 py-4 text-center text-base font-bold text-[#061428] shadow-2xl shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-300"
              >
                Meet with an AI Expert
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="animate-rise animation-delay-150 rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                    Rift AI Sprint
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight">
                    90-day implementation roadmap
                  </h2>
                </div>
                <Image
                  src="/window.svg"
                  alt="Workflow dashboard icon"
                  width={42}
                  height={42}
                />
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  "Discover high-value use cases",
                  "Train managers on AI workflows",
                  "Launch secure pilot agents",
                  "Measure adoption and ROI",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#07182f] text-sm font-bold text-white">
                      0{index + 1}
                    </span>
                    <p className="font-semibold text-slate-800">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-[#07182f] p-5 text-white">
                <p className="text-sm text-blue-100/80">
                  Typical first engagement outcome
                </p>
                <p className="mt-2 text-3xl font-black tracking-tight">
                  Clear AI roadmap + launched pilot workflow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10" aria-label="Credibility metrics">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            "Management-first adoption",
            "Practical agentic workflows",
            "Built for SMB speed",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Services</p>
            <h2 className="section-title">
              AI consulting built for teams that need clarity, adoption, and
              results.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/70"
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
                  {service.eyebrow}
                </p>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Pricing</p>
              <h2 className="section-title">
                Workshop options designed for focused, practical AI adoption.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-600">
              Transparent hourly pricing, clear outcomes, and formats that help
              SMB management teams build confidence before committing to larger
              implementation work.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`relative flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-sm ring-1 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70 ${
                  tier.popular
                    ? "border border-blue-300 ring-blue-200 xl:scale-[1.03]"
                    : "border border-slate-200 ring-slate-200"
                }`}
              >
                {tier.popular ? (
                  <span className="absolute right-6 top-6 rounded-full bg-blue-500 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-900/20">
                    Most Popular
                  </span>
                ) : null}
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
                  {tier.name}
                </p>
                <h3 className="mt-5 max-w-[13rem] text-2xl font-black tracking-tight text-slate-950">
                  {tier.highlight}
                </h3>
                <div className="mt-7 border-y border-slate-200 py-6">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black tracking-[-0.055em] text-[#07182f]">
                      {tier.price}
                    </span>
                    <span className="pb-1 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                      {tier.cadence}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {tier.rate}
                  </p>
                </div>
                <ul className="mt-7 grid gap-4 text-sm leading-6 text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span
                        className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-700"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-black transition hover:-translate-y-0.5 ${
                    tier.popular
                      ? "bg-[#07182f] text-white shadow-xl shadow-blue-950/20 hover:bg-blue-950"
                      : "bg-blue-50 text-[#07182f] ring-1 ring-blue-100 hover:bg-blue-100"
                  }`}
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad bg-[#07182f] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="section-eyebrow text-blue-200">Why Rift</p>
            <h2 className="section-title text-white">
              We bridge the gap between AI potential and everyday management
              workflows.
            </h2>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <p className="text-lg font-semibold text-blue-50">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Success Stories</p>
              <h2 className="section-title">
                Placeholder case studies for the outcomes we will showcase next.
              </h2>
            </div>
            <Link
              href="#contact"
              className="text-base font-bold text-blue-700 hover:text-blue-900"
            >
              Discuss your use case →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((story) => (
              <article
                key={story.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-5xl font-black tracking-tight text-[#07182f]">
                  {story.metric}
                </p>
                <h3 className="mt-6 text-2xl font-black tracking-tight">
                  {story.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {story.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Insights</p>
            <h2 className="section-title">
              Clear thinking for leaders building AI-enabled teams.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {insights.map((title) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-slate-200 p-7 transition hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
                  Article
                </p>
                <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">
                  {title}
                </h3>
                <Link
                  href="#contact"
                  className="mt-8 inline-flex font-bold text-blue-700 hover:text-blue-900"
                >
                  Read preview →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-[2rem] bg-[#07182f] p-8 text-white sm:p-10">
            <p className="section-eyebrow text-blue-200">Final CTA</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Ready to empower your team with AI?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-50/80">
              Book a strategy session and we will identify the workflows,
              training needs, and pilot opportunities most likely to create
              measurable value.
            </p>
            <div className="mt-10 rounded-3xl border border-dashed border-blue-200/30 bg-white/10 p-8 text-center">
              <p className="text-lg font-bold">Calendly embed placeholder</p>
              <p className="mt-2 text-blue-100/75">
                Add your scheduling link here when ready.
              </p>
            </div>
          </div>
          <form
            className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-label">
                First name
                <input
                  className="form-input"
                  name="firstName"
                  placeholder="Jane"
                />
              </label>
              <label className="form-label">
                Last name
                <input
                  className="form-input"
                  name="lastName"
                  placeholder="Smith"
                />
              </label>
            </div>
            <label className="form-label mt-5">
              Work email
              <input
                className="form-input"
                name="email"
                type="email"
                placeholder="jane@company.com"
              />
            </label>
            <label className="form-label mt-5">
              What are you hoping AI can improve?
              <textarea
                className="form-input min-h-36 resize-y"
                name="message"
                placeholder="Tell us about your team, workflows, and goals."
              />
            </label>
            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-[#07182f] px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-950"
            >
              Book a Strategy Session
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#07182f] px-5 py-10 text-blue-50 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-white">
              <Image
                src="/globe.svg"
                alt="Rift Consultants logo mark"
                width={24}
                height={24}
              />
            </span>
            <div>
              <p className="font-bold text-white">Rift Consultants</p>
              <p className="text-sm text-blue-100/70">
                AI Training & Agentic Workflows for SMBs
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-medium text-blue-100/75">
            {navigation.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="text-sm text-blue-100/60">
            © {new Date().getFullYear()} Rift Consultants. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
