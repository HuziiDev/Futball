import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaCartPlus, FaBars, FaTimes } from "react-icons/fa"; // Import icons

import SearchSidebar from './SearchSidebar';

const Navbar = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For Hamburger toggle

  
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Hamburger toggle

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-white p-4 flex items-center justify-between shadow-md">
        <div className="text-lg sm:text-2xl font-bold">Company Logo</div>

        {/* Links (visible on large screens) */}
        <div className="hidden md:flex space-x-6">
          <Link to='/' className="text-gray-800 hover:text-blue-600">Home</Link>
          <a href="/shop" className="text-gray-800 hover:text-blue-600">Shop</a>
          <a href="/contact" className="text-gray-800 hover:text-blue-600">Contact Us</a>
          <a href="/about" className="text-gray-800 hover:text-blue-600">About Us</a>
        </div>

        {/* Icons (search, profile, cart) */}
        <div className="flex items-center space-x-4 gap-2">
          {/* Search Icon */}
          <button onClick={toggleSearch} className="text-gray-800">
            <FaSearch className="text-lg sm:text-2xl" />
          </button>

          {/* Profile Icon */}
        <Link to='/signup' className="text-gray-800">
            <FaUser className="text-lg sm:text-2xl"  />
            </Link>

          {/* Cart Icon */}
          <button className="text-gray-800">
            <FaCartPlus className="text-lg sm:text-2xl"  />
          </button>

          {/* Hamburger Menu (visible on small screens) */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-800"
          >
            <FaBars  className="text-lg sm:text-2xl"  />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
          <div className="p-4">
            <button
              className="absolute top-4 right-4 text-3xl text-gray-800 hover:text-blue-600"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
            <a href="/" className="block py-2 text-gray-800 hover:text-blue-600">Home</a>
            <a href="/shop" className="block py-2 text-gray-800 hover:text-blue-600">Shop</a>
            <a href="/contact" className="block py-2 text-gray-800 hover:text-blue-600">Contact Us</a>
            <a href="/about" className="block py-2 text-gray-800 hover:text-blue-600">About Us</a>
          </div>
        </div>
      )}

    

      {/* Search Sidebar */}
      <SearchSidebar isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />

      {/* Hero Section or other content */}
     
    </div>
  );
};

export default Navbar;
