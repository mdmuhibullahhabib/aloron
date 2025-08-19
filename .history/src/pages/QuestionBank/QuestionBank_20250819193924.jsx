import React, { useState } from 'react';
import {
  MdOutlineLibraryBooks,
  MdOutlineDescription,
  MdOutlineScience,
  MdOutlineQuestionAnswer,
} from 'react-icons/md';
import { FaStar, FaUsers } from 'react-icons/fa';
import Archive from './Archive/Archive';
import Community from './Community/Community';
import { Outlet } from 'react-router-dom';


const QuestionBank = () => {
  const [currentPage, setCurrentPage] = useState('archive');

  // Sidebar navigation items with component references
  const navItems = [
    { name: 'হ্মক পরীক্ষা', icon: <MdOutlineQuestionAnswer className="w-6 h-6" />, component: 'mock-test' },
    { name: 'কমিউনিটি', icon: <FaUsers className="w-6 h-6" />, component: 'community' },
    { name: 'আর্কাইভ', icon: <MdOutlineDescription className="w-6 h-6" />, component: 'archive' },
    { name: 'ল্যাবরেটরি', icon: <MdOutlineScience className="w-6 h-6" />, component: 'laboratory' },
    { name: 'নতুন আইকন', icon: <FaStar className="w-6 h-6" />, component: 'new-icon' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'archive':
        return <Archive />;
      case 'community':
        return <Community />;
      // Add other cases for different components as needed
      default:
        return <Archive />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen font-sans bg-gray-100 text-gray-800">

      {/* --- Sidebar --- */}
      <aside className="hidden lg:flex flex-col w-64 bg-white p-6 shadow-md rounded-r-lg">
        {/* Logo or App Name */}
        <div className="flex items-center mb-10">
          <span className="text-xl font-bold">QuestionBank</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.component}>
                <a
                  href="#"
                  onClick={() => setCurrentPage(item.component)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                    item.component === currentPage
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span className="text-lg">{item.name}</span>
                </a>
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
        {/* {renderPage()} */}
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default QuestionBank;
