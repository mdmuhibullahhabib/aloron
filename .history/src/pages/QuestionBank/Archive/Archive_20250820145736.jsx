import React, { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Data for the cards, categorized by tab
const cardData = {
  'model-test': [
    { id: 1, title: 'বিবরণী ২৫', subtitle: 'প্রাইভেট এডমিশন', color: '#8b5cf6' },
    { id: 2, title: 'বিবরণী ২৫', subtitle: 'ফিজিক্যাল এডমিশন', color: '#10b981' },
    { id: 3, title: 'এইচএসসি ২৫', subtitle: 'কুইজ এন্ড এডমিশন', color: '#ef4444' },
    { id: 4, title: 'ঢাকা কেন্দ্রীয়', subtitle: 'বিশ্ববিদ্যালয়', color: '#3b82f6' },
  ],
  'subject-based': [
    { id: 5, title: 'বাংলা', subtitle: '১ম পত্র', color: '#f97316' },
    { id: 6, title: 'বাংলা', subtitle: '২য় পত্র', color: '#ca8a04' },
    { id: 7, title: 'ইংরেজি', subtitle: '১ম পত্র', color: '#ef4444' },
    { id: 8, title: 'ইংরেজি', subtitle: '২য় পত্র', color: '#8b5cf6' },
    { id: 9, title: 'তথ্য ও যোগাযোগ', subtitle: 'প্রযুক্তি', color: '#3b82f6' },
    { id: 10, title: 'পদার্থবিজ্ঞান', subtitle: '১ম পত্র', color: '#10b981' },
    { id: 11, title: 'পদার্থবিজ্ঞান', subtitle: '২য় পত্র', color: '#a855f7' },
    { id: 12, title: 'রসায়ন', subtitle: '১ম পত্র', color: '#ef4444' },
  ],
  'institution-based': [
    { id: 13, title: 'মেডিকেল ও ডেন্টাল', subtitle: 'প্রাইভেট', pathj color: '#4d7c0f' },
    { id: 14, title: 'জাতীয় বিশ্ববিদ্যালয়', subtitle: 'এডমিশন', color: '#a855f7' },
    { id: 15, title: 'সাত কলেজ', subtitle: 'ভাইভা', color: '#8b5cf6' },
    { id: 16, title: 'বিইউপি', subtitle: 'এডমিশন', color: '#10b981' },
    { id: 17, title: 'মেরিটাইম', subtitle: 'এডমিশন', color: '#3b82f6' },
    { id: 18, title: 'বুয়েট', subtitle: 'প্রস্তুতি', color: '#ef4444' },
    { id: 19, title: 'গুচ্ছ ইঞ্জিনিয়ারিং', subtitle: 'প্রস্তুতি', color: '#f97316' },
    { id: 20, title: 'রুয়েট', subtitle: 'এডমিশন', color: '#ca8a04' },
    { id: 21, title: 'কুয়েট', subtitle: 'এডমিশন', color: '#4d7c0f' },
    { id: 22, title: 'চুয়েট', subtitle: 'এডমিশন', color: '#a855f7' },
  ]
};

const getTabDetails = (tabName) => {
  switch (tabName) {
    case 'all':
      return { title: 'সকল প্রশ্ন', subtitle: 'সকল ধরনের প্রশ্ন এখানে রয়েছে' };
    case 'model-test':
      return { title: 'মডেল টেস্ট', subtitle: 'বিষয়ভিত্তিক অনুযায়ী মডেল টেস্ট' };
    case 'subject-based':
      return { title: 'বিষয় ভিত্তিক', subtitle: 'বিষয় অনুযায়ী মডেল টেস্ট' };
    case 'institution-based':
      return { title: 'প্রতিষ্ঠান ভিত্তিক', subtitle: 'প্রতিষ্ঠান অনুযায়ী মডেল টেস্ট' };
    default:
      return { title: '', subtitle: '' };
  }
};

const getSectionTitle = (tabName) => {
  switch (tabName) {
    case 'model-test':
      return 'মডেল টেস্ট';
    case 'subject-based':
      return 'বিষয় ভিত্তিক';
    case 'institution-based':
      return 'প্রতিষ্ঠান ভিত্তিক';
    default:
      return '';
  }
};

const Archive = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [tabDetails, setTabDetails] = useState(getTabDetails('all'));

  // Update the title and subtitle based on the active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setTabDetails(getTabDetails(tabName));
  };

  return (
    <>
      {/* Header with search bar */}
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

      {/* Tabs for content filtering */}
      <div className="tabs tabs-boxed bg-white mb-8 p-1 rounded-full shadow-sm">
        <button
          onClick={() => handleTabClick('all')}
          className={`tab flex-1 rounded-full ${activeTab === 'all' ? 'tab-active bg-emerald-500 text-white' : ''}`}
        >
          সকল প্রশ্ন
        </button>
        <button
          onClick={() => handleTabClick('model-test')}
          className={`tab flex-1 rounded-full ${activeTab === 'model-test' ? 'tab-active bg-emerald-500 text-white' : ''}`}
        >
          মডেল টেস্ট
        </button>
        <button
          onClick={() => handleTabClick('subject-based')}
          className={`tab flex-1 rounded-full ${activeTab === 'subject-based' ? 'tab-active bg-emerald-500 text-white' : ''}`}
        >
          বিষয় ভিত্তিক
        </button>
        <button
          onClick={() => handleTabClick('institution-based')}
          className={`tab flex-1 rounded-full ${activeTab === 'institution-based' ? 'tab-active bg-emerald-500 text-white' : ''}`}
        >
          প্রতিষ্ঠান ভিত্তিক
        </button>
      </div>

      {/* Content Section Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{tabDetails.title}</h2>
        <p className="text-gray-500">{tabDetails.subtitle}</p>
      </div>

      {/* Conditional Rendering for All or Specific Tab */}
      {activeTab === 'all' ? (
        // Render all sections
        Object.keys(cardData).map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{getSectionTitle(category)}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cardData[category].map(card => (
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
          </div>
        ))
      ) : (
        // Render a single section
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData[activeTab].map(card => (
            <Link
            to={`/archive/${card.title.toLowerCase()}`}
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
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Archive;
