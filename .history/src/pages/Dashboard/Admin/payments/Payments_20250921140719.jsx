import React, { useEffect, useState, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaTrash, FaEye, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import InvoiceModal from "./InvoiceModal";
import usePayment from "../../../../hooks/usePayments";

const Payments = () => {
  const [payments, refetch] = usePayment();
  const [localPayments, setLocalPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });

  useEffect(() => {
    setLocalPayments(payments || []);
  }, [payments]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Delete Payment
  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিত এই পেমেন্ট মুছতে চান?")) {
      setLocalPayments((prev) => prev.filter((p) => p._id !== id));
      toast.success("পেমেন্ট সফলভাবে মুছে ফেলা হয়েছে");
    }
  };

  // Sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  const sortedAndFilteredPayments = useMemo(() => {
    let filtered = localPayments.filter(
      (p) =>
        p.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (sortConfig.key === "date") {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return filtered;
  }, [localPayments, searchQuery, sortConfig]);

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <div className="p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-2xl font-bold mb-6">পেমেন্টস ও ইনভয়েস</h1>

      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <input
          type="text"
          placeholder="Search by Email or Category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <div className="text-center text-gray-500">ডেটা লোড হচ্ছে...</div>
      ) : sortedAndFilteredPayments.length === 0 ? (
        <div className="text-center text-gray-500">কোনো পেমেন্ট পাওয়া যায়নি</div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">ক্রমিক</th>
                <th
                  className="py-3 px-4 text-left cursor-pointer flex items-center gap-1"
                  onClick={() => handleSort("email")}
                >
                  ইমেইল {getSortIcon("email")}
                </th>
                <th
                  className="py-3 px-4 text-left cursor-pointer flex items-center gap-1"
                  onClick={() => handleSort("category")}
                >
                  ক্যাটেগরি {getSortIcon("category")}
                </th>
                <th
                  className="py-3 px-4 text-left cursor-pointer flex items-center gap-1"
                  onClick={() => handleSort("price")}
                >
                  পরিমাণ {getSortIcon("price")}
                </th>
                <th
                  className="py-3 px-4 text-left cursor-pointer flex items-center gap-1"
                  onClick={() => handleSort("date")}
                >
                  তারিখ {getSortIcon("date")}
                </th>
                <th className="py-3 px-4 text-left">স্ট্যাটাস</th>
                <th className="py-3 px-4 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedAndFilteredPayments.map((payment, index) => (
                <tr key={payment._id} className="hover:bg-gray-50 transition">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{payment.email}</td>
                  <td className="py-3 px-4">{payment.category}</td>
                  <td className="py-3 px-4">{payment.price} ৳</td>
                  <td className="py-3 px-4">
                    {new Date(payment.date).toLocaleDateString("bn-BD", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${
                        payment.status?.toLowerCase() === "success"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex justify-center gap-2">
                    <button
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      onClick={() => setSelectedPayment(payment)}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      onClick={() => handleDelete(payment._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedPayment && (
        <InvoiceModal
          payment={selectedPayment}
          onClose={() => setSelectedPayment(null)}
        />
      )}
    </div>
  );
};

export default Payments;
