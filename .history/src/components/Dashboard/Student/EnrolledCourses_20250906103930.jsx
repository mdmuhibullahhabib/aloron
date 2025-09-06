import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCourses from "../../../hooks/useCourses";

const EnrolledCourses = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [courses, refetch] = useCourses();
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth();

    const { data: enrolledCourse = [] } = useQuery({
    queryKey: ['enrolled', user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/enrolled?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(enrolledCourse)

    // Merge enrolled data with course details
  const mergedEnrollments = enrolledCourse.map((enrollment) => {
    const course = courses.find(
      (c) => c._id === enrollment.courseId || c._id?.$oid === enrollment.courseId
    );
    return { ...enrollment, course };
  });


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>

    </div>
  );
};

export default EnrolledCourses;
