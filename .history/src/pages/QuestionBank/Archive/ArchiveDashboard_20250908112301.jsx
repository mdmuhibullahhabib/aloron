// ArchiveDashboard.jsx
import React, { useState } from "react";
import Archive from "./Archive";
import Faculty from "./Faculty";
import FacultyExam from "./FacultyExam";
import Exam from "./Exam";
import QuestionPage from "./QuestionPage";
import QuestionCard from "./QuestionCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ArchiveDashboard = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Main Routing */}
        <Routes>
          <Route path="/question-bank" element={<Archive />} />
          <Route path="/question-bank/archive/:{
  path: "/question-bank",
  element: <QuestionBank />, // parent layout
  children: [
    {
      path: "archive", // /question-bank/archive
      element: <Archive />,
      children: [
        {
          path: ":title", // /question-bank/archive/:title
          element: <Faculty />,
        },
        {
          path: "titlecard", // /question-bank/archive/titlecard
          element: <FacultyExam />,
        },
        {
          path: "live-exam", // /question-bank/archive/live-exam
          element: <Exam />,
        },
      ],
    },
    {
      path: "practice", // /question-bank/practice
      element: <Practice />,
    },
    {
      path: "community", // /question-bank/community
      element: <Community />,
    },
  ],
}
" element={<Faculty />} />
          <Route path="/faculty-exam" element={<FacultyExam />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/question-bank/:questionSet" element={<QuestionPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ArchiveDashboard;
