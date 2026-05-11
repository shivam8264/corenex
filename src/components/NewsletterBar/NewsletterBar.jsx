import { useState } from 'react';
import styles from './NewsletterBar.module.css';

export default function NewsletterBar() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); if (email) setSubmitted(true); };
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.title}>📬 Stay updated with CorenexLIMS</div>
          <div className={styles.desc}>Get product updates, lab management tips, and compliance news.</div>
        </div>
        {submitted ? (
          <div style={{ color: 'var(--color-success)', fontWeight: 600 }}>✓ You're subscribed! Thank you.</div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} required />
            <button className={styles.submitBtn} type="submit">Subscribe</button>
          </form>
        )}
        <span className={styles.note}>No spam. Unsubscribe anytime.</span>
      </div>
    </div>
  );
}