import React, { useRef } from "react";
import { FaTimes, FaFilePdf } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const InvoiceModal = ({ payment, onClose }) => {
  const modalRef = useRef();

  if (!payment) return null;

  const handleDownloadPDF = async () => {
    const element = modalRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff", // override background to avoid oklch
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice_${payment.transactionId || "unknown"}.pdf`);
    } catch (error) {
      console.error("PDF download error:", error);
      alert("PDF download failed!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative"
        style={{ backgroundColor: "#ffffff", color: "#111" }} // override tailwind oklch
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes size={18} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#111" }}>
          ইনভয়েস
        </h2>

        {/* Invoice Info */}
        <div className="space-y-2">
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
              className="px-2 py-1 rounded-full text-white text-sm"
              style={{
                backgroundColor:
                  payment.status?.toLowerCase() === "success"
                    ? "#22c55e"
                    : "#ef4444", // override tailwind oklch
              }}
            >
              {payment.status || "-"}
            </span>
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            বন্ধ করুন
          </button>
          <button
            onClick={handleDownloadPDF}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center gap-2"
          >
            <FaFilePdf /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
