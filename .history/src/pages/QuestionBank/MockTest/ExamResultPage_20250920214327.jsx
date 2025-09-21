import React from 'react';

const dummyQuestions = [
  { id: 1, text: 'ক্রোমিয়ামের ইলেকট্রন বিন্যাস-', options: ['3d⁵4s¹','3d⁴4s²','3d⁵4s²','3d⁴4s¹'], correctAnswer: '3d⁵4s¹' },
  { id: 2, text: 'P মৌলের পারমাণবিক ভর 31 এবং পারমাণবিক সংখ্যা 15 হলে নিউট্রন সংখ্যা কতটি?', options: ['31','16','33','15'], correctAnswer: '16' },
  { id: 3, text: '¹²₆C + ¹₁H → ¹³₇N + 🞎, 🞎 চিহ্নিত স্থানে কী হবে?', options: ['¹₀H','³₁H','¹₁H','¹₀n'], correctAnswer: '¹₀n' },
];

const ExamResultPage = ({ userAnswers, examConfig, onGoBack }) => {
  const totalQuestions = dummyQuestions.length;
  const correctCount = dummyQuestions.filter((q,i)=>userAnswers[i]===q.correctAnswer).length;
  const incorrectCount = totalQuestions-correctCount;
  const score = correctCount-(examConfig.negativeMarking?incorrectCount*0.25:0);

  return (
    <div className="p-8 bg-white rounded-xl shadow-md">
      <button onClick={onGoBack} className="mb-6 text-gray-600 hover:text-green-500">← Back</button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
        <div className="p-4 bg-orange-200 rounded-xl">
          <p className="font-semibold text-gray-800">XP পেয়েছে</p>
          <p className="text-2xl font-bold text-gray-800">{score}</p>
        </div>
        <div className="p-4 bg-green-200 rounded-xl">
          <p className="font-semibold text-gray-800">প্রাপ্ত নম্বর</p>
          <p className="text-2xl font-bold text-gray-800">{score} / {totalQuestions}</p>
        </div>
        <div className="p-4 bg-blue-200 rounded-xl">
          <p className="font-semibold text-gray-800">সময় লেগেছে</p>
          <p className="text-2xl font-bold text-gray-800">00:00</p>
        </div>
      </div>
    </div>
  );
};

export default ExamResultPage;
