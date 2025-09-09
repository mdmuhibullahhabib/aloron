import React from "react";

const Reports = () => {
  // Fake analytics data
  const analytics = {
    totalUsers: 150,
    totalStudents: 100,
    totalInstructors: 40,
    totalCourses: 20,
    activeCourses: 15,
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Total Users</p>
          <p className="text-2xl font-bold">{analytics.totalUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Total Students</p>
          <p className="text-2xl font-bold">{analytics.totalStudents}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Total Instructors</p>
          <p className="text-2xl font-bold">{analytics.totalInstructors}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Total Courses</p>
          <p className="text-2xl font-bold">{analytics.totalCourses}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Active Courses</p>
          <p className="text-2xl font-bold">{analytics.activeCourses}</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
