import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart, refetch] = useCart();
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user?.email && cart.length > 0) {
      const formattedCart = cart.map((item) => ({
        ...item,
        price:
          item.price ??
          (item.Price?.$numberInt
            ? parseInt(item.Price.$numberInt)
            : typeof item.Price === "number"
              ? item.Price
              : 0),
        quantity:
          item.quantity?.$numberInt
            ? parseInt(item.quantity.$numberInt)
            : typeof item.quantity === "number"
              ? item.quantity
              : 1,
        image: item.image || item.images || [],
      }));
      setCartItems(formattedCart);
    } else if (!user?.email) {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(localCart);
    }
  }, [cart.length, user?.email]);

  const handleQuantityChange = (productId, delta) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );

      if (!user?.email) {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      return updatedCart;
    });
  };

  const handleRemove = (productId) => {
    if (user?.email) {
      const itemToDelete = cartItems.find((item) => item.productId === productId);
      if (!itemToDelete || !itemToDelete._id) {
        console.warn("Item not found or missing _id");
        return;
      }

      axiosPublic.delete(`/cart/${itemToDelete._id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Removed!",
            text: "The item has been removed from your cart.",
            icon: "success",
            confirmButtonColor: "#6366F1",
          });
        }
      });
    } 
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <title>Cart - Aloron</title>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl text-black font-bold mb-8 text-center">🛒 Your Shopping Cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl shadow-md transition hover:shadow-lg"
                >
                  <img
                    src={item.image?.[0] || "https://via.placeholder.com/100"}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-md border"
                  />

                  <div className="flex-1 w-full">
                    <h3 className="text-lg text-black font-semibold">{item.name}</h3>
                    <p className="text-gray-500">
                      ৳{item.price} x {item.quantity}
                    </p>
                    <p className="text-purple-700 font-bold mt-1">
                      ৳{item.price * item.quantity}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex text-black items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.productId, -1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg"
                    >
                      −
                    </button>
                    <span className="px-2 font-medium text-lg">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.productId, 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="text-red-500 hover:underline text-sm mt-2 sm:mt-0 sm:ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h3 className="text-xl text-black font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>৳{total}</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-black text-lg font-bold">
              <span>Total</span>
              <span>৳{total}</span>
            </div>
            <Link
              to="/checkout"
              className="block mt-6 text-center bg-purple-700 hover:bg-purple-600 text-white py-3 rounded-xl transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;