import React from "react";

const AnswerStatus = ({ showAnswer, isCorrect }) => {
  return (
    <span className="text-sm">
      {showAnswer ? (
        isCorrect ? (
          <span className="text-green-500">✅ সঠিক উত্তর</span>
        ) : (
          <span className="text-red-500">❌ ভুল উত্তর</span>
        )
      ) : (
        "আপনার উত্তরটি দিন"
      )}
    </span>
  );
};

export default AnswerStatus;
