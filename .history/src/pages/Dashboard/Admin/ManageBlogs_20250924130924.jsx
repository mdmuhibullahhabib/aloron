import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import useBlog from "../../../hooks/useBlog";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageBlogs = () => {
  const [blogs, refetch] = useBlog();
  const axios

const handleDelete = async (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to delete this user?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/blogs/${id}`).then((res) => {
            refetch();
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'blog has been deleted.', 'success');
            }
          });
        }
      });
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
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Author</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>

                  {/* Blog image */}
                  <td className="p-3">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                  </td>

                  {/* Blog title */}
                  <td className="p-3 font-medium">{blog.title}</td>

                  {/* Blog author */}
                  <td className="p-3">{blog.author}</td>

                  {/* Blog date */}
                  <td className="p-3">
                    {new Date(blog.date).toLocaleDateString("en-GB")}
                  </td>

                  {/* Actions */}
                  <td className="p-3 flex items-center justify-center gap-3">
                    {/* View */}
                    <Link
                    to={`/blog/${blog._id}`}
                      className="text-blue-600 hover:text-blue-800 transition"
                      title="View Blog"
                    >
                      <FaEye size={18} />
                    </Link>

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
