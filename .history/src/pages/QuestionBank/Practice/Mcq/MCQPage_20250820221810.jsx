import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import TimerBar from "./TimerBar";
import AnswerStatus from "./AnswerStatus";
import NavigationButtons from "./NavigationButtons";

import { fakeQuestions } from "./fakeQuestions";
console.log(fakeQuestions)
const fakeQuestions = [
  {
    id: 1,
    question: "ভর সংরক্ষণ সূত্র কে প্রবর্তন করেন?",
    options: ["ল্যাভয়সিয়ার", "নিউটন", "ডাল্টন", "আইনস্টাইন"],
    correct: "ল্যাভয়সিয়ার",
    userAnswer: null,
  },
  {
    id: 2,
    question:
      "$(P+\\frac{a}{V^2})(V-b) = RT$ সমীকরণে a এর মাত্রা কত?",
    options: [
      "$ML^2T^{-2}$",
      "$ML^{-1}T^{-2}$",
      "$ML^{-1}T^{-1}$",
      "$ML^5T^{-2}$",
    ],
    correct: "$ML^5T^{-2}$",
    userAnswer: null,
  },
  {
    id: 3,
    question:
      "যখন প্রধান কোয়ান্টাম সংখ্যা n এর মান 3 হয় তখন সহকারী কোয়ান্টাম সংখ্যা l এর মান কত হবে?",
    options: ["3", "3s, 3p, 3d", "0, 1, 2", "None"],
    correct: "0, 1, 2",
    userAnswer: null,
  },
];

const MCQPage = ({ subjectId, paperId, chapter, onGoBack }) => {
  const [questions, setQuestions] = useState(fakeQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (showAnswer) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowAnswer(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQuestionIndex, showAnswer]);

  const handleSelectOption = (questionId, selectedOption) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, userAnswer: selectedOption } : q
      )
    );
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setTimer(30);
    setCurrentQuestionIndex(
      (prevIndex) => (prevIndex + 1) % questions.length
    );
  };

  const handleUnlockExplanation = () => {
    alert("This would unlock the explanation in a real app!");
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = currentQuestion.userAnswer === currentQuestion.correct;

  return (
    <div className="p-8 text-white bg-[#1a1e2a] min-h-screen font-sans flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={onGoBack}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2e3445] text-gray-400 hover:bg-[#3e4555] transition-colors"
        >
          ←
        </button>
        <div className="text-2xl font-bold text-gray-200">
          {subjectId} / {paperId} / {chapter}
        </div>
        <div className="w-10 h-10"></div>
      </div>

      {/* Timer */}
      <div className="w-full max-w-2xl">
        <TimerBar timer={timer} />

        {/* Status */}
        <div className="flex justify-between items-center mb-4">
          <AnswerStatus showAnswer={showAnswer} isCorrect={isCorrect} />
        </div>

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          onSelectOption={handleSelectOption}
          isCorrect={isCorrect}
          showAnswer={showAnswer}
        />

        {/* Buttons */}
        {showAnswer && (
          <NavigationButtons
            onNext={handleNextQuestion}
            onUnlock={handleUnlockExplanation}
          />
        )}
      </div>
    </div>
  );
};

export default MCQPage;
