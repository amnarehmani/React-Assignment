import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header className="w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <div className="flex items-center gap-2">
        <h1 className="text-white font-extrabold text-[23px] font-playfair">HomeVibe</h1>

        </div>

        <div className="relative flex-grow max-w-md hidden md:block">
        <input
  type="search"
  placeholder="Search here..."
  className="w-full h-10 px-4 rounded-full border  placeholder:text-white border-gray-300 bg-transparent focus:border-blue-400 focus:outline-none shadow-sm transition duration-200"
/>

          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4b5563] text-white px-3 py-1 rounded-full hover:bg-blue-400 transition duration-200"
          >
            Go
          </button>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className=" text-white font-medium hover:text-blue-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-medium hover:text-blue-400 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-medium hover:text-blue-400 transition duration-200"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-medium hover:text-blue-400 transition duration-200"
              >
                New Arrivals
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-black shadow-lg z-20 p-6 md:hidden flex flex-col">
          
          <div className="flex justify-right items-center mb-6">
            
            <button
              className="text-white text-2xl"
              onClick={toggleSidebar}
            >
              <FiX />
            </button>
          </div>

        
          <div className="flex flex-col justify-center items-center flex-grow gap-6">
        
            <div className="relative w-full">
            <input
  type="search"
  placeholder="Search here..."
  className="w-full h-10 px-4 rounded-full border placeholder:text-white border-gray-300 bg-transparent focus:border-blue-400 focus:outline-none shadow-sm transition duration-200"
/>

              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4b5563] text-white px-3 py-1 rounded-full hover:bg-blue-400 transition duration-200"
              >
                Go
              </button>
            </div>

            
            <nav className="w-full">
              <ul className="flex flex-col gap-6 items-center">
                <li>
                  <a
                    href="#"
                    className="text-white font-medium hover:text-blue-400 transition duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white font-medium hover:text-blue-400 transition duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white font-medium hover:text-blue-400 transition duration-200"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white font-medium hover:text-blue-400 transition duration-200"
                  >
                    New Arrivals
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
