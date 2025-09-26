import React, { useState } from "react"; // ✅ CHANGE: import useState
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { useLocation } from "react-router-dom";
import useDatabaseUser from "../../hooks/useDatabaseUser";

const Payment = () => {
  const [cart] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const location = useLocation();
  const { category, items } = location.state || {};
  const [databaseUser] = useDatabaseUser();

  // ✅ CHANGE: state for disabling the button
  const [isPayDisabled, setIsPayDisabled] = useState(false);

  // Calculate total price 
  const totalPrice =
    category === "shop"
      ? (items || cart).reduce((total, i) => total + (i.price || 0), 0)
      : category === "subscription"
        ? items?.price || 0
        : category === "course"
          ? items?.price || 0
          : 0;

  // Payment handler
  const handleCreatePayment = async () => {
    if (!user?.email) {
      console.error("User not logged in!");
      return;
    }

    // ✅ CHANGE: disable button for 10 seconds
    setIsPayDisabled(true);
    setTimeout(() => setIsPayDisabled(false), 10000); // 10 seconds

    try {
      const payment = {
        email: user.email,
        price: totalPrice,
        category,
        referenceId:
          category === "shop"
            ? null
            : category === "course"
              ? items?._id
              : items?.id,
        transactionId: "",
        date: new Date(),
        cartIds: category === "shop" ? cart.map((i) => i._id) : [],
        menuItemIds: category === "shop" ? cart.map((i) => i.menuId) : [],
        status: "pending",
        userId: databaseUser[0]?._id,
      };
      const response = await axiosSecure.post("/create-ssl-payment", payment);

      // Redirect to SSLCommerz if gateway URL exists
      if (response.data?.gatewayUrl) {
        window.location.replace(response.data.gatewayUrl);
      }
    } catch (error) {
      console.error("Payment initiation failed", error);
    }
  };

  return (
    <>
      <title>Payment - Aloron</title>

      <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 max-w-md mx-auto rounded-md shadow-md">
        <p className="text-xl font-medium">Payment Details</p>
        <p className="text-gray-400 mb-4">
          Complete your order by providing your payment details.
        </p>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={user?.email || ""}
            name="email"
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium">
            Amount: <span className="font-bold">{totalPrice} BDT</span>
          </p>
          <p className="text-gray-500 text-xs">
            Category: <span className="capitalize">{category}</span>
          </p>
        </div>

        <button
          onClick={handleCreatePayment}
          className={`w-full rounded-md px-6 py-3 font-medium text-white transition ${isPayDisabled
              ? "bg-gray-400 cursor-not-allowed" // ✅ CHANGE: disabled style
              : "bg-gray-900 hover:bg-gray-800"
            }`}
          disabled={isPayDisabled} // ✅ CHANGE: disable button
        >
          {isPayDisabled ? "Processing..." : "Pay Now"} {/* ✅ CHANGE: optional text change */}
        </button>
      </div>
    </>
  );
};

export default Payment;
