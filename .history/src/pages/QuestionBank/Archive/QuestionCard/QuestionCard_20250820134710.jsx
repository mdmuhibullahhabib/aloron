import React from "react";

const YearCard = ({ yearData, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(yearData)}
      className="p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
      style={{ backgroundColor: yearData.color }}
    >
      <h3 className="text-lg font-semibold text-white">{yearData.year}</h3>
      <p className="text-sm text-white">Questions: {yearData.total_questions}</p>
      <p className="text-sm text-white">Duration: {yearData.duration_minutes} mins</p>
    </div>
  );
};

export default Question;
