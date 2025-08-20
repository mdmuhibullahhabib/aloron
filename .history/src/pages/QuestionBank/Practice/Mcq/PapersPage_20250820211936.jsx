import React from "react";
import { subjectsData } from "../data/subjectsData";

const PapersPage = ({ subjectId, onGoBack, onSelectPaper }) => {
  const subject = subjectsData[subjectId];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <button onClick={onGoBack} className="text-gray-400 hover:text-white">← Back</button>
          <h1 className="text-2xl font-bold">{subject.title}</h1>
          <div className="w-6" />
        </div>
        <div className="space-y-4">
          {Object.keys(subject.papers).map((paperId) => (
            <div
              key={paperId}
              onClick={() => onSelectPaper(paperId)}
              className="bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-xl p-6 shadow-lg"
            >
              {paperId} পত্র
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PapersPage;
