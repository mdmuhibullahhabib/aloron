import React from "react";

const Faculty = ({ faculty, onSelect }) => {
  return (
    <div
      className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition"
      style={{ backgroundColor: faculty?.color }}
      onClick={() => onSelect(faculty)}
    >
      <h3 className="text-white text-lg font-semibold">{faculty?.title}</h3>
      <p className="text-white opacity-90">{faculty?.subtitle}</p>
    </div>
  );
};

export default Faculty;
