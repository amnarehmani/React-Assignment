import React from 'react'
import { newArrivals } from '../assets/assests'
const Arrivals = () => {
      return (
        <>
    
          <h3 className="text-center text-4xl text-black mt-8  mb-4 font-extrabold">New Arrivals</h3>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-8">
            {newArrivals.map((newArrivals ) => (
              <div
                key={newArrivals.id}
                className="overflow-hidden relative group" 
              >
            
                <div className="relative">
                  <img
                    src={newArrivals .image}
                    alt={newArrivals .name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
    
            
                <span className="absolute top-2 left-2 bg-blue-500 text-white py-1 px-3 text-sm font-semibold rounded-lg">
                  Sale!
                </span>
    
            
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-transparent group-hover:border-2 group-hover:border-white transition-all duration-300"
                >
                  Add to Cart
                </button>
    
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">{newArrivals.name}</h3>
                  <p className="text-blue-500  text-[20px] font-semibold mt-2">{newArrivals.price}</p>
                </div>
              </div>
    
            ))}
          </section>
    
           <div className="flex justify-center items-center">
           <button
          className="w-32 h-12 sm:w-36 sm:h-9 md:w-40 md:h-10 bg-blue-400 border rounded-full border-blue-400 text-white
           transition duration-300 ease-in-out hover:text-black hover:bg-transparent hover:border-black 
            animate-fadeUp opacity-0 delay-700 text-sm sm:text-base"
        >
          View More
        </button>
           </div>
        </>
      );
    };



export default Arrivals
