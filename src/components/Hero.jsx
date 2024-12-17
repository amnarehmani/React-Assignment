import React from 'react';
import Header from './Header';
import home from '../assets/images/home.webp';

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center relative w-full"
      style={{
        backgroundImage: `url(${home})`,
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      
      <div className="absolute top-0 w-full">
        <Header />
      </div>

    
      <h1
        className="text-white text-center text-[45px] font-extrabold animate-fadeUp opacity-0"
      >
        Where Comfort Meets Elegance
      </h1>

      
      <p
        className="text-white text-[21px] font-medium text-center mb-4 animate-fadeUp opacity-0 delay-200"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
      </p>

    
      <div className="flex items-center justify-center gap-4">
        <button
          className="w-40 h-9 border rounded-full text-white transition duration-300 ease-in-out hover:bg-blue-400 hover:border-blue-400 animate-fadeUp opacity-0 delay-500"
        >
          Shop Now
        </button>
        <button
          className="w-40 h-9 bg-blue-400 border rounded-full border-blue-400 text-white transition duration-300 ease-in-out hover:bg-transparent hover:border-white animate-fadeUp opacity-0 delay-700"
        >
          View Products
        </button>
      </div>
    </div>
  );
};

export default Hero;
