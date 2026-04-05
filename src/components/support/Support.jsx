import React from "react";
import { WiStars } from "react-icons/wi";
import InputField from "../InputField/InputField";

export default function SupportPage() {
  return (
    <div className="bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 w-full text-center py-12 sm:py-16 md:py-20 px-4">
      
      <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 py-2 px-5 rounded-full text-violet-300 border border-gray-600">
        <WiStars className="text-2xl" />
        <span className="hero-subtitle-text font-medium text-sm sm:text-base">
          Need Any Help?
        </span>
      </span>

      <h2 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">
        Contact With Us
      </h2>

      <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 px-2">
        Our AI writing tool is designed to empower you with exceptional
        writing capabilities, making the writing process more efficient,
        accurate, and enjoyable.
      </p>

      <div className="max-w-4xl mx-auto mt-10 bg-white/5 backdrop-blur-md rounded-3xl border border-gray-700 p-6 sm:p-8 md:p-12">
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label htmlFor="name" className="text-white mb-2 block font-medium text-left">
                Name
              </label>
              <InputField
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] text-gray-300 py-3 px-5 focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-white mb-2 block font-medium text-left">
                Email
              </label>
              <InputField
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] text-gray-300 py-3 px-5 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-white mb-2 block font-medium text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Type your message"
              className="w-full rounded-lg border border-white/10 bg-white/[0.05] text-gray-300 py-4 px-5 focus:outline-none focus:border-violet-500 resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg py-3 px-8 text-white font-semibold bg-violet-500 hover:bg-violet-400 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
