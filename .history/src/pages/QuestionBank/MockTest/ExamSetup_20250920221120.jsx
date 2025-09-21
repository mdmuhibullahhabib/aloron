import React, { useState } from 'react';

const ExamSetup = ({ onStartExam, onGoBack }) => {
  const [totalTime, setTotalTime] = useState(25);
  const [examType, setExamType] = useState('WRITTEN');
  const [negativeMarking, setNegativeMarking] = useState(false);
  const [selectedChapters, setSelectedChapters] = useState([
    'প্রথম পত্র',
    'লাফাসোরের নির্মাণ কৌশল, ব্যবহার',
    'ডিজিটাল লজিক',
    'নেটওয়ার্কিং, প্রোগ্রামিং',
  ]);

  return (
    <div className="bg-[#242629] text-white p-6 md:p-10 rounded-xl shadow-lg w-full max-w-2xl mx-auto">
      {/* Header with back button and title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold">মক পরীক্ষা</h2>
        <div className="flex items-center space-x-2">
          <span className="text-lg">১.০৳ টোকেন</span>
          <img src="https://aloron.com.bd/aloron-icon.png" alt="Aloron Icon" className="w-6 h-6" />
        </div>
      </div>

      {/* Main setup form */}
      <div className="p-4 bg-[#2f3134] rounded-lg">
        <h3 className="text-md md:text-lg mb-4 text-[#8f9194]">নিশ্চিত করো</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
          {/* Total time input */}
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="total-time" className="text-sm text-[#8f9194]">মোট সময় (মিনিট)</label>
            <input
              type="number"
              id="total-time"
              value={totalTime}
              onChange={(e) => setTotalTime(e.target.value)}
              className="w-full bg-transparent border-b-2 border-green-500 text-lg font-bold outline-none"
            />
          </div>

          {/* Exam type selection */}
          <div className="flex flex-col items-start space-y-2">
            <span className="text-sm text-[#8f9194]">পরীক্ষার ধরন</span>
            <div className="flex bg-[#2f3134] rounded-full overflow-hidden border border-gray-700">
              <button
                onClick={() => setExamType('MCQ')}
                className={`flex-1 px-4 py-2 transition-colors duration-200 ${examType === 'MCQ' ? 'bg-[#3c3f43] text-white' : 'text-gray-400'}`}
              >
                MCQ
              </button>
              <button
                onClick={() => setExamType('CQ')}
                className={`flex-1 px-4 py-2 transition-colors duration-200 ${examType === 'CQ' ? 'bg-[#3c3f43] text-white' : 'text-gray-400'}`}
              >
                CQ
              </button>
              <button
                onClick={() => setExamType('WRITTEN')}
                className={`flex-1 px-4 py-2 transition-colors duration-200 ${examType === 'WRITTEN' ? 'bg-[#16a34a] text-white rounded-r-full' : 'text-gray-400'}`}
              >
                WRITTEN
              </button>
            </div>
          </div>

          {/* Negative marking toggle */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-[#8f9194]">নেগেটিভ মার্কিং</span>
              <label htmlFor="negative-marking" className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="negative-marking"
                  checked={negativeMarking}
                  onChange={() => setNegativeMarking(!negativeMarking)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
            {negativeMarking && (
              <p className="text-xs text-red-400">প্রতি ভুল উত্তরের জন্য ০.২৫ মার্ক কাটা যাবে</p>
            )}
          </div>
        </div>
      </div>

      {/* Selected chapters display */}
      <div className="mt-6 p-4 bg-[#2f3134] rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-white">নির্বাচিত বিষয়বস্তু (মোট {selectedChapters.length} টি)</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          {selectedChapters.map((chapter, index) => (
            <li key={index}>{chapter}</li>
          ))}
        </ul>
      </div>

      {/* Start exam button */}
      <div className="mt-8">
        <button
          onClick={() => onStartExam({ totalTime, examType, negativeMarking, selectedChapters })}
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
        >
          পরীক্ষা শুরু করো
        </button>
      </div>
    </div>
  );
};

export default ExamSetup;