import React, { useState, useMemo, useEffect } from "react";
import { FaTrash, FaEye, FaSearch } from "react-icons/fa";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import InvoiceModal from "./InvoiceModal";
import usePayment from "../../../../hooks/usePayments";

const Payments = () => {
  const [payments, refetch] = usePayment();
  const [localPayments, setLocalPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryOptions = [
    { value: "subscription", label: "Subscription" },
    { value: "course", label: "Course" },
    { value: "shop", label: "Shop" },
  ];

  useEffect(() => {
    setLocalPayments(payments || []);
    setLoading(false);
  }, [payments]);

  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিত এই পেমেন্ট মুছতে চান?")) {
      setLocalPayments((prev) => prev.filter((p) => p._id !== id));
      toast.success("পেমেন্ট সফলভাবে মুছে ফেলা হয়েছে");
    }
  };

  // Filter + Search
  const filteredPayments = useMemo(() => {
    return localPayments.filter((p) => {
      const matchesSearch =
        p.email?.toLowerCase().includes(search.toLowerCase()) ||
        p.category?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory
        ? p.category === selectedCategory.value
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [localPayments, search, selectedCategory]);

  return (
    <div className="p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-2xl font-bold mb-6">পেমেন্টস ও ইনভয়েস</h1>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 w-full md:w-64">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by Email or Category"
            className="input input-bordered w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="w-full md:w-60">
          <Select
            options={categoryOptions}
            value={selectedCategory}
            onChange={(option) => setSelectedCategory(option)}
            isClearable
            placeholder="Filter by Category"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">ডেটা লোড হচ্ছে...</div>
      ) : filteredPayments.length === 0 ? (
        <div className="text-center text-gray-500">কোনো পেমেন্ট পাওয়া যায়নি</div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">ক্রমিক</th>
                <th className="py-3 px-4 text-left">ইমেইল</th>
                <th className="py-3 px-4 text-left">ক্যাটেগরি</th>
                <th className="py-3 px-4 text-left">পরিমাণ</th>
                <th className="py-3 px-4 text-left">তারিখ</th>
                <th className="py-3 px-4 text-left">স্ট্যাটাস</th>
                <th className="py-3 px-4 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPayments.map((payment, index) => (
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
