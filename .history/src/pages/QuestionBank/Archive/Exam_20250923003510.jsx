import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// A mock array of questions to display. In a real app, this would be fetched from an API.
// Added a 'correctOptionId' to each question for scoring purposes.
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
    correctOptionId: '1c', // Mock correct answer
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
    correctOptionId: '2a', // Mock correct answer
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
    correctOptionId: '3c', // Mock correct answer
  },
];

const Exam = () => {
  // State to store the user's selected answers, with keys as question IDs
  const [selectedAnswers, setSelectedAnswers] = useState({});
  // State for the exam timer in seconds
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  // State to track the number of answered questions
  const [answeredCount, setAnsweredCount] = useState(0);
  // New state to manage the view: 'exam' or 'dashboard'
  const [examState, setExamState] = useState('exam');
  // New state to store exam results
  const [examResults, setExamResults] = useState(null);
  // State to store the time taken
  const [timeTaken, setTimeTaken] = useState(0);
  const navigate = useNavigate();

  // Update the answered count whenever selectedAnswers changes
  useEffect(() => {
    setAnsweredCount(Object.keys(selectedAnswers).length);
  }, [selectedAnswers]);

  // Timer useEffect hook
  useEffect(() => {
    // If the timer reaches zero or exam is submitted, clear the interval
    if (timeLeft <= 0 || examState !== 'exam') {
      return;
    }

    // Set up an interval to decrement the timer every second
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or the timer ends
    return () => clearInterval(timerId);
  }, [timeLeft, examState]);

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

  // Function to handle exam submission
  const handleSubmit = () => {
    let correctCount = 0;
    let wrongCount = 0;

    // Calculate time taken
    setTimeTaken(3600 - timeLeft);

    // Calculate results by iterating through mock questions
    mockQuestions.forEach(question => {
      const selectedOption = selectedAnswers[question.id];
      if (selectedOption) {
        if (selectedOption === question.correctOptionId) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    setExamResults({
      totalQuestions: mockQuestions.length,
      answeredQuestions: answeredCount,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      marks: (correctCount * 5) - (wrongCount * 0.25),
    });

    setExamState('dashboard');
  };

  // Conditional rendering based on exam state
  if (examState === 'dashboard') {
    return (
      <div className="flex min-h-screen font-sans w-full">
        {/* Dashboard Content Area */}
        <div className="flex-1 flex flex-col p-8 overflow-y-auto">
          {/* Dashboard Header */}
          <div className="bg-white rounded-xl p-6 shadow-xl text-center mb-8 relative">
            {/* 🔙 Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline btn-error absolute left-4 top-4"
            >
              ⬅ ফিরে যান
            </button>

            <h1 className="text-2xl font-bold mb-2">BUP FST Admission 23-24</h1>
          </div>

          {/* Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-600 rounded-xl p-6 shadow-xl text-center text-white">
              <p className="text-lg font-bold mb-2">উত্তর করেছেন</p>
              <div className="text-5xl font-extrabold">
                {examResults.answeredQuestions} / {examResults.totalQuestions}
              </div>
            </div>
            <div className="bg-blue-600 rounded-xl p-6 shadow-xl text-center text-white">
              <p className="text-lg font-bold mb-2">সময় নিয়েছে</p>
              <div className="text-5xl font-extrabold">
                {formatTime(timeTaken)}
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-4 mb-6">
              ফলাফল
            </h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">মোট মার্কস:</span>
              <span className="text-xl font-bold text-green-600">
                {examResults.marks.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">সঠিক উত্তর:</span>
              <span className="text-xl font-bold text-green-600">
                {examResults.correctAnswers}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">ভুল উত্তর:</span>
              <span className="text-xl font-bold text-red-600">
                {examResults.wrongAnswers}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original Exam Page View
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 w-full">
      <div className="flex-1 flex flex-col p-8">
        {/* হেডার */}
        <div className="bg-white rounded-xl p-6 shadow-xl text-center mb-8 relative">
          {/* 🔙 Back Button */}
          <button
            onClick={() => {
              const confirmExit = window.confirm("আপনি কি নিশ্চিত? অসমাপ্ত পরীক্ষা হারিয়ে যাবে।");
              if (confirmExit) {
                window.history.back(); // আগের রুটে যাবে
              }
            }}
            className="btn btn-outline btn-error absolute left-4 top-4"
          >
            ⬅ ফিরে যান
          </button>

          <h1 className="text-2xl font-bold mb-2">BUP ভর্তি পরীক্ষা ২৩-২৪</h1>
          <div className="text-xl font-medium text-green-600">
            সময় বাকি: {formatTime(timeLeft)}
          </div>
          <p className="text-gray-600 mt-2">
            প্রতি প্রশ্নের পূর্ণমান ৫ এবং ভুলের জন্য ০.২৫ মার্কস কাটা হবে
          </p>
        </div>

        {/* প্রশ্ন */}
        <div className="bg-white rounded-xl p-8 shadow-xl mb-20">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-4 mb-6">
            গণিত (৩)
          </h2>
          <div className="space-y-8">
            {mockQuestions.map((q) => (
              <div key={q.id} className="card bg-gray-50 shadow-md rounded-lg p-6">
                <div className="flex justify-between mb-4">
                  <p className="text-lg font-medium">{q.text}</p>
                  <span className="text-sm text-gray-500">{q.points} মার্কস</span>
                </div>
                <div className="space-y-3">
                  {q.options.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex justify-between items-center p-3 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    >
                      <span>{opt.text}</span>
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        className="radio radio-success"
                        checked={selectedAnswers[q.id] === opt.id}
                        onChange={() => handleOptionChange(q.id, opt.id)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* নিচের ফিক্সড বার */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center rounded-t-lg">
        <div className="text-xl font-bold text-green-600">{formatTime(timeLeft)}</div>
        <button className="btn btn-success btn-lg" onClick={handleSubmit}>
          সাবমিট
        </button>
        <div className="text-xl font-bold">
          {answeredCount}/{mockQuestions.length}
        </div>
      </div>
    </div>

  );
}


export default Exam;