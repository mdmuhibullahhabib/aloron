

import React, { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import Faculty from './Faculty/Faculty';
import { Link } from 'react-router-dom';


// Cards data
const cardData = {
  'model-test': [
    { id: 1, title: 'বিবরণী ২৫', subtitle: 'প্রাইভেট এডমিশন', path: 'bibrani-25-private', color: '#8b5cf6' },
    { id: 2, title: 'বিবরণী ২৫', subtitle: 'ফিজিক্যাল এডমিশন', path: 'bibrani-25-physical', color: '#10b981' },
    { id: 3, title: 'এইচএসসি ২৫', subtitle: 'কুইজ এন্ড এডমিশন', path: 'hsc-25-quiz', color: '#ef4444' },
    { id: 4, title: 'ঢাকা কেন্দ্রীয়', subtitle: 'বিশ্ববিদ্যালয়', path: 'dhaka-central', color: '#3b82f6' },
  ],
  'subject-based': [
    { id: 5, title: 'বাংলা', subtitle: '১ম পত্র', path: 'bangla-1', color: '#f97316' },
    { id: 6, title: 'বাংলা', subtitle: '২য় পত্র', path: 'bangla-2', color: '#ca8a04' },
    { id: 7, title: 'ইংরেজি', subtitle: '১ম পত্র', path: 'english-1', color: '#ef4444' },
    { id: 8, title: 'ইংরেজি', subtitle: '২য় পত্র', path: 'english-2', color: '#8b5cf6' },
    { id: 9, title: 'তথ্য ও যোগাযোগ', subtitle: 'প্রযুক্তি', path: 'ict', color: '#3b82f6' },
    { id: 10, title: 'পদার্থবিজ্ঞান', subtitle: '১ম পত্র', path: 'physics-1', color: '#10b981' },
    { id: 11, title: 'পদার্থবিজ্ঞান', subtitle: '২য় পত্র', path: 'physics-2', color: '#a855f7' },
    { id: 12, title: 'রসায়ন', subtitle: '১ম পত্র', path: 'chemistry-1', color: '#ef4444' },
  ],
  'institution-based': [
    { id: 13, title: 'মেডিকেল ও ডেন্টাল', subtitle: 'প্রাইভেট', path: 'medical', color: '#4d7c0f' },
    { id: 14, title: 'জাতীয় বিশ্ববিদ্যালয়', subtitle: 'এডমিশন', path: 'national-university', color: '#a855f7' },
    { id: 15, title: 'সাত কলেজ', subtitle: 'ভাইভা', path: 'sat-college', color: '#8b5cf6' },
    { id: 16, title: 'বিইউপি', subtitle: 'এডমিশন', path: 'bup', color: '#10b981' },
    { id: 17, title: 'মেরিটাইম', subtitle: 'এডমিশন', path: 'maritime', color: '#3b82f6' },
    { id: 18, title: 'বুয়েট', subtitle: 'প্রস্তুতি', path: 'buet', color: '#ef4444' },
    { id: 19, title: 'গুচ্ছ ইঞ্জিনিয়ারিং', subtitle: 'প্রস্তুতি', path: 'cluster-engineering', color: '#f97316' },
    { id: 20, title: 'রুয়েট', subtitle: 'এডমিশন', path: 'ruet', color: '#ca8a04' },
    { id: 21, title: 'কুয়েট', subtitle: 'এডমিশন', path: 'kuet', color: '#4d7c0f' },
    { id: 22, title: 'চুয়েট', subtitle: 'এডমিশন', path: 'cuet', color: '#a855f7' },
  ]
};

// Tabs details
const tabs = ['all', 'model-test', 'subject-based', 'institution-based'];

const Archive = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedInstitution(null); // reset institution selection
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold">আর্কাইভ</h1>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="অনায়াসে খুঁজে ফেলুন"
            className="pl-4 pr-10 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <MdOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </header>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full font-semibold ${activeTab === tab ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab === 'all' ? 'সকল প্রশ্ন' : tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'institution-based' && selectedInstitution ? (
        <Faculty institution={selectedInstitution} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(activeTab === 'all'
            ? Object.values(cardData).flat()
            : cardData[activeTab] || []
          ).map(card => (
            <Link >
            <div
              key={card.id}
              className="p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition transform"
              style={{ backgroundColor: card.color }}
              // onClick={() => card.institution && setSelectedInstitution(card.path)}
                     onClick={() => {
              if (activeTab === 'institution-based') {
                setSelectedInstitution(card.path); // এখানে path ব্যবহার করে institution সেট হবে
              }
            }}
            >
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
              <p className="text-white opacity-90">{card.subtitle}</p>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;


