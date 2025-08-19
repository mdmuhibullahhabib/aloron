import React from 'react'

const Dashboard = ({ questions, userAnswers, onRetake }) => {
    // Calculate the score and results
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer);
    const score = correctAnswers.length;
    const totalQuestions = questions.length;
    const incorrectAnswers = totalQuestions - score;
    const percentage = (score / totalQuestions) * 100;

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                    Exam Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mb-8">
                    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                        <p className="text-sm font-medium">Your Score</p>
                        <p className="text-4xl font-extrabold">{score} / {totalQuestions}</p>
                    </div>
                    <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
                        <p className="text-sm font-medium">Percentage</p>
                        <p className="text-4xl font-extrabold">{percentage.toFixed(0)}%</p>
                    </div>
                </div>

                {/* Detailed results breakdown */}
                <div className="space-y-4">
                    {questions.map((q, index) => {
                        const isCorrect = userAnswers[index] === q.correctAnswer;
                        const resultClass = isCorrect ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400';
                        const resultIcon = isCorrect ? 'fas fa-check-circle text-green-600' : 'fas fa-times-circle text-red-600';

                        return (
                            <div key={q.id} className={`p-4 rounded-lg border-l-4 ${resultClass} shadow-sm`}>
                                <p className="font-semibold text-gray-800 mb-2">{q.text}</p>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p>Your Answer: <span className="font-medium">{userAnswers[index] || 'Not Answered'}</span></p>
                                    <i className={resultIcon}></i>
                                </div>
                                {!isCorrect && (
                                    <p className="text-sm text-red-600 mt-1">Correct Answer: <span className="font-medium">{q.correctAnswer}</span></p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Retake button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={onRetake}
                        className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        Retake Exam
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard