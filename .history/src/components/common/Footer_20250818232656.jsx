import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-500 mb-3">Aloron</h2>
            <p className="text-gray-400">
              শিক্ষায়, চর্চায় ও সহযোগিতায়। শিক্ষার সবকিছু আলোরণ।
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
            <h3 className="text-lg font-semibold mb-3">কুইক লিংকস</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="hover:text-white">কোর্স</a></li>
              <li><a href="/library" className="hover:text-white">লাইব্রেরি</a></li>
              <li><a href="/qb" className="hover:text-white">প্রশ্নব্যাংক</a></li>
              <li><a href="/journal" className="hover:text-white">জার্নাল</a></li>
              <li><a href="/admission" className="hover:text-white">ভর্তি</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-3">কোর্সসমূহ</h3>
            <ul className="space-y-2">
              <li><a href="/courses/ssc" className="hover:text-white">এসএসসি</a></li>
              <li><a href="/courses/medical" className="hover:text-white">মেডিকেল</a></li>
              <li><a href="/courses/engineering" className="hover:text-white">ইঞ্জিনিয়ারিং</a></li>
              <li><a href="/courses/others" className="hover:text-white">অন্যান্য</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">নিউজলেটার</h3>
            <p className="text-gray-400 mb-3">সর্বশেষ আপডেট পেতে সাবস্ক্রাইব করুন</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="px-3 py-2 rounded bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none flex-1"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
                সাবস্ক্রাইব করুন
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">&copy; {new Date().getFullYear()} Aloron. সর্বস্বত্ব সংরক্ষিত।</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
