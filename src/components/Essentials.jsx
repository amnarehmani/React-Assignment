import React from 'react';
import essentials01 from "../assets/images/essentials01.jpg";
import essentials02 from '../assets/images/essentials02.jpg';

const Essentials = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-8 py-8 mt-6">
        <div className="relative overflow-hidden">
          <img
            src={essentials01}
            alt="Modern Furniture"
            className="w-full h-72 md:h-96 object-cover" 
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center px-8">
            <h3 className="text-center text-xs sm:text-sm md:text-base font-semibold text-gray-300">MODERN</h3>
            <h2 className="text-center text-[32px] sm:text-[40px] md:text-[50px] font-extrabold text-white">
              Bedroom Essentials
            </h2>
            <p className='text-center text-white font-medium sm:text-sm md:text-base mb-4'>
              Lorem ipsum dolor sit amet consectetu.
            </p>
            <button
              className="bg-blue-400 border rounded-full border-blue-400 hover:bg-transparent hover:border-white text-white font-medium py-2 px-4 text-xs sm:text-sm md:text-base"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={essentials02}
            alt="New Lighting"
            className="w-full h-72 md:h-96 object-cover" 
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center px-8">
            <h3 className="text-center text-xs sm:text-sm md:text-base font-semibold text-gray-300">NEW</h3>
            <h2 className="text-center text-[32px] sm:text-[40px] md:text-[50px] font-extrabold text-white">
              Bathroom Essentials
            </h2>
            <p className='text-center text-white font-medium sm:text-sm md:text-base mb-4'>
              Lorem ipsum dolor sit amet consectetu.
            </p>
            <button
              className="bg-blue-400 border rounded-full border-blue-400 hover:bg-transparent hover:border-white text-white font-medium py-2 px-4 text-xs sm:text-sm md:text-base"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Essentials;
