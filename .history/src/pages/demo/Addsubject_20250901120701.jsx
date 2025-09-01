import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddProduct = () => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
    // Here you can send data to backend using fetch or axios
    setProduct({ name: "", price: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="card w-full max-w-md bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold flex items-center gap-2">
            <FaPlus /> Add Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              <FaPlus className="mr-2" /> Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addsubject;
