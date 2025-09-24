import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import useJournal from "../../../hooks/useJournal";

const ManageJournal = () => {
  const [journals, refetch] = useJournal();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this journal?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/journals/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.deletedCount > 0) {
        alert("Journal deleted successfully ✅");
        refetch();
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete journal ❌");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📚 Manage Journals</h2>
      {journals?.length > 0 ? (
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
              {journals.map((journal, index) => (
                <tr key={journal._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{journal.title}</td>
                  <td className="p-3">{journal.category}</td>
                  <td className="p-3">{journal.authorName}</td>
                  <td className="p-3">{new Date(journal.createdAt).toLocaleDateString()}</td>
                  <td className="p-3 flex items-center justify-center gap-3">
                    {/* View Details */}
                    <button
                      className="text-blue-600 hover:text-blue-800 transition"
                      onClick={() => window.open(`/journals/${journal._id}`, "_blank")}
                      title="View Journal"
                    >
                      <FaEye size={18} />
                    </button>

                    {/* Delete */}
                    <button
                      className="text-red-600 hover:text-red-800 transition"
                      onClick={() => handleDelete(journal._id)}
                      title="Delete Journal"
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
        <p className="text-gray-500 mt-6 text-center">No journals found 📝</p>
      )}
    </div>
  );
};

export default ManageJournal;
