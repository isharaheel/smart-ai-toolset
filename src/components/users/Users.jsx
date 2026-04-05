import React from "react";
import { WiStars } from "react-icons/wi";

export default function Users() {
  return (
    <div className="w-full bg-gray-950 py-16 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40">

      <div className="text-center mb-8">
        <span className="relative mb-4 font-medium text-xs sm:text-sm inline-flex items-center gap-2 py-2 px-6 sm:px-9 rounded-full border border-gray-500 text-violet-300">
          <WiStars className="text-xl sm:text-2xl" />
          <span className="tracking-wide">Wall of Love</span>
        </span>
      </div>

    
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
        What Our Users Say
      </h2>

      <p className="max-w-[700px] mx-auto text-gray-400 text-sm sm:text-base md:text-lg text-center leading-relaxed px-2">
        Our AI writing tool is designed to empower you with exceptional
        writing capabilities, making the writing process more efficient,
        accurate, and enjoyable.
      </p>
    </div>
  );
}
