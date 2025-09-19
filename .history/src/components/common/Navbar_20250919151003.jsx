import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';
import { useLanguage } from '../../Provider/LanguageProvider';
import { useTheme } from '../../Provider/ThemeProvider';
import { translations } from '../../i18n';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const [isRole, isRoleLoading]

  const role = "admin";
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

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:scale-105 transform transition">
            আলোড়ন
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-white shadow-lg'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Cart */}
            <Link to="/cart" className="ml-2 relative group">
              <button className="btn btn-sm rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition transform group-hover:scale-105">
                <FaShoppingCart />
              </button>
            </Link>

            {/* Language */}
            <button
              onClick={toggleLanguage}
              className="btn btn-sm ml-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 transition transform hover:scale-105"
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="btn btn-sm ml-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 transition transform hover:scale-105 flex items-center gap-1"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>

            {/* Auth */}
            {user?.email ? (
              <button
                onClick={logOut}
                className="ml-2 px-4 py-2 rounded-full bg-red-400 hover:bg-red-500 text-white font-medium shadow-sm transition transform hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/signin"
                className="ml-2 px-4 py-2 rounded-full bg-indigo-400 hover:bg-indigo-500 text-white font-medium shadow-sm transition transform hover:scale-105"
              >
                {t.login}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200 focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg backdrop-blur-md transition-all duration-300 rounded-b-xl">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-full text-center font-medium transition-all duration-300
                    ${isActive
                      ? 'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-white shadow-md'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Auth */}
            {user?.email ? (
              <button
                onClick={() => { logOut(); setIsOpen(false); }}
                className="block w-full px-4 py-2 rounded-full bg-red-400 hover:bg-red-500 text-white font-medium mt-2 transition transform hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/signin"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 rounded-full bg-indigo-400 hover:bg-indigo-500 text-white font-medium mt-2 transition transform hover:scale-105"
              >
                {t.login}
              </Link>
            )}

            {/* Mobile Language & Theme */}
            <button
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="block w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 mt-2 transition transform hover:scale-105"
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>

            <button
              onClick={() => { toggleTheme(); setIsOpen(false); }}
              className="block w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 mt-2 transition transform hover:scale-105 flex items-center justify-center gap-1"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />} {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
