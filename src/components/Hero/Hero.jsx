import styles from './Hero.module.css';

const stats = [
  { value: '2,500+', label: 'Active Labs', change: '+18% YoY' },
  { value: '12M+', label: 'Reports', change: '+24% YoY' },
  { value: '99.9%', label: 'Uptime', change: 'SLA' },
];

const activities = [
  { color: '#22C55E', text: 'Report generated — Patient: Anjali M.', time: '2m ago' },
  { color: '#1570EF', text: 'Sample received — CBC + LFT panel', time: '5m ago' },
  { color: '#F59E0B', text: 'Bill generated — ₹1,840', time: '8m ago' },
  { color: '#8B5CF6', text: 'Report sent via WhatsApp', time: '11m ago' },
];

const barHeights = [30, 45, 35, 55, 40, 68, 50, 75, 60, 90, 70, 58];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          {/* Left — copy */}
          <div className={styles.left}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Trusted by 2,500+ Diagnostic Labs Across India
            </div>

            <h1 className={styles.heading}>
              The Smartest <em>Cloud LIMS</em> for Diagnostic Labs
            </h1>

            <p className={styles.subheading}>
              CorenexLIMS automates patient registration, sample tracking, report generation, billing, and analytics — so your lab runs faster and error-free.
            </p>

            <div className={styles.ctas}>
              <a href="#" className={styles.primaryCta}>
                Start Free Trial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className={styles.secondaryCta}>
                <span className={styles.playIcon}>▶</span>
                Watch Demo
              </a>
            </div>

            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>⭐</span>
                <div className={styles.trustText}>
                  <strong>4.9 / 5</strong>
                  Google Reviews
                </div>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>🔒</span>
                <div className={styles.trustText}>
                  <strong>HIPAA Compliant</strong>
                  Secure & Encrypted
                </div>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>🇮🇳</span>
                <div className={styles.trustText}>
                  <strong>Made in India</strong>
                  For the World
                </div>
              </div>
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className={styles.right}>
            <div className={styles.dashboardFrame}>
              <div className={styles.frameBar}>
                <div className={styles.frameDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.frameUrl}>app.corenexlims.com/dashboard</div>
              </div>

              <div className={styles.dashboardContent}>
                <div className={styles.dashboardHeader}>
                  <span className={styles.dashboardTitle}>Lab Dashboard</span>
                  <span className={styles.dashboardDate}>Today, 09:41 AM</span>
                </div>

                {/* Stats */}
                <div className={styles.statsGrid}>
                  {stats.map((s) => (
                    <div key={s.label} className={styles.statCard}>
                      <div className={styles.statValue}>{s.value}</div>
                      <div className={styles.statLabel}>{s.label}</div>
                      <div className={styles.statChange}>{s.change}</div>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className={styles.chartRow}>
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className={`${styles.chartBar} ${i === 10 ? styles.highlight : ''}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Activity */}
                <div className={styles.activityList}>
                  {activities.map((a, i) => (
                    <div key={i} className={styles.activityItem}>
                      <span className={styles.activityDot} style={{ background: a.color }} />
                      <span className={styles.activityText}>{a.text}</span>
                      <span className={styles.activityTime}>{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
