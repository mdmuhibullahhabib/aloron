import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import { FaStar, FaClock, FaBook, FaUserTie } from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courses] = useCourses();

  const course = courses.find((c) => c._id === id);

  if (!course) {
    return <p className="text-center mt-10">Course not found!</p>;
  }

  // CHANGE: Buy ফাংশন আপডেট করা হয়েছে যাতে ডাটা MongoDB তে পোস্ট হয়
  const handleBuy = async () => {
    try {
      const userId = localStorage.getItem("userId"); // CHANGE: ইউজার আইডি কোথা থেকে নেবে সেটি ঠিক করো (JWT থেকেও নিতে পারো)
      if (!userId) {
        alert("Please login first!");
        return;
      }

      const enrollmentData = {
        userId: userId,
        courseId: course._id,
        purchaseDate: new Date().toISOString(),
        status: "active"
      };

      // CHANGE: API এ POST রিকোয়েস্ট
      const res = await fetch("http://localhost:5000/api/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(enrollmentData)
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Successfully enrolled in ${course.title}`);
        navigate("/dashboard"); // বা ইউজারের My Courses পেজে
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to enroll!");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Thumbnail */}
        <div className="relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-72 object-cover"
          />
          <span className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            {course.category}
          </span>
        </div>

        {/* Details */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {course.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(course.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              {course.rating} / 5
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {course.description}
          </p>

          {/* Extra Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBook className="text-green-500" />
              <span>{course.questionCount} MCQs</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserTie className="text-purple-500" />
              <span>{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-indigo-600 text-lg">
                ৳{course.price}
              </span>
            </div>
          </div>

          {/* Buy Button */}
          <button
            onClick={handleBuy}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
