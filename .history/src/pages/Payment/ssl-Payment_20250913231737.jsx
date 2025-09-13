import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Payment = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  console.log(totalPrice, user?.email)

  const handleCreatePayment = async () => {
    // now save the payment in the database
    const payment = {
      email: user.email,
      price: totalPrice,
      transactionId: "",
      date: new Date(),
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuId),
      status: "pending",
    };

    const response = await axiosSecure.post("/create-ssl-payment", payment);
    console.log(response)


    if (response.data?.gatewayUrl) {
      // redirect user to SSLCommerz payment gateway

      window.location.replace(response.data.gatewayUrl);
    }

    console.log("response", response.data);
  };

  return (
    <div>
      <div className="">
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>

          <div className="">
            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                value={user?.email}
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
                readOnly
              />
            </div>
          </div>

          {/* Button for creating order */}
          <button
            onClick={handleCreatePayment}
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;