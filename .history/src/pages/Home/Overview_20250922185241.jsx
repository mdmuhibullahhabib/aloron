import React from "react";
import { FaClock, FaCheckCircle } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-6 py-16 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Mock Exam Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-green-400 drop-shadow-md">
              মক পরীক্ষা
            </h2>
            <p className="leading-relaxed text-base">
              নিজের ইচ্ছেমতো বিষয়, টপিক, সময় ও প্রশ্ন সংখ্যা নির্বাচন করে মক পরীক্ষা নেবার সুযোগ।
            </p>

            {/* Feature Box */}
            <div className="p-5 bg-[#1f1f1f] rounded-xl shadow-lg border border-gray-700 hover:scale-[1.03] hover:border-green-400 transition-transform duration-300">
              <h3 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
                <FaClock className="text-green-400 animate-pulse" /> ডেমো টাইমার
              </h3>
              <p className="text-gray-400 text-sm">
                মক পরীক্ষার জন্য টাইমার চালু করুন। সময় শেষ হলে স্বয়ংক্রিয়ভাবে সাবমিট হবে।
              </p>
            </div>
          </div>

          {/* Mockup Card */}
          <div className="bg-[#222] rounded-3xl shadow-xl border border-gray-700 p-6 hover:shadow-green-500/20 transition-all duration-300">
            <h3 className="text-lg font-bold text-green-400 text-center mb-4">
              মক পরীক্ষা ডেমো
            </h3>
            <div className="bg-[#2b2b2b] rounded-xl p-4 text-gray-300 space-y-3">
              <p>সময়: <span className="text-green-400 font-semibold">25 মিনিট</span></p>
              <p>বিষয়: পদার্থবিজ্ঞান</p>
              <div className="flex items-center gap-2 text-green-400 mt-2">
                <FaCheckCircle /> নির্বাচিত টপিকস
              </div>
              <ul className="list-disc list-inside text-sm space-y-1 pl-2">
                <li>ভেক্টর</li>
                <li>গতিবিদ্যা</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results Analysis Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:px-12 lg:px-20 border-t border-gray-800">
        <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <h2 className="text-4xl font-extrabold text-blue-400 drop-shadow-md mb-4">
            ফলাফল বিশ্লেষণ
          </h2>
          <p className=" leading-relaxed">
            পরীক্ষার পরে বিশ্লেষণ দেখুন, যেখানে আপনার ভুল এবং সঠিক উত্তর, গড় সময় এবং উন্নতির পরামর্শ থাকবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
