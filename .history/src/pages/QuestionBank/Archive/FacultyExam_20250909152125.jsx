import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Example data updated to match the screenshot's design
const facultiesData = [
  {
    id: 1,
    title: "23-24",
    subtitle: "Admission Question",
    path: "bup-fst",
    color: "#e2e8f0", // A light gray for the card background
    questionCount: 30,
    duration: 60,
  },
  {
    id: 2,
    title: "22-23",
    subtitle: "Admission Question",
    path: "medical-mbbs",
    color: "#e2e8f0",
    questionCount: 30,
    duration: 60,
  },
  {
    id: 3,
    title: "21-22",
    subtitle: "Admission Question",
    path: "medical-mbbs",
    color: "#e2e8f0",
    questionCount: 30,
    duration: 60,
  },
  {
    id: 4,
    title: "20-21",
    subtitle: "Admission Question",
    path: "medical-mbbs",
    color: "#e2e8f0",
    questionCount: 30,
    duration: 60,
  },
  {
    id: 5,
    title: "19-20",
    subtitle: "Admission Question",
    path: "medical-mbbs",
    color: "#e2e8f0",
    questionCount: 30,
    duration: 60,
  },
  {
    id: 6,
    title: "18-19",
    subtitle: "Admission Question",
    path: "medical-mbbs",
    color: "#e2e8f0",
    questionCount: 30,
    duration: 60,
  },
  {
    id: 7,
    title: "17-18",
    subtitle: "Admission Question",
    path: "medical-mbbs",
    color: "#e2e8f0",
    questionCount: 30,
    duration: 60,
  },
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
  const [timeLeft, setTimeLeft] = useState(0);
  const { path } = useParams();

  console.log(path)


  // useEffect hook to manage the timer
  useEffect(() => {
    let timer;
    if (examStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && examStarted) {
      alert("Time's up!"); // This would be replaced with a proper modal
      setExamStarted(false);
    }
    return () => clearInterval(timer);
  }, [examStarted, timeLeft]);

  const handleCardClick = (faculty) => {
    setSelectedFaculty(faculty);
    setShowModal(true);
  };

  const startExam = () => {
    setShowModal(false);
    setExamStarted(true);
    // Set the initial time for the exam based on the faculty's duration
    setTimeLeft(selectedFaculty.duration * 60);
  };

  const goBackToFaculties = () => {
    setExamStarted(false);
    setSelectedFaculty(null);
    setTimeLeft(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans p-6">
      {/* Search Bar & Actions */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">BUP FST</h1>
      </div>
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for exams..."
            className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-green-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {!examStarted && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultiesData.map((faculty) => (
              <div
                key={faculty.id}
                className="p-6 rounded-3xl shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition transform duration-200"
                style={{ backgroundColor: faculty.color }}
                onClick={() => handleCardClick(faculty)}
              >
                <h3 className="text-gray-900 text-lg font-bold mb-2">{faculty.title}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  {/* Question count icon */}
                  <div className="flex items-center gap-1 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{faculty.questionCount} টি প্রশ্ন</span>
                  </div>
                  {/* Duration icon */}
                  <div className="flex items-center gap-1 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{faculty.duration} মিনিট</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal */}
      {showModal && selectedFaculty && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white text-gray-900 p-6 rounded-xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow-lg">
            {/* শিরোনাম */}
            <h3 className="text-xl font-bold mb-4 text-center">পরীক্ষা শুরু</h3>

            {/* বিবরণ */}
            <p className="mb-6 text-center">
              আপনি কি নিশ্চিত যে{" "}
              <span className="font-semibold text-green-600">{selectedFaculty.title}</span>{" "}
              ব্যাচের পরীক্ষা শুরু করতে চান?
            </p>

            {/* বোতামগুলো */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition-colors w-full sm:w-auto"
                onClick={() => setShowModal(false)}
              >
                বাতিল
              </button>
              <Link
                to={`/question-bank/live-exam`}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors w-full sm:w-auto text-center"
                onClick={startExam}
              >
                পরীক্ষা শুরু করুন
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FacultyExam;
