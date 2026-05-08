import styles from './Modules.module.css';

const reportRows = [
  { color: '#22C55E', text: 'Complete Blood Count (CBC)', value: 'Normal' },
  { color: '#1570EF', text: 'Liver Function Test (LFT)', value: 'Review' },
  { color: '#F59E0B', text: 'Thyroid Profile (T3/T4/TSH)', value: 'High' },
  { color: '#22C55E', text: 'Blood Glucose (Fasting)', value: 'Normal' },
  { color: '#22C55E', text: 'Urine Routine Examination', value: 'Normal' },
];

const billingRows = [
  { color: '#1570EF', text: 'CBC Panel', value: '₹350' },
  { color: '#1570EF', text: 'LFT Panel', value: '₹680' },
  { color: '#1570EF', text: 'Thyroid Profile', value: '₹540' },
  { color: '#22C55E', text: 'Discount Applied (10%)', value: '-₹157' },
];

export default function Modules() {
  return (
    <section className={styles.section} id="modules">
      <div className={styles.inner}>

        {/* Block 1 — Report Generation */}
        <div className={styles.layout}>
          <div className={styles.textSide}>
            <div className={styles.label}>Smart Reports</div>
            <h2 className={styles.title}>Professional lab reports in seconds</h2>
            <p className={styles.desc}>
              Generate fully-formatted, branded pathology reports with auto-calculated values, normal range highlights, digital signatures, and QR codes — without manual entry.
            </p>
            <div className={styles.featureList}>
              {[
                { icon: '📐', title: 'Custom Letterheads', desc: 'Brand every report with your logo, colors, and clinic address. Multiple department templates.' },
                { icon: '✍️', title: 'Digital Signatures', desc: 'Pre-saved pathologist and technician signatures applied to every report automatically.' },
                { icon: '⚠️', title: 'Abnormal Flagging', desc: 'Values outside reference range are highlighted automatically, prompting re-verification.' },
              ].map((f) => (
                <div key={f.title} className={styles.featureItem}>
                  <div className={styles.featureIconWrap}>{f.icon}</div>
                  <div className={styles.featureText}>
                    <div className={styles.featureTitle}>{f.title}</div>
                    <div className={styles.featureDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className={styles.cta}>View Sample Report →</a>
          </div>
          <div className={styles.visualSide}>
            <div className={styles.mockupBox}>
              <div className={styles.mockupHeader}>
                <span className={styles.mockupTitle}>Patient Report — Rahul S.</span>
                <span className={styles.mockupBadge}>Completed</span>
              </div>
              <div className={styles.mockupRows}>
                {reportRows.map((r) => (
                  <div key={r.text} className={styles.mockupRow}>
                    <span className={styles.rowDot} style={{ background: r.color }} />
                    <span className={styles.rowText}>{r.text}</span>
                    <span className={styles.rowValue} style={{ color: r.color }}>{r.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.mockupFooter}>
                <span className={styles.footerLabel}>Report generated & signed</span>
                <span className={styles.footerValue}>09:41 AM ✓</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.separator} />

        {/* Block 2 — Billing */}
        <div className={`${styles.layout} ${styles.reverse}`}>
          <div className={styles.textSide}>
            <div className={styles.label}>Billing & Finance</div>
            <h2 className={styles.title}>Intelligent billing that eliminates revenue leakage</h2>
            <p className={styles.desc}>
              Generate itemized bills with GST breakdowns, manage package discounts, track outstanding dues, and reconcile daily collections — all automated and audit-ready.
            </p>
            <div className={styles.featureList}>
              {[
                { icon: '🧾', title: 'Itemized GST Invoices', desc: 'Auto-generate HSN-coded bills with GST details, compliant with Indian tax requirements.' },
                { icon: '💰', title: 'Dues & Collections', desc: 'Track partial payments, send payment reminders, and view daily collection reports.' },
                { icon: '📦', title: 'Health Packages', desc: 'Create bundled health packages with custom pricing for corporate or promotional use.' },
              ].map((f) => (
                <div key={f.title} className={styles.featureItem}>
                  <div className={styles.featureIconWrap}>{f.icon}</div>
                  <div className={styles.featureText}>
                    <div className={styles.featureTitle}>{f.title}</div>
                    <div className={styles.featureDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className={styles.cta}>Explore Billing Features →</a>
          </div>
          <div className={styles.visualSide}>
            <div className={styles.mockupBox}>
              <div className={styles.mockupHeader}>
                <span className={styles.mockupTitle}>Invoice — Priya K.</span>
                <span className={styles.mockupBadge}>Paid</span>
              </div>
              <div className={styles.mockupRows}>
                {billingRows.map((r) => (
                  <div key={r.text} className={styles.mockupRow}>
                    <span className={styles.rowDot} style={{ background: r.color }} />
                    <span className={styles.rowText}>{r.text}</span>
                    <span className={styles.rowValue}>{r.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.mockupFooter}>
                <span className={styles.footerLabel}>Total Amount</span>
                <span className={styles.footerValue}>₹1,413</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
