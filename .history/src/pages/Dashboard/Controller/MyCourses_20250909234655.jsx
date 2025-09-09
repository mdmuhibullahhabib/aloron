import React, { useState } from "react";
import {
  FaBookOpen,
  FaUsers,
  FaEdit,
  FaTrash,
  FaEye,
  FaToggleOn,
  FaToggleOff,
  FaListUl,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const MyCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: "c1",
      title: "পদার্থবিজ্ঞান MCQ কোর্স",
      subject: "Physics",
      description: "এই কোর্সে পদার্থবিজ্ঞান ১ম পত্রের সবগুলো অধ্যায়ের MCQ প্র্যাকটিস করা যাবে।",
      duration: "3 মাস",
      price: 500,
      published: true,
      students: 120,
      curriculum: [
        {
          chapter: "অধ্যায় ১: ভৌত রাশি ও পরিমাপ",
          mcqs: 40,
        },
        {
          chapter: "অধ্যায় ২: ভেক্টর",
          mcqs: 30,
        },
      ],
    },
    {
      id: "c2",
      title: "রসায়ন MCQ কোর্স",
      subject: "Chemistry",
      description: "রসায়ন ২য় পত্রের সব টপিক কভার করা হয়েছে।",
      duration: "2 মাস",
      price: 400,
      published: false,
      students: 80,
      curriculum: [
        {
          chapter: "অধ্যায় ১: পরমাণুর গঠন",
          mcqs: 25,
        },
        {
          chapter: "অধ্যায় ২: পর্যায় সারণি",
          mcqs: 20,
        },
      ],
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);

  // Toggle publish/unpublish
  const handleTogglePublish = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, published: !c.published } : c
      )
    );
    toast.success("কোর্স স্ট্যাটাস পরিবর্তন হয়েছে");
  };

  // Delete course
  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    toast.error("কোর্স ডিলিট হয়েছে");
  };

  // Edit course
  const handleEdit = (course) => {
    toast(`✏️ ${course.title} এডিট মোডে খোলা হয়েছে`);
    // Future: open a form modal with course data
  };

  // View students
  const handleViewStudents = (title) => {
    toast.success(`${title} কোর্সের শিক্ষার্থী তালিকা দেখা যাবে`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
        🎓 আমার তৈরি MCQ কোর্স
      </h2>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500">
          এখনো কোন কোর্স তৈরি করেননি।
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaBookOpen className="text-green-600" />
                {course.title}
              </h3>

              {/* Subject & Description */}
              <p className="text-sm text-gray-600 mb-2">
                বিষয়: <span className="font-semibold">{course.subject}</span>
              </p>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {course.description}
              </p>

              {/* Duration & Price */}
              <p className="text-sm text-gray-600 mb-1">
                ⏳ মেয়াদ: {course.duration}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                💰 কোর্স ফি: {course.price} টাকা
              </p>

              {/* Status */}
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-medium mb-3 ${
                  course.published
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {course.published ? "Published" : "Unpublished"}
              </span>

              {/* Students */}
              <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                <FaUsers className="text-blue-600" />
                শিক্ষার্থী: {course.students}
              </p>

              {/* Curriculum Button */}
              <button
                onClick={() => setSelectedCourse(course)}
                className="w-full mb-3 px-3 py-2 rounded-lg flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm"
              >
                <FaListUl /> কোর্স কারিকুলাম
              </button>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <button
                  onClick={() => handleTogglePublish(course.id)}
                  className={`px-3 py-2 rounded-lg flex items-center gap-1 text-white text-sm transition ${
                    course.published
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {course.published ? <FaToggleOff /> : <FaToggleOn />}
                  {course.published ? "Unpublish" : "Publish"}
                </button>

                <button
                  onClick={() => handleEdit(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => handleViewStudents(course.title)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                >
                  <FaEye /> Students
                </button>

                <button
                  onClick={() => handleDelete(course.id)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Curriculum Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
            <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
              📖 {selectedCourse.title} - কারিকুলাম
            </h3>
            <ul className="space-y-3 mb-6">
              {selectedCourse.curriculum.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3 border rounded-lg flex justify-between items-center"
                >
                  <span>{item.chapter}</span>
                  <span className="text-sm text-gray-600">
                    MCQs: {item.mcqs}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedCourse(null)}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
