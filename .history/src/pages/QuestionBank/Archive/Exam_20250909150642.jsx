import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

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
    correctOptionId: '1c',
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
    correctOptionId: '2a',
  },
  {
    id: 3,
    text: "3. If a circle's area is given by $A = \pi r^2$, what is the area of a circle with a radius of 5 units?",
    options: [
      { id: '3a', text: '$5\\pi$' },
      { id: '3b', text: '$10\\pi$' },
      { id: '3c', text: '$25\\pi$' },
      { id: '3d', text: '$50\\pi$' },
    ],
    points: 1,
    correctOptionId: '3c',
  },
];

const Exam = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [examState, setExamState] = useState('exam');
  const [examResults, setExamResults] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);

  const navigate = useNavigate();

  // ✅ Back Button Handler
  const handleBack = () => {
    const confirmExit = window.confirm("আপনি কি নিশ্চিত? অসমাপ্ত পরীক্ষা হারিয়ে যাবে।");
    if (confirmExit) {
      navigate(-1); // আগের রুটে যাবে
    }
  };

  // Update answered count
  useEffect(() => {
    setAnsweredCount(Object.keys(selectedAnswers).length);
  }, [selectedAnswers]);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0 || examState !== 'exam') return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, examState]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  const handleOptionChange = (qid, oid) => {
    setSelectedAnswers({ ...selectedAnswers, [qid]: oid });
  };

  const handleSubmit = () => {
    let correctCount = 0, wrongCount = 0;
    setTimeTaken(3600 - timeLeft);

    mockQuestions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      if (selected) {
        if (selected === q.correctOptionId) correctCount++;
        else wrongCount++;
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

  // === Dashboard View ===
  if (examState === 'dashboard') {
    return (
      <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans w-full">
        <div className="flex-1 flex flex-col p-8 overflow-y-auto">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="btn btn-outline btn-error w-32 mb-6"
          >
            ⬅ আর্কাইভে ফেরত
          </button>

          {/* Dashboard Header */}
          <div className="bg-white rounded-xl p-6 shadow-xl text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">BUP FST Admission 23-24</h1>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-4 mb-6">ফলাফল</h2>
            <div className="flex justify-between mb-4">
              <span>সঠিক উত্তর:</span>
              <span className="font-bold text-green-600">{examResults.correctAnswers}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>ভুল উত্তর:</span>
              <span className="font-bold text-red-600">{examResults.wrongAnswers}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>মোট মার্কস:</span>
              <span className="font-bold text-blue-600">{examResults.marks.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // === Exam View ===
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 w-full">
      <div className="flex-1 flex flex-col p-8">
        {/* Header */}
        <div className="bg-white rounded-xl p-6 shadow-xl text-center mb-8 relative">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="btn btn-outline btn-error absolute left-4 top-4"
          >
            ⬅ ফিরে যান
          </button>

          <h1 className="text-2xl font-bold mb-2">BUP ভর্তি পরীক্ষা ২৩-২৪</h1>
          <div className="text-xl font-medium text-green-600">
            সময় বাকি: {formatTime(timeLeft)}
          </div>
        </div>

        {/* Questions */}
        <div className="bg-white rounded-xl p-8 shadow-xl mb-20">
          <h2 className="text-xl font-bold border-b pb-4 mb-6">গণিত (৩)</h2>
          <div className="space-y-8">
            {mockQuestions.map((q) => (
              <div key={q.id} className="card bg-gray-50 shadow-md rounded-lg p-6">
                <div className="flex justify-between mb-4">
                  <p>{q.text}</p>
                  <span className="text-sm text-gray-500">{q.points} মার্কস</span>
                </div>
                <div className="space-y-3">
                  {q.options.map((opt) => (
                    <label key={opt.id} className="flex justify-between items-center p-3 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer">
                      <span>{opt.text}</span>
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        checked={selectedAnswers[q.id] === opt.id}
                        onChange={() => handleOptionChange(q.id, opt.id)}
                        className="radio radio-success"
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center rounded-t-lg">
        <div className="text-xl font-bold text-green-600">{formatTime(timeLeft)}</div>
        <button className="btn btn-success btn-lg" onClick={handleSubmit}>সাবমিট</button>
        <div className="text-xl font-bold">{answeredCount}/{mockQuestions.length}</div>
      </div>
    </div>
  );
};

export default Exam;
