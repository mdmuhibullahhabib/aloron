import React from 'react';

const AdmissionAlerts = () => (
  <section className="py-16 bg-indigo-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold">পাঠশালা বার্তা</h2>
      <div className="mt-8 space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">HSC-24: NU</h3>
          <p className="mt-2">জাতীয় বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষা ৩ মে'র পরিবর্তে ২৪ মে অনুষ্ঠিত হবে।</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">HSC-24: GST</h3>
          <p className="mt-2">গুচ্ছের আবেদন শুরু ৫ মার্চ থেকে৷ আবেদন চলবে ১৫ মার্চ পর্যন্ত ; আবেদন ফি ১৫০০ টাকা।</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">HSC-24: NITOR</h3>
          <p className="mt-2">নিটোরের ভর্তি আবেদন শেষ হবে আগামীকাল, পরীক্ষা হবে ৩ মে। আবেদন ফি ১০০০ টাকা।</p>
        </div>
      </div>
    </div>
  </section>
);

export default AdmissionAlerts;
