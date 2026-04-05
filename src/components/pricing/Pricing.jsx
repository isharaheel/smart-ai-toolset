import React from "react";
import { WiStars } from "react-icons/wi";
import { FaArrowRight } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    { title: "Starter", price: "$10", icon: "./images/pricing-icon-01.svg" },
    { title: "Medium", price: "$59", icon: "./images/pricing-icon-02.svg" },
    { title: "Business", price: "$289", icon: "./images/pricing-icon-03.svg" },
  ];

  const features = [
    "Subscription with levels",
    "Advanced features included",
    "Shared workspaces & tools",
    "Premium versions functionality",
    "Customizing the outputs",
    "Priority customer support",
  ];







  
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-950 px-6 py-20 sm:px-10 overflow-hidden">
      <div className="hidden lg:block absolute -top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-black shadow-[0_-120px_100px_#451E5E] opacity-70 blur-3xl"></div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-5 bg-gray-900 text-violet-300 border border-gray-800 rounded-full">
          <WiStars className="text-2xl" />
          <span>Get access</span>
        </span>

        <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mt-4 mb-4">
          Our Pricing Plan
        </h2>
        <p className="text-violet-300 text-base sm:text-lg leading-relaxed">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto relative z-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-2xl bg-gradient-to-b from-violet-950 via-gray-950 to-gray-900 py-10 px-8 flex flex-col items-start transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex w-full justify-between items-center mb-6">
              <p className="text-white font-bold text-2xl sm:text-3xl">
                {plan.title}
              </p>
              <img src={plan.icon} alt={plan.title} className="w-12 h-12" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-bold text-violet-300 text-4xl sm:text-5xl">
                {plan.price}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                /month <br />
                (billed annually)
              </p>
            </div>

            <div className="w-full h-px bg-gray-800 my-6" />

            <ul className="flex flex-col gap-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 text-violet-300 text-sm border border-gray-500 rounded-full flex items-center justify-center">
                    <FaArrowRight />
                  </div>
                  <span className="text-violet-200 text-sm sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-auto w-full flex items-center justify-center gap-2 text-lg text-violet-200 p-3 border border-gray-400 rounded-xl transition-all duration-300 hover:bg-violet-800/20"
            >
              Get the plan <FaArrowRight />
            </a>
            <p className="mt-3 text-center text-violet-300 text-sm">
              No extra hidden charge
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
