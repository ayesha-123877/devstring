import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="bg-[#0B1120] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
          <a href="#about" className="mb-2 hover:text-blue-400 transition-colors">About Us</a>
          <a href="#services" className="mb-2 hover:text-blue-400 transition-colors">Services</a>
          <a href="#portfolio" className="mb-2 hover:text-blue-400 transition-colors">Portfolio</a>
          <a href="#contact" className="mb-2 hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact</h3>
          <p className="mb-2"> contact@websters.tech</p>
          <p className="mb-2">  03431854867</p>
          <p className="mb-4"> Faisalabad, Pakistan</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition transform hover:scale-110"
            >
              <FaFacebookF size={18} />
            </a>
          
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition transform hover:scale-110"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Websters.tech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
