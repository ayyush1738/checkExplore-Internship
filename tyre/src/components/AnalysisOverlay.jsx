// AnalysisOverlay.jsx
import React from 'react';
import { renderDefects } from './utils'; // Move renderDefects function to a utils file if needed

const AnalysisOverlay = ({ xrayResults, loading, showResults, error, onNewImageClick }) => {
  return (
    <div className={`absolute rounded-lg h-full inset-0 bg-gray-500 ${loading || showResults ? 'block' : 'hidden'} transition-all duration-500`} style={{ zIndex: 10 }}>
      <div className={`w-full p-4 analysis-overlay ${loading || showResults ? 'block' : 'hidden'} mx-auto text-center`}>
        <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">AI Analysis Result</h3>
        {error && (
          <div className="bg-red-200 text-red-800 p-4 mb-4 rounded-lg">
            <span>{error}</span>
          </div>
        )}
        {loading && !showResults && (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <span className="text-white text-lg mt-40">Analyzing Defects...</span>
            <div className="mt-4 border-t-4 border-l-4 border-teal-400 border-solid rounded-full w-12 h-12 animate-spin"></div>
          </div>
        )}
        {!loading && showResults && (
          <>
            <div className="scroll-container rounded-2xl px-4 py-2 bg-white w-full shadow-md overflow-y-auto text-start" style={{ height: '60vh' }}>
              {renderDefects(xrayResults)}
            </div>
            <div className='btn flex flex-col sm:flex-row items-center justify-center gap-6 mt-16'>
              <button type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg md:text-xl lg:text-2xl py-3 px-6 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Masked Image
              </button>
              <button onClick={onNewImageClick} type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg md:text-xl lg:text-2xl py-3 px-6 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                New Image
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AnalysisOverlay;
