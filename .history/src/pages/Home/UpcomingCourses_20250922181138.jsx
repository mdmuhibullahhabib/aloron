import React from "react";
import { motion } from "framer-motion";

const UpcomingCourses = () => {
  const upcomingCourses = [
    {
      id: 1,
      title: "BUP Admission Exam Batch",
      desc: "পূর্ণাঙ্গ প্রস্তুতি, মক টেস্ট এবং প্রিমিয়াম গাইডলাইন সহ",
      color: "bg-emerald-500",
    },
    {
      id: 2,
      title: "DU Question Bank & Exam Prep",
      desc: "বিগত বছরের প্রশ্ন, উত্তর ও বিশ্লেষণ সহ",
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "CU Admission Exam Masterclass",
      desc: "অভিজ্ঞ শিক্ষকের ক্লাস ও প্র্যাকটিস সেশন",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 lg:px-40">
      <h2 className="text-3xl dark: font-bold text-center mb-10">
        আসন্ন কোর্সসমূহ
      </h2>
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
  );
};

export default UpcomingCourses;
