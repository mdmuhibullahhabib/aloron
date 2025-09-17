import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

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
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">📚 আমাদের ব্লগ</h2>
        <p className="text-gray-600">
          পরীক্ষার প্রস্তুতি ও শিক্ষার্থীদের সহায়ক পরামর্শ পড়ুন
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <h2 className="card-title">{blog.title}</h2>
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <span className="flex items-center gap-1">
                  <FaUser /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {blog.date}
                </span>
              </div>
              <p className="text-gray-700 flex-grow">{blog.excerpt}</p>
              <div className="card-actions mt-4">
                <button className="btn btn-outline btn-primary w-full">
                  বিস্তারিত পড়ুন <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
