import React, { useState } from 'react';

// The following is a self-contained React component that uses Tailwind CSS and DaisyUI.
// The react-icons dependency was causing a compilation error. To fix this,
// the icons have been replaced with inline SVG code to ensure the component
// compiles and runs correctly without any external module resolution issues.

// Sample data for questions.
const questions = [
  {
    id: 1,
    text: "y=x², x-অক্ষ, x=1 এবং x = 5 দ্বারা আবদ্ধ ক্ষেত্রের ক্ষেত্রফল কোনটি?",
    options: ["$$\\frac{124}{3}$$", "$$\\frac{125}{3}$$", "$$\\frac{100}{9}$$", "$$\\frac{50}{7}$$"],
    marks: 1,
  },
  {
    id: 2,
    text: "3x + 2y + m = 0 রেখাটি x² + y² - 8x - 2y + 4 = 0 বৃত্তকে স্পর্শ করলে m এর মান কোনটি?",
    options: ["-1", "1", "0", "13"],
    marks: 1,
  },
  {
    id: 3,
    text: "P(x, y) বিন্দু হতে x + 3y = 4 রেখার উপর অঙ্কিত লম্বের পাদবিন্দু যদি (2, 3) হয়, তবে x এবং y এর মান কত?",
    options: ["(4, 3)", "(3, -2)", "(3, 2)", "(4, -3)"],
    marks: 1,
  }
];

// Main App component
const Exam = () => {
  // State to track selected options. The key is the question ID, the value is the index of the selected option.
  const [selectedOptions, setSelectedOptions] = useState({});

  // Function to handle option selection
  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans p-4 md:p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">BUP FST Admission 23-24</h1>
        <p className="text-sm md:text-base text-gray-400">সময়: ১ ঘন্টা</p>
        <p className="text-sm md:text-base text-gray-400">প্রতি প্রশ্নের ভুল উত্তর এর জন্য ০.২৫ নম্বর কাটা হবে</p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto pb-20">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Mathematics (20)</h2>

        {/* Loop through each question */}
        {questions.map((question) => (
          <div key={question.id} className="card bg-gray-800 rounded-lg shadow-xl mb-6">
            <div className="card-body p-4 md:p-6">
              {/* Question Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                  <span className="text-lg md:text-xl font-bold mr-2">{question.id}.</span>
                  <p className="text-base md:text-lg">{question.text}</p>
                </div>
                <div className="flex items-center text-sm md:text-base text-gray-400">
                  <span className="mr-1">{question.marks}</span>
                  {/* Bookmark Icon */}
                  <svg className="text-xl cursor-pointer hover:text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-2 gap-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(question.id, index)}
                    className={`btn btn-block btn-outline border-gray-600 hover:bg-green-600 hover:border-green-600 hover:text-white
                      ${selectedOptions[question.id] === index ? 'btn-success text-white' : ''}`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: option }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 py-3 md:py-4 px-4 md:px-8 flex justify-between items-center z-50">
        {/* Timer */}
        <div className="flex items-center text-lg md:text-xl font-bold">
          <p className="mr-2">59:15</p>
          <span className="text-sm text-gray-400">Left</span>
        </div>
        {/* Progress and Submit Button */}
        <div className="flex items-center">
          <p className="text-lg md:text-xl mr-4">4 / 80</p>
          <button className="btn btn-success btn-wide">
            সাবমিট
            {/* Paper Plane Icon */}
            <svg className="ml-2 text-xl w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2v7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exam;
