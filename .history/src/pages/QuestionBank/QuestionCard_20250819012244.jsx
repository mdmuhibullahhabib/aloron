import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionSolution from "./QuestionSolution";

const QuestionCard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer(!showAnswer);

  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={toggleAnswer}
    >
      <QuestionHeader question={question} showAnswer={showAnswer} />
      <QuestionSolution question={question} showAnswer={showAnswer} />
    </div>
  );
};

export default QuestionCard;
