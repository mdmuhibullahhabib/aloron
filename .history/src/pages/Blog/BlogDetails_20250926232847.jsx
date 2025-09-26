import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import useBlog from "../../hooks/useBlog";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs] = useBlog();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const found = blogs.find((b) => b._id === id);
      setBlog(found);

      if (found) {
        const related = blogs.filter((b) => b._id !== id).slice(0, 3);
        setRelatedBlogs(related);
      }
    }
  }, [id, blogs]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
        <>
    <title>BlogDetails - Aloron</title>

    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/blog"
          className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full object-cover h-64 md:h-96"
        />
      </div>

      {/* Title & Info */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{blog.title}</h1>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 text-sm md:text-base">
          <span className="flex items-center gap-1">
            <FaUser className="text-indigo-500" /> {blog.author}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-indigo-500" /> {blog.date}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-indigo max-w-full text-gray-700 mb-10">
        <p>{blog.content || blog.excerpt}</p>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            🔗 Related Blogs
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedBlogs.map((b) => (
              <Link
                key={b._id}
                to={`/blog/${b._id}`}
                className="card bg-white shadow-md hover:shadow-xl border border-gray-100 p-5 rounded-xl transition-all duration-300"
              >
                <div className="flex flex-col">
                  <div className="h-40 overflow-hidden rounded-lg mb-3">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-2">
                    {b.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default BlogDetails;
