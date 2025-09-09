import React, { useState, useEffect } from 'react';

// প্রশ্নগুলোর মক ডাটা
const mockQuestions = [
  {
    id: 1,
    text: "১। $y=x^3+x-5$ এবং $x=1$ হলে $y=5$ দ্বারা কেন্দ্রের রেখাংশ কেমন হবে?",
    options: [
      { id: '1a', text: '১২৪ / ৩' },
      { id: '1b', text: '১২৫ / ৩' },
      { id: '1c', text: '১০০ / ৯' },
      { id: '1d', text: '৫০ / ৭' },
    ],
    points: ১,
    correctOptionId: '1c',
  },
  {
    id: 2,
    text: "২। $3x+2y+m=0$ রেখাটি $x^2+y^2-2x-4=0$ বৃত্তকে কোথায় ছেদ করে?",
    options: [
      { id: '2a', text: '-১' },
      { id: '2b', text: '১' },
      { id: '2c', text: '০' },
      { id: '2d', text: '১৩' },
    ],
    points: ১,
    correctOptionId: '2a',
  },
  {
    id: 3,
    text: "৩। একটি বৃত্তের ক্ষেত্রফল $A = \pi r^2$ হলে, ব্যাসার্ধ ৫ একক হলে ক্ষেত্রফল কত?",
    options: [
      { id: '3a', text: '$৫\pi$' },
      { id: '3b', text: '$১০\pi$' },
      { id: '3c', text: '$২৫\pi$' },
      { id: '3d', text: '$৫০\pi$' },
    ],
    points: ১,
    correctOptionId: '3c',
  },
];

const Exam = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600); // ১ ঘন্টা = ৩৬০০ সেকেন্ড
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
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, examState]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(minutes)}:${pad(remaining)}`;
  };

  const handleOptionChange = (qId, oId) => {
    setSelectedAnswers({ ...selectedAnswers, [qId]: oId });
  };

  const handleSubmit = () => {
    let correct = 0;
    let wrong = 0;

    setTimeTaken(3600 - timeLeft);

    mockQuestions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      if (selected) {
        if (selected === q.correctOptionId) correct++;
        else wrong++;
      }
    });

    setExamResults({
      totalQuestions: mockQuestions.length,
      answeredQuestions: answeredCount,
      correctAnswers: correct,
      wrongAnswers: wrong,
      marks: (correct * 5) - (wrong * 0.25),
    });

    setExamState('dashboard');
  };

  // 📊 ফলাফল পেজ
  if (examState === 'dashboard') {
    return (
      <div className="flex min-h-screen bg-gray-100 text-gray-800 w-full">
        <div className="flex-1 flex flex-col p-8">
          <div className="bg-white rounded-xl p-6 shadow-xl text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">BUP ভর্তি পরীক্ষা ২৩-২৪</h1>
          </div>

          {/* সারাংশ কার্ড */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-600 rounded-xl p-6 shadow-xl text-center text-white">
              <p className="text-lg font-bold mb-2">উত্তর দিয়েছেন</p>
              <div className="text-5xl font-extrabold">
                {examResults.answeredQuestions} / {examResults.totalQuestions}
              </div>
            </div>
            <div className="bg-blue-600 rounded-xl p-6 shadow-xl text-center text-white">
              <p className="text-lg font-bold mb-2">সময় লেগেছে</p>
              <div className="text-5xl font-extrabold">{formatTime(timeTaken)}</div>
            </div>
          </div>

          {/* বিস্তারিত ফলাফল */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-4 mb-6">ফলাফল</h2>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-medium">মোট মার্কস:</span>
              <span className="text-xl font-bold text-green-600">{examResults.marks.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-medium">সঠিক উত্তর:</span>
              <span className="text-xl font-bold text-green-600">{examResults.correctAnswers}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-medium">ভুল উত্তর:</span>
              <span className="text-xl font-bold text-red-600">{examResults.wrongAnswers}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 📝 এক্সাম পেজ
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 w-full">
      <div className="flex-1 flex flex-col p-8">
        {/* হেডার */}
        <div className="bg-white rounded-xl p-6 shadow-xl text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">BUP ভর্তি পরীক্ষা ২৩-২৪</h1>
          <div className="text-xl font-medium text-green-600">সময় বাকি: {formatTime(timeLeft)}</div>
          <p className="text-gray-600 mt-2">প্রতি প্রশ্নের পূর্ণমান ৫ এবং ভুলের জন্য ০.২৫ মার্কস কাটা হবে</p>
        </div>

        {/* প্রশ্ন */}
        <div className="bg-white rounded-xl p-8 shadow-xl mb-20">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-4 mb-6">গণিত (৩)</h2>
          <div className="space-y-8">
            {mockQuestions.map((q) => (
              <div key={q.id} className="card bg-gray-50 shadow-md rounded-lg p-6">
                <div className="flex justify-between mb-4">
                  <p className="text-lg font-medium">{q.text}</p>
                  <span className="text-sm text-gray-500">{q.points} মার্কস</span>
                </div>
                <div className="space-y-3">
                  {q.options.map((opt) => (
                    <label key={opt.id} className="flex justify-between items-center p-3 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer">
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
        <button className="btn btn-success btn-lg" onClick={handleSubmit}>সাবমিট</button>
        <div className="text-xl font-bold">{answeredCount}/{mockQuestions.length}</div>
      </div>
    </div>
  );
};

export default Exam;
