import React from "react";

const ResultPage = ({ questions, answers, onRetry }) => {
  const score = questions.reduce(
    (acc, q) => (answers[q.id] === q.correctAnswer ? acc + 1 : acc),
    0
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">ফলাফল</h2>
      <p className="text-lg mb-6">
        আপনি {questions.length} টির মধ্যে {score} টি সঠিক উত্তর দিয়েছেন 🎉
      </p>

      <button
        onClick={onRetry}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        আবার চেষ্টা করুন
      </button>
    </div>
  );
};

export default ResultPage;
