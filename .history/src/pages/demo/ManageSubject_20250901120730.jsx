import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) return;
    onAdd({ ...product, id: Date.now() });
    setProduct({ name: "", price: "" });
  };

  return (
    <div className="card w-full max-w-md bg-white shadow-xl p-4 mb-6">
      <h2 className="card-title text-2xl font-bold flex items-center gap-2 mb-4">
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
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          <FaPlus className="mr-2" /> Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
