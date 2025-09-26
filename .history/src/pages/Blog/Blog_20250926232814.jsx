import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useBlog from "../../hooks/useBlog";

const Blog = () => {
  const [blogs] = useBlog();

  return (
        <>
    <title>Blog - Aloron</title>
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          📚 আমাদের ব্লগ
        </h2>
        <p className="text-sm md:text-base">
          পরীক্ষার প্রস্তুতি ও শিক্ষার্থীদের সহায়ক পরামর্শ পড়ুন
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <Link to={`/blog/${blog._id}`} className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 md:h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
              <div className="flex flex-wrap items-center text-sm mb-4 gap-4">
                <span className="flex items-center gap-1">
                  <FaUser className="text-indigo-500" /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-indigo-500" /> {blog.date}
                </span>
              </div>
              <p className="flex-grow line-clamp-3">{blog.excerpt}</p>
              <Link
                to={`/blog/${blog._id}`}
                className="mt-4 inline-flex items-center justify-center gap-2 text-indigo-600 font-medium hover:text-indigo-800"
              >
                বিস্তারিত পড়ুন <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Blog;
