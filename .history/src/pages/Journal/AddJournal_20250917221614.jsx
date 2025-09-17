import React, { useState } from "react";
import { FaPlusCircle, FaFilePdf, FaLightbulb } from "react-icons/fa";

const AddJournal = () => {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    journal: "",
    date: "",
    abstract: "",
    pdfFile: null,
    pdfLink: "",
  });

  const [preview, setPreview] = useState(false);
  const [categories, setCategories] = useState([
    "ইনোভেটিভ প্রোজেক্ট জার্নাল",
    "গ্লোবাল ইনোভেশন জার্নাল",
    "স্টুডেন্ট ইনোভেশন জার্নাল",
  ]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddCategory = () => {
    const newCat = prompt("নতুন ক্যাটাগরি লিখুন:");
    if (newCat && !categories.includes(newCat)) {
      setCategories([...categories, newCat]);
      setFormData({ ...formData, journal: newCat });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("✅ জার্নাল সফলভাবে জমা হয়েছে!");
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
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">প্রোজেক্টের শিরোনাম *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Authors */}
          <div>
            <label className="block text-sm font-medium mb-1">লেখক/গবেষক *</label>
            <input
              type="text"
              name="authors"
              value={formData.authors}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Journal Category */}
          <div>
            <label className="block text-sm font-medium mb-1">জার্নাল ক্যাটাগরি *</label>
            <div className="flex gap-2">
              <select
                name="journal"
                value={formData.journal}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="">ক্যাটাগরি নির্বাচন করুন</option>
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
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">প্রকাশের তারিখ *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Abstract */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">অ্যাবস্ট্রাক্ট *</label>
            <textarea
              name="abstract"
              value={formData.abstract}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">PDF ফাইল</label>
            <input
              type="file"
              name="pdfFile"
              accept="application/pdf"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-50"
            />
          </div>

          {/* PDF Link */}
          <div>
            <label className="block text-sm font-medium mb-1">PDF লিঙ্ক (যদি থাকে)</label>
            <input
              type="url"
              name="pdfLink"
              value={formData.pdfLink}
              onChange={handleChange}
              placeholder="https://example.com/my-journal.pdf"
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
            className="w-full md:w-1/3 inline-flex items-center justify-center px-5 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            <FaPlusCircle className="mr-2" /> জমা দিন
          </button>
        </div>
      </form>

      {/* Preview */}
      {preview && (
        <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-800">
            <FaLightbulb className="text-yellow-500" /> {formData.title || "শিরোনাম"}
          </h2>
          <p className="text-sm text-gray-600 mb-2">👤 {formData.authors}</p>
          <p className="text-sm text-gray-600 mb-2">📅 {formData.date}</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            {formData.abstract || "অ্যাবস্ট্রাক্ট এখানে দেখানো হবে..."}
          </p>
        </div>
      )}
    </section>
  );
};

export default AddJournal;
