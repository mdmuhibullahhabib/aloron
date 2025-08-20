import React, { useState } from "react";

// =================== SUBJECTS ===================
const subjects = [
  { id: "physics", title: "পদার্থবিজ্ঞান" },
  { id: "chemistry", title: "রসায়ন" },
  { id: "higher-math", title: "উচ্চতর গণিত" },
  { id: "biology", title: "জীববিজ্ঞান" },
  { id: "bangla", title: "বাংলা" },
  { id: "english", title: "English" },
  { id: "ict", title: "তথ্য ও যোগাযোগ প্রযুক্তি" },
  { id: "gk", title: "সাধারণ জ্ঞান" },
];

// =================== PAPERS ===================
const subjectPapers = {
  physics: ["১ম পত্র", "২য় পত্র"],
  chemistry: ["১ম পত্র", "২য় পত্র"],
  "higher-math": ["১ম পত্র", "২য় পত্র"],
  biology: ["১ম পত্র", "২য় পত্র"],
  bangla: ["১ম পত্র", "২য় পত্র"],
  english: ["Grammar", "Literature"],
  ict: ["Single Book"],
  gk: ["General"],
};

// =================== CHAPTERS ===================
const subjectChapters = {
  physics: [
    "ভৌতজগত ও পরিমাপ",
    "ভেক্টর",
    "গতিবিদ্যা",
    "নিউটনিয়ান বলবিদ্যা",
    "কাজ, ক্ষমতা ও শক্তি",
    "মহাকর্ষ ও অভিকর্ষ",
  ],
  chemistry: [
    "অণু ও পরমাণু",
    "রাসায়নিক বিক্রিয়া",
    "পিরিয়ডিক টেবিল",
    "অ্যাসিড, বেস ও লবণ",
  ],
  biology: ["কোষ", "টিস্যু", "অঙ্গতন্ত্র", "পরিবেশবিদ্যা"],
  bangla: ["গদ্য", "পদ্য", "ব্যাকরণ"],
  english: ["Tense", "Article", "Narration", "Writing"],
  ict: ["ICT Basics", "Networking", "Programming"],
  gk: ["বাংলাদেশ", "আন্তর্জাতিক", "বিজ্ঞান", "ইতিহাস"],
};

// =================== MCQ (Sample only) ===================
const mcqQuestions = {
  physics: [
    {
      text: "নিউটনের প্রথম সূত্রকে কী বলা হয়?",
      options: ["জড়তার সূত্র", "গতি সূত্র", "বল সূত্র", "শক্তি সূত্র"],
      answer: "জড়তার সূত্র",
    },
  ],
  chemistry: [
    {
      text: "H2O এর রাসায়নিক নাম কী?",
      options: ["অক্সিজেন", "পানি", "হাইড্রোজেন", "গ্যাস"],
      answer: "পানি",
    },
  ],
};

// =================== COMPONENTS ===================
const PracticeDashboard = ({ onSubjectSelect }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">📚 সাবজেক্ট নির্বাচন করো</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {subjects.map((s) => (
        <div
          key={s.id}
          className="p-4 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-700"
          onClick={() => onSubjectSelect(s.id)}
        >
          {s.title}
        </div>
      ))}
    </div>
  </div>
);

const PapersPage = ({ subjectId, onGoBack, onPaperSelect }) => (
  <div className="p-6">
    <button onClick={onGoBack} className="mb-4 text-gray-400">
      ← Back
    </button>
    <h1 className="text-xl font-bold mb-4">
      {subjects.find((s) => s.id === subjectId)?.title}
    </h1>
    <div className="space-y-3">
      {(subjectPapers[subjectId] || []).map((paper, idx) => (
        <div
          key={idx}
          className="p-4 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-700"
          onClick={() => onPaperSelect(paper)}
        >
          {paper}
        </div>
      ))}
    </div>
  </div>
);

const ChaptersPage = ({ subjectId, paper, onGoBack, onChapterSelect }) => (
  <div className="p-6">
    <button onClick={onGoBack} className="mb-4 text-gray-400">
      ← Back
    </button>
    <h1 className="text-xl font-bold mb-4">
      {subjects.find((s) => s.id === subjectId)?.title} - {paper}
    </h1>
    <div className="space-y-3">
      {(subjectChapters[subjectId] || []).map((chapter, idx) => (
        <div
          key={idx}
          className="p-4 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-700"
          onClick={() => onChapterSelect(chapter)}
        >
          {chapter}
        </div>
      ))}
    </div>
  </div>
);

const MCQPage = ({ subjectId, chapter, onGoBack }) => {
  const questions = mcqQuestions[subjectId] || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const question = questions[current];

  return (
    <div className="p-6">
      <button onClick={onGoBack} className="mb-4 text-gray-400">
        ← Back
      </button>
      <h1 className="text-xl font-bold mb-4">
        {chapter} - MCQ Practice
      </h1>

      {question ? (
        <div className="space-y-4">
          <p className="text-lg">{question.text}</p>
          {question.options.map((opt, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg cursor-pointer ${
                selected === null
                  ? "bg-gray-800"
                  : opt === question.answer
                  ? "bg-green-600"
                  : opt === selected
                  ? "bg-red-600"
                  : "bg-gray-800"
              }`}
              onClick={() => setSelected(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      ) : (
        <p>কোন প্রশ্ন পাওয়া যায়নি</p>
      )}
    </div>
  );
};

// =================== MAIN APP ===================
export default function App() {
  const [page, setPage] = useState("dashboard");
  const [subject, setSubject] = useState(null);
  const [paper, setPaper] = useState(null);
  const [chapter, setChapter] = useState(null);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {page === "dashboard" && (
        <PracticeDashboard
          onSubjectSelect={(id) => {
            setSubject(id);
            setPage("papers");
          }}
        />
      )}

      {page === "papers" && (
        <PapersPage
          subjectId={subject}
          onGoBack={() => setPage("dashboard")}
          onPaperSelect={(p) => {
            setPaper(p);
            setPage("chapters");
          }}
        />
      )}

      {page === "chapters" && (
        <ChaptersPage
          subjectId={subject}
          paper={paper}
          onGoBack={() => setPage("papers")}
          onChapterSelect={(c) => {
            setChapter(c);
            setPage("mcq");
          }}
        />
      )}

      {page === "mcq" && (
        <MCQPage
          subjectId={subject}
          chapter={chapter}
          onGoBack={() => setPage("chapters")}
        />
      )}
    </div>
  );
}
