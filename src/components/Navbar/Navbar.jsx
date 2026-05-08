import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: 'Home', href: '#' },
  {
    label: 'Features',
    dropdown: [
      { label: 'Patient Registration', href: '#' },
      { label: 'Sample Tracking', href: '#' },
      { label: 'Report Generation', href: '#' },
      { label: 'Billing & Payments', href: '#' },
      { label: 'WhatsApp Reports', href: '#' },
      { label: 'Business Analytics', href: '#' },
    ],
  },
  {
    label: 'Modules',
    dropdown: [
      { label: 'Pathology LIMS', href: '#' },
      { label: 'Radiology Module', href: '#' },
      { label: 'Microbiology', href: '#' },
      { label: 'Quality Control', href: '#' },
    ],
  },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#" className={styles.logo}>
            {/* <div className={styles.logoIcon}>
              <div className={styles.logoIconInner} />
            </div> */}
            <div className={styles.logoText}>
              <span className={styles.logoName}>CorenexLIMS</span>
              <span className={styles.logoTagline}>Lab Information System</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className={styles.dropdown}>
                  <button className={styles.dropdownTrigger}>
                    {item.label}
                    <ChevronDown size={16} className={styles.chevron} />
                  </button>
                  <div className={styles.dropdownMenu}>
                    {item.dropdown.map((sub) => (
                      <a key={sub.label} href={sub.href} className={styles.dropdownItem}>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={item.label} href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <a href="#" className={styles.loginBtn}>Login</a>
            <a href="#" className={styles.trialBtn}>Free Trial</a>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        {navItems.map((item) =>
          item.dropdown ? (
            <div key={item.label}>
              <div className={styles.mobileNavLink} style={{ fontWeight: 600, color: 'var(--color-text-tertiary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {item.label}
              </div>
              {item.dropdown.map((sub) => (
                <a key={sub.label} href={sub.href} className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}
                  style={{ paddingLeft: '1.5rem', fontSize: '0.9375rem' }}>
                  {sub.label}
                </a>
              ))}
            </div>
          ) : (
            <a key={item.label} href={item.href} className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          )
        )}
        <div className={styles.mobileActions}>
          <a href="#" className={styles.mobileTrialBtn}>Start Free Trial</a>
          <a href="#" className={styles.mobileLoginBtn}>Login to Dashboard</a>
        </div>
      </div>
    </>
  );
}
