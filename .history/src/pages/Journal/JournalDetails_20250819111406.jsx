import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaUserGraduate, FaCalendarAlt, FaArrowLeft, FaFilePdf, FaLightbulb } from "react-icons/fa";

// Demo Data (আপনার চাইলে API থেকে ফেচ করতে পারেন)
const journals = [
  {
    id: 1,
    title: "স্মার্ট ভিলেজ ম্যানেজমেন্ট সিস্টেম",
    authors: "মো. জুবায়ের হাসান (ঢাকা বিশ্ববিদ্যালয়)",
    journal: "ইনোভেটিভ প্রোজেক্ট জার্নাল",
    date: "জুলাই ২০২৫",
    abstract:
      "এই প্রোজেক্টের মাধ্যমে একটি স্মার্ট গ্রাম পরিচালনা ব্যবস্থা তৈরি করা হয়েছে, যেখানে IoT এবং AI ব্যবহারের মাধ্যমে কৃষি, শিক্ষা ও স্বাস্থ্যসেবা উন্নত করার পরিকল্পনা রয়েছে।",
    content: `
      🔹 প্রোজেক্ট আইডিয়া: বাংলাদেশের গ্রামীণ উন্নয়নে IoT এবং AI ভিত্তিক একটি সিস্টেম তৈরি করা।  
      🔹 ফিচার: 
        - স্মার্ট কৃষি ব্যবস্থাপনা  
        - টেলিমেডিসিন সার্ভিস  
        - অনলাইন শিক্ষা সুবিধা  
      🔹 প্রত্যাশিত প্রভাব: 
        এই প্রোজেক্টের মাধ্যমে গ্রামগুলো আরও টেকসই ও আধুনিক হয়ে উঠবে।  
    `,
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
    content: `
      🔹 গবেষণার উদ্দেশ্য: পরিবেশবান্ধব বিদ্যুৎ উৎপাদনের নতুন মডেল।  
      🔹 গবেষণা পদ্ধতি: সৌর ও বায়ু শক্তির সমন্বয়।  
      🔹 উপসংহার: এই মডেল বাংলাদেশে টেকসই বিদ্যুৎ সরবরাহের জন্য অত্যন্ত কার্যকর হতে পারে।  
    `,
    pdfLink: "#",
  },
];

const JournalDetails = () => {
  const { id } = useParams();
  const journal = journals.find((j) => j.id === parseInt(id));

  if (!journal) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold">❌ জার্নাল পাওয়া যায়নি</h2>
        <Link to="/journal" className="btn btn-primary mt-4">
          ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/journal"
          className="btn btn-outline flex items-center gap-2"
        >
          <FaArrowLeft /> সব জার্নাল
        </Link>
      </div>

      {/* Journal Header */}
      <div className="bg-base-100 shadow-md rounded-lg p-6 mb-8 border border-gray-100">
        <h1 className="text-3xl font-bold mb-3 flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" /> {journal.title}
        </h1>

        <div className="flex flex-wrap text-sm text-gray-600 gap-4 mb-4">
          <span className="flex items-center gap-1">
            <FaUserGraduate className="text-primary" /> {journal.authors}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-primary" /> {journal.date}
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">{journal.abstract}</p>
      </div>

      {/* Journal Full Content */}
      <div className="prose max-w-none bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">📖 বিস্তারিত আলোচনা</h2>
        <p className="whitespace-pre-line text-gray-700">{journal.content}</p>
      </div>

      {/* PDF Download */}
      <div className="text-center">
        <a
          href={journal.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <FaFilePdf className="mr-2" /> পিডিএফ ডাউনলোড করুন
        </a>
      </div>
    </section>
  );
};

export default JournalDetails;
