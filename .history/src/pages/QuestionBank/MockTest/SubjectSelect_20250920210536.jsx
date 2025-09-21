import React from "react";

const SubjectSelect = ({ subjects = [], onSelectSubject, presetExams = [] }) => (
  <div className="p-6 bg-white rounded-xl shadow-md">
    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
      কোন বিষয়ে পরীক্ষা দিতে চাও?
    </h2>

    {/* Subjects */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {subjects.length > 0 ? (
        subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => onSelectSubject(subject)}
            className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl cursor-pointer hover:bg-blue-100 transition"
          >
            <span className="text-lg md:text-xl font-medium text-gray-700">
              {subject.name}
            </span>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          কোন বিষয় পাওয়া যায়নি
        </p>
      )}
    </div>

    {/* Preset Exams */}
    <div className="mt-8">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
        প্রিসেট পরীক্ষা
      </h3>
      <div className="flex flex-wrap gap-2">
        {presetExams.length > 0 ? (
          presetExams.map((exam, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {exam}
            </button>
          ))
        ) : (
          <p className="text-gray-500">কোন প্রিসেট পরীক্ষা নেই</p>
        )}
      </div>
    </div>
  </div>
);

export default SubjectSelect;
