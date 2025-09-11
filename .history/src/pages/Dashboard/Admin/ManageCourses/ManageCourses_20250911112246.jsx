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
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import useCourses from "../../../../hooks/useCourses";
import useAxiosSecure from "../../../../hooks/useAxiosPrivate"; // JWT বা Auth Axios
import CourseCurriculumModal from "./CourseCurriculumModal";
import CourseStudentsModal from "./CourseStudentsModal";
import CourseEditModal from "./CourseEditModal";

const ManageCourses = () => {
  const axiosPrivate = useAxiosSecure(); // ব্যাকএন্ড কলের জন্য
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState(null);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // কাস্টম হুক থেকে কোর্স ডেটা এবং refetch
  const [courses, refetch] = useCourses();

  // -----------------------
  // Backend Status Update
  // -----------------------
  const updateCourseStatus = async (courseId, status) => {
    try {
      // PATCH রিকোয়েস্ট ব্যাকএন্ডে
      await axiosPrivate.patch(`/courses/${courseId}`, { status });
      toast.success(`কোর্স স্ট্যাটাস পরিবর্তন হয়েছে: ${status}`);
      refetch(); // কোর্স তালিকা আপডেট
    } catch (err) {
      console.error(err);
      toast.error("কোর্স স্ট্যাটাস পরিবর্তন ব্যর্থ হয়েছে!");
    }
  };

  // -----------------------
  // Course Operations
  // -----------------------
  const handleApprove = (id) => updateCourseStatus(id, "Published");
  const handleReject = (id) => updateCourseStatus(id, "Rejected");
  const handleTogglePublish = (course) =>
    updateCourseStatus(
      course._id,
      course.status === "Published" ? "Draft" : "Published"
    );
  const handleDelete = async (courseId) => {
    try {
      await axiosPrivate.delete(`/courses/${courseId}`);
      toast.success("কোর্স ডিলিট হয়েছে");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("ডিলিট ব্যর্থ হয়েছে!");
    }
  };
  const handleDuplicate = async (course) => {
    try {
      const newCourse = { ...course, title: course.title + " (Copy)" };
      delete newCourse._id; // MongoDB নতুন আইডি জেনারেট করবে
      newCourse.status = "Draft";

      await axiosPrivate.post(`/courses`, newCourse);
      toast.success("কোর্স ডুপ্লিকেট হয়েছে");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("ডুপ্লিকেট ব্যর্থ হয়েছে!");
    }
  };

  const handleViewStudents = (course) => setSelectedStudents(course);
  const handleEdit = (course) => setSelectedEdit(course);
  const filteredCourses = courses.filter(
    (c) =>
      (filter ? c.status === filter : true) &&
      (search
        ? c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.subject.toLowerCase().includes(search.toLowerCase()) ||
          c.teacher.toLowerCase().includes(search.toLowerCase())
        : true)
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
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
        <p className="text-center text-gray-500">কোনো কোর্স পাওয়া যায়নি।</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaBookOpen className="text-green-600" /> {course.title}
              </h3>

              <p className="text-sm text-gray-600">
                বিষয়: <span className="font-semibold">{course.subject}</span>
              </p>
              <p className="text-sm text-gray-600">শিক্ষক: {course.teacher}</p>
              <p className="text-sm text-gray-600">লেভেল: {course.level}</p>
              <p className="text-sm text-gray-500 line-clamp-2 my-2">
                {course.description}
              </p>

              <p className="text-sm text-gray-600">⏳ মেয়াদ: {course.duration}</p>
              <p className="text-sm text-gray-600">💰 ফি: {course.price} টাকা</p>
              <p className="text-sm text-yellow-600 flex items-center gap-1 mb-2">
                <FaStar /> {course.rating} ⭐
              </p>
              <p className="text-sm text-green-700 flex items-center gap-1 mb-3">
                <FaMoneyBillWave /> মোট আয়: {course.revenue} টাকা
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

              <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                <FaUsers className="text-blue-600" /> শিক্ষার্থী:{" "}
                {course.students || 0}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {course.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleApprove(course._id)}
                      className="px-3 py-2 rounded-lg flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm"
                    >
                      <FaCheckCircle /> Approve
                    </button>
                    <button
                      onClick={() => handleReject(course._id)}
                      className="px-3 py-2 rounded-lg flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm"
                    >
                      <FaTimesCircle /> Reject
                    </button>
                  </>
                )}

                <button
                  onClick={() => handleTogglePublish(course)}
                  className={`px-3 py-2 rounded-lg flex items-center gap-1 text-white text-sm ${
                    course.status === "Published"
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {course.status === "Published" ? (
                    <>
                      <FaToggleOff /> Unpublish
                    </>
                  ) : (
                    <>
                      <FaToggleOn /> Publish
                    </>
                  )}
                </button>

                <button
                  onClick={() => setSelectedEdit(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => handleViewStudents(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                >
                  <FaEye /> Students
                </button>

                <button
                  onClick={() => handleDuplicate(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-teal-600 hover:bg-teal-700 text-white text-sm"
                >
                  <FaCopy /> Duplicate
                </button>

                <button
                  onClick={() => handleDelete(course._id)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm"
                >
                  <FaTrash /> Delete
                </button>

                <button
                  onClick={() => setSelectedCurriculum(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white text-sm"
                >
                  <FaListUl /> কারিকুলাম
                </button>

                <button
                  onClick={() => alert("কোর্স ডিটেইলস দেখুন")}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm"
                >
                  <FaInfoCircle /> Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {selectedCurriculum && (
        <CourseCurriculumModal
          course={selectedCurriculum}
          onClose={() => setSelectedCurriculum(null)}
        />
      )}
      {selectedStudents && (
        <CourseStudentsModal
          course={selectedStudents}
          onClose={() => setSelectedStudents(null)}
        />
      )}
      {selectedEdit && (
        <CourseEditModal
          course={selectedEdit}
          onClose={() => setSelectedEdit(null)}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageCourses;
