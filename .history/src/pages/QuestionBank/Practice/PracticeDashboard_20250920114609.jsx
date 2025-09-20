import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { subjectsData } from "./subjectsData";
import useAuth from "../../../hooks/useAuth";

const PracticeDashboard = ({ onSubjectSelect }) => {
  const { user } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubjectClick = (key) => {
    if (!user?.email) {
      // ✅ If not logged in → navigate to login page
      navigate("/auth/signin", { state: { from: location } });
      return;
    }
    onSubjectSelect(key);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white w-full p-8">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">ফ্রি প্র্যাকটিস</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(subjectsData).map((key) => (
            <div
              key={key}
              className="bg-gray-800 rounded-xl p-6 shadow-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSubjectClick(key)}
            >
              <span className="text-xl font-medium">{subjectsData[key].title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeDashboard;
