import React from 'react';
import { Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import useDatabaseUser from '../hooks/useDatabaseUser';

const SubscriptionRoute = ({ children }) => {
  // const { user } = useAuth(); 
    const [databaseUser] = useDatabaseUser();
      const user = databaseUser[0]?._id;
    console.log(userId);
  
console.log(databaseUser)
  if (!user?.subscription?.isActive) {
    return <Navigate to="/subscribtion" replace />;
  }
  return children;
};

export default SubscriptionRoute;
