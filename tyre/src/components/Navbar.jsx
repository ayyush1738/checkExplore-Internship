import React from 'react';
import logo from './assets/logo.png';
import ButtonComponent from './TyreCheck.jsx'

function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-lime-300 fixed top-0 w-full z-30 " style={{ height: '70px' }}>
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex items-center flex-shrink-0 z-10">
          <a href="https://www.checkexplore.com">
            <img src={logo} alt="Logo" className="h-10 ml-2 transition-transform transform hover:scale-105" />
          </a>
        </div>
        <div className='mb-4'>
          <ButtonComponent />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
