import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

// ---------------- BUP Data ----------------
const bupData = {
  id: "bup",
  title: "বিইউপি",
  subtitle: "এডমিশন",
  color: "#10b981",
  faculties: [
    {
      id: "fst",
      title: "FST",
      subtitle: "বিভাগ",
      color: "#f97316",
      exam_series: [
        { id: "23-24", year: "23-24", total_questions: 100, duration_minutes: 60 },
        { id: "22-23", year: "22-23", total_questions: 100, duration_minutes: 60 },
      ],
    },
    { id: "fass", title: "FASS", subtitle: "বিভাগ", color: "#ca8a04", exam_series: [] },
    { id: "fsss", title: "FSSS", subtitle: "বিভাগ", color: "#a855f7", exam_series: [] },
  ],
};

const examQuestions = {
  "23-24": [
    { id: 1, text: "1.75 eV শক্তির ফোটনের তরঙ্গদৈর্ঘ্য কত?", options: ["770.4 nm", "750.4 nm", "710.4 nm", "790.4 nm"] },
    { id: 2, text: "কোনো সেমিকন্ডাক্টরের প্রাবল্যতা কত?", options: ["5.57x10^-11", "5.57x10^-10", "5.57x10^-12", "5.57x10^-13"] },
  ],
};

// ---------------- Archive Main Data ----------------
const cardData = {
  "model-test": [
    { id: 1, title: "বিবরণী ২৫", subtitle: "প্রাইভেট এডমিশন", color: "#8b5cf6" },
    { id: 2, title: "বিবরণী ২৫", subtitle: "ফিজিক্যাল এডমিশন", color: "#10b981" },
    { id: 3, title: "এইচএসসি ২৫", subtitle: "কুইজ এন্ড এডমিশন", color: "#ef4444" },
    { id: 4, title: "ঢাকা কেন্দ্রীয়", subtitle: "বিশ্ববিদ্যালয়", color: "#3b82f6" },
  ],
  "subject-based": [
    { id: 5, title: "বাংলা", subtitle: "১ম পত্র", color: "#f97316" },
    { id: 6, title: "বাংলা", subtitle: "২য় পত্র", color: "#ca8a04" },
    { id: 7, title: "ইংরেজি", subtitle: "১ম পত্র", color: "#ef4444" },
    { id: 8, title: "ইংরেজি", subtitle: "২য় পত্র", color: "#8b5cf6" },
    { id: 9, title: "তথ্য ও যোগাযোগ", subtitle: "প্রযুক্তি", color: "#3b82f6" },
  ],
  "institution-based": [
    { id: 16, title: "বিইউপি", subtitle: "এডমিশন", color: "#10b981" },
    { id: 14, title: "জাতীয় বিশ্ববিদ্যালয়", subtitle: "এডমিশন", color: "#a855f7" },
    { id: 15, title: "সাত কলেজ", subtitle: "ভাইভা", color: "#8b5cf6" },
  ],
};

// ---------------- Helpers ----------------
const getTabDetails = (tabName) => {
  switch (tabName) {
    case "all":
      return { title: "সকল প্রশ্ন", subtitle: "সকল ধরনের প্রশ্ন এখানে রয়েছে" };
    case "model-test":
      return { title: "মডেল টেস্ট", subtitle: "বিষয়ভিত্তিক অনুযায়ী মডেল টেস্ট" };
    case "subject-based":
      return { title: "বিষয় ভিত্তিক", subtitle: "বিষয় অনুযায়ী মডেল টেস্ট" };
    case "institution-based":
      return { title: "প্রতিষ্ঠান ভিত্তিক", subtitle: "প্রতিষ্ঠান অনুযায়ী মডেল টেস্ট" };
    default:
      return { title: "", subtitle: "" };
  }
};

const Archive = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [tabDetails, setTabDetails] = useState(getTabDetails("all"));
  const [view, setView] = useState("archive"); // archive | bup
  const [stage, setStage] = useState("institution"); // faculty | year | exam
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setTabDetails(getTabDetails(tabName));
  };

  // Handle card click (detect BUP)
  const handleCardClick = (card) => {
    if (card.title === "বিইউপি") {
      setView("bup");
      setStage("faculty");
    }
  };

  // ---------------- RENDER ----------------
  if (view === "bup") {
    return (
      <div>
        {/* Faculties */}
        {stage === "faculty" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {bupData.faculties.map((f) => (
              <div
                key={f.id}
                className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition"
                style={{ backgroundColor: f.color }}
                onClick={() => {
                  setSelectedFaculty(f);
                  setStage("year");
                }}
              >
                <h3 className="text-white text-lg font-semibold">{f.title}</h3>
                <p className="text-white opacity-90">{f.subtitle}</p>
              </div>
            ))}
          </div>
        )}

        {/* Years */}
        {stage === "year" && selectedFaculty && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {selectedFaculty.exam_series.map((exam) => (
              <div
                key={exam.id}
                className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition bg-emerald-500"
                onClick={() => {
                  setSelectedYear(exam.id);
                  setStage("exam");
                }}
              >
                <h3 className="text-white text-lg font-semibold">{exam.year}</h3>
                <p className="text-white opacity-90">Questions: {exam.total_questions}</p>
              </div>
            ))}
          </div>
        )}

        {/* Exam */}
        {stage === "exam" && selectedYear && (
          <div className="space-y-6">
            {examQuestions[selectedYear].map((q) => (
              <div key={q.id} className="p-4 bg-white rounded-xl shadow-md">
                <p className="font-semibold mb-2">{q.text}</p>
                <ul className="space-y-2">
                  {q.options.map((opt, idx) => (
                    <li
                      key={idx}
                      className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-emerald-100"
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default Archive Grid
  return (
    <>
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold">আর্কাইভ</h1>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="অনায়াসে খুঁজে ফেলুন"
            className="pl-4 pr-10 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <MdOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </header>

      {/* Tabs */}
      <div className="tabs tabs-boxed bg-white mb-8 p-1 rounded-full shadow-sm">
        {["all", "model-test", "subject-based", "institution-based"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`tab flex-1 rounded-full ${
              activeTab === tab ? "tab-active bg-emerald-500 text-white" : ""
            }`}
          >
            {getTabDetails(tab).title}
          </button>
        ))}
      </div>

      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{tabDetails.title}</h2>
        <p className="text-gray-500">{tabDetails.subtitle}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData[activeTab]?.map((card) => (
          <div
            key={card.id}
            className="relative p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: card.color }}
            onClick={() => handleCardClick(card)}
          >
            <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
              Live
            </div>
            <h3 className="text-white text-lg font-semibold mb-1">{card.title}</h3>
            <p className="text-white text-sm opacity-90">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Archive;
