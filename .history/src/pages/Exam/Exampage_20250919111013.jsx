import React, { useState, useEffect, useRef } from "react";
import Dropdowns from "./Dropdowns"; 
import useExamQuestion from "../../hooks/useExamQuestion";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useSubscription from "../../hooks/useSubscription";

const Exampage = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [time, setTime] = useState(12); // default 12 minutes
  const [questionsCount, setQuestionsCount] = useState(20); // default 20 questions
  const [currentQ, setCurrentQ] = useState(1);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({ group: "", subject: "", chapter: "" });
  const [questionSet, setQuestionSet] = useState([]);
  const [ data, isLoading, refetch ] = useExamQuestion(selected);
  const timerRef = useRef(null);
  const [remainingTime, setRemainingTime] = useState(time * 60); // seconds
  const [subscription] = useSubscription()
    const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(subscription[?.status)
  console.log(subscription[0]?._id)

  useEffect(() => {
    if (selected.group && selected.subject && selected.chapter && data) {
      const filtered = data.find(
        (item) =>
          item.group === selected.group &&
          item.subject === selected.subject &&
          item.chapter === selected.chapter
      );
      // Limit questions to default questionsCount
      setQuestionSet(filtered?.questions.slice(0, questionsCount) || []);
    } else {
      setQuestionSet([]);
    }
  }, [selected, data, questionsCount]);

  useEffect(() => {
    setRemainingTime(time * 60); // update remainingTime when time changes
  }, [time]);

  useEffect(() => {
    if (started) {
      timerRef.current = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setFinished(true); // auto submit
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [started]);

  const handleAnswer = (ans) => {
    if (ans === questionSet[currentQ - 1]?.answer) {
      setScore(score + 1);
    }
    if (currentQ < questionSet.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
      clearInterval(timerRef.current);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

    // ✅ [6] Start Exam button handler
  const handleStartExam = () => {
    if (!user?.email) {
      // যদি লগইন না করা থাকে → login page এ পাঠানো হবে
      navigate("/auth/signin", { state: { from: location } });
      return;
    }
    if (!subscriptionUser[0]?._id) {
      // যদি লগইন না করা থাকে → login page এ পাঠানো হবে
      navigate("/subscription", { state: { from: location } });
      return;
    }
    setStarted(true);
  };

  // if (isLoading) return <p className="text-center p-6">⏳ লোড হচ্ছে...</p>;

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">📊 Exam Performance</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border">
          <p className="text-lg">Total Questions: {questionSet.length}</p>
          <p className="text-lg">Correct: {score}</p>
          <p className="text-lg">Wrong: {questionSet.length - score}</p>
          <p className="text-lg font-bold">
            Score: {((score / questionSet.length) * 100).toFixed(2)}%
          </p>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          🔄 আবার চেষ্টা করো
        </button>
      </div>
    );
  }

  if (started) {
    const q = questionSet[currentQ - 1];
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">
            প্রশ্ন {currentQ} / {questionSet.length}
          </h2>
          <span className="text-red-500 font-bold">⏰ {formatTime(remainingTime)}</span>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border">
          <p className="text-lg mb-4">{q?.q}</p>
          <div className="grid gap-2">
            {q?.options.map((op, i) => (
              <button
                key={i}
                className="w-full px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                onClick={() => handleAnswer(op)}
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Dropdowns setSelected={setSelected} />

      <div className="bg-gray-50 p-4 rounded-lg border mb-6">
        <h3 className="text-red-500 font-bold mb-2">পরীক্ষার্থীদের প্রতি নির্দেশনাবলীঃ</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>তোমার প্রস্তুতি অনুযায়ী প্রশ্নের ধরণ সিলেক্ট করো।</li>
          <li>প্রতিটি ভুল উত্তরের জন্য নেগেটিভ মার্ক থাকবে।</li>
          <li>নির্ধারিত সময় শেষ হলে পরীক্ষা auto submit হবে।</li>
        </ul>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div>
          <label className="block text-sm">প্রশ্ন সংখ্যা</label>
          <input
            type="number"
            className="w-24 border rounded-lg p-2"
            value={questionsCount}
            onChange={(e) => setQuestionsCount(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm">সময় (মিনিট)</label>
          <input
            type="number"
            className="w-24 border rounded-lg p-2"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </div>
      </div>

      <button
        className="w-full bg-green-500 text-white py-2 rounded-lg shadow hover:bg-green-600 disabled:opacity-50"
        disabled={!selected.chapter || questionSet.length === 0}
        onClick={handleStartExam}
      >
        শুরু করি
      </button>
    </div>
  );
};

export default Exampage;
