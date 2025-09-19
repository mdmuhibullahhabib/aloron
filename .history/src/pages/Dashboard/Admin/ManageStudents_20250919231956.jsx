import React, { useState, useEffect } from "react";
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

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [student, refetch, isLoading] = useManageStudents();

  console.log(first)

  // 🟢 Fake Data load
  useEffect(() => {
    const fakeData = [
      {
        _id: "1",
        name: "Rahim Uddin",
        email: "rahim@example.com",
        course: "Physics 101",
        price: 1200,
        joinDate: "2025-08-01",
        status: "Active",
      },
      {
        _id: "2",
        name: "Karima Akter",
        email: "karima@example.com",
        course: "Math Advanced",
        price: 1500,
        joinDate: "2025-08-05",
        status: "Inactive",
      },
      {
        _id: "3",
        name: "Sajid Hasan",
        email: "sajid@example.com",
        course: "Biology Basics",
        price: 1000,
        joinDate: "2025-08-08",
        status: "Active",
      },
      {
        _id: "4",
        name: "Nadia Chowdhury",
        email: "nadia@example.com",
        course: "English Literature",
        price: 2000,
        joinDate: "2025-08-10",
        status: "Active",
      },
      {
        _id: "5",
        name: "Tanvir Ahmed",
        email: "tanvir@example.com",
        course: "Chemistry Lab",
        price: 1800,
        joinDate: "2025-08-12",
        status: "Inactive",
      },
    ];
    setStudents(fakeData);
  }, []);

  // 🟢 Update Status
  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    setStudents(
      students.map((s) =>
        s._id === id ? { ...s, status: newStatus } : s
      )
    );
    toast.success(`✅ Student status updated to ${newStatus}`);
  };

  // 🟢 Remove Student
  const handleRemove = (id) => {
    if (confirm("আপনি কি নিশ্চিত এই শিক্ষার্থীকে রিমুভ করতে চান?")) {
      setStudents(students.filter((s) => s._id !== id));
      toast.error("🗑️ শিক্ষার্থী রিমুভ হয়েছে");
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
      filter ? s.status === filter || s.course === filter : true
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
            <option value="Inactive">Inactive</option>
            <option value="Physics 101">Physics 101</option>
            <option value="Math Advanced">Math Advanced</option>
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
      {filteredStudents.length === 0 ? (
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

              {/* Status */}
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-medium my-3 ${
                  student.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
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
                  onClick={() =>
                    handleToggleStatus(student._id, student.status)
                  }
                  className={`btn btn-xs text-white ${
                    student.status === "Active" ? "bg-yellow-600" : "bg-green-600"
                  }`}
                >
                  {student.status === "Active" ? <FaToggleOff /> : <FaToggleOn />}
                  {student.status === "Active" ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleRemove(student._id)}
                  className="btn btn-xs bg-red-600 text-white"
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
