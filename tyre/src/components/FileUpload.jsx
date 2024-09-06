// FileUpload.jsx
import React from 'react';
import upload from '../components/assets/upload.webp';

const FileUpload = ({ file, onFileChange }) => {
  return (
    <div className="relative w-full max-w-md h-64 bg-gray-100 border-2 border-black rounded-lg flex items-center justify-center mb-8">
      <input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer"
        accept="image/*"
        onChange={onFileChange}
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
  );
};

export default FileUpload;
