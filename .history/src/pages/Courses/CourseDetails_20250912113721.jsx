import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import {
  FaStar,
  FaClock,
  FaBook,
  FaUserTie,
  FaUserGraduate,
  FaLayerGroup,
} from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useDatabaseUser from "../../hooks/useDatabaseUser";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [courses] = useCourses();
  const [databaseUser] = useDatabaseUser

  const course = courses.find((c) => c._id === id);

  const { data: databaseUser = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosPublic.get(`/user?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const userId = databaseUser[0]?._id;

  if (!course) {
    return (
      <p className="text-center text-red-500 font-semibold mt-10">
        ⚠️ Course not found!
      </p>
    );
  }

  const handleBuy = async () => {
    try {
      if (!userId) {
        toast.error("Please login first!");
        navigate("/login");
        return;
      }

      const enrollmentData = {
        email: user?.email,
        userId: userId,
        courseId: course._id,
        purchaseDate: new Date().toISOString(),
        status: "pending",
      };

      const res = await axiosPublic.post("/enrollments", enrollmentData);

      if (res.status === 200 || res.status === 201) {
        toast.success(`Successfully enrolled in ${course.title}`);
      } else {
        toast.error(res.data?.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to enroll!");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Thumbnail */}
        <div className="relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-72 object-cover"
          />
          {course.category && (
            <span className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              {course.category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
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

            {/* Curriculum */}
            {course.curriculum && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FaBook className="text-green-500" /> Curriculum
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <ul className="space-y-2">
                    {course.curriculum.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between border-b pb-1 last:border-none"
                      >
                        <span>{item.chapter}</span>
                        <span className="text-gray-600">
                          {item.mcqs} MCQs
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Course Info</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <FaClock className="text-blue-500" /> Duration: {course.duration}
              </li>
              <li className="flex items-center gap-2">
                <FaUserGraduate className="text-indigo-500" /> Students:{" "}
                {course.students || 0}
              </li>
              <li className="flex items-center gap-2">
                <FaUserTie className="text-purple-500" /> Instructor:{" "}
                {course.instructor || "Unknown"}
              </li>
              <li className="flex items-center gap-2">
                <FaLayerGroup className="text-pink-500" /> Level:{" "}
                {course.level || "N/A"}
              </li>
              <li className="flex items-center gap-2 font-bold text-indigo-600">
                Price: ৳{course.price}
              </li>
            </ul>

            <button
              onClick={handleBuy}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
