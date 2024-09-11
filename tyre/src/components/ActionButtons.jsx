// ActionButtons.jsx
import React from 'react';

const ActionButtons = ({ onUploadClick, onNewImageClick, loading, file }) => {
  return (
    file && !loading && (
      <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-4'>
        <button onClick={onUploadClick} type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg md:text-xl lg:text-2xl py-3 px-6 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Upload Image
        </button>
        <button onClick={onNewImageClick} type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg md:text-xl lg:text-2xl py-3 px-6 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          New Image
        </button>
      </div>
    )
  );
};

export default ActionButtons;
