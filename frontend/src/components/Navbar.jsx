import { Link } from "react-scroll";
import logo from "../assets/images/logo.jpeg";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172A] z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-14 w-auto rounded" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-[#FACC15]">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-[#FACC15]">
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-[#FACC15]">
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-[#FACC15]">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-[#FACC15]">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#FACC15] text-[#0F172A] px-4 py-2 rounded hover:bg-[#1E3A8A] hover:text-white transition font-semibold">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0F172A] text-white flex flex-col items-center space-y-4 p-4 shadow-md">
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li>
            <button className="bg-[#FACC15] text-[#0F172A] px-4 py-2 rounded hover:bg-[#1E3A8A] hover:text-white transition font-semibold">
              Get in Touch
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

