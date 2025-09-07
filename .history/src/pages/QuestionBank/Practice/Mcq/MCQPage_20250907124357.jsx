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
  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['questions', subjectId, paperId, chapter],
    queryFn: async () => {
      if (!subjectId || !paperId || !chapter) return [];
      const res = await axiosSecure.get(
        `/practice-questions?subject=${subjectId}&paper=${paperId}&chapter=${chapter}`
      );
      return res.data;
    },
    enabled: !!subjectId && !!paperId && !!chapter, // only fetch when all params exist
  });

  useEffect(() => {
    if (showAnswer || questions.length === 0) return;
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
  }, [currentQuestionIndex, showAnswer, questions.length]);

  const handleSelectOption = (questionId, selectedOption) => {
    setQuestions((prev) =>
      prev.map((q) => (q._id === questionId ? { ...q, userAnswer: selectedOption } : q))
    );
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setTimer(30);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = currentQuestion?.userAnswer === currentQuestion?.correct;

  return (
    <div className="p-8 min-h-screen bg-[#1a1e2a] text-white flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6">
        <button onClick={onGoBack} className="bg-gray-700 p-2 rounded">←</button>
        <h2 className="text-xl font-bold">{subjectId} / {paperId} / {chapter}</h2>
        <div className="w-10" />
      </div>

      {questions.length > 0 ? (
        <div className="w-full max-w-2xl">
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
              onUnlock={() => alert("Upgrade to see explanation")}
            />
          )}
        </div>
      ) : (
        <p className="text-gray-400">কোনও প্রশ্ন পাওয়া যায়নি...</p>
      )}
    </div>
  );
};

export default MCQPage;
