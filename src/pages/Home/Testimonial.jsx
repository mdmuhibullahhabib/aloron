import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "সন্তুষ্ট শিক্ষার্থী", value: 1200, color: "text-emerald-500" },
  { label: "কোর্স সম্পন্ন", value: 75, color: "text-blue-500" },
  { label: "সাফল্যের হার", value: "98%", color: "text-purple-500" },
  { label: "কমিউনিটি সদস্য", value: 3000, color: "text-orange-500" },
];

const Testimonial = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">আমাদের অর্জন</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <p className={`text-4xl font-bold ${stat.color}`}>
                {typeof stat.value === "number" ? `${stat.value}+` : stat.value}
              </p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
