import React from "react";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaFilePdf,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const journals = [
  {
    id: 1,
    title: "স্মার্ট ভিলেজ ম্যানেজমেন্ট সিস্টেম",
    authors: "মো. জুবায়ের হাসান (ঢাকা বিশ্ববিদ্যালয়)",
    journal: "ইনোভেটিভ প্রোজেক্ট জার্নাল",
    date: "জুলাই ২০২৫",
    abstract:
      "এই প্রোজেক্টের মাধ্যমে একটি স্মার্ট গ্রাম পরিচালনা ব্যবস্থা তৈরি করা হয়েছে, যেখানে IoT এবং AI ব্যবহারের মাধ্যমে কৃষি, শিক্ষা ও স্বাস্থ্যসেবা উন্নত করার পরিকল্পনা রয়েছে।",
    pdfLink: "#",
  },
  {
    id: 2,
    title: "বাংলাদেশে পরিবেশবান্ধব বিদ্যুৎ উৎপাদন",
    authors: "সাবরিনা রহমান (বুয়েট)",
    journal: "গ্লোবাল ইনোভেশন জার্নাল",
    date: "জুন ২০২৫",
    abstract:
      "এই গবেষণা প্রকল্পে সৌর ও বায়ু শক্তি ব্যবহার করে সাশ্রয়ী বিদ্যুৎ উৎপাদনের একটি নতুন মডেল প্রস্তাব করা হয়েছে, যা গ্রামীণ এলাকায় টেকসই বিদ্যুৎ সরবরাহ করতে পারে।",
    pdfLink: "#",
  },
  {
    id: 3,
    title: "শিক্ষার্থীদের জন্য AI ভিত্তিক এক্সাম প্রিপারেশন অ্যাপ",
    authors: "রাকিবুল ইসলাম (চট্টগ্রাম বিশ্ববিদ্যালয়)",
    journal: "স্টুডেন্ট ইনোভেশন জার্নাল",
    date: "এপ্রিল ২০২৫",
    abstract:
      "এই অ্যাপটি AI ব্যবহার করে শিক্ষার্থীদের পারফরম্যান্স বিশ্লেষণ করে এবং ব্যক্তিগতকৃত প্রশ্নব্যাংক সরবরাহ করে। বাংলাদেশের শিক্ষার্থীদের জন্য এটি একটি বড় ধরনের সহায়তা হতে পারে।",
    pdfLink: "#",
  },
];

const JournalPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          💡 ইনোভেটিভ প্রোজেক্ট জার্নাল (বাংলাদেশ ভিত্তিক)
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          শিক্ষার্থী ও গবেষকরা তাঁদের নতুন নতুন ইনোভেটিভ প্রোজেক্ট, আইডিয়া এবং
          গবেষণা এখানে প্রকাশ করতে পারবেন। আন্তর্জাতিক মানের প্ল্যাটফর্মের
          মাধ্যমে বিশ্ববাসী বাংলাদেশের উদ্ভাবন সম্পর্কে জানবে।
        </p>
      </div>

      {/* Journal List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {journals.map((journal) => (
          <div
            key={journal.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            <div className="p-6 flex flex-col flex-1">
              {/* Title */}
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-800">
                <FaLightbulb className="text-yellow-500" /> {journal.title}
              </h2>

              {/* Authors + Date */}
              <div className="flex flex-wrap text-sm text-gray-500 gap-x-6 gap-y-2 mb-3">
                <span className="flex items-center gap-1">
                  <FaUserGraduate className="text-indigo-500" />{" "}
                  {journal.authors}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-green-500" /> {journal.date}
                </span>
              </div>

              {/* Abstract */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                {journal.abstract}
              </p>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <Link
                  to={`/journal/${journal.id}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
                >
                  বিস্তারিত পড়ুন
                </Link>
                <a
                  href={journal.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-indigo-300 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-50 transition"
                >
                  <FaFilePdf className="mr-2" /> পিডিএফ
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Project Section */}
      <div className="mt-16 text-center">
        <Link
          to="/submit-project"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium text-lg rounded-xl shadow-md hover:bg-green-700 transition"
        >
          🚀 নতুন ইনোভেটিভ প্রোজেক্ট প্রকাশ করুন
        </Link>
        <p className="text-gray-600 mt-3 text-sm">
          আপনার তৈরি করা প্রোজেক্ট বা আইডিয়া আন্তর্জাতিকভাবে প্রদর্শনের জন্য জমা দিন।
        </p>
      </div>
    </section>
  );
};

export default JournalPage;
