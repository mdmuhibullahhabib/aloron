import React, { useState } from 'react';

const dummyChapters = [
  { name: 'রসায়ন', chapters: ['পর্যায় সারণী', 'জৈব রসায়ন', 'রাসায়নিক বন্ধন', 'অম্ল ও ক্ষার', 'রাসায়নিক বিক্রিয়া'] },
  { name: 'পদার্থবিজ্ঞান', chapters: ['বল', 'কাজ, ক্ষমতা ও শক্তি', 'আলোর প্রতিফলন', 'শব্দ', 'তাপ'] },
  { name: 'জীববিজ্ঞান', chapters: ['কোষ', 'টিস্যু', 'প্রাণীবিজ্ঞান', 'উদ্ভিদবিজ্ঞান'] },
];

const ChapterSelect = ({ selectedSubject, onConfirmChapters, onGoBack }) => {
  const [selectedChapters, setSelectedChapters] = useState([]);
  const chaptersForSubject = dummyChapters.find(s => s.name === selectedSubject.name)?.chapters || [];

  const handleCheckboxChange = (chapter) => {
    setSelectedChapters(prev =>
      prev.includes(chapter) ? prev.filter(c => c !== chapter) : [...prev, chapter]
    );
  };

  const handleSelectAll = () => {
    setSelectedChapters(selectedChapters.length === chaptersForSubject.length ? [] : chaptersForSubject);
  };

  return (
    <div className="p-8 rounded-xl shadow-md">
      <button onClick={onGoBack} className="mb-6 hover:text-green-500 flex items-center gap-2">
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-4">{selectedSubject.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chaptersForSubject.map(chapter => (
          <label key={chapter} className="flex items-center gap-3 p-4 rounded-xl cursor-pointer lue-100">
            <input
              type="checkbox"
              checked={selectedChapters.includes(chapter)}
              onChange={() => handleCheckboxChange(chapter)}
              className="form-checkbox h-5 w-5 text-green-500"
            />
            <span className=" font-medium">{chapter}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={handleSelectAll} className="px-4 py-2 bg-green-400 rounded-lg">
          {selectedChapters.length === chaptersForSubject.length ? 'Unselect All' : 'Select All'}
        </button>
        <button
          onClick={() => onConfirmChapters(selectedChapters)}
          className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ChapterSelect;
