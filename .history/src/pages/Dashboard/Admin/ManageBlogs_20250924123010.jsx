import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import useBlog from "../../../hooks/useBlog";

const ManageBlogs = () => {
  const [blogs, refetch] = useBlog();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.deletedCount > 0) {
        alert("Blog deleted successfully ✅");
        refetch();
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog ❌");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📰 Manage Blogs</h2>
      {blogs?.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="table-auto w-full border-collapse text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Author</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{blog.title}</td>
                  <td className="p-3">{blog.category}</td>
                  <td className="p-3">{blog.authorName}</td>
                  <td className="p-3">{new Date(blog.createdAt).toLocaleDateString()}</td>
                  <td className="p-3 flex items-center justify-center gap-3">
                    {/* View */}
                    <button
                      className="text-blue-600 hover:text-blue-800 transition"
                      onClick={() => window.open(`/blogs/${blog._id}`, "_blank")}
                      title="View Blog"
                    >
                      <FaEye size={18} />
                    </button>

                    {/* Delete */}
                    <button
                      className="text-red-600 hover:text-red-800 transition"
                      onClick={() => handleDelete(blog._id)}
                      title="Delete Blog"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mt-6 text-center">No blogs found 📝</p>
      )}
    </div>
  );
};

export default ManageBlogs;
