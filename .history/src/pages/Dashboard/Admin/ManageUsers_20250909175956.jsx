// src/pages/dashboard/ManageUsers.jsx
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaEye, FaPlus } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

// Mock users data
const mockUsers = [
  { id: 1, name: "Muhibullah Habib", email: "habib@example.com", role: "Student" },
  { id: 2, name: "Dr. Karim", email: "karim@example.com", role: "Instructor" },
  { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin" },
];

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিতভাবে এই ইউজারটি ডিলিট করতে চান?")) {
      setUsers(prev => prev.filter(user => user.id !== id));
      toast.success("ইউজারটি সফলভাবে ডিলিট করা হয়েছে!");
    }
  };

  const handleEdit = (user) => {
    toast("এডিট ফাংশন এখনো ইমপ্লিমেন্ট করা হয়নি", { icon: '⚠️' });
  };

  const handleView = (user) => {
    toast(`ইউজারের বিস্তারিত দেখুন: ${user.name}`, { icon: '👤' });
  };

  const handleAddUser = () => {
    toast("নতুন ইউজার যোগ ফাংশন এখনো ইমপ্লিমেন্ট করা হয়নি", { icon: '➕' });
  };

  if (loading) return <p className="text-center text-lg mt-10">Loading users...</p>;

  return (
    <div className="p-6">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">ইউজার পরিচালনা</h2>
        <button
          onClick={handleAddUser}
          className="btn btn-success gap-2 flex items-center"
        >
          <FaPlus /> নতুন ইউজার
        </button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto hidden md:block">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>নাম</th>
              <th>ইমেইল</th>
              <th>রোল</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-primary flex items-center gap-1"
                    onClick={() => handleView(user)}
                  >
                    <FaEye /> View
                  </button>
                  <button
                    className="btn btn-sm btn-warning flex items-center gap-1"
                    onClick={() => handleEdit(user)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-error flex items-center gap-1"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="grid md:hidden grid-cols-1 gap-4 mt-6">
        {users.map(user => (
          <div key={user.id} className="card bg-base-100 shadow-md p-4 rounded-lg">
            <h3 className="font-bold text-lg">{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <div className="flex justify-end gap-2 mt-3">
              <button className="btn btn-sm btn-primary" onClick={() => handleView(user)}>View</button>
              <button className="btn btn-sm btn-warning" onClick={() => handleEdit(user)}>Edit</button>
              <button className="btn btn-sm btn-error" onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
