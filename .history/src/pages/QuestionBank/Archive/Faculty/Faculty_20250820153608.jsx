import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Faculty = () => {
  const { institution } = useParams();
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  console.log(useParams,s)
  // Example faculties data for different institutions
  const facultiesData = {
    medical: [
      { id: 1, title: "Medicine", subtitle: "MBBS Program", color: "#4d7c0f" },
      { id: 2, title: "Dentistry", subtitle: "BDS Program", color: "#a855f7" },
      { id: 3, title: "Pharmacy", subtitle: "BPharm Program", color: "#3b82f6" },
      { id: 4, title: "Nursing", subtitle: "BSc Nursing", color: "#ef4444" },
    ],
    bup: [
      { id: 5, title: "Business", subtitle: "BBA Program", color: "#10b981" },
      { id: 6, title: "Public Administration", subtitle: "BPA Program", color: "#f97316" },
    ],
    buet: [
      { id: 7, title: "CSE", subtitle: "Computer Science & Engineering", color: "#3b82f6" },
      { id: 8, title: "EEE", subtitle: "Electrical & Electronic Engineering", color: "#ef4444" },
    ],
    // Add more institutions and faculties as needed
  };

  // Get the faculties for the current institution
  const faculties = facultiesData[institution] || [];

  const handleSelect = (faculty) => {
    setSelectedFaculty(faculty);
    console.log("Selected faculty:", faculty);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Faculties for {institution ? institution.toUpperCase() : "Unknown Institution"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculties.map((faculty) => (
          <div
            key={faculty.id}
            className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition transform"
            style={{ backgroundColor: faculty.color }}
            onClick={() => handleSelect(faculty)}
          >
            <h3 className="text-white text-lg font-semibold">{faculty.title}</h3>
            <p className="text-white opacity-90">{faculty.subtitle}</p>
          </div>
        ))}
      </div>

      {selectedFaculty && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-xl font-semibold">{selectedFaculty.title}</h3>
          <p>{selectedFaculty.subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default Faculty;
