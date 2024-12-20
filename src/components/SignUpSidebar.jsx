import React, { useState } from "react";

const SignUpSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-neon-green text-white p-3 rounded-full hover:bg-white hover:text-neon-green transition duration-300"
      >
        {isOpen ? "Close" : "Sign Up"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white p-6 transition-transform duration-300 z-40 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-neon-green text-white py-2 rounded-md hover:bg-white hover:text-neon-green transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpSidebar;
