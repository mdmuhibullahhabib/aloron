import React from "react";

const QuestionHeader = ({ question, showAnswer }) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div className="flex-1">
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          {question.id}. {question.questionText}
        </h3>
        <div className="space-y-2 text-gray-700">
          {question.options.map((option, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 transition-colors duration-300 
                ${showAnswer && index === question.correctAnswerIndex ? 'text-green-600 font-bold' : ''}`}
            >
              <span className="font-bold">{String.fromCharCode(65 + index)}</span>
              <span>{option}</span>
              {showAnswer && index === question.correctAnswerIndex && (
                <i className="fas fa-check-circle text-green-500 ml-2"></i>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 flex items-center space-x-2 text-sm text-gray-500">
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
          {question.category}
        </span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
          {question.subtopic}
        </span>
        <div className="flex space-x-1 ml-2">
          {question.tags.map((tag, index) => (
            <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionHeader;
