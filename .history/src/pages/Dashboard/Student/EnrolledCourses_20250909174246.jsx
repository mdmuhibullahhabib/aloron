import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCourses from "../../../hooks/useCourses";
import EnrollmentCard from "../../../pages/Dashboard/Student/component/EnrollmentCard";

const EnrolledCourses = () => {
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
       <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Enrolled Courses</h2>

      {mergedEnrollments.length === 0 ? (
        <p className="text-gray-600">You haven’t enrolled in any courses yet.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mergedEnrollments.map((enrollment) =>
            enrollment.course ? (
              <EnrollmentCard
                key={enrollment._id}
                course={enrollment.course}
                purchaseDate={enrollment.purchaseDate}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
