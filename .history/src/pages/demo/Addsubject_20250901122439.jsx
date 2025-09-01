import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Addsubject = ({ onAdd }) => {
  const [product, setProduct] = useState({ name: "", price: "" });


  const handleSubmit = (e) => {
    e.preventDefault();

    const Name=e.target.name.value;
    const Price=e.target.price.value;

    const ({Name, Price})
    console.log({Name, Price})

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
          placeholder="Product Name"
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="price"
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


export default Addsubject;
