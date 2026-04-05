import React from "react";
import { WiStars } from "react-icons/wi";
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function BlogSection() {
  return (
    <div className="bg-gray-950 w-full text-center py-16 px-4">
      <span className="relative mb-4 inline-flex items-center gap-2 py-2 px-5 rounded-full text-violet-300 border border-gray-600">
        <WiStars className="text-2xl" />
        <span className="font-medium text-sm sm:text-base">
          Read Our Latest Blogs
        </span>
      </span>

      <h2 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">
        Latest Blogs & News
      </h2>

      <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-violet-200 mb-10">
        Our AI writing tool is designed to empower you with exceptional
        writing capabilities, making the writing process more efficient,
        accurate, and enjoyable.
      </p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-950 rounded-2xl overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src="./images/blog-01.png"
              alt="Blog 1"
              className="transition-transform duration-700 group-hover:scale-110 w-full h-56 object-cover"
            />
          </div>
          <div className="text-left p-6">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="text-sm text-violet-300 border border-gray-600 rounded-xl py-[3px] px-3 hover:text-white hover:border-white/30 transition">
                Design
              </span>
              <span className="text-sm text-violet-300 border border-gray-600 rounded-full py-[3px] px-3 hover:text-white hover:border-white/30 transition">
                Engineering
              </span>
            </div>

            <h3 className="text-white font-semibold text-xl md:text-2xl hover:text-violet-300 transition">
              Revolution in Content Creation and Communication
            </h3>

            <p className="text-violet-200 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>

            <div className="flex items-center gap-4 mt-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <FaRegUser />
                <span>Hendry Jonson</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <SlCalender />
                <span>12 Mar, 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 rounded-2xl overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src="./images/blog-02.png"
              alt="Blog 2"
              className="transition-transform duration-700 group-hover:scale-110 w-full h-56 object-cover"
            />
          </div>
          <div className="text-left p-6">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="text-sm text-violet-300 border border-gray-600 rounded-xl py-[3px] px-3 hover:text-white hover:border-white/30 transition">
                Development
              </span>
              <span className="text-sm text-violet-300 border border-gray-600 rounded-full py-[3px] px-3 hover:text-white hover:border-white/30 transition">
                Security
              </span>
            </div>

            <h3 className="text-white font-semibold text-xl md:text-2xl hover:text-violet-300 transition">
              How AI Writing Tools Empower Writers to Speed Up Their Writing
            </h3>

            <p className="text-violet-200 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>

            <div className="flex items-center gap-4 mt-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <FaRegUser />
                <span>Hendry Jonson</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <SlCalender />
                <span>12 Mar, 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 rounded-2xl overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src="./images/blog-03.png"
              alt="Blog 3"
              className="transition-transform duration-700 group-hover:scale-110 w-full h-56 object-cover"
            />
          </div>
          <div className="text-left p-6">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="text-sm text-violet-300 border border-gray-600 rounded-xl py-[3px] px-3 hover:text-white hover:border-white/30 transition">
                Products
              </span>
              <span className="text-sm text-violet-300 border border-gray-600 rounded-full py-[3px] px-3 hover:text-white hover:border-white/30 transition">
                Blog & Articles
              </span>
            </div>

            <h3 className="text-white font-semibold text-xl md:text-2xl hover:text-violet-300 transition">
              Revolution in Content Creation and Communication
            </h3>

            <p className="text-violet-200 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>

            <div className="flex items-center gap-4 mt-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <FaRegUser />
                <span>Hendry Jonson</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <SlCalender />
                <span>12 Mar, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
