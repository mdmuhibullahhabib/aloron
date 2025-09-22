import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaTrash, FaEye } from "react-icons/fa";
import InvoiceModal from "./InvoiceModal";
import usePayment from "../../../../hooks/usePayments";

const Payments = () => {
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [payments, refetch] = usePayment();
  const [localPayments, setLocalPayments] = useState([]);

  useEffect(() => {
    setLocalPayments(payments || []);
  }, [payments]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

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
        <div className="space-y-4">
          {localPayments.map((payment, index) => (
            <div
              key={payment._id}
              className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-lg transition"
            >
              <div className="flex-1 space-y-1">
                <p>
                  <span className="font-bold">ক্রমিক:</span> {index + 1}
                </p>
                <p>
                  <span className="font-bold">ইমেইল:</span> {payment.email}
                </p>
                <p>
                  <span className="font-bold">ক্যাটেগরি:</span> {payment.category}
                </p>
                <p>
                  <span className="font-bold">পরিমাণ:</span> {payment.price} ৳
                </p>
                <p>
                  <span className="font-bold">তারিখ:</span>{" "}
                  {new Date(payment.date).toLocaleDateString("bn-BD", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p>
                  <span className="font-bold">স্ট্যাটাস:</span>{" "}
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      payment.status?.toLowerCase() === "success"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {payment.status}
                  </span>
                </p>
              </div>

              <div className="flex mt-3 md:mt-0 md:ml-4 gap-2">
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
              </div>
            </div>
          ))}
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
