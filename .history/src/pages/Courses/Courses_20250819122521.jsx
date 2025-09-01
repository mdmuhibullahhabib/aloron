import React from "react";
import { FaStar } from "react-icons/fa";

const coursess = [
  {
    title: "ইনোভেটিভ প্রকল্প ১",
    description:
      "এই কোর্সটি আপনাকে শেখাবে কিভাবে নতুন প্রযুক্তি ব্যবহার করে একটি ইনোভেটিভ প্রজেক্ট তৈরি করা যায়।",
    badge: "Live Coming Soon",
    image: "https://source.unsplash.com/400x250/?technology,innovation",
  },
  {
    title: "ইনোভেটিভ প্রকল্প ২",
    description:
      "স্টুডেন্টদের জন্য অনন্য প্রজেক্ট আইডিয়া এবং প্র্যাকটিক্যাল অ্যাপ্লিকেশন শেখানো হবে।",
    badge: "Live Coming Soon",
    image: "https://source.unsplash.com/400x250/?science,lab",
  },
  {
    title: "ইনোভেটিভ প্রকল্প ৩",
    description:
      "প্রজেক্ট ডেভেলপমেন্ট ও বাস্তবায়ন সংক্রান্ত এক্সপার্ট গাইডলাইন।",
    badge: "Live Coming Soon",
    image: "https://source.unsplash.com/400x250/?innovation,startup",
  },
];

const Courses = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        🚀 আমাদের কোর্সসমূহ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursess.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                {course.badge}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-300" />
                <span className="ml-2 text-sm text-gray-500">4.0 Rating</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
