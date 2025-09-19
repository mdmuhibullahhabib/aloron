// hooks/useManageStudents.js
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useManageStudents = () => {
  const axiosSecure = useAxiosSecure();

  const { data: students = [], refetch, isLoading } = useQuery({
    queryKey: ["manageStudents"],
    queryFn: async () => {
      const [subsRes, enrollRes] = await Promise.all([
        axiosSecure.get("/subscriptions"),  // subscription API
        axiosSecure.get("/enrollments"),    // course enroll API
      ]);

      const subscriptions = subsRes.data || [];
      const enrollments = enrollRes.data || [];

      // Merge subscription + enrollment data
      const mergedData = subscriptions.map((sub, index) => {
        const enroll = enrollments.find((en) => en.userId === sub.userId);

        return {
          _id: sub._id || String(index + 1),
          name: sub.name || enroll?.name || "Unknown",
          email: sub.email || enroll?.email || "N/A",
          course: enroll?.courseTitle || "Not Enrolled",
          price: enroll?.price || sub.amount || 0,
          joinDate: sub.createdAt?.split("T")[0] || "N/A",
          status: sub.status || "Inactive",
        };
      });

      return mergedData;
    },
  });

  return [students, refetch, isLoading];
};

export default useManageStudents;
