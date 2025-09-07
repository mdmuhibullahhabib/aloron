// components/QuestionCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({ title, subtitle, path, color }) => (
  <Link
    to={`/question-bank/${path}`}
    className="block p-6 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition transform"
    style={{ backgroundColor: color }}
  >
    <h3 className="text-white text-lg font-semibold">{title}</h3>
    <p className="text-white opacity-90">{subtitle}</p>
  </Link>
);

export default QuestionCard;
