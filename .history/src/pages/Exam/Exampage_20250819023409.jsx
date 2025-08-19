import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExamPage = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [time, setTime] = useState(12);
  const [questions, setQuestions] = useState(20);
  const [currentQ, setCurrentQ] = useState(1);
  const [score, setScore] = useState(0);

  // Dummy Questions
  const questionSet = [
    { id: 1, q: "বাংলাদেশের রাজধানী কোথায়?", options: ["ঢাকা", "চট্টগ্রাম", "খুলনা", "সিলেট"], correct: "ঢাকা" },
    { id: 2, q: "SSC এর পূর্ণরূপ কী?", options: ["Secondary School Certificate", "School Standard Certificate", "Super School Course", "None"], correct: "Secondary School Certificate" },
    { id: 3, q: "জাতীয় কবি কে?", options: ["রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "জসীম উদ্দিন", "সেলিম আল দীন"], correct: "কাজী নজরুল ইসলাম" },
  ];

  const handleAnswer = (ans) => {
    if (ans === questionSet[currentQ - 1].correct) {
      setScore(score + 1);
    }
    if (currentQ < questionSet.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">📊 Exam Performance</h2>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg">Total Questions: {questionSet.length}</p>
            <p className="text-lg">Correct: {score}</p>
            <p className="text-lg">Wrong: {questionSet.length - score}</p>
            <p className="text-lg font-bold">
              Score: {(score / questionSet.length) * 100}%
            </p>
          </CardContent>
        </Card>
        <Button className="mt-4" onClick={() => window.location.reload()}>
          🔄 Try Again
        </Button>
      </div>
    );
  }

  if (started) {
    const q = questionSet[currentQ - 1];
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">
          প্রশ্ন {currentQ} / {questionSet.length}
        </h2>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg mb-4">{q.q}</p>
            <div className="grid gap-2">
              {q.options.map((op, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="w-full"
                  onClick={() => handleAnswer(op)}
                >
                  {op}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Filter Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <select className="select select-bordered w-full">
          <option>সেকশন</option>
          <option>SSC</option>
          <option>Admission</option>
        </select>
        <select className="select select-bordered w-full">
          <option>ভর্তি পরীক্ষা</option>
          <option>Medical</option>
          <option>Engineering</option>
        </select>
        <select className="select select-bordered w-full">
          <option>বিষয়</option>
          <option>Physics</option>
          <option>Chemistry</option>
        </select>
        <select className="select select-bordered w-full">
          <option>অধ্যায়</option>
          <option>Chapter 1</option>
          <option>Chapter 2</option>
        </select>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 p-4 rounded-lg border mb-6">
        <h3 className="text-red-500 font-bold mb-2">পরীক্ষার্থীদের প্রতি নির্দেশনাবলীঃ</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>তোমার প্রস্তুতি অনুযায়ী প্রশ্নের ধরণ সিলেক্ট করো।</li>
          <li>প্রতিটি ভুল উত্তরের জন্য নেগেটিভ মার্ক থাকবে।</li>
          <li>নির্ধারিত সময় শেষ হলে পরীক্ষা শেষ হবে।</li>
        </ul>
      </div>

      {/* Question & Time Input */}
      <div className="flex items-center gap-4 mb-6">
        <div>
          <label className="block text-sm">প্রশ্ন সংখ্যা</label>
          <input
            type="number"
            className="input input-bordered w-24"
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm">সময় (মিনিট)</label>
          <input
            type="number"
            className="input input-bordered w-24"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      {/* Start Button */}
      <Button className="btn btn-primary w-full" onClick={() => setStarted(true)}>
        শুরু করি
      </Button>
    </div>
  );
};


export default Exampage