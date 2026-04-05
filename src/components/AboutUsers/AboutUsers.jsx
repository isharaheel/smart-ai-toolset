import React from "react";
import { WiStars } from "react-icons/wi";
import { teamMembers } from "./teamMembers/TeamData";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutUsers() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-20 px-6 sm:px-8 lg:px-12 text-center">
        <span className="mb-4 font-medium text-violet-300 text-sm sm:text-md border border-gray-800 inline-flex items-center gap-2 py-2 px-5 rounded-full">
          <WiStars className="text-2xl" />
          <span className="hero-subtitle-text">Meet Our Team</span>
        </span>

        <h2 className="text-white mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          Our Dynamic Team
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-violet-200 font-sans">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-12 max-w-6xl mx-auto mt-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-4 object-cover shadow-lg ring-0 hover:ring-4 hover:ring-violet-400 transition-all duration-300"
              />

              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                {member.role}
              </p>

              <div className="flex justify-center gap-5 text-gray-400 text-lg">
                <a href="#" className="hover:text-violet-300 transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-violet-300 transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-violet-300 transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
