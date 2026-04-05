import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Container: Added w-full and kept your exact classes */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 backdrop-blur-md shadow-lg transition-all duration-300 main">
        
        {/* Changed from fixed width to max-width to prevent overflow */}
        <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center h-16 px-6 main-nav">
          
          <div className="flex-shrink-0">
            <img src="images/logo.svg" alt="Logo" className="w-35" />
          </div>

          {/* Desktop Nav - lg:flex hidden ensures this disappears on mobile */}
          <div className="lg:flex hidden items-center justify-between w-full max-w-[600px] text-lg font-sans ml-10">
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

            <Menu as="div" className="relative inline-block">
              <MenuButton className="inline-flex w-full border-none items-center text-orange-50 hover:inset-shadow-sm inset-shadow-indigo-500 transition-all duration-300 px-5 h-7 text-center rounded-lg cursor-pointer">
                Options
                <ChevronDownIcon aria-hidden="true" className="mr-1 size-5 text-gray-400" />
              </MenuButton>

              <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-gray-900 shadow-lg transition data-closed:scale-95 data-closed:opacity-0">
                <div className="py-1">
                  <MenuItem><Link to="/about" className="text-center block px-4 py-2 text-sm text-gray-400 hover:text-violet-200">About Us</Link></MenuItem>
                  <MenuItem><Link to="/pricing" className="text-center block px-4 py-2 text-sm text-gray-400 hover:text-violet-200">Pricing Table</Link></MenuItem>
                  <MenuItem><Link to="/BlogGrid" className="text-center block px-4 py-2 text-sm text-gray-400 hover:text-violet-200">Blog Grid</Link></MenuItem>
                  <MenuItem><Link to="/SignIn" className="text-center block px-4 py-2 text-sm text-gray-400 hover:text-violet-200">Sign In</Link></MenuItem>
                  <MenuItem><Link to="/SignUp" className="text-center block px-4 py-2 text-sm text-gray-400 hover:text-violet-200">Sign Up</Link></MenuItem>
                  <MenuItem><Link to="/error" className="text-center block px-4 py-2 text-sm text-gray-400 hover:text-violet-200">Error Page</Link></MenuItem>
                </div>
              </MenuItems>
            </Menu>

            <a href="#support">
              <p className="text-orange-50 hover:inset-shadow-sm inset-shadow-indigo-500 transition-all duration-300 w-30 h-7 text-center rounded-lg cursor-pointer">
                Support
              </p>
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="lg:flex hidden items-center gap-4">
            <Link to='/signIn'><button className="text-lg text-orange-50">Sign in</button></Link>
            <Link to='/signUp'>
              <button className="px-4 py-1 text-lg flex justify-center items-center text-orange-50 inset-shadow-sm inset-shadow-indigo-500 rounded-sm">
                Signup <FaArrowRight className="mt-1 ml-1" />
              </button>
            </Link>
          </div>

          {/* Toggle Button */}
          <button className="lg:hidden block text-orange-50 text-2xl" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed to the top and full width */}
      {open && (
        <div className="fixed top-16 left-0 w-full h-screen bg-gray-950/95 backdrop-blur-xl flex flex-col items-center py-10 gap-8 z-40 lg:hidden overflow-y-auto">
          <Link to='/home' onClick={() => setOpen(false)} className="text-orange-50 text-2xl">Home</Link>
          <a href="#features" onClick={() => setOpen(false)} className="text-orange-50 text-2xl">Features</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="text-orange-50 text-2xl">Pricing</a>
          <Link to="/about" onClick={() => setOpen(false)} className="text-orange-50 text-2xl">About Us</Link>
          
          <div className="flex flex-col gap-6 mt-4 items-center w-full px-10">
            <Link to='/signIn' onClick={() => setOpen(false)} className="text-2xl text-orange-50">Sign in</Link>
            <Link to='/signUp' onClick={() => setOpen(false)} className="w-full max-w-[250px]">
              <button className="w-full py-4 text-2xl flex justify-center items-center text-orange-50 inset-shadow-sm inset-shadow-indigo-500 rounded-sm">
                Signup <FaArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}