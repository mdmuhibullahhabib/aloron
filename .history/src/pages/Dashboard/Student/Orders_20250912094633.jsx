import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const Orders = () => {
  const steps = ["pending", "shipped", "delivered"];

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: userOrders = [], refetch } = useQuery({
    queryKey: ["userOrders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        📦 অর্ডার ট্র্যাকিং
      </h2>

      <div className="space-y-6">
        {userOrders.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            {/* Order Info */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  অর্ডার আইডি: {order._id}
                </p>
                <p className="text-gray-600">
                  নাম: {order.billingDetails.fullName}
                </p>
                <p className="text-gray-600">
                  ফোন: {order.billingDetails.phone}
                </p>
                <p className="text-gray-600">
                  ইমেইল: {order.billingDetails.email}
                </p>
                <p className="text-gray-600">
                  ঠিকানা: {order.billingDetails.address}, {order.billingDetails.city}
                </p>
              </div>
              <div className="mt-2 sm:mt-0 text-sm">
                <span
                  className={`px-3 py-1 rounded-full font-medium ${
                    order.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "shipped"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {order.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Items */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">পণ্যসমূহ:</h4>
              <ul className="list-disc list-inside">
                {order.items.map((item, index) => (
                  <li key={index} className="text-gray-600">
                    {item.name} - {item.quantity} × ৳{item.price}
                  </li>
                ))}
              </ul>
            </div>

            {/* Totals */}
            <div className="flex justify-between text-gray-700 mb-4">
              <p>Subtotal: ৳{order.subtotal}</p>
              <p>Shipping: ৳{order.shippingCost}</p>
              <p className="font-semibold">Total: ৳{order.total}</p>
            </div>

            {/* Tracking Steps */}
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => {
                const isCompleted =
                  steps.indexOf(order.status.toLowerCase()) >= index;
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
                    <p className="text-xs mt-2">{step.charAt(0).toUpperCase() + step.slice(1)}</p>
                  </div>
                );
              })}
            </div>

            {/* Ordered At */}
            <p className="text-sm text-gray-600">
              অর্ডার করা হয়েছে:{" "}
              <span className="font-medium">
                {new Date(order.orderedAt).toLocaleDateString("bn-BD", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
