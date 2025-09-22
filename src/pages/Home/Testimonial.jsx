import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { label: "সন্তুষ্ট শিক্ষার্থী", value: 1200, color: "text-emerald-400" },
  { label: "কোর্স সম্পন্ন", value: 75, color: "text-blue-400" },
  { label: "সাফল্যের হার", value: 98, suffix: "%", color: "text-purple-400" },
  { label: "কমিউনিটি সদস্য", value: 3000, color: "text-orange-400" },
];

const Testimonial = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-green-400 drop-shadow-md">
          আমাদের অর্জন
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-[#1f1f1f] rounded-xl shadow-md border border-gray-700 hover:border-green-400 hover:shadow-green-500/20 transition-all duration-300"
            >
              <p className={`text-4xl font-bold ${stat.color}`}>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix || "+"}
                />
              </p>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
