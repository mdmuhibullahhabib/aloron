import React from "react";
import { subjectsData } from "../data/subjectsData";

const Practice = ({ onSubjectSelect }) => {
  const subjectKeys = Object.keys(subjectsData);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white w-full p-8">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">ফ্রি প্র্যাকটিস</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectKeys.map((key) => {
            const subject = subjectsData[key];
            return (
              <div
                key={key}
                className="bg-gray-800 rounded-xl p-6 shadow-lg flex items-center justify-center hover:bg-gray-700 transition cursor-pointer"
                onClick={() => onSubjectSelect(key)}
              >
                <span className="text-xl font-medium">{subject.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Practice;