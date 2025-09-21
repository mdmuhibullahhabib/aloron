import React, { useState } from "react";
import SubjectSelect from "./SubjectSelect";
import ChapterSelect from "./ChapterSelect";
import ExamCategory from "./ExamCategory";
// 👉 এগুলোও বানাতে হবে (আগের মতো স্টাইলে)
// import ExamSetup from "./ExamSetup";
// import ExamPage from "./ExamPage";
// import ExamResultPage from "./ExamResultPage";

const Mocktest = () => {
  const [step, setStep] = useState("subject");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // subject নির্বাচন হলে
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setStep("chapter");
  };

  // chapter confirm হলে
  const handleConfirmChapters = (chapters) => {
    setSelectedChapters(chapters);
    setStep("category");
  };

  // category নির্বাচন হলে
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setStep("setup");
  };

  // setup done হলে exam start হবে
  const handleStartExam = () => {
    setStep("exam");
  };

  // exam শেষ হলে result দেখাবে
  const handleFinishExam = () => {
    setStep("result");
  };

  // step অনুযায়ী render
  const renderStep = () => {
    switch (step) {
      case "subject":
        return <SubjectSelect onSelectSubject={handleSelectSubject} />;

      case "chapter":
        return (
          <ChapterSelect
            selectedSubject={selectedSubject}
            onConfirmChapters={handleConfirmChapters}
            onGoBack={() => setStep("subject")}
          />
        );

      case "category":
        return (
          <ExamCategory
            onSelectCategory={handleSelectCategory}
            onGoBack={() => setStep("chapter")}
          />
        );

      case "setup":
        return (
          <div className="p-6">
            <button
              onClick={() => setStep("category")}
              className="text-blue-600 mb-4"
            >
              ← ফিরে যাও
            </button>
            <h2 className="text-2xl font-semibold mb-6">Exam Setup</h2>
            <p className="mb-4">Subject: {selectedSubject?.name}</p>
            <p className="mb-4">Chapters: {selectedChapters.join(", ")}</p>
            <p className="mb-4">Category: {selectedCategory?.name}</p>
            <button
              onClick={handleStartExam}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Start Exam
            </button>
          </div>
        );

      case "exam":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Exam Page</h2>
            <p>👉 এখানে MCQ গুলো আসবে...</p>
            <button
              onClick={handleFinishExam}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Finish Exam
            </button>
          </div>
        );

      case "result":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Exam Result</h2>
            <p>✅ Congratulations! Your result will show here.</p>
            <button
              onClick={() => setStep("subject")}
              className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              আবার নতুন পরীক্ষা দাও
            </button>
          </div>
        );

      default:
        return <SubjectSelect onSelectSubject={handleSelectSubject} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-4xl bg-gray-50">{renderStep()}</div>
    </div>
  );
};

export default Mocktest;
