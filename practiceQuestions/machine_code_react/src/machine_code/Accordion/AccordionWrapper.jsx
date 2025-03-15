import { useState } from 'react';
import styles from './AccordionWrapper.module.css';

const AccordionWrapper = ({ label, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // handler function
  const onAccordionClick = (event) => {
    event.preventDefault();
    setIsExpanded((prevValue) => !prevValue);
  };
  return (
    <div className={styles.accordionWrapper}>
      {/* label section */}
      <button
        className={styles.accordionLabel}
        onClick={onAccordionClick}>
        <span>{label}</span>
        <span>{isExpanded ? '-' : '+'}</span>
      </button>
      {/* children section which is first time would be hidden */}
      {isExpanded && <div>{children}</div>}
    </div>
  );
};

export default AccordionWrapper;
