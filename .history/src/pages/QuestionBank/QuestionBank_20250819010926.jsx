import React from 'react';

// Main QuestionBank component
const QuestionBank = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 max-w-6xl">
                <FilterSection />
                <QuestionSection />
            </div>
        </div>
    );
};

// Filter section component

// Question section component
const QuestionSection = () => {
    return (
        <div className="mt-8 space-y-8">
            <QuestionCard />
            {/* You can add more QuestionCard components here */}
        </div>
    );
};

// Single Question Card component
const QuestionCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                        1. একটি বস্তুকে টানা অথবা ঠেলার ক্ষেত্রে কোনটি সহজ? ব্যাখ্যা করো।
                    </h3>
                    <div className="space-y-2 text-gray-700">
                        <div className="flex items-center space-x-2">
                            <span className="font-bold">A</span>
                            <span>Done</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="font-bold">B</span>
                            <span>Skip</span>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 flex items-center space-x-2 text-sm text-gray-500">
                    <span>2.5</span>
                    <div className="flex space-x-1 ml-2">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Ac.QB</span>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">MCC</span>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">2024</span>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">Science</span>
                    </div>
                    <div className="flex space-x-1 text-lg">
                        <i className="far fa-heart cursor-pointer text-gray-400 hover:text-red-500 transition-colors duration-200"></i>
                        <i className="far fa-eye-slash cursor-pointer text-gray-400 hover:text-gray-600 transition-colors duration-200"></i>
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t pt-4 border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-sm">P-1</span>
                    <span className="text-gray-600 text-sm">P-12</span>
                    <span className="text-gray-600 text-sm">নন বোর্ড</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-inner">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        খ। একটি বস্তুকে টানা অথবা ঠেলার ক্ষেত্রে টানা সহজ।
                    </h4>
                    <img src="https://placehold.co/800x400/E5E7EB/4B5563?text=Image+Placeholder" 
                         alt="Diagram illustrating pushing vs pulling force"
                         className="rounded-lg shadow-md w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default QuestionBank;

