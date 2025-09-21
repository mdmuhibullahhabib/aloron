import React, { useState } from "react";
import SubjectSelect from "./SubjectSelect";
import McqComponent from "./McqComponent"; 
import { subjects, presetExams, mcqQuestions } from "../fakedata/mocktestData";

const Mocktest = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {!selectedSubject ? (
        <SubjectSelect
          subjects={subjects}
          presetExams={presetExams}
          onSelectSubject={setSelectedSubject}
        />
      ) : (
        <McqComponent questions={mcqQuestions} subject={selectedSubject} />
      )}
    </div>
  );
};

export default Mocktest;
