import React from 'react';

const FormFields = ({ providerId, setProviderId, claimid, setClaimId, servicetype, setClaimType, type, setType }) => {
  return (
    <div className='w-full mb-6 flex flex-col items-center'>
      <div className='w-full flex mb-4 gap-4'>
        <label htmlFor="providerId" className="block text-sm md:text-base mt-3 text-stone-50 font-extrabold">Provider ID:</label>
        <input
          id="providerId"
          type="text"
          value={providerId}
          onChange={(e) => setProviderId(e.target.value)}
          className="w-3/4 p-3 border text-white bg-transparent border-cyan-600 shadow-md shadow-indigo-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"placeholder="Enter Provider ID"
        />
      </div>
      <div className='w-full flex mb-4 gap-9'>
        <label htmlFor="claimid" className="block text-sm md:text-base mt-3 text-stone-50 font-extrabold">Claim ID:</label>
        <input
          id="claimid"
          type="text"
          value={claimid}
          onChange={(e) => setClaimId(e.target.value)}
          className="w-3/4 p-3 border text-white bg-transparent border-cyan-600 shadow-md shadow-indigo-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Enter Claim ID"
        />
      </div>
      <div className='w-full flex mb-6 gap-4'>
        <label htmlFor="servicetype" className="block text-sm md:text-base mt-2 text-stone-50 font-extrabold">Claim Type:</label>
        <select
          id="servicetype"
          value={servicetype}
          onChange={(e) => setClaimType(e.target.value)}
          className="p-2 w-3/4 border bg-transparent border-cyan-600 shadow-lg shadow-indigo-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="claim" className='text-black'>Claim</option>
          <option value="other" className='text-black'>Other</option>
        </select>
      </div>
      <div className='w-full flex mb-6 gap-3'>
        <label htmlFor="type" className="block text-sm md:text-base mt-2 text-stone-50 font-extrabold">Select Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 w-3/4 border bg-transparent border-cyan-600 shadow-lg shadow-indigo-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="claim" className='text-black'>Claim</option>
          <option value="type1" className='text-black'>Type 1</option>
          <option value="type2" className='text-black'>Type 2</option>
        </select>
      </div>
    </div>
  );
};

export default FormFields;
