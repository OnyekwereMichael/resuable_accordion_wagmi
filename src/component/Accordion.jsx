import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Accordion.module.css';

const Accordion = React.memo(({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordionContainer}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        className={`${styles.accordionButton} ${isOpen ? styles.accordionButtonOpen : ''}`}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <motion.div
          className={styles.accordionIcon}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="accordion-content"
            className={styles.accordionContent}
            initial={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
            animate={{ opacity: 1, maxHeight: 500, paddingTop: 12, paddingBottom: 24 }}
            exit={{
              maxHeight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              opacity: 0,
              transition: {
                maxHeight: { duration: 0.3, ease: 'easeInOut' },
                paddingTop: { duration: 0.3, ease: 'easeInOut' },
                paddingBottom: { duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.25, ease: 'easeInOut', delay: 0 },
              },
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default Accordion;
