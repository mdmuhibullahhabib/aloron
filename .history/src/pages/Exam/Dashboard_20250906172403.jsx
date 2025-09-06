import React from "react";

const Dashboard = ({ questions, userAnswers, onRetake }) => {
  const score = userAnswers.filter(
    (ans, i) => ans === questions[i]?.correctAnswer
  ).length;

  const total = questions.length;
  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">📊 Exam Results</h2>
        <p className="text-lg">Total Questions: {total}</p>
        <p className="text-lg">Correct: {score}</p>
        <p className="text-lg">Wrong: {total - score}</p>
        <p className="text-xl font-bold text-green-600">{percentage}%</p>
      </div>

      {/* Breakdown */}
      <div className="mt-6 space-y-4">
        {questions.map((q, i) => {
          const isCorrect = userAnswers[i] === q.correctAnswer;
          return (
            <div
              key={q.id}
              className={`p-4 rounded-lg border-l-4 shadow ${
                isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
              }`}
            >
              <p className="font-semibold">{q.text}</p>
              <p className="text-sm">Your Answer: {userAnswers[i] || "Not Answered"}</p>
              {!isCorrect && (
                <p className="text-sm text-red-600">
                  Correct Answer: {q.correctAnswer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={onRetake}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
      >
        🔄 Retake Exam
      </button>
    </div>
  );
};

export default Dashboard;
