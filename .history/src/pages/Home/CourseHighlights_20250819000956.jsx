import React from 'react';

const CourseHighlights = () => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold">কোর্সের বৈশিষ্ট্য</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">ডেইলি লাইভ ক্লাস</h3>
          <p className="mt-4">প্রতিদিন লাইভ ক্লাসের মাধ্যমে শেখার সুযোগ।</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">ডিজিটাল প্রশ্নব্যাংক</h3>
          <p className="mt-4">বিভিন্ন বিষয়ের ডিজিটাল প্রশ্নব্যাংক।</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">পারফরম্যান্স ট্র্যাকার</h3>
          <p className="mt-4">আপনার অগ্রগতি ট্র্যাক করার সুবিধা।</p>
        </div>
      </div>
    </div>
  </section>
);

export default CourseHighlights;
