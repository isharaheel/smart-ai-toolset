import React from "react";
import { WiStars } from "react-icons/wi";


export default function Title() {
  return (
  
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      
    
      <div className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 rounded-xl shadow-2xl pb-10 mt-12 sm:mt-20">
        
      
        <button className="w-full sm:w-80 h-8 border border-indigo-800 flex justify-center items-center text-orange-50 rounded-xl cursor-pointer mt-12 bg-transparent hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 px-4">
          <WiStars className="text-2xl" />
          Your Ultimate Creative Companion!
        </button>
        
        
        <h1 className="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-4xl text-center mt-10 px-4">
          Elevate Your Content with Our<br/> AI-Powered Writing Tool
        </h1>
        

        <p className="max-w-md md:max-w-lg mx-auto text-indigo-100 text-center mb-9 font-medium md:text-lg px-4">
          Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product Sites. Comes
          with everything you need - pages, features, sections, components and more that you can easily customize.
        </p>
        
        <a href="#" className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 bg-violet-400 hover:opacity-80">
          Start Your Free Trial
        </a>
      </div>
    </div>
  );
}
