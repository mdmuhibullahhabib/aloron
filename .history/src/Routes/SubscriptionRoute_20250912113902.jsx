import React from 'react';
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useDatabaseUser from '../hooks/useDatabaseUser';

const SubscriptionRoute = ({ children }) => {
  const { user } = useAuth(); 
    const [databaseUser] = useDatabaseUser();
  
console.log(dfata)
  if (!user?.subscription?.isActive) {
    return <Navigate to="/subscribtion" replace />;
  }
  return children;
};

export default SubscriptionRoute;
