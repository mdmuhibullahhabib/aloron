import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBook, FaShoppingBag, FaClipboardList, FaChalkboardTeacher, FaJournalWhills, FaBlog } from "react-icons/fa";

const HeroSection = () => {
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
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-600 leading-snug mb-4">
          শিক্ষায়, চর্চায় ও সহযোগিতায়
        </h1>
        <p className="text-lg text-gray-700 mb-6">শিক্ষার সবকিছু পাঠশালায়</p>

        {/* Navigation Links with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {navLinks.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="shadow-md rounded-lg"
            >
              <Link
                to={link.path}
                className="flex items-center justify-center gap-2 bg-pink-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 text-center"
              >
                {link.icon} {link.name}
              </Link>
            </motion.div>
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

export default HeroSection;


export default Hero;
