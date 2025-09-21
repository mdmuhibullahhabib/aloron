// src/mocktest/data.js
export const subjects = [
  { name: 'বাংলা', id: 'bangla' },
  { name: 'ইংলিশ', id: 'english' },
  { name: 'সাধারণ জ্ঞান', id: 'general_knowledge' },
  { name: 'পদার্থবিজ্ঞান', id: 'physics' },
  { name: 'রসায়ন', id: 'chemistry' },
  { name: 'গণিত', id: 'math' },
  { name: 'জীববিজ্ঞান', id: 'biology' },
  { name: 'উচ্চতর গণিত', id: 'higher_math' },
];

export const categories = [
  { name: 'Engineering', id: 'engineering' },
  { name: 'Varsity', id: 'varsity' },
  { name: 'Medical', id: 'medical' },
  { name: 'Academic', id: 'academic' },
  { name: 'Main Book', id: 'main_book' },
];

export const presetExams = ['SUST A', 'SUST B', 'BUET A', 'BUP FSSS/FASS', 'RU A', 'KUET', 'RUET', 'CUET'];

export const dummyQuestions = [
  { id: 1, text: 'ক্রোমিয়ামের ইলেকট্রন বিন্যাস-', options: ['3d⁵4s¹','3d⁴4s²','3d⁵4s²','3d⁴4s¹'], correctAnswer: '3d⁵4s¹' },
  { id: 2, text: 'P মৌলের পারমাণবিক ভর 31 এবং পারমাণবিক সংখ্যা 15 হলে নিউট্রন সংখ্যা কতটি?', options: ['31','16','33','15'], correctAnswer: '16' },
  { id: 3, text: '¹²₆C + ¹₁H → ¹³₇N + 🞎, 🞎 চিহ্নিত স্থানে কী হবে?', options: ['¹₀H','³₁H','¹₁H','¹₀n'], correctAnswer: '¹₀n' },
];

export const dummyChapters = [
  { name: 'রসায়ন', chapters: ['পর্যায় সারণী', 'জৈব রসায়ন', 'রাসায়নিক বন্ধন', 'অম্ল ও ক্ষার', 'রাসায়নিক বিক্রিয়া'] },
  { name: 'পদার্থবিজ্ঞান', chapters: ['বল', 'কাজ, ক্ষমতা ও শক্তি', 'আলোর প্রতিফলন', 'শব্দ', 'তাপ'] },
  { name: 'জীববিজ্ঞান', chapters: ['কোষ', 'টিস্যু', 'প্রাণীবিজ্ঞান', 'উদ্ভিদবিজ্ঞান'] },
];
