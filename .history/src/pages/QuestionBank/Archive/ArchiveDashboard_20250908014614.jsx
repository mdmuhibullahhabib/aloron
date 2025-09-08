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
          <Route path="/" element={<Archive />} />
          <Route path="/questionbank/:institution" element={<Faculty />} />
          <Route path="/faculty-exam" element={<FacultyExam />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/question-bank/:questionSet" element={<QuestionPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ArchiveDashboard;
