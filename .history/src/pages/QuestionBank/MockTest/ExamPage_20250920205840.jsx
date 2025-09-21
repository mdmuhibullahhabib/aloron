import React, { useState } from "react";

const ExamPage = ({ questions, onSubmit }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  const q = questions[current];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        প্রশ্ন {current + 1} / {questions.length}
      </h2>
      <p className="mb-4 text-gray-700">{q.text}</p>

      <div className="space-y-2">
        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            className={`w-full p-3 border rounded-lg ${
              answers[current] === opt
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          পূর্ববর্তী
        </button>
        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            পরবর্তী
          </button>
        ) : (
          <button
            onClick={() => onSubmit(answers)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            জমা দাও
          </button>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
