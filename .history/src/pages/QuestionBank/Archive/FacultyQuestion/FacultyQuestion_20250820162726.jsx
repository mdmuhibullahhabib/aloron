import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Example faculties and exam data
const facultiesData = [
  { id: 1, title: "23-24", questions: 80, duration: "1 ঘণ্টা", path: "23-24", color: "#1f2937" },
  { id: 2, title: "22-23", questions: 105, duration: "1 ঘণ্টা", path: "22-23", color: "#111827" },
  { id: 3, title: "21-22", questions: 105, duration: "1 ঘণ্টা", path: "21-22", color: "#1f2937" },
  { id: 4, title: "20-21", questions: 100, duration: "1 ঘণ্টা", path: "20-21", color: "#111827" },
  { id: 5, title: "19-20", questions: 125, duration: "1 ঘণ্টা", path: "19-20", color: "#1f2937" },
  { id: 6, title: "18-19", questions: 70, duration: "1 ঘণ্টা", path: "18-19", color: "#111827" },
  { id: 7, title: "17-18", questions: 70, duration: "1 ঘণ্টা", path: "17-18", color: "#1f2937" },
];

const FacultyExam = () => {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (exam) => {
    setSelectedExam(exam);
    setShowModal(true);
  };

  const startExam = () => {
    if (selectedExam) {
      navigate(`/mexam/${selectedExam.path}`);
      setShowModal(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">BUP FST Exams</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {facultiesData.map((exam) => (
          <div
            key={exam.id}
            className="p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition transform"
            style={{ backgroundColor: exam.color, color: "white" }}
            onClick={() => handleCardClick(exam)}
          >
            <h3 className="text-lg font-semibold">{exam.title}</h3>
            <div className="flex justify-between mt-2 text-sm opacity-90">
              <span>⏱ {exam.duration}</span>
              <span>✏️ {exam.questions} টি প্রশ্ন</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedExam && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl w-80">
            <h3 className="text-xl font-bold mb-4">{selectedExam.title}</h3>
            <p className="mb-4">Are you allowed to start this exam?</p>
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
    </div>
  );
};

export default FacultyExam;
