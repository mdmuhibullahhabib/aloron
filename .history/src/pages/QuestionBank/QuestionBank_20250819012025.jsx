import React from "react";
import Header from "./Header";
import FilterSection from "./FilterSection";
import QuestionSection from "./QuestionSection";

// Fake data (move to a separate file if you want)
import { fakeQuestions } from "../data/fakeQuestions";

const QuestionBank = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4 max-w-6xl">
        <FilterSection />
        <QuestionSection questions={fakeQuestions} />
      </div>
    </div>
  );
};

export default QuestionBank;
