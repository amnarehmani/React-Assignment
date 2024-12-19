import React from 'react';
import Header from './Header';
import home from '../assets/images/home.webp';
import bed from '../assets/images/bed.jpg'
import lamp from '../assets/images/lamp.jpg'


const Hero = () => {
  return (
    <>
    <div
  className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center relative w-full px-4"
  style={{
    backgroundImage: `url(${home})`,
    backgroundBlendMode: 'multiply',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }}
>
  {/* Header */}
  <div className="absolute top-0 w-full">
    <Header />
  </div>


  <h1
    className="text-white text-center text-[30px] sm:text-[35px] md:text-[45px] font-extrabold animate-fadeUp opacity-0 leading-tight"
  >
    Where Comfort Meets Elegance
  </h1>


  <p
    className="text-white text-[16px] sm:text-[18px] md:text-[21px] font-medium text-center mb-4 animate-fadeUp opacity-0 delay-200"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
  </p>


  <div className="flex flex-wrap items-center justify-center gap-4">
    <button
      className="w-32 h-8 sm:w-36 sm:h-9 md:w-40 md:h-10 border rounded-full text-white transition duration-300 ease-in-out hover:bg-blue-400 hover:border-blue-400 animate-fadeUp opacity-0 delay-500 text-sm sm:text-base"
    >
      Shop Now
    </button>
    <button
      className="w-32 h-8 sm:w-36 sm:h-9 md:w-40 md:h-10 bg-blue-400 border rounded-full border-blue-400 text-white transition duration-300 ease-in-out hover:bg-transparent hover:border-white animate-fadeUp opacity-0 delay-700 text-sm sm:text-base"
    >
      View Products
    </button>
  </div>
</div>

  
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 md:px-8 py-8">


<div class="relative overflow-hidden lg:col-span-2">
  <img
    src={bed}
    alt="Modern Furniture"
    class="w-full h-64 md:h-80 object-cover"
  />
  
  <div class="absolute inset-0 bg-black opacity-60"></div>

  <div
    class="absolute inset-0 flex flex-col justify-center items-start px-8"
  >
    <h3 class="text-xs sm:text-sm font-semibold text-gray-300">MODERN</h3>
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
      FURNITURE
    </h2>
    <button
      class="bg-blue-400 border rounded-full border-blue-400 hover:bg-transparent hover:border-white text-white font-medium py-2 px-4 text-xs sm:text-sm md:text-base"
    >
      Shop Now
    </button>
  </div>
</div>


<div class="relative overflow-hidden">
  <img
    src={lamp}
    alt="New Lighting"
    class="w-full h-64 md:h-80 object-cover"
  />

  <div class="absolute inset-0 bg-black opacity-60"></div>

  <div
    class="absolute inset-0 flex flex-col justify-center items-start px-8"
  >
    <h3 class="text-xs sm:text-sm font-semibold text-gray-300">NEW</h3>
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
      LIGHTING
    </h2>
    <button
      class="bg-blue-400 border rounded-full border-blue-400 hover:bg-transparent hover:border-white text-white font-medium py-2 px-4 text-xs sm:text-sm md:text-base"
    >
      Shop Now
    </button>
  </div>
</div>
</section>




     </>
  );
};

export default Hero;
