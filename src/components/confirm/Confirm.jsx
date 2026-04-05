import React from "react";
import { WiStars } from "react-icons/wi";

export default function ConfirmSection() {
  return (
    <div className="relative w-full max-w-[1300px] mx-auto mt-16 rounded-3xl border border-gray-700 overflow-hidden bg-gradient-to-l from-gray-950 via-violet-950 to-gray-950">
      
      
      <img
        src="./images/grid.svg"
        alt="grid"
        className="w-full h-full object-cover rounded-3xl opacity-40"
      />

    
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-28">
        
     
        <span className="mb-6 font-medium text-xs sm:text-sm md:text-base inline-flex items-center gap-2 py-2 px-5 sm:px-7 rounded-full border border-gray-600 text-gray-200 bg-violet-700/80 backdrop-blur-sm">
          <WiStars className="text-lg sm:text-2xl" />
          <span>Try our tool for Free</span>
        </span>

        
        <h2 className="text-white font-extrabold mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-[800px]">
          What are you waiting for?
        </h2>

       
        <p className="max-w-[700px] mx-auto text-violet-200 text-sm sm:text-base md:text-lg mb-8 sm:mb-10">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>

       
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-violet-500 hover:bg-violet-400 transition-all text-white font-semibold text-sm sm:text-base md:text-lg py-3 px-6 sm:px-10 shadow-lg"
        >
          Get Started For Free
        </a>
      </div>
    </div>
  );
}
