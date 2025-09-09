import React, { useState } from "react";
import {
  FaBookOpen,
  FaUsers,
  FaEdit,
  FaTrash,
  FaEye,
  FaToggleOn,
  FaToggleOff,
  FaListOl,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

// Fake Data
const initialCourses = [
  {
    id: "c1",
    title: "পদার্থবিজ্ঞান ১ম পত্র MCQ",
    subject: "Physics",
    description: "বোর্ড পরীক্ষার জন্য প্রস্তুতিমূলক এমসিকিউ কোর্স।",
    published: true,
    students: 45,
    curriculum: [
      { chapter: "অধ্যায় ১: ভৌত রাশি ও একক", mcqs: 20 },
      { chapter: "অধ্যায় ২: গতি", mcqs: 25 },
    ],
  },
  {
    id: "c2",
    title: "রসায়ন ২য় পত্র MCQ",
    subject: "Chemistry",
    description: "HSC পরীক্ষার জন্য প্র্যাকটিস সেট।",
    published: false,
    students: 32,
    curriculum: [
      { chapter: "অধ্যায় ১: পর্যায় সারণি", mcqs: 30 },
      { chapter: "অধ্যায় ২: রাসায়নিক বন্ধন", mcqs: 18 },
    ],
  },
];

const MyCourses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [editingCourse, setEditingCourse] = useState(null);
  const [viewCurriculum, setViewCurriculum] = useState(null);

  // Toggle publish/unpublish
  const handleTogglePublish = (id) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, published: !c.published } : c))
    );
    toast.success("কোর্স স্ট্যাটাস পরিবর্তন হয়েছে");
  };

  // Delete course
  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    toast.error("কোর্স ডিলিট হয়েছে");
  };

  // Save Edited Course
  const handleSaveEdit = () => {
    setCourses((prev) =>
      prev.map((c) => (c.id === editingCourse.id ? editingCourse : c))
    );
    setEditingCourse(null);
    toast.success("কোর্স আপডেট হয়েছে");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
        🎓 আমার তৈরি MCQ কোর্স
      </h2>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500">এখনো কোন কোর্স তৈরি করেননি।</p>
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
              <p className="text-sm text-gray-500 mb-3">{course.description}</p>

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

              {/* Curriculum */}
              <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                <FaListOl className="text-purple-600" />
                অধ্যায় সংখ্যা: {course.curriculum.length}
              </p>

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
                  onClick={() => setEditingCourse(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => setViewCurriculum(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                >
                  <FaEye /> Curriculum
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

      {/* ===== Edit Course Modal ===== */}
      {editingCourse && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h3 className="text-lg font-bold mb-4">✏️ কোর্স এডিট করুন</h3>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mb-3"
              value={editingCourse.title}
              onChange={(e) =>
                setEditingCourse({ ...editingCourse, title: e.target.value })
              }
            />
            <textarea
              className="w-full border rounded-lg p-2 mb-3"
              value={editingCourse.description}
              onChange={(e) =>
                setEditingCourse({
                  ...editingCourse,
                  description: e.target.value,
                })
              }
            ></textarea>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingCourse(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== View Curriculum Modal ===== */}
      {viewCurriculum && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">
              📘 {viewCurriculum.title} - Curriculum
            </h3>
            <ul className="space-y-3 mb-4">
              {viewCurriculum.curriculum.map((c, i) => (
                <li
                  key={i}
                  className="p-3 border rounded-lg flex justify-between items-center"
                >
                  <span>{c.chapter}</span>
                  <span className="text-sm text-gray-600">
                    {c.mcqs} MCQs
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-end">
              <button
                onClick={() => setViewCurriculum(null)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
