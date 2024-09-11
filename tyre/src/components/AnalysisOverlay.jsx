import React from 'react';

const AnalysisOverlay = ({ xrayResults, loading, showResults, error, onNewImageClick }) => {
  const renderDefects = (defects) => {
    if (!defects || typeof defects !== 'object') {
      return <div className='text-white'>No defects data available.</div>;
    }

    const excludeKeys = [
      "Tyre_Unqiue_Id",
      "Type",
      "Error_Code",
      "Error_Message"
    ];

    const borderKeys = {
      "#######################################": "border-bottom",
      "***************************************": "border-top",
    };

    const filteredDefects = Object.entries(defects).filter(
      ([key]) => !excludeKeys.some(excludeKey => key.startsWith(excludeKey))
    );

    return filteredDefects.map(([key, value]) => {
      const borderClass = borderKeys[key];

      if (borderClass) {
        return <div key={key} className={`border-t-2 border-white my-2 ${borderClass}`} />;
      }

      return (
        <div key={key} className="mb-2">
          <div className="font-bold text-white p-2 rounded-lg bg-transparent shadow-lg shadow-indigo-950">
            {key.replace(/_/g, ' ')} <span className='text-blue-600'>{value}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={`absolute inset-0 rounded-lg ${loading || showResults || error ? 'block' : 'hidden'} transition-all duration-500`} style={{ zIndex: 10 }}>
      <div className={`w-full p-4 mx-auto text-center`}>
        <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">AI XRay Analysis Report</h3>
        
        {error && (
          <div className="bg-red-200 text-red-800 p-4 mb-4 rounded-lg">
            <span>{error}</span>
          </div>
        )}
        
        {loading && !showResults && (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <span className="text-blue-400 text-lg mt-40">Analyzing Defects...</span>
            <div className="mt-4 border-t-4 border-l-4 border-teal-400 border-solid rounded-full w-12 h-12 animate-spin"></div>
          </div>
        )}
        
        {!loading && showResults && (
          <>
          <style>
            {`
              .scroll-container::-webkit-scrollbar {
                width: 8px;
              }
      
              .scroll-container::-webkit-scrollbar-thumb {
                background-color: white;
                border-radius: 8px;
              }
      
              
            `}
          </style>
            <div className="scroll-container rounded-2xl px-4 py-2 w-full overflow-y-auto text-start" style={{ height: '60vh' }}>
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
