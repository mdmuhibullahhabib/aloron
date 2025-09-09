import React, { useState, useEffect } from 'react';

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
    text: "3. If a circle's area is given by the formula $A = \\pi r^2$, what is the area of a circle with a radius of 5 units?",
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

  useEffect(() => {
    setAnsweredCount(Object.keys(selectedAnswers).length);
  }, [selectedAnswers]);

  useEffect(() => {
    if (timeLeft <= 0 || examState !== 'exam') return;
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, examState]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleOptionChange = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId,
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    let wrongCount = 0;
    setTimeTaken(3600 - timeLeft);

    mockQuestions.forEach(question => {
      const selectedOption = selectedAnswers[question.id];
      if (selectedOption) {
        if (selectedOption === question.correctOptionId) correctCount++;
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

  if (examState === 'dashboard') {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-green-50 to-blue-50 text-gray-800 font-sans w-full">
        <div className="flex-1 flex flex-col p-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">BUP FST Admission 23-24</h1>
            <p className="text-gray-500 mt-2">Exam Summary</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-500 rounded-xl p-6 shadow-lg text-center text-white">
              <p className="text-lg">Answered</p>
              <div className="text-4xl font-extrabold">{examResults.answeredQuestions}/{examResults.totalQuestions}</div>
            </div>
            <div className="bg-blue-500 rounded-xl p-6 shadow-lg text-center text-white">
              <p className="text-lg">Time Taken</p>
              <div className="text-4xl font-extrabold">{formatTime(timeTaken)}</div>
            </div>
            <div className="bg-purple-500 rounded-xl p-6 shadow-lg text-center text-white">
              <p className="text-lg">Marks</p>
              <div className="text-4xl font-extrabold">{examResults.marks.toFixed(2)}</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold border-b border-gray-300 pb-4 mb-6">Detailed Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <p className="flex justify-between"><span>Correct Answers:</span> <span className="font-bold text-green-600">{examResults.correctAnswers}</span></p>
              <p className="flex justify-between"><span>Wrong Answers:</span> <span className="font-bold text-red-600">{examResults.wrongAnswers}</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-green-50 text-gray-800 font-sans w-full">
      <div className="flex-1 flex flex-col p-6 lg:p-12 overflow-y-auto">
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl p-8 shadow-xl text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">BUP FST Admission 23-24</h1>
          <div className="text-xl font-semibold">Time Left: {formatTime(timeLeft)}</div>
          <p className="mt-2 opacity-90">প্রতি প্রশ্ন ৫ মার্কস, ভুল উত্তরে -০.২৫</p>
        </div>

        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-xl mb-24">
          <h2 className="text-2xl font-bold border-b border-gray-200 pb-4 mb-6">Mathematics (20)</h2>
          <div className="space-y-8">
            {mockQuestions.map((question) => (
              <div key={question.id} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-lg font-medium">{question.text}</p>
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">{question.points} Mark</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {question.options.map((option) => (
                    <button
                      key={option.id}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition 
                        ${selectedAnswers[question.id] === option.id
                          ? 'bg-green-500 text-white border-green-600'
                          : 'bg-white hover:bg-green-50 border-gray-300'}`}
                      onClick={() => handleOptionChange(question.id, option.id)}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-4 flex items-center justify-between rounded-t-2xl">
        <div className="flex-1 text-center text-lg font-bold text-green-600">{formatTime(timeLeft)}</div>
        <div className="flex-1 text-center">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg font-bold transition" onClick={handleSubmit}>
            Submit Exam
          </button>
        </div>
        <div className="flex-1 text-center text-lg font-bold text-gray-800">{answeredCount}/{mockQuestions.length}</div>
      </div>
    </div>
  );
};

export default Exam;
