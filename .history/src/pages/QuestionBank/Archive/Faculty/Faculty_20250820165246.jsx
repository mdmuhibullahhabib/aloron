import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

const Faculty = () => {
  const  institution  = "medical";
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const navigate = useNavigate();

  const facultiesData = {
    bup: [
      { id: 1, title: "Business", subtitle: "BBA Program", color: "#10b981" },
      { id: 2, title: "Public Administration", subtitle: "BPA Program", color: "#f97316" },
    ],
    medical: [
      { id: 3, title: "Medicine", subtitle: "MBBS Program", color: "#4d7c0f" },
      { id: 4, title: "Dentistry", subtitle: "BDS Program", color: "#a855f7" },
    ],
    // add others...
  };

  const faculties = facultiesData[institution] || [];

//   const handleCard =() =>{
//         navigate(`/question-bank/:faculty-exam-title`,);
//   }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Faculties for {institution ? institution.toUpperCase() : "Unknown"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculties.map(faculty => (
          <Link
        //   onClick={()=> handleCard(faculty)}
        to={`fa`}
            key={faculty.id}
            className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition"
            style={{ backgroundColor: faculty.color }}
            onClick={() => setSelectedFaculty(faculty)}
          >
            <h3 className="text-white text-lg font-semibold">{faculty.title}</h3>
            <p className="text-white opacity-90">{faculty.subtitle}</p>
          </Link>
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
