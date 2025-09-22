import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Dashboard = ({ questions, userAnswers, onRetake }) => {
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === questions[index].correctAnswer
    );
    const score = correctAnswers.length;
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;

    return (
        <div className=" min-h-screen flex items-center justify-center p-4">
            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-8 md:p-12">
                <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
                    🏆 Exam Results
                </h2>

                {/* Top Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-indigo-500 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                        <p className="text-sm font-medium uppercase tracking-wide">Your Score</p>
                        <p className="text-4xl font-bold mt-2">{score} / {totalQuestions}</p>
                        <div className="w-full bg-indigo-300 rounded-full h-2 mt-4">
                            <div
                                className="bg-white h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(score / totalQuestions) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                        <p className="text-sm font-medium uppercase tracking-wide">Percentage</p>
                        <p className="text-4xl font-bold mt-2">{percentage.toFixed(0)}%</p>
                        <div className="w-full bg-yellow-300 rounded-full h-2 mt-4">
                            <div
                                className="bg-white h-2 rounded-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                        <p className="text-sm font-medium uppercase tracking-wide">Correct Answers</p>
                        <p className="text-4xl font-bold mt-2">{score}</p>
                    </div>
                </div>

                {/* Detailed Question Breakdown */}
                <div className="space-y-4">
                    {questions.map((q, index) => {
                        const isCorrect = userAnswers[index] === q.correctAnswer;
                        return (
                            <div
                                key={q.id}
                                className={`p-5 rounded-xl border-l-4 shadow-sm transition hover:shadow-md 
                                ${isCorrect ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}
                            >
                                <p className="font-semibold text-gray-800 mb-2">{q.text}</p>
                                <div className="flex justify-between items-center text-sm text-gray-700">
                                    <p>
                                        Your Answer:{" "}
                                        <span className="font-medium">{userAnswers[index] || 'Not Answered'}</span>
                                    </p>
                                    {isCorrect ? (
                                        <FaCheckCircle className="text-green-600 text-lg" />
                                    ) : (
                                        <FaTimesCircle className="text-red-600 text-lg" />
                                    )}
                                </div>
                                {!isCorrect && (
                                    <p className="text-sm text-red-700 mt-1">
                                        Correct Answer: <span className="font-medium">{q.correctAnswer}</span>
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Retake Button */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={onRetake}
                        className="bg-indigo-600 text-white font-semibold py-3 px-10 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
                    >
                        🔄 Retake Exam
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
