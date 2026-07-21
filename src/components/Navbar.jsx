import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            Reborn
          </h1>
          <p className="text-xs text-gray-500">
            Home Health Care Service
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <FaPhoneAlt />
            <span>+91 7829094405</span>
          </div>

          <Link
            to="/booking"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Book a Visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b hover:bg-gray-100"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b hover:bg-gray-100"
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b hover:bg-gray-100"
          >
            Contact
          </Link>

          <div className="px-6 py-4 border-b">
            <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
              <FaPhoneAlt />
              <span>+91 7829094405</span>
            </div>

            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;