import React, { useState } from "react";
import SubjectSelect from "./SubjectSelect";
import ChapterSelect from "./ChapterSelect";
import ExamSetup from "./ExamSetup";
import ExamPage from "./ExamPage";
import ExamResultPage from "./ExamResultPage";

const Mocktest = () => {
  const [currentPage, setCurrentPage] = useState("subject-select");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapters, setSelectedChapters] = useState(null);
  const [examConfig, setExamConfig] = useState(null);
  const [userAnswers, setUserAnswers] = useState(null);

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentPage("chapter-select");
  };

  const handleConfirmChapters = (chapters) => {
    setSelectedChapters(chapters);
    setCurrentPage("exam-setup");
  };

  const handleStartExam = (config) => {
    setExamConfig({ ...config, totalTime: 3 });
    setCurrentPage("exam");
  };

  const handleEndExam = (answers) => {
    setUserAnswers(answers);
    setCurrentPage("result");
  };

  const handleGoBack = () => {
    if (currentPage === "chapter-select") setCurrentPage("subject-select");
    if (currentPage === "exam-setup") setCurrentPage("chapter-select");
    if (currentPage === "exam") setCurrentPage("exam-setup");
    if (currentPage === "result") setCurrentPage("exam");
  };

  let content;
  switch (currentPage) {
    case "subject-select":
      content = <SubjectSelect onSelectSubject={handleSelectSubject} />;
      break;
    case "chapter-select":
      content = <ChapterSelect selectedSubject={selectedSubject} onConfirmChapters={handleConfirmChapters} onGoBack={handleGoBack} />;
      break;
    case "exam-setup":
      content = <ExamSetup onStartExam={handleStartExam} onGoBack={handleGoBack} selectedChapters={selectedChapters} />;
      break;
    case "exam":
      content = <ExamPage onEndExam={handleEndExam} examConfig={examConfig} />;
      break;
    case "result":
      content = <ExamResultPage userAnswers={userAnswers} examConfig={examConfig} onGoBack={handleGoBack} />;
      break;
    default:
      content = <SubjectSelect onSelectSubject={handleSelectSubject} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="w-full max-w-4xl p-4">
        <header className="flex justify-between items-center py-4 px-6 bg-gray-800 rounded-xl mb-4">
          <div className="text-2xl font-bold">Mock Test</div>
          <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">৳0</div>
        </header>
        <main className="bg-gray-900 rounded-xl shadow-lg">
          {content}
        </main>
      </div>
    </div>
  );
};

export default Mocktest;
