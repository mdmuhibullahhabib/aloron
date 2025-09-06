import React from 'react'

const QuestionCard = ({ question, onAnswerSelect, selectedAnswer }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
                {question.text}
            </h3>
            <div className="space-y-4">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onAnswerSelect(option)}
                        className={`w-full text-left py-3 px-4 rounded-lg border transition duration-300
                            ${selectedAnswer === option
                                ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard