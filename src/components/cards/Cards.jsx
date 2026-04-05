import React from "react";

export default function Cards() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-transparent w-full max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        
       
        <div className="text-center flex flex-col justify-center items-center gap-5 border pb-10 px-6 sm:px-8 py-10 border-gray-900 rounded-lg hover:bg-gradient-to-t from-gray-950 via-gray-900 transition-all duration-300">
          <div className="w-20 h-20 rounded-full border border-violet-200 flex items-center justify-center">
            <img src="./images/icon-01.svg" alt="icon" className="w-10 sm:w-12" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white hero-subtitle-text text-lg sm:text-xl">Intelligent Writing Assistance</h1>
            <p className="text-violet-200 text-sm sm:text-base md:text-lg">
              Our AI writing tool analyzes your content, suggests improvements,
            </p>
          </div>
        </div>

       
        <div className="text-center flex flex-col justify-center items-center gap-5 border pb-10 px-6 sm:px-8 py-10 border-gray-900 rounded-lg hover:bg-gradient-to-t from-gray-950 via-gray-900 transition-all duration-300">
          <div className="w-20 h-20 rounded-full border border-violet-200 flex items-center justify-center">
            <img src="./images/icon-02.svg" alt="icon" className="w-10 sm:w-12" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white hero-subtitle-text text-lg sm:text-xl">Grammar and Spell Check</h1>
            <p className="text-violet-200 text-sm sm:text-base md:text-lg">
              Say goodbye to embarrassing typos and grammar mistakes
            </p>
          </div>
        </div>

     
        <div className="text-center flex flex-col justify-center items-center gap-5 border pb-10 px-6 sm:px-8 py-10 border-gray-900 rounded-lg hover:bg-gradient-to-t from-gray-950 via-gray-900 transition-all duration-300">
          <div className="w-20 h-20 rounded-full border border-violet-200 flex items-center justify-center">
            <img src="./images/icon-03.svg" alt="icon" className="w-10 sm:w-12" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white hero-subtitle-text text-lg sm:text-xl">Plagiarism Detection</h1>
            <p className="text-violet-200 text-sm sm:text-base md:text-lg">
              Originality is key, and our AI writing tool helps you maintain it
            </p>
          </div>
        </div>

     
        <div className="text-center flex flex-col justify-center items-center gap-5 border pb-10 px-6 sm:px-8 py-10 border-gray-900 rounded-lg hover:bg-gradient-to-t from-gray-950 via-gray-900 transition-all duration-300">
          <div className="w-20 h-20 rounded-full border border-violet-200 flex items-center justify-center">
            <img src="./images/icon-04.svg" alt="icon" className="w-10 sm:w-12" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white hero-subtitle-text text-lg sm:text-xl">Voice to Text Conversion</h1>
            <p className="text-violet-200 text-sm sm:text-base md:text-lg">
              Transform your spoken words into written text easily & effortlessly
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col justify-center items-center gap-5 border pb-10 px-6 sm:px-8 py-10 border-gray-900 rounded-lg hover:bg-gradient-to-t from-gray-950 via-gray-900 transition-all duration-300">
          <div className="w-20 h-20 rounded-full border border-violet-200 flex items-center justify-center">
            <img src="./images/icon-05.svg" alt="icon" className="w-10 sm:w-12" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white hero-subtitle-text text-lg sm:text-xl">Style and Tone Adaptation</h1>
            <p className="text-violet-200 text-sm sm:text-base md:text-lg">
              Whether you need a professional or friendly tone, it handles all
            </p>
          </div>
        </div>

       
        <div className="text-center flex flex-col justify-center items-center gap-5 border pb-10 px-6 sm:px-8 py-10 border-gray-900 rounded-lg hover:bg-gradient-to-t from-gray-950 via-gray-900 transition-all duration-300">
          <div className="w-20 h-20 rounded-full border border-violet-200 flex items-center justify-center">
            <img src="./images/icon-06.svg" alt="icon" className="w-10 sm:w-12" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white hero-subtitle-text text-lg sm:text-xl">Content Generation</h1>
            <p className="text-violet-200 text-sm sm:text-base md:text-lg">
              Need inspiration or assistance with generating content?
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
