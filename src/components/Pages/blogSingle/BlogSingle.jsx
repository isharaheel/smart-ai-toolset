import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Footer from "../../footer/Footer";

export default function BlogSinglePage() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-950 text-center mt-10 sm:mt-20 px-4 sm:px-8 lg:px-16 py-10 rounded-none sm:rounded-2xl shadow-lg">
        <h1 className="font-bold text-white mb-5 text-3xl sm:text-4xl md:text-5xl">
          Blog Single
        </h1>

        <ul className="flex flex-wrap items-center justify-center gap-2 text-violet-200 text-sm sm:text-base">
          <li className="font-medium hover:text-violet-400 transition-colors">
            <Link to="/home">Home</Link>
          </li>
          <li className="font-medium">/ Blog Single</li>
        </ul>

        <div className="max-w-5xl mx-auto mt-10">
          <img
            src="./images/blog-big.png"
            alt="Blog main"
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </div>

        <div className="max-w-5xl mx-auto mt-6 flex flex-wrap justify-between items-center gap-6 px-2 text-sm text-gray-400">
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <span className="border border-gray-600 hover:border-gray-400 text-gray-200 px-4 py-1 rounded-xl cursor-pointer hover:text-white transition-all">
              Products
            </span>
            <span className="border border-gray-600 hover:border-gray-400 text-gray-200 px-4 py-1 rounded-xl cursor-pointer hover:text-white transition-all">
              Blogs & Articles
            </span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6">
            <span className="flex items-center gap-2 hover:text-gray-200 transition-all">
              <FaRegUser /> Piter Mecraow
            </span>
            <span className="flex items-center gap-2 hover:text-gray-200 transition-all">
              <SlCalender /> 10 Jan, 2025
            </span>
          </div>
        </div>

        <div className="max-w-4xl text-left mx-auto mt-10 space-y-6 px-2">
          <h2 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl leading-snug">
            Revolution in Content Creation and Communication
          </h2>

          <p className="text-violet-200 text-base sm:text-lg leading-relaxed">
            The inability to write. Everyone has been there. Even the most
            seasoned and well-versed writers and content producers endure mental
            gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor.
          </p>

          <p className="text-violet-200 text-base sm:text-lg leading-relaxed">
            A healthy lifestyle, which includes a balanced diet, regular
            exercise, and proper sleep patterns, plays a significant role in
            determining overall well-being.
          </p>

          <h3 className="font-extrabold text-xl sm:text-2xl text-white">
            How I churn out 2000 words in 20 minutes
          </h3>

          <p className="text-violet-200 text-base sm:text-lg leading-relaxed">
            Everyone has been there. Even the most seasoned and well-versed
            writers and content producers endure mental gaps.
          </p>

          <p className="text-violet-200 text-base sm:text-lg leading-relaxed">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 text-violet-200 text-xl">
            <p className="text-base sm:text-lg">Share This Post:</p>
            <FaFacebook className="hover:text-gray-100 cursor-pointer" />
            <FaTwitter className="hover:text-gray-100 cursor-pointer" />
            <FaGithub className="hover:text-gray-100 cursor-pointer" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 text-left px-2">
          <h2 className="font-semibold text-white text-2xl sm:text-3xl mb-8">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: "./images/blog-01.png",
                title: "Revolution in Content Creation and Communication",
                tags: ["Design", "Engineering"],
              },
              {
                img: "./images/blog-02.png",
                title:
                  "How AI Writing Tools Empower Writers to Speed up their Writing",
                tags: ["Development", "Security"],
              },
              {
                img: "./images/blog-03.png",
                title: "The Future of AI in Creative Storytelling",
                tags: ["Products", "Blog & Articles"],
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-3 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm text-violet-300 border border-gray-600 hover:border-violet-400 px-3 py-1 rounded-full cursor-pointer transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 hover:text-violet-300 transition-all cursor-pointer">
                    {article.title}
                  </h3>

                  <p className="text-sm sm:text-base text-violet-200 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore...
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-2 hover:text-white transition-all">
                      <FaRegUser /> Hendry Jonson
                    </span>
                    <span className="flex items-center gap-2 hover:text-white transition-all">
                      <SlCalender /> 12 Mar, 2025
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-left mt-20 border-t border-gray-800 pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
