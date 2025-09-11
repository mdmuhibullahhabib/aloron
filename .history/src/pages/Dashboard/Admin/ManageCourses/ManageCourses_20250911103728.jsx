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
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const ManageCourses = () => {
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const [courses, refetch] = useCourses(); // published/pending সহ সব কোর্স
  const axiosPublic = useAxiosPublic();

  // Approve course
  const handleApprove = async (id) => {
    await axiosPublic.patch(`/courses/${id}`, { status: "Published" });
    toast.success("✅ কোর্স এপ্রুভ হয়েছে");
    refetch();
  };

  // Reject course
  const handleReject = async (id) => {
    await axiosPublic.patch(`/courses/${id}`, { status: "Rejected" });
    toast.error("❌ কোর্স রিজেক্ট হয়েছে");
    refetch();
  };

  // Toggle publish/unpublish
  const handleTogglePublish = async (id, currentStatus) => {
    const newStatus = currentStatus === "Published" ? "Draft" : "Published";
    await axiosPublic.patch(`/courses/${id}`, { status: newStatus });
    toast.success("কোর্স স্ট্যাটাস পরিবর্তন হয়েছে");
    refetch();
  };

  // Delete course
  const handleDelete = async (id) => {
    await axiosPublic.delete(`/courses/${id}`);
    toast.error("কোর্স ডিলিট হয়েছে");
    refetch();
  };

  // Edit course
  const handleEdit = (course) => {
    toast(`✏️ ${course.title} এডিট মোডে খোলা হয়েছে`);
    // TODO: open modal with form
  };

  // Duplicate course
  const handleDuplicate = async (course) => {
    const newCourse = {
      ...course,
      _id: undefined, // নতুন course হিসেবে সেভ হবে
      title: course.title + " (Copy)",
      status: "Draft",
    };
    await axiosPublic.post("/courses", newCourse);
    toast.success("কোর্স ডুপ্লিকেট হয়েছে");
    refetch();
  };

  // View students
  const handleViewStudents = (title) => {
    toast.success(`${title} কোর্সের শিক্ষার্থীদের দেখা যাবে`);
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
                {course.students}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {/* Admin Approve/Reject */}
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

                {/* Curriculum */}
                <button
                  onClick={() => setSelectedCurriculum(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white text-sm"
                >
                  <FaListUl /> কারিকুলাম
                </button>

                {/* Details */}
                <button
                  onClick={() => setSelectedDetails(course)}
                  className="px-3 py-2 rounded-lg flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm"
                >
                  <FaInfoCircle /> Details
                </button>

                <button
                  onClick={() => handleTogglePublish(course._id, course.status)}
                  className={`px-3 py-2 rounded-lg flex items-center gap-1 text-white text-sm ${
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
                  onClick={() => handleViewStudents(course.title)}
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
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Curriculum Modal */}
      {selectedCurriculum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
            <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
              📖 {selectedCurriculum.title} - কারিকুলাম
            </h3>
            <ul className="space-y-3 mb-6">
              {selectedCurriculum.curriculum.map((item, idx) => (
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
              onClick={() => setSelectedCurriculum(null)}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {selectedDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <FaInfoCircle className="text-blue-600" /> কোর্স ডিটেইলস
            </h3>
            <p><strong>শিরোনাম:</strong> {selectedDetails.title}</p>
            <p><strong>বিষয়:</strong> {selectedDetails.subject}</p>
            <p><strong>শিক্ষক:</strong> {selectedDetails.teacher}</p>
            <p><strong>লেভেল:</strong> {selectedDetails.level}</p>
            <p><strong>বর্ণনা:</strong> {selectedDetails.description}</p>
            <p><strong>মেয়াদ:</strong> {selectedDetails.duration}</p>
            <p><strong>ফি:</strong> {selectedDetails.price} টাকা</p>
            <p><strong>শিক্ষার্থী:</strong> {selectedDetails.students}</p>
            <p><strong>রেটিং:</strong> {selectedDetails.rating} ⭐</p>
            <p><strong>মোট আয়:</strong> {selectedDetails.revenue} টাকা</p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedDetails(null)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
