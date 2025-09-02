import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-16">
        
        {/* Logo */}
        <div className="flex items-center h-16 pl-0">
          <img
            src={logo}
            alt="Company Logo"
            className="h-28 w-auto object-contain -ml-1"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-[#0F172A] font-medium">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#0F172A] text-white px-4 py-2 rounded hover:bg-gray-800 transition font-semibold">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0F172A] focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white text-[#0F172A] flex flex-col items-center space-y-4 p-4 shadow-md">
          <li>
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <button className="bg-[#0F172A] text-white px-4 py-2 rounded hover:bg-gray-800 transition font-semibold">
              Get in Touch
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
