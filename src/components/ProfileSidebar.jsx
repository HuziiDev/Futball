import React from 'react';

const ProfileSidebar = ({ isProfileOpen, toggleProfile }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-all duration-500 ${
        isProfileOpen ? 'translate-x-0' : 'translate-x-full'
      } w-80`}
    >
      <div  className="flex flex-col items-center justify-center p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Log in</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border-2 border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border-2 border-gray-300 rounded-md"
        />
        <button className="w-full p-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
          Log In
        </button>
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
      <button
        className="absolute top-4 right-4 text-3xl text-gray-800 hover:text-blue-600"
        onClick={toggleProfile}
      >
        &times; {/* Close icon */}
      </button>
    </div>
  );
};

export default ProfileSidebar;
