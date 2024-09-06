// Xray.jsx
import React, { useState } from 'react';
import axios from 'axios';
import tire from '../components/assets/tire.png';
import BackButton from '../components/BackButton.jsx';
import FileUpload from '../components/FileUpload.jsx';
import FormFields from '../components/FormFields.jsx';
import ActionButtons from '../components/ActionButtons.jsx';
import AnalysisOverlay from '../components/AnalysisOverlay.jsx';

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

  const handleNewImageClick = () => {
    window.location.reload();
  };

  return (
    <div className="relative bg-lime-200 flex items-center justify-center min-h-screen p-4">
      <img className='absolute bottom-0 right-0 p-0 max-h-32 md:max-h-48' src={tire} alt="Tire" />
      <BackButton />
      <div className="relative w-3/4 max-w-4xl bg-white p-12 rounded-lg shadow-lg">
        <div className={`transition-all duration-500 ${formVisible ? 'opacity-100' : 'opacity-0'} flex flex-col`}>
          <form className={`relative flex flex-col items-center transition-opacity duration-500 ${formVisible ? 'opacity-100' : 'opacity-0'}`}>
            <FileUpload file={file} onFileChange={handleFileChange} />
            <FormFields
              providerId={providerId}
              setProviderId={setProviderId}
              claimid={claimid}
              setClaimId={setClaimId}
              servicetype={servicetype}
              setClaimType={setClaimType}
              type={type}
              setType={setType}
            />
            <ActionButtons
              onUploadClick={handleButtonClick}
              onNewImageClick={handleNewImageClick}
              loading={loading}
              file={file}
            />
          </form>
        </div>
        <AnalysisOverlay
          xrayResults={xrayResults}
          loading={loading}
          showResults={showResults}
          error={error}
          onNewImageClick={handleNewImageClick}
        />
      </div>
    </div>
  );
};

export default Xray;
