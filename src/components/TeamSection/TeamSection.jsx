import styles from './TeamSection.module.css';

const team = [
  { name: 'Dr. Arjun Mehta', role: 'CEO & Co-Founder', bio: 'Pathologist with 15 years of lab experience. Built CorenexLIMS to solve the pain points he lived through.', initial: 'A', color: '#1570EF' },
  { name: 'Priya Sharma', role: 'CTO', bio: 'Full-stack engineer and healthcare tech veteran. Led product at two health-tech startups before CorenexLIMS.', initial: 'P', color: '#0E7490' },
  { name: 'Rajan Nair', role: 'Head of Product', bio: 'Designed LIMS workflows for 300+ labs. Obsessed with making complex software feel effortless.', initial: 'R', color: '#7C3AED' },
  { name: 'Sunita Kulkarni', role: 'Head of Customer Success', bio: 'Onboarded 1,000+ labs. Knows every edge case in Indian diagnostic lab workflows.', initial: 'S', color: '#16A34A' },
];

export default function TeamSection() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Our Team</div>
          <h2 className={styles.title}>Built by lab people, for lab people</h2>
          <p className={styles.subtitle}>Our founding team combines deep pathology expertise with world-class engineering — so every feature solves a real problem.</p>
        </div>
        <div className={styles.grid}>
          {team.map(m => (
            <div key={m.name} className={styles.card}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatar} style={{ background: m.color }}>{m.initial}</div>
              </div>
              <div className={styles.name}>{m.name}</div>
              <div className={styles.role}>{m.role}</div>
              <div className={styles.bio}>{m.bio}</div>
              <a href="#" className={styles.linkedin}>in LinkedIn</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}