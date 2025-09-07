import React from 'react';
import { Link } from 'react-router-dom';

const Faculty = ({ institution }) => {
  const {institute}
  console.log("Selected Institution:", institution);

  const facultiesData = {
    bup: [
      { title: "Business", subtitle: "BBA Program", color: "#10b981" },
      { title: "Public Administration", subtitle: "BPA Program", color: "#f97316" },
    ],
    medical: [
      { title: "Medicine", subtitle: "MBBS Program", color: "#4d7c0f" },
      { title: "Dentistry", subtitle: "BDS Program", color: "#a855f7" },
    ],
    "national-university": [
      { title: "Unit A", subtitle: "Honours Admission", color: "#3b82f6" },
      { title: "Unit B", subtitle: "Masters Admission", color: "#ef4444" },
    ],
    "sat-college": [
      { title: "Science", subtitle: "Science Viva", color: "#f59e0b" },
      { title: "Arts", subtitle: "Arts Viva", color: "#6366f1" },
    ],
    du: [
      { title: "Unit A", subtitle: "Science", color: "#3b82f6" },
      { title: "Unit B", subtitle: "Arts", color: "#ef4444" },
    ]
  };

  const faculties = facultiesData[institution] || [];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">
        {faculties.length > 0
          ? `Faculties for ${institution?.toUpperCase()}`
          : "কোনো ডাটা পাওয়া যায়নি"}
      </h2>

      {faculties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, idx) => (
            <Link
              key={idx}
              to={`/question-bank/${faculty.title.toLowerCase().replace(/\s+/g, '-')}`}
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
