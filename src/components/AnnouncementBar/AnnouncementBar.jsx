import { useState } from 'react';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar({
  badge = '🎉 NEW',
  message = 'Introducing WhatsApp bulk report delivery — send to 500+ patients instantly.',
  linkText = 'Learn more',
  linkHref = '#',
}) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>{badge}</span>
          <span className={styles.text}>{message}</span>
          <a href={linkHref} className={styles.link}>
            {linkText}
            <span className={styles.arrow}>→</span>
          </a>
        </div>
        <button
          className={styles.closeBtn}
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
        >
          ✕
        </button>
      </div>
    </div>
  );
}