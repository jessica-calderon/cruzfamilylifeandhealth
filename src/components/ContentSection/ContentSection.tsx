import React from 'react';

// ContentSection.tsx
const ContentSection: React.FC<{ title: string, content: string }> = ({ title, content }) => {
    return (
      <section className="w-full px-8 py-6 sm:py-8 sm:px-10 max-w-4xl mx-auto bg-white bg-opacity-90 shadow-lg rounded-lg my-6">
        <h3 className="text-xl sm:text-2xl text-black font-bold mb-4">{title}</h3>
        <p className="text-black">{content}</p>
      </section>
    );
  };
  
export default ContentSection;
