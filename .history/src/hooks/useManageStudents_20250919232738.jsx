// hooks/useManageStudents.js
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useManageStudents = () => {
  const axiosSecure = useAxiosSecure();

  const { data: students = [], refetch, isLoading } = useQuery({
    queryKey: ["manageStudents"],
    queryFn: async () => {
      const [subsRes, courseRes] = await Promise.all([
        axiosSecure.get("/subscriptions"), // Subscriptions API
        axiosSecure.get("/courses"),       // Courses API
      ]);

      const subscriptions = subsRes.data || [];
      const courses = courseRes.data || [];

      const mergedData = subscriptions.map((sub, index) => {
        const price =
          typeof sub.price === "object" && sub.price.$numberInt
            ? parseInt(sub.price.$numberInt)
            : sub.price || 0;

        const joinDate =
          sub.startDate?.$date?.$numberLong
            ? new Date(parseInt(sub.startDate.$date.$numberLong)).toISOString().split("T")[0]
            : "N/A";

        // Try to find course by matching planId with course._id OR fallback
        const matchedCourse =
          courses.find((c) => c._id?.$oid === sub.planId) || null;

        return {
          _id: sub._id?.$oid || String(index + 1),
          name: sub.userName || "Unknown", // If you store userName, replace here
          email: sub.userEmail || "N/A",
          course: matchedCourse?.title || sub.planId || "N/A",
          price: matchedCourse?.price?.$numberInt
            ? parseInt(matchedCourse.price.$numberInt)
            : price,
          joinDate,
          status: sub.status || "Inactive",
        };
      });

      return mergedData;
    },
  });

  return [students, refetch, isLoading];
};

export default useManageStudents;
