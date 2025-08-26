import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBook, FaShoppingBag, FaClipboardList, FaChalkboardTeacher, FaJournalWhills, FaBlog } from "react-icons/fa";

const Hero = () => {
  const navLinks = [
    { name: "প্রশ্নব্যাংক", path: "/question-bank/archive", icon: <FaBook /> },
    { name: "স্টুডেন্ট শপ", path: "/shop", icon: <FaShoppingBag /> },
    { name: "পরীক্ষা", path: "/exams", icon: <FaClipboardList /> },
    { name: "কোর্স", path: "/courses", icon: <FaChalkboardTeacher /> },
    { name: "জার্নাল", path: "/journal", icon: <FaJournalWhills /> },
    { name: "Blog", path: "/blog", icon: <FaBlog /> },
  ];

  return (
    <section className="flex flex-col lg:flex-row justify-between items-start p-6 md:p-12 bg-white">
      {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start p-6 md:p-12 w-full lg:w-1/2">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 text-center lg:text-left leading-snug mb-4">
        শিক্ষায়, চর্চায় ও সহযোগিতায়
      </h1>
      <p className="text-lg text-gray-700 text-center lg:text-left mb-6">
        শিক্ষার সবকিছু পাঠশালায়
      </p>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md">
        {navLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center bg-pink-500 text-white p-4 rounded-lg shadow-md hover:bg-pink-600 transition text-center text-sm sm:text-base"
          >
            <div className="text-2xl mb-2">{link.icon}</div>
            {link.name}
          </motion.a>
        ))}
      </div>
    </div>

      {/* Right Side Notice */}
      <div className="lg:w-1/3 mt-8 lg:mt-0 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">বিশেষ নোটিশ</h2>
        <ul className="space-y-2 text-gray-700">
          <li>📢 নতুন ব্যাচ ভর্তি চলছে!</li>
          <li>🎓 লাইভ ক্লাস ও রেকর্ডেড ভিডিও উপলব্ধ।</li>
          <li>💡 পরীক্ষার জন্য বিশেষ প্রস্তুতি কোর্স।</li>
        </ul>
        <button className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
          বিস্তারিত দেখুন
        </button>
      </div>
    </section>
  );
};


export default Hero;
