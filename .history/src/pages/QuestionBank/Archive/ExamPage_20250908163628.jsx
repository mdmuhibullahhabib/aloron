import React, { useEffect, useState } from "react";

const ExamPage = () => {
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const fakeData = {
      topics: [
        { title: "ভৌত রাশি ও পরিমাপ", count: 63 },
        { title: "তরঙ্গ", count: 251 },
        { title: "পরিমাপ", count: 170 },
        { title: "নিউটনিয়ান বলবিদ্যা", count: 226 },
        { title: "কাজ, ক্ষমতা, ও শক্তি", count: 152 },
        { title: "মহাকর্ষ ও অভিকর্ষ", count: 122 },
      ],
      questions: [
        {
          _id: "q1",
          question: "কোনটি মৌলিক রাশি (base quantity) নয়?",
          options: ["ঘনত্ব", "তাপমাত্রা", "সময়", "তর"],
          correct: "ঘনত্ব",
          tag: "CU A 13-14",
          topic: "ভৌত রাশি ও পরিমাপ",
        },
        {
          _id: "q2",
          question: "১ Å (অ্যাংস্ট্রম) কত মিটারের সমান?",
          options: ["10⁻¹⁰", "10⁻⁶", "10⁻⁸", "10⁻⁹"],
          correct: "10⁻¹⁰",
          tag: "RU C 16-17",
          topic: "পরিমাপ",
        },
      ],
    };

    setTopics(fakeData.topics);
    setQuestions(fakeData.questions);

    // ✅ Auto select correct answer
    const autoSelected = {};
    fakeData.questions.forEach((q) => {
      autoSelected[q._id] = q.correct;
    });
    setSelected(autoSelected);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">
        পদার্থবিজ্ঞান ১ম পত্র (Varsity)
      </h1>

      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-6">
        {topics.map((t, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-sm px-3 py-1 rounded-full"
          >
            {t.title} {t.count}
          </span>
        ))}
      </div>

      {/* Toggle */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white">
          MCQ
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200">Written</button>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q) => (
          <div
            key={q._id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <h2 className="font-semibold text-lg mb-4">
              {q.question} <span className="text-sm text-gray-500">({q.tag})</span>
            </h2>

            <div className="space-y-4">
              {q.options.map((opt, idx) => {
                const isCorrect = selected[q._id] === opt;
                return (
                  <div key={idx} className="space-y-1">
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg border ${
                        isCorrect
                          ? "bg-green-100 border-green-500 text-green-700"
                          : "bg-gray-100 border-gray-300 text-gray-700"
                      }`}
                    >
                      {opt}
                    </button>
                    {/* ✅ প্রতিটি অপশনের নিচে প্রিমিয়াম টেক্সট */}
                    <p className="text-xs text-gray-500 pl-2">
                      ব্যাখ্যা আনলক করতে{" "}
                      <span className="text-blue-600 font-semibold">
                        চর্চা প্রিমিয়াম
                      </span>{" "}
                      এ আপগ্রেড করো
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPage;
