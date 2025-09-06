import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Dashboard = ({ questions, userAnswers, onRetake }) => {
  const totalQuestions = questions.length;
  const score = userAnswers.filter((ans, idx) => ans === questions[idx].correctAnswer).length;
  const percentage = ((score / totalQuestions) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-3">🏆 Exam Results</h1>
          <p className="text-gray-600 text-lg">Here’s your performance breakdown</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <p className="uppercase tracking-wider text-sm font-semibold">Score</p>
            <p className="text-4xl font-bold mt-2">{score} / {totalQuestions}</p>
            <div className="w-full bg-indigo-300 h-2 rounded-full mt-4">
              <div
                className="bg-white h-2 rounded-full transition-all duration-700"
                style={{ width: `${(score / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <p className="uppercase tracking-wider text-sm font-semibold">Percentage</p>
            <p className="text-4xl font-bold mt-2">{percentage}%</p>
            <div className="w-full bg-yellow-300 h-2 rounded-full mt-4">
              <div
                className="bg-white h-2 rounded-full transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <p className="uppercase tracking-wider text-sm font-semibold">Correct Answers</p>
            <p className="text-4xl font-bold mt-2">{score}</p>
            <div className="w-full bg-green-300 h-2 rounded-full mt-4">
              <div
                className="bg-white h-2 rounded-full transition-all duration-700"
                style={{ width: `${(score / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question Breakdown */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {questions.map((q, idx) => {
            const isCorrect = userAnswers[idx] === q.correctAnswer;
            return (
              <div
                key={q.id}
                className={`flex flex-col md:flex-row justify-between p-5 rounded-xl shadow-md transition transform hover:scale-105
                  ${isCorrect ? 'bg-green-50 border-l-8 border-green-500' : 'bg-red-50 border-l-8 border-red-500'}
                `}
              >
                <div className="mb-3 md:mb-0 md:flex-1">
                  <p className="font-semibold text-gray-800 text-lg">{q.text}</p>
                  <p className="mt-1 text-gray-600">
                    Your Answer: <span className="font-medium">{userAnswers[idx] || 'Not Answered'}</span>
                  </p>
                  {!isCorrect && (
                    <p className="mt-1 text-red-700">
                      Correct Answer: <span className="font-medium">{q.correctAnswer}</span>
                    </p>
                  )}
                </div>
                <div className="flex items-center md:ml-4">
                  {isCorrect ? (
                    <FaCheckCircle className="text-green-600 text-4xl" />
                  ) : (
                    <FaTimesCircle className="text-red-600 text-4xl" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Retake Button */}
        <div className="text-center">
          <button
            onClick={onRetake}
            className="bg-indigo-600 text-white font-bold py-3 px-12 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg text-lg"
          >
            🔄 Retake Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
