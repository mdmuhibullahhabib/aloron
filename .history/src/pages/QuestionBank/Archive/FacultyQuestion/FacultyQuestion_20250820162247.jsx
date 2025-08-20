import React, { useState } from "react";

// Example faculties and questions
const facultiesData = [
  { id: 1, title: "BUP FST", subtitle: "Admission Question", path: "bup-fst", color: "#4d7c0f" },
  { id: 2, title: "Medical MBBS", subtitle: "Admission Question", path: "medical-mbbs", color: "#a855f7" },
];

const facultyQuestions = {
  "bup-fst": [
    { id: 1, question: "What is 2+2?" },
    { id: 2, question: "Who is the founder of BUP?" },
  ],
  "medical-mbbs": [
    { id: 1, question: "What is human heart rate?" },
    { id: 2, question: "Define anatomy." },
  ],
};

const FacultyExam = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  const handleCardClick = (faculty) => {
    setSelectedFaculty(faculty);
    setShowModal(true);
  };

  const startExam = () => {
    setShowModal(false);
    setExamStarted(true);
  };

  return (
    <div className="p-6">
      {!examStarted && (
        <>
          <h2 className="text-2xl font-bold mb-6">Faculties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultiesData.map((faculty) => (
              <div
                key={faculty.id}
                className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition transform"
                style={{ backgroundColor: faculty.color }}
                onClick={() => handleCardClick(faculty)}
              >
                <h3 className="text-white text-lg font-semibold">{faculty.title}</h3>
                <p className="text-white opacity-90">{faculty.subtitle}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal */}
      {showModal && selectedFaculty && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl w-80">
            <h3 className="text-xl font-bold mb-4">{selectedFaculty.title}</h3>
            <p className="mb-4">Do you want to start the exam for this faculty?</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                onClick={startExam}
              >
                Start Exam
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Questions */}
      {examStarted && selectedFaculty && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-6">Questions for {selectedFaculty.title}</h2>
          <div className="space-y-4">
            {(facultyQuestions[selectedFaculty.path] || []).map((q) => (
              <div key={q.id} className="p-4 rounded-lg shadow bg-gray-100">
                {q.question}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyExam;
