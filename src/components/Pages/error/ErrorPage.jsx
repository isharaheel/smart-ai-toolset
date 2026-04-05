import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";

export default function ErrorPage() {
    return(
        <>
        
          <div className="w-350 h-200 bg-gray-950 mx-auto text-center mt-30 rounded-2xl shadow-lg">
      <h1 className="font-semibold text-white mb-5 text-5xl">
        Error Page
      </h1>

   <ul className="flex items-center justify-center gap-2 text-violet-200">
          <li className="font-medium"><Link to='/home'>Home</Link></li>
          <li className="font-medium">/ Error Page</li>
        </ul>


<div className="w-300 mx-auto mt-30">
    <div >
        <img src="./images/error.svg" className="mx-auto"/>
    </div>
    <h2 class="mb-5 font-bold text-white text-4xl mt-10">
          Oops! Page Not Found.
        </h2>
        <p class="font-medium mb-9 text-violet-200 text-center w-150 mx-auto">
          The page you are looking for is not available or has been moved. Try
          a different page or go to homepage with the button below.
        </p>
        <Link to='/home' class="bg-[rgb(133,73,238)] inline-flex rounded-lg py-3 px-8 text-white font-medium ease-in duration-300 hover:opacity-80">
          Go To Home
        </Link>
</div>

<div className="text-left mt-40">
    <Footer/>
</div>

        </div>
        
        </>
    )
}