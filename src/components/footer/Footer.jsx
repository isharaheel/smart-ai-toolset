import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-950 text-violet-200 py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-6 md:w-1/3 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img src="./images/logo.svg" alt="Logo" className="w-32" />
            </div>
            <p className="text-base leading-relaxed">
              AI writing tool is designed to empower you with exceptional writing
              capabilities.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <FaFacebook className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
              <IoLogoTwitter className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
              <FaGithub className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
            </div>
            <p className="text-sm text-gray-400 mt-4">
              © {new Date().getFullYear()} AI Tool, LLC. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:w-2/3 text-center md:text-left">
          
            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-lg font-semibold text-white mb-2">Products</h3>
              <a href="#" className="hover:text-white transition-all duration-300">Features</a>
              <a href="#" className="hover:text-white transition-all duration-300">Integrations</a>
              <a href="#" className="hover:text-white transition-all duration-300">Pricing</a>
              <a href="#" className="hover:text-white transition-all duration-300">Changelog</a>
              <a href="#" className="hover:text-white transition-all duration-300">Roadmap</a>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
              <a href="#" className="hover:text-white transition-all duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-all duration-300">Refund Policy</a>
              <a href="#" className="hover:text-white transition-all duration-300">Support</a>
              <a href="#" className="hover:text-white transition-all duration-300">Community</a>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <a href="#" className="hover:text-white transition-all duration-300">FAQs</a>
              <a href="#" className="hover:text-white transition-all duration-300">Contact</a>
              <a href="#" className="hover:text-white transition-all duration-300">Help Center</a>
              <a href="#" className="hover:text-white transition-all duration-300">Guides</a>
              <a href="#" className="hover:text-white transition-all duration-300">Tutorials</a>
            </div>
          </div>
        </div>

      
        <div className="w-11/12 mx-auto mt-10 h-[1px] bg-gray-800 rounded-full"></div>
      </footer>
    </>
  );
}
