import { useState } from 'react';
import styles from './FAQAccordion.module.css';

const faqs = [
  { q: 'How long does it take to set up CorenexLIMS?', a: 'Most labs are fully operational within 1 working day. Our onboarding team guides you through test master setup, report templates, and user configuration. For complex multi-branch setups, we typically complete in 2–3 days.' },
  { q: 'Is CorenexLIMS compliant with NABL and government regulations?', a: 'Yes. CorenexLIMS is NABL audit-ready with QC logs, SOPs, and document trails. The platform also supports ICMR reporting requirements and state government portal integrations available for enterprise plans.' },
  { q: 'Can I migrate my existing patient and test data?', a: 'Absolutely. Our data team handles migration from Excel, CSV, or any previous LIMS. We map your test masters, reference ranges, report templates, and patient history — with zero downtime during migration.' },
  { q: 'Does it work offline or on slow internet?', a: 'CorenexLIMS is cloud-first, but our mobile app supports offline registration and syncs when connectivity is restored. For high-throughput labs, we recommend a dedicated internet line and offer on-premise options for enterprise clients.' },
  { q: 'How many users and branches can I manage?', a: 'The Starter plan supports 1 user and branch. Professional supports up to 10 users and 3 branches. Enterprise offers unlimited users and branches with centralized reporting across all locations.' },
  { q: 'What kind of support do you provide?', a: 'All plans include email and chat support during business hours. Professional plans get priority support with a 4-hour response SLA. Enterprise plans receive a dedicated account manager and 24×7 phone support.' },
  { q: 'Can I customise my lab report template?', a: 'Yes. You can fully customise letterheads, fonts, spacing, logo placement, digital signatures, test hierarchy, normal value display format, and department-specific layouts — without any coding.' },
  { q: 'Is patient data secure and encrypted?', a: 'Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II compliant, HIPAA aligned, and follow India DPDP Act requirements. Data is hosted on ISO 27001 certified infrastructure.' },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>FAQ</div>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <p className={styles.subtitle}>Everything you need to know before getting started with CorenexLIMS.</p>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={[styles.item, open === i ? styles.open : ''].join(' ')}>
              <button className={styles.question} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className={styles.questionText}>{faq.q}</span>
                <span className={styles.icon}>+</span>
              </button>
              <div className={styles.answer}>{faq.a}</div>
            </div>
          ))}
        </div>
        <div className={styles.contactBlock}>
          <div className={styles.contactTitle}>Still have questions?</div>
          <div className={styles.contactDesc}>Our team is happy to answer any questions about pricing, features, or onboarding.</div>
          <div className={styles.contactActions}>
            <a href="#" className={styles.contactPrimary}>💬 Chat with us</a>
            <a href="#" className={styles.contactSecondary}>📧 Email support</a>
          </div>
        </div>
      </div>
    </section>
  );
}