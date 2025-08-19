import React from 'react'

const QuestionSolution = ({ question, showAnswer }) => {
    return (
        showAnswer && (
            <div className="mt-6 border-t pt-4 border-gray-200 transition-opacity duration-500">
                <div className="flex justify-between items-center mb-4">
                    {question.solution.meta.map((meta, index) => (
                        <span key={index} className="text-gray-600 text-sm">{meta}</span>
                    ))}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-inner">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        {question.solution.text}
                    </h4>
                    <img src={question.solution.image} 
                         alt="Question illustration"
                         className="rounded-lg shadow-md w-full h-auto" />
                </div>
            </div>
        )
    );
};
export default QuestionSolution