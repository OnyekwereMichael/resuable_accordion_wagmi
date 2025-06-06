import React, { useEffect, useState } from 'react';

const TypingHeader = ({ desktopPhrases, mobilePhrases }) => {
  const [phrases, setPhrases] = useState(desktopPhrases);
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const updatePhrases = () => {
      if (window.innerWidth <= 640) {
        setPhrases(mobilePhrases);
      } else {
        setPhrases(desktopPhrases);
      }
      setPhraseIndex(0);
      setCharIndex(0);
      setIsDeleting(false);
    };

    updatePhrases();
    window.addEventListener('resize', updatePhrases);
    return () => window.removeEventListener('resize', updatePhrases);
  }, [desktopPhrases, mobilePhrases]);

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setText(currentPhrase.substring(0, updatedCharIndex));
      setCharIndex(updatedCharIndex);

      if (!isDeleting && updatedCharIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedCharIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <h1
      style={{
        fontWeight: '700',
        fontSize: '28px',
        marginBottom: '24px',
        color: '#1E40AF',
      }}
      className='h1'
    >
      {text}
    </h1>
  );
};

export default TypingHeader;
