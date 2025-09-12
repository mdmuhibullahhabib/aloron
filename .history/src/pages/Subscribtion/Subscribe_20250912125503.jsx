import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa";
import useDatabaseUser from "../../hooks/useDatabaseUser";
import useSubscription from "../../hooks/useSubscription";

const Subscribe = () => {
  const navigate = useNavigate();
    const [databaseUser] = useDatabaseUser();
    const [user] = useSubscription();
    
    console.log(databaseUser)
    console.log(user)

  const userId = databaseUser[0]?._id;
    console.log(userId)


  const handleSubscribe = (plan) => {
    // এখানে পেমেন্ট পেজে পাঠানো হবে
    navigate("/payment", { state: { plan } });
  };

  const plans = [
    { id: "15 days", name: "15 days Plan", price: 80, duration: "১৫ দিন" },
    { id: "monthly", name: "Monthly Plan", price: 150, duration: "30 দিন" },
    { id: "yearly", name: "Yearly Plan", price: 5000, duration: "365 দিন" },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-green-600">🏆 সাবস্ক্রিপশন প্ল্যান</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white shadow-md rounded-xl p-6 border hover:border-green-500"
          >
            <h3 className="text-lg font-bold">{plan.name}</h3>
            <p className="text-green-600 font-semibold">৳{plan.price} / {plan.duration}</p>
            <button
              onClick={() => handleSubscribe(plan)}
              className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center gap-2"
            >
              <FaMoneyBillWave /> সাবস্ক্রাইব করুন
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscribe;
