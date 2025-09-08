import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";

// Cards data
const cardData = {
  "subject-based": [
    { id: 1, title: "বাংলা", subtitle: "১ম পত্র", path: "bangla-1", color: "#f97316" },
    { id: 2, title: "বাংলা", subtitle: "২য় পত্র", path: "bangla-2", color: "#ca8a04" },
    { id: 3, title: "ইংরেজি", subtitle: "১ম পত্র", path: "english-1", color: "#ef4444" },
    { id: 4, title: "ইংরেজি", subtitle: "২য় পত্র", path: "english-2", color: "#8b5cf6" },
    { id: 5, title: "তথ্য ও যোগাযোগ", subtitle: "প্রযুক্তি", path: "ict", color: "#3b82f6" },
    { id: 6, title: "পদার্থবিজ্ঞান", subtitle: "১ম পত্র", path: "physics-1", color: "#10b981" },
    { id: 7, title: "পদার্থবিজ্ঞান", subtitle: "২য় পত্র", path: "physics-2", color: "#a855f7" },
    { id: 8, title: "রসায়ন", subtitle: "১ম পত্র", path: "chemistry-1", color: "#ef4444" },
    { id: 9, title: "রসায়ন", subtitle: "২য় পত্র", path: "chemistry-2", color: "#a21caf" },
    { id: 10, title: "জীববিজ্ঞান", subtitle: "১ম পত্র", path: "biology-1", color: "#22c55e" },
    { id: 11, title: "জীববিজ্ঞান", subtitle: "২য় পত্র", path: "biology-2", color: "#16a34a" },
    { id: 12, title: "গণিত", subtitle: "১ম পত্র", path: "math-1", color: "#fbbf24" },
    { id: 13, title: "গণিত", subtitle: "২য় পত্র", path: "math-2", color: "#f59e0b" }
  ],
  "institution-based": [
    {
      id: 25,
      title: "মেডিকেল ও ডেন্টাল",
      subtitle: "প্রাইভেট",
      path: "medical",
      color: "#4d7c0f",
    },
    {
      id: 14,
      title: "জাতীয় বিশ্ববিদ্যালয়",
      subtitle: "এডমিশন",
      path: "national-university",
      color: "#a855f7",
    },
    {
      id: 15,
      title: "সাত কলেজ",
      subtitle: "ভাইভা",
      path: "sat-college",
      color: "#8b5cf6",
    },
    {
      id: 16,
      title: "বিইউপি",
      subtitle: "এডমিশন",
      path: "bup",
      color: "#10b981",
    },
    {
      id: 17,
      title: "মেরিটাইম",
      subtitle: "এডমিশন",
      path: "maritime",
      color: "#3b82f6",
    },
    {
      id: 18,
      title: "বুয়েট",
      subtitle: "প্রস্তুতি",
      path: "buet",
      color: "#ef4444",
    },
    {
      id: 19,
      title: "গুচ্ছ ইঞ্জিনিয়ারিং",
      subtitle: "প্রস্তুতি",
      path: "cluster-engineering",
      color: "#f97316",
    },
    {
      id: 20,
      title: "রুয়েট",
      subtitle: "এডমিশন",
      path: "ruet",
      color: "#ca8a04",
    },
    {
      id: 21,
      title: "কুয়েট",
      subtitle: "এডমিশন",
      path: "kuet",
      color: "#4d7c0f",
    },
    {
      id: 22,
      title: "চুয়েট",
      subtitle: "এডমিশন",
      path: "cuet",
      color: "#a855f7",
    },
  ],
};

const tabs = ["all", "subject-based", "institution-based"];

const Archive = () => {
  const [activeTab, setActiveTab] = useState("all");

  const cardsToShow =
    activeTab === "all" ? Object.values(cardData).flat() : cardData[activeTab];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">আর্কাইভ</h1>

      <div className="flex gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full font-semibold ${activeTab === tab ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all"
              ? "সকল প্রশ্ন"
              : tab === "subject-based"
                ? "বিষয়ভিত্তিক"
                : tab === "institution-based"
                  ? "প্রতিষ্ঠানভিত্তিক"
                  : tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsToShow.map((card) => (
          <Link
            key={card.id}
            to={`/question-bank/archive/${activeTab}/${card.path}`}
            className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition transform"
            style={{ backgroundColor: card.color }}
          >
            <h3 className="text-white text-lg font-semibold">{card.title}</h3>
            <p className="text-white opacity-90">{card.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Archive;




