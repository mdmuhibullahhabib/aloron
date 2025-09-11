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
// import useCourses from "../../../hooks/useCourses";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import CourseCurriculumModal from "./CourseCurriculumModal";
import CourseDetailsModal from "./CourseDetailsModal";
import CourseEditModal from "./CourseEditModal";
import useCourses from "../../../../hooks/useCourses";
import CourseStudentsModal from "./CourseStudentsModal";

const ManageCourses = () => {
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState(null);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();

  const [courses, refetch] = useCourses();

   // ✅ Approve → Published
  const handleApprove = async (id) => {
    try {
      await axiosSecure.patch(`/courses/${id}`, { status: "Published" });
      toast.success("✅ কোর্স Published হয়েছে");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("Publish ব্যর্থ হয়েছে!");
    }
  };

  // ✅ Reject → Rejected
  const handleReject = async (id) => {
    try {
      await axiosSecure.patch(`/courses/${id}`, { status: "Rejected" });
      toast.error("❌ কোর্স Rejected হয়েছে");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("Reject ব্যর্থ হয়েছে!");
    }
  };

  // ✅ Publish / Unpublish toggle
  const handleTogglePublish = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "Published" ? "Draft" : "Published";
      await axiosSecure.patch(`/courses/${id}`, { status: newStatus });
      toast.success(
        newStatus === "Published"
          ? "✅ কোর্স Published হয়েছে"
          : "⏸️ কোর্স Unpublished হয়েছে"
      );
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("Status update ব্যর্থ হয়েছে!");
    }
  };

  // Delete course
  const handleDelete = async (id) => {
    if (confirm("আপনি কি নিশ্চিত এই কোর্স ডিলিট করতে চান?")) {
      await axiosSecure.delete(`/courses/${id}`);
      toast.error("🗑️ কোর্স ডিলিট হয়েছে");
      refetch();
    }
  };

  // Duplicate course
  const handleDuplicate = async (course) => {
    const newCourse = {
      ...course,
      _id: undefined,
      title: course.title + " (Copy)",
      status: "Draft",
    };
    await axiosSecure.post("/courses", newCourse);
    toast.success("📑 কোর্স ডুপ্লিকেট হয়েছে");
    refetch();
  };

  // Students
  const handleViewStudents = (course) => {
    toast.success(`${course.title} কোর্সের শিক্ষার্থীদের লিস্ট আসবে`);
    // TODO: Make Students Modal later
  };

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
                className={`inline-block px-3 py-1 text-xs rounded-full font-medium mb-3 ${course.status === "Published"
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
                {course.students}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {course.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleApprove(course._id)}
                      className="btn btn-xs bg-green-600 text-white"
                    >
                      <FaCheckCircle /> Approve
                    </button>
                    <button
                      onClick={() => handleReject(course._id)}
                      className="btn btn-xs bg-red-600 text-white"
                    >
                      <FaTimesCircle /> Reject
                    </button>
                  </>
                )}

                <button
                  onClick={() => setSelectedCurriculum(course)}
                  className="btn btn-xs bg-purple-600 text-white"
                >
                  <FaListUl /> কারিকুলাম
                </button>

                <button
                  onClick={() => setSelectedDetails(course)}
                  className="btn btn-xs bg-gray-700 text-white"
                >
                  <FaInfoCircle /> Details
                </button>

                <button
                  onClick={() => handleTogglePublish(course._id, course.status)}
                  className={`btn btn-xs text-white ${course.status === "Published"
                      ? "bg-yellow-600"
                      : "bg-green-600"
                    }`}
                >
                  {course.status === "Published" ? <FaToggleOff /> : <FaToggleOn />}
                  {course.status === "Published" ? "Unpublish" : "Publish"}
                </button>

                <button
                  onClick={() => setSelectedEdit(course)}
                  className="btn btn-xs bg-blue-600 text-white"
                >
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => handleViewStudents(course)}
                  className="btn btn-xs bg-indigo-600 text-white"
                >
                  <FaEye /> Students
                </button>

                <button
                  onClick={() => handleDuplicate(course)}
                  className="btn btn-xs bg-teal-600 text-white"
                >
                  <FaCopy /> Duplicate
                </button>

                <button
                  onClick={() => handleDelete(course._id)}
                  className="btn btn-xs bg-red-600 text-white"
                >
                  <FaTrash /> Delete
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
      {selectedDetails && (
        <CourseDetailsModal
          course={selectedDetails}
          onClose={() => setSelectedDetails(null)}
        />
      )}
      {selectedEdit && (
        <CourseEditModal
          course={selectedEdit}
          onClose={() => setSelectedEdit(null)}
          refetch={refetch}
        />
      )}

      {selectedStudents && (
        <CourseStudentsModal
          course={selectedStudents}
          onClose={() => setSelectedStudents(null)}
        />
      )}
    </div>
  );
};

export default ManageCourses;
