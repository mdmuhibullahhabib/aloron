import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
// import Faculty from "./Faculty";
// import Exam from "./Exam";

// ---------------- FAKE BUP DATA ----------------
const bupData = {
  faculties: [
    {
      id: "fst",
      title: "FST",
      subtitle: "Faculty of Science & Technology",
      color: "#f97316",
      exam_series: [
        { id: "23-24", year: "23-24", total_questions: 100, duration_minutes: 60 },
        { id: "22-23", year: "22-23", total_questions: 80, duration_minutes: 50 },
      ],
    },
    {
      id: "fass",
      title: "FASS",
      subtitle: "Faculty of Arts & Social Science",
      color: "#ca8a04",
      exam_series: [
        { id: "23-24", year: "23-24", total_questions: 120, duration_minutes: 70 },
      ],
    },
    {
      id: "fsss",
      title: "FSSS",
      subtitle: "Faculty of Social Science Studies",
      color: "#a855f7",
      exam_series: [
        { id: "22-23", year: "22-23", total_questions: 90, duration_minutes: 60 },
      ],
    },
  ],
};

// ---------------- FAKE EXAM QUESTIONS ----------------
const examQuestions = {
  "23-24": [
    {
      id: 1,
      text: "1.75 eV শক্তির ফোটনের তরঙ্গদৈর্ঘ্য কত?",
      options: ["770.4 nm", "750.4 nm", "710.4 nm", "790.4 nm"],
    },
    {
      id: 2,
      text: "কোনো সেমিকন্ডাক্টরের প্রাবল্যতা কত?",
      options: ["5.57x10^-11", "5.57x10^-10", "5.57x10^-12", "5.57x10^-13"],
    },
  ],
  "22-23": [
    {
      id: 1,
      text: "সেমিকন্ডাক্টরের বৈদ্যুতিক প্রতিরোধ কত?",
      options: ["10^3 Ω", "10^5 Ω", "10^6 Ω", "10^2 Ω"],
    },
    {
      id: 2,
      text: "লাইটের স্পিড কত?",
      options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^7 m/s", "3x10^9 m/s"],
    },
  ],
};

// ---------------- FAKE ARCHIVE CARDS ----------------
const cardData = {
  "all": [
    { id: 1, title: "বিইউপি", subtitle: "এডমিশন", color: "#10b981" },
    { id: 2, title: "জাতীয় বিশ্ববিদ্যালয়", subtitle: "এডমিশন", color: "#a855f7" },
    { id: 3, title: "সাত কলেজ", subtitle: "ভাইভা", color: "#8b5cf6" },
  ],
  "model-test": [
    { id: 4, title: "বিবরণী ২৫", subtitle: "প্রাইভেট এডমিশন", color: "#8b5cf6" },
    { id: 5, title: "বিবরণী ২৫", subtitle: "ফিজিক্যাল এডমিশন", color: "#10b981" },
    { id: 6, title: "এইচএসসি ২৫", subtitle: "কুইজ এন্ড এডমিশন", color: "#ef4444" },
  ],
  "subject-based": [
    { id: 7, title: "বাংলা", subtitle: "১ম পত্র", color: "#f97316" },
    { id: 8, title: "বাংলা", subtitle: "২য় পত্র", color: "#ca8a04" },
    { id: 9, title: "ইংরেজি", subtitle: "১ম পত্র", color: "#ef4444" },
  ],
  "institution-based": [
    { id: 10, title: "বিইউপি", subtitle: "এডমিশন", color: "#10b981" },
    { id: 11, title: "জাতীয় বিশ্ববিদ্যালয়", subtitle: "এডমিশন", color: "#a855f7" },
    { id: 12, title: "সাত কলেজ", subtitle: "ভাইভা", color: "#8b5cf6" },
  ],
};

// ---------------- Helper ----------------
const getTabDetails = (tabName) => {
  switch (tabName) {
    case "all": return { title: "সকল প্রশ্ন", subtitle: "সকল ধরনের প্রশ্ন এখানে রয়েছে" };
    case "model-test": return { title: "মডেল টেস্ট", subtitle: "বিষয়ভিত্তিক অনুযায়ী মডেল টেস্ট" };
    case "subject-based": return { title: "বিষয় ভিত্তিক", subtitle: "বিষয় অনুযায়ী মডেল টেস্ট" };
    case "institution-based": return { title: "প্রতিষ্ঠান ভিত্তিক", subtitle: "প্রতিষ্ঠান অনুযায়ী মডেল টেস্ট" };
    default: return { title: "", subtitle: "" };
  }
};

// ---------------- ARCHIVE COMPONENT ----------------
const Archive = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [tabDetails, setTabDetails] = useState(getTabDetails("all"));
  const [view, setView] = useState("archive"); // archive | bup
  const [stage, setStage] = useState("faculty"); // faculty | year | exam
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setTabDetails(getTabDetails(tabName));
  };

  const handleCardClick = (card) => {
    if (card.title === "বিইউপি") {
      setView("bup");
      setStage("faculty");
    }
  };

  if (view === "bup") {
    return (
      <div>
        {stage === "faculty" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {bupData.faculties.map((f) => (
              <Faculty key={f.id} faculty={f} onSelect={(fac) => { setSelectedFaculty(fac); setStage("year"); }} />
            ))}
          </div>
        )}

        {stage === "year" && selectedFaculty && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {selectedFaculty.exam_series.map((exam) => (
              <div
                key={exam.id}
                className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition bg-emerald-500"
                onClick={() => { setSelectedYear(exam.id); setStage("exam"); }}
              >
                <h3 className="text-white text-lg font-semibold">{exam.year}</h3>
                <p className="text-white opacity-90">Questions: {exam.total_questions}</p>
              </div>
            ))}
          </div>
        )}

        {stage === "exam" && selectedYear && (
          <Exam questions={examQuestions[selectedYear]} />
        )}
      </div>
    );
  }

  // Default Archive Grid
  return (
    <>
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

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{tabDetails.title}</h2>
        <p className="text-gray-500">{tabDetails.subtitle}</p>
      </div>

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
