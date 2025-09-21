import React from "react";

const subjects = [
  "বাংলা",
  "ইংরেজি",
  "পদার্থবিজ্ঞান",
  "রসায়ন",
  "উচ্চতর গণিত",
  "জীববিজ্ঞান",
  "পরিসংখ্যান",
  "ICT",
];

const SubjectSelect = ({ onNext }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center">
        কোন বিষয়ে পরীক্ষা দিতে চান?
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {subjects.map((subject, idx) => (
          <button
            key={idx}
            onClick={() => onNext(subject)}
            className="bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors"
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelect;
