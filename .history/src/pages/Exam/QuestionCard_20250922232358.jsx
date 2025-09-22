import React from "react";

const QuestionCard = ({ question, onAnswerSelect, selectedAnswer }) => {
  return (
    <div className="p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswerSelect(option)}
            className={`w-full text-left py-3 px-4 rounded-lg border transition
              ${
                selectedAnswer === option
                  ? " border-blue-500"
                  : " border-gray-300 hover:border-blue-400"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
