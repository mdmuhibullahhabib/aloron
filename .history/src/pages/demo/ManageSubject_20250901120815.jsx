import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageProducts = ({ products, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({ name: "", price: "" });

  const startEdit = (product) => {
    setEditing(product.id);
    setEditedData({ name: product.name, price: product.price });
  };

  const handleEditChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const saveEdit = (id) => {
    onEdit(id, editedData);
    setEditing(null);
  };

  return (
    <div className="card w-full max-w-2xl bg-white shadow-xl p-4">
      <h2 className="card-title text-xl font-bold mb-4">Manage Products</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">No products added yet.</p>
      ) : (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  {editing === p.id ? (
                    <input
                      name="name"
                      value={editedData.name}
                      onChange={handleEditChange}
                      className="input input-bordered input-sm"
                    />
                  ) : (
                    p.name
                  )}
                </td>
                <td>
                  {editing === p.id ? (
                    <input
                      name="price"
                      value={editedData.price}
                      onChange={handleEditChange}
                      className="input input-bordered input-sm"
                    />
                  ) : (
                    `$${p.price}`
                  )}
                </td>
                <td className="flex gap-2">
                  {editing === p.id ? (
                    <button className="btn btn-success btn-sm" onClick={() => saveEdit(p.id)}>
                      Save
                    </button>
                  ) : (
                    <button className="btn btn-warning btn-sm" onClick={() => startEdit(p)}>
                      <FaEdit />
                    </button>
                  )}
                  <button className="btn btn-error btn-sm" onClick={() => onDelete(p.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProducts;
