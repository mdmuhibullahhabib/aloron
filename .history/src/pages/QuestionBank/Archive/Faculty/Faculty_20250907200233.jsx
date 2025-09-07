import React from 'react';
import { Link } from 'react-router-dom';

const Faculty = ({ institution }) => {
  console.log(institution)
  const facultiesData = {
    bup: [
      { title: "Business", subtitle: "BBA Program", color: "#10b981" },
      { title: "Public Administration", subtitle: "BPA Program", color: "#f97316" },
    ],
    medical: [
      { title: "Medicine", subtitle: "MBBS Program", color: "#4d7c0f" },
      { title: "Dentistry", subtitle: "BDS Program", color: "#a855f7" },
    ],
    du: [
      { title: "Unit A", subtitle: "Science", color: "#3b82f6" },
      { title: "Unit B", subtitle: "Arts", color: "#ef4444" },
    ]
    // Add others as needed
  };

  const faculties = facultiesData[institution] || [];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">Faculties for {institution.toUpperCase()}</h2>
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
    </div>
  );
};

export default Faculty;
