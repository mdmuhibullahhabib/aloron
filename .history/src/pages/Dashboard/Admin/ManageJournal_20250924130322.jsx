import React from "react";
import { FaEye, FaTrash, FaFilePdf } from "react-icons/fa";
import Swal from "sweetalert2";
import useJournal from "../../../hooks/useJournal";

const ManageJournal = () => {
  const [journals, refetch] = useJournal();

const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This journal will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
  }).then(async (result) => {
    if (result.isConfirmed) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/journals/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "The journal has been deleted successfully.",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
          refetch(); // refresh the list after delete
        }
    }
  });
};



  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📑 Manage Journals</h2>
      {journals?.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="table-auto w-full border-collapse text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Title</th>
                <th className="p-3">Authors</th>
                <th className="p-3">Journal</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {journals.map((j, index) => (
                <tr key={j._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{j.title}</td>
                  <td className="p-3">{j.authors}</td>
                  <td className="p-3">{j.journal}</td>
                  <td className="p-3">{j.date}</td>
                  <td className="p-3 flex items-center justify-center gap-3">
                    {/* View Abstract */}
                    <button
                      className="text-blue-600 hover:text-blue-800 transition"
                      onClick={() =>
                        Swal.fire({
                          title: j.title,
                          text: j.abstract,
                          icon: "info",
                          confirmButtonColor: "#3085d6",
                        })
                      }
                      title="View Abstract"
                    >
                      <FaEye size={18} />
                    </button>

                    {/* PDF */}
                    {j.pdfLink && j.pdfLink !== "#" && (
                      <a
                        href={j.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 transition"
                        title="View PDF"
                      >
                        <FaFilePdf size={18} />
                      </a>
                    )}

                    {/* Delete */}
                    <button
                      className="text-red-600 hover:text-red-800 transition"
                      onClick={() => handleDelete(j._id)}
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
        <p className="text-gray-500 mt-6 text-center">কোনো জার্নাল পাওয়া যায়নি 📝</p>
      )}
    </div>
  );
};

export default ManageJournal;
