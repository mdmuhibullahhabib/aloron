import React from "react";
import { LuLockKeyhole } from "react-icons/lu";

const NavigationButtons = ({ onNext, onUnlock }) => {
  return (
    <div className="mt-8 flex flex-col items-center space-y-4">
      <button
        onClick={onUnlock}
        className="bg-[#242939] flex gap-2 justify-center item-center text-blue-500 py-3 px-6 rounded-full font-semibold border-2 border-blue-500 hover:bg-[#2e3445] transition-colors"
      >
       <LuLockKeyhole className="item-center mt-1" /> ব্যাখ্যা দেখতে প্রিমিয়াম এ আপগ্রেড করুন
      </button>
      <button
        onClick={onNext}
        className="flex items-center space-x-2 bg-[#2e3445] text-white py-3 px-6 rounded-full font-semibold border-2 border-[#3e4555] hover:bg-[#3e4555] transition-colors"
      >
        <span>নতুন প্রশ্ন</span>
        ➡️
      </button>
    </div>
  );
};

export default NavigationButtons;
