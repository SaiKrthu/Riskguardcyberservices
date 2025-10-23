import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/RGES1.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
// bg-gradient-to-r from-yellow-100 via-orange-400 to-orange-400
  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div >
            <Link to="/">
              <img 
                src={logo} 
                alt="RGES India Logo" 
                className="h-14 w-auto transition-transform transform hover:scale-110" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-black font-semibold hover:text-yellow-400 transition px-4 py-2 text-lg">
              Home
            </Link>
            <Link to="/services" className="text-black font-semibold hover:text-yellow-300 transition px-4 py-2 text-lg">
              Services
            </Link>
            <Link to="/about" className="text-black font-semibold hover:text-yellow-300 transition px-4 py-2 text-lg">
              About
            </Link>
            <Link to="/career" className="text-black font-semibold hover:text-yellow-300 transition px-4 py-2 text-lg">
              Career
            </Link>
            <Link to="/contact" className="text-black font-semibold hover:text-yellow-300 transition px-4 py-2 text-lg">
              Contact
            </Link>
            <Link to="/blog" className="text-black font-semibold hover:text-yellow-300 transition px-4 py-2 text-lg">
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-yellow-300 hover:bg-yellow-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block text-black hover:text-yellow-400 px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link to="/services" className="block text-black hover:text-yellow-400 px-3 py-2 text-base font-medium">
              Services
            </Link>
            <Link to="/about" className="block text-black hover:text-yellow-400 px-3 py-2 text-base font-medium">
              About Us
            </Link>
            <Link to="/contact" className="block text-black hover:text-yellow-400 px-3 py-2 text-base font-medium">
              Contact
            </Link>
            <Link to="/career" className="block text-black hover:text-yellow-400 px-3 py-2 text-base font-medium">
              Career
            </Link>
            <Link to="/blog" className="block text-black hover:text-yellow-400 px-3 py-2 text-base font-medium">
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;