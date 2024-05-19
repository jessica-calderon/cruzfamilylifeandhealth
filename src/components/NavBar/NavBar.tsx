// Example of a simple responsive NavBar component with React and Tailwind
import React, { useState } from 'react';

// NavBar.tsx or Header.tsx
import QuoteModal from '../QuoteModal/QuoteModal';

const NavBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle the state to show/hide the modal
  };

  return (
    <header className="w-full bg-black text-gold p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Cruz Family Life & Health</h1>
      <button onClick={toggleModal} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors duration-300">
        Get Your Free Quote
      </button>
      {isModalOpen && <QuoteModal toggleModal={toggleModal} />}
    </header>
  );
};

export default NavBar;
