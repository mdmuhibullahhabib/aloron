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
  FaMoneyBillWave,
  FaStar,
  FaCopy,
  FaCheckCircle,
  FaTimesCircle,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: "c1",
      title: "পদার্থবিজ্ঞান MCQ কোর্স",
      subject: "Physics",
      description: "পদার্থবিজ্ঞান ১ম পত্রের MCQ প্রস্তুতি।",
      duration: "৩ মাস",
      price: 500,
      level: "HSC",
      status: "Pending", // Pending | Published | Draft | Rejected
      students: 120,
      revenue: 60000,
      rating: 4.5,
      curriculum: [
        { chapter: "অধ্যায় ১: ভৌত রাশি ও পরিমাপ", mcqs: 40 },
        { chapter: "অধ্যায় ২: ভেক্টর", mcqs: 30 },
      ],
      studentList: ["Ali Hasan", "Nusrat Jahan", "Rafiq Islam"],
    },
    {
      id: "c2",
      title: "রসায়ন MCQ কোর্স",
      subject: "Chemistry",
      description: "রসায়ন ২য় পত্রের MCQ প্র্যাকটিস।",
      duration: "২ মাস",
      price: 400,
      level: "Admission",
      status: "Published",
      students: 80,
      revenue: 32000,
      rating: 4.2,
      curriculum: [
        { chapter: "অধ্যায় ১: পরমাণুর গঠন", mcqs: 25 },
        { chapter: "অধ্যায় ২: পর্যায় সারণি", mcqs: 20 },
      ],
      studentList: ["Shimul Roy", "Farhana Akter"],
    },
  ]);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Filter + Search
  const filteredCourses = courses.filter(
    (c) =>
      (filter ? c.status === filter : true) &&
      (search
        ? c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.subject.toLowerCase().includes(search.toLowerCase()) ||
          c.level.toLowerCase().includes(search.toLowerCase())
        : true)
  );

  // Approve course
  const handleApprove = (id) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Published" } : c))
    );
    toast.success("✅ কোর্স এপ্রুভড হয়েছে");
  };

  // Reject course
  const handleReject = (id) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Rejected" } : c))
    );
    toast.error("❌ কোর্স রিজেক্ট হয়েছে");
  };

  // Toggle publish/unpublish
  const handleTogglePublish = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              status: c.status === "Published" ? "Draft" : "Published",
            }
          : c
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
    // TODO: open modal form
  };

  // Duplicate course
  const handleDuplicate = (course) => {
    const newCourse = {
      ...course,
      id: Date.now().toString(),
      title: course.title + " (Copy)",
      status: "Draft",
    };
    setCourses([...courses, newCourse]);
    toast.success("কোর্স ডুপ্লিকেট হয়েছে");
  };

  // View students
  const handleViewStudents = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
        📊 Manage Courses (Admin)
      </h2>

      {/* Filter + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <FaFilter />
          <select
            className="select select-bordered select-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">সবগুলো</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search by title, subject, level"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered input-sm"
          />
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-500">কোন কোর্স পাওয়া যায়নি।</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaBookOpen className="text-green-600" /> {course.title}
              </h3>

              {/* Subject & Info */}
              <p className="text-sm text-gray-600">
                বিষয়: <span className="font-semibold">{course.subject}</span>
              </p>
              <p className="text-sm text-gray-600">লেভেল: {course.level}</p>
              <p className="text-sm text-gray-500 line-clamp-2 my-2">
                {course.description}
              </p>

              {/* Duration & Price */}
              <p className="text-sm text-gray-600">⏳ মেয়াদ: {course.duration}</p>
              <p className="text-sm text-gray-600">💰 ফি: {course.price} টাকা</p>

              {/* Rating */}
              <p className="text-sm text-yellow-600 flex items-center gap-1 mb-2">
                <FaStar /> {course.rating} ⭐
              </p>

              {/* Revenue */}
              <p className="text-sm text-green-700 flex items-center gap-1 mb-3">
                <FaMoneyBillWave /> আয়: {course.revenue} টাকা
              </p>

              {/* Status */}
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-medium mb-3 ${
                  course.status === "Published"
                    ? "bg-green-100 text-green-700"
                    : course.status === "Draft"
                    ? "bg-yellow-100 text-yellow-700"
                    : course.status === "Pending"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {course.status}
              </span>

              {/* Students */}
              <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                <FaUsers className="text-blue-600" /> শিক্ষার্থী:{" "}
                {course.students}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {course.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleApprove(course.id)}
                      className="px-3 py-2 rounded-lg flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm"
                    >
                      <FaCheckCircle /> Approve
                    </button>
                    <button
                      onClick={() => handleReject(course.id)}
                      className="px-3 py-2 rounded-lg flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm"
                    >
                      <FaTimesCircle /> Reject
                    </button>
                  </>
                )}

                <button
                  onClick={() => handleTogglePublish(course.id)}
                  className={`px-3 py-2 rounded-lg flex items-center gap-1 text-white text-sm transition ${
                    course.status === "Published"
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {course.status === "Published" ? <FaToggleOff /> : <FaToggleOn />}
                  {course.status === "Published" ? "Unpublish" : "Publish"}
                </button>

                <button
                  onClick={() => handleEdit(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => handleViewStudents(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                >
                  <FaEye /> Details
                </button>

                <button
                  onClick={() => handleDuplicate(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-teal-600 hover:bg-teal-700 text-white text-sm"
                >
                  <FaCopy /> Duplicate
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

      {/* Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative overflow-y-auto max-h-[90vh]">
            <h3 className="text-xl font-bold mb-4 text-green-700">
              📖 {selectedCourse.title}
            </h3>
            <p className="mb-2 text-gray-700">{selectedCourse.description}</p>
            <p>👨‍🏫 লেভেল: {selectedCourse.level}</p>
            <p>⏳ মেয়াদ: {selectedCourse.duration}</p>
            <p>💰 ফি: {selectedCourse.price} টাকা</p>
            <p>⭐ রেটিং: {selectedCourse.rating}</p>
            <p>📊 আয়: {selectedCourse.revenue} টাকা</p>

            {/* Curriculum */}
            <h4 className="mt-4 mb-2 font-semibold flex items-center gap-2">
              <FaListUl /> কারিকুলাম
            </h4>
            <ul className="space-y-2 mb-4">
              {selectedCourse.curriculum.map((item, idx) => (
                <li
                  key={idx}
                  className="p-2 border rounded-md flex justify-between"
                >
                  <span>{item.chapter}</span>
                  <span className="text-sm text-gray-500">
                    MCQs: {item.mcqs}
                  </span>
                </li>
              ))}
            </ul>

            {/* Students */}
            <h4 className="mt-4 mb-2 font-semibold flex items-center gap-2">
              <FaUsers /> Students
            </h4>
            <ul className="list-disc list-inside mb-4">
              {selectedCourse.studentList.map((s, i) => (
                <li key={i}>{s}</li>
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

export default ManageCourses;
