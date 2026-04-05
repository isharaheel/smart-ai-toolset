import React from "react";
import { WiStars } from "react-icons/wi";
import { FaArrowRight } from "react-icons/fa";

export default function BigIcon() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-10 rounded-lg border border-gray-800 bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
        
        <div className="text-violet-300 px-6 sm:px-10 py-10 lg:py-20 flex-1">
          <span className="hero-subtitle-gradient relative mb-6 font-medium text-sm inline-flex items-center gap-2 py-2 px-4 rounded-full bg-transparent border border-violet-400">
            <WiStars className="text-2xl" />
            <span className="hero-subtitle-text">AI-Powered Writing Tool</span>
          </span>

          <h3 className="text-white mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
            Intelligent Writing Assistance
          </h3>

          <p className="text-violet-200 text-base sm:text-lg mb-8 max-w-xl">
            Our AI writing tool is designed to empower you with exceptional writing
            capabilities, making the writing process more efficient and enjoyable.
          </p>

          <a
            href="#"
            className="relative inline-flex items-center gap-2 rounded-full py-3 px-6 text-white border border-violet-300 text-sm ease-in duration-300 hover:inset-shadow-sm inset-shadow-indigo-100 transition-all duration-300"
          >
            Learn more <FaArrowRight />
          </a>
        </div>

        <div className="flex-1 flex justify-center items-center px-6 sm:px-10 py-10">
          <img
            src="./images/big-icon.svg"
            alt="AI Tool Illustration"
            className="w-64 sm:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>
    </>
  );
}
