import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  MdOutlineDescription,
  MdOutlineScience,
  MdOutlineQuestionAnswer,
} from 'react-icons/md';
import { FaStar, FaUsers } from 'react-icons/fa';

const QuestionBank = () => {
  // Sidebar navigation items with component references
  const navItems = [
    { name: 'দ্রুত প্র্যাকটিস', icon: <MdOutlineQuestionAnswer className="w-6 h-6" />, path: 'practice' },
    { name: 'কমিউনিটি', icon: <FaUsers className="w-6 h-6" />, path: 'community' },
    { name: 'আর্কাইভ', icon: <MdOutlineDescription className="w-6 h-6" />, path: 'archive' },
    { name: 'নতুন আইকন', icon: <FaStar className="w-6 h-6" />, path: 'new-icon' },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen font-sans bg-gray-100 text-gray-800">

      {/* --- Sidebar --- */}
      <aside className="hidden lg:flex flex-col lgw-64 bg-white p-6 shadow-md rounded-r-lg">
        {/* Logo or App Name */}
        <div className="flex items-center mb-10">
          <span className="text-xl font-bold">QuestionBank</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'hover:bg-gray-100'
                    }`
                  }
                >
                  {item.icon}
                  <span className="text-lg">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sign Up Button */}
        <div className="mt-auto">
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg">
            Sign Up
          </button>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default QuestionBank;
