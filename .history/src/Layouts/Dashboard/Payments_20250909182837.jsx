import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaTrash, FaEye } from 'react-icons/fa';

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fake payment data
  const fakePayments = [
    {
      id: 1,
      studentName: 'মোঃ হাসিবুল্লাহ',
      courseName: 'JavaScript Basic',
      amount: 2500,
      date: '2025-09-01',
      status: 'Paid',
      invoiceLink: '/invoice/1',
    },
    {
      id: 2,
      studentName: 'সুমাইয়া খাতুন',
      courseName: 'React Advanced',
      amount: 4000,
      date: '2025-09-03',
      status: 'Pending',
      invoiceLink: null,
    },
    {
      id: 3,
      studentName: 'আব্দুল্লাহ আল মামুন',
      courseName: 'Node.js Complete',
      amount: 3500,
      date: '2025-09-05',
      status: 'Paid',
      invoiceLink: '/invoice/3',
    },
    {
      id: 4,
      studentName: 'ফাতেমা রহমান',
      courseName: 'Python Beginner',
      amount: 3000,
      date: '2025-09-07',
      status: 'Paid',
      invoiceLink: '/invoice/4',
    },
  ];

  // Simulate fetching data
  const fetchPayments = async () => {
    try {
      setLoading(true);
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setPayments(fakePayments);
    } catch (error) {
      toast.error('পেমেন্ট ডেটা লোড করতে সমস্যা হয়েছে');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // Delete a payment
  const handleDelete = (id) => {
    if (window.confirm('আপনি কি নিশ্চিত এই পেমেন্ট মুছতে চান?')) {
      setPayments(payments.filter(p => p.id !== id));
      toast.success('পেমেন্ট সফলভাবে মুছে ফেলা হয়েছে');
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
                <th className="py-3 px-4 text-left">পেমেন্ট তারিখ</th>
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
                  <td className="py-3 px-4">{new Date(payment.date).toLocaleDateString('bn-BD')}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-white text-sm ${payment.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex justify-center gap-2">
                    <button
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      onClick={() => toast(payment.invoiceLink ? 'Invoice Opened' : 'ইনভয়েস পাওয়া যায়নি')}
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
    </div>
  );
};

export default Payments;
