import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaClock, FaUserGraduate, FaUserTie } from "react-icons/fa";
import useCourses from "../../hooks/useCourses";

const Courses = () => {
  const [courses] = useCourses();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* ✅ Dark mode text */}
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"> 
        🎓 Popular MCQ Courses for HSC & Admission
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/courses/${course._id}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden 
                       transform transition duration-500 hover:scale-105 hover:shadow-2xl block"
            // ✅ Dark background handled
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              {course.category && (
                <span className="absolute top-3 left-3 bg-green-500 text-white 
                                 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {course.category}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col justify-between h-[250px]">
              {/* ✅ Dark text */}
              <h3 className="text-lg font-semibold mb-2 line-clamp-1 text-gray-900 dark:text-white">
                {course.title}
              </h3>
              {/* ✅ Dark text */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {course.description}
              </p>

              {/* Extra Info */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <FaClock className="text-blue-500" /> {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <FaUserGraduate className="text-indigo-500" />{" "}
                  {course.students || 0}+
                </div>
                <div className="flex items-center gap-1 col-span-2">
                  <FaUserTie className="text-purple-500" />{" "}
                  {course.instructor || "Unknown"}
                </div>
              </div>

              {/* Rating + Price */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(course.rating)
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600" // ✅ Dark mode fix
                      }
                    />
                  ))}
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    ({course.rating})
                  </span>
                </div>
                {/* ✅ Dark text fix */}
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  ৳{course.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Courses;
