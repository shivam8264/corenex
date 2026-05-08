import { useState } from 'react';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    desc: 'For single-branch labs just getting started',
    monthly: 999,
    yearly: 699,
    cta: 'Start Free Trial',
    ctaStyle: 'outline',
    features: [
      { text: 'Up to 200 reports/month', included: true },
      { text: '1 user / branch', included: true },
      { text: 'Patient registration & billing', included: true },
      { text: 'WhatsApp report delivery', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: 'Multi-branch support', included: false },
      { text: 'NABL documentation tools', included: false },
      { text: 'API & instrument integration', included: false },
    ],
  },
  {
    name: 'Professional',
    desc: 'Best for growing labs with multiple users',
    monthly: 2499,
    yearly: 1749,
    cta: 'Start Free Trial',
    ctaStyle: 'filled',
    popular: true,
    features: [
      { text: 'Unlimited reports', included: true },
      { text: 'Up to 10 users', included: true },
      { text: 'Advanced billing & GST invoices', included: true },
      { text: 'WhatsApp + Email + SMS delivery', included: true },
      { text: 'Full analytics & audit reports', included: true },
      { text: 'Up to 3 branches', included: true },
      { text: 'NABL documentation tools', included: true },
      { text: 'API & instrument integration', included: false },
    ],
  },
  {
    name: 'Enterprise',
    desc: 'For large chains with advanced requirements',
    monthly: 5999,
    yearly: 4199,
    cta: 'Contact Sales',
    ctaStyle: 'outline',
    features: [
      { text: 'Unlimited reports & users', included: true },
      { text: 'Unlimited branches', included: true },
      { text: 'Custom report templates', included: true },
      { text: 'Priority 24×7 support', included: true },
      { text: 'Full analytics & BI dashboard', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'NABL documentation tools', included: true },
      { text: 'API & instrument integration', included: true },
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Pricing</div>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>
            No hidden fees. No long-term lock-in. Start with a free 5-day trial — no credit card required.
          </p>
        </div>

        {/* Billing toggle */}
        <div className={styles.toggle}>
          <span className={`${styles.toggleLabel} ${!yearly ? styles.active : ''}`}>Monthly</span>
          <button className={styles.toggleSwitch} onClick={() => setYearly(!yearly)} aria-label="Toggle billing period" />
          <span className={`${styles.toggleLabel} ${yearly ? styles.active : ''}`}>Yearly</span>
          {yearly && <span className={styles.saveBadge}>Save up to 30%</span>}
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.name} className={`${styles.plan} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}

              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.planDesc}>{plan.desc}</div>

              <div className={styles.price}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>{yearly ? plan.yearly.toLocaleString() : plan.monthly.toLocaleString()}</span>
              </div>
              <div className={styles.period}>per month, billed {yearly ? 'annually' : 'monthly'}</div>

              <a href="#" className={`${styles.ctaButton} ${styles[plan.ctaStyle]}`}>
                {plan.cta}
              </a>

              <div className={styles.divider} />

              <div className={styles.featureLabel}>What's included</div>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f.text} className={styles.feature}>
                    <span className={f.included ? styles.checkIcon : styles.crossIcon}>
                      {f.included ? '✓' : '✕'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise custom */}
        <div className={styles.enterpriseRow}>
          <div className={styles.enterpriseText}>
            <div className={styles.enterpriseTitle}>Need a custom solution for your lab chain?</div>
            <div className={styles.enterpriseDesc}>
              We offer tailored pricing for hospital networks, franchise chains, and government health departments.
            </div>
          </div>
          <div className={styles.enterpriseFeatures}>
            {['Custom SLA', 'Dedicated infra', 'On-premise option', 'White-labeling'].map((f) => (
              <span key={f} className={styles.enterpriseFeature}>
                <span>✓</span> {f}
              </span>
            ))}
          </div>
          <a href="#" className={styles.enterpriseCta}>Talk to Sales →</a>
        </div>
      </div>
    </section>
  );
}
