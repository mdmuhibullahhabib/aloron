

import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const facultiesData = {
  "math-1": [
    { id: 1, title: "Academic", subtitle: "Math 1st", color: "#3b82f6", path: "math-1st-paper-academic" },
    { id: 2, title: "Mainbook", subtitle: "Math 1st", color: "#ef4444", path: "math-1st-paper-mainbook" },
    { id: 3, title: "Engineering", subtitle: "Math 1st", color: "#f59e0b", path: "math-1st-paper-engineering" },
    { id: 4, title: "Medical", subtitle: "Math 1st", color: "#10b981", path: "math-1st-paper-medical" },
  ],
  "math-2": [
    { id: 5, title: "Academic", subtitle: "Math 2nd", color: "#3b82f6", path: "math-2nd-paper-academic" },
    { id: 6, title: "Mainbook", subtitle: "Math 2nd", color: "#ef4444", path: "math-2nd-paper-mainbook" },
    { id: 7, title: "Engineering", subtitle: "Math 2nd", color: "#f59e0b", path: "math-2nd-paper-engineering" },
    { id: 8, title: "Medical", subtitle: "Math 2nd", color: "#10b981", path: "math-2nd-paper-medical" },
  ],
  "physics-1": [
    { id: 9, title: "Academic", subtitle: "Physics 1st", color: "#3b82f6", path: "physics-1st-paper-academic" },
    { id: 10, title: "Mainbook", subtitle: "Physics 1st", color: "#ef4444", path: "physics-1st-paper-mainbook" },
    { id: 11, title: "Engineering", subtitle: "Physics 1st", color: "#f59e0b", path: "physics-1st-paper-engineering" },
    { id: 12, title: "Medical", subtitle: "Physics 1st", color: "#10b981", path: "physics-1st-paper-medical" },
  ],
  "physics-2": [
    { id: 13, title: "Academic", subtitle: "Physics 2nd", color: "#3b82f6", path: "physics-2nd-paper-academic" },
    { id: 14, title: "Mainbook", subtitle: "Physics 2nd", color: "#ef4444", path: "physics-2nd-paper-mainbook" },
    { id: 15, title: "Engineering", subtitle: "Physics 2nd", color: "#f59e0b", path: "physics-2nd-paper-engineering" },
    { id: 16, title: "Medical", subtitle: "Physics 2nd", color: "#10b981", path: "physics-2nd-paper-medical" },
  ],
  "chemistry-1": [
    { id: 17, title: "Academic", subtitle: "Chemistry 1st", color: "#3b82f6", path: "chemistry-1st-paper-academic" },
    { id: 18, title: "Mainbook", subtitle: "Chemistry 1st", color: "#ef4444", path: "chemistry-1st-paper-mainbook" },
    { id: 19, title: "Engineering", subtitle: "Chemistry 1st", color: "#f59e0b", path: "chemistry-1st-paper-engineering" },
    { id: 20, title: "Medical", subtitle: "Chemistry 1st", color: "#10b981", path: "chemistry-1st-paper-medical" },
  ],
  "chemistry-2": [
    { id: 21, title: "Academic", subtitle: "Chemistry 2nd", color: "#3b82f6", path: "chemistry-2nd-paper-academic" },
    { id: 22, title: "Mainbook", subtitle: "Chemistry 2nd", color: "#ef4444", path: "chemistry-2nd-paper-mainbook" },
    { id: 23, title: "Engineering", subtitle: "Chemistry 2nd", color: "#f59e0b", path: "chemistry-2nd-paper-engineering" },
    { id: 24, title: "Medical", subtitle: "Chemistry 2nd", color: "#10b981", path: "chemistry-2nd-paper-medical" },
  ],
  "biology-1": [
    { id: 25, title: "Academic", subtitle: "Biology 1st", color: "#3b82f6", path: "biology-1st-paper-academic" },
    { id: 26, title: "Mainbook", subtitle: "Biology 1st", color: "#ef4444", path: "biology-1st-paper-mainbook" },
    { id: 27, title: "Engineering", subtitle: "Biology 1st", color: "#f59e0b", path: "biology-1st-paper-engineering" },
    { id: 28, title: "Medical", subtitle: "Biology 1st", color: "#10b981", path: "biology-1st-paper-medical" },
  ],
  "biology-2": [
    { id: 29, title: "Academic", subtitle: "Biology 2nd", color: "#3b82f6", path: "biology-2nd-paper-academic" },
    { id: 30, title: "Mainbook", subtitle: "Biology 2nd", color: "#ef4444", path: "biology-2nd-paper-mainbook" },
    { id: 31, title: "Engineering", subtitle: "Biology 2nd", color: "#f59e0b", path: "biology-2nd-paper-engineering" },
    { id: 32, title: "Medical", subtitle: "Biology 2nd", color: "#10b981", path: "biology-2nd-paper-medical" },
  ],
  du: [
    { title: "Unit A", subtitle: "Science", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Arts", color: "#ef4444" },
    { title: "Unit C", subtitle: "Commerce", color: "#f59e0b" },
    { title: "Unit D", subtitle: "Business Studies", color: "#10b981" },
  ],
  ru: [
    { title: "Unit A", subtitle: "Science", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Arts", color: "#ef4444" },
    { title: "Unit C", subtitle: "Commerce", color: "#f59e0b" },
    { title: "Unit D", subtitle: "Business Studies", color: "#10b981" },
    { title: "Unit E", subtitle: "Engineering", color: "#a855f7" },
  ],
  ju: [
    { title: "Unit A", subtitle: "Science", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Arts", color: "#ef4444" },
    { title: "Unit C", subtitle: "Commerce", color: "#f59e0b" },
    { title: "Unit D", subtitle: "Business Studies", color: "#10b981" },
    { title: "Unit E", subtitle: "Engineering", color: "#a855f7" },
    { title: "Unit F", subtitle: "Medical", color: "#4d7c0f" },
    { title: "Unit G", subtitle: "Agriculture", color: "#6366f1" },
  ],
  cu: [
    { title: "Unit A", subtitle: "Science", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Arts", color: "#ef4444" },
    { title: "Unit C", subtitle: "Commerce", color: "#f59e0b" },
    { title: "Unit D", subtitle: "Engineering", color: "#10b981" },
  ],
  jnu: [
    { title: "Unit A", subtitle: "Science", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Arts", color: "#ef4444" },
    { title: "Unit C", subtitle: "Commerce", color: "#f59e0b" },
    { title: "Unit D", subtitle: "Engineering", color: "#10b981" },
  ],
  agri: [
    { title: "Unit A", subtitle: "Agriculture", color: "#4d7c0f" },
  ],
  sust: [
    { title: "Unit A", subtitle: "Science & Engineering", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Arts & Commerce", color: "#ef4444" },
  ],
  bup: [
    { title: "Business", subtitle: "BBA Program", color: "#10b981" },
    { title: "Public Administration", subtitle: "BPA Program", color: "#f97316" },
    { title: "Law", subtitle: "LLB Program", color: "#3b82f6" },
    { title: "Economics", subtitle: "BEP Program", color: "#a855f7" },
  ],
  maritime: [
    { title: "Navigation", subtitle: "Marine Studies", color: "#3b82f6" },
    { title: "Engineering", subtitle: "Ship Engineering", color: "#ef4444" },
    { title: "Logistics", subtitle: "Maritime Management", color: "#f59e0b" },
    { title: "Safety", subtitle: "Marine Safety", color: "#10b981" },
  ],
  buet: [
    { title: "Civil Engineering", subtitle: "BUET", color: "#3b82f6" },
    { title: "Electrical Engineering", subtitle: "BUET", color: "#ef4444" },
    { title: "Mechanical Engineering", subtitle: "BUET", color: "#f59e0b" },
    { title: "Computer Science", subtitle: "BUET", color: "#10b981" },
    { title: "Architecture", subtitle: "BUET", color: "#a855f7" },
  ],
  "combined-engineering": [
    { title: "Engineering Unit 1", subtitle: "Combined", color: "#3b82f6" },
    { title: "Engineering Unit 2", subtitle: "Combined", color: "#ef4444" },
    { title: "Engineering Unit 3", subtitle: "Combined", color: "#f59e0b" },
    { title: "Engineering Unit 4", subtitle: "Combined", color: "#10b981" },
  ],
  ruet: [
    { title: "Unit A", subtitle: "Engineering", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Engineering", color: "#ef4444" },
    { title: "Unit C", subtitle: "Engineering", color: "#f59e0b" },
  ],
  kuet: [
    { title: "Unit A", subtitle: "Engineering", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Engineering", color: "#ef4444" },
    { title: "Unit C", subtitle: "Engineering", color: "#f59e0b" },
  ],
  cuet: [
    { title: "Unit A", subtitle: "Engineering", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Engineering", color: "#ef4444" },
    { title: "Unit C", subtitle: "Engineering", color: "#f59e0b" },
    { title: "Unit D", subtitle: "Engineering", color: "#10b981" },
  ],
  iut: [
    { title: "Unit A", subtitle: "Engineering", color: "#3b82f6" },
    { title: "Unit B", subtitle: "Engineering", color: "#ef4444" },
  ],
  medical: [
    { title: "Medicine", subtitle: "MBBS", color: "#4d7c0f" },
  ],
  dental: [
    { title: "Dentistry", subtitle: "BDS", color: "#a855f7" },
  ],
  afmc: [
    { title: "AFMC Unit", subtitle: "Medical Studies", color: "#10b981" },
  ]
};


const Faculty = () => {
  const { cardPath } = useParams();
  const faculties = facultiesData[cardPath] || [];
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2.5 rounded-full bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
      >
        ⬅️ Back
      </button>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        {faculties.length > 0
          ? `Details for ${cardPath.replace("-", " ").toUpperCase()}`
          : "❌ কোনো ডাটা পাওয়া যায়নি"}
      </h2>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {faculties.length > 0 ? (
          faculties.map((f, idx) => {
            const isSubject = Boolean(f.path); // subject vs university check

            return (
              <Link
                key={idx}
                to={
                  isSubject
                    ? `/question-bank/exam/${f.path}`
                    : `/question-bank/facultyexam/${f.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                }
                className="group p-6 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
                style={{ backgroundColor: f.color }}
              >
                <h3 className="text-white text-lg md:text-xl font-semibold group-hover:underline">
                  {f.title}
                </h3>
                <p className="text-white opacity-90 mt-1">{f.subtitle}</p>
              </Link>
            );
          })
        ) : (
          <p className="text-gray-500">⚠️ এই কার্ডের কোনো তথ্য পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
};

export default Faculty;


