import React from "react";
import useManageStudents from "../../../hooks/useManageStudents";
// import useManageStudents from "../hooks/useManageStudents";

const ManageStudents = () => {
  const [students, refetch, isLoading] = useManageStudents();

  if (isLoading) return <p className="text-center py-4">Loading students...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Students</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Join Date</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{s.name}</td>
                <td className="border px-4 py-2">{s.email}</td>
                <td className="border px-4 py-2">{s.course}</td>
                <td className="border px-4 py-2">${s.price}</td>
                <td className="border px-4 py-2">{s.joinDate}</td>
                <td
                  className={`border px-4 py-2 font-semibold ${
                    s.status === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {s.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
