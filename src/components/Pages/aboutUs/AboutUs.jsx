import React from "react";
import { Link } from "react-router-dom";
import Features from "../../features/Features";
import Cards from "../../cards/Cards";
import AboutUsers from "../../AboutUsers/AboutUsers";
import Cards2 from "../../cards2/Cards2";
import UserData from "../../usersCards/UsersCards";
import { WiStars } from "react-icons/wi";
import ConfirmSection from "../../confirm/Confirm";
import UpdateSection from "../../update/UpdateSection";
import Footer from "../../footer/Footer";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-950 text-center mt-24 px-6 sm:px-8 lg:px-12 py-12 rounded-2xl shadow-lg">
      <h1 className="font-semibold text-white mb-4 text-3xl sm:text-4xl lg:text-5xl">
        About AI Tool
      </h1>

      <ul className="flex items-center justify-center gap-2 text-violet-200 text-base sm:text-lg mb-8">
        <li className="font-medium hover:text-white">
          <Link to="/home">Home</Link>
        </li>
        <li className="font-medium">/ About Us</li>
      </ul>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-16">
        <div className="w-full lg:w-1/2 text-left">
          <span className="font-semibold block mb-3 text-violet-500 text-lg">
            About Our App
          </span>

          <h2 className="text-white mb-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-snug">
            10,000+ Writers, Marketers, and Business Owners Love AI Tool.
          </h2>

          <p className="mb-8 text-base sm:text-lg text-gray-400 leading-relaxed">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable for everyone.
          </p>

          <a
            href="/home"
            className="inline-flex rounded-lg py-3 px-7 text-white font-medium bg-violet-600 hover:bg-violet-700 ease-in duration-300"
          >
            Start Writing – It’s Free
          </a>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 rounded-2xl p-6 sm:p-10">
            <img
              src="./images/about.svg"
              alt="About illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      <div className="mt-20 space-y-20">
        <Features />
        <Cards />
        <AboutUsers />

        <section className="max-w-5xl mx-auto text-center mt-10">
          <span className="mb-4 text-md inline-flex items-center gap-2 py-2 px-5 rounded-full border border-gray-600 text-violet-300">
            <WiStars className="text-2xl" />
            <span className="hero-subtitle-text">Wall of Love</span>
          </span>

          <h2 className="text-white mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our Users Say
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-violet-200 mb-10">
            Our AI writing tool empowers you to write efficiently and
            confidently. See what our users have to say.
          </p>

          <UserData />
        </section>

        
        <ConfirmSection />
        <UpdateSection />
        <Footer />
      </div>
    </div>
  );
}
