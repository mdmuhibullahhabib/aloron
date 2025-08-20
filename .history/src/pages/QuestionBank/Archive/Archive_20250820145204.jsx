import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Fake card data
const cardData = {
  "institution-based": [
    { id: 1, title: "BUP", subtitle: "Bangladesh University of Professionals", color: "#6C63FF" },
    { id: 2, title: "DU", subtitle: "University of Dhaka", color: "#FF6584" },
    { id: 3, title: "BUET", subtitle: "Bangladesh University of Engineering & Technology", color: "#FFB74D" }
  ],
  "model-test": [
    { id: 4, title: "Model Test 1", subtitle: "Mathematics Practice", color: "#00BFA6" },
    { id: 5, title: "Model Test 2", subtitle: "Physics Practice", color: "#F06292" },
    { id: 6, title: "Model Test 3", subtitle: "Chemistry Practice", color: "#FFD54F" }
  ]
};

const Archive = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("institution-based");

  const handleCardClick = (card) => {
    // Navigate to institution/faculty page if card is institution
    if (activeTab === "institution-based") {
      navigate(`/archive/${card.title.toLowerCase()}`);
    }
  };

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "institution-based" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("institution-based")}
        >
          Institutions
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "model-test" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("model-test")}
        >
          Model Tests
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData[activeTab].map((card) => (
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
    </div>
  );
};

export default Archive;
