import React, { useState } from "react";
import { FaCheckCircle, FaCrown, FaMoneyBillWave } from "react-icons/fa";

const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "days",
      name: "15 Days Plan",
      price: 80,
      duration: "১৫ দিন",
      features: ["Practice Access", "Exam Access", "Leaderboard Entry"],
    },
    {
      id: "monthly",
      name: "Monthly Plan",
      price: 150,
      duration: "30 দিন",
      features: ["Practice Access", "Exam Access", "Leaderboard Entry"],
    },
    {
      id: "yearly",
      name: "Yearly Plan",
      price: 5000,
      duration: "365 দিন",
      features: [
        "Practice Access",
        "Exam Access",
        "Leaderboard Entry",
        "Premium Badge",
      ],
    },
  ];

  // ফেক পেমেন্ট হ্যান্ডলার
  const handlePayment = () => {
    if (!selectedPlan) {
      alert("⚠️ আগে একটা প্ল্যান সিলেক্ট করুন!");
      return;
    }
    setSubscribed(true);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        🏆 সাবস্ক্রিপশন নিন এবং এক্সক্লুসিভ কনটেন্ট আনলক করুন
      </h2>

      {/* প্ল্যান লিস্ট */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`cursor-pointer bg-white shadow-md rounded-2xl p-6 border-2 transition ${
              selectedPlan === plan.id
                ? "border-green-500 ring-2 ring-green-300"
                : "border-gray-200 hover:border-green-400"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3">
              <FaCrown className="text-yellow-500" /> {plan.name}
            </h3>
            <p className="text-2xl font-semibold text-green-600 mb-2">
              ৳{plan.price} <span className="text-sm text-gray-500">/{plan.duration}</span>
            </p>

            <ul className="space-y-2 mb-4">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <FaCheckCircle className="text-green-500" /> {f}
                </li>
              ))}
            </ul>

            {selectedPlan === plan.id && (
              <p className="text-sm text-green-600 font-medium">
                ✔️ এই প্ল্যানটি নির্বাচিত হয়েছে
              </p>
            )}
          </div>
        ))}
      </div>

      {/* পেমেন্ট বাটন */}
      {!subscribed ? (
        <button
          onClick={handlePayment}
          className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center gap-2"
        >
          <FaMoneyBillWave /> এখনই কিনুন
        </button>
      ) : (
        <div className="mt-6 text-center">
          <p className="text-xl font-bold text-green-700 mb-2">
            🎉 অভিনন্দন! আপনার সাবস্ক্রিপশন এক্টিভ হয়েছে
          </p>
          <p className="text-gray-600">এখন আপনি Practice এবং Exam ব্যবহার করতে পারবেন।</p>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
