import React from "react";

const categories = ["Varsity", "Medical", "Academic", "Main Book"];

const ExamCategory = ({ onNext, onBack }) => {
  return (
    <div>
      <button
        onClick={onBack}
        className="text-green-400 hover:underline mb-4"
      >
        ← পূর্বের ধাপে যান
      </button>

      <h3 className="text-xl font-semibold mb-4 text-center">প্রশ্ন স্ট্যান্ডার্ড</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => onNext(cat)}
            className="bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamCategory;
