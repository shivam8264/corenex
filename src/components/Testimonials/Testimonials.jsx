import styles from './Testimonials.module.css';

const reviews = [
  {
    stars: 5,
    quote: 'CorenexLIMS transformed our lab operations. Reports that used to take 30 minutes now take under 5. Our patients love the WhatsApp delivery.',
    name: 'Dr. Ramesh Kumar',
    role: 'Pathologist, Pune Diagnostics',
    initial: 'R',
    color: '#1570EF',
  },
  {
    stars: 5,
    quote: 'The billing module alone saved us from countless errors. The GST invoice generation and dues tracking is excellent for our multi-branch setup.',
    name: 'Sunita Verma',
    role: 'Lab Manager, HealthFirst Labs, Delhi',
    initial: 'S',
    color: '#0E7490',
  },
  {
    stars: 5,
    quote: 'Setup was incredibly smooth. Within a day we were fully operational. Support team is responsive and the software keeps improving every month.',
    name: 'Dr. Anita Mehta',
    role: 'Owner, Mehta Diagnostic Centre, Mumbai',
    initial: 'A',
    color: '#7C3AED',
  },
  {
    stars: 5,
    quote: 'We run 6 collection centers from one dashboard. The centralized reporting and role-based access has made management so much easier.',
    name: 'Vikram Nair',
    role: 'Director, Nair Medical Labs, Kochi',
    initial: 'V',
    color: '#D97706',
  },
  {
    stars: 5,
    quote: 'NABL preparation became much easier with CorenexLIMS. The audit trail, QC logs, and document templates are built exactly as per guidelines.',
    name: 'Dr. Pooja Singh',
    role: 'Quality Head, Apollo Diagnostics, Bangalore',
    initial: 'P',
    color: '#16A34A',
  },
  {
    stars: 5,
    quote: 'After trying 3 other LIMS platforms, CorenexLIMS is the only one that felt designed for Indian pathology labs. Pricing is very fair too.',
    name: 'Mohan Desai',
    role: 'Lab Owner, Desai Pathology, Ahmedabad',
    initial: 'M',
    color: '#DC2626',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Customer Reviews</div>
          <h2 className={styles.title}>Trusted by pathologists nationwide</h2>
          <div className={styles.ratingRow}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.ratingText}><strong>4.9 / 5</strong> from 600+ verified reviews</span>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardStars}>{'★'.repeat(r.stars)}</span>
                <span className={styles.googleBadge}>Google Review</span>
              </div>
              <p className={styles.quote}>{r.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: r.color }}>
                  {r.initial}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{r.name}</span>
                  <span className={styles.authorRole}>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.platformLogos}>
            <span className={styles.platformItem}>⭐ Google Reviews — 4.9</span>
            <span className={styles.platformItem}>•</span>
            <span className={styles.platformItem}>📱 Play Store — 4.8</span>
            <span className={styles.platformItem}>•</span>
            <span className={styles.platformItem}>🍎 App Store — 4.7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
