import React, { useState, useEffect } from 'react';

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

export default function ExamPage() {
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
              {/* Replaced LuLayoutDashboard with inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg> ড্যাশবোর্ড
            </a>
          </li>
          <li>
            <a className="rounded-box p-3 my-1">
              {/* Replaced LuFileQuestion with inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M9 18h.01" />
                <path d="M15 18h.01" />
                <path d="M12 18V12" />
                <path d="M12 12V8" />
                <path d="M12 8h.01" />
              </svg> মক পরীক্ষা
            </a>
          </li>
          <li>
            <a className="rounded-box p-3 my-1">
              {/* Replaced LuBookCheck with inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19" />
                <path d="M20 15v.01" />
                <path d="M16 15v.01" />
                <path d="M20 19v.01" />
                <path d="M16 19v.01" />
                <path d="M20 11v.01" />
                <path d="M16 11v.01" />
                <path d="M16 7v.01" />
                <path d="M20 7v.01" />
                <path d="M20 3v.01" />
                <path d="M16 3v.01" />
                <path d="M6 22a2.5 2.5 0 0 1-2.5-2.5V4.5A2.5 2.5 0 0 1 6.5 2H19" />
                <path d="M10 15h.01" />
              </svg> বই ক্রয়
            </a>
          </li>
          <li>
            <a className="rounded-box p-3 my-1">
              {/* Replaced LuBarChart3 with inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg> ফলাফল
            </a>
          </li>
          <li>
            <a className="rounded-box p-3 my-1">
              {/* Replaced LuSettings with inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-2 0l-.15-.15a2 2 0 0 0-2 0l-1.4 1.4a2 2 0 0 0 0 2l.15.15a2 2 0 0 0 0 2l-.25.43a2 2 0 0 0-1.73 1H2a2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2h.18a2 2 0 0 1 1.73 1l.25.43a2 2 0 0 0 0 2l-.15.15a2 2 0 0 0 0 2l1.4 1.4a2 2 0 0 0 2 0l.15-.15a2 2 0 0 0 2 0l.43.25a2 2 0 0 1 1 1.73V22a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 2 0l.15.15a2 2 0 0 0 2 0l1.4-1.4a2 2 0 0 0 0-2l-.15-.15a2 2 0 0 0 0-2l.25-.43a2 2 0 0 1 1.73-1H22a2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2h-.18a2 2 0 0 1-1.73-1l-.25-.43a2 2 0 0 0 0-2l.15-.15a2 2 0 0 0 0-2l-1.4-1.4a2 2 0 0 0-2 0l-.15.15a2 2 0 0 0-2 0l-.43-.25a2 2 0 0 1-1-1.73V2a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg> সেটিংস
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
            {/* Replaced LuLogOut with inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 cursor-pointer text-gray-400 hover:text-white">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
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
                    {/* Replaced FaRegSave with inline SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <path d="M17 21v-8H7v8" />
                      <path d="M7 3v5h8" />
                    </svg>
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