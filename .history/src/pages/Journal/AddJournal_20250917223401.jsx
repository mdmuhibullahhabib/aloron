import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlusCircle, FaFilePdf, FaLightbulb } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure"; 
import { toast } from "react-hot-toast";

const AddJournal = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    "ইনোভেটিভ প্রোজেক্ট জার্নাল",
    "গ্লোবাল ইনোভেশন জার্নাল",
    "স্টুডেন্ট ইনোভেশন জার্নাল",
  ]);

  const formData = watch();

  const handleAddCategory = () => {
    const newCat = prompt("নতুন ক্যাটাগরি লিখুন:");
    if (newCat && !categories.includes(newCat)) {
      setCategories([...categories, newCat]);
    }
  };

  // ✅ Submit handler
  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // If PDF file uploaded, append to FormData (for backend handling)
      const payload = {
        title: data.title,
        authors: data.authors,
        journal: data.journal,
        date: data.date,
        abstract: data.abstract,
        pdfLink: data.pdfLink || null,
      };

      // If file exists, send separately as FormData
      if (data.pdfFile && data.pdfFile[0]) {
        const formData = new FormData();
        formData.append("pdfFile", data.pdfFile[0]);
        formData.append("info", JSON.stringify(payload));

        await axiosSecure.post("/journals", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosSecure.post("/journals", payload);
      }

        toast.success("🎉 জার্নাল সফলভাবে জমা হয়েছে!");
      reset();
      setPreview(false);
    } catch (error) {
      console.error("❌ Journal submit failed:", error);
      alert("জার্নাল জমা দেওয়ার সময় সমস্যা হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          <FaPlusCircle className="inline-block text-green-600 mr-2" />
          নতুন ইনোভেটিভ প্রোজেক্ট জমা দিন
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          আপনার তৈরি করা গবেষণা বা ইনোভেটিভ প্রোজেক্টের তথ্য পূরণ করুন এবং PDF
          ফাইল সংযুক্ত করুন। আপনার প্রোজেক্ট বাংলাদেশ ও আন্তর্জাতিকভাবে প্রদর্শিত
          হবে।
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-6"
      >
        {/* Inputs (same as before) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">প্রোজেক্টের শিরোনাম *</label>
            <input
              type="text"
              {...register("title", { required: "শিরোনাম দিতে হবে" })}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Authors */}
          <div>
            <label className="block text-sm font-medium mb-1">লেখক/গবেষক *</label>
            <input
              type="text"
              {...register("authors", { required: "লেখক দিতে হবে" })}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {errors.authors && (
              <p className="text-red-500 text-xs mt-1">{errors.authors.message}</p>
            )}
          </div>

          {/* Journal Category */}
          <div>
            <label className="block text-sm font-medium mb-1">জার্নাল ক্যাটাগরি *</label>
            <div className="flex gap-2">
              <select
                {...register("journal", { required: "ক্যাটাগরি নির্বাচন করুন" })}
                className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="">-- নির্বাচন করুন --</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleAddCategory}
                className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
              >
                নতুন+
              </button>
            </div>
            {errors.journal && (
              <p className="text-red-500 text-xs mt-1">{errors.journal.message}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">প্রকাশের তারিখ *</label>
            <input
              type="date"
              {...register("date", { required: "তারিখ দিতে হবে" })}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Abstract */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">অ্যাবস্ট্রাক্ট *</label>
            <textarea
              {...register("abstract", { required: "অ্যাবস্ট্রাক্ট দিতে হবে" })}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
            {errors.abstract && (
              <p className="text-red-500 text-xs mt-1">{errors.abstract.message}</p>
            )}
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">PDF ফাইল</label>
            <input
              type="file"
              accept="application/pdf"
              {...register("pdfFile")}
              className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-50"
            />
          </div>

          {/* PDF Link */}
          <div>
            <label className="block text-sm font-medium mb-1">PDF লিঙ্ক (যদি থাকে)</label>
            <input
              type="url"
              placeholder="https://example.com/my-journal.pdf"
              {...register("pdfLink")}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <button
            type="button"
            onClick={() => setPreview(!preview)}
            className="w-full md:w-1/3 inline-flex items-center justify-center px-5 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            <FaLightbulb className="mr-2" /> প্রিভিউ দেখুন
          </button>
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-1/3 inline-flex items-center justify-center px-5 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition disabled:opacity-60"
          >
            {loading ? "⏳ জমা হচ্ছে..." : <><FaPlusCircle className="mr-2" /> জমা দিন</>}
          </button>
        </div>
      </form>

      {/* Preview */}
      {preview && (
        <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-800">
            <FaLightbulb className="text-yellow-500" />{" "}
            {formData.title || "শিরোনাম"}
          </h2>
          <p className="text-sm text-gray-600 mb-2">👤 {formData.authors}</p>
          <p className="text-sm text-gray-600 mb-2">📅 {formData.date}</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            {formData.abstract || "অ্যাবস্ট্রাক্ট এখানে দেখানো হবে..."}
          </p>
          {formData.pdfLink && (
            <a
              href={formData.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 text-indigo-600 hover:underline"
            >
              <FaFilePdf className="mr-2" /> PDF দেখুন
            </a>
          )}
        </div>
      )}
    </section>
  );
};

export default AddJournal;
