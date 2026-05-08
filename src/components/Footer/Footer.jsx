import styles from './Footer.module.css';

const links = [
  {
    title: 'Product',
    items: ['Features', 'Pricing', 'Sample Reports', 'API Docs', 'Integrations', 'Changelog'],
  },
  {
    title: 'Modules',
    items: ['Pathology LIMS', 'Radiology', 'Microbiology', 'QC Management', 'Analytics', 'Multi-Branch'],
  },
  {
    title: 'Company',
    items: ['About Us', 'Blog', 'Careers', 'Contact', 'Partner Program', 'Refer & Earn'],
  },
  {
    title: 'Support',
    items: ['Help Center', 'Demo Request', 'Onboarding Guide', 'System Status', 'Privacy Policy', 'Terms of Use'],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* Brand column */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            {/* <div className={styles.logoIcon}>🔬</div> */}
            <span className={styles.logoName}>CorenexLIMS</span>
          </a>
          <p className={styles.brandDesc}>
            India's trusted cloud-based Laboratory Information Management System — helping diagnostic labs automate, grow, and deliver better patient care.
          </p>
          <div className={styles.certBadges}>
            <span className={styles.cert}>HIPAA</span>
            <span className={styles.cert}>ISO 27001</span>
            <span className={styles.cert}>DPDP</span>
            <span className={styles.cert}>NABL Ready</span>
          </div>
          <div className={styles.socialRow}>
            {[
              { icon: '𝕏', label: 'Twitter' },
              { icon: 'in', label: 'LinkedIn' },
              { icon: '▶', label: 'YouTube' },
              { icon: '📘', label: 'Facebook' },
            ].map((s) => (
              <a key={s.label} href="#" className={styles.socialLink} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {links.map((col) => (
          <div key={col.title} className={styles.col}>
            <div className={styles.colTitle}>{col.title}</div>
            {col.items.map((item) => (
              <a key={item} href="#" className={styles.colLink}>{item}</a>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} CorenexLIMS. All rights reserved. Designed & Developed by <a href="https://coreconnexglobal.com/" target='_blank' className={styles.companyName}>CoreConnex</a>.
          </span>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>Cookie Policy</a>
            <a href="#" className={styles.legalLink}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
