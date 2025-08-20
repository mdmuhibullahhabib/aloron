import React from "react";

const TimerBar = ({ timer }) => {
  return (
    <div className="relative mb-6 h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500 transition-all duration-1000 ease-linear"
        style={{ width: `${(timer / 30) * 100}%` }}
      ></div>
      <span className="absolute top-0 right-2 text-white text-xs font-bold">
        {timer}s
      </span>
    </div>
  );
};

export default TimerBar;
