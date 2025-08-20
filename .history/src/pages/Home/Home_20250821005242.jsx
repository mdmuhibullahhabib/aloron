// import React from 'react'
// import HeroSection from './HeroSection'
// import CourseHighlights from './CourseHighlights'
// import AdmissionAlerts from './AdmissionAlerts'

// const Home = () => {
//     return (
//         <div>
//             <HeroSection />
//             <CourseHighlights />
//             <AdmissionAlerts />
//         </div>
//     )
// }

// export default Home

import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaChalkboardTeacher, FaUsers, FaStar } from "react-icons/fa";
import Testimonial from "./Testimonial";

const Home = () => {
  const features = [
    {
      title: "অভ্যাস প্রশ্নব্যাংক",
      desc: "পূর্বের বছরের প্রশ্নের মাধ্যমে দক্ষতা বাড়ান।",
      icon: <FaBookOpen className="w-10 h-10 text-emerald-500" />,
    },
    {
      title: "লাইভ মক পরীক্ষা",
      desc: "সময় নির্ধারিত পরীক্ষার মাধ্যমে প্রস্তুতি যাচাই করুন।",
      icon: <FaChalkboardTeacher className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "কমিউনিটি লার্নিং",
      desc: "সকলের সাথে শিখুন এবং অভিজ্ঞতা শেয়ার করুন।",
      icon: <FaUsers className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "স্টাডি রিসোর্স",
      desc: "অ্যাডমিশন ও একাডেমিক পড়াশোনার জন্য রিসোর্স।",
      icon: <FaStar className="w-10 h-10 text-yellow-500" />,
    },
  ];

  const upcomingCourses = [
    {
      id: 1,
      title: "BUP Admission Preparation",
      desc: "সম্পূর্ণ সিলেবাস কাভার এবং মডেল টেস্ট।",
      color: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    },
    {
      id: 2,
      title: "Medical & Dental Admission",
      desc: "পদার্থ, রসায়ন ও জীববিজ্ঞান এর বিশেষ প্রস্তুতি।",
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      id: 3,
      title: "Engineering Admission",
      desc: "BUET, CUET, RUET প্রস্তুতির জন্য বিশেষ কোর্স।",
      color: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-16 px-6 md:px-20 lg:px-40 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          স্বাগতম <span className="text-yellow-300">আলোড়ন</span> এ
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          আপনার একাডেমিক ও অ্যাডমিশন প্রস্তুতিকে আরও কার্যকর ও সহজ করে তুলুন।
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 lg:px-40 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">আমাদের বৈশিষ্ট্য</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Courses Section */}
      <section className="py-16 px-6 md:px-20 lg:px-40">
        <h2 className="text-3xl font-bold text-center mb-10">আসন্ন কোর্সসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`${course.color} rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition`}
            >
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-white/90">{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">আজই শুরু করুন আপনার যাত্রা</h2>
        <p className="text-lg mb-6">
          আলোড়নের সাথে একাডেমিক উৎকর্ষতা অর্জন করুন।
        </p>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
          এখনই যোগ দিন
        </button>
      </section>
      <section>
        <Testimonial
      </section>
    </div>
  );
};

export default Home;
