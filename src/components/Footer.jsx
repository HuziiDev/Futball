import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Get in Touch */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter to stay updated with our latest news and offers.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3  border-neon-green rounded-full focus:outline-none bg-black border-2 border-white"
            />
            <button className="absolute right-1 top-1 bg-neon-green  bg-gray-700 py-2 px-4 rounded-full hover:bg-white hover:text-gray-700 transition duration-300">
              Submit
            </button>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-300 transition hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 transition hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-300 transition hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#privacy" className="text-gray-300 hover:text-white transition ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-gray-300  hover:text-white  transition ">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-300  hover:text-white transition ">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
  <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
  <div className="flex space-x-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transform transition duration-300 hover:scale-110">
      <FaFacebook size={24} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transform transition duration-300 hover:scale-110">
      <FaTwitter size={24} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transform transition duration-300 hover:scale-110">
      <FaInstagram size={24} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transform transition duration-300 hover:scale-110">
      <FaLinkedin size={24} />
    </a>
  </div>
</div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 text-center text-sm text-neon-green">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
