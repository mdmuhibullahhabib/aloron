import React from "react";
import { FaClock, FaCheckCircle } from "react-icons/fa";

const Overview = () => {
  return (
    <div className=>
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Text Section */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">মক পরীক্ষা</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            নিজের ইচ্ছেমতো বিষয়, টপিক, সময় ও প্রশ্ন সংখ্যা নির্বাচন করে মক পরীক্ষা নেবার সুযোগ।
          </p>

          {/* Special Feature Box */}
          <div className="mt-6 p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaClock className="text-green-400" /> ডেমো টাইমার
            </h3>
            <p className="text-gray-400 text-sm">
              মক পরীক্ষার জন্য টাইমার চালু করুন। সময় শেষ হলে স্বয়ংক্রিয়ভাবে সাবমিট হবে।
            </p>
          </div>
        </div>

        {/* Mobile Mockup Image */}
        <div className="w-64 h-[500px] bg-gray-900 rounded-3xl shadow-xl border border-gray-800 overflow-hidden">
          <div className="p-4 flex flex-col items-center">
            <div className="text-lg font-bold mb-2">মক পরীক্ষা ডেমো</div>
            <div className="w-full bg-gray-700 rounded-lg p-3 text-gray-300">
              <p>সময়: <span className="text-green-400">25 মিনিট</span></p>
              <p className="mt-1">বিষয়: পদার্থবিজ্ঞান</p>
              <div className="mt-2 flex items-center gap-2 text-green-400">
                <FaCheckCircle /> নির্বাচিত টপিকস
              </div>
              <ul className="text-sm mt-1 space-y-1 list-disc list-inside">
                <li>ভেক্টর</li>
                <li>গতিবিদ্যা</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Text Section */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">মক পরীক্ষা</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            নিজের ইচ্ছেমতো বিষয়, টপিক, সময় ও প্রশ্ন সংখ্যা নির্বাচন করে মক পরীক্ষা নেবার সুযোগ।
          </p>

          {/* Special Feature Box */}
          <div className="mt-6 p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaClock className="text-green-400" /> ডেমো টাইমার
            </h3>
            <p className="text-gray-400 text-sm">
              মক পরীক্ষার জন্য টাইমার চালু করুন। সময় শেষ হলে স্বয়ংক্রিয়ভাবে সাবমিট হবে।
            </p>
          </div>
        </div>

        {/* Mobile Mockup Image */}
        <div className="w-64 h-[500px] bg-gray-900 rounded-3xl shadow-xl border border-gray-800 overflow-hidden">
          <div className="p-4 flex flex-col items-center">
            <div className="text-lg font-bold mb-2">মক পরীক্ষা ডেমো</div>
            <div className="w-full bg-gray-700 rounded-lg p-3 text-gray-300">
              <p>সময়: <span className="text-green-400">25 মিনিট</span></p>
              <p className="mt-1">বিষয়: পদার্থবিজ্ঞান</p>
              <div className="mt-2 flex items-center gap-2 text-green-400">
                <FaCheckCircle /> নির্বাচিত টপিকস
              </div>
              <ul className="text-sm mt-1 space-y-1 list-disc list-inside">
                <li>ভেক্টর</li>
                <li>গতিবিদ্যা</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
        </div>
  );
};

export default Overview;
