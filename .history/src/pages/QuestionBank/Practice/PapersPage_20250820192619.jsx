import React from "react";
import { subjectsData } from "../data/subjectsData";

const PapersPage = ({ subjectId, onGoBack, onPaperSelect }) => {
  const subject = subjectsData[subjectId];
  const paperKeys = Object.keys(subject.papers);

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
          <h1 className="text-2xl font-bold">{subject.title}</h1>
          <div className="w-6"></div>
        </div>

        <div className="space-y-6">
          {paperKeys.map((paper) => (
            <div
              key={paper}
              className="bg-gray-800 rounded-xl p-6 shadow-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer"
              onClick={() => onPaperSelect(paper)}
            >
              <span className="text-2xl font-medium">{paper} পত্র</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PapersPage;
