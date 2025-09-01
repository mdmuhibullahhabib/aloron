import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "HSC Physics Preparation",
    description:
      "এই কোর্সটি HSC পরীক্ষার জন্য Physics এর গুরুত্বপূর্ণ সূত্র ও প্রশ্ন সমাধান শেখাবে।",
    badge: "Live",
    image: "https://source.unsplash.com/400x250/?physics,education",
    mcq: [
      {
        question: "Newton এর কোন ল' বলছে F = ma?",
        options: ["First Law", "Second Law", "Third Law", "Law of Gravity"],
        answer: "Second Law",
      },
      {
        question: "Light এর প্রকার সংখ্যা কত?",
        options: ["1", "2", "3", "4"],
        answer: "3",
      },
    ],
  },
  {
    id: 2,
    title: "HSC Chemistry Crash Course",
    description:
      "এই কোর্সটি HSC Chemistry এর Key Concepts এবং Reactions দ্রুত আয়ত্ত করার জন্য।",
    badge: "Live",
    image: "https://source.unsplash.com/400x250/?chemistry,lab",
    mcq: [
      {
        question: "Periodic Table এ Hydrogen কোথায় আছে?",
        options: ["Group 1", "Group 17", "Group 18", "Group 2"],
        answer: "Group 1",
      },
      {
        question: "Water এর রাসায়নিক সূত্র কি?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O",
      },
    ],
  },
  {
    id: 3,
    title: "University Admission Preparation",
    description:
      "এই কোর্সটি বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য গুরুত্বপূর্ণ MCQ এবং প্রস্তুতি কৌশল শেখাবে।",
    badge: "Live",
    image: "https://source.unsplash.com/400x250/?university,study",
    mcq: [
      {
        question: "Admission test এ সাধারণত কোন বিষয় থাকে?",
        options: ["Math", "English", "General Knowledge", "সবগুলো"],
        answer: "সবগুলো",
      },
      {
        question: "Time Management এর গুরুত্ব কি?",
        options: ["High", "Medium", "Low", "Not Important"],
        answer: "High",
      },
    ],
  },
];

const CoursesHSC = () => {
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
        🎓 HSC & University Admission Courses
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
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
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

export default CoursesHSC;


export default Courses;
