import React, { useState } from "react";

const ChapterSelect = ({ selectedSubject, chapters, onConfirm, onGoBack }) => {
  const [selectedChapters, setSelectedChapters] = useState([]);

  const toggleChapter = (chapter) => {
    setSelectedChapters((prev) =>
      prev.includes(chapter)
        ? prev.filter((c) => c !== chapter)
        : [...prev, chapter]
    );
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Back */}
      <button onClick={onGoBack} className="mb-4 text-blue-500 font-medium">
        ← ফিরে যাও
      </button>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {selectedSubject?.name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapters.map((chapter) => (
          <div
            key={chapter}
            onClick={() => toggleChapter(chapter)}
            className={`p-4 border rounded-xl cursor-pointer ${
              selectedChapters.includes(chapter)
                ? "bg-blue-100 border-blue-400"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            {chapter}
          </div>
        ))}
      </div>

      <button
        onClick={() => onConfirm(selectedChapters)}
        className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        পরবর্তী ধাপ
      </button>
    </div>
  );
};

export default ChapterSelect;
