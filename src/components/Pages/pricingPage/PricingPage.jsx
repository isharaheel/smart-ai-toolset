import React from "react";
import { Link } from "react-router-dom";
import Pricing from "../../pricing/Pricing";
import Footer from "../../footer/Footer";

export default function PricingPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-start px-4 sm:px-8 lg:px-16 py-16 sm:py-20">
        <div className="w-full max-w-5xl text-center mb-12">
          <h1 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl mb-5">
            Pricing Table
          </h1>

          <ul className="flex flex-wrap items-center justify-center gap-2 text-violet-200 text-sm sm:text-base">
            <li className="font-medium hover:text-violet-400 transition-colors">
              <Link to="/home">Home</Link>
            </li>
            <li className="font-medium">/ Pricing Table</li>
          </ul>
        </div>

        <div className="w-full max-w-6xl">
          <Pricing />
        </div>

    
        <div className="w-full max-w-7xl mt-20 text-left sm:text-center">
          <Footer />
        </div>
      </div>
    </>
  );
}
