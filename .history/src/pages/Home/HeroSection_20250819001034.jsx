import React from 'react';

const HeroSection = () => (
  <section className="bg-indigo-600 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        শিক্ষায়, চর্চায় ও সহযোগিতায়
      </h1>
      <p className="mt-4 text-lg">
        শিক্ষার সবকিছু পাঠশালায়
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="btn btn-primary">কোর্স দেখুন</button>
        <button className="btn btn-outline">ভর্তি তথ্য</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
