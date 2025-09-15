import React, { useEffect, useState } from "react";
import { FaLock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import useSubscription from "../../../hooks/useSubscription";

const ExamPage = () => {
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState({});
  const [openExplanation, setOpenExplanation] = useState({});
  const [user, , isLoading] = useSubscription()

  useEffect(() => {
    const fetchData = async () => {
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
            explanation:
              "মৌলিক রাশি হলো যেগুলো অন্য কোনো রাশি দিয়ে প্রকাশ করা যায় না। ঘনত্ব ভর ও আয়তনের উপর নির্ভরশীল, তাই এটি মৌলিক নয়।",
          },
          {
            _id: "q2",
            question: "১ Å (অ্যাংস্ট্রম) কত মিটারের সমান?",
            options: ["10⁻¹⁰", "10⁻⁶", "10⁻⁸", "10⁻⁹"],
            correct: "10⁻¹⁰",
            tag: "RU C 16-17",
            topic: "পরিমাপ",
            explanation:
              "১ Å (অ্যাংস্ট্রম) = 10⁻¹⁰ মিটার, এটি সাধারণত পরমাণুর ব্যাস বা ছোট মাপ বোঝাতে ব্যবহৃত হয়।",
          },
        ],
      };

      setTopics(fakeData.topics);
      setQuestions(fakeData.questions);

      // ✅ Auto select correct answer
      const initialSelected = {};
      fakeData.questions.forEach((q) => {
        initialSelected[q._id] = q.correct;
      });
      setSelected(initialSelected);
    };

    fetchData();
  }, []);

  // ✅ Toggle dropdown open/close
  const handleToggle = (id) => {
    setOpenExplanation((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-6">
      <h1 className="text-2xl font-bold mb-4">
        পদার্থবিজ্ঞান ১ম পত্র (Varsity)
      </h1>

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

      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white">
          MCQ
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200">Written</button>
      </div>

      <div className="space-y-6">
        {questions.map((q) => (
          <div
            key={q._id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-medium">{q.question}</p>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {q.tag}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setSelected((prev) => ({ ...prev, [q._id]: opt }))
                  }
                  className={`px-3 py-2 text-left rounded-lg border transition ${selected[q._id] === opt
                    ? opt === q.correct
                      ? "bg-green-100 border-green-400 text-green-700"
                      : "bg-red-100 border-red-400 text-red-700"
                    : "bg-gray-50 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* ✅ Collapsible explanation dropdown */}
            {user[0]?.status === "active" ? (
              <div className="mt-2">
                <button
                  onClick={() => handleToggle(q._id)}
                  className="w-full flex justify-between items-center px-3 py-2 text-left bg-blue-50 border border-blue-200 rounded hover:bg-blue-100"
                >
                  <span className="flex items-center">
                    <FaLock className="mr-2" />
                    ব্যাখ্যা
                  </span>
                  {openExplanation[q._id] ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {openExplanation[q._id] && (
                  <div className="mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 rounded">
                    {q.explanation}
                  </div>
                )}
              </div>
            ) : (
              <div className="btn w-full mt-2">
                <button
                  onClick={() => navigate("/subscription")}   // ✅ Navigate to subscription
                  className="text-center flex items-center w-full justify-center bg-red-100 hover:bg-red-200 px-3 py-2 rounded-md transition"
                >  
                                <FaLock className="mt-1 mr-2" />
                  ব্যাখ্যা আনলক করতে আলোড়ন প্রিমিয়াম এ আপগ্রেড করো
                </button>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPage;
