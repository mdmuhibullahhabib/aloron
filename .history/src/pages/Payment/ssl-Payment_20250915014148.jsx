import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Payment = ({ category, item }) => {
  /**
   * Props:
   * category: "shop" | "course" | "subscription"
   * item: 
   *    - shop: { price, _id, menuId }
   *    - course: { price, _id }
   *    - subscription: { price, planId }
   */

  const [cart] = useCart(); // only used for shop
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Calculate price
  const totalPrice =
    category === "shop"
      ? cart.reduce((total, item) => total + item.price, 0)
      : item?.price;

  const handleCreatePayment = async () => {
    try {
      const payment = {
        email: user.email,
        price: totalPrice,
        category,
        referenceId:
          category === "shop"
            ? null
            : category === "course"
            ? item._id
            : item.planId,
        transactionId: "",
        date: new Date(),
        cartIds: category === "shop" ? cart.map((i) => i._id) : [],
        menuItemIds: category === "shop" ? cart.map((i) => i.menuId) : [],
        status: "pending",
        userId: user._id,
      };

      const response = await axiosSecure.post("/create-ssl-payment", payment);

      if (response.data?.gatewayUrl) {
        // redirect user to SSLCommerz payment gateway
        window.location.replace(response.data.gatewayUrl);
      }
    } catch (error) {
      console.error("Payment initiation failed", error);
    }
  };

  return (
    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 max-w-md mx-auto">
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
          value={user?.email}
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
        className="w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800 transition"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
