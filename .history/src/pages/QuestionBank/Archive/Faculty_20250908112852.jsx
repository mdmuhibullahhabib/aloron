import React from "react";
import { Link, useParams } from "react-router-dom";

const facultiesData = {
  buet: [
    { title: "Civil Engineering", subtitle: "BUET", color: "#3b82f6" },
    { title: "Electrical Engineering", subtitle: "BUET", color: "#ef4444" },
    { title: "Mechanical Engineering", subtitle: "BUET", color: "#f59e0b" },
    { title: "Computer Science", subtitle: "BUET", color: "#10b981" },
    { title: "Architecture", subtitle: "BUET", color: "#a855f7" },
  ],
  medical: [
    { title: "Medicine", subtitle: "MBBS", color: "#4d7c0f" },
  ],
  cuet: [
    { title: "Unit A", subtitle: "Engineering", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Engineering", color: "#ef4444" },
  ],
  // ... বাকি data
};

const Faculty = () => {
  const { institution } = useParams(); // URL থেকে institution আসবে
  const faculties = facultiesData[institution] || [];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">
        {faculties.length > 0
          ? `Faculties for ${institution.toUpperCase()}`
          : "কোনো ডাটা পাওয়া যায়নি"}
      </h2>

      {faculties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, idx) => (
            <Link
              key={idx}
              to={`/question-bank/archive/${institution}/${faculty.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition transform"
              style={{ backgroundColor: faculty.color }}
            >
              <h3 className="text-white text-lg font-semibold">{faculty.title}</h3>
              <p className="text-white opacity-90">{faculty.subtitle}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">এই ইনস্টিটিউশনের কোনো ফ্যাকাল্টি পাওয়া যায়নি।</p>
      )}
    </div>
  );
};

export default Faculty;
