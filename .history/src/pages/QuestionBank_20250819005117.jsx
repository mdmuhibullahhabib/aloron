import React, { useState } from 'react';
import { FiRefreshCw, FiSearch } from 'react-icons/fi';



const QuestionBank = ({ questions }) => {
  const [search, setSearch] = useState('');
  const [filterSection, setFilterSection] = useState('');
  const [filterExam, setFilterExam] = useState('');

  // Filtered questions
  const filteredQuestions = questions.filter((q) =>
    q.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Filter Bar */}
      <div className="bg-indigo-50 p-4 rounded-lg flex flex-wrap gap-3 items-center mb-6">
        <select
          className="p-2 rounded border border-gray-300 focus:ring-1 focus:ring-indigo-500"
          value={filterSection}
          onChange={(e) => setFilterSection(e.target.value)}
        >
          <option value="">Section</option>
          <option value="ssc">SSC</option>
          <option value="admission">Admission</option>
        </select>

        <select
          className="p-2 rounded border border-gray-300 focus:ring-1 focus:ring-indigo-500"
          value={filterExam}
          onChange={(e) => setFilterExam(e.target.value)}
        >
          <option value="">Exam</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
        </select>

        <input
          type="text"
          placeholder="Search Question..."
          className="flex-1 p-2 rounded border border-gray-300 focus:ring-1 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="p-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
          <FiSearch />
        </button>

        <button
          onClick={() => {
            setSearch('');
            setFilterSection('');
            setFilterExam('');
          }}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <FiRefreshCw />
        </button>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 border border-gray-200"
          >
            {/* Question Text */}
            <p className="font-medium mb-3">
              {index + 1}. {q.text}
            </p>

            {/* Question Image */}
            {q.image && (
              <div className="mb-3">
                <img
                  src={q.image}
                  alt={`Question ${index + 1}`}
                  className="w-full max-h-80 object-contain rounded border"
                />
              </div>
            )}

            {/* Options */}
            <div className="flex flex-col space-y-2 mb-3">
              {q.options.map((opt, i) => (
                <div
                  key={i}
                  className={`flex items-center p-2 rounded border ${
                    opt.correct ? 'bg-green-100 border-green-400' : 'border-gray-300'
                  }`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}</span>
                  <span>{opt.text}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-xs">
              {q.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-2 py-1 rounded text-gray-700 border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBank;
