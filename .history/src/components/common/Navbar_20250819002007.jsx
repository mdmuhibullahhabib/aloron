import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../../i18n';
// import { useTheme } from '../../context/ThemeContext';
// import { useLanguage } from '../../context/LanguageContext';
// import { translations } from '../i18n';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">Aloron</Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/question-bank" className="text-gray-700 hover:text-indigo-600">{t.questionBank}</Link>
            <Link to="/classes" className="text-gray-700 hover:text-indigo-600">{t.classes}</Link>
            <Link to="/exams" className="text-gray-700 hover:text-indigo-600">{t.exams}</Link>
            <Link to="/pdfs" className="text-gray-700 hover:text-indigo-600">{t.pdf}</Link>
            <Link to="/information" className="text-gray-700 hover:text-indigo-600">{t.information}</Link>
            <Link to="/courses" className="text-gray-700 hover:text-indigo-600">{t.courses}</Link>
            <Link to="/care" className="text-gray-700 hover:text-indigo-600">{t.care}</Link>
            <button onClick={toggleLanguage} className="btn btn-sm ml-2">
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>
            <button onClick={toggleTheme} className="btn btn-sm ml-2">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
            <Link to="/login" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
              {t.login}
            </Link>
            <Link to="/signup" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
              {t.signup}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
