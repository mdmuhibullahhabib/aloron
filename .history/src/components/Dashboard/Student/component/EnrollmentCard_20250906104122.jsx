import React from "react";
import { FaClock, FaUserTie, FaBookOpen, FaCalendarAlt } from "react-icons/fa";

const EnrollmentCard = ({ course, purchaseDate }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all rounded-2xl overflow-hidden">
      <figure>
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-5">
        {/* Title */}
        <h2 className="card-title text-lg font-bold">{course.title}</h2>
        <p className="text-sm text-gray-600">{course.subject}</p>

        {/* Info section */}
        <div className="mt-3 space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <FaUserTie className="text-indigo-500" />
            Instructor: <span className="font-medium">{course.instructor}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaBookOpen className="text-green-500" />
            Lessons/Questions:{" "}
            <span className="font-medium">{course.questionCount}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaClock className="text-orange-500" />
            Duration: <span className="font-medium">{course.duration}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-pink-500" />
            Bought on:{" "}
            <span className="font-medium">
              {new Date(purchaseDate).toLocaleDateString()}
            </span>
          </p>
        </div>

        {/* Price & Rating */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-indigo-600">
            ৳{course.price}
          </span>
          <span className="badge badge-secondary text-sm">
            ⭐ {course.rating}
          </span>
        </div>

        {/* Buttons */}
        <div className="card-actions mt-5 flex gap-2">
          <button className="btn btn-primary w-full">Start Course</button>
          <button className="btn btn-outline w-full">Details</button>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCard;
