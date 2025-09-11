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

  // ✅ Update course status helper
  const updateCourseStatus = async (id, status, toastType = "success") => {
    // if (!id) return;
    // try {
    //   await axiosSecure.patch(`/courses/${id}`, { status });
    //   if (toastType === "success") {
    //     toast.success(`✅ কোর্স ${status} হয়েছে`);
    //   } else if (toastType === "error") {
    //     toast.error(`❌ কোর্স ${status} হয়েছে`);
    //   }
    //   refetch();
    // } catch (err) {
    //   console.error("Status update error:", err.response?.data || err.message);
    //   toast.error("Status update ব্যর্থ হয়েছে!");
    // }
    console.log(id,status )
  };

  // ✅ Approve → Published
  const handleApprove = (id) => updateCourseStatus(id, "Published", "success");

  // ✅ Reject → Rejected
  const handleReject = (id) => updateCourseStatus(id, "Rejected", "error");

  // ✅ Publish / Unpublish toggle
  const handleTogglePublish = (id, currentStatus) => {
    const newStatus = currentStatus === "Published" ? "Unpublished" : "Published";
    updateCourseStatus(id, newStatus, "success");
  };

  // Delete course
  const handleDelete = async (id) => {
    if (!id) return;
    if (confirm("আপনি কি নিশ্চিত এই কোর্স ডিলিট করতে চান?")) {
      try {
        await axiosSecure.delete(`/courses/${id}`);
        toast.error("🗑️ কোর্স ডিলিট হয়েছে");
        refetch();
      } catch (err) {
        console.error("Delete error:", err.response?.data || err.message);
        toast.error("Delete ব্যর্থ হয়েছে!");
      }
    }
  };

  // Duplicate course
  const handleDuplicate = async (course) => {
    if (!course) return;
    const newCourse = {
      ...course,
      _id: undefined,
      title: course.title + " (Copy)",
      status: "Unpublished",
    };
    try {
      await axiosSecure.post("/courses", newCourse);
      toast.success("📑 কোর্স ডুপ্লিকেট হয়েছে");
      refetch();
    } catch (err) {
      console.error("Duplicate error:", err.response?.data || err.message);
      toast.error("Duplicate ব্যর্থ হয়েছে!");
    }
  };

  // Students
  const handleViewStudents = (course) => {
    toast.success(`${course.title} কোর্সের শিক্ষার্থীদের লিস্ট আসবে`);
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
            <option value="Unpublished">Unpublished</option>
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
                    : course.status === "Unpublished"
                    ? "bg-yellow-100 text-yellow-700"
                    : course.status === "Pending"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {course.status}
              </span>

              <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                <FaUsers className="text-blue-600" /> শিক্ষার্থী: {course.students}
              </p>

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
                  className={`btn btn-xs text-white ${
                    course.status === "Published" ? "bg-yellow-600" : "bg-green-600"
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
