import React, { useState } from 'react';

const ExamSetup = ({ onStartExam, onGoBack, selectedChapters }) => {
  const [totalQuestions, setTotalQuestions] = useState(25);
  const [examType, setExamType] = useState('MCQ');
  const [negativeMarking, setNegativeMarking] = useState(false);

  return (
    <div className="p-8 rounded-xl shadow-md">
      <button onClick={onGoBack} className="mb-6 hover:text-green-500">← Back</button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-gray-100 rounded-xl text-center">
          <p className="">মোট প্রশ্ন</p>
          <span className="text-xl font-bold text-gray-800">{totalQuestions}</span>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl text-center">
          <p className="text-gray-600">ধরনের ধরন</p>
          <div className="flex justify-center mt-2 gap-2">
            <button
              onClick={() => setExamType('MCQ')}
              className={`px-4 py-2 rounded-xl ${examType === 'MCQ' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >MCQ</button>
            <button
              onClick={() => setExamType('WRITTEN')}
              className={`px-4 py-2 rounded-xl ${examType === 'WRITTEN' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >WRITTEN</button>
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl text-center">
          <p className="text-gray-600">নেগেটিভ মার্কিং</p>
          <input type="checkbox" checked={negativeMarking} onChange={() => setNegativeMarking(!negativeMarking)} className="mt-2" />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">নির্বাচিত অধ্যায় (মোট {selectedChapters.length})</h3>
        <p className="text-gray-600">{selectedChapters.join(', ') || 'কোনো অধ্যায় নির্বাচন করা হয়নি'}</p>
      </div>
      <button
        onClick={() => onStartExam({ totalQuestions, examType, negativeMarking })}
        className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600"
      >
        পরীক্ষা শুরু করো
      </button>
    </div>
  );
};

export default ExamSetup;
