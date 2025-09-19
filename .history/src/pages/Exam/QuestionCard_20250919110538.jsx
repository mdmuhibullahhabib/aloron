import React from "react";
import useAuth from "../../hooks/useAuth";
import useSubscription from "../../hooks/useSubscription";
import { useNavigate, useLocation } from "react-router-dom";

const QuestionCard = ({ question, onAnswerSelect, selectedAnswer }) => {
  const { user } = useAuth();
  const [subscriptionUser] = useSubscription();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Check before answering
  const handleSelectAnswer = (option) => {
    if (!user?.email) {
      navigate("/auth/signin", { state: { from: location } });
      return;
    }
    if (!subscriptionUser[0]?._id) {
      navigate("/subscription", { state: { from: location } });
      return;
    }
    onAnswerSelect(option); // if ok → answer select হবে
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition hover:shadow-xl">
      {/* প্রশ্ন */}
      <h3 className="text-xl font-semibold mb-5 text-gray-800">
        {question.text}
      </h3>

      {/* অপশন লিস্ট */}
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelectAnswer(option)}
            className={`w-full text-left py-3 px-5 rounded-xl border font-medium transition-all duration-200
              ${
                selectedAnswer === option
                  ? "bg-blue-500 text-white border-blue-500 shadow-md scale-[1.02]"
                  : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-blue-400"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
