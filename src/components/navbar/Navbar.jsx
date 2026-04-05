import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";
import AboutPage from "../Pages/aboutUs/AboutUs";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 backdrop-blur-md shadow-lg transition-all duration-300 main">

      <div className="w-300 mx-auto flex justify-between items-center h-15 px-4 main-nav">
        
        <div>
          <img src="./images/logo.svg" alt="Logo" className="w-35" />
        </div>

        <div className="md:flex hidden w-150 h-auto text-lg justify-between font-sans">
          <Link to='/home'>
          <p className="text-orange-50 hover:inset-shadow-sm inset-shadow-indigo-500 transition-all duration-300 w-30 h-7 text-center rounded-lg cursor-pointer">
            Home
          </p>
          </Link>
          
         <a href="#features">
           <p className="text-orange-50 hover:inset-shadow-sm inset-shadow-indigo-500 transition-all duration-300 w-30 h-7 text-center rounded-lg cursor-pointer">
            Features
          </p>
         </a>
        
        <a href="#pricing">
           <p className="text-orange-50 hover:inset-shadow-sm inset-shadow-indigo-500 transition-all duration-300 w-30 h-7 text-center rounded-lg cursor-pointer">
            Pricing
          </p>
         </a>
          {/* <p className="text-orange-50 hover:inset-shadow-sm inset-shadow-indigo-500 transition-all duration-300 w-30 h-7 text-center rounded-lg cursor-pointer">
            Pages
          </p> */}
{/*  */}


<Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full border-none items-center text-orange-50 hover:inset-shadow-sm inset-shadow-indigo-500 transition-all duration-300 px-5 h-7 text-center rounded-lg cursor-pointer">
        Options
        <ChevronDownIcon aria-hidden="true" className="mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-gray-900 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
           <MenuItem>
      <Link
        to="/about"
        className="text-center block px-4 py-2 text-sm text-gray-400 data-focus:bg-gray-600 data-focus:text-violet-200 data-focus:outline-hidden"
      >
        About Us
      </Link>
    </MenuItem>
              <MenuItem>
      <Link
        to="/pricing"
        className="text-center block px-4 py-2 text-sm text-gray-400 data-focus:bg-gray-600 data-focus:text-violet-200 data-focus:outline-hidden"
      >
        Pricing Table
      </Link>
    </MenuItem>
            <MenuItem>
      <Link
        to="/BlogGrid"
        className="text-center block px-4 py-2 text-sm text-gray-400 data-focus:bg-gray-600 data-focus:text-violet-200 data-focus:outline-hidden"
      >
        Blog Grid
      </Link>
    </MenuItem>
          <MenuItem>
      <Link
        to="/BlogSingle"
        className="text-center block px-4 py-2 text-sm text-gray-400 data-focus:bg-gray-600 data-focus:text-violet-200 data-focus:outline-hidden"
      >
        Blog Single
      </Link>
    </MenuItem>
             <MenuItem>
      <Link
        to="/SignIn"
        className="text-center block px-4 py-2 text-sm text-gray-400 data-focus:bg-gray-600 data-focus:text-violet-200 data-focus:outline-hidden"
      >
        Sign In
      </Link>
    </MenuItem>
          <MenuItem>
      <Link
        to="/SignUp"
        className="text-center block px-4 py-2 text-sm text-gray-400 data-focus:bg-gray-600 data-focus:text-violet-200 data-focus:outline-hidden"
      >
        Sign Up
      </Link>
    </MenuItem>
           <MenuItem>
      <Link
        to="/error"
        className="text-center block px-4 py-2 text-sm text-gray-400 data-focus:bg-gray-600 data-focus:text-violet-200 data-focus:outline-hidden"
      >
        Error Page
      </Link>
    </MenuItem>
        </div>
      </MenuItems>
    </Menu>



{/*  */}
          <a href="#support">
           <p className="text-orange-50 hover:inset-shadow-sm inset-shadow-indigo-500 transition-all duration-300 w-30 h-7 text-center rounded-lg cursor-pointer">
            Support
          </p>
         </a>
        </div>

      
        <div className="min-[901px]:flex hidden w-50 h-auto font-sans justify-evenly">
          <Link to='/signIn'>
          <button className="w-20 text-lg text-orange-50">Sign in</button>
          </Link>
          <Link to='/signUp'>
          <button className="w-25 text-lg flex justify-center items-center text-orange-50 inset-shadow-sm inset-shadow-indigo-500 rounded-sm">
            Signup <FaArrowRight className="mt-1 ml-1" />
          </button>
          </Link>
        </div>

        
        <button
          className="max-[900px]:block hidden text-orange-50 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      </div>

      {open && (
        <div className="md:flex hidden flex-col items-center bg-gradient-to-r from-black via-indigo-950 to-black py-4 gap-3">
          <p className="text-orange-50 cursor-pointer">Home</p>
          <p className="text-orange-50 cursor-pointer">Features</p>
          <p className="text-orange-50 cursor-pointer">Pricing</p>
          <p className="text-orange-50 cursor-pointer">Pages</p>
          <p className="text-orange-50 cursor-pointer">Support</p>

          <div className="flex flex-col gap-2 mt-2">
            <button className="w-20 text-sm text-orange-50">Sign in</button>
            <button className="w-20 text-sm flex justify-center items-center text-orange-50 inset-shadow-sm inset-shadow-indigo-500 rounded-sm">
              Signup <FaArrowRight className="mt-1 ml-1" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
