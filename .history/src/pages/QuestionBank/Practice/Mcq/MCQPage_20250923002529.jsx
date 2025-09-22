import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import TimerBar from "./TimerBar";
import AnswerStatus from "./AnswerStatus";
import NavigationButtons from "./NavigationButtons";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MCQPage = ({ subjectId, paperId, chapter, onGoBack }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(30);

  const axiosSecure = useAxiosSecure();

  // React Query to fetch filtered questions
  const { data, isLoading, isError } = useQuery({
    queryKey: ["questions", subjectId, paperId, chapter],
    queryFn: async () => {
      if (!subjectId || !paperId || !chapter) return [];
      const res = await axiosSecure.get(
        `/practice-questions?subject=${subjectId}&paper=${paperId}&chapter=${chapter}`
      );
      return res.data;
    },
    enabled: !!subjectId && !!paperId && !!chapter,
  });

  // Update local state when query data changes
  useEffect(() => {
    if (data?.length) {
      setQuestions(data);
      setCurrentQuestionIndex(0);
      setShowAnswer(false);
      setTimer(30);
    }
  }, [data]);

  // Timer logic
  useEffect(() => {
    if (showAnswer || questions.length === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Auto-submit when timeout
          setQuestions((prev) =>
            prev.map((q, i) =>
              i === currentQuestionIndex && !q.userAnswer
                ? { ...q, userAnswer: "timeout" }
                : q
            )
          );
          setShowAnswer(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex, showAnswer, questions.length]);

  // Handle option selection
  const handleSelectOption = (questionId, selectedOption) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q._id === questionId ? { ...q, userAnswer: selectedOption } : q
      )
    );
    setShowAnswer(true);
  };

  // Handle next question
  const handleNextQuestion = () => {
    setShowAnswer(false);
    setTimer(30);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect =
    currentQuestion?.userAnswer === currentQuestion?.correct;

  return (
    <div className="p-8 min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={onGoBack}
          className="p-2 rounded hover:bg-gray-600 transition"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">
          {subjectId} / {paperId} / {chapter}
        </h2>
        <div className="w-10" />
      </div>

      {/* Loading/Error */}
      {isLoading && <p className="">লোড হচ্ছে...</p>}
      {isError && (
        <p className="">প্রশ্ন লোড করতে সমস্যা হয়েছে!</p>
      )}

      {/* Questions */}
      {questions.length > 0 && !isLoading && !isError ? (
        <div className="w-full max-w-2xl space-y-4">
          <TimerBar timer={timer} />
          <AnswerStatus showAnswer={showAnswer} isCorrect={isCorrect} />
          <QuestionCard
            question={currentQuestion}
            onSelectOption={handleSelectOption}
            showAnswer={showAnswer}
            isCorrect={isCorrect}
          />
          {showAnswer && (
            <NavigationButtons
              onNext={handleNextQuestion}
              onUnlock={() => alert("আপগ্রেড করে ব্যাখ্যা দেখুন")}
            />
          )}
        </div>
      ) : (
        !isLoading && <p className="">কোনও প্রশ্ন পাওয়া যায়নি...</p>
      )}
    </div>
  );
};

export default MCQPage;
