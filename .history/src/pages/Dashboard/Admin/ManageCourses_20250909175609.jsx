// src/pages/dashboard/ManageCourses.jsx
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaEye, FaPlus } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

// Mock courses data
const mockCourses = [
  { id: 1, title: "Mathematics 101", instructor: "Dr. Rahman", students: 120 },
  { id: 2, title: "Physics Advanced", instructor: "Dr. Karim", students: 85 },
  { id: 3, title: "Chemistry Basics", instructor: "Dr. Farida", students: 95 },
];

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setCourses(mockCourses);
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিতভাবে এই কোর্সটি ডিলিট করতে চান?")) {
      setCourses(prev => prev.filter(course => course.id !== id));
      toast.success("কোর্সটি সফলভাবে ডিলিট করা হয়েছে!");
    }
  };

  const handleEdit = (course) => {
    toast("এডিট ফাংশন এখনো ইমপ্লিমেন্ট করা হয়নি", { icon: '⚠️' });
  };

  const handleView = (course) => {
    toast(`কোর্সের বিস্তারিত দেখুন: ${course.title}`, { icon: '📘' });
  };

  const handleAddCourse = () => {
    toast("নতুন কোর্স যোগ ফাংশন এখনো ইমপ্লিমেন্ট করা হয়নি", { icon: '➕' });
  };

  if (loading) return <p className="text-center text-lg mt-10">Loading courses...</p>;

  return (
    <div className="p-6">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">কোর্স পরিচালনা</h2>
        <button
          onClick={handleAddCourse}
          className="btn btn-success gap-2 flex items-center"
        >
          <FaPlus /> নতুন কোর্স
        </button>
      </div>

      {/* Courses Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>কোর্স শিরোনাম</th>
              <th>Instructor</th>
              <th>Students</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id} className="hover">
                <th>{index + 1}</th>
                <td>{course.title}</td>
                <td>{course.instructor}</td>
                <td>{course.students}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-primary flex items-center gap-1"
                    onClick={() => handleView(course)}
                  >
                    <FaEye /> View
                  </button>
                  <button
                    className="btn btn-sm btn-warning flex items-center gap-1"
                    onClick={() => handleEdit(course)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-error flex items-center gap-1"
                    onClick={() => handleDelete(course.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Grid View */}
      <div className="grid md:hidden grid-cols-1 gap-4 mt-6">
        {courses.map(course => (
          <div key={course.id} className="card bg-base-100 shadow-md p-4 rounded-lg">
            <h3 className="font-bold text-lg">{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Students: {course.students}</p>
            <div className="flex justify-end gap-2 mt-3">
              <button className="btn btn-sm btn-primary" onClick={() => handleView(course)}>View</button>
              <button className="btn btn-sm btn-warning" onClick={() => handleEdit(course)}>Edit</button>
              <button className="btn btn-sm btn-error" onClick={() => handleDelete(course.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
