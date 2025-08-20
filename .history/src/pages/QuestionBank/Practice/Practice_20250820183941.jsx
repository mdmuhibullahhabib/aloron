import React, { useState } from 'react';

// Main Dashboard Component
const Practice = ({ onSubjectSelect }) => {
  const subjects = [
    {
      id: 'physics',
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
      id: 'chemistry',
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
      id: 'higher-math',
      title: 'উচ্চতর গণিত',
      color: 'text-purple-400',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M10 20a10 10 0 1 0 0-20h4a10 10 0 1 0 0 20z" />
        </svg>
      ),
    },
    {
      id: 'biology',
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
      id: 'bangla',
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
      id: 'english',
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
      id: 'ict',
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
      id: 'gk',
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

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans w-full p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-xl">
              bdi
            </div>
            <span className="text-xl font-bold">bdi</span>
          </div>
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer">
              <path d="M6 8a6 6 0 0 1 6 6v7H6v-7a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v7h-6" />
              <path d="M22 17H2" />
              <path d="M12 2c-3.3137 0-6 2.6863-6 6v7h12v-7c0-3.3137-2.6863-6-6-6z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c-1.31.96-1.52 1.45-1.52 2.54V15" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl mb-8">
          <h1 className="text-3xl font-bold">ফ্রি প্র্যাকটিস</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              onClick={() => onSubjectSelect(subject.id)}
            >
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
};

// Physics Papers Page Component
const PhysicsPapersPage = ({ onGoBack, onPaperSelect }) => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans w-full p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl text-center mb-8 flex items-center justify-between">
          <button onClick={onGoBack} className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">পদার্থবিজ্ঞান</h1>
          <div className="w-6"></div>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 cursor-pointer" onClick={() => onPaperSelect('1st')}>
            <span className="text-2xl font-medium">১ম পত্র</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 cursor-pointer" onClick={() => onPaperSelect('2nd')}>
            <span className="text-2xl font-medium">২য় পত্র</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Physics Chapters Page Component
const PhysicsChaptersPage = ({ onGoBack, onChapterSelect }) => {
  const chapters = [
    'ভৌতজগত ও পরিমাপ',
    'ভেক্টর',
    'গতিবিদ্যা',
    'নিউটনিয়ান বলবিদ্যা',
    'কাজ, ক্ষমতা ও শক্তি',
    'মহাকর্ষ ও অভিকর্ষ',
    'পদার্থের গাঠনিক ধর্ম',
    'পর্যাবৃত্ত গতি',
    'তরঙ্গ',
    'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব',
    'তাপ ও গতিবিদ্যা'
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans w-full p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl text-center mb-8 flex items-center justify-between">
          <button onClick={onGoBack} className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">১ম পত্র</h1>
          <div className="w-6"></div>
        </div>
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-4 shadow-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              onClick={() => onChapterSelect(chapter)}
            >
              <span className="text-xl font-medium">{chapter}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Physics MCQ Page Component
const PhysicsMCQPage = ({ onGoBack, onNextQuestion }) => {
  const question = {
    text: '$(P + \\frac{a}{V^2})(V - b) = RT)$ সমীকরণটিতে $a$-এর মাত্রা কত?',
    options: ['[MLT²]', '[MLT⁻²]', '[ML³T⁻²]', '[ML⁻²T⁻²]'],
    answer: '[ML³T⁻²]',
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === question.answer);
  };

  const getOptionClasses = (option) => {
    let classes = 'bg-gray-800 rounded-xl p-4 shadow-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer';
    if (selectedOption !== null) {
      if (option === question.answer) {
        classes = 'bg-green-600 rounded-xl p-4 shadow-lg text-white';
      } else if (option === selectedOption && option !== question.answer) {
        classes = 'bg-red-600 rounded-xl p-4 shadow-lg text-white';
      }
    }
    return classes;
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans w-full p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <button onClick={onGoBack} className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="h-2 w-full mx-4 rounded-full bg-gray-700">
            <div className="h-full rounded-full bg-green-500" style={{ width: '10%' }}></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm bg-gray-700">
              $
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-xl mb-8">
          {isCorrect === true && (
            <div className="flex items-center space-x-2 text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>সঠিক উত্তর</span>
            </div>
          )}
          {isCorrect === false && (
            <div className="flex items-center space-x-2 text-red-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>ভুল উত্তর</span>
            </div>
          )}
          <div className="text-xl font-medium mb-8">
            <p>{question.text}</p>
          </div>
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={getOptionClasses(option)}
                onClick={() => handleOptionClick(option)}
              >
                <span className="text-lg font-medium">{option}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between text-white mt-8">
          <button className="flex items-center space-x-2 py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
            <span className="text-lg font-medium">বাংলা জানতে চাই বিস্তারিত</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          </button>
          <button onClick={onNextQuestion} className="flex items-center space-x-2 py-2 px-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200">
            <span className="text-lg font-medium">পরবর্তী প্রশ্ন</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component that handles routing
export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleSubjectSelect = (subjectId) => {
    setSelectedSubject(subjectId);
    setCurrentPage('subject-papers');
  };

  const handlePaperSelect = (paperId) => {
    setSelectedPaper(paperId);
    setCurrentPage('chapter-select');
  };

  const handleChapterSelect = (chapterName) => {
    setSelectedChapter(chapterName);
    setCurrentPage('mcq-page');
  };

  const handleGoBack = () => {
    if (currentPage === 'subject-papers') {
      setCurrentPage('dashboard');
    } else if (currentPage === 'chapter-select') {
      setCurrentPage('subject-papers');
    } else if (currentPage === 'mcq-page') {
      setCurrentPage('chapter-select');
    }
  };

  const handleNextQuestion = () => {
    // Logic to move to the next question
    // For now, it will go back to the chapters page
    setCurrentPage('chapter-select');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <PracticeDashboard onSubjectSelect={handleSubjectSelect} />;
      case 'subject-papers':
        if (selectedSubject === 'physics') {
          return <PhysicsPapersPage onGoBack={handleGoBack} onPaperSelect={handlePaperSelect} />;
        }
        return <div>Subject Papers for {selectedSubject}</div>;
      case 'chapter-select':
        return <PhysicsChaptersPage onGoBack={handleGoBack} onChapterSelect={handleChapterSelect} />;
      case 'mcq-page':
        return <PhysicsMCQPage onGoBack={handleGoBack} onNextQuestion={handleNextQuestion} chapterName={selectedChapter} />;
      default:
        return <PracticeDashboard onSubjectSelect={handleSubjectSelect} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default Practice;