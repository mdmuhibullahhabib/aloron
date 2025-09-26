import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Checkout = () => {
  const { user } = useAuth();
  const [dbCart, refetch] = useCart(); // MongoDB cart
  const [localCart, setLocalCart] = useState([]); // Local cart
  const [deliveryArea, setDeliveryArea] = useState("inside");
  const [shippingCost, setShippingCost] = useState(60);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // Billing form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  // Load localStorage cart if not logged in
  useEffect(() => {
    if (!user?.email) {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setLocalCart(storedCart);
    }
  }, [user]);

  // Set shipping cost when delivery area changes
  useEffect(() => {
    setShippingCost(deliveryArea === "inside" ? 60 : 120);
  }, [deliveryArea]);

  // Decide which cart to use
  const cart = user?.email ? dbCart : localCart;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    // Check if all fields are filled
    if (
      !formData.fullName.trim() ||
      // !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      // !formData.zip.trim() ||
      !deliveryArea
    ) {
      Swal.fire({
        title: "Please fill in your Address",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const orderData = {
      billingDetails: formData,
      items: cart,
      subtotal,
      shippingCost,
      total,
      deliveryArea,
      email: user?.email,
      status: "pending",
      orderedAt: new Date(),
    };


    // TO DO (Payment)
    // navigate("/payment", {
    //   state: {
    //     category: "shop",
    //     items: cart,
    //   },
    // });


    if (user?.email) {
      // Logged in → Send to DB
      const res = await axiosPublic.post("/orders", orderData);
      if (res.status === 201 || res.status === 200) {
        await Promise.all(cart.map((item) => axiosPublic.delete(`/cart/${item._id}`)));
        Swal.fire({
          title: "Order placed successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        refetch();
        navigate("/success-checkout");
      }
    } else {
      // Guest → Simulate order and clear localStorage
      Swal.fire({
        title: "Order placed successfully!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      localStorage.removeItem("cart");
      setLocalCart([]);
      navigate("/success-checkout");
    }
  };


  return (
    <>
      <title>Checkout - Aloron</title>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl text-black font-semibold text-center mb-10">Checkout</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Billing Form */}
          <div className="bg-white p-6 shadow rounded-md">
            <h3 className="text-xl text-black font-semibold mb-6">Billing Details</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                value={user?.email}
                placeholder="Email"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP Code"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Delivery Area Option */}
              <div className="mt-4">
                <p className="font-medium text-black mb-2">Delivery Location:</p>
                <div className="flex text-black gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="inside"
                      checked={deliveryArea === "inside"}
                      onChange={() => setDeliveryArea("inside")}
                      required
                    />
                    Inside Dhaka (৳60)
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="outside"
                      checked={deliveryArea === "outside"}
                      onChange={() => setDeliveryArea("outside")}
                      required
                    />
                    Outside Dhaka (৳120)
                  </label>
                </div>
              </div>
            </form>

          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 shadow rounded-md">
            <h3 className="text-xl text-black font-semibold mb-6">Order Summary</h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {cart.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium text-black">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-black">৳{item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-black font-semibold pt-4 border-t mt-4">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>
            <div className="flex justify-between text-black font-semibold">
              <span>Shipping</span>
              <span>৳{shippingCost}</span>
            </div>
            <div className="flex justify-between text-black font-bold text-lg">
              <span>Total</span>
              <span>৳{total}</span>
            </div>

            {/* Place Order Button */}
            <button onClick={handlePlaceOrder} className="btn btn-primary w-full mt-6">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;