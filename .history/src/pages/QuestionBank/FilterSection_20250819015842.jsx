import React, { useState } from "react";
import FilterPopup from "./FilterPopup";
import { useState } from "react";
import { FaChevronDown, FaSearch, FaRedo } from "react-icons/fa";

const FilterSection = () => {
  const [openFilter, setOpenFilter] = useState(null);

  const handleFilterClick = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleReset = () => {
    console.log("Filters cleared!");
  };

  return (
    <div className="bg-[#f9fbff] p-4 rounded-lg shadow border flex flex-col gap-4">
      {/* Top Row */}
      <div className="flex flex-wrap justify-between items-center gap-3">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleFilterClick("section")}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-100"
          >
            <span>সেকশন</span>
            <FaChevronDown className="text-blue-500" />
          </button>

          <button
            onClick={() => handleFilterClick("exam")}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-100"
          >
            <span>ভর্তি পরীক্ষা</span>
            <FaChevronDown className="text-blue-500" />
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleFilterClick("subject")}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-100"
          >
            <span>বিষয়</span>
            <FaChevronDown className="text-blue-500" />
          </button>
          <button
            onClick={() => handleFilterClick("chapter")}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-100"
          >
            <span>অধ্যায়</span>
            <FaChevronDown className="text-blue-500" />
          </button>
          <button
            onClick={() => handleFilterClick("topic")}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-100"
          >
            <span>টপিক</span>
            <FaChevronDown className="text-blue-500" />
          </button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left side: Reset + checkboxes */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            <FaRedo /> <span>মুছুন</span>
          </button>

          <label className="flex items-center gap-1 text-gray-700">
            <input type="checkbox" className="accent-blue-500" />
            <span>উত্তর</span>
          </label>

          <label className="flex items-center gap-1 text-gray-700">
            <input type="checkbox" defaultChecked className="accent-blue-500" />
            <span>ব্যাখ্যা</span>
          </label>
        </div>

        {/* Right side: search box */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="প্রশ্ন খুঁজুন"
            className="w-full border rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

