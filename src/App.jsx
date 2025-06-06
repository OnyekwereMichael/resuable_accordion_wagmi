import React from 'react';
import Accordion from './component/Accordion';
import './App.css';

const accordionItems = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces, maintained by Facebook.",
    defaultOpen: true,  // if you want this one open by default
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
    title: "How to customize?",
    content: "You can customize colors, fonts, and animations by editing the styles in the Accordion.module.css.",
  },
];

export default function App() {
  return (
    <div style={{ padding: '15px', backgroundColor: '#E0E7FF', minHeight: '100vh' }}>
      <h1
        style={{
          fontWeight: '700',
          fontSize: '28px',
          marginBottom: '24px',
          color: '#1E40AF',
        
        }}
      className='h1'>
        Resuable Accordion
      </h1>

      {accordionItems.map(({ title, content, defaultOpen }, index) => (
        <Accordion key={index} title={title} defaultOpen={defaultOpen}>
          {content}
        </Accordion>
      ))}
    </div>
  );
}
