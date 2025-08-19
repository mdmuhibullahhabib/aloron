import React from 'react';
import FilterSection from './FilterSection';
import QuestionCard from './QuestionCard';

const QuestionBank = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 max-w-6xl">
                <FilterSection />
            </div>
            <div className="mt-8 space-y-8">
                <QuestionCard />
            </div>
        </div>
    );
};




export default QuestionBank;

