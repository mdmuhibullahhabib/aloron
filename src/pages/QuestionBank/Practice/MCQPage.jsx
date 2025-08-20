import React from "react";

const fakeQuestions = [
  {
    id: 1,
    question: "ভর সংরক্ষণ সূত্র কে প্রবর্তন করেন?",
    options: ["ল্যাভয়সিয়ার", "নিউটন", "ডাল্টন", "আইনস্টাইন"],
    correct: "ল্যাভয়সিয়ার",
  },
  {
    id: 2,
    question: "ভেক্টর এর মান কোনটি?",
    options: ["10 মিটার", "20 কেজি", "5 মিটার উত্তর", "100 ডিগ্রী"],
    correct: "5 মিটার উত্তর",
  },
];

const MCQPage = ({ subjectId, paperId, chapter, onGoBack }) => {
  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <button onClick={onGoBack} className="mb-4">
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-4">
        {subjectId} / {paperId} / {chapter}
      </h1>

      <div className="space-y-6">
        {fakeQuestions.map((q) => (
          <div
            key={q.id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg space-y-4"
          >
            <h2 className="text-lg font-semibold">{q.question}</h2>
            <div className="grid grid-cols-2 gap-4">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className="bg-gray-700 p-3 rounded hover:bg-gray-600"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQPage;
