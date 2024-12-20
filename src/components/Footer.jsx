import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Get in Touch */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to stay updated with our latest news and offers.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3  border-neon-green rounded-full focus:outline-none bg-black border-2 border-white"
            />
            <button className="absolute right-1 top-1 bg-neon-green  bg-gray-700 py-2 px-4 rounded-full hover:bg-white hover:text-neon-green transition duration-300">
              Submit
            </button>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 transition">
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
              <a href="#privacy" className="text-gray-300 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-gray-300 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-300 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#facebook" className="hover:text-white transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="#twitter" className="hover:text-white transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#instagram" className="hover:text-white transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#linkedin" className="hover:text-white transition">
                LinkedIn
              </a>
            </li>
          </ul>
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
