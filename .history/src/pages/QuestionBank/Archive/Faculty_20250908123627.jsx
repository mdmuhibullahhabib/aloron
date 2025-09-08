import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const facultiesData = {  
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
  console.log(cardPath)

  return (
    <div className="px-6 max-w-7xl mx-auto ">

            {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // -1 মানে previous page
        className="mb-6 px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
      >
        Back
      </button>

      <h2 className="text-2xl font-bold mb-6">
        {faculties.length > 0 ? `Details for ${cardPath.replace("-", " ").toUpperCase()}` : "কোনো ডাটা পাওয়া যায়নি"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculties.length > 0 ? (
          faculties.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl shadow-lg"
              style={{ backgroundColor: f.color }}
            >
              <h3 className="text-white text-lg font-semibold">{f.title}</h3>
              <p className="text-white opacity-90">{f.subtitle}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">এই কার্ডের কোনো তথ্য পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
};

export default Faculty;

