import React from 'react';
import tyre from './assets/tyre.png';
import bg from './assets/bg.png';
import TQ from './assets/TyreCheck.jpg';
import vc from './assets/vahancheck.png';
import TQR from './assets/TQR.jpg';

const OtherServices = () => {
    return (
        <div className="relative text-center bg-cover bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            <div className="relative z-10 container mx-auto text-center py-8 sm:py-12">
                <h1 className="text-4xl font-extrabold text-white mb-12 sm:mb-16">Other Solutions</h1>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                    <div className="transition-transform transform hover:scale-105 hover:shadow-lg bg-white rounded-2xl w-full sm:w-80 md:w-96 bg-cover my-4 shadow-lg border border-gray-200 relative overflow-hidden">
                        <img src={TQR} alt="Tyre Check" className="object-cover rounded-lg mb-4 border border-gray-200" />
                        <h2 className="text-xl sm:text-2xl font-semibold  mb-3 text-gray-800">Tyre Check</h2>
                        <div className='flex flex-wrap justify-center gap-4 mb-4'>
                            <a href="https://tyreuat.tyrechecks.com/warranty/?warrantyno=7000&dealerid=0000000553&servicetype=warranty" target="_blank" rel="noopener noreferrer" className="inline-block text-sm px-4 py-2 sm:px-6 sm:py-3 text-white bg-teal-900 rounded-full font-semibold text-base sm:text-lg transition-transform transform hover:scale-105 hover:bg-blue-700">
                                Warranty Testing
                            </a>
                            <a href="https://tyreuat.tyrechecks.com/common/claim.aspx" target="_blank" rel="noopener noreferrer" className="inline-block text-sm px-4 py-2 sm:px-6 sm:py-3 text-white bg-teal-900 rounded-full font-semibold text-base sm:text-lg transition-transform transform hover:scale-105 hover:bg-blue-700">
                                Claim Testing
                            </a>
                        </div>
                    </div>
                    <div className="transition-transform transform hover:scale-105 hover:shadow-lg bg-white rounded-2xl w-full sm:w-80 md:w-96 bg-cover my-4 shadow-lg border border-gray-200 relative overflow-hidden">
                        <img src={TQ} alt="Tyre Health" className="object-cover rounded-lg mb-4 border border-gray-200" />
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Tyre Health</h2>
                        <div className='flex flex-wrap justify-center gap-4 mb-4'>
                            <a href="https://tyrehealth.tyrechecks.com/tyrehealthcheck/" target="_blank" rel="noopener noreferrer" className="inline-block text-sm px-4 py-2 sm:px-6 sm:py-3 text-white bg-teal-900 rounded-full font-semibold text-base sm:text-lg transition-transform transform hover:scale-105 hover:bg-blue-700">
                                Tyre Health Check
                            </a>
                            <a href="https://tyrehealth.tyrechecks.com/Login.aspx" target="_blank" rel="noopener noreferrer" className="inline-block text-sm px-4 py-2 sm:px-6 sm:py-3 text-white bg-teal-900 rounded-full font-semibold text-base sm:text-lg transition-transform transform hover:scale-105 hover:bg-blue-700">
                                Portal
                            </a>
                        </div>
                    </div>
                    <div className="transition-transform transform hover:scale-105 hover:shadow-lg bg-white rounded-2xl w-full sm:w-80 md:w-96 bg-cover my-4 shadow-lg border border-gray-200 relative overflow-hidden">
                        <img src={vc} alt="Vahan Check" className="object-cover rounded-lg mb-4 border border-gray-200" />
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Vahan Check</h2>
                        <div className='flex justify-center gap-4 mb-4'>
                            <a href="https://oriental.vahancheck.com/" target="_blank" rel="noopener noreferrer" className="inline-block text-sm px-4 py-2 sm:px-6 sm:py-3 text-white bg-teal-900 rounded-full font-semibold text-base sm:text-lg transition-transform transform hover:scale-105 hover:bg-blue-700">
                                Portal
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;
