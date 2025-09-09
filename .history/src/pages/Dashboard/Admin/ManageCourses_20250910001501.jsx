import React, { useState } from "react";
import {
  FaBookOpen,
  FaUsers,
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaToggleOff,
  FaEye,
  FaMoneyBillWave,
  FaStar,
  FaUserTie,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy,
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
      teacher: "Rahim Uddin",
      description: "পদার্থবিজ্ঞান ১ম পত্রের MCQ প্রস্তুতি।",
      duration: "৩ মাস",
      price: 500,
      status: "Published",
      students: 120,
      revenue: 60000,
      rating: 4.5,
    },
    {
      id: "c2",
      title: "রসায়ন MCQ কোর্স",
      subject: "Chemistry",
      teacher: "Karim Hossain",
      description: "রসায়ন ২য় পত্রের MCQ প্র্যাকটিস।",
      duration: "২ মাস",
      price: 400,
      status: "Pending",
      students: 80,
      revenue: 32000,
      rating: 4.2,
    },
  ]);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // Filter + Search
  const filteredCourses = courses.filter(
    (c) =>
      (filter ? c.status === filter : true) &&
      (search
        ? c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.subject.toLowerCase().includes(search.toLowerCase()) ||
          c.teacher.toLowerCase().includes(search.toLowerCase())
        : true)
  );

  // Approve
  const handleApprove = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: "Published" } : c
      )
    );
    toast.success("✅ কোর্স এপ্রুভড হয়েছে");
  };

  // Reject
  const handleReject = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: "Rejected" } : c
      )
    );
    toast.error("❌ কোর্স রিজেক্ট করা হয়েছে");
  };

  // Toggle Publish
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

  // Delete
  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    toast.error("কোর্স মুছে ফেলা হয়েছে");
  };

  // Edit
  const handleEdit = (course) => {
    toast(`✏️ ${course.title} এডিট করার জন্য খোলা হয়েছে`);
    // TODO: open modal
  };

  // Duplicate
  const handleDuplicate = (course) => {
    const newCourse = {
      ...course,
      id: Date.now().toString(),
      title: course.title + " (Copy)",
      status: "Draft",
    };
    setCourses([...courses, newCourse]);
    toast.success("কোর্স ডুপ্লিকেট হয়েছে");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">
        📚 Manage Courses (Admin)
      </h2>

      {/* Filter & Search */}
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
            placeholder="Search by title, subject, teacher"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered input-sm"
          />
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-500">
          কোন কোর্স পাওয়া যায়নি।
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaBookOpen className="text-indigo-600" /> {course.title}
              </h3>

              {/* Info */}
              <p className="text-sm text-gray-600">
                বিষয়: <span className="font-semibold">{course.subject}</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaUserTie className="text-gray-500" /> শিক্ষক: {course.teacher}
              </p>
              <p className="text-sm text-gray-500 line-clamp-2 my-2">
                {course.description}
              </p>
              <p className="text-sm text-gray-600">⏳ মেয়াদ: {course.duration}</p>
              <p className="text-sm text-gray-600">💰 ফি: {course.price} টাকা</p>

              <p className="text-sm text-yellow-600 flex items-center gap-1 mb-2">
                <FaStar /> {course.rating} ⭐
              </p>

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
                  {course.status === "Published" ? (
                    <FaToggleOff />
                  ) : (
                    <FaToggleOn />
                  )}
                  {course.status === "Published" ? "Unpublish" : "Publish"}
                </button>

                <button
                  onClick={() => handleEdit(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  <FaEdit /> Edit
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

                <button
                  onClick={() => toast.info("👥 View Students")}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                >
                  <FaEye /> Students
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
