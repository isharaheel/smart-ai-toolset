import React from "react";

export default function Cards2() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row gap-8 md:gap-10 bg-gradient-to-l from-violet-800 via-gray-950 to-violet-950 rounded-3xl p-6 sm:p-10">
        
     
        <div className="flex-1 border border-gray-800 px-6 sm:px-8 py-8 rounded-3xl text-center md:text-left">
          <div className="w-20 h-20 mx-auto md:mx-0 rounded-full border border-violet-900 mb-8 flex items-center justify-center">
            <img
              src="./images/icon-05 (1).svg"
              alt="Empowering Icon"
              className="w-10 h-10"
            />
          </div>
          <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
            Empowering Writing Excellence
          </h1>
          <p className="text-violet-300 text-base sm:text-lg leading-relaxed">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient
            and enjoyable.
          </p>
        </div>

       
        <div className="flex-1 border border-gray-800 px-6 sm:px-8 py-8 rounded-3xl text-center md:text-left">
          <div className="w-20 h-20 mx-auto md:mx-0 rounded-full border border-violet-900 mb-8 flex items-center justify-center">
            <img
              src="./images/icon-07.svg"
              alt="Grammar Icon"
              className="w-10 h-10"
            />
          </div>
          <h1 className="text-white text-xl sm:text-2xl font-semibold mb-4">
            Grammar and Spell Check
          </h1>
          <p className="text-violet-300 text-base sm:text-lg leading-relaxed">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, ensuring error-free, professional text every
            time.
          </p>
        </div>
      </div>
    </>
  );
}
