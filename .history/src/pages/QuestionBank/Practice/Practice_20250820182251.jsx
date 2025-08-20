import React from 'react';

// An array of subjects to display, each with a title, color, and SVG icon.
const subjects = [
  {
    id: 1,
    title: 'পদার্থবিজ্ঞান',
    color: 'text-green-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2v10" />
        <path d="M18 18l-6 6" />
        <path d="M6 18l6 6" />
        <path d="M12 22v-6" />
        <path d="M12 2v-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'রসায়ন',
    color: 'text-red-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14 20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2z" />
        <path d="M12 2V22" />
        <path d="M12 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M12 18a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'উচ্চতর গণিত',
    color: 'text-purple-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M10 20a10 10 0 1 0 0-20h4a10 10 0 1 0 0 20z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'জীববিজ্ঞান',
    color: 'text-yellow-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'বাংলা',
    color: 'text-gray-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'English',
    color: 'text-gray-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
        <path d="M12 6v6h6" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'তথ্য ও যোগাযোগ প্রযুক্তি',
    color: 'text-orange-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 10h10" />
        <path d="M7 14h10" />
        <path d="M12 7v10" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'সাধারণ জ্ঞান',
    color: 'text-blue-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M21 12c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

const Practice = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans p-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl mb-8">
          <h1 className="text-xl font-bold">ফ্রি প্র্যাকটিস</h1>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => (
            <div key={subject.id} className="bg-gray-800 rounded-xl p-6 shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
              <div className={`p-3 rounded-full ${subject.color}`}>
                {subject.icon}
              </div>
              <span className="text-xl font-medium">{subject.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Practice;