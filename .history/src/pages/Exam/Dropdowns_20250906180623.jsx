import React, { useState } from "react";

const subjects = {
  বিজ্ঞান: {
       "পদার্থবিজ্ঞান ১ম পত্র": [
      "অধ্যায় ১: ভৌত জগৎ ও পরিমাপ",
      "অধ্যায় ২: ভেক্টর",
      "অধ্যায় ৩: গতিবিদ্যা",
      "অধ্যায় ৪: নিউটোনীয় বলবিদ্যা",
      "অধ্যায় ৫: কাজ, শক্তি ও ক্ষমতা",
      "অধ্যায় ৬: মহাকর্ষ ও অভিকর্ষ",
      "অধ্যায় ৭: পদার্থের গাঠনিক ধর্ম",
      "অধ্যায় ৮: পর্যায়বৃত্ত গতি",
      "অধ্যায় ৯: তরঙ্গ",
      "অধ্যায় ১০: আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব",
      "অধ্যায় ১১: শব্দ",
    ],
    পদার্থবিজ্ঞান ২য় পত্র: [
      "অধ্যায় ১: তাপগতিবিদ্যা",
      "অধ্যায় ২: স্থির তড়িৎ",
      "অধ্যায় ৩: চল তড়িৎ",
      "অধ্যায় ৪: চৌম্বক ক্ষেত্র",
      "অধ্যায় ৫: তড়িৎচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ",
      "অধ্যায় ৬: জ্যামিতিক আলোকবিজ্ঞান",
      "অধ্যায় ৭: ভৌত আলোকবিজ্ঞান",
      "অধ্যায় ৮: আধুনিক পদার্থবিজ্ঞানের সূচনা",
      "অধ্যায় ৯: পরমাণু মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান",
      "অধ্যায় ১০: সেমিকন্ডাক্টর ও ইলেকট্রনিক্স",
      "অধ্যায় ১১: জ্যোতির্বিজ্ঞান",
      "অধ্যায় ১২: আপেক্ষিকতা",
    ],
    রসায়ন: [
      "অধ্যায় ১: গ্যাস",
      "অধ্যায় ২: গঠন",
      "অধ্যায় ৩: রাসায়নিক বন্ধন",
      "অধ্যায় ৪: তাপ রসায়ন",
      "অধ্যায় ৫: জৈব রসায়ন",
    ],
    জীববিজ্ঞান: [
      "অধ্যায় ১: কোষ",
      "অধ্যায় ২: জিনতত্ত্ব",
      "অধ্যায় ৩: মানবদেহ",
      "অধ্যায় ৪: পরিবেশ",
    ],
    গণিত: [
      "অধ্যায় ১: বীজগণিত",
      "অধ্যায় ২: জ্যামিতি",
      "অধ্যায় ৩: ত্রিকোণমিতি",
      "অধ্যায় ৪: ক্যালকুলাস",
    ],
  },
  মানবিক: {
    ইতিহাস: [
      "অধ্যায় ১: প্রাচীন সভ্যতা",
      "অধ্যায় ২: মধ্যযুগ",
      "অধ্যায় ৩: বাংলাদেশ",
    ],
    রাষ্ট্রবিজ্ঞান: [
      "অধ্যায় ১: রাষ্ট্র",
      "অধ্যায় ২: সরকার",
      "অধ্যায় ৩: সংবিধান",
    ],
    অর্থনীতি: [
      "অধ্যায় ১: মৌলিক ধারণা",
      "অধ্যায় ২: চাহিদা ও জোগান",
      "অধ্যায় ৩: জাতীয় আয়",
    ],
    ভূগোল: [
      "অধ্যায় ১: ভৌগোলিক মানচিত্র",
      "অধ্যায় ২: জলবায়ু",
      "অধ্যায় ৩: পরিবেশ ও সম্পদ",
    ],
  },
  বাণিজ্য: {
    হিসাববিজ্ঞান: [
      "অধ্যায় ১: লেনদেন",
      "অধ্যায় ২: হিসাববই",
      "অধ্যায় ৩: আর্থিক বিবরণী",
    ],
    ব্যবসায়সংগঠন: [
      "অধ্যায় ১: ব্যবসার ধরন",
      "অধ্যায় ২: ব্যবস্থাপনা",
      "অধ্যায় ৩: বিপণন",
    ],
    উৎপাদনব্যবস্থাপনা: [
      "অধ্যায় ১: উৎপাদন",
      "অধ্যায় ২: গুণগত মান",
      "অধ্যায় ৩: সরবরাহ চেইন",
    ],
    অর্থনীতি: [
      "অধ্যায় ১: অর্থনৈতিক ব্যবস্থা",
      "অধ্যায় ২: চাহিদা",
      "অধ্যায় ৩: বাজার",
    ],
  },
};

const Dropdowns = ({ setSelected }) => {
  const [group, setGroup] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");

  const handleChange = (field, value) => {
    if (field === "group") {
      setGroup(value);
      setSubject("");
      setChapter("");
      setSelected({ group: value, subject: "", chapter: "" });
    }
    if (field === "subject") {
      setSubject(value);
      setChapter("");
      setSelected({ group, subject: value, chapter: "" });
    }
    if (field === "chapter") {
      setChapter(value);
      setSelected({ group, subject, chapter: value });
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {/* গ্রুপ */}
      <select
        className="w-full border rounded-lg p-2"
        value={group}
        onChange={(e) => handleChange("group", e.target.value)}
      >
        <option value="">শাখা</option>
        {Object.keys(subjects).map((grp) => (
          <option key={grp} value={grp}>
            {grp}
          </option>
        ))}
      </select>

      {/* বিষয় */}
      <select
        className="w-full border rounded-lg p-2"
        value={subject}
        onChange={(e) => handleChange("subject", e.target.value)}
        disabled={!group}
      >
        <option value="">বিষয়</option>
        {group &&
          Object.keys(subjects[group]).map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
      </select>

      {/* অধ্যায় */}
      <select
        className="w-full border rounded-lg p-2"
        value={chapter}
        onChange={(e) => handleChange("chapter", e.target.value)}
        disabled={!subject}
      >
        <option value="">অধ্যায়</option>
        {subject &&
          subjects[group][subject].map((ch, i) => (
            <option key={i} value={ch}>
              {ch}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdowns;
