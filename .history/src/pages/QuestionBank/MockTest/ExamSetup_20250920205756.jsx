import React, { useState } from "react";

const ExamSetup = ({ selectedChapters, onStart, onGoBack }) => {
  const [totalQuestions, setTotalQuestions] = useState(25);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <button onClick={onGoBack} className="mb-4 text-blue-500 font-medium">
        ← ফিরে যাও
      </button>

      <h2 className="text-xl font-bold mb-4 text-gray-800">
        পরীক্ষার সেটআপ
      </h2>

      <p className="text-gray-600 mb-2">
        নির্বাচিত অধ্যায়: {selectedChapters.length}
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">মোট প্রশ্ন</label>
        <input
          type="number"
          value={totalQuestions}
          onChange={(e) => setTotalQuestions(e.target.value)}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <button
        onClick={() => onStart({ totalQuestions })}
        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        পরীক্ষা শুরু করো
      </button>
    </div>
  );
};

export default ExamSetup;
