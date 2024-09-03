import React, { useState } from 'react';
import r from "./assets/R.png";
import { useNavigate } from 'react-router-dom';

function Hero() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Xray');
  };

  return (
    <div className="bg-lime-200 p-20 flex flex-col md:flex-row md:justify-between items-center md:items-start">
      <div className="text-center md:text-left">
        <h1 className='font-sans mt-10 md:mt-28 ml-0 md:ml-24 font-bold text-4xl md:text-7xl text-teal-900'>
          Tyre X-Ray Testing
        </h1>
        <h2 className='font-sans ml-0 md:ml-24 mt-2 text-2xl md:text-4xl text-lime-600'>
          The Future of Tyre Quality Control
        </h2>
        <div className=' md:bottom-52'>
          <button
            onClick={handleButtonClick}
            className="bg-teal-900 hover:bg-lime-400 mt-20 ml-0 md:ml-72 text-white font-bold text-lg md:text-xl lg:text-2xl py-5 px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Try X-Ray
          </button>
        </div>
      </div>
      <div className="mt-20 md:mt-10 md:mr-28">
        <img
          src={r}
          className={`h-48 md:h-96 ${isAnimating ? 'animate-up-down' : ''} cursor-pointer`}
          alt=""
          onClick={toggleAnimation}
        />
      </div>
    </div>
  );
}

export default Hero;
