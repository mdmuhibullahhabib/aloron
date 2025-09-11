import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const CourseDetailsModal = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <FaInfoCircle className="text-blue-600" /> কোর্স ডিটেইলস
        </h3>
        <p><strong>শিরোনাম:</strong> {course.title}</p>
        <p><strong>বিষয়:</strong> {course.subject}</p>
        <p><strong>শিক্ষক:</strong> {course.teacher}</p>
        <p><strong>লেভেল:</strong> {course.level}</p>
        <p><strong>বর্ণনা:</strong> {course.description}</p>
        <p><strong>মেয়াদ:</strong> {course.duration}</p>
        <p><strong>ফি:</strong> {course.price} টাকা</p>
        <p><strong>শিক্ষার্থী:</strong> {course.students}</p>
        <p><strong>রেটিং:</strong> {course.rating} ⭐</p>
        <p><strong>মোট আয়:</strong> {course.revenue} টাকা</p>

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

export default CourseDetailsModal;
