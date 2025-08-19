import React from "react";
import FilterSection from "./FilterSection";
import QuestionSection from "./QuestionSection";

// Fake data (move to a separate file if you want)
 const fakeQuestions = [
  {
    id: 1,
    questionText: "একটি বস্তুকে টানা অথবা ঠেলার ক্ষেত্রে কোনটি সহজ? ব্যাখ্যা করো।",
    options: ["টানা সহজ", "ঠেলা সহজ", "উভয়ই সমান সহজ", "কোনোটিই সহজ নয়"],
    correctAnswerIndex: 0,
    difficulty: "2.5",
    category: "Physics",
    subtopic: "Force and Motion",
    type: "MCQ",
    tags: ["Ac.QB", "MCC", "2024", "Science"],
    solution: {
      text: "খ। একটি বস্তুকে টানা অথবা ঠেলার ক্ষেত্রে টানা সহজ।",
      image: "https://placehold.co/800x400/E5E7EB/4B5563?text=Image+Placeholder",
      meta: ["P-1", "P-12", "নন বোর্ড"]
    }
  },
  {
    id: 2,
    questionText: "বাংলাদেশের জাতীয় পাখির নাম কী?",
    options: ["শালিক", "দোয়েল", "টিয়া", "কোকিল"],
    correctAnswerIndex: 1,
    difficulty: "1.0",
    category: "General Knowledge",
    subtopic: "Birds",
    type: "MCQ",
    tags: ["GK", "Primary", "2023", "Bangladesh"],
    solution: {
      text: "বাংলাদেশের জাতীয় পাখির নাম দোয়েল।",
      image: "https://placehold.co/800x400/E5E7EB/4B5563?text=Doel+Bird+Image",
      meta: ["General Knowledge", "Birds"]
    }
  }
  // Add more questions as needed...
];


const QuestionBank = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 max-w-6xl">
        <FilterSection />
        <QuestionSection questions={fakeQuestions} />
      </div>
    </div>
  );
};

export default QuestionBank;
