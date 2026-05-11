import styles from './ComparisonTable.module.css';

const features = [
  ['Cloud-based access', '✓', '✓', '✓'],
  ['WhatsApp report delivery', '✓', 'Partial', '✗'],
  ['QR-code patient portal', '✓', '✗', '✗'],
  ['Multi-branch support', '✓', 'Partial', '✗'],
  ['GST billing & invoices', '✓', '✓', 'Partial'],
  ['NABL audit tools', '✓', 'Partial', '✗'],
  ['Digital signatures', '✓', '✓', 'Partial'],
  ['Business analytics', '✓', 'Partial', '✗'],
  ['Instrument interfacing', '✓', '✗', '✗'],
  ['Onboarding in 1 day', '✓', '✗', '✗'],
  ['Free trial (no card)', '✓', '✗', '✗'],
];

export default function ComparisonTable() {
  const renderCell = (val) => {
    if (val === '✓') return <span className={styles.yes}>✓</span>;
    if (val === '✗') return <span className={styles.no}>—</span>;
    return <span className={styles.partial}>{val}</span>;
  };
  return (
    <section className={styles.section} id="comparison">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Why CorenexLIMS</div>
          <h2 className={styles.title}>How we compare to alternatives</h2>
          <p className={styles.subtitle}>A transparent look at how CorenexLIMS stacks up against other lab software options available in the market.</p>
        </div>
        <div className={styles.tableWrap}>
          <table>
            <thead className={styles.thead}>
              <tr>
                <th>Feature</th>
                <th className={styles.highlight}><span className={styles.colName}>CorenexLIMS</span><span className={styles.colSub}>Our Platform</span></th>
                <th><span className={styles.colName}>Competitor A</span><span className={styles.colSub}>Legacy LIMS</span></th>
                <th><span className={styles.colName}>Competitor B</span><span className={styles.colSub}>Basic Software</span></th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {features.map(([name, ...vals]) => (
                <tr key={name}>
                  <td>{name}</td>
                  {vals.map((v, i) => <td key={i}>{renderCell(v)}</td>)}
                </tr>
              ))}
              <tr className={styles.ctaRow}>
                <td></td>
                <td><a href="#" className={styles.ctaBtn}>Start Free Trial →</a></td>
                <td><a href="#" className={`${styles.ctaBtn} ${styles.ctaBtnAlt}`}>Compare</a></td>
                <td><a href="#" className={`${styles.ctaBtn} ${styles.ctaBtnAlt}`}>Compare</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}