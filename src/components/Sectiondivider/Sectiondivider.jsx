import React from 'react';
import styles from './SectionDivider.module.css';

/**
 * A section divider component that displays a horizontal rule with optional
 * icon and/or text in the center.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - The icon element to display (e.g., <Icon />)
 * @param {string} props.text - The text label to display (uppercased via CSS)
 * @param {React.ReactNode} props.children - Overrides icon/text when provided
 * @param {string} props.className - Additional CSS class for the wrapper
 */
const SectionDivider = ({ icon, text, children, className = '' }) => {
  const wrapperClass = `${styles.wrapper} ${className}`.trim();

  const renderMiddleContent = () => {
    // Custom content takes precedence
    if (children) {
      return children;
    }

    // Render icon and/or text as separate elements (gap handled by CSS)
    return (
      <>
        {icon && <div className={styles.icon}>{icon}</div>}
        {text && <span className={styles.text}>{text}</span>}
      </>
    );
  };

  const hasMiddleContent = Boolean(children || icon || text);

  return (
    <div className={wrapperClass}>
      <div className={styles.divider}>
        {/* Left line */}
        <div className={styles.line} />

        {/* Optional middle section */}
        {hasMiddleContent && renderMiddleContent()}

        {/* Right line */}
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default SectionDivider;