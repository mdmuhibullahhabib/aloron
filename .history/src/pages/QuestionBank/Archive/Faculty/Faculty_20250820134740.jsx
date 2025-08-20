import React from "react";

const Faculty = ({ faculty, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(faculty)}
      className="p-6 rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
      style={{ backgroundColor: faculty.color }}
    >
      <h2 className="text-xl font-bold text-white">{faculty.title}</h2>
      <p className="text-white">{faculty.subtitle}</p>
    </div>
  );
};

export default Faculty;
