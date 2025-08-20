import React, { useState, useEffect } from 'react';
import { FaRegSave } from 'react-icons/fa';
import {
  LuLayoutDashboard,
  LuFileQuestion,
  LuBookCheck,
  LuBarChart3,
  LuSettings,
  LuLogOut
} from 'react-icons/lu';

// A mock array of questions to display. In a real app, this would be fetched from an API.
const mockQuestions = [
  {
    id: 1,
    text: "1. $y=x^3+x-5$ এবং $x=1$ এর জন্য $y=5$ দ্বারা কেন্দ্রের রেখাংশ দেখতে কেমন কোনটি?",
    options: [
      { id: '1a', text: '124 / 3' },
      { id: '1b', text: '125 / 3' },
      { id: '1c', text: '100 / 9' },
      { id: '1d', text: '50 / 7' },
    ],
    points: 1,
  },
  {
    id: 2,
    text: "2. $3x+2y+m=0$ ক্ষেত্রটিতে $x^2+y^2-2x-4=0$ ক্ষেত্রটির কেন্দ্রের জন্য ক্ষেত্রফল কেমন?",
    options: [
      { id: '2a', text: '-1' },
      { id: '2b', text: '1' },
      { id: '2c', text: '0' },
      { id: '2d', text: '13' },
    ],
    points: 1,
  },
  // Add more questions here if needed for testing
  {
    id: 3,
    text: "3. If a circle's area is given by the formula $A = \pi r^2$, what is the area of a circle with a radius of 5 units?",
    options: [
      { id: '3a', text: '$5\pi$' },
      { id: '3b', text: '$10\pi$' },
      { id: '3c', text: '$25\pi$' },
      { id: '3d', text: '$50\pi$' },
    ],
    points: 1,
  },
];

const function Exam() {
  // State to store the user's selected answers, with keys as question IDs
  const [selectedAnswers, setSelectedAnswers] = useState({});
  // State for the exam timer in seconds
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  // State to track the number of answered questions
  const [answeredCount, setAnsweredCount] = useState(0);

  // Update the answered count whenever selectedAnswers changes
  useEffect(() => {
    setAnsweredCount(Object.keys(selectedAnswers).length);
  }, [selectedAnswers]);

  // Timer useEffect hook
  useEffect(() => {
    // If the timer reaches zero, clear the interval
    if (timeLeft <= 0) return;

    // Set up an interval to decrement the timer every second
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or the timer ends
    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Function to format the time from seconds to a "MM:SS" string
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  // Handle option selection for a question
  const handleOptionChange = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-800 p-4 shadow-lg flex flex-col items-center">
        {/* Logo/Title */}
        <div className="mb-8 flex items-center space-x-2">
          <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-xl">
            bbi
          </div>
          <span className="text-xl font-bold">bbdi</span>
        </div>
        {/* Navigation items */}
        <ul className="menu menu-vertical w-full text-lg">
          <li>
            <a className="rounded-box p-3 my-1">
              <LuLayoutDashboard className="w-5 h-5" /> ড্যাশবোর্ড
            </a>
          </li>
          <li>
            <a className="rounded-box p-3 my-1">
              <LuFileQuestion className="w-5 h-5" /> মক পরীক্ষা
            </a>
          </li>
          <li>
            <a className="rounded-box p-3 my-1">
              <LuBookCheck className="w-5 h-5" /> বই ক্রয়
            </a>
          </li>
          <li>
            <a className="rounded-box p-3 my-1">
              <LuBarChart3 className="w-5 h-5" /> ফলাফল
            </a>
          </li>
          <li>
            <a className="rounded-box p-3 my-1">
              <LuSettings className="w-5 h-5" /> সেটিংস
            </a>
          </li>
        </ul>
        {/* User profile section */}
        <div className="mt-auto w-full p-4">
          <div className="flex items-center space-x-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://placehold.co/40x40/4f46e5/ffffff?text=M" alt="User Avatar" />
              </div>
            </div>
            <div className="flex-1 text-sm">
              <h3 className="font-bold">MD. Muhib Ullah Habib</h3>
              <p className="text-gray-400">bdi.com</p>
            </div>
            <LuLogOut className="w-5 h-5 cursor-pointer text-gray-400 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-8 overflow-y-auto">
        {/* Exam Header */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">BUP FST Admission 23-24</h1>
          <div className="text-xl font-medium text-green-400">সময়ঃ {formatTime(timeLeft)}</div>
          <p className="text-gray-400 mt-2">
            প্রতি প্রশ্নের পূর্ণমান $5$ এবং ভুল উত্তরের জন্য $0.২৫$ মার্কস কাটা যাবে
          </p>
        </div>

        {/* Question Section */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-xl mb-20">
          <h2 className="text-xl font-bold border-b border-gray-700 pb-4 mb-6">
            Mathematics (20)
          </h2>
          <div className="space-y-8">
            {mockQuestions.map((question) => (
              <div key={question.id} className="card bg-gray-900 shadow-md rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="prose text-white">
                    <p className="text-lg font-medium">{question.text}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <span className="text-sm">{question.points}</span>
                    <FaRegSave className="text-lg cursor-pointer hover:text-white" />
                  </div>
                </div>
                <div className="form-control space-y-4">
                  {question.options.map((option) => (
                    <label key={option.id} className="label cursor-pointer p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                      <span className="label-text text-white text-base">{option.text}</span>
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        className="radio radio-success"
                        checked={selectedAnswers[question.id] === option.id}
                        onChange={() => handleOptionChange(question.id, option.id)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-64 right-0 bg-gray-800 shadow-lg p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex-1 text-center text-xl font-bold text-green-400">
          {formatTime(timeLeft)}
        </div>
        <div className="flex-1 text-center">
          <button className="btn btn-success btn-lg">সাবমিট</button>
        </div>
        <div className="flex-1 text-center text-xl font-bold">
          {answeredCount}/{mockQuestions.length}
        </div>
      </div>
    </div>
  );
}

export default Exam;