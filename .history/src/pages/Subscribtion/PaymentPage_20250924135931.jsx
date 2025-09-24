import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const location = useLocation();
  const plan = location.state?.plan;
  const axiosSec

  useEffect(() => {
    if (plan) {
      // Backend এ কল যাবে (SSLCommerz সেশন তৈরি)
      axios.post("http://localhost:5000/api/payment/init", {
        planId: plan.id,
        price: plan.price,
        name: "Test User",
        email: "test@example.com",
        phone: "017XXXXXXXX"
      })
      .then(res => {
        if (res.data?.GatewayPageURL) {
          window.location.href = res.data.GatewayPageURL; // SSLCommerz Redirect
        }
      })
      .catch(err => console.error(err));
    }
  }, [plan]);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold text-green-600">🔄 পেমেন্ট পেজ লোড হচ্ছে...</h2>
      <p>আপনাকে SSLCommerz এ রিডাইরেক্ট করা হবে।</p>
    </div>
  );
};

export default PaymentPage;
