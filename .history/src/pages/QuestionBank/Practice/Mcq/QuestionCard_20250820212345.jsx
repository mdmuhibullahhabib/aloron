import React from "react";

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option)}
            className="w-full bg-gray-700 hover:bg-gray-600 text-left p-3 rounded-lg transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
