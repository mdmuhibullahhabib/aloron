import React, { useState, useEffect } from "react";
import Dropdowns from "./Dropdowns"; // Import your dropdown component
import useExamQuestion from "../../hooks/useExamQuestion";

const Exampage = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [time, setTime] = useState(12);
  const [questionsCount, setQuestionsCount] = useState(20);
  const [currentQ, setCurrentQ] = useState(1);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({ group: "", subject: "", chapter: "" });
  const [questionSet, setQuestionSet] = useState([]); // Initially empty array

  // Fetch all questions from MongoDB
  const { data, isLoading, refetch } = useExamQuestion(selected);
  console.log(data)

  // Filter questions based on dropdown selection
  useEffect(() => {
    if (selected.group && selected.subject && selected.chapter && data) {
      const filtered = data.find(
        (item) =>
          item.group === selected.group &&
          item.subject === selected.subject &&
          item.chapter === selected.chapter
      );
      setQuestionSet(filtered ? filtered.questions : []);
    }
  }, [selected, data]);

  const handleAnswer = (ans) => {
    if (ans === questionSet[currentQ - 1]?.answer) {
      setScore(score + 1);
    }
    if (currentQ < questionSet.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  // Loading state
  if (isLoading) {
    return <p className="text-center p-6">⏳ লোড হচ্ছে...</p>;
  }

  // Exam finished
  if (finished) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">📊 Exam Performance</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border">
          <p className="text-lg">Total Questions: {questionSet.length}</p>
          <p className="text-lg">Correct: {score}</p>
          <p className="text-lg">Wrong: {questionSet.length - score}</p>
          <p className="text-lg font-bold">
            Score: {((score / questionSet.length) * 100).toFixed(2)}%
          </p>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          🔄 আবার চেষ্টা করো
        </button>
      </div>
    );
  }

  // Exam in progress
  if (started) {
    const q = questionSet[currentQ - 1];
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">
          প্রশ্ন {currentQ} / {questionSet.length}
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border">
          <p className="text-lg mb-4">{q?.q}</p>
          <div className="grid gap-2">
            {q?.options.map((op, i) => (
              <button
                key={i}
                className="w-full px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                onClick={() => handleAnswer(op)}
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Main page before starting exam
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Dropdowns setSelected={setSelected} />

      {/* Instructions */}
      <div className="bg-gray-50 p-4 rounded-lg border mb-6">
        <h3 className="text-red-500 font-bold mb-2">পরীক্ষার্থীদের প্রতি নির্দেশনাবলীঃ</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>তোমার প্রস্তুতি অনুযায়ী প্রশ্নের ধরণ সিলেক্ট করো।</li>
          <li>প্রতিটি ভুল উত্তরের জন্য নেগেটিভ মার্ক থাকবে।</li>
          <li>নির্ধারিত সময় শেষ হলে পরীক্ষা শেষ হবে।</li>
        </ul>
      </div>

      {/* Question & Time Input */}
      <div className="flex items-center gap-4 mb-6">
        <div>
          <label className="block text-sm">প্রশ্ন সংখ্যা</label>
          <input
            type="number"
            className="w-24 border rounded-lg p-2"
            value={questionsCount}
            onChange={(e) => setQuestionsCount(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm">সময় (মিনিট)</label>
          <input
            type="number"
            className="w-24 border rounded-lg p-2"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Start Button */}
      <button
        className="w-full bg-green-500 text-white py-2 rounded-lg shadow hover:bg-green-600 disabled:opacity-50"
        disabled={!selected.chapter || questionSet.length === 0}
        onClick={() => setStarted(true)}
      >
        শুরু করি
      </button>
    </div>
  );
};

export default Exampage;
