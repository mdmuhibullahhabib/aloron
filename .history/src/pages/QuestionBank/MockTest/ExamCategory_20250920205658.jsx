import React from "react";

const ExamCategory = ({ categories, onSelect, onGoBack }) => (
  <div className="p-6 bg-white rounded-xl shadow-md">
    <button onClick={onGoBack} className="mb-4 text-blue-500 font-medium">
      ← ফিরে যাও
    </button>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => onSelect(cat)}
          className="p-4 bg-blue-50 rounded-xl cursor-pointer hover:bg-blue-100 transition"
        >
          {cat.name}
        </div>
      ))}
    </div>
  </div>
);

export default ExamCategory;
