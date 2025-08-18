import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'কোর্স', path: '/courses' },
    { name: 'লাইব্রেরি', path: '/library' },
    { name: 'প্রশ্নব্যাংক', path: '/qb' },
    { name: 'জার্নাল', path: '/journal' },
    { name: 'ভর্তি', path: '/admission' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Aloron
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
            >
              লগ ইন
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-1 rounded bg-indigo-600 text-white text-center hover:bg-indigo-500 transition"
            >
              লগ ইন
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
