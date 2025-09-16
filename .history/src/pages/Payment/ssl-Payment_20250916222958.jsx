// import React from "react";
// import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useCart from "../../hooks/useCart";

// const Payment = () => {
//   const [cart, refetch] = useCart();
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();
//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);

//   console.log(totalPrice, user?.email);

//   const handleCreatePayment = async () => {
//     try {
//       const payment = {
//         email: user.email,
//         price: totalPrice,
//         transactionId: "",
//         date: new Date(),
//         cartIds: cart.map((item) => item._id),
//         menuItemIds: cart.map((item) => item.menuId),
//         status: "pending",
//       };

//       const response = await axiosSecure.post("/create-ssl-payment", payment);

//       console.log("response", response.data);

//       if (response.data?.gatewayUrl) {
//         // redirect user to SSLCommerz payment gateway
//         window.location.replace(response.data.gatewayUrl);
//       }
//     } catch (error) {
//       console.error("Payment initiation failed", error);
//     }
//   };

//   return (
//     <div>
//       <div className="">
//         <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
//           <p className="text-xl font-medium">Payment Details</p>
//           <p className="text-gray-400">
//             Complete your order by providing your payment details.
//           </p>

//           <div className="">
//             <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 id="email"
//                 value={user?.email}
//                 name="email"
//                 className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
//                 placeholder="your.email@gmail.com"
//                 readOnly
//               />
//             </div>
//           </div>

//           {/* Only one button needed */}
//           <button
//             onClick={handleCreatePayment}
//             className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
//           >
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { useLocation } from "react-router-dom";

const Payment = () => {

  const [cart] = useCart(); // only used for shop
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const location = useLocation();
  const { category, items } = location.state || {};

  console.log("categiry", category)
  console.log("items", items)

  // Calculate total price 
  const totalPrice =
    category === "shop"
      ? (items || cart).reduce((total, i) => total + (i.price || 0), 0)
      : category === "subscription"
        ? items?.price || 0
        : category === "course"
          ? items?.price || 0
          : 0;

  console.log(totalPrice)

  // Payment handler
  const handleCreatePayment = async () => {
    if (!user?.email) {
      console.error("User not logged in!");
      return;
    }

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
              : items?.planId,
        transactionId: "",
        date: new Date(),
        cartIds: category === "shop" ? cart.map((i) => i._id) : [],
        menuItemIds: category === "shop" ? cart.map((i) => i.menuId) : [],
        status: "pending",
        userId: user._id,
      };

      const response = await axiosSecure.post("/create-ssl-payment", payment);


      // ✅ If subscription, also post to subscriptions collection
      if (category === "subscription") {
        const subscriptionData = {
          userEmail: user.email,
          planId: items.planId,
          planName: items.planName,
          price: items.price,
          transactionId: "", // empty for now
          status: "pending",
          startDate: new Date(), // initiate start date
          endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)), // 1 month plan example
          examCredit: items.examCredit || 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        await axiosSecure.post("/subscriptions", subscriptionData);
      }


      // ✅ Redirect to SSLCommerz if gateway URL exists
      if (response.data?.gatewayUrl) {
        // Redirect to SSLCommerz payment gateway
        window.location.replace(response.data.gatewayUrl);
      }
    } catch (error) {
      console.error("Payment initiation failed", error);
    }
  };

  return (
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
        className="w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800 transition"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;

