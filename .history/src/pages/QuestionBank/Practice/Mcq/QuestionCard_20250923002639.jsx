import React from "react";

const QuestionCard = ({ question, onSelectOption, isCorrect, showAnswer }) => {
  return (
    <div className="rounded-xl p-6 shadow-xl space-y-4 border border-[#343a49]">
      <h2 className="text-xl font-semibold ">{question.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, i) => {
          const isSelected = question.userAnswer === option;
          const isCorrectOption = option === question.correct;
          let buttonClass =
            "p-4 rounded-xl text-left transition-all duration-300";

          if (showAnswer) {
            if (isCorrectOption) {
              buttonClass +=
                "shadow-lg border-2 border-green-400";
            } else if (isSelected && !isCorrect) {
              buttonClass +=
                "shadow-lg border-2 border-red-400";
            } else {
              buttonClass += "hover:bg-[#3e4555]";
            }
          } else {
            if (isSelected) {
              buttonClass +=
                " bg-[#3e4555] text-white border-2 border-blue-500";
            } else {
              buttonClass += " bg-[#2e3445] text-white hover:bg-[#3e4555]";
            }
          }

          return (
            <button
              key={i}
              className={buttonClass}
              onClick={() => onSelectOption(question._id, option)}
              disabled={showAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
