import React from 'react';

interface Props {
  toggleModal: () => void; // Function to toggle the modal's visibility
}

const QuoteModal: React.FC<Props> = ({ toggleModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center px-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Request a Free Quote</h2>
        <p className="text-gray-600 mb-4">Fill out the form below to start.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="form-input w-full rounded border border-gray-300 p-2 bg-gray-100 focus:border-gold focus:ring-gold focus:ring-1"/>
          <input type="email" placeholder="Email" className="form-input w-full rounded border border-gray-300 p-2 bg-gray-100 focus:border-gold focus:ring-gold focus:ring-1"/>
          <button type="submit" className="w-full bg-gold hover:bg-darkgold text-white py-2 px-4 rounded transition duration-300 ease-in-out">
            Submit
          </button>
        </form>
        {/* Close button with enhanced visibility */}
        <button onClick={toggleModal} className="absolute top-3 right-3 text-gray-800 hover:text-black">
          <span className="text-2xl">&times;</span> {/* Large 'X' for closing enhances usability */}
        </button>
      </div>
    </div>
  );
};

export default QuoteModal;
