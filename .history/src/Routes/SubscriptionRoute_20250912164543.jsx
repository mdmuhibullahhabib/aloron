import React from 'react';
import { Navigate } from "react-router-dom";
import useSubscription from '../hooks/useSubscription';

const SubscriptionRoute = ({ children }) => {
  const [ user ] = useSubscription(); 
  

  if (!user?.subscription?.isActive) {
    return <Navigate to="/subscribtion" replace />;
  }
  return children;
};

export default SubscriptionRoute;
