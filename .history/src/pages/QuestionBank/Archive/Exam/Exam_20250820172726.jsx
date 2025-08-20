import React from 'react';
import './ExamComponent.css';

const questions = [
  {
    id: 1,
    text: "y=x², x-অক্ষ, x=1 এবং x = 5 দ্বারা আবদ্ধ ক্ষেত্রের ক্ষেত্রফল কোনটি?",
    options: ["124/3", "125/3", "100/9", "50/7"],
    marks: 1,
  },
  {
    id: 2,
    text: "3x + 2y + m = 0 রেখাটি x² + y² - 8x - 2y + 4 = 0 বৃত্তকে স্পর্শ করলে m এর মান কোনটি?",
    options: ["-1", "1", "0", "13"],
    marks: 1,
  },
  // Add more questions as needed
];

const ExamComponent = () => {
  return (
    <div className="exam-container">
      <div className="exam-header">
        <h1>BUP FST Admission 23-24</h1>
        <p>সময়: ১ ঘন্টা</p>
        <p>প্রতি প্রশ্নের ভুল উত্তর এর জন্য ০.২৫ নম্বর কাটা হবে</p>
      </div>

      <div className="exam-body">
        <h2 className="section-title">Mathematics (20)</h2>
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <div className="question-header">
              <span className="question-number">{question.id}.</span>
              <p className="question-text">{question.text}</p>
              <div className="question-meta">
                <span>{question.marks}</span>
                <span className="bookmark-icon">🔖</span>
              </div>
            </div>
            <div className="options-grid">
              {question.options.map((option, index) => (
                <button key={index} className="option-button">
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="exam-footer">
        <div className="footer-left">
          <span className="timer">59:15</span>
        </div>
        <div className="footer-right">
          <span className="progress">4 / 80</span>
          <button className="submit-button">সাবমিট</button>
        </div>
      </div>
    </div>
  );
};

export default Exam;