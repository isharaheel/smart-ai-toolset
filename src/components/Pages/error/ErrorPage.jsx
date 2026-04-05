import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col px-4"> {/* Added padding for mobile edges */}
            
            {/* Header Box - Changed fixed width to max-width + w-full */}
            <div className="max-w-[350px] w-full min-h-[200px] bg-gray-950 mx-auto text-center mt-10 md:mt-30 py-10 rounded-2xl shadow-lg">
                <h1 className="font-semibold text-white mb-5 text-4xl md:text-5xl">
                    Error Page
                </h1>
                <ul className="flex items-center justify-center gap-2 text-violet-200">
                    <li className="font-medium">
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className="font-medium">/ Error Page</li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[300px] w-full mx-auto mt-10 md:mt-30 text-center">
                <div>
                    {/* Removed the dot from path for GitHub Pages compatibility */}
                    <img src="images/error.svg" alt="Error Illustration" className="mx-auto w-full h-auto" />
                </div>
                
                <h2 className="mb-5 font-bold text-white text-3xl md:text-4xl mt-10">
                    Oops! Page Not Found.
                </h2>
                
                {/* Paragraph - Changed fixed width to w-full */}
                <p className="font-medium mb-9 text-violet-200 text-center w-full mx-auto leading-relaxed">
                    The page you are looking for is not available or has been moved. Try
                    a different page or go to homepage with the button below.
                </p>
                
                <Link to='/home' className="bg-[rgb(133,73,238)] inline-flex rounded-lg py-3 px-8 text-white font-medium ease-in duration-300 hover:opacity-80">
                    Go To Home
                </Link>
            </div>

            <div className="text-left mt-20 md:mt-40 mt-auto">
                <Footer />
            </div>
        </div>
    );
}