import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const navLinks = [
    { name: "প্রশ্নব্যাংক", path: "/question-bank/archive" },
    { name: "স্টুডেন্ট শপ", path: "/shop" },
    { name: "পরীক্ষা", path: "/exams" },
    { name: "কোর্স", path: "/courses" },
    { name: "জার্নাল", path: "/journal" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <section className="flex flex-col lg:flex-row justify-between items-start p-6 md:p-12 bg-white">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-600 leading-snug mb-4">
          শিক্ষায়, চর্চায় ও সহযোগিতায়
        </h1>
        <p className="text-lg text-gray-700 mb-6">শিক্ষার সবকিছু পাঠশালায়</p>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="bg-pink-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 shadow-md text-center"
            >
              {link.name}
            </Link>
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
