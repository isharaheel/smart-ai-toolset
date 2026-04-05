import React from "react";
import { WiStars } from "react-icons/wi";

export default function Features() {
  return (
    <>
      <div className="w-full bg-gray-950 m-auto pt-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">

        
        <span className="hero-subtitle-gradient bg-transparent text-violet-300 border border-violet-200 mb-6 font-medium text-xs sm:text-sm md:text-base inline-flex items-center gap-2 py-2 px-4 rounded-full">
          <WiStars className="text-xl sm:text-2xl" />
          <span className="hero-subtitle-text">Some of Main Features</span>
        </span>

       
        <h2 className="text-white mb-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Key Features of Our Tool
        </h2>

       
        <p className="max-w-2xl text-violet-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center mb-10 px-2 sm:px-4">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>

      </div>
    </>
  );
}
