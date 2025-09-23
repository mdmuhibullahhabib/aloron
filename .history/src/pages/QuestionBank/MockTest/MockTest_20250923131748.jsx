import React, { useState } from 'react';
import SubjectSelect from './SubjectSelect';
import ChapterSelect from './ChapterSelect';
import ExamCategory from './ExamCategory';
import ExamSetup from './ExamSetup';
import ExamPage from './ExamPage';
import ExamResultPage from './ExamResultPage';

const MockTest = () => {
  const [currentPage, setCurrentPage] = useState('subject-select');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [examConfig, setExamConfig] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  // Page navigation handlers
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentPage('chapter-select');
  };

  const handleConfirmChapters = (chapters) => {
    setSelectedChapters(chapters);
    setCurrentPage('exam-setup');
  };

  const handleStartExam = (config) => {
    setExamConfig({ ...config, totalTime: 3 }); // demo: 3 mins
    setCurrentPage('exam');
  };

  const handleEndExam = (answers) => {
    setUserAnswers(answers);
    setCurrentPage('result');
  };

  const handleGoBack = () => {
    switch(currentPage){
      case 'chapter-select': setCurrentPage('subject-select'); break;
      case 'exam-setup': setCurrentPage('chapter-select'); break;
      case 'exam': setCurrentPage('exam-setup'); break;
      case 'result': setCurrentPage('exam'); break;
      default: setCurrentPage('subject-select');
    }
  };

  // Determine which component to render
  let content;
  switch(currentPage){
    case 'subject-select':
      content = <SubjectSelect onSelectSubject={handleSelectSubject} />;
      break;
    case 'chapter-select':
      content = <ChapterSelect selectedSubject={selectedSubject} onConfirmChapters={handleConfirmChapters} onGoBack={handleGoBack} />;
      break;
    case 'exam-setup':
      content = <ExamSetup onStartExam={handleStartExam} onGoBack={handleGoBack} selectedChapters={selectedChapters} />;
      break;
    case 'exam':
      content = <ExamPage examConfig={examConfig} onEndExam={handleEndExam} />;
      break;
    case 'result':
      content = <ExamResultPage userAnswers={userAnswers} examConfig={examConfig} onGoBack={handleGoBack} />;
      break;
    default:
      content = <SubjectSelect onSelectSubject={handleSelectSubject} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <div className="w-full max-w-5xl px-4">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-6 bg-white rounded-xl shadow-md mb-6">
          <h1 className="text-2xl font-bold">Mock Test</h1>
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">৳0</div>
        </header>

        {/* Main Content */}
        <main>
          {content}
        </main>
      </div>
    </div>
  );
};

export default MockTest;
