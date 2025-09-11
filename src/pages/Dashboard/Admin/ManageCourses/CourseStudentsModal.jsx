import React from "react";
import { FaUsers } from "react-icons/fa";

const CourseStudentsModal = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <FaUsers className="text-blue-600" /> {course.title} - শিক্ষার্থীরা
        </h3>

        {course.studentsList && course.studentsList.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {course.studentsList.map((student, idx) => (
              <li key={idx} className="py-2 flex justify-between items-center">
                <span className="text-gray-700">{student.name}</span>
                <span className="text-sm text-gray-500">{student.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">❌ কোনো শিক্ষার্থী নেই।</p>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseStudentsModal;
