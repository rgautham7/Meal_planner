"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleDarkMode = () => {    
    setDarkMode(!darkMode);

    if (typeof document !== "undefined") {
      if (!darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);

  return (
    <nav className="fixed top-0 left-0 w-full h-18 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and text */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/images/logo.png" alt="PlatePerfect Logo" className="w-10 h-10" />
            <span className="ml-2 text-3xl font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">PlatePerfect</span>
          </div>

          {/* Navigation items */}
          <div className="flex-grow flex justify-center">
            <div className="flex items-baseline space-x-8">
              {['Home', 'About', 'Testimonials'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-lg font-semibold transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Toggle button and Profile icon */}
          <div className="flex items-center space-x-4">
            <motion.button
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-black dark:text-white transition-transform"
              onClick={toggleDarkMode}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </motion.button>

            <motion.div
              className="relative"
              onClick={toggleProfileMenu}
            >
              <button className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-14 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-48">
                  <ul className="p-2 text-gray-700 dark:text-gray-300">
                    <li className="px-4 py-2 font-medium hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                      Profile
                    </li>
                    <li className="px-4 py-2 font-medium hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                      Terms
                    </li>
                    <li className="px-4 py-2 font-medium hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                      Updates
                    </li>
                    <li className="px-4 py-2 font-medium hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                      Settings
                    </li>
                    <hr className="my-2 border-gray-200 dark:border-gray-600" />
                    <li className="px-4 py-2 text-red-500 hover:text-red-700 dark:hover:text-red-700 transition-colors cursor-pointer">
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};
