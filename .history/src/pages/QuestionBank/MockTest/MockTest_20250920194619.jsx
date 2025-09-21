import React, { useState } from "react";
import SubjectSelect from "./SubjectSelect";
import ExamCategory from "./ExamCategory";
import ExamSetup from "./ExamSetup";

const Mocktest = () => {
  const [step, setStep] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [examCategory, setExamCategory] = useState(null);

  return (
    <div className="min-h-screen bg-[#111] text-white px-4 py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        মক পরীক্ষা
      </h2>

      {/* Progress bar */}
      <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>

      {step === 1 && (
        <SubjectSelect
          onNext={(subject) => {
            setSelectedSubject(subject);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <ExamCategory
          onNext={(category) => {
            setExamCategory(category);
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <ExamSetup
          subject={selectedSubject}
          category={examCategory}
          onBack={() => setStep(2)}
        />
      )}
    </div>
  );
};

export default Mocktest;
