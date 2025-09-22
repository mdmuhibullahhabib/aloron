import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useManageStudents = () => {
  const axiosSecure = useAxiosSecure();

  const { data: students = [], refetch, isLoading } = useQuery({
    queryKey: ["manageStudents"],
    queryFn: async () => {
      // তিনটা API কল করছি
      const [subsRes, courseRes, userRes] = await Promise.all([
        axiosSecure.get("/subscriptions"),
        axiosSecure.get("/courses"),
        axiosSecure.get("/users"),
      ]);

      const subscriptions = subsRes.data || [];
      const courses = courseRes.data || [];
      const users = userRes.data || [];

      // merge করে student data বানানো
      return subscriptions.map((sub) => {
        const user = users.find((u) => u._id === sub.userId);
        const matchedCourse = courses.find((c) => c._id?.$oid === sub.planId);

        const price =
          typeof sub.price === "object" && sub.price.$numberInt
            ? parseInt(sub.price.$numberInt)
            : sub.price || 0;

        const joinDate =
          sub.startDate?.$date?.$numberLong
            ? new Date(parseInt(sub.startDate.$date.$numberLong))
                .toISOString()
                .split("T")[0]
            : "N/A";

        return {
          _id: sub._id?.$oid,
          name: user?.name || "Unknown", // 🔥 এখন নাম আসবে users collection থেকে
          email: sub.userEmail || "N/A",
          course: matchedCourse?.title || sub.planId || "N/A",
          price: matchedCourse?.price?.$numberInt
            ? parseInt(matchedCourse.price.$numberInt)
            : price,
          joinDate,
          status: sub.status || "pending",
        };
      });
    },
  });

  return [students, refetch, isLoading];
};

export default useManageStudents;
