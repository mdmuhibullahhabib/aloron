import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import Dashboard from "./Dashboard";

// Dummy Question Bank (HSC + Admission)
const questionBank = {
  HSC: {
    Physics: [
      { id: 1, text: "ওহমের সূত্র কে প্রবর্তন করেন?", options: ["ওহম", "নিউটন", "আইনস্টাইন", "ফ্যারাডে"], correctAnswer: "ওহম" },
      { id: 2, text: "আলো এর বেগ কত?", options: ["3x10^8 m/s", "1x10^6 m/s", "5x10^7 m/s", "9.8 m/s^2"], correctAnswer: "3x10^8 m/s" },
    ],
    Chemistry: [
      { id: 3, text: "H2O এর রাসায়নিক নাম কী?", options: ["হাইড্রোজেন", "অক্সিজেন", "জল", "অ্যাসিড"], correctAnswer: "জল" },
    ],
  },
  Admission: {
    Medical: [
      { id: 4, text: "মানব দেহে কত লিটার রক্ত থাকে?", options: ["৩-৪", "৪-৬", "৮-১০", "২-৩"], correctAnswer: "৪-৬" },
    ],
    Engineering: [
      { id: 5, text: "Binary 101 এর মান কত?", options: ["4", "5", "6", "7"], correctAnswer: "5" },
    ],
  },
};

const Exampage = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [duration, setDuration] = useState(10); // minutes
  const [timeLeft, setTimeLeft] = useState(0);

  const [examConfig, setExamConfig] = useState({
    section: "HSC",
    category: "Physics",
    questionCount: 5,
    duration: 10,
  });

  // Timer countdown
  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && started && !finished) {
      handleFinish();
    }
  }, [timeLeft, started, finished]);

  // Select answer
  const handleAnswerSelect = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQ] = answer;
    setUserAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      handleFinish();
    }
  };

  // Start exam
  const handleStart = () => {
    const qBank =
      questionBank[examConfig.section]?.[examConfig.category] || [];

    // Randomize & limit
    const selectedQuestions = qBank
      .sort(() => 0.5 - Math.random())
      .slice(0, examConfig.questionCount);

    setQuestions(selectedQuestions);
    setUserAnswers(Array(selectedQuestions.length).fill(null));
    setStarted(true);
    setFinished(false);
    setCurrentQ(0);
    setTimeLeft(examConfig.duration * 60);
  };

  // Finish exam
  const handleFinish = () => {
    setFinished(true);
    setStarted(false);
  };

  if (finished) {
    return (
      <Dashboard
        questions={questions}
        userAnswers={userAnswers}
        onRetake={() => window.location.reload()}
      />
    );
  }

  if (started) {
    return (
      <div className="max-w-3xl mx-auto p-6 relative">
        {/* Timer */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold">
          ⏱ {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </div>

        <h2 className="text-xl font-bold mb-4">
          প্রশ্ন {currentQ + 1} / {questions.length}
        </h2>

        <QuestionCard
          question={questions[currentQ]}
          selectedAnswer={userAnswers[currentQ]}
          onAnswerSelect={handleAnswerSelect}
        />
      </div>
    );
  }

  // Exam Config UI
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <select
          className="border rounded-lg p-2"
          value={examConfig.section}
          onChange={(e) =>
            setExamConfig({ ...examConfig, section: e.target.value })
          }
        >
          <option>HSC</option>
          <option>Admission</option>
        </select>
        <select
          className="border rounded-lg p-2"
          value={examConfig.category}
          onChange={(e) =>
            setExamConfig({ ...examConfig, category: e.target.value })
          }
        >
          <option>Physics</option>
          <option>Chemistry</option>
          <option>Medical</option>
          <option>Engineering</option>
        </select>
        <input
          type="number"
          min="1"
          max="20"
          className="border rounded-lg p-2"
          value={examConfig.questionCount}
          onChange={(e) =>
            setExamConfig({
              ...examConfig,
              questionCount: parseInt(e.target.value),
            })
          }
        />
        <input
          type="number"
          min="1"
          max="60"
          className="border rounded-lg p-2"
          value={examConfig.duration}
          onChange={(e) =>
            setExamConfig({
              ...examConfig,
              duration: parseInt(e.target.value),
            })
          }
        />
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="text-red-500 font-bold mb-2">📌 নির্দেশনাবলীঃ</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>প্রশ্ন সংখ্যা ও সময় বেছে নিন।</li>
          <li>সময় শেষ হলে পরীক্ষা স্বয়ংক্রিয়ভাবে শেষ হবে।</li>
          <li>ভুল উত্তরের জন্য নেগেটিভ মার্ক যোগ করা যাবে (চাইলে)।</li>
        </ul>
      </div>

      <button
        className="w-full bg-green-500 text-white py-3 rounded-lg shadow hover:bg-green-600"
        onClick={handleStart}
      >
        🚀 পরীক্ষা শুরু করি
      </button>
    </div>
  );
};

export default Exampage;
