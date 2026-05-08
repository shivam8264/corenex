import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.chip}>🎉 5-Day Free Trial — No Credit Card Required</div>

        <h2 className={styles.title}>
          Start your lab's <em>digital transformation</em> today
        </h2>

        <p className={styles.subtitle}>
          Join 2,500+ labs across India who save hours every day with CorenexLIMS. Setup takes under 10 minutes.
        </p>

        <div className={styles.actions}>
          <a href="#" className={styles.primaryBtn}>
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.secondaryBtn}>
            Schedule a Demo
          </a>
        </div>

        <div className={styles.guarantees}>
          {[
            { icon: '🔒', text: 'HIPAA & DPDP compliant' },
            { icon: '🚀', text: 'Live in under 10 minutes' },
            { icon: '💳', text: 'No credit card required' },
            { icon: '🤝', text: '24×7 customer support' },
          ].map((g) => (
            <div key={g.text} className={styles.guarantee}>
              <span className={styles.guaranteeIcon}>{g.icon}</span>
              {g.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
