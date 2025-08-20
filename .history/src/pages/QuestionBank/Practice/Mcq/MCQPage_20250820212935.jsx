import React, { useState, useEffect } from "react";

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
    question: "$(P+\\frac{a}{V^2})(V-b) = RT$ সমীকরণে a এর মাত্রা কত?",
    options: ["$ML^2T^{-2}$", "$ML^{-1}T^{-2}$", "$ML^{-1}T^{-1}$", "$ML^5T^{-2}$"],
    correct: "$ML^5T^{-2}$",
    userAnswer: null,
  },
  {
    id: 3,
    question: "যখন প্রধান কোয়ান্টাম সংখ্যা n এর মান 3 হয় তখন সহকারী কোয়ান্টাম সংখ্যা l এর মান কত হবে?",
    options: ["3", "3s, 3p, 3d", "0, 1, 2", "None"],
    correct: "0, 1, 2",
    userAnswer: null,
  },
];

// Reusable component for the question card
const QuestionCard = ({ question, onSelectOption, isCorrect, showAnswer }) => {
  return (
    <div className="bg-[#242939] rounded-xl p-6 shadow-xl space-y-4 border border-[#343a49]">
      <h2 className="text-xl font-semibold text-white">{question.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, i) => {
          const isSelected = question.userAnswer === option;
          const isCorrectOption = option === question.correct;
          let buttonClass = "p-4 rounded-xl text-left transition-all duration-300";

          if (showAnswer) {
            if (isCorrectOption) {
              buttonClass += " bg-green-500 text-white shadow-lg border-2 border-green-400";
            } else if (isSelected && !isCorrect) {
              buttonClass += " bg-red-500 text-white shadow-lg border-2 border-red-400";
            } else {
              buttonClass += " bg-[#2e3445] text-white hover:bg-[#3e4555]";
            }
          } else {
            if (isSelected) {
              buttonClass += " bg-[#3e4555] text-white border-2 border-blue-500";
            } else {
              buttonClass += " bg-[#2e3445] text-white hover:bg-[#3e4555]";
            }
          }

          return (
            <button
              key={i}
              className={buttonClass}
              onClick={() => onSelectOption(question.id, option)}
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

const MCQPage = ({ subjectId, paperId, chapter, onGoBack }) => {
  const [questions, setQuestions] = useState(fakeQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    // Reset timer when a new question is displayed
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
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, userAnswer: selectedOption } : q
      )
    );
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setTimer(30); // Reset timer for next question
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handleUnlockExplanation = () => {
    alert("This would unlock the explanation in a real app!");
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = currentQuestion.userAnswer === currentQuestion.correct;

  return (
    <div className="p-8 text-white bg-[#1a1e2a] min-h-screen font-sans flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6">
        <button onClick={onGoBack} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2e3445] text-gray-400 hover:bg-[#3e4555] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div className="text-2xl font-bold text-gray-200">
          {subjectId} / {paperId} / {chapter}
        </div>
        <div className="w-10 h-10"></div> {/* Spacer to center the title */}
      </div>

      <div className="w-full max-w-2xl">
        <div className="relative mb-6 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-1000 ease-linear"
            style={{ width: `${(timer / 30) * 100}%` }}
          ></div>
          <span className="absolute top-0 right-2 text-white text-xs font-bold">{timer}s</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">
            {showAnswer ? (
              isCorrect ? (
                <span className="text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  সঠিক উত্তর
                </span>
              ) : (
                <span className="text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  ভুল উত্তর
                </span>
              )
            ) : (
              "আপনার উত্তরটি দিন"
            )}
          </span>
        </div>
        
        <QuestionCard
          question={currentQuestion}
          onSelectOption={handleSelectOption}
          isCorrect={isCorrect}
          showAnswer={showAnswer}
        />

        {showAnswer && (
          <div className="mt-8 flex flex-col items-center space-y-4">
            <button
              onClick={handleUnlockExplanation}
              className="bg-[#242939] text-blue-500 py-3 px-6 rounded-full font-semibold border-2 border-blue-500 hover:bg-[#2e3445] transition-colors"
            >
              ব্যাখ্যা আনলক করতে চর্চা প্রিমিয়াম এ আপগ্রেড করো
            </button>
            <button
              onClick={handleNextQuestion}
              className="flex items-center space-x-2 bg-[#2e3445] text-white py-3 px-6 rounded-full font-semibold border-2 border-[#3e4555] hover:bg-[#3e4555] transition-colors"
            >
              <span>নতুন প্রশ্ন</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MCQPage;
