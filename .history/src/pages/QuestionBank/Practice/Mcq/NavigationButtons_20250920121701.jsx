import React from "react";
import { LuLockKeyhole } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";
import useSubscription from "../../../../hooks/useSubscription";

const NavigationButtons = ({ onNext, onUnlock }) => {
  const [subscription] = useSubscription();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = subscription && subscription[0]?.status === "active";

  const handleUnlockClick = () => {
    if (!isActive) {
      // ✅ Not active → redirect to subscription page
      navigate("/subscription", { state: { from: location } });
    } else {
      // ✅ Active → show explanation
      onUnlock();
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center space-y-4">
         {/* ব্যাখ্যা বোতাম */}
      <button
        onClick={handleUnlockClick}
        className="bg-[#242939] flex gap-2 items-center text-blue-500 py-3 px-6 rounded-full font-semibold border-2 border-blue-500 hover:bg-[#2e3445] transition-colors"
      >
        {isActive ? (
          <LuUnlockKeyhole className="mt-1" />
        ) : (
          <LuLockKeyhole className="mt-1" />
        )}
        {isActive ? "ব্যাখ্যা" : "ব্যাখ্যা দেখতে প্রিমিয়াম এ আপগ্রেড করুন"}
      </button>

      {/* নতুন প্রশ্ন বোতাম */}
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
