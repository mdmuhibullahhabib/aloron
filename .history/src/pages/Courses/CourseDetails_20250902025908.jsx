import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "./CoursesHSC";
import { FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <p className="text-center mt-10">Course not found!</p>;
  }

  const handleBuy = () => {
    alert(`You bought ${course.title} for ${course.price}`);
    navigate("/"); // navigate to home or dashboard
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
          <div className="flex items-center gap-1 mb-4">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-gray-300" />
            <span className="ml-2 text-sm text-gray-500">4.0 Rating</span>
          </div>
          <p className="text-gray-700 mb-4">{course.description}</p>

          <p className="mb-2">
            <strong>Price:</strong> {course.price}
          </p>
          <p className="mb-2">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="mb-2">
            <strong>Lessons:</strong> {course.lessons}
          </p>
          <p className="mb-2">
            <strong>Author:</strong> {course.author}
          </p>

          <div className="mb-4">
            <strong>Syllabus:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              {course.syllabus.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleBuy}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
