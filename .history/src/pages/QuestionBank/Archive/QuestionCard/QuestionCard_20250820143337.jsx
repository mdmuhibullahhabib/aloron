import React from "react";

const QuestionCard = ({ question }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <p className="font-semibold mb-2">{question.text}</p>
      <ul className="space-y-2">
        {question.options.map((opt, idx) => (
          <li
            key={idx}
            className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-emerald-100"
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
