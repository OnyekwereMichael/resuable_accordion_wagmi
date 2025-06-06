// App.js
import React, { useState } from 'react';
import Accordion from './component/Accordion';
import './App.css';

const accordionItems = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    title: "Why use an Accordion?",
    content: "Accordions allow you to toggle the visibility of content, saving space and improving UX.",
  },
  {
    title: "How to customize?",
    content: "You can customize colors, fonts, and animations by editing the styles in the Accordion.module.css.",
  },
  {
    title: "Can I reuse this?",
    content: "Absolutely! Just import the Accordion component and pass title and children.",
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={{ padding: '15px', backgroundColor: '#E0E7FF', minHeight: '100vh' }}>
      <h1
        style={{
          fontWeight: '700',
          fontSize: '28px',
          marginBottom: '24px',
          color: '#1E40AF',
        }}
        className="h1"
      >
        Reusable Accordion
      </h1>

      {accordionItems.map(({ title, content }, index) => (
        <Accordion
          key={index}
          title={title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {content}
        </Accordion>
      ))}
    </div>
  );
}
