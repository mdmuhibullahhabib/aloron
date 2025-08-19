import React, { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

// Data for the cards
const cardData = [
  { id: 1, title: 'বিবরণী ২৫', subtitle: 'প্রাইভেট এডমিশন', color: '#8b5cf6' },
  { id: 2, title: 'বিবরণী ২৫', subtitle: 'ফিজিক্যাল এডমিশন', color: '#10b981' },
  { id: 3, title: 'এইচএসসি ২৫', subtitle: 'কুইজ এন্ড এডমিশন', color: '#ef4444' },
  { id: 4, title: 'ঢাকা কেন্দ্রীয়', subtitle: 'বিশ্ববিদ্যালয়', color: '#3b82f6' },
  { id: 5, title: 'এডমিশন', subtitle: 'মডেল টেস্ট', color: '#f97316' },
  { id: 6, title: 'এডমিশন', subtitle: 'মডেল টেস্ট', color: '#ca8a04' },
  { id: 7, title: 'জাতীয় বিশ্ববিদ্যালয়', subtitle: 'এডমিশন', color: '#a855f7' },
  { id: 8, title: 'মেডিকেল ও ডেন্টাল', subtitle: 'প্রাইভেট', color: '#4d7c0f' },
];

const Archive = () => {
  const [activeTab, setActiveTab] = useState('model-test');

  return (
    <>
      {/* Header with search bar */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold">আর্কাইভ</h1>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="অনায়াসে খুঁজে ফেলুন"
            className="pl-4 pr-10 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <MdOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </header>

      {/* Tabs for content filtering */}
      <div className="tabs tabs-boxed bg-white mb-8 p-1 rounded-full shadow-sm">
        <button
          onClick={() => setActiveTab('model-test')}
          className={`tab flex-1 rounded-full ${activeTab === 'model-test' ? 'tab-active bg-emerald-500 text-white' : ''}`}
        >
          মডেল টেস্ট
        </button>
        <button
          onClick={() => setActiveTab('subject-based')}
          className={`tab flex-1 rounded-full ${activeTab === 'subject-based' ? 'tab-active bg-emerald-500 text-white' : ''}`}
        >
          বিষয় ভিত্তিক
        </button>
        <button
          onClick={() => setActiveTab('institution-based')}
          className={`tab flex-1 rounded-full ${activeTab === 'institution-based' ? 'tab-active bg-emerald-500 text-white' : ''}`}
        >
          প্রতিষ্ঠান ভিত্তিক
        </button>
      </div>

      {/* Content Section Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">মডেল টেস্ট</h2>
        <p className="text-gray-500">বিষয়ভিত্তিক অনুযায়ী মডেল টেস্ট</p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105"
            style={{ backgroundColor: card.color }}
          >
            <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
              Live
            </div>
            <h3 className="text-white text-lg font-semibold mb-1">
              {card.title}
            </h3>
            <p className="text-white text-sm opacity-90">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Archive;
