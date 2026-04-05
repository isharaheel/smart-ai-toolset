import React from "react";
import InputField from "../InputField/InputField";
import Button from "../buttons/buttons";

export default function UpdateSection() {
  return (
    <>
      <div className="w-full bg-gray-950 py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mt-20 max-w-6xl mx-auto rounded-2xl">
       
        <div className="text-center md:text-left max-w-md">
          <h1 className="font-semibold text-white text-2xl sm:text-3xl mb-2">
            News & Update
          </h1>
          <p className="text-base sm:text-lg text-violet-200">
            Keep up to date with everything about our tool
          </p>
        </div>

       
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto">
          <InputField
            type="email"
            placeholder="Enter your Email"
            className="w-full sm:w-72 bg-white/[0.05] border border-gray-600 rounded-lg py-3 px-4 text-gray-300 focus:border-violet-400 outline-none transition"
          />
          <Button
            className="w-full sm:w-auto inset-ring ring-4 ring-violet-300 text-white font-medium py-3 px-6 rounded-lg"
            text="Subscribe"
          />
        </div>
      </div>

      
      <div className="w-11/12 md:w-3/4 h-[1px] bg-gray-800 mx-auto mt-10 rounded-full"></div>
    </>
  );
}
