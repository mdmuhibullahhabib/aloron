import React from 'react'

const FilterSection = () => {
    return (
        <div className="filter-section bg-white p-4 rounded-lg shadow-lg my-4 transition-all duration-300">
            <div className="flex justify-center space-x-4 mb-4">
                <button className="bg-white text-gray-700 font-medium py-2 px-6 rounded-full border border-gray-300 shadow-sm hover:bg-blue-100 transition duration-300">
                    সেকশন
                </button>
                <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
                    ভর্তি পরীক্ষা
                </button>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex space-x-2">
                    <button className="bg-white text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300">বিষয়</button>
                    <button className="bg-white text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300">অধ্যায়</button>
                    <button className="bg-white text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300">টপিক</button>
                </div>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" className="form-checkbox text-blue-500 rounded-md" />
                        <span>সলিউশন</span>
                    </label>
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" defaultChecked className="form-checkbox text-blue-500 rounded-md" />
                        <span>উত্তর</span>
                    </label>
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" defaultChecked className="form-checkbox text-blue-500 rounded-md" />
                        <span>ব্যাখ্যা</span>
                    </label>
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" className="form-checkbox text-blue-500 rounded-md" />
                        <span>প্রশ্ন খুঁজুন</span>
                    </label>
                </div>
                <div className="relative w-full md:w-auto">
                    <input type="text" placeholder="প্রশ্ন খুঁজুন..." className="py-2 pl-4 pr-10 w-full rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                    <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
            </div>
        </div>
    );
};
