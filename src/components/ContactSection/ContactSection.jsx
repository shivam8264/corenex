import { useState } from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', lab: '', email: '', phone: '', message: '' });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <div className={styles.label}>Contact Us</div>
            <h2 className={styles.title}>Let's talk about your lab</h2>
            <p className={styles.desc}>Whether you want a demo, have questions about pricing, or want to discuss a custom enterprise setup — we're here to help.</p>
            <div className={styles.contactItems}>
              {[
                { icon: '📞', label: 'Phone', value: '+91 98765 43210', note: 'Mon–Sat, 9AM–7PM IST' },
                { icon: '📧', label: 'Email', value: 'support@corenexlims.com', note: 'We reply within 4 hours' },
                { icon: '💬', label: 'WhatsApp', value: '+91 98765 43210', note: 'Instant support on WhatsApp' },
                { icon: '🏢', label: 'Office', value: 'Mumbai, Maharashtra — India', note: 'By appointment only' },
              ].map(c => (
                <div key={c.label} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{c.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{c.label}</div>
                    <div className={styles.contactValue}>{c.value}</div>
                    <div className={styles.contactNote}>{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.formCard}>
            <div className={styles.formTitle}>Send us a message</div>
            <div className={styles.formGrid}>
              {[['name','Your Name'],['lab','Lab / Clinic Name'],['email','Email Address'],['phone','Phone Number']].map(([k,ph]) => (
                <div key={k} className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>{ph}</label>
                  <input className={styles.fieldInput} placeholder={ph} value={form[k]} onChange={set(k)} />
                </div>
              ))}
              <div className={`${styles.fieldGroup} ${styles.full}`}>
                <label className={styles.fieldLabel}>Message</label>
                <textarea className={`${styles.fieldInput} ${styles.fieldTextarea}`} placeholder="Tell us about your lab and what you're looking for..." value={form.message} onChange={set('message')} />
              </div>
            </div>
            <button className={styles.submitBtn}>Send Message →</button>
          </div>
        </div>
      </div>
    </section>
  );
}