import React, { useState, useEffect } from 'react';
import upload from '../components/assets/upload.webp';

const FileUpload = ({ file, onFileChange }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 500);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`relative bg-gray-100 border-2 border-dashed shadow-lg shadow-blue-400 border-black rounded-lg flex items-center justify-center mb-12 w-1/2 h-48`}
    >
      <input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer"
        accept="image/*"
        onChange={onFileChange}
      />
      <div
        className={`flex flex-col items-center justify-center h-full w-full p-4 ${
          isSmallScreen ? 'p-2' : ''
        }`}
      >
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="Selected"
            className={`w-full ${isSmallScreen ? 'h-20' : 'h-full'} object-cover`}
          />
        ) : (
          <>
            <img
              className={`mb-2 ${isSmallScreen ? 'h-8' : 'h-16'}`}
              src={upload}
              alt="Upload"
            />
            {!isSmallScreen && (
              <>
                <span
                  className={`text-center ${
                    isSmallScreen ? 'text-sm' : 'text-base'
                  } text-gray-800`}
                >
                  Drag and drop or upload an image of your Tire X-Ray
                </span>
                <span
                  className={`text-center ${
                    isSmallScreen ? 'text-xs' : 'text-sm'
                  } text-gray-600`}
                >
                  Accepted file format *jpg, *jpeg, *png
                </span>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
