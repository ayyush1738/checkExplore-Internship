import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import img from '../assets/teal.jpg';
import logo from './assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side: Image with inner image */}
          <div className="relative mb-6 md:mb-0 text-center md:text-left">
            <img className="w-full md:w-64 h-auto rounded-lg shadow-lg" src={img} alt="Outer Logo" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img className="w-40 rounded-lg shadow-lg" src={logo} alt="Inner Image" />
            </div>
          </div>

          {/* Center: Contact Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-2 text-sm md:text-base">Unit 7, Building 6, Sector 3, Millennium Business Park, MIDC, Mahape, Navi Mumbai 400 710, INDIA</p>
            <p className="mb-2">
              <a href="mailto:contact@checkexplore.com" className="text-teal-400 hover:underline">contact@checkexplore.com</a>
            </p>
            <p className="mb-2">
              <a href="tel:+91-9372499098" className="text-teal-400 hover:underline">+91-9372499098</a>
            </p>
          </div>

          {/* Right side: Social Media Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.linkedin.com/company/checkexplore-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} CheckExplore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
