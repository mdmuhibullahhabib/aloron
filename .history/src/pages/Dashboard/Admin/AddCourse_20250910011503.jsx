import React, { useState } from "react";
import { FaBookOpen, FaListUl, FaPlusCircle, FaTrash, FaSave } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const AddCourse = ({ onAddCourse }) => {
  const [courseData, setCourseData] = useState({
    title: "",
    subject: "",
    teacher: "",
    description: "",
    duration: "",
    price: "",
    level: "HSC",
    published: false,
    rating: 0,
    curriculum: [],
  });

  const [curriculumInput, setCurriculumInput] = useState({ chapter: "", mcqs: "" });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  // Handle curriculum addition
  const addCurriculum = () => {
    if (!curriculumInput.chapter || !curriculumInput.mcqs) {
      toast.error("সব ফিল্ড পূরণ করুন!");
      return;
    }
    setCourseData({
      ...courseData,
      curriculum: [...courseData.curriculum, { ...curriculumInput, mcqs: parseInt(curriculumInput.mcqs) }],
    });
    setCurriculumInput({ chapter: "", mcqs: "" });
    toast.success("কারিকুলাম যুক্ত হয়েছে!");
  };

  // Remove curriculum item
  const removeCurriculum = (index) => {
    const updated = courseData.curriculum.filter((_, i) => i !== index);
    setCourseData({ ...courseData, curriculum: updated });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseData.title || !courseData.subject || !courseData.teacher || !courseData.description) {
      toast.error("সব ফিল্ড পূরণ করুন!");
      return;
    }
    const newCourse = { ...courseData, id: Date.now().toString(), students: 0, revenue: 0 };
    onAddCourse(newCourse); // send to parent component or API
    toast.success("কোর্স সফলভাবে তৈরি হয়েছে!");
    setCourseData({
      title: "",
      subject: "",
      teacher: "",
      description: "",
      duration: "",
      price: "",
      level: "HSC",
      published: false,
      rating: 0,
      curriculum: [],
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">➕ নতুন MCQ কোর্স তৈরি করুন</h2>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            placeholder="কোর্সের শিরোনাম"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="subject"
            value={courseData.subject}
            onChange={handleChange}
            placeholder="বিষয়"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="teacher"
            value={courseData.teacher}
            onChange={handleChange}
            placeholder="শিক্ষকের নাম"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            placeholder="মেয়াদ (উদাঃ ৩ মাস)"
            className="input input-bordered w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleChange}
            placeholder="ফি"
            className="input input-bordered w-full"
          />
          <select
            name="level"
            value={courseData.level}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="HSC">HSC</option>
            <option value="Admission">Admission</option>
          </select>
        </div>

        <textarea
          name="description"
          value={courseData.description}
          onChange={handleChange}
          placeholder="কোর্সের বর্ণনা"
          className="textarea textarea-bordered w-full"
          rows={4}
          required
        />

        {/* Curriculum Section */}
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <FaListUl /> কারিকুলাম যোগ করুন
          </h3>
          <div className="grid md:grid-cols-3 gap-2">
            <input
              type="text"
              placeholder="অধ্যায়ের নাম"
              value={curriculumInput.chapter}
              onChange={(e) => setCurriculumInput({ ...curriculumInput, chapter: e.target.value })}
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="MCQ সংখ্যা"
              value={curriculumInput.mcqs}
              onChange={(e) => setCurriculumInput({ ...curriculumInput, mcqs: e.target.value })}
              className="input input-bordered w-full"
            />
            <button
              type="button"
              onClick={addCurriculum}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
            >
              <FaPlusCircle /> Add
            </button>
          </div>

          {courseData.curriculum.length > 0 && (
            <ul className="mt-2 space-y-1">
              {courseData.curriculum.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-white p-2 rounded-lg border"
                >
                  <span>{item.chapter} - MCQs: {item.mcqs}</span>
                  <button
                    type="button"
                    onClick={() => removeCurriculum(idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-4 mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={courseData.published}
              onChange={(e) => setCourseData({ ...courseData, published: e.target.checked })}
              className="checkbox"
            />
            Publish immediately
          </label>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            <FaSave /> Save Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
