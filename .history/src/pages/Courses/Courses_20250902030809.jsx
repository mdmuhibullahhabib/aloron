import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "HSC Physics Preparation",
    description:
      "এই কোর্সটি HSC পরীক্ষার জন্য Physics এর গুরুত্বপূর্ণ সূত্র ও প্রশ্ন সমাধান শেখাবে।",
    badge: "Live",
    image: "https://source.unsplash.com/400x250/?physics,education",
    price: "৳1200",
    duration: "6 Weeks",
    lessons: 12,
    syllabus: [
      "Mechanics",
      "Electricity & Magnetism",
      "Optics",
      "Modern Physics",
    ],
    author: "Md. Habib Rahman",
  },
  {
    id: 2,
    title: "HSC Chemistry Crash Course",
    description:
      "এই কোর্সটি HSC Chemistry এর Key Concepts এবং Reactions দ্রুত আয়ত্ত করার জন্য।",
    badge: "Live",
    image: "https://source.unsplash.com/400x250/?chemistry,lab",
    price: "৳1000",
    duration: "5 Weeks",
    lessons: 10,
    syllabus: [
      "Organic Chemistry Basics",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Chemical Reactions",
    ],
    author: "Dr. Shirin Akter",
  },
  {
    id: 3,
    title: "University Admission Preparation",
    description:
      "এই কোর্সটি বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য গুরুত্বপূর্ণ MCQ এবং প্রস্তুতি কৌশল শেখাবে।",
    badge: "Live",
    image: "https://source.unsplash.com/400x250/?university,study",
    price: "৳1500",
    duration: "8 Weeks",
    lessons: 15,
    syllabus: [
      "Mathematics",
      "English",
      "General Knowledge",
      "Analytical Reasoning",
    ],
    author: "Prof. Anik Chowdhury",
  },
];

const Courses = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        🎓 HSC & University Admission Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl block"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                {course.badge}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-gray-300" />
                </div>
                <span className="text-lg font-bold">{course.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Courses;
export { courses };
