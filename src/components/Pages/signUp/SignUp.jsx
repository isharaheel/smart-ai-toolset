import React from "react";
import { Link } from "react-router-dom";
import { IoLogoApple } from "react-icons/io5";
import InputField from "../../InputField/InputField";
import Footer from "../../footer/Footer";

export default function SignUpPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto text-center mt-20 p-6 bg-gray-950 rounded-2xl shadow-lg">
        <h1 className="font-semibold text-white mb-5 text-4xl md:text-5xl">
          Sign Up
        </h1>

        <ul className="flex flex-wrap items-center justify-center gap-2 text-violet-200 text-sm md:text-base">
          <li className="font-medium">
            <Link to="/home" className="hover:text-white">
              Home
            </Link>
          </li>
          <li className="font-medium">/ Sign Up</li>
        </ul>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-8 w-full px-4 md:px-10">
          <div className="flex-1 w-full bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 border border-gray-800 rounded-xl p-6 md:p-10 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-10 leading-tight">
              Unlock the Power of Writing Tool
            </h2>
            <img
              src="./images/sigin.svg"
              alt="Sign up illustration"
              className="w-full max-w-[400px] mx-auto"
            />
          </div>

          <div className="flex-1 w-full border border-gray-800 rounded-xl p-6 md:p-10 bg-gray-950">
            <button className="w-full py-3 border border-gray-600 rounded-lg flex items-center justify-center gap-4 hover:border-violet-600 ease-out duration-300 cursor-pointer">
              <img src="./images/googleLogo.png" alt="Google" className="w-6 h-6" />
              <p className="text-white text-base md:text-lg">Sign up with Google</p>
            </button>

            <button className="w-full py-3 mt-4 border border-gray-600 rounded-lg flex items-center justify-center gap-4 hover:border-violet-600 ease-out duration-300 cursor-pointer">
              <IoLogoApple className="text-white text-2xl" />
              <p className="text-white text-base md:text-lg">Sign up with Apple</p>
            </button>

            <p className="text-center text-sm md:text-base text-violet-300 mt-6 mb-5">
              Or sign up with email
            </p>

            <div className="space-y-5">
              <InputField
                className="w-full"
                placeholder="Enter Your Email"
                type="email"
              />
              <InputField
                className="w-full"
                placeholder="Password"
                type="password"
              />
              <InputField
                className="w-full"
                placeholder="Confirm Password"
                type="password"
              />
            </div>

            <button
              type="submit"
              className="bg-[rgb(133,73,238)] w-full rounded-lg py-3 mt-8 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Sign Up with AI Tool
            </button>

            <div className="flex justify-center items-center gap-2 mt-6 text-sm md:text-base">
              <p className="text-gray-400">Already have an account?</p>
              <Link to="/signIn" className="text-violet-300 hover:underline">
                Sign In here
              </Link>
            </div>
          </div>
        </div>

        
        <div className="text-left mt-16">
          <Footer />
        </div>
      </div>
    </>
  );
}
