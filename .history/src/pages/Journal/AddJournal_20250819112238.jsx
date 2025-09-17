import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaPaperPlane } from "react-icons/fa";

const AddJournal = () => {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    date: "",
    abstract: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // 🟢 MongoDB এ Save করতে এখানে Axios POST করবেন
    // axios.post("/journals", formData)

    Swal.fire({
      title: "✅ সফলভাবে জমা হয়েছে!",
      text: "আপনার প্রোজেক্টটি রিভিউ এর জন্য পাঠানো হলো।",
      icon: "success",
      confirmButtonText: "ওকে",
    });

    setFormData({
      title: "",
      authors: "",
      date: "",
      abstract: "",
      content: "",
    });
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">✍️ নতুন ইনোভেটিভ প্রোজেক্ট জমা দিন</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="প্রোজেক্টের শিরোনাম"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="authors"
          value={formData.authors}
          onChange={handleChange}
          placeholder="লেখকের নাম / বিশ্ববিদ্যালয়"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="তারিখ (যেমন: জুলাই ২০২৫)"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="abstract"
          value={formData.abstract}
          onChange={handleChange}
          placeholder="সংক্ষিপ্ত সারাংশ"
          className="textarea textarea-bordered w-full"
          required
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="পূর্ণ বিবরণ (Idea, Features, Impact ইত্যাদি)"
          className="textarea textarea-bordered w-full h-32"
          required
        />
        <button type="submit" className="btn btn-primary flex items-center gap-2">
          <FaPaperPlane /> জমা দিন
        </button>
      </form>
    </section>
  );
};

export default AddJournal;
