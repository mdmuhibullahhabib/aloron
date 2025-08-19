import React from "react";
import { FaUserGraduate, FaCalendarAlt, FaFilePdf, FaLightbulb } from "react-icons/fa";
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
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          💡 ইনোভেটিভ প্রোজেক্ট জার্নাল (বাংলাদেশ ভিত্তিক)
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          শিক্ষার্থী ও গবেষকরা তাঁদের নতুন নতুন ইনোভেটিভ প্রোজেক্ট, আইডিয়া 
          এবং গবেষণা এখানে প্রকাশ করতে পারবেন। আন্তর্জাতিক মানের 
          প্ল্যাটফর্মের মাধ্যমে বিশ্ববাসী বাংলাদেশের উদ্ভাবন সম্পর্কে জানবে।
        </p>
      </div>

      {/* Journal List */}
      <div className="grid gap-6 md:grid-cols-2">
        {journals.map((journal) => (
          <div
            key={journal.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <div className="card-body">
              {/* Title */}
              <h2 className="card-title text-xl font-semibold mb-2 flex items-center gap-2">
                <FaLightbulb className="text-yellow-500" /> {journal.title}
              </h2>

              {/* Authors + Journal */}
              <div className="flex flex-wrap text-sm text-gray-500 gap-4 mb-2">
                <span className="flex items-center gap-1">
                  <FaUserGraduate className="text-primary" /> {journal.authors}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-primary" /> {journal.date}
                </span>
              </div>

              {/* Abstract */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {journal.abstract}
              </p>

              {/* Actions */}
              <div className="card-actions flex gap-2">
                {/* Read More */}
                <Link
                  to={`/journal/${journal.id}`}
                  className="btn btn-primary flex-1"
                >
                  বিস্তারিত পড়ুন
                </Link>

                {/* Download */}
                <a
                  href={journal.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-secondary flex-1"
                >
                  <FaFilePdf className="mr-2" /> পিডিএফ
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Project Section */}
      <div className="mt-12 text-center">
        <Link to="/submit-project" className="btn btn-success btn-lg">
          🚀 নতুন ইনোভেটিভ প্রোজেক্ট প্রকাশ করুন
        </Link>
        <p className="text-gray-600 mt-2 text-sm">
          আপনার তৈরি করা প্রোজেক্ট বা আইডিয়া আন্তর্জাতিকভাবে প্রদর্শনের জন্য জমা দিন।
        </p>
      </div>
    </section>
  );
};

export default JournalPage;
