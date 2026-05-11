import styles from './TrustBar.module.css';

const stats = [
  { icon: '🏥', value: '2,500+', desc: 'Labs Onboarded' },
  { icon: '📋', value: '12M+', desc: 'Reports Generated' },
  { icon: '⭐', value: '4.9/5', desc: 'Google Rating' },
  { icon: '📅', value: '11+ Years', desc: 'In Business' },
  { icon: '🔒', value: '99.9%', desc: 'Uptime SLA' },
  // { icon: '🌍', value: '18+ States', desc: 'PAN India Coverage' },
];

export default function TrustBar() {
  return (
    <div className={styles.trustBar}>
      <div className={styles.inner}>
        <span className={styles.label}>Trusted by labs nationwide</span>
        <div className={styles.divider} />
        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div key={s.desc} className={styles.stat}>
              <div className={styles.statIcon}>{s.icon}</div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statDesc}>{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
