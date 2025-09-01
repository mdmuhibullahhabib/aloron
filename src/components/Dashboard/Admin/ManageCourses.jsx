import React from "react";

const ManageCourses = () => {
  // Fake courses data
  const courses = [
    { id: 1, title: "React for Beginners", instructor: "Bob Smith", enrolled: 45 },
    { id: 2, title: "Node.js Advanced", instructor: "Bob Smith", enrolled: 30 },
    { id: 3, title: "Python for Data Science", instructor: "Carol White", enrolled: 25 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>
      <table className="table-auto w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Course Title</th>
            <th className="px-4 py-2">Instructor</th>
            <th className="px-4 py-2">Enrolled Students</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b">
              <td className="px-4 py-2">{course.id}</td>
              <td className="px-4 py-2">{course.title}</td>
              <td className="px-4 py-2">{course.instructor}</td>
              <td className="px-4 py-2">{course.enrolled}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourses;
