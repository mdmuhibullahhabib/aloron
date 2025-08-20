import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import Faculty from "./Faculty/Faculty";
import Exam from "./Exam/Exam";
// import Faculty from "./Faculty";
// import Exam from "./Exam";

// BUP Data
const bupData = { /* same as your original bupData */ };
const examQuestions = { /* same as your original examQuestions */ };
const cardData = { /* same as your original cardData */ };

const getTabDetails = (tabName) => {
  switch (tabName) {
    case "all": return { title: "সকল প্রশ্ন", subtitle: "সকল ধরনের প্রশ্ন এখানে রয়েছে" };
    case "model-test": return { title: "মডেল টেস্ট", subtitle: "বিষয়ভিত্তিক অনুযায়ী মডেল টেস্ট" };
    case "subject-based": return { title: "বিষয় ভিত্তিক", subtitle: "বিষয় অনুযায়ী মডেল টেস্ট" };
    case "institution-based": return { title: "প্রতিষ্ঠান ভিত্তিক", subtitle: "প্রতিষ্ঠান অনুযায়ী মডেল টেস্ট" };
    default: return { title: "", subtitle: "" };
  }
};

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
