import React, { useState } from 'react';
import axios from 'axios';
import upload from '../components/assets/upload.webp';
import tire from '../components/assets/tire.png';
import BackButton from '../components/BackButton.jsx';

const Xray = () => {
  const [file, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [xrayResults, setXrayResults] = useState(null); 
  const [providerId, setProviderId] = useState('');
  const [claimid, setClaimId] = useState('');
  const [servicetype, setClaimType] = useState('claim'); // Default value
  const [type, setType] = useState('claim'); // Default value for the new input
  const [error, setError] = useState(null); // State to hold error messages
  const [overlayVisible, setOverlayVisible] = useState(false); // State for overlay visibility
  const [formVisible, setFormVisible] = useState(true); // State to toggle form visibility


  const handleButtonClick = async () => {
    if (!file || !providerId || !claimid) {
      alert('Please upload an image and fill in all required fields.');
      return;
    }

    setLoading(true);
    setError(null); // Clear previous errors
    setFormVisible(false); // Hide the form
    setOverlayVisible(true); // Show the overlay
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('providerId', providerId);
      formData.append('claimid', claimid);
      formData.append('servicetype', servicetype);
      formData.append('type', type); // Append the new input field value

      const response = await axios.post('http://106.201.233.20:8099/X-ray_Check', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('API Response:', response.data); // Log the response data for inspection
      setXrayResults(response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('There was an error processing the image. Please try again later.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const renderDefects = (defects) => {
    if (!defects || typeof defects !== 'object') {
      return <div>No defects data available.</div>;
    }

    // Keys to be excluded from the rendering
    const excludeKeys = [
      "Tyre_Unqiue_Id",
      "Type",
      "Error_Code",
      "Error_Message"
    ];

    // Map of special keys to be replaced with borders
    const borderKeys = {
      "#######################################": "border-bottom",
      "***************************************": "border-top",
      
    };

    // Filter out excluded keys
    const filteredDefects = Object.entries(defects).filter(
      ([key]) => !excludeKeys.some(excludeKey => key.startsWith(excludeKey))
    );

    return filteredDefects.map(([key, value]) => {
      // Check if the key is in the borderKeys map
      const borderClass = borderKeys[key];

      // If it should be a border, render a styled div
      if (borderClass) {
        return <div key={key} className={`border-t-2 border-black my-2 ${borderClass}`} />;
      }

      // Default rendering for other defects
      return (
        <div key={key} className="mb-2">
          <div className="font-bold text-black p-2 rounded-lg bg-lime-200">
            {key.replace(/_/g, ' ')} <span className='text-blue-600'>{value}</span> 
          </div>
        </div>
      );
    });
  };

  return (
    <div className="relative bg-lime-200 flex items-center justify-center h-screen">
      <img className='absolute bottom-0 right-0 p-0 h-max-96' src={tire} alt="Tire" />
      <BackButton />
      <div className="absolute w-1/2 h-5/6 bg-white p-6 rounded-lg shadow-lg">
        {/* Main container with relative positioning */}
        <div className={`transition-all duration-500 ${formVisible ? 'w-full' : 'w-0 overflow-hidden'} flex flex-col`}>
          <form className={`relative flex flex-col items-center transition-opacity duration-500 ${formVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-3/4 h-64 bg-gray-100 border-2 border-black rounded-lg flex items-center justify-center mb-8">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={handleFileChange}
              />
              <div className="flex flex-col items-center justify-center h-full w-full p-4">
                {file ? (
                  <img src={URL.createObjectURL(file)} alt="Selected" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <img className="h-16 mb-2" src={upload} alt="Upload" />
                    <span className="text-center text-gray-800">
                      Drag and drop or upload an image of your Tire X-Ray
                    </span>
                    <span className="text-center text-sm text-gray-600">
                      Accepted file format *jpg, *jpeg, *png
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className='w-full mb-6 flex flex-col items-center'>
              <div className='w-full flex items-start mb-4 gap-2'>
                <label htmlFor="providerId" className="mt-2 block text-base font-medium mb-2">Provider ID:</label>
                <input
                  id="providerId"
                  type="text"
                  value={providerId}
                  onChange={(e) => setProviderId(e.target.value)}
                  className="w-3/4 p-3 border h-10 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter Provider ID"
                />
              </div>
              <div className='w-full flex items-start mb-4 gap-2'>
                <label htmlFor="claimid" className="block text-base font-medium mb-2">Claim ID:</label>
                <input
                  id="claimid"
                  type="text"
                  value={claimid}
                  onChange={(e) => setClaimId(e.target.value)}
                  className="w-3/4 p-3 ml-5 border h-10 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter Claim ID"
                />
              </div>
              <div className='w-full flex items-start mb-6 gap-2'>
                <label htmlFor="servicetype" className="mt-2 block text-base font-medium mb-2">Claim Type:</label>
                <select
                  id="servicetype"
                  value={servicetype}
                  onChange={(e) => setClaimType(e.target.value)}
                  className="p-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="claim">Claim</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className='w-full flex items-start mb-6 gap-2'>
                <label htmlFor="type" className="mt-2 block text-base font-medium mb-2">Select Type:</label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="p-2 w-1/2 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="claim">Claim</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                </select>
              </div>
            </div>
            {file && !loading && (
              <div className='flex items-center justify-center gap-6'>
                <button onClick={handleButtonClick} type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-md md:text-xl lg:text-2xl py-3 px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Upload Image
                </button>
                <button onClick={() => window.location.reload()} type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-md md:text-xl lg:text-2xl py-3 px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  New Image
                </button>
              </div>
            )}
          </form>
        </div>
        {/* Right side: Display data and error */}
        <div className={`absolute rounded-lg h-full inset-0 bg-gray-500 ${overlayVisible ? 'block' : 'hidden'} transition-all duration-500`} style={{ zIndex: 10 }}>
          <div className={`w-full p-4 analysis-overlay ${overlayVisible ? 'block' : 'hidden'}  mx-auto text-center`}>
            <h3 className="text-3xl text-white font-semibold m-2">AI Analysis Result</h3>
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
              <div className="scroll-container rounded-2xl px-4 py-2 bg-white w-full shadow-md overflow-y-auto text-start" style={{height: 400}}>
                {renderDefects(xrayResults)}
              </div>
              <div className='btn flex items-center justify-center gap-6 mt-16'>
                <button type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg md:text-xl lg:text-2xl py-3 px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Masked Image
                </button>
                <button onClick={() => window.location.reload()} type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg md:text-xl lg:text-2xl py-3 px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  New Image
                </button>
              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xray;
