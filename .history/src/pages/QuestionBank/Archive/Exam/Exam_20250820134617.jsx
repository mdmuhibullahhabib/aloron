import React, { useState } from "react";

const ExamPage = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [current]: option });
    setCurrent((prev) => prev + 1);
  };

  if (current >= questions.length) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Exam Finished ✅</h2>
        <p>You answered {Object.keys(answers).length} questions.</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold">{q.text}</h2>
      <div className="mt-4 space-y-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className="block w-full text-left p-3 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamPage;
