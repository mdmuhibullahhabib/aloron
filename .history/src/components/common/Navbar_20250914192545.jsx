import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../../Provider/LanguageProvider';
import { useTheme } from '../../Provider/ThemeProvider';
import { translations } from '../../i18n';
import useAuth from '../../hooks/useAuth';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const location = useLocation();

  console.log(user)

// Example: current user role (you can get it from context/auth)
const role = "admin"; // admin | student | teacher

const navLinks = [
  { name: 'প্রশ্নব্যাংক', path: '/question-bank/archive' },
  { name: 'শপ', path: '/shop' },
  { name: 'পরীক্ষা', path: '/exams' },
  { name: 'কোর্স', path: '/courses' },
  { name: 'জার্নাল', path: '/journal' },
  { name: 'Blog', path: '/blog' },
  { 
    name: 'Dashboard', 
    path:
      role === 'admin'
        ? '/dashboard/reports'
        : role === 'student'
        ? '/dashboard/enrolled-courses'
        : '/dashboard/my-courses'
  },
];


  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logOut()
  }

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            আলোড়ন
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded font-medium transition
                  ${location.pathname === link.path
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* cart */}
            <Link 
            to={"/cart"}
            >
            <button className="btn btn-sm ml-2">
              <FaShoppingCart></FaShoppingCart>
            </button>
            </Link>
            {/* Language & Theme Buttons */}
            <button onClick={toggleLanguage} className="btn btn-sm ml-2">
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>
            <button onClick={toggleTheme} className="btn btn-sm ml-2">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>

            {user && user?.email ? (
              <button
                onClick={handleLogout}
                className="block px-3 py-2 mt-1 rounded bg-red-600 text-white text-center hover:bg-red-500 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/signin"
                className="block px-3 py-2 mt-1 rounded bg-indigo-600 text-white text-center hover:bg-indigo-500 transition"
              >
                {t.login}
              </Link>
            )}
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
        <div className="md:hidden bg-base-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded transition text-center
                  ${location.pathname === link.path
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Language & Theme Buttons */}
            {/* <button
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="block w-full px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 text-center mt-2"
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>
            <button
              onClick={() => { toggleTheme(); setIsOpen(false); }}
              className="block w-full px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 text-center mt-1"
            >
              {theme === 'light' ? 'Dark' : 'Light'}
            </button> */}

            {user && user?.email ? (
              <button
                onClick={handleLogout}
                className="block px-3 py-2 mt-1 rounded bg-red-600 text-white text-center hover:bg-red-500 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/signin"
                className="block px-3 py-2 mt-1 rounded bg-indigo-600 text-white text-center hover:bg-indigo-500 transition"
              >
                {t.login}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
