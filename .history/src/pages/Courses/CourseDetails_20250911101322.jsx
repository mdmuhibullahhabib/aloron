import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import { FaStar, FaClock, FaBook, FaUserTie } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [courses] = useCourses();

  // find the course by id
  const course = courses.find((c) => c._id === id);

  // fetch logged in user info from DB
  const { data: databaseUser = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosPublic.get(`/user?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // run only if email exists
  });

  const userId = databaseUser[0]?._id;

  if (!course) {
    return (
      <p className="text-center text-red-500 font-semibold mt-10">
        ⚠️ Course not found!
      </p>
    );
  }

  // Buy / Enroll handler
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
        status: "pending", // প্রথমে pending, পরে payment success হলে active
      };

      const res = await axiosPublic.post("/enrollments", enrollmentData);

      if (res.status === 200 || res.status === 201) {
        toast.success(`Successfully enrolled in ${course.title}`);
        // 🚀 এখানে navigate("/payment") বা SSLCommerz রিডাইরেক্ট করতে পারবেন
      } else {
        toast.error(res.data?.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to enroll!");
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
          {course.category && (
            <span className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              {course.category}
            </span>
          )}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBook className="text-green-500" />
              <span>{course.questionCount || 0} MCQs</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserTie className="text-purple-500" />
              <span>{course.instructor || "Unknown"}</span>
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
