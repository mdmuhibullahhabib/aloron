import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaShoppingBag,
  FaClipboardList,
  FaChalkboardTeacher,
  FaJournalWhills,
  FaBlog,
} from "react-icons/fa";
import { useTheme } from "../Provider/ThemeContext"; // ✅ ThemeContext import করলাম

const Hero = () => {
  const { theme } = useTheme(); // ✅ বর্তমান theme নিলাম

  const navLinks = [
    { name: "প্রশ্নব্যাংক", path: "/question-bank/archive", icon: <FaBook /> },
    { name: "স্টুডেন্ট শপ", path: "/shop", icon: <FaShoppingBag /> },
    { name: "পরীক্ষা", path: "/exams", icon: <FaClipboardList /> },
    { name: "কোর্স", path: "/courses", icon: <FaChalkboardTeacher /> },
    { name: "জার্নাল", path: "/journal", icon: <FaJournalWhills /> },
    { name: "Blog", path: "/blog", icon: <FaBlog /> },
  ];

  const notices = [
    "📢 নতুন ব্যাচ ভর্তি চলছে!",
    "🎓 লাইভ ক্লাস ও রেকর্ডেড ভিডিও উপলব্ধ।",
    "💡 পরীক্ষার জন্য বিশেষ প্রস্তুতি কোর্স।",
    "📝 অনলাইন মক টেস্ট শীঘ্রই শুরু হবে।",
    "📅 ব্যাচ শুরু: ১০ সেপ্টেম্বর ২০২৫",
  ];

  return (
    <section
      className={`
        flex flex-col lg:flex-row justify-between items-start p-6 md:p-12 min-h-screen transition-colors duration-500
        ${theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900"
        } 
      `}
    >
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
          className={`
            text-lg md:text-xl text-center lg:text-left
            ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
          `}
        >
          শিক্ষার সবকিছু পাঠশালায়
        </motion.p>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg">
          {navLinks.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className={`
                  flex flex-col items-center justify-center p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 text-center text-sm sm:text-base hover:-translate-y-1
                  ${theme === "dark"
                    ? "bg-gradient-to-tr from-pink-600 to-purple-500 text-white"
                    : "bg-gradient-to-tr from-pink-400 to-purple-400 text-white"
                  }
                `}
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side Notice */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`
          lg:w-1/3 mt-8 lg:mt-0 p-6 rounded-3xl shadow-2xl border transition-colors duration-500
          ${theme === "dark"
            ? "bg-gray-800 border-gray-700 text-gray-300"
            : "bg-white border-gray-200 text-gray-800"
          }
        `}
      >
        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
          📌 বিশেষ নোটিশ
        </h2>

        <ul className="space-y-3">
          {notices.map((notice, idx) => (
            <li key={idx}>{notice}</li>
          ))}
        </ul>

        <Link
          to="/exam-batch/details"
          className={`
            mt-6 w-full block text-center py-3 rounded-2xl transition duration-300 font-semibold shadow-lg
            ${theme === "dark"
              ? "bg-pink-500 text-white hover:bg-purple-500"
              : "bg-pink-500 text-white hover:bg-purple-600"
            }
          `}
        >
          বিস্তারিত দেখুন
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
