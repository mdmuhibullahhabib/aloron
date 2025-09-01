import React from "react";

const MyProgress = () => {
  // Fake progress data
  const progress = {
    completedLessons: 20,
    totalLessons: 30,
    streakDays: 7,
    weeklyStats: [
      { day: "Mon", lessons: 3 },
      { day: "Tue", lessons: 2 },
      { day: "Wed", lessons: 4 },
      { day: "Thu", lessons: 3 },
      { day: "Fri", lessons: 2 },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Progress</h2>
      <p>Completed Lessons: {progress.completedLessons}</p>
      <p>Total Lessons: {progress.totalLessons}</p>
      <p>Learning Streak: {progress.streakDays} days</p>

      <h3 className="mt-4 font-semibold">Weekly Stats</h3>
      <ul className="mt-2 pl-4 text-sm">
        {progress.weeklyStats.map((stat, index) => (
          <li key={index}>
            {stat.day}: {stat.lessons} lessons
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProgress;
