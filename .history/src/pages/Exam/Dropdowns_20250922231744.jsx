import React, { useState } from "react";

const subjects = {
  বিজ্ঞান: {

    পদার্থবিজ্ঞান_১ম: [
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
    পদার্থবিজ্ঞান_২য়: [
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
    রসায়ন_১ম: [
      "অধ্যায় ১: ল্যাবরেটরির নিরাপদ ব্যবহার",
      "অধ্যায় ২: গুণগত রসায়ন",
      "অধ্যায় ৩: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন",
      "অধ্যায় ৪: রাসায়নিক পরিমাপ ও শক্তি",
      "অধ্যায় ৫: রাসায়নিক পরিবর্তন",
    ],
    রসায়ন_২য়: [
      "অধ্যায় ১: পরিবেশ রসায়ন",
      "অধ্যায় ২: জৈব রসায়ন",
      "অধ্যায় ৩: পরিমাণগত রসায়ন",
      "অধ্যায় ৪: তড়িৎ রসায়ন",
      "অধ্যায় ৫: কর্মমুখী রসায়ন",
    ],
    জীববিজ্ঞান_১ম: [
      "অধ্যায় ১:  কোষ ও এর গঠন",
      "অধ্যায় ২: কোষ বিভাজন",
      "অধ্যায় ৩: কোষ রসায়ন",
      "অধ্যায় ৪: অণুজীব",
      "অধ্যায় ৫: শৈবাল ও ছত্রাক",
      "অধ্যায় ৬: ব্রায়োফাইটা ও টেরিডোফাইটা",
      "অধ্যায় ৭: নগ্নবীজী ও আবৃতবীজী উদ্ভিদ",
      "অধ্যায় ৮: টিস্যু ও টিস্যুতন্ত্র",
      "অধ্যায় ৯: উদ্ভিদ শরীরতত্ত্ব",
      "অধ্যায় ১০: উদ্ভিদ প্রজনন",
      "অধ্যায় ১১: জীবপ্রযুক্তি",
      "অধ্যায় ১২: জীবের পরিবেশ, বিস্তার ও সংরক্ষন",
    ],
    জীববিজ্ঞান_২য়: [
      "অধ্যায় ১:  প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস",
      "অধ্যায় ২: প্রাণীর পরিচিতি",
      "অধ্যায় ৩: পরিপাক ও শোষণ",
      "অধ্যায় ৪: রক্ত ও সংবহন",
      "অধ্যায় ৫: শ্বসন ও শ্বাসক্রিয়া",
      "অধ্যায় ৬: বর্জ্য ও নিষ্কাশন",
      "অধ্যায় ৭: চলন ও অঙ্গচালনা",
      "অধ্যায় ৮: সমন্বয় ও নিয়ন্ত্রন",
      "অধ্যায় ৯: মানব জীবনের ধারাবাহিকতা",
      "অধ্যায় ১০: মানবদেহের প্রতিরক্ষা",
      "অধ্যায় ১১: জিন তত্ত্ব ও বিবর্তন",
      "অধ্যায় ১২: প্রাণীর আচরণ",
    ],
    গণিত_১ম: [
      "অধ্যায় ১: বাস্তব সংখ্যা ও অসমতা",
      "অধ্যায় ২: যোগাশ্রয়ী প্রোগ্রাম",
      "অধ্যায় ৩: জটিল সংখ্যা",
      "অধ্যায় ৪: বহুপদী ও বহুপদী সমীকরণ",
      "অধ্যায় ৫: দ্বিপদী বিস্তৃতি",
      "অধ্যায় ৬: কণিক",
      "অধ্যায় ৭: ত্রিকোণমিতিক ফাংশন",
      "অধ্যায় ৮: স্থিতিবিদ্যা",
      "অধ্যায় ৯: সমতলে বস্তুকণার গতি",
      "অধ্যায় ১০: বিস্তার পরিমাপ ও সম্ভাবনা"
    ],
    গণিত_২য়: [
      "অধ্যায় ১: বাস্তব সংখ্যা ও অসমতা",
      "অধ্যায় ২: যোগাশ্রয়ী প্রোগ্রাম",
      "অধ্যায় ৩: জটিল সংখ্যা",
      "অধ্যায় ৪: বহুপদী ও বহুপদী সমীকরণ",
      "অধ্যায় ৫: দ্বিপদী বিস্তৃতি",
      "অধ্যায় ৬: কণিক",
      "অধ্যায় ৭: ত্রিকোণমিতিক ফাংশন",
      "অধ্যায় ৮: স্থিতিবিদ্যা",
      "অধ্যায় ৯: সমতলে বস্তুকণার গতি",
      "অধ্যায় ১০: বিস্তার পরিমাপ ও সম্ভাবনা"
    ],

  },
  মানবিক: {
    ইংরেজি_১ম: [
      {
        unit: "Unit One: Education and Life",
        lessons: [
          "Lesson 1: The Parrot's Tale",
          "Lesson 2: Education and Technology",
          "Lesson 3: Children in School",
          "Lesson 4: Civic Engagement"
        ]
      },
      {
        unit: "Unit Two: Art and Craft",
        lessons: [
          "Lesson 1: What is Beauty?",
          "Lesson 2: Folk Music",
          "Lesson 3: Art",
          "Lesson 4: Craft"
        ]
      },
      {
        unit: "Unit Three: Myths and Literature",
        lessons: [
          "Lesson 1: Myths of Bengal",
          "Lesson 2: Icarus",
          "Lesson 3: The Legend of Gazi",
          "Lesson 4: Khona"
        ]
      },
      {
        unit: "Unit Four: History",
        lessons: [
          "Lesson 1: Three Speeches",
          "Lesson 2: Great Women"
        ]
      },
      {
        unit: "Unit Five: Human Rights",
        lessons: [
          "Lesson 1: Are We Aware of These Rights-I?",
          "Lesson 2: Are We Aware of These Rights-II?",
          "Lesson 3: Rights to Health and Education",
          "Lesson 4: Coal Miners",
          "Lesson 5: Frederick Douglass"
        ]
      },
      {
        unit: "Unit Six: Dreams",
        lessons: [
          "Lesson 1: What is a Dream?",
          "Lesson 2: Dreams in Literature"
        ]
      },
      {
        unit: "Unit Seven: Youthful Achievers",
        lessons: [
          "Lesson 1: Brojen Das: On Crossing the English Channel",
          "Lesson 2: Scaling a Mountain Peak",
          "Lesson 3: The Unbeaten Girls"
        ]
      },
      {
        unit: "Unit Eight: Relationships",
        lessons: [
          "Lesson 1: Family Relationship",
          "Lesson 2: Warmth in Relationships",
          "Lesson 3: A Mother in Mannville",
          "Lesson 4: Love"
        ]
      },
      {
        unit: "Unit Nine: Adolescence",
        lessons: [
          "Lesson 1: Storm and Stresses of Adolescence",
          "Lesson 2: Adolescence and Some (Related) Problems in Bangladesh",
          "Lesson 3: The Story of Shilpi",
          "Lesson 4: Say 'No' to Bullying"
        ]
      },
      {
        unit: "Unit Ten: Lifestyle",
        lessons: [
          "Lesson 1: Manners around the World",
          "Lesson 2: Etiquette Netiquette",
          "Lesson 3: Food and Culture",
          "Lesson 4: Fitness",
          "Lesson 5: Consumerism"
        ]
      },
      {
        unit: "Unit Eleven: Peace and Conflict",
        lessons: [
          "Lesson 1: Situations of Conflict",
          "Lesson 2: \"The Old Man at the Bridge\" by Ernest Hemingway",
          "Lesson 3: Stories From Gaza",
          "Lesson 4: Peace in Literature",
          "Lesson 5: Opinions through images"
        ]
      },
      {
        unit: "Unit Twelve: Environment and Nature",
        lessons: [
          "Lesson 1: Water, Water Everywhere...",
          "Lesson 2: The Greta Effect",
          "Lesson 3: Endangered Species",
          "Lesson 4: What is Environmental Justice?",
          "Lesson 5: Limits of the Scientific Method"
        ]
      }
    ],
    বাংলা_১ম: [
      {
        category: "সাহিত্যপাঠ গদ্য",
        items: [
          "বাঙ্গালার নব্য লেখকদিগের প্রতি নিবেদন - বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
          "অপরিচিতা - রবীন্দ্রনাথ ঠাকুর",
          "সাহিত্যে খেলা - প্রমথ চৌধুরী",
          "বিলাসী - শরৎচন্দ্র চট্টোপাধ্যায়",
          "অর্ধাঙ্গী - রোকেয়া সাখাওয়াত হোসেন",
          "যৌবনের গান - কাজী নজরুল ইসলাম",
          "জীবন ও বৃক্ষ - মোতাহের হোসেন চৌধুরী",
          "গন্তব্য কাবুল - সৈয়দ মুজতবা আলী",
          "মাসি-পিসি - মানিক বন্দ্যোপাধ্যায়",
          "কপিলদাস মুর্মুর শেষ কাজ - শওকত আলী",
          "রেইনকোট - আখতারুজ্জামান ইলিয়াস",
          "নেকলেস - গী দ্য মোপাসাঁ"
        ]
      },
      {
        category: "সাহিত্যপাঠ কবিতা",
        items: [
          "ঋতু-বর্ণন - আলাওল",
          "বিভীষণের প্রতি মেঘনাদ - মাইকেল মধুসূদন দত্ত",
          "সোনার তরী - রবীন্দ্রনাথ ঠাকুর",
          "বিদ্রোহী - কাজী নজরুল ইসলাম",
          "সুচেতনা - জীবনানন্দ দাশ",
          "প্রতিদান - জসীমউদ্‌দীন",
          "তাহারেই পড়ে মনে - সুফিয়া কামাল",
          "পদ্মা - ফরুখ আহমদ",
          "ফেব্রুয়ারি ১৯৬৯ - শামসুর রাহমান",
          "আঠার বছর বয়স - সুকান্ত ভট্টাচার্য",
          "আমি কিংবদন্তির কথা বলছি - আবু জাফর ওবায়দুল্লাহ্",
          "প্রত্যাবর্তনের লজ্জা - আল মাহমুদ"
        ]
      },
      {
        category: "সহপাঠ উপন্যাস",
        items: [
          "লালসালু - সৈয়দ ওয়ালীউল্লাহ"
        ]
      },
      {
        category: "সহপাঠ নাটক",
        items: [
          "সিরাজউদ্দৌলা - সিকান্দার আবু জাফর"
        ]
      }
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
        className="w-full border rounded-lg p-2 
             bg-white text-gray-900   
             dark:bg-gray-800 dark:text-white dark:border-gray-600 
             focus:outline-none focus:ring-2"
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
