import React from 'react';

// Main QuestionBank component
const QuestionBank = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 max-w-6xl">
                <FilterSection />
                <QuestionSection />
            </div>
                    <div className="mt-8 space-y-8">
            <QuestionCard />
        </div>
        </div>
    );
};




export default QuestionBank;

