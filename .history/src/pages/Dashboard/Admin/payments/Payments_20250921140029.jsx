import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaTrash, FaEye } from "react-icons/fa";
import InvoiceModal from "./InvoiceModal";
import usePayment from "../../../../hooks/usePayments";

const Payments = () => {
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [payments, refetch] = usePayment(); // assuming this returns [paymentsArray, refetchFunction]
  const [localPayments, setLocalPayments] = useState([]);

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

  return (
    <div className="p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-2xl font-bold mb-6">পেমেন্টস ও ইনভয়েস</h1>

      {loading ? (
        <div className="text-center text-gray-500">ডেটা লোড হচ্ছে...</div>
      ) : localPayments.length === 0 ? (
        <div className="text-center text-gray-500">কোনো পেমেন্ট পাওয়া যায়নি</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
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
            <tbody>
              {localPayments.map((payment, index) => (
                <tr
                  key={payment._id}
                  className="border-b hover:bg-gray-50 transition"
                >
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
                      className={`px-3 py-1 rounded-full text-white text-sm ${
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

      {/* Invoice Modal */}
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
