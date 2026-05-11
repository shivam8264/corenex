import styles from './PageHeader.module.css';

export default function PageHeader({ crumbs = [], title, subtitle }) {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        {crumbs.length > 0 && (
          <div className={styles.breadcrumb}>
            {crumbs.map((c, i) => (
              <span key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {i < crumbs.length - 1 ? (
                  <><a href={c.href} className={styles.crumb}>{c.label}</a><span className={styles.crumbSep}>›</span></>
                ) : (
                  <span className={styles.crumbActive}>{c.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}