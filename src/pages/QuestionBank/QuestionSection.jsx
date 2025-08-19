import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionSection = ({ questions }) => {
  return (
    <div className="mt-8 space-y-8">
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionSection;
