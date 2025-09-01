import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "ইনোভেটিভ প্রকল্প ১",
    description:
      "এই কোর্সটি আপনাকে শেখাবে কিভাবে নতুন প্রযুক্তি ব্যবহার করে একটি ইনোভেটিভ প্রজেক্ট তৈরি করা যায়।",
    badge: "Live Coming Soon",
    image: "https://source.unsplash.com/400x250/?technology,innovation",
    mcq: [
      {
        question: "প্রজেক্ট ডেভেলপমেন্টে কোন স্টেপটি প্রথমে করতে হয়?",
        options: ["Planning", "Coding", "Testing", "Deployment"],
        answer: "Planning",
      },
      {
        question: "নতুন প্রযুক্তি ব্যবহারের জন্য কোনটি প্রয়োজন?",
        options: ["Research", "Random Guess", "Skipping Steps", "Ignore Errors"],
        answer: "Research",
      },
    ],
  },
  {
    id: 2,
    title: "ইনোভেটিভ প্রকল্প ২",
    description:
      "স্টুডেন্টদের জন্য অনন্য প্রজেক্ট আইডিয়া এবং প্র্যাকটিক্যাল অ্যাপ্লিকেশন শেখানো হবে।",
    badge: "Live Coming Soon",
    image: "https://source.unsplash.com/400x250/?science,lab",
    mcq: [
      {
        question: "অন্যদের সাথে আইডিয়া শেয়ার করা কেন গুরুত্বপূর্ণ?",
        options: ["Collaboration", "Competition", "Secrecy", "Delay"],
        answer: "Collaboration",
      },
      {
        question: "প্রজেক্ট প্ল্যানিং কতটা গুরুত্বপূর্ণ?",
        options: ["Very Important", "Not Important", "Optional", "Never Needed"],
        answer: "Very Important",
      },
    ],
  },
  {
    id: 3,
    title: "ইনোভেটিভ প্রকল্প ৩",
    description:
      "প্রজেক্ট ডেভেলপমেন্ট ও বাস্তবায়ন সংক্রান্ত এক্সপার্ট গাইডলাইন।",
    badge: "Live Coming Soon",
    image: "https://source.unsplash.com/400x250/?innovation,startup",
    mcq: [
      {
        question: "Testing স্টেপটি কখন করা উচিত?",
        options: ["After Coding", "Before Planning", "Skip It", "Deployment আগে"],
        answer: "After Coding",
      },
      {
        question: "ডকুমেন্টেশন কেন গুরুত্বপূর্ণ?",
        options: ["Tracking Progress", "Ignore Steps", "For Fun", "Waste Time"],
        answer: "Tracking Progress",
      },
    ],
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = (course) => {
    setSelectedCourse(course);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (option) => {
    if (option === selectedCourse.mcq[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < selectedCourse.mcq.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setSelectedCourse(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        🚀 আমাদের কোর্সসমূহ
      </h2>

      {!selectedCourse ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
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
                <div className="flex items-center gap-1 mb-3">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-gray-300" />
                  <span className="ml-2 text-sm text-gray-500">4.0 Rating</span>
                </div>
                <button
                  onClick={() => startQuiz(course)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
          {!showResults ? (
            <>
              <h3 className="text-xl font-semibold mb-4">
                {selectedCourse.mcq[currentQuestionIndex].question}
              </h3>
              <div className="flex flex-col gap-3">
                {selectedCourse.mcq[currentQuestionIndex].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
              <p className="text-lg mb-4">
                Score: {score} / {selectedCourse.mcq.length}
              </p>
              <button
                onClick={resetQuiz}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Back to Courses
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Courses;
