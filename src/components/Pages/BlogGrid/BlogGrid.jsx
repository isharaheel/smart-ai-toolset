import React from "react";
import { Link } from "react-router-dom";
import BlogSection from "./blogs/Blogs";
import Footer from "../../footer/Footer";

export default function BlogGridPage() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-950 mx-auto text-center mt-10 sm:mt-20 px-4 sm:px-8 lg:px-16 py-10 rounded-none sm:rounded-2xl shadow-lg">
        
        <div className="max-w-5xl mx-auto mb-10">
          <h1 className="font-extrabold text-white mb-4 text-3xl sm:text-4xl md:text-5xl">
            Blog Grid
          </h1>

          <ul className="flex flex-wrap items-center justify-center gap-2 text-violet-200 text-sm sm:text-base">
            <li className="font-medium hover:text-violet-400 transition-colors">
              <Link to="/home">Home</Link>
            </li>
            <li className="font-medium">/ Blog Grid</li>
          </ul>
        </div>

        <div className="max-w-7xl mx-auto">
          <BlogSection />
        </div>

        <div className="text-left mt-16 border-t border-gray-800 pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
