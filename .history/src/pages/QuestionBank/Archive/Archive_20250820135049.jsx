import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

// ---------------- BUP Nested Data ----------------
const bupData = {
  id: "bup",
  title: "বিইউপি",
  subtitle: "এডমিশন",
  color: "#10b981",
  faculties: [
    {
      id: "fst",
      title: "FST",
      subtitle: "বিভাগ",
      color: "#f97316",
      exam_series: [
        { id: "23-24", year: "23-24", total_questions: 100, duration_minutes: 60 },
        { id: "22-23", year: "22-23", total_questions: 100, duration_minutes: 60 },
        { id: "21-22", year: "21-22", total_questions: 100, duration_minutes: 60 },
      ],
    },
    { id: "fass", title: "FASS", subtitle: "বিভাগ", color: "#ca8a04", exam_series: [] },
    { id: "fsss", title: "FSSS", subtitle: "বিভাগ", color: "#a855f7", exam_series: [] },
  ],
};

const examQuestions = {
  "23-24": [
    { id: 1, text: "1.75 eV শক্তির ফোটনের তরঙ্গদৈর্ঘ্য কত?", options: ["770.4 nm", "750.4 nm", "710.4 nm", "790.4 nm"] },
    { id: 2, text: "কোনো সেমিকন্ডাক্টরের প্রাবল্যতা কত?", options: ["5.57x10^-11", "5.57x10^-10", "5.57x10^-12", "5.57x10^-13"] },
  ],
};

// ---------------- Main Component ----------------
const Archive = () => {
  const [stage, setStage] = useState("institution"); // institution → faculty → year → exam
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [showExam, setShowExam] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">আর্কাইভ</h1>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="অনায়াসে খুঁজে ফেলুন"
            className="pl-4 pr-10 py-2 w-full rounded-full border border-gray-300 focus:ring-2 focus:ring-emerald-500"
          />
          <MdOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </header>

      {/* Stage 1: Institution (BUP Card) */}
      {stage === "institution" && (
        <div
          className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition"
          style={{ backgroundColor: bupData.color }}
          onClick={() => setStage("faculty")}
        >
          <h3 className="text-white text-lg font-semibold">{bupData.title}</h3>
          <p className="text-white opacity-90">{bupData.subtitle}</p>
        </div>
      )}

      {/* Stage 2: Faculties */}
      {stage === "faculty" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {bupData.faculties.map((f) => (
            <div
              key={f.id}
              className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition"
              style={{ backgroundColor: f.color }}
              onClick={() => {
                setSelectedFaculty(f);
                setStage("year");
              }}
            >
              <h3 className="text-white text-lg font-semibold">{f.title}</h3>
              <p className="text-white opacity-90">{f.subtitle}</p>
            </div>
          ))}
        </div>
      )}

      {/* Stage 3: Yearly Question Sets */}
      {stage === "year" && selectedFaculty && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {selectedFaculty.exam_series.map((exam) => (
            <div
              key={exam.id}
              className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition bg-emerald-500"
              onClick={() => {
                setSelectedYear(exam.id);
                setShowExam(true);
              }}
            >
              <h3 className="text-white text-lg font-semibold">{exam.year}</h3>
              <p className="text-white opacity-90">Questions: {exam.total_questions}</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal: Start Exam */}
      {showExam && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Exam {selectedYear}</h2>
            <button
              className="w-full bg-emerald-500 text-white py-2 rounded-lg"
              onClick={() => {
                setStage("exam");
                setShowExam(false);
              }}
            >
              Start Exam
            </button>
            <button className="w-full mt-2 bg-gray-200 py-2 rounded-lg" onClick={() => setShowExam(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Stage 4: Exam Questions */}
      {stage === "exam" && selectedYear && (
        <div className="space-y-6">
          {examQuestions[selectedYear].map((q) => (
            <div key={q.id} className="p-4 bg-white rounded-xl shadow-md">
              <p className="font-semibold mb-2">{q.text}</p>
              <ul className="space-y-2">
                {q.options.map((opt, idx) => (
                  <li key={idx} className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-emerald-100">
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
