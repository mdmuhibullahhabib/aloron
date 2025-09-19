import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const Reports = () => {
  const [users] = useCo
  // Fake Data
  const enrollmentData = [
    { month: "Jan", students: 50 },
    { month: "Feb", students: 80 },
    { month: "Mar", students: 65 },
    { month: "Apr", students: 100 },
    { month: "May", students: 120 },
    { month: "Jun", students: 90 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 20000 },
    { month: "Feb", revenue: 32000 },
    { month: "Mar", revenue: 28000 },
    { month: "Apr", revenue: 45000 },
    { month: "May", revenue: 50000 },
    { month: "Jun", revenue: 39000 },
  ];

  const courseData = [
    { name: "Subscription", value: 120 },
    { name: "Course", value: 90 },
    { name: "Shop", value: 70 },
    // { name: "Python", value: 50 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        📊 Reports & Analytics
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-blue-700">Total Students</h2>
          <p className="text-3xl font-extrabold mt-2">540+</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-green-700">Revenue</h2>
          <p className="text-3xl font-extrabold mt-2">৳ 2,30,000+</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-yellow-700">Active Courses</h2>
          <p className="text-3xl font-extrabold mt-2">15+</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Student Enrollment Bar Chart */}
        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-lg font-bold mb-4">📈 Student Enrollments</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Line Chart */}
        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-lg font-bold mb-4">💰 Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course Popularity Pie Chart */}
      <div className="bg-white shadow p-4 rounded-xl">
        <h2 className="text-lg font-bold mb-4 text-center">
          📚 Course Popularity
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={courseData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={120}
              dataKey="value"
            >
              {courseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
