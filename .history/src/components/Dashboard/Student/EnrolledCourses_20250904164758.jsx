import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const EnrolledCourses = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const {user} = useAuth();

    const { data: enrolledCourses = [] } = useQuery({
    queryKey: ['enrolled', user?.email],
    queryFn: async () => {
      // if (!user?.email) return [];
      const res = await axiosPublic.get(`/enrolled?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(user?.email)
  console.log(enrolledCourse)

  // Fake courses data
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      progress: "70%",
      lessons: [
        { id: 101, title: "Introduction to React", status: "Completed" },
        { id: 102, title: "JSX & Components", status: "In Progress" },
        { id: 103, title: "State & Props", status: "Pending" },
      ],
    },
    {
      id: 2,
      title: "Node.js Advanced",
      progress: "45%",
      lessons: [
        { id: 201, title: "Async Patterns", status: "Completed" },
        { id: 202, title: "Express Middleware", status: "In Progress" },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      {courses.map((course) => (
        <div key={course.id} className="bg-white p-4 rounded-lg shadow mb-4">
          <button
            className="flex justify-between w-full items-center text-left"
            onClick={() =>
              setExpandedCourse(expandedCourse === course.id ? null : course.id)
            }
          >
            <div>
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-gray-600 text-sm">Progress: {course.progress}</p>
            </div>
            <FaChevronDown
              className={`transition-transform ${
                expandedCourse === course.id ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedCourse === course.id && (
            <ul className="mt-3 pl-4 text-sm text-gray-700">
              {course.lessons.map((lesson) => (
                <li key={lesson.id} className="border-b py-1">
                  {lesson.title} - {lesson.status}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default EnrolledCourses;
