import React from 'react';

const categories = [
  { name: 'Engineering', id: 'engineering' },
  { name: 'Varsity', id: 'varsity' },
  { name: 'Medical', id: 'medical' },
  { name: 'Academic', id: 'academic' },
  { name: 'Main Book', id: 'main_book' },
];

const ExamCategory = ({ onSelectCategory, onGoBack }) => (
  <div className="p-8 bg-white rounded-xl shadow-md">
    <button onClick={onGoBack} className="mb-6 text-gray-600 hover:text-green-500">← Back</button>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map(category => (
        <div
          key={category.id}
          className="p-6 bg-gray-100 rounded-xl cursor-pointer hover:bg-green-100 transition"
          onClick={() => onSelectCategory(category)}
        >
          <span className="text-gray-800 font-medium">{category.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ExamCategory;
