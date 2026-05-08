import styles from './Features.module.css';

const features = [
  {
    icon: '📋',
    title: 'Patient Registration & Billing',
    desc: 'Register patients instantly with smart pre-fill, manage tests, packages and auto-generate itemized invoices in seconds.',
    bullets: ['OPD & Referral workflows', 'QR-coded smart bills', 'Bulk discount management'],
  },
  {
    icon: '🔬',
    title: 'Sample Tracking & LIS',
    desc: 'End-to-end sample lifecycle tracking from collection to result — reducing errors and improving turnaround time.',
    bullets: ['Barcode-based tracking', 'TAT monitoring & alerts', 'Multi-department routing'],
    featured: true,
  },
  {
    icon: '📄',
    title: 'Automated Report Generation',
    desc: 'Generate professional, branded lab reports with digital signatures, normal ranges, and interpretations automatically.',
    bullets: ['Custom letterheads & fonts', 'Digital pathologist signatures', 'Abnormal value flags'],
  },
  {
    icon: '📱',
    title: 'WhatsApp & Email Delivery',
    desc: 'Send reports to patients instantly via WhatsApp, Email or SMS. Patients access via QR code or secure patient portal.',
    bullets: ['One-click WhatsApp dispatch', 'QR-code enabled PDF reports', 'Patient login portal'],
  },
  {
    icon: '📊',
    title: 'Business Analytics',
    desc: 'Real-time revenue dashboards, referral tracking, daily/monthly reports, and audit trails — all in one view.',
    bullets: ['Revenue & profit trends', 'Daily & monthly summaries', 'Referral doctor reports'],
  },
  {
    icon: '🛡️',
    title: 'Quality Control & Compliance',
    desc: 'Built-in QC workflows, instrument interfacing, NABL-ready documentation, and SOC-2 compliant infrastructure.',
    bullets: ['NABL audit-ready logs', 'Instrument interfacing', 'Role-based access control'],
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Platform Features</div>
          <h2 className={styles.title}>Everything your lab needs, in one platform</h2>
          <p className={styles.subtitle}>
            CorenexLIMS brings together the complete workflow of a modern diagnostic lab — from patient walk-in to report delivery — with intelligent automation at every step.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={`${styles.card} ${f.featured ? styles.featured : ''}`}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <ul className={styles.bullets}>
                {f.bullets.map((b) => (
                  <li key={b} className={styles.bullet}>
                    <span className={styles.bulletCheck}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#" className={styles.learnMore}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
