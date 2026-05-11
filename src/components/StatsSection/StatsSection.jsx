import { useState } from 'react';
import styles from './StatsSection.module.css';

const stats = [
  { icon: '🏥', value: '2,500', suffix: '+', label: 'Active Labs', desc: 'Diagnostic centres running CorenexLIMS daily' },
  { icon: '📋', value: '12', suffix: 'M+', label: 'Reports Generated', desc: 'Lab reports created and delivered to patients' },
  { icon: '⭐', value: '4.9', suffix: '/5', label: 'Average Rating', desc: 'Based on 600+ verified Google reviews' },
  { icon: '⚡', value: '99.9', suffix: '%', label: 'Platform Uptime', desc: 'Enterprise-grade reliability with SLA guarantee' },
];

const progressItems = [
  { label: 'Report generation time saved', value: '78%', pct: 78, variant: 'success' },
  { label: 'Billing accuracy improvement', value: '96%', pct: 96, variant: '' },
  { label: 'Patient satisfaction increase', value: '84%', pct: 84, variant: 'warning' },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>By The Numbers</div>
          <h2 className={styles.title}>Results that speak for themselves</h2>
        </div>
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statIconWrap}>{s.icon}</div>
              <div className={styles.statValue}>{s.value}<span className={styles.statSuffix}>{s.suffix}</span></div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
        <div className={styles.progressRow}>
          {progressItems.map((p) => (
            <div key={p.label} className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>{p.label}</span>
                <span className={styles.progressValue}>{p.value}</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={[styles.progressFill, p.variant ? styles[p.variant] : ''].filter(Boolean).join(' ')} style={{ width: p.pct + '%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}