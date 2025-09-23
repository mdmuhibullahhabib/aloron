import React, { useState, useEffect } from 'react';

const dummyQuestions = [
  { id: 1, text: 'ক্রোমিয়ামের ইলেকট্রন বিন্যাস-', options: ['3d⁵4s¹','3d⁴4s²','3d⁵4s²','3d⁴4s¹'], correctAnswer: '3d⁵4s¹' },
  { id: 2, text: 'P মৌলের পারমাণবিক ভর 31 এবং পারমাণবিক সংখ্যা 15 হলে নিউট্রন সংখ্যা কতটি?', options: ['31','16','33','15'], correctAnswer: '16' },
  { id: 3, text: '¹²₆C + ¹₁H → ¹³₇N + 🞎, 🞎 চিহ্নিত স্থানে কী হবে?', options: ['¹₀H','³₁H','¹₁H','¹₀n'], correctAnswer: '¹₀n' },
];

const ExamPage = ({ examConfig, onEndExam }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(examConfig.totalTime * 60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft-1), 1000);
      return () => clearTimeout(timer);
    } else onEndExam(userAnswers);
  }, [timeLeft, userAnswers, onEndExam]);

  const currentQuestion = dummyQuestions[currentIndex];

  const handleAnswer = option => setUserAnswers({...userAnswers, [currentIndex]: option});

  const minutes = Math.floor(timeLeft/60), seconds = timeLeft%60;

  return (
    <div className="p-8 rounded-xl shadow-md">
      <div className="flex justify-between mb-6 font-semibold">
        <span>মক পরীক্ষা</span>
        <span>{minutes}:{seconds.toString().padStart(2,'0')}</span>
      </div>
      <p className=" mb-4">{currentIndex+1}. {currentQuestion.text}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map(opt => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            className={`p-4 rounded-xl transition ${userAnswers[currentIndex]===opt?'bg-green-400 text-white':'bg-gray-200 hover:bg-green-100'}`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={()=>setCurrentIndex(Math.max(0,currentIndex-1))} className="px-4 py- rounded-xl">Previous</button>
        {currentIndex<dummyQuestions.length-1 ? (
          <button onClick={()=>setCurrentIndex(currentIndex+1)} className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600">Next</button>
        ) : (
          <button onClick={()=>onEndExam(userAnswers)} className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600">Submit</button>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
