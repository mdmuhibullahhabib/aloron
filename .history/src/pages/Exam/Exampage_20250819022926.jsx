import React, { useState } from 'react'
import Dashboard from './Dashboard';
import QuestionCard from './QuestionCard';
const Exampage = () => {
    // Mock data for the exam questions. In a real app, this would come from an API.
    const questions = [
        {
            id: 1,
            text: "বাংলাদেশের জাতীয় পাখির নাম কী?",
            options: ["শালিক", "কোকিল", "দোয়েল", "কাঠঠোকরা"],
            correctAnswer: "দোয়েল"
        },
        {
            id: 2,
            text: "কম্পিউটারের প্রধান মেমরি কোনটি?",
            options: ["RAM", "SSD", "HDD", "CD-ROM"],
            correctAnswer: "RAM"
        },
        {
            id: 3,
            text: "কোন ধাতু তরল অবস্থায় পাওয়া যায়?",
            options: ["সোনা", "রূপা", "পারদ", "লোহা"],
            correctAnswer: "পারদ"
        },
        {
            id: 4,
            text: "কোন শহরকে 'মসজিদের শহর' বলা হয়?",
            options: ["ঢাকা", "কলকাতা", "দিল্লি", "লাহোর"],
            correctAnswer: "ঢাকা"
        },
        {
            id: 5,
            text: "আন্তর্জাতিক মাতৃভাষা দিবস কবে?",
            options: ["14 ফেব্রুয়ারি", "21 ফেব্রুয়ারি", "26 মার্চ", "16 ডিসেম্বর"],
            correctAnswer: "21 ফেব্রুয়ারি"
        }
    ];

    // State variables to manage the exam flow
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));
    const [isExamFinished, setIsExamFinished] = useState(false);

    // Handles the user selecting an answer for the current question
    const handleAnswerSelect = (option) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = option;
        setUserAnswers(newAnswers);
    };

    // Moves to the next question if it exists
    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Moves to the previous question
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Submits the exam and shows the dashboard
    const handleSubmit = () => {
        setIsExamFinished(true);
    };

    // Reset the exam state to start over
    const handleRetakeExam = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers(new Array(questions.length).fill(null));
        setIsExamFinished(false);
    };

    // If the exam is finished, show the dashboard
    if (isExamFinished) {
        return <Dashboard questions={questions} userAnswers={userAnswers} onRetake={handleRetakeExam} />;
    }

    // Otherwise, show the question interface
    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Exam
                </h2>
                <div className="mb-4 text-center text-sm text-gray-500">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </div>
                
                {/* Question Card component to display the current question */}
                <QuestionCard
                    question={currentQuestion}
                    onAnswerSelect={handleAnswerSelect}
                    selectedAnswer={userAnswers[currentQuestionIndex]}
                />

                {/* Navigation and Submission Buttons */}
                <div className="flex justify-between mt-8">
                    <button 
                        onClick={handlePrevious} 
                        disabled={currentQuestionIndex === 0}
                        className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-400 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    {isLastQuestion ? (
                        <button
                            onClick={handleSubmit}
                            className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
                        >
                            Submit
                        </button>
                    ) : (
                        <button 
                            onClick={handleNext} 
                            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Exampage