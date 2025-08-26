import React from "react";
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
    <section className="flex flex-col lg:flex-row justify-between items-start p-6 md:p-12 bg-white text-gray-900 min-h-screen">
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start p-4 w-full lg:w-2/3 space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center lg:text-left leading-snug"
        >
          শিক্ষায়, চর্চায় ও সহযোগিতায়
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 text-center lg:text-left"
        >
          শিক্ষার সবকিছু পাঠশালায়
        </motion.p>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.path}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center bg-gradient-to-tr from-pink-500 to-purple-400 text-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center text-sm sm:text-base hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{link.icon}</div>
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Right Side Notice */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/3 mt-8 lg:mt-0 bg-gray-50 border border-gray-200 p-6 rounded-3xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
          📌 বিশেষ নোটিশ
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>📢 নতুন ব্যাচ ভর্তি চলছে!</li>
          <li>🎓 লাইভ ক্লাস ও রেকর্ডেড ভিডিও উপলব্ধ।</li>
          <li>💡 পরীক্ষার জন্য বিশেষ প্রস্তুতি কোর্স।</li>
        </ul>
        <button className="mt-6 w-full bg-pink-500 text-white py-3 rounded-2xl hover:bg-purple-500 transition duration-300 font-semibold shadow-md">
          বিস্তারিত দেখুন
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
