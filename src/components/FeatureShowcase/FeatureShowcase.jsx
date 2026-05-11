import { useState } from 'react';
import styles from './FeatureShowcase.module.css';

const tabs = [
  {
    id: 'registration',
    icon: '📝',
    label: 'Registration',
    title: 'Patient registration in under 60 seconds',
    desc: 'Smart auto-fill, referral doctor linking, and package selection — designed to eliminate manual errors at the front desk.',
    features: [
      { icon: '🔍', name: 'Smart Search', text: 'Search by name, mobile, or patient ID with instant results across your entire database.' },
      { icon: '📦', name: 'Package Bundling', text: 'Apply health packages automatically with correct pricing and GST breakdowns.' },
      { icon: '🔗', name: 'Referral Linking', text: 'Link referral doctors for automatic commission calculation and report dispatch.' },
    ],
    rows: [
      { icon: '👤', title: 'Anjali Mehta', sub: 'CBC + LFT + TSH Panel', status: 'done', statusText: 'Registered' },
      { icon: '👤', title: 'Rahul Sharma', sub: 'Full Body Checkup Package', status: 'pending', statusText: 'Pending' },
      { icon: '👤', title: 'Priya Nair', sub: 'Diabetes Profile', status: 'review', statusText: 'In Lab' },
      { icon: '👤', title: 'Suresh Patel', sub: 'Thyroid Profile (T3/T4)', status: 'done', statusText: 'Registered' },
    ],
  },
  {
    id: 'reports',
    icon: '📄',
    label: 'Reports',
    title: 'Branded reports generated automatically',
    desc: 'Custom letterheads, digital signatures, reference ranges, and abnormal value alerts — all applied without manual effort.',
    features: [
      { icon: '🖊️', name: 'Digital Signatures', text: 'Pathologist and technician signatures applied per report template automatically.' },
      { icon: '⚠️', name: 'Alert System', text: 'Values outside reference range are flagged before the report reaches the patient.' },
      { icon: '📐', name: 'Custom Templates', text: 'Department-specific templates — haematology, biochemistry, microbiology and more.' },
    ],
    rows: [
      { icon: '📋', title: 'CBC Report — Anjali M.', sub: 'All values normal', status: 'done', statusText: 'Dispatched' },
      { icon: '📋', title: 'LFT Report — Vikram K.', sub: 'SGPT elevated — flagged', status: 'review', statusText: 'Review' },
      { icon: '📋', title: 'Urine RE — Sita R.', sub: 'Pending tech entry', status: 'pending', statusText: 'Pending' },
      { icon: '📋', title: 'TSH Report — Mohan D.', sub: 'Signed & delivered', status: 'done', statusText: 'Delivered' },
    ],
  },
  {
    id: 'delivery',
    icon: '📱',
    label: 'Delivery',
    title: 'Instant report delivery on any channel',
    desc: 'One click sends the report to the patient via WhatsApp, Email and SMS simultaneously — with a secure QR-code PDF link.',
    features: [
      { icon: '💬', name: 'WhatsApp Dispatch', text: 'Send formatted PDF reports directly to patients on WhatsApp in one tap.' },
      { icon: '📧', name: 'Email with Branding', text: 'Branded email delivery with your lab logo and a secure download link.' },
      { icon: '📲', name: 'QR Code Access', text: 'Patients scan the QR code on their bill to access their report on any device.' },
    ],
    rows: [
      { icon: '💬', title: 'WhatsApp — Anjali M.', sub: 'Report delivered at 10:32 AM', status: 'done', statusText: 'Sent' },
      { icon: '📧', title: 'Email — Rahul S.', sub: 'PDF link active for 30 days', status: 'done', statusText: 'Sent' },
      { icon: '📲', title: 'QR Scan — Priya N.', sub: 'Opened by patient', status: 'review', statusText: 'Viewed' },
      { icon: '📨', title: 'SMS — Suresh P.', sub: 'Delivery pending network', status: 'pending', statusText: 'Queued' },
    ],
  },
  {
    id: 'analytics',
    icon: '📊',
    label: 'Analytics',
    title: 'Real-time business intelligence dashboard',
    desc: 'Daily collections, monthly trends, referral performance, and due reports — all visible in one clean dashboard.',
    features: [
      { icon: '💰', name: 'Revenue Tracking', text: 'Daily, weekly and monthly revenue with collection vs outstanding split.' },
      { icon: '👨⚕️', name: 'Referral Reports', text: 'Track test volumes and revenue by referring doctor or hospital.' },
      { icon: '📅', name: 'Scheduled Reports', text: 'Auto-email daily summary reports to the lab owner or admin.' },
    ],
    rows: [
      { icon: '📊', title: "Today's Collection", sub: 'Updated 5 minutes ago', status: 'done', statusText: '₹18,420' },
      { icon: '📊', title: 'Outstanding Dues', sub: '12 patients pending', status: 'pending', statusText: '₹4,200' },
      { icon: '📊', title: 'Top Test — CBC', sub: '48 orders this month', status: 'review', statusText: 'Trending' },
      { icon: '📊', title: 'Referral — Dr. Sharma', sub: '22 patients referred', status: 'done', statusText: '₹9,800' },
    ],
  },
];

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState('registration');
  const active = tabs.find((t) => t.id === activeTab);

  return (
    <section className={styles.section} id="showcase">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Feature Deep Dive</div>
          <h2 className={styles.title}>Explore every module in detail</h2>
          <p className={styles.subtitle}>
            Click through each module to see how CorenexLIMS handles every stage of your lab workflow.
          </p>
        </div>

        <div className={styles.tabs}>
          {tabs.map((t) => (
            <button
              key={t.id}
              className={[styles.tab, activeTab === t.id ? styles.active : ''].join(' ')}
              onClick={() => setActiveTab(t.id)}
            >
              <span className={styles.tabIcon}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.panel}>
          <div className={styles.panelText}>
            <h3 className={styles.panelTitle}>{active.title}</h3>
            <p className={styles.panelDesc}>{active.desc}</p>
            <div className={styles.panelFeatures}>
              {active.features.map((f) => (
                <div key={f.name} className={styles.panelFeature}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div className={styles.featureBody}>
                    <div className={styles.featureName}>{f.name}</div>
                    <div className={styles.featureText}>{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className={styles.panelCta}>Explore {active.label} Module →</a>
          </div>

          <div className={styles.panelVisual}>
            <div className={styles.visualHeader}>
              <span className={styles.visualTitle}>{active.icon} {active.label} Module</span>
              <span className={styles.visualBadge}>Live</span>
            </div>
            <div className={styles.visualRows}>
              {active.rows.map((r, i) => (
                <div key={i} className={styles.visualRow}>
                  <span className={styles.rowIcon}>{r.icon}</span>
                  <div className={styles.rowContent}>
                    <div className={styles.rowTitle}>{r.title}</div>
                    <div className={styles.rowSub}>{r.sub}</div>
                  </div>
                  <span className={[styles.rowStatus, styles[r.status]].join(' ')}>{r.statusText}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}