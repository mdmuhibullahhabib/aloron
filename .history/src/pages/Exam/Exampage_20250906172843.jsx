import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import Dashboard from "./Dashboard";

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

  const [section, setSection] = useState("HSC");
  const [category, setCategory] = useState("Physics");
  const [chapter, setChapter] = useState("Chapter 1");
  const [time, setTime] = useState(10); // minutes
  const [questionsCount, setQuestionsCount] = useState(5);
  const [timeLeft, setTimeLeft] = useState(0);

  // countdown timer
  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && started && !finished) {
      handleFinish();
    }
  }, [timeLeft, started, finished]);

  const handleStart = () => {
    const qBank = questionBank[section]?.[category] || [];
    const selected = qBank.sort(() => 0.5 - Math.random()).slice(0, questionsCount);

    setQuestions(selected);
    setUserAnswers(Array(selected.length).fill(null));
    setCurrentQ(0);
    setStarted(true);
    setFinished(false);
    setTimeLeft(time * 60);
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQ] = answer;
    setUserAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      handleFinish();
    }
  };

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
      <div className="max-w-2xl mx-auto p-6 relative">
        {/* Timer */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold">
          ⏱ {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </div>

        <h2 className="text-xl font-semibold mb-4">
          প্রশ্ন {currentQ + 1} / {questions.length}
        </h2>

        <QuestionCard
          question={questions[currentQ]}
          selectedAnswer={userAnswers[currentQ]}
          onAnswerSelect={handleAnswer}
        />
      </div>
    );
  }

  // original top section UI (unchanged, just wired with state)
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Filter Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <select className="w-full border rounded-lg p-2" value={section} onChange={(e) => setSection(e.target.value)}>
          <option>HSC</option>
          <option>Admission</option>
        </select>
        <select className="w-full border rounded-lg p-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Physics</option>
          <option>Chemistry</option>
          <option>Medical</option>
          <option>Engineering</option>
        </select>
        <select className="w-full border rounded-lg p-2" value={chapter} onChange={(e) => setChapter(e.target.value)}>
          <option>Chapter 1</option>
          <option>Chapter 2</option>
        </select>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 p-4 rounded-lg border mb-6">
        <h3 className="text-red-500 font-bold mb-2">পরীক্ষার্থীদের প্রতি নির্দেশনাবলীঃ</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>তোমার প্রস্তুতি অনুযায়ী প্রশ্নের ধরণ সিলেক্ট করো।</li>
          <li>প্রশ্ন সংখ্যা এবং সময় নির্ধারণ করো।</li>
          <li>সময় শেষ হলে পরীক্ষা স্বয়ংক্রিয়ভাবে শেষ হবে।</li>
        </ul>
      </div>

      {/* Question & Time Input */}
      <div className="flex items-center gap-4 mb-6">
        <div>
          <label className="block text-sm">প্রশ্ন সংখ্যা</label>
          <input
            type="number"
            className="w-24 border rounded-lg p-2"
            value={questionsCount}
            onChange={(e) => setQuestionsCount(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm">সময় (মিনিট)</label>
          <input
            type="number"
            className="w-24 border rounded-lg p-2"
            value={time}
            onChange={(e) => setTime(parseInt(e.target.value))}
          />
        </div>
      </div>

      {/* Start Button */}
      <button
        className="w-full bg-green-500 text-white py-2 rounded-lg shadow hover:bg-green-600"
        onClick={handleStart}
      >
        শুরু করি
      </button>
    </div>
  );
};

export default Exampage;
