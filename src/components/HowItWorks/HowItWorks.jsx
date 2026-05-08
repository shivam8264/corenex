import styles from './HowItWorks.module.css';

const steps = [
  { icon: '🚀', title: 'Sign Up Free', desc: 'Create your lab account in under 2 minutes. No credit card required. Your data is live instantly.' },
  { icon: '⚙️', title: 'Configure Your Lab', desc: 'Set up test panels, reference ranges, report templates, and user roles tailored to your lab.' },
  { icon: '🔬', title: 'Start Processing', desc: 'Register patients, collect samples, run tests, and generate reports — all within one workflow.' },
  { icon: '📲', title: 'Deliver & Grow', desc: 'Send reports via WhatsApp, email or QR code. Track revenue with real-time analytics.' },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>How It Works</div>
          <h2 className={styles.title}>Get your lab running in 4 simple steps</h2>
          <p className={styles.subtitle}>
            CorenexLIMS is designed for quick onboarding — most labs are fully operational within a single working day.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.title} className={`${styles.step} ${i === 1 ? styles.active : ''}`}>
              <div className={styles.stepNumber}>
                <span className={styles.stepIcon}>{s.icon}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaStrip}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>Ready to modernize your lab?</h3>
            <p className={styles.ctaDesc}>Join 2,500+ labs already using CorenexLIMS. Start your free 5-day trial — no credit card needed.</p>
          </div>
          <div className={styles.ctaActions}>
            <a href="#" className={styles.ctaPrimary}>Start Free Trial →</a>
            <a href="#" className={styles.ctaSecondary}>Request Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
