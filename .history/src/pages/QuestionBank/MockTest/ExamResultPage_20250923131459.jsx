import React, { useState } from 'react';

const dummyQuestions = [
  { id: 1, text: 'ক্রোমিয়ামের ইলেকট্রন বিন্যাস-', options: ['3d⁵4s¹','3d⁴4s²','3d⁵4s²','3d⁴4s¹'], correctAnswer: '3d⁵4s¹' },
  { id: 2, text: 'P মৌলের পারমাণবিক ভর 31 এবং পারমাণবিক সংখ্যা 15 হলে নিউট্রন সংখ্যা কতটি?', options: ['31','16','33','15'], correctAnswer: '16' },
  { id: 3, text: '¹²₆C + ¹₁H → ¹³₇N + 🞎, 🞎 চিহ্নিত স্থানে কী হবে?', options: ['¹₀H','³₁H','¹₁H','¹₀n'], correctAnswer: '¹₀n' },
];

const ExamResultPage = ({ userAnswers, examConfig, onGoBack }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds(prev => prev.includes(id) ? prev.filter(eid => eid !== id) : [...prev, id]);
  };

  const totalQuestions = dummyQuestions.length;
  const correctCount = dummyQuestions.filter((q,i)=>userAnswers[i]===q.correctAnswer).length;
  const incorrectCount = totalQuestions-correctCount;
  const score = correctCount-(examConfig.negativeMarking?incorrectCount*0.25:0);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button onClick={onGoBack} className="mb-6 text-gray-600 hover:text-green-500 font-semibold">← Back</button>

      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
        <div className="p-4 bg-orange-200 rounded-xl shadow">
          <p className="font-semibold text-gray-800">XP পেয়েছে</p>
          <p className="text-2xl font-bold text-gray-800">{score}</p>
        </div>
        <div className="p-4 bg-green-200 rounded-xl shadow">
          <p className="font-semibold text-gray-800">প্রাপ্ত নম্বর</p>
          <p className="text-2xl font-bold text-gray-800">{score} / {totalQuestions}</p>
        </div>
        <div className="p-4 bg-blue-200 rounded-xl shadow">
          <p className="font-semibold text-gray-800">সময় লেগেছে</p>
          <p className="text-2xl font-bold text-gray-800">00:00</p>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {dummyQuestions.map((q, index) => (
          <div key={q.id} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 font-medium mb-4">{index + 1}. {q.text}</p>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.options.map(option => {
                const isCorrect = option === q.correctAnswer;
                const isUserChoice = userAnswers[index] === option;
                return (
                  <div
                    key={option}
                    className={`p-3 rounded-lg border ${
                      isCorrect ? 'border-green-500 bg-green-100' :
                      isUserChoice ? 'border-red-500 bg-red-100' :
                      'border-gray-200'
                    }`}
                  >
                    <p className="">{option}</p>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4 gap-3">
              <button 
                className="px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300 text-gray-800 font-medium"
                onClick={() => alert('Update question functionality coming soon!')}
              >
                Update
              </button>
              <button 
                className="px-4 py-2 bg-blue-200 rounded-lg hover:bg-blue-300 font-medium"
                onClick={() => toggleExpand(q.id)}
              >
                {expandedIds.includes(q.id) ? 'Hide Details' : 'Show Details'}
              </button>
            </div>

            {/* Expanded Details */}
            {expandedIds.includes(q.id) && (
              <div className="mt-4 p-4 rounded-lg">
                <p className="">Correct Answer: <span className="font-semibold">{q.correctAnswer}</span></p>
                <p className=" mt-1">Your Answer: <span className="font-semibold">{userAnswers[index] || 'Not Answered'}</span></p>
                <p className=" mt-2 text-sm">Explanation / Notes can go here...</p>
              </div>                      
            )}
          </div>
        ))}                                                                                                                                                                             
      </div>                
    </div>              
  );
};              
                              
export default ExamResultPage;
