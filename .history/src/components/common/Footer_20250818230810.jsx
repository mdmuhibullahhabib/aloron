import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-500 mb-3">EduJournal</h2>
            <p className="text-gray-400">
              Learn, innovate and share your knowledge. A platform for students and innovators.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link to="/library" className="hover:text-white">Library</Link></li>
              <li><Link to="/journal" className="hover:text-white">Journal</Link></li>
              <li><Link to="/admission" className="hover:text-white">Admission</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/ssc" className="hover:text-white">SSC</Link></li>
              <li><Link to="/courses/medical" className="hover:text-white">Medical Admission</Link></li>
              <li><Link to="/courses/engineering" className="hover:text-white">Engineering Admission</Link></li>
              <li><Link to="/courses/others" className="hover:text-white">Others</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <p className="text-gray-400 mb-3">Subscribe for latest updates</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none flex-1"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">&copy; {new Date().getFullYear()} EduJournal. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
