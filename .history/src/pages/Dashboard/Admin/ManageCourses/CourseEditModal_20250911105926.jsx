import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const CourseEditModal = ({ course, onClose, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    title: course.title,
    subject: course.subject,
    teacher: course.teacher,
    level: course.level,
    duration: course.duration,
    price: course.price,
    description: course.description,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axiosPublic.patch(`/courses/${course._id}`, formData);
      toast.success("✅ কোর্স সফলভাবে আপডেট হয়েছে");
      refetch();
      onClose();
    } catch (err) {
      toast.error("❌ আপডেট ব্যর্থ হয়েছে");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <FaEdit className="text-blue-600" /> কোর্স এডিট করুন
        </h3>

        <form onSubmit={handleSave} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="কোর্সের নাম"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="বিষয়"
          />
          <input
            type="text"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="শিক্ষক"
          />
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="লেভেল"
          />
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="মেয়াদ"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="কোর্স ফি"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="কোর্সের বর্ণনা"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
            >
              বাতিল
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
            >
              সংরক্ষণ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseEditModal;
