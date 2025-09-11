import React from "react";
import { FaListUl } from "react-icons/fa";

const CourseCurriculumModal = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <FaListUl className="text-purple-600" /> {course.title} - কারিকুলাম
        </h3>

        {course.curriculum && course.curriculum.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {course.curriculum.map((item, idx) => (
              <li key={idx} className="text-gray-700">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">❌ কোনো কারিকুলাম যোগ করা হয়নি।</p>
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

export default CourseCurriculumModal;
