import React from 'react';
import { subjects, presetExams } from './data';

const SubjectSelect = ({ onSelectSubject }) => (
  <div className="p-8">
    <h2 className="text-xl md:text-2xl font-semibold mb-6">কোন বিষয়ে পরীক্ষা দিতে চাও?</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {subjects.map(subject => (
        <div
          key={subject.id}
          className="flex flex-col items-center justify-center p-6 rounded-xl cursor-pointertransition-colors"
          onClick={() => onSelectSubject(subject)}
        >
          <div className="flex items-center justify-center w-12 h-12 mb-2 text-2xl">
            {subject.name === 'বাংলা' && '🇧🇩'}
            {subject.name === 'ইংলিশ' && '🇬🇧'}
            {subject.name === 'সাধারণ জ্ঞান' && '🧠'}
            {subject.name === 'পদার্থবিজ্ঞান' && '⚛️'}
            {subject.name === 'রসায়ন' && '🧪'}
            {subject.name === 'গণিত' && '🔢'}
            {subject.name === 'জীববিজ্ঞান' && '🧬'}
            {subject.name === 'উচ্চতর গণিত' && '📈'}
          </div>
          <span className="text-lg md:text-xl font-medium">{subject.name}</span>
        </div>
      ))}
    </div>

    <div className="mt-8">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">প্রিসেট পরীক্ষা</h3>
      <div className="flex flex-wrap gap-2">
        {presetExams.map(exam => (
          <button key={exam} className="px-4 py-2 rounded-lg hover:bg-green-300 transition-colors">{exam}</button>
        ))}
      </div>
    </div>
  </div>
);

export default SubjectSelect;
