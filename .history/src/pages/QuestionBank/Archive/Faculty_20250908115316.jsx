import React from "react";
import { useParams } from "react-router-dom";

const allFacultiesData = {
  // Institution
  buet: [
    { title: "Civil Engineering", subtitle: "BUET", color: "#3b82f6" },
    { title: "Electrical Engineering", subtitle: "BUET", color: "#ef4444" },
  ],
  medical: [{ title: "Medicine", subtitle: "MBBS", color: "#4d7c0f" }],

  // Subject
  "bangla-1": [{ title: "বাংলা ১ম পত্র", subtitle: "Chapter 1-10", color: "#f97316" }],
  "bangla-2": [{ title: "বাংলা ২য় পত্র", subtitle: "Chapter 11-20", color: "#ca8a04" }],

  // Model-test
  "bibrani-25-private": [{ title: "বিবরণী ২৫", subtitle: "Private Admission", color: "#8b5cf6" }],
  "hsc-25-quiz": [{ title: "এইচএসসি ২৫", subtitle: "Quiz & Admission", color: "#ef4444" }],
};

const Faculty = () => {
  const { cardPath } = useParams();
  const faculties = allFacultiesData[cardPath] || [];

  console.log(card)

  return (
    <div className="mt-6 p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {faculties.length > 0
          ? `Details for ${cardPath.replace("-", " ").toUpperCase()}`
          : "কোনো ডাটা পাওয়া যায়নি"}
      </h2>

      {faculties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl shadow-lg"
              style={{ backgroundColor: f.color }}
            >
              <h3 className="text-white text-lg font-semibold">{f.title}</h3>
              <p className="text-white opacity-90">{f.subtitle}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">এই কার্ডের কোনো ফ্যাকাল্টি পাওয়া যায়নি।</p>
      )}
    </div>
  );
};

export default Faculty;
