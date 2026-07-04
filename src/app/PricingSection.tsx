'use client';

import { useState } from 'react';

type PricingPlanKey = 'retainer' | 'project';

const pricingPlans = {
  retainer: {
    eyebrow: '4 slots available',
    title: 'Monthly AI Retainer',
    description: 'Ongoing strategy, implementation, and optimization support for teams building AI into daily operations.',
    price: '$8,000 / month',
    cta: 'Start your monthly retainer',
    benefits: [
      'Continuous AI workflow discovery, design, and implementation support.',
      'Priority access to a dedicated AI workflow team each month.',
      'Weekly strategy and delivery check-ins to keep momentum high.',
      'Roadmap management across agents, automations, tools, and data connections.',
      'Specialized expertise in AI agents, automations, and operational systems.',
    ],
  },
  project: {
    eyebrow: '2 slots available',
    title: 'Single AI Workflow Project',
    description: 'Clear scope, timeline, and deliverables for a one-time fixed-scope AI implementation.',
    price: '$5,000',
    cta: 'Start your 2 week free-trial',
    benefits: [
      'Well-defined scope outlined in a detailed SOW document.',
      'Reliable milestone-based delivery within 4-12 weeks.',
      'End-to-end project management.',
      'Dedicated AI workflow team led by an experienced implementation lead.',
      'Specialized expertise in AI agents, automations, and operational systems.',
    ],
  },
} satisfies Record<PricingPlanKey, {
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  cta: string;
  benefits: string[];
}>;

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlanKey>('retainer');
  const plan = pricingPlans[selectedPlan];

  return (
    <section className="pricing" id="pricing" data-screen-label="Pricing">
      <div className="shell pricing-shell">
        <div className="pricing-intro">
          <span className="eyebrow">Pricing</span>
          <h2>No more budget worries—simple and flexible.</h2>
          <p>Choose between ongoing AI implementation support and one-time fixed-scope projects.</p>
          <div className="pricing-toggle" role="tablist" aria-label="Pricing options">
            <button
              type="button"
              className={selectedPlan === 'retainer' ? 'is-active' : undefined}
              role="tab"
              aria-selected={selectedPlan === 'retainer'}
              aria-controls="pricing-plan-panel"
              onClick={() => setSelectedPlan('retainer')}
            >
              Monthly Retainer
            </button>
            <button
              type="button"
              className={selectedPlan === 'project' ? 'is-active' : undefined}
              role="tab"
              aria-selected={selectedPlan === 'project'}
              aria-controls="pricing-plan-panel"
              onClick={() => setSelectedPlan('project')}
            >
              One-Off Project
            </button>
          </div>
        </div>
        <div className="pricing-panel" id="pricing-plan-panel" role="tabpanel">
          <div className="pricing-benefits">
            <ul>
              {plan.benefits.map((benefit) => (
                <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>
              ))}
            </ul>
            <p>We keep it simple and flexible.</p>
            <div className="pricing-note">Location and time: Los Angeles (PST)</div>
          </div>
          <article className="pricing-card" aria-label={`${plan.title} pricing`}>
            <div className="pricing-badge"><span />{plan.eyebrow}</div>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <div className="pricing-divider" />
            <div className="pricing-price">{plan.price}</div>
            <a className="pricing-btn" href="#reserve" data-anchor-cta="">{plan.cta}</a>
          </article>
        </div>
      </div>
    </section>
  );
}
