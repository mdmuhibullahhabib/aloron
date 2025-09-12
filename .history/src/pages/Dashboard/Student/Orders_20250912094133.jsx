import React, { useState } from "react";
import { FaBox, FaTruck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const Orders = () => {
  const [orders] = useState([
    {
      id: "ORD12345",
      product: "Physics Book",
      status: "Shipped",
      estimatedDelivery: "2025-09-15",
      payment: "Paid",
    },
    {
      id: "ORD12346",
      product: "Math Guide",
      status: "Delivered",
      estimatedDelivery: "2025-09-05",
      payment: "Paid",
    },
    {
      id: "ORD12347",
      product: "Chemistry Notes",
      status: "Pending",
      estimatedDelivery: "2025-09-18",
      payment: "Unpaid",
    },
  ]);

  // Progress steps
  const steps = ["Pending", "Shipped", "Delivered"];

    const axiosSecure = useAxiosSecure();
  const { user } = useAuth()

    const { data: userOrders = [], refetch } = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order?email=${user.email}`)
      return res.data;
    }
  })
  clg

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        📦 অর্ডার ট্র্যাকিং
      </h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            {/* Order Info */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  অর্ডার আইডি: {order.id}
                </p>
                <p className="text-gray-600">পণ্য: {order.product}</p>
              </div>
              <div className="mt-2 sm:mt-0 text-sm">
                <span
                  className={`px-3 py-1 rounded-full font-medium ${
                    order.payment === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.payment}
                </span>
              </div>
            </div>

            {/* Tracking Steps */}
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => {
                const isCompleted =
                  steps.indexOf(order.status) >= index ||
                  order.status === "Delivered";
                return (
                  <div
                    key={step}
                    className={`flex-1 flex flex-col items-center ${
                      index !== steps.length - 1 ? "relative" : ""
                    }`}
                  >
                    {/* Line between steps */}
                    {index !== steps.length - 1 && (
                      <div
                        className={`absolute top-3 left-1/2 w-full h-1 ${
                          isCompleted ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                    )}
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full z-10 ${
                        isCompleted ? "bg-green-500 text-white" : "bg-gray-300"
                      }`}
                    >
                      {isCompleted ? (
                        <FaCheckCircle className="text-lg" />
                      ) : (
                        <FaTimesCircle className="text-lg" />
                      )}
                    </div>
                    <p className="text-xs mt-2">{step}</p>
                  </div>
                );
              })}
            </div>

            {/* Delivery Date */}
            <p className="text-sm text-gray-600">
              আনুমানিক ডেলিভারি:{" "}
              <span className="font-medium">{order.estimatedDelivery}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
