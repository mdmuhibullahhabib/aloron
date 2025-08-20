import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

// ❗ Later you can move questions to separate JSON files per subject
const fakeQuestions = [
  {
    id: 1,
    question: "ভূমিকম্পের প্রধান কারণ কী?",
    options: [
      "আগ্নেয়গিরির অগ্ন্যুৎপাত",
      "পৃথিবীর অভ্যন্তরীণ শক্তি",
      "জলবায়ু পরিবর্তন",
      "অতিবৃষ্টি"
    ],
    correct: "পৃথিবীর অভ্যন্তরীণ শক্তি",
  },
  {
    id: 2,
    question: "অম্লের pH মান কেমন হয়?",
    options: ["৭ এর নিচে", "৭ এর সমান", "৭ এর উপরে", "সবগুলো"],
    correct: "৭ এর নিচে",
  },
];

const MCQP = ({ subjectId, paperId, chapter, onGoBack }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === fakeQuestions[current].correct) {
      setScore(score + 1);
    }

    if (current < fakeQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onGoBack}
            className="text-gray-400 hover:text-white"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold">
            {chapter} (MCQ)
          </h1>
          <div className="w-6" />
        </div>

        {!finished ? (
          <QuestionCard
            question={fakeQuestions[current]}
            onAnswer={handleAnswer}
          />
        ) : (
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 পরীক্ষার সমাপ্তি!</h2>
            <p className="text-lg">আপনার স্কোর: {score}/{fakeQuestions.length}</p>
            <button
              onClick={onGoBack}
              className="mt-6 bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg font-semibold"
            >
              অধ্যায়ে ফিরে যান
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MCQ;
