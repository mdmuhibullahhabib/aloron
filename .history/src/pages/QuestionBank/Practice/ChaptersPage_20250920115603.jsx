import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { subjectsData } from "./subjectsData";
import useAuth from "../../hooks/useAuth"; // ✅ your auth hook
import useSubscription from "../../hooks/useSubscription"; // ✅ custom hook for subscription

const ChaptersPage = ({ subjectId, paperId, onGoBack, onChapterSelect }) => {
  const { user } = useAuth();
  const [subscription] = useSubscription(); // ✅ Get subscription data
  const navigate = useNavigate();
  const location = useLocation();

  const chapters = subjectsData[subjectId].papers[paperId];

  const handleChapterClick = (chapter) => {
    if (!user?.email) {
      // ✅ Not logged in → redirect login
      navigate("/auth/signin", { state: { from: location } });
      return;
    }

    if (!subscription || subscription.status !== "active") {
      // ✅ No subscription or not active → redirect subscription page
      navigate("/subscription", { state: { from: location } });
      return;
    }

    // ✅ If everything ok → go to chapter
    onChapterSelect(chapter);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white w-full p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl flex items-center justify-between mb-8">
          <button
            onClick={onGoBack}
            className="text-gray-400 hover:text-white"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold">{paperId} পত্র</h1>
          <div className="w-6"></div>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-4 shadow-lg flex items-center justify-between hover:bg-gray-700 cursor-pointer"
              onClick={() => handleChapterClick(chapter)}
            >
              <span className="text-xl">{chapter}</span>
              <span>→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChaptersPage;
