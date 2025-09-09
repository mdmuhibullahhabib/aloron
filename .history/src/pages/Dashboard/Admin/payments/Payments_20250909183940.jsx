import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaTrash, FaEye } from "react-icons/fa";
import InvoiceModal from "./InvoiceModal"; // Import modal

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Fake Data
const fakePayments = [
  {
    id: 1,
    studentName: "মোঃ হাসিবুল্লাহ",
    email: "hasib@example.com",
    phone: "01712345678",
    courseName: "JavaScript Basic",
    amount: 2500,
    date: "2025-09-01",
    status: "Paid",
  },
  {
    id: 2,
    studentName: "সুমাইয়া খাতুন",
    email: "sumaiya@example.com",
    phone: "01898765432",
    courseName: "React Advanced",
    amount: 4000,
    date: "2025-09-03",
    status: "Pending",
  },
  {
    id: 3,
    studentName: "আব্দুল্লাহ আল মামুন",
    email: "mamun@example.com",
    phone: "01655555555",
    courseName: "Node.js Complete",
    amount: 3500,
    date: "2025-09-05",
    status: "Paid",
  },
];


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPayments(fakePayments);
      setLoading(false);
    }, 500);
  }, []);

  // Delete Payment
  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিত এই পেমেন্ট মুছতে চান?")) {
      setPayments(payments.filter((p) => p.id !== id));
      toast.success("পেমেন্ট সফলভাবে মুছে ফেলা হয়েছে");
    }
  };

  return (
    <div className="p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-2xl font-bold mb-6">পেমেন্টস ও ইনভয়েস</h1>

      {loading ? (
        <div className="text-center text-gray-500">ডেটা লোড হচ্ছে...</div>
      ) : payments.length === 0 ? (
        <div className="text-center text-gray-500">কোনো পেমেন্ট পাওয়া যায়নি</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">ক্রমিক</th>
                <th className="py-3 px-4 text-left">ছাত্র</th>
                <th className="py-3 px-4 text-left">কোর্স</th>
                <th className="py-3 px-4 text-left">পরিমাণ</th>
                <th className="py-3 px-4 text-left">তারিখ</th>
                <th className="py-3 px-4 text-left">স্ট্যাটাস</th>
                <th className="py-3 px-4 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{payment.studentName}</td>
                  <td className="py-3 px-4">{payment.courseName}</td>
                  <td className="py-3 px-4">{payment.amount} ৳</td>
                  <td className="py-3 px-4">
                    {new Date(payment.date).toLocaleDateString("bn-BD")}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${
                        payment.status === "Paid"
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
                      onClick={() => handleDelete(payment.id)}
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
