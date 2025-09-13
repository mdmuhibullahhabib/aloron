import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import useSubscription from '../hooks/useSubscription';

const SubscriptionRoute = ({ children }) => {
  const [subscriptions, isLoading] = useSubscription();

make a beautiful loading spinner 3 sec int his code-   if (isLoading) {
    return <p>Loading...</p>; // লোডিং এর সময় কিছু দেখান
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
