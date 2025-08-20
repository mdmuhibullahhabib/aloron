import React from "react";
import { subjectsData } from "../data/subjectsData";

const SubjectList = ({ onSelectSubject }) => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">বিষয় নির্বাচন করুন</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(subjectsData).map((subjectId) => (
            <button
              key={subjectId}
              onClick={() => onSelectSubject(subjectId)}
              className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 shadow-lg text-lg font-semibold"
            >
              {subjectsData[subjectId].title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectList;
