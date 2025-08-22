import React from "react";

const mockExamData = [
  {
    title: "গণিত",
    duration: 25,
    topics: ["পরিসংখ্যান", "জ্যামিতি", "বীজগণিত"],
    attempt: true,
  },
  {
    title: "বিজ্ঞান",
    duration: 30,
    topics: ["রসায়ন", "পদার্থবিজ্ঞান", "জীববিজ্ঞান"],
    attempt: false,
  },
];

const studentProgress = [
  { subject: "গণিত", progress: 85 },
  { subject: "বিজ্ঞান", progress: 70 },
  { subject: "ইংরেজি", progress: 60 },
  { subject: "সামাজিক বিজ্ঞান", progress: 90 },
];

const ExamDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row gap-8 p-4 md:p-16">
      {/* Mock Exam Section */}
      <div className="flex-1 bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">মক পরীক্ষা</h2>
        <p className="text-gray-300 mb-6">
          নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরন নির্বাচন করে মক
          পরীক্ষা দেওয়ার সুযোগ।
        </p>
        {mockExamData.map((exam, idx) => (
          <div
            key={idx}
            className="bg-gray-700 rounded-lg p-4 mb-4 shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{exam.title}</h3>
              <span className="text-sm text-gray-300">{exam.duration} মিনিট</span>
            </div>
            <p className="text-gray-400 mb-2">
              টপিক: {exam.topics.join(", ")}
            </p>
            <div className="flex justify-between items-center">
              <span className={`text-sm ${exam.attempt ? "text-green-400" : "text-red-400"}`}>
                {exam.attempt ? "প্রস্তুত" : "নিষ্ক্রিয়"}
              </span>
              <button className="bg-purple-600 px-4 py-1 rounded hover:bg-purple-700 transition">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Result Analysis Section */}
      <div className="flex-1 bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">ফলাফল বিশ্লেষণ</h2>
        <p className="text-gray-300 mb-6">
          নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরন নির্বাচন করে মক
          পরীক্ষা দেওয়ার সুযোগ।
        </p>
        {/* Profile */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Student"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="font-semibold">Tanzila Islam</h3>
          <p className="text-gray-400 text-sm">Pangsha College</p>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          {studentProgress.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span>{item.subject}</span>
                <span>{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full">
                <div
                  className="bg-yellow-400 h-3 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;

