import React from "react";

const QuestionCard = ({ question, onAnswerSelect, selectedAnswer }) => {
  const {user}
    const handleStartExam = () => {
    if (!user?.email) {
      // যদি লগইন না করা থাকে → login page এ পাঠানো হবে
      navigate("/auth/signin", { state: { from: location } });
      return;
    }
    if (!subscriptionUser[0]?._id) {
      // যদি লগইন না করা থাকে → login page এ পাঠানো হবে
      navigate("/subscription", { state: { from: location } });
      return;
    }
    setStarted(true);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswerSelect(option)}
            className={`w-full text-left py-3 px-4 rounded-lg border transition
              ${
                selectedAnswer === option
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-50 text-gray-700 border-gray-300 hover:border-blue-400"
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
