import React, { useState } from "react";

const ExamPage = () => {
  const [selected, setSelected] = useState(null);

  const questions = [
    {
      id: 1,
      question: "কোনটি মৌলিক রাশি (base quantity) নয়?",
      options: ["ঘনত্ব", "তাপমাত্রা", "সময়", "তর"],
      correct: "ঘনত্ব",
      tag: "CU A 13-14",
    },
    {
      id: 2,
      question: "১ Å (অ্যাংস্ট্রম) কত মিটারের সমান?",
      options: ["10⁻¹⁰", "10⁻⁶", "10⁻⁸", "10⁻⁹"],
      correct: "10⁻¹⁰",
      tag: "RU C 16-17",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">পদার্থবিজ্ঞান ১ম পত্র (Varsity)</h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["ভৌত রাশি ও পরিমাপ 63", "তরঙ্গ 251", "পরিমাপ 170", "নিউটনিয়ান বলবিদ্যা 226", "কাজ, ক্ষমতা, ও শক্তি 152", "মহাকর্ষ ও অভিকর্ষ 122"].map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Toggle */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 rounded-full bg-gray-800">MCQ</button>
        <button className="px-4 py-2 rounded-full bg-gray-700">Written</button>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="bg-gray-900 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-medium">{q.id}. {q.question}</p>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{q.tag}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(opt)}
                  className={`px-3 py-2 text-left rounded-lg border ${
                    selected === opt
                      ? opt === q.correct
                        ? "bg-green-600 border-green-400"
                        : "bg-red-600 border-red-400"
                      : "bg-gray-800 border-gray-700"
                  }`}
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

export default ExamPage;
