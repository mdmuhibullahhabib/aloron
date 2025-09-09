import React, { useState } from "react";
import { FaBookOpen, FaChalkboardTeacher, FaPlayCircle } from "react-icons/fa";

const MyCourses = () => {
  const [courses] = useState([
    {
      id: "c1",
      title: "পদার্থবিজ্ঞান ১ম পত্র",
      instructor: "ড. কামরুল হাসান",
      progress: 75,
      status: "Ongoing",
    },
    {
      id: "c2",
      title: "রসায়ন ২য় পত্র",
      instructor: "ড. শামীমা নূর",
      progress: 100,
      status: "Completed",
    },
    {
      id: "c3",
      title: "গণিত (Higher Math)",
      instructor: "ড. রাশেদুল ইসলাম",
      progress: 40,
      status: "Ongoing",
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
        📚 আমার কোর্স
      </h2>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500">আপনি এখনো কোন কোর্সে ভর্তি হননি।</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col"
            >
              {/* Course Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaBookOpen className="text-green-600" />
                {course.title}
              </h3>

              {/* Instructor */}
              <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                <FaChalkboardTeacher className="text-blue-600" /> শিক্ষক:{" "}
                {course.instructor}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>অগ্রগতি</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      course.progress === 100 ? "bg-green-600" : "bg-blue-500"
                    }`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Status */}
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-medium mb-4 ${
                  course.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {course.status}
              </span>

              {/* Action Button */}
              <button
                className={`mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition ${
                  course.status === "Completed"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                <FaPlayCircle />
                {course.status === "Completed" ? "সার্টিফিকেট দেখুন" : "চালিয়ে যান"}
              </button>
            </div>
          ))}
