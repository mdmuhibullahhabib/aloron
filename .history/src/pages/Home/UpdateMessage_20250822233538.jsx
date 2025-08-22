import React, { useEffect, useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const PathshalaMessage = () => {
  const flickingRef = useRef(null);


  useEffect(() => {
    const flicking = flickingRef.current;

    const interval = setInterval(() => {
      // ✅ MARKED: Check if animation is already running
      if (flicking && !flicking.animating) {
        flicking.next().catch(() => {
          // ✅ MARKED: If next fails, go back to start smoothly
          flicking.moveTo(0, 500).catch(() => {});
        });
      }
    }, 3000); // ✅ MARKED: scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const messages = [
    {
      title: "HSC-24: SUST",
      text: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের আবেদনের সময়সীমা ৩১ জানুয়ারি পর্যন্ত বাড়ানো হয়েছে।",
      color: "bg-slate-800",
    },
    {
      title: "HSC-24: BU",
      text: "বরিশাল বিশ্ববিদ্যালয় এবার স্বতন্ত্রভাবে ভর্তি পরীক্ষা নেবে।",
      color: "bg-stone-700",
    },
    {
      title: "HSC-24: CoU",
      text: "কুমিল্লা বিশ্ববিদ্যালয়ের ভর্তি আবেদন ২ ফেব্রুয়ারি থেকে ২২ ফেব্রুয়ারি পর্যন্ত চলবে; আবেদন ফি ১০০০ টাকা।",
      color: "bg-black",
    },
    {
      title: "HSC-24: NU",
      text: "জাতীয় বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষা ৩ মে পরিবর্তে ২৪ মে অনুষ্ঠিত হবে।",
      color: "bg-green-600",
    },
    {
      title: "HSC-24: BU",
      text: "বরিশাল বিশ্ববিদ্যালয় এবার স্বতন্ত্রভাবে ভর্তি পরীক্ষা নেবে।",
      color: "bg-stone-700",
    },
    {
      title: "HSC-24: CoU",
      text: "কুমিল্লা বিশ্ববিদ্যালয়ের ভর্তি আবেদন ২ ফেব্রুয়ারি থেকে ২২ ফেব্রুয়ারি পর্যন্ত চলবে; আবেদন ফি ১০০০ টাকা।",
      color: "bg-black",
    },
    {
      title: "HSC-24: NU",
      text: "জাতীয় বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষা ৩ মে পরিবর্তে ২৪ মে অনুষ্ঠিত হবে।",
      color: "bg-green-600",
    },
  ];

  return (
    <div className="w-full py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">নতুন বার্তা</h2>
      <Flicking
        ref={flickingRef}
        align="center"
        circular={true}
        horizontal={true}
        moveType="snap"
        deceleration={0.007}
        duration={500}
        className="w-full"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flicking-panel w-72 h-48 ${msg.color} text-white flex flex-col justify-center items-center p-4 rounded-xl shadow-lg mx-3`}
          >
            <h3 className="font-bold text-lg mb-2">{msg.title}</h3>
            <p className="text-sm leading-relaxed">{msg.text}</p>
            <p className="mt-2 text-xs">- পাঠশালা বার্তা</p>
          </div>
        ))}
      </Flicking>
    </div>
  );
};

export default PathshalaMessage;
