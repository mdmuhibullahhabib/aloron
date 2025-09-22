import React, { useState } from "react";
import {
  FaUserGraduate,
  FaSearch,
  FaFilter,
  FaSort,
  FaTrash,
  FaEye,
  FaFileCsv,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import useManageStudents from "../../../hooks/useManageStudents";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageStudents = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, refetch, isLoading] = useManageStudents();
  const axiosSecure = useAxiosSecure();


// handleToggleStatus function
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus =
      currentStatus.toLowerCase() === "active" ? "pending" : "active";

    const loadingToast = toast.loading(`Updating status to ${newStatus}...`);

    try {
      await axiosSecure.patch(`/subscriptions/${id}`, { status: newStatus });

      toast.dismiss(loadingToast);
      toast.success(`✅ Status updated to ${newStatus}`);

      refetch(); // Refresh UI
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("❌ Status update failed!");
      console.error("Status update error:", error);
    }
  };


  // 🟢 Remove Student
  const handleRemove = (id) => {
    if (confirm("আপনি কি নিশ্চিত এই শিক্ষার্থীকে রিমুভ করতে চান?")) {
      toast.error("🗑️ শিক্ষার্থী রিমুভ হয়েছে");
      // TODO: Backend delete কল করতে হবে → axiosSecure.delete(`/subscriptions/${id}`)
      refetch();
    }
  };

  // 🟢 Export CSV
  const handleExportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Name,Email,Course,Status,Join Date"]
        .concat(
          students.map(
            (s) =>
              `${s.name},${s.email},${s.course},${s.status},${s.joinDate}`
          )
        )
        .join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "students.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 🟢 Filter + Search + Sort
  const filteredStudents = students
    .filter((s) =>
      (filter ? s.status?.toLowerCase() === filter.toLowerCase() : true)
    )
    .filter((s) =>
      search
        ? s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase()) ||
        s.course.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.joinDate) - new Date(a.joinDate);
      if (sortBy === "price") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        👩‍🎓 Manage Students
      </h2>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
        {/* Filter */}
        <div className="flex items-center gap-2">
          <FaFilter />
          <select
            className="select select-bordered select-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">সবগুলো</option>
            <option value="Active">Active</option>
            <option value="Pending">Inactive</option>
          </select>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search by name, email, course"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered input-sm"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <FaSort />
          <select
            className="select select-bordered select-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="date">Join Date</option>
            <option value="price">Course Price</option>
          </select>
        </div>

        {/* Export */}
        <button
          onClick={handleExportCSV}
          className="btn btn-sm bg-green-600 text-white"
        >
          <FaFileCsv /> Export CSV
        </button>
      </div>

      {/* Student Cards */}
      {isLoading ? (
        <p className="text-center text-gray-500">Loading students...</p>
      ) : filteredStudents.length === 0 ? (
        <p className="text-center text-gray-500">কোনো শিক্ষার্থী পাওয়া যায়নি।</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <div
              key={student._id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaUserGraduate className="text-blue-600" /> {student.name}
              </h3>

              <p className="text-sm text-gray-600">📧 {student.email}</p>
              <p className="text-sm text-gray-600">📘 Course: {student.course}</p>
              <p className="text-sm text-gray-600">💰 Fee: {student.price} টাকা</p>
              <p className="text-sm text-gray-600">📅 Joined: {student.joinDate}</p>

              {/* Status Badge */}
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-medium my-3 ${student.status?.toLowerCase() === "active"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                  }`}
              >
                {student.status}
              </span>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <button
                  onClick={() => setSelectedStudent(student)}
                  className="btn btn-xs bg-gray-700 text-white"
                >
                  <FaEye /> Details
                </button>
                <button
                  onClick={() => handleToggleStatus(student._id, student.status)}
                  className={`btn btn-xs text-white ${student.status?.toLowerCase() === "active"
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : "bg-green-600 hover:bg-green-700"
                    }`}
                >
                  {student.status?.toLowerCase() === "active" ? <FaToggleOff /> : <FaToggleOn />}
                  {student.status?.toLowerCase() === "active" ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleRemove(student._id)}
                  className="btn btn-xs bg-red-600 text-white hover:bg-red-700"
                >
                  <FaTrash /> Remove
                </button>
              </div>



            </div>
          ))}
        </div>
      )}

      {/* Modal for Details */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {selectedStudent.name} - Details
            </h3>
            <p>📧 Email: {selectedStudent.email}</p>
            <p>📘 Course: {selectedStudent.course}</p>
            <p>💰 Fee: {selectedStudent.price} টাকা</p>
            <p>📅 Joined: {selectedStudent.joinDate}</p>
            <p>Status: {selectedStudent.status}</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedStudent(null)}
                className="btn btn-sm bg-gray-600 text-white"
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

export default ManageStudents;
