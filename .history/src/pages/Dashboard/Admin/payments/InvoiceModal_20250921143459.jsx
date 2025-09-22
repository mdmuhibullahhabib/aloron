import React from "react";
import { FaTimes, FaFilePdf } from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const InvoiceModal = ({ payment, onClose }) => {
  if (!payment) return null;

  const handleDownloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // 1️⃣ Add logo
    const logoUrl = "/logo.png"; // replace with your logo path
    doc.addImage(logoUrl, "PNG", 10, 10, 40, 15);

    // 2️⃣ Header
    doc.setFontSize(18);
    doc.text("Invoice", 105, 20, { align: "center" });

    doc.setFontSize(11);
    doc.text(`Transaction ID: ${payment.transactionId || "-"}`, 10, 35);
    doc.text(
      `Date: ${
        payment.date
          ? new Date(payment.date).toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : "-"
      }`,
      10,
      42
    );

    // 3️⃣ Customer info
    doc.text(`Student Name: ${payment.studentName || "-"}`, 10, 52);
    doc.text(`Email: ${payment.email || "-"}`, 10, 59);
    doc.text(`Phone: ${payment.phone || "-"}`, 10, 66);

    // 4️⃣ Table items
    autoTable(doc, {
      startY: 75,
      head: [["Course/Category", "Amount (৳)", "Status"]],
      body: [
        [
          payment.courseName || payment.category || "-",
          payment.amount || payment.price || 0,
          payment.status || "-",
        ],
      ],
      theme: "grid",
      headStyles: { fillColor: [79, 70, 229] },
    });

    // 5️⃣ Total
    doc.setFontSize(12);
    doc.text(
      `Total: ${payment.amount || payment.price || 0} ৳`,
      150,
      doc.lastAutoTable.finalY + 10
    );

    // 6️⃣ Footer / Signature
    doc.setFontSize(10);
    doc.text(
      "Thank you for your payment!",
      105,
      doc.lastAutoTable.finalY + 25,
      { align: "center" }
    );
    doc.text(
      "Authorized Signature: ______________",
      10,
      doc.lastAutoTable.finalY + 35
    );

    doc.save(`invoice_${payment.transactionId || "unknown"}.pdf`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes size={18} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-4">ইনভয়েস</h2>

        {/* PDF Download Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleDownloadPDF}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center gap-2"
          >
            <FaFilePdf /> Download PDF
          </button>
        </div>

        {/* Payment Info Preview */}
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-bold">ছাত্রের নাম:</span>{" "}
            {payment.studentName || "-"}
          </p>
          <p>
            <span className="font-bold">ইমেইল:</span> {payment.email || "-"}
          </p>
          <p>
            <span className="font-bold">মোবাইল:</span> {payment.phone || "-"}
          </p>
          <p>
            <span className="font-bold">কোর্স / ক্যাটেগরি:</span>{" "}
            {payment.courseName || payment.category || "-"}
          </p>
          <p>
            <span className="font-bold">পরিমাণ:</span>{" "}
            {payment.amount || payment.price} ৳
          </p>
          <p>
            <span className="font-bold">Transaction ID:</span>{" "}
            {payment.transactionId || "-"}
          </p>
          <p>
            <span className="font-bold">তারিখ:</span>{" "}
            {payment.date
              ? new Date(payment.date).toLocaleDateString("bn-BD", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "-"}
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
              {payment.status || "-"}
            </span>
          </p>
        </div>

        {/* Close Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
