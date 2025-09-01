import React from "react";

const ManageUsers = () => {
  // Fake users data
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "student" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "instructor" },
    { id: 3, name: "Carol White", email: "carol@example.com", role: "student" },
    { id: 4, name: "David Lee", email: "david@example.com", role: "admin" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="table-auto w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2 capitalize">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
