import React from "react";
import { subjectsData } from "./subjectsData";

const ChaptersPage = ({ subjectId, paperId, onGoBack, onChapterSelect }) => {
  const chapters = subjectsData[subjectId].papers[paperId];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white w-full p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl flex items-center justify-between mb-8">
          <button
            onClick={onGoBack}
            className="text-gray-400 hover:text-white"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold">{paperId} পত্র</h1>
          <div className="w-6"></div>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-4 shadow-lg flex items-center justify-between hover:bg-gray-700 cursor-pointer"
              onClick={() => onChapterSelect(chapter)}
            >
              <span className="text-xl">{chapter}</span>
              <span>→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChaptersPage;
