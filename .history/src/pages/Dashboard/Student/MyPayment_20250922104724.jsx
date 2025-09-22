import React from "react";
import { useQuery } from "@tanstack/react-query";
import useDatabaseUser from "../../../hooks/useDatabaseUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyPayment = () => {
  const axiosSecure = useAxiosSecure();
  const [databaseUser] = useDatabaseUser();

  const userId = databaseUser[0]?._id;

  // React Query দিয়ে subscription ডাটা লোড
  const { data: payments = [], refetch, isLoading } = useQuery({
    queryKey: ["userPayments", userId],
    queryFn: async () => {
      if (!userId) return [];
      const res = await axiosSecure.get(`/payment?id=${userId}`);
      return res.data;
    },
    enabled: !!userId,
  });

  console.log(userId)
  console.log(userId)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 animate-pulse">Loading payments...</p>
      </div>
    );
  }

  if (!payments || payments.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">আপনার কোনো Payment পাওয়া যায়নি।</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        💳 My Payments
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="table-auto w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Transaction ID</th>
              <th className="py-3 px-4">Course</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr
                key={payment._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-mono text-sm text-blue-600">
                  {payment.transactionId}
                </td>
                <td className="py-3 px-4">{payment.courseName}</td>
                <td className="py-3 px-4 font-semibold text-gray-800">
                  {payment.price || payment.amount} ৳
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      payment.status?.toLowerCase() === "success"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : payment.status?.toLowerCase() === "pending"
                        ? "bg-yellow-100 text-yellow-700 border border-yellow-300"
                        : "bg-red-100 text-red-700 border border-red-300"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {payment.date
                    ? new Date(payment.date).toLocaleDateString("bn-BD")
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPayment;
