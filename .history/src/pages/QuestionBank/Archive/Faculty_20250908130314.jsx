import React from "react";
import { useNavigate, useParams } from "react-router-dom";

not hs

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

