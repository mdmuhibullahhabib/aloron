import React, { useState } from 'react';

// Main App component to render the full page
    const Que = () => {
  const [activeTab, setActiveTab] = useState('আর্কাইভ'); // State for the active main tab
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Sample data for the content cards
  const cardData = [
    { title: 'মডেল টেস্ট ২৫', subtitle: 'ভর্তি পরীক্ষার অনলাইন মডেল টেস্ট', live: true, color: 'bg-green-500' },
    { title: 'এইচএসসি ২৪', subtitle: 'এইচএসসি অনলাইন মডেল টেস্ট', live: true, color: 'bg-blue-500' },
    { title: 'ভর্তি প্রস্তুতি', subtitle: 'অনলাইন ক্লাস ও পরীক্ষা', live: false, color: 'bg-purple-500' },
    { title: 'মডেল টেস্ট ২৪', subtitle: 'ভর্তি পরীক্ষার অনলাইন মডেল টেস্ট', live: true, color: 'bg-red-500' },
    { title: 'মডেল টেস্ট ২৪', subtitle: 'ভর্তি পরীক্ষার অনলাইন মডেল টেস্ট', live: true, color: 'bg-yellow-500' },
    { title: 'প্রশ্ন ব্যাংক', subtitle: 'ভর্তি পরীক্ষার প্রশ্ন ব্যাংক', live: true, color: 'bg-indigo-500' }
  ];

  return (
    <div className="flex bg-gray-900 text-white min-h-screen font-sans antialiased">
      
      {/* Sidebar - Left Section */}
      <aside className="w-64 bg-gray-800 p-4 flex flex-col items-center">
        {/* Logo and App Name */}
        <div className="flex items-center mb-12">
          <span className="text-3xl font-bold">ছ</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4 w-full">
          <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm font-medium">ড্যাশবোর্ড</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm font-medium">প্রশ্ন ব্যাংক</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 bg-gray-700 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm font-medium">আর্কাইভ</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-sm font-medium">কুইজ</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-medium">প্রোফাইল</span>
          </a>
        </nav>
        
        {/* Sign Up Button at the bottom of the sidebar */}
        <div className="mt-auto w-full">
          <button className="w-full px-4 py-2 text-sm font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
            Sign Up
          </button>
        </div>
      </aside>

      {/* Main Content Area - Right Section */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">আর্কাইভ</h1>
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="প্রশ্ন ব্যাংক খুঁজুন"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 text-gray-800 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('মডেল টেস্ট')}
            className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'মডেল টেস্ট' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            মডেল টেস্ট
          </button>
          <button
            onClick={() => setActiveTab('শিক্ষার নিবন্ধ')}
            className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'শিক্ষার নিবন্ধ' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            শিক্ষার নিবন্ধ
          </button>
          <button
            onClick={() => setActiveTab('ভিডিও টিউটোরিয়াল')}
            className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'ভিডিও টিউটোরিয়াল' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            ভিডিও টিউটোরিয়াল
          </button>
        </div>

        {/* Card Grid based on active tab */}
        {activeTab === 'মডেল টেস্ট' && (
          <div>
            <h2 className="text-xl font-bold mb-4">মডেল টেস্ট</h2>
            <p className="text-gray-400 mb-6">ভর্তি পরীক্ষার অনুরূপ অনলাইন মডেল টেস্ট</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardData.map((card, index) => (
                <div key={index} className={`relative rounded-xl p-6 h-48 flex flex-col justify-end overflow-hidden ${card.color} shadow-lg`}>
                  {card.live && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Live
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-gray-100">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Placeholder for other tabs */}
        {activeTab !== 'মডেল টেস্ট' && (
          <div className="text-center text-gray-500 p-8">
            <p>Content for the selected tab will be displayed here.</p>
          </div>
        )}
      </main>
    </div>
  );
}


export default Que