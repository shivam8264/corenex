import styles from './BlogPreview.module.css';

const posts = [
  { thumb: '🧬', tag: 'NABL Guide', title: 'How to prepare your lab for NABL accreditation in 2025', excerpt: 'A step-by-step checklist covering documentation, QC records, equipment calibration, and personnel training required for NABL.', author: 'Dr. Arjun Mehta', read: '8 min read', bg: '#EBF3FF' },
  { thumb: '📊', tag: 'Lab Business', title: 'Why most diagnostic labs leak 20% revenue — and how to fix it', excerpt: "From uncollected dues to underbilled packages, we break down the most common revenue gaps and the systems that prevent them.", author: 'Rajan Nair', read: '6 min read', bg: '#E0F2FE' },
  { thumb: '📱', tag: 'Patient Experience', title: 'WhatsApp lab reports: best practices for Indian diagnostic centres', excerpt: 'How to send compliant, professional lab reports via WhatsApp — including template formats, delivery timing, and patient consent.', author: 'Sunita Kulkarni', read: '5 min read', bg: '#DCFCE7' },
];

export default function BlogPreview() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div>
            <div className={styles.label}>From the Blog</div>
            <h2 className={styles.title}>Lab management insights & guides</h2>
          </div>
          <a href="#" className={styles.allLink}>View all articles →</a>
        </div>
        <div className={styles.grid}>
          {posts.map(p => (
            <div key={p.title} className={styles.card}>
              <div className={styles.thumb} style={{ background: p.bg }}>{p.thumb}</div>
              <div className={styles.cardBody}>
                <div className={styles.tagRow}><span className={styles.tag}>{p.tag}</span></div>
                <a href="#" className={styles.cardTitle}>{p.title}</a>
                <p className={styles.cardExcerpt}>{p.excerpt}</p>
                <div className={styles.cardMeta}>
                  <span className={styles.author}>{p.author}</span>
                  <span className={styles.readTime}>{p.read}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}