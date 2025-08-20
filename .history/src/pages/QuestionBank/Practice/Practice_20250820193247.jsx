import React, { useState } from "react";
import PracticeDashboard from "./PracticeDashboard";
// import PracticeDashboard from "./components/PracticeDashboard";
// import PapersPage from "./components/PapersPage";
// import ChaptersPage from "./components/ChaptersPage";
// import MCQPage from "./components/MCQPage";

const Practice = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleGoBack = () => {
    if (currentPage === "subject-papers") setCurrentPage("dashboard");
    else if (currentPage === "chapter-select") setCurrentPage("subject-papers");
    else if (currentPage === "mcq-page") setCurrentPage("chapter-select");
  };

  return (
    <>
      {currentPage === "dashboard" && (
        <PracticeDashboard
          onSubjectSelect={(sub) => {
            setSelectedSubject(sub);
            setCurrentPage("subject-papers");
          }}
        />
      )}

      {currentPage === "subject-papers" && (
        <PapersPage
          subjectId={selectedSubject}
          onGoBack={handleGoBack}
          onPaperSelect={(paper) => {
            setSelectedPaper(paper);
            setCurrentPage("chapter-select");
          }}
        />
      )}

      {currentPage === "chapter-select" && (
        <ChaptersPage
          subjectId={selectedSubject}
          paperId={selectedPaper}
          onGoBack={handleGoBack}
          onChapterSelect={(ch) => {
            setSelectedChapter(ch);
            setCurrentPage("mcq-page");
          }}
        />
      )}

      {currentPage === "mcq-page" && (
        <MCQPage
          subjectId={selectedSubject}
          paperId={selectedPaper}
          chapter={selectedChapter}
          onGoBack={handleGoBack}
        />
      )}
    </>
  );
}


export default Practice;