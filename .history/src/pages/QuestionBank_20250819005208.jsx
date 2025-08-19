import React, { useState } from 'react';
import { FiRefreshCw, FiSearch } from 'react-icons/fi';

const sampleQuestions = [
  {
    text: "What is the chemical formula of water?",
    image: "",
    options: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false },
    ],
    tags: ["chemistry", "ssc", "basic"],
  },
  {
    text: "Who developed the theory of relativity?",
    image: "",
    options: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
    tags: ["physics", "admission", "important"],
  },
  {
    text: "Identify the structure in the image.",
    image: "https://via.placeholder.com/400x200.png?text=Molecule+Structure",
    options: [
      { text: "Benzene", correct: false },
      { text: "Methane", correct: false },
      { text: "Ethanol", correct: true },
      { text: "Acetic acid", correct: false },
    ],
    tags: ["chemistry", "ssc", "molecules"],
  },
  {
    text: "Which gas is essential for photosynthesis?",
    image: "",
    options: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
    tags: ["biology", "ssc", "important"],
  },
  {
    text: "What is the derivative of sin(x)?",
    image: "",
    options: [
      { text: "cos(x)", correct: true },
      { text: "-sin(x)", correct: false },
      { text: "-cos(x)", correct: false },
      { text: "sin(x)", correct: false },
    ],
    tags: ["math", "admission", "calculus"],
  },
  {
    text: "Which element has the atomic number 6?",
    image: "",
    options: [
      { text: "Carbon", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false },
    ],
    tags: ["chemistry", "ssc", "elements"],
  },
  {
    text: "Newton's First Law is also called?",
    image: "",
    options: [
      { text: "Law of Motion", correct: false },
      { text: "Law of Inertia", correct: true },
      { text: "Law of Gravity", correct: false },
      { text: "Law of Energy", correct: false },
    ],
    tags: ["physics", "admission", "laws"],
  },
  {
    text: "Which planet is known as the Red Planet?",
    image: "",
    options: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
    tags: ["physics", "ssc", "planets"],
  },
  {
    text: "H2SO4 is commonly known as?",
    image: "",
    options: [
      { text: "Sulfuric Acid", correct: true },
      { text: "Hydrochloric Acid", correct: false },
      { text: "Nitric Acid", correct: false },
      { text: "Acetic Acid", correct: false },
    ],
    tags: ["chemistry", "admission", "acids"],
  },
  {
    text: "Which organelle is known as the powerhouse of the cell?",
    image: "",
    options: [
      { text: "Nucleus", correct: false },
      { text: "Mitochondria", correct: true },
      { text: "Ribosome", correct: false },
      { text: "Chloroplast", correct: false },
    ],
    tags: ["biology", "ssc", "cell"],
  },
  {
    text: "Which is a prime number?",
    image: "",
    options: [
      { text: "9", correct: false },
      { text: "11", correct: true },
      { text: "15", correct: false },
      { text: "21", correct: false },
    ],
    tags: ["math", "ssc", "numbers"],
  },
  {
    text: "What is the capital of France?",
    image: "",
    options: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
    ],
    tags: ["general", "ssc", "geography"],
  },
  {
    text: "Light travels at what speed in vacuum?",
    image: "",
    options: [
      { text: "3 x 10^8 m/s", correct: true },
      { text: "3 x 10^6 m/s", correct: false },
      { text: "3 x 10^5 m/s", correct: false },
      { text: "3 x 10^3 m/s", correct: false },
    ],
    tags: ["physics", "admission", "speed"],
  },
  {
    text: "What is the main gas found in the air we breathe?",
    image: "",
    options: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false },
    ],
    tags: ["chemistry", "ssc", "gas"],
  },
  {
    text: "Who is the father of modern physics?",
    image: "",
    options: [
      { text: "Galileo", correct: false },
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Nikola Tesla", correct: false },
    ],
    tags: ["physics", "admission", "important"],
  },
  {
    text: "Which vitamin is produced when sunlight hits the skin?",
    image: "",
    options: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin B", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin C", correct: false },
    ],
    tags: ["biology", "ssc", "vitamins"],
  },
  {
    text: "What is the square root of 144?",
    image: "",
    options: [
      { text: "10", correct: false },
      { text: "12", correct: true },
      { text: "14", correct: false },
      { text: "16", correct: false },
    ],
    tags: ["math", "ssc", "numbers"],
  },
  {
    text: "Which metal is liquid at room temperature?",
    image: "",
    options: [
      { text: "Mercury", correct: true },
      { text: "Lead", correct: false },
      { text: "Gold", correct: false },
      { text: "Silver", correct: false },
    ],
    tags: ["chemistry", "admission", "metal"],
  },
  {
    text: "What is the process by which plants make food?",
    image: "",
    options: [
      { text: "Respiration", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Transpiration", correct: false },
      { text: "Fermentation", correct: false },
    ],
    tags: ["biology", "ssc", "plants"],
  },
  {
    text: "Which gas do humans exhale?",
    image: "",
    options: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
    tags: ["biology", "ssc", "respiration"],
  },
];

const QuestionBank = () => {
  const [search, setSearch] = useState('');
  const [filterSection, setFilterSection] = useState('');
  const [filterExam, setFilterExam] = useState('');

  // Filtered questions
  const filteredQuestions = sampleQuestions.filter((q) =>
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
