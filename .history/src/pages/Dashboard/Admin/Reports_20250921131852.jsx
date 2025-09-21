import React, { useMemo } from "react";
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
import useCourses from "../../../hooks/useCourses";
import useUsers from "../../../hooks/useUsers";
import usePayment from "../../../hooks/useRevenue";
import useManageSubscriptions from "../../../hooks/useManageSubscriptions";

const Reports = () => {
  const [courses] = useCourses();
  const [users] = useUsers();
  const [payments, refetch] = usePayment();
    const [subscriptions] = useManageSubscriptions();

    //  শুধু success পেমেন্টগুলো ফিল্টার করা
  const successfulPayments = payments.filter((p) => p.status === "success");

  // success পেমেন্ট থেকে মোট revenue ক্যালকুলেট করা
  const totalRevenue = successfulPayments.reduce(
    (sum, payment) => sum + payment.price,
    0,
    refetch()
  );

    // মাসিক revenue বানানো
  const monthlyRevenue = {};
  successfulPayments.forEach((payment) => {
    const date = new Date(payment.date);
    const month = date.toLocaleString("default", { month: "short" }); // যেমন "Sep"
    if (!monthlyRevenue[month]) {
      monthlyRevenue[month] = 0;
    }
    monthlyRevenue[month] += payment.price;
  });

  // Recharts এর জন্য ডাটা কনভার্ট
  const revenueData = Object.keys(monthlyRevenue).map((month) => ({
    month,
    revenue: monthlyRevenue[month],
  }));

  // Process data for chart
  const subscriptionsData = useMemo(() => {
    if (!subscriptions || subscriptions.length === 0) return [];

    // ✅ শেষ 12 মাসের জন্য তারিখ
    const today = new Date();
    const months = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const key = d.toLocaleString("default", { month: "short" }) + " " + d.getFullYear();
      months.push({ key, date: d });
    }

    // শুধু active subscription এবং last 12 months
    const activeSubs = subscriptions.filter(
      (sub) => sub.status?.toLowerCase() === "active"
    );

    // মাসে subscription count করা
    const monthMap = {};
    months.forEach((m) => (monthMap[m.key] = 0)); // সব মাসে 0 দিয়ে শুরু

    activeSubs.forEach((sub) => {
      const start = new Date(sub.startDate);
      if (!isNaN(start)) {
        const key = start.toLocaleString("default", { month: "short" }) + " " + start.getFullYear();
        if (key in monthMap) monthMap[key] += 1;
      }
    });

    // Object to array for chart
    const arr = Object.entries(monthMap).map(([month, students]) => ({
      month,
      students,
    }));

    return arr;
  }, [subscriptions]);

      // শুধু active subscription এ

    // console.log(activeSubs)

  const courseData = [
         activeSubs = subscriptions.filter(
      (sub) => sub.status?.toLowerCase() === "active"
    );
    { name: "Subscription", value: `{activeSubs.length}`, },
    { name: "Course", value: {courses.length}, },
    { name: "Shop", value: 70 },
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
          <p className="text-3xl font-extrabold mt-2">{users.length}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-green-700">Revenue</h2>
          <p className="text-3xl font-extrabold mt-2">৳ {totalRevenue}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-yellow-700">Active Courses</h2>
          <p className="text-3xl font-extrabold mt-2">{courses.length}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Student Enrollment Bar Chart */}
     <div className="bg-white shadow p-4 rounded-xl">
      <h2 className="text-lg font-bold mb-4">📈 Student Subscriptions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={subscriptionsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="students" fill="#4F46E5" radius={[8, 8, 0, 0]} />
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
