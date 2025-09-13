import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import useSubscription from '../hooks/useSubscription';

const SubscriptionRoute = ({ children }) => {
  const [subscriptions, isLoading] = useSubscription();

  const [showSpinner, setShowSpinner] = useState(true);

  // ⏳ ৩ সেকেন্ড পরে স্পিনার বন্ধ হবে
  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || showSpinner) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  // subscriptions যদি array আসে, প্রথম সাবস্ক্রিপশন ধরলাম
  const subscription = Array.isArray(subscriptions) ? subscriptions[0] : subscriptions;

  // সাবস্ক্রিপশন অ্যাক্টিভ কিনা চেক করলাম
  const isActive = subscription?.status === "active";

  if (!isActive) {
    return <Navigate to="/subscription" replace />;
  }

  return children;
};

export default SubscriptionRoute;
