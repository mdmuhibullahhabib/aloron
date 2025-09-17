import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "প্রস্তুতির সঠিক কৌশল",
    author: "রাফি ইসলাম",
    date: "18 August 2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "ভর্তি কিংবা বোর্ড পরীক্ষার প্রস্তুতিতে কিভাবে সময় ব্যবস্থাপনা করবেন এবং কোন বিষয়গুলোতে ফোকাস করবেন তা জেনে নিন।",
  },
  {
    id: 2,
    title: "SSC পরীক্ষার্থীদের জন্য পরামর্শ",
    author: "সাবিনা আক্তার",
    date: "10 August 2025",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "SSC পরীক্ষার্থীদের পড়াশোনার পাশাপাশি মানসিক প্রস্তুতির গুরুত্ব নিয়ে আজকের ব্লগ।",
  },
  {
    id: 3,
    title: "MCQ কৌশল",
    author: "মোহাম্মদ আরিফ",
    date: "5 August 2025",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "MCQ প্রশ্নে কীভাবে সঠিক উত্তর খুঁজে বের করবেন এবং নেগেটিভ মার্ক এড়াতে কীভাবে এগোবেন।",
  },
];

const Blog = () => {
  const [blogs, refet]
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          📚 আমাদের ব্লগ
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          পরীক্ষার প্রস্তুতি ও শিক্ষার্থীদের সহায়ক পরামর্শ পড়ুন
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <Link to={`/blog/${blog.id}`} className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 md:h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
              <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-4">
                <span className="flex items-center gap-1">
                  <FaUser className="text-indigo-500" /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-indigo-500" /> {blog.date}
                </span>
              </div>
              <p className="text-gray-700 flex-grow">{blog.excerpt}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="mt-4 inline-flex items-center justify-center gap-2 text-indigo-600 font-medium hover:text-indigo-800"
              >
                বিস্তারিত পড়ুন <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
