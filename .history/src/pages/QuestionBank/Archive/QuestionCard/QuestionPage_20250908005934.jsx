// pages/QuestionPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const questionBank = {
  'bup-fst-admission-question': [
    { id: 1, question: 'What is the capital of Bangladesh?', options: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi'], answer: 'Dhaka' },
    // Add more questions as needed
  ],
  // Define other question sets similarly
};

const QuestionPage = () => {
  const { questionSet } = useParams();
  const questions = questionBank[questionSet] || [];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6">
        {questions.length > 0 ? `Questions for ${questionSet.replace(/-/g, ' ')}` : 'No questions available'}
      </h2>

      {questions.length > 0 ? (
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="p-6 border rounded-lg">
              <p className="font-semibold">{q.question}</p>
              <ul className="mt-2 space-y-2">
                {q.options.map((opt, idx) => (
                  <li key={idx} className="flex items-center">
                    <input type="radio" id={`q${q.id}-opt${idx}`} name={`q${q.id}`} value={opt} />
                    <label htmlFor={`q${q.id}-opt${idx}`} className="ml-2">{opt}</label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No questions found for this set.</p>
      )}
    </div>
  );
};

export default QuestionPage;
