import React, { useState } from "react";

const ExamSetup = ({ subject, category, onBack }) => {
  const [time, setTime] = useState(25);
  const [examType, setExamType] = useState("MCQ");

  return (
    <div>
      <button
        onClick={onBack}
        className="text-green-400 hover:underline mb-4"
      >
        ← পূর্বের ধাপে যান
      </button>

      <h3 className="text-xl font-semibold mb-4 text-center">শুরু করুন</h3>

      {/* Time input */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
        <label className="text-gray-300">মোট সময় (মিনিট):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-24 text-center bg-gray-800 border border-gray-600 rounded py-2"
        />
      </div>

      {/* Exam Type */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setExamType("MCQ")}
          className={`px-6 py-2 rounded-lg ${
            examType === "MCQ"
              ? "bg-purple-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          MCQ
        </button>
        <button
          onClick={() => setExamType("Written")}
          className={`px-6 py-2 rounded-lg ${
            examType === "Written"
              ? "bg-purple-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Written
        </button>
      </div>

      {/* Start Exam Button */}
      <div className="flex justify-center">
        <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          পরীক্ষা শুরু করুন
        </button>
      </div>
    </div>
  );
};

export default ExamSetup;
