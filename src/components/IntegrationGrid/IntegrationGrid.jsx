import { useState } from 'react';
import styles from './IntegrationGrid.module.css';

const categories = ['All', 'Instruments', 'Communication', 'Billing', 'EHR/HMS', 'Government'];
const integrations = [
  { icon: '🔬', name: 'Mindray Analyzer', category: 'Instruments', status: 'available' },
  { icon: '🩸', name: 'Sysmex CBC', category: 'Instruments', status: 'available' },
  { icon: '💬', name: 'WhatsApp API', category: 'Communication', status: 'available' },
  { icon: '📧', name: 'SMTP Email', category: 'Communication', status: 'available' },
  { icon: '📱', name: 'SMS Gateway', category: 'Communication', status: 'available' },
  { icon: '💳', name: 'Razorpay', category: 'Billing', status: 'available' },
  { icon: '💰', name: 'PayU', category: 'Billing', status: 'available' },
  { icon: '🏥', name: 'Practo HMS', category: 'EHR/HMS', status: 'coming' },
  { icon: '📋', name: 'eRx Prescription', category: 'EHR/HMS', status: 'coming' },
  { icon: '🇮🇳', name: 'ICMR Portal', category: 'Government', status: 'enterprise' },
  { icon: '🏛️', name: 'NABL Connect', category: 'Government', status: 'enterprise' },
  { icon: '🔭', name: 'Roche Cobas', category: 'Instruments', status: 'coming' },
];
const statusLabel = { available: 'Available', coming: 'Coming Soon', enterprise: 'Enterprise' };

export default function IntegrationGrid() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? integrations : integrations.filter(i => i.category === active);
  return (
    <section className={styles.section} id="integrations">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Integrations</div>
          <h2 className={styles.title}>Connects with tools your lab already uses</h2>
          <p className={styles.subtitle}>CorenexLIMS integrates with leading lab analyzers, communication platforms, billing gateways, and government portals.</p>
        </div>
        <div className={styles.categories}>
          {categories.map(c => (
            <button key={c} className={[styles.categoryBtn, active === c ? styles.active : ''].join(' ')} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className={styles.grid}>
          {filtered.map(item => (
            <div key={item.name} className={styles.card}>
              <div className={styles.cardLogo}>{item.icon}</div>
              <div className={styles.cardName}>{item.name}</div>
              <div className={styles.cardCategory}>{item.category}</div>
              <span className={[styles.cardStatus, styles[item.status]].join(' ')}>{statusLabel[item.status]}</span>
            </div>
          ))}
        </div>
        <div className={styles.bottomStrip}>
          <div>
            <div className={styles.stripTitle}>Need a custom integration?</div>
            <div className={styles.stripDesc}>Our API supports custom instrument and HMS connections for enterprise labs.</div>
          </div>
          <a href="#" className={styles.stripLink}>View API Docs →</a>
        </div>
      </div>
    </section>
  );
}