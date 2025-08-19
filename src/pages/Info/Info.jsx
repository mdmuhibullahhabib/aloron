import React from 'react';

const examData = [
  {
    name: 'ঢাকা বিশ্ববিদ্যালয় (DU A Unit)',
    marks: '100',
    time: '1.5 ঘণ্টা',
    type: 'MCQ + CQ',
    syllabus: 'পদার্থ=15, রসায়ন=15, গণিত=15, জীববিজ্ঞান=15',
    secondTime: 'না',
    negativeMarking: '0.25',
    calculator: 'নিষিদ্ধ',
  },
  {
    name: 'BUET Preli.',
    marks: '100',
    time: '1 ঘণ্টা',
    type: 'MCQ',
    syllabus: 'পদার্থ=33, রসায়ন=33, গণিত=34',
    secondTime: 'না',
    negativeMarking: '0.25',
    calculator: 'নিষিদ্ধ (Non-Programmable Allowed)',
  },
  {
    name: 'চট্টগ্রাম বিশ্ববিদ্যালয় (CU A Unit)',
    marks: '100',
    time: '1.5 ঘণ্টা',
    type: 'MCQ + CQ',
    syllabus: 'পদার্থ=25, রসায়ন=25, গণিত=25, জীববিজ্ঞান=25',
    secondTime: 'হ্যাঁ',
    negativeMarking: '0.25',
    calculator: 'নিষিদ্ধ',
  },
  {
    name: 'রাজশাহী বিশ্ববিদ্যালয় (RU A Unit)',
    marks: '100',
    time: '2 ঘণ্টা',
    type: 'MCQ',
    syllabus: 'পদার্থ=30, রসায়ন=30, গণিত=20, জীববিজ্ঞান=20',
    secondTime: 'না',
    negativeMarking: '0.20',
    calculator: 'Allowed',
  },
  {
    name: 'বুয়েট (BUET Preli)',
    marks: '100',
    time: '1 ঘণ্টা',
    type: 'MCQ',
    syllabus: 'পদার্থ=33, রসায়ন=33, গণিত=34',
    secondTime: 'না',
    negativeMarking: '0.25',
    calculator: 'Allowed',
  },
  {
    name: 'জাতীয় বিশ্ববিদ্যালয় (NU)',
    marks: '80',
    time: '1.5 ঘণ্টা',
    type: 'CQ',
    syllabus: 'পদার্থ=20, রসায়ন=20, গণিত=20, জীববিজ্ঞান=20',
    secondTime: 'না',
    negativeMarking: '0',
    calculator: 'Allowed',
  },
];

const AdmissionInfo = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">🎓 ভর্তি পরীক্ষার তথ্য</h2>
      
      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>পরীক্ষার নাম</th>
              <th>মার্কস</th>
              <th>সময়</th>
              <th>টাইপ</th>
              <th>সিলেবাস</th>
              <th>সেকেন্ড টাইম</th>
              <th>নেগেটিভ মার্কিং</th>
              <th>ক্যালকুলেটর</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam, index) => (
              <tr key={index}>
                <td>{exam.name}</td>
                <td>{exam.marks}</td>
                <td>{exam.time}</td>
                <td>{exam.type}</td>
                <td>{exam.syllabus}</td>
                <td>{exam.secondTime}</td>
                <td>{exam.negativeMarking}</td>
                <td>{exam.calculator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdmissionInfo;
