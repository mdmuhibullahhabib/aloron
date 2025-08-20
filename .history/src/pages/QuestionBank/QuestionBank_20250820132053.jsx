// Que.jsx
import React, { useMemo, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { FaUniversity, FaBookOpen, FaFlask } from "react-icons/fa";

// ---------- Fake data (sample) ----------
const DATA = {
  // প্রতিষ্ঠান ভিত্তিক
  institutions: [
    {
      id: "du",
      name: "ঢাকা বিশ্ববিদ্যালয়",
      banner: "https://placehold.co/800x300?text=DU",
      departments: [
        {
          id: "du-fst",
          name: "বিজ্ঞান অনুষদ",
          icon: <FaFlask />,
          questions: [
            { id: "q1", title: "ভেক্টর: বেসিক MCQ", year: "2021", count: 50, duration: 60 },
            { id: "q2", title: "কাইনেমেটিক্স সেট", year: "2022", count: 40, duration: 50 },
          ],
        },
        {
          id: "du-fass",
          name: "কলা অনুষদ",
          icon: <FaBookOpen />,
          questions: [
            { id: "q3", title: "বাংলা সাহিত্য সেট", year: "2020", count: 60, duration: 60 },
          ],
        },
      ],
    },
    {
      id: "ju",
      name: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
      banner: "https://placehold.co/800x300?text=JU",
      // বিভাগ নাই: সরাসরি সব প্রশ্ন দেখাবে
      departments: [],
      questions: [
        { id: "q4", title: "জেনারেল নলেজ সেট", year: "2022", count: 100, duration: 60 },
        { id: "q5", title: "অ্যাপটিটিউড বেসিক", year: "2023", count: 80, duration: 50 },
      ],
    },
  ],
  // মডেল টেস্ট
  modelTests: [
    { id: "m1", title: "BUET Preli 2022", count: 100, duration: 60 },
    { id: "m2", title: "Medical 2022", count: 100, duration: 60 },
    { id: "m3", title: "IUT 2022", count: 100, duration: 60 },
    { id: "m4", title: "Dental 2022", count: 100, duration: 60 },
  ],
  // বিষয় ভিত্তিক
  subjects: [
    {
      id: "phy",
      name: "পদার্থবিজ্ঞান",
      topics: [
        { id: "s1", title: "ভেক্টর", years: ["2019", "2020", "2021", "2022"] },
        { id: "s2", title: "কাইনেমেটিক্স", years: ["2021", "2022"] },
      ],
    },
    {
      id: "chem",
      name: "রসায়ন",
      topics: [{ id: "s3", title: "অরগানিক বেসিক", years: ["2020", "2022"] }],
    },
  ],
};

// ---------- Tiny UI helpers ----------
const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    {subtitle && <p className="text-gray-500">{subtitle}</p>}
  </div>
);

const Card = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition cursor-pointer border border-gray-100"
  >
    {children}
  </div>
);

// ---------- Level 3: Questions List ----------
const QuestionList = ({ items, onBack, title }) => (
  <div>
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-xl font-bold">{title}</h3>
      <button className="btn btn-sm" onClick={onBack}>← ফিরে যান</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((q) => (
        <Card key={q.id}>
          <div className="flex items-center justify-between">
            <span className="badge">Year {q.year || "-"}</span>
            <span className="text-sm text-gray-500">{q.count} প্রশ্ন · {q.duration} মিনিট</span>
          </div>
          <h4 className="mt-3 font-semibold">{q.title}</h4>
          <button className="btn btn-sm btn-primary mt-4 w-full">প্র্যাকটিস শুরু</button>
        </Card>
      ))}
    </div>
  </div>
);

// ---------- Level 2: Departments (or direct Qs) ----------
const UniversityPage = ({ uni, onBack }) => {
  const [stage, setStage] = useState(
    uni.departments && uni.departments.length > 0 ? "departments" : "questions"
  );
  const [selectedDept, setSelectedDept] = useState(null);

  const allQs = useMemo(() => {
    if (!uni.departments || uni.departments.length === 0) return uni.questions || [];
    return uni.departments.flatMap((d) => d.questions || []);
  }, [uni]);

  // Header
  return (
    <div>
      <div className="mb-6">
        <div className="rounded-2xl overflow-hidden">
          <img src={uni.banner} alt={uni.name} className="w-full h-44 object-cover" />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{uni.name}</h2>
          <button className="btn btn-sm" onClick={onBack}>← সব বিশ্ববিদ্যালয়</button>
        </div>
      </div>

      {stage === "departments" && (
        <>
          <SectionTitle title="বিভাগ নির্বাচন করুন" subtitle="বিভাগভিত্তিক প্রশ্ন দেখুন" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {uni.departments.map((d) => (
              <Card key={d.id} onClick={() => { setSelectedDept(d); setStage("deptQuestions"); }}>
                <div className="flex items-center gap-3">
                  <div className="text-xl">{d.icon}</div>
                  <div>
                    <h4 className="font-semibold">{d.name}</h4>
                    <p className="text-sm text-gray-500">{(d.questions || []).length} সেট</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <SectionTitle title="সব প্রশ্ন (সব বিভাগ)" />
          <QuestionList
            items={allQs}
            onBack={() => {}}
            title="ইউনিভার্সিটি—সব প্রশ্ন"
          />
        </>
      )}

      {stage === "deptQuestions" && selectedDept && (
        <QuestionList
          items={selectedDept.questions || []}
          onBack={() => setStage("departments")}
          title={`${selectedDept.name} — প্রশ্নসমূহ`}
        />
      )}

      {stage === "questions" && (
        <QuestionList
          items={uni.questions || []}
          onBack={onBack}
          title="ইউনিভার্সিটি—সব প্রশ্ন"
        />
      )}
    </div>
  );
};

// ---------- Level 1: Main Que ----------
const Que = () => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all"); // all | model | subject | institution
  const [view, setView] = useState({ level: "root", uniId: null }); // root | university

  const filteredInstitutions = useMemo(() => {
    const q = search.toLowerCase();
    return DATA.institutions.filter((i) => i.name.toLowerCase().includes(q));
  }, [search]);

  const filteredModelTests = useMemo(() => {
    const q = search.toLowerCase();
    return DATA.modelTests.filter((m) => m.title.toLowerCase().includes(q));
  }, [search]);

  const filteredSubjects = useMemo(() => {
    const q = search.toLowerCase();
    return DATA.subjects.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.topics.some((t) => t.title.toLowerCase().includes(q))
    );
  }, [search]);

  const currentUni = useMemo(
    () => DATA.institutions.find((u) => u.id === view.uniId),
    [view.uniId]
  );

  // Root page content blocks
  const AllBlock = () => (
    <>
      {/* Model tests */}
      <SectionTitle title="মডেল টেস্ট" subtitle="জনপ্রিয় সেটগুলো অনুশীলন করুন" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {filteredModelTests.map((m) => (
          <Card key={m.id}>
            <div className="flex items-center justify-between">
              <span className="badge badge-success badge-outline">Model</span>
              <span className="text-sm text-gray-500">{m.count} প্রশ্ন · {m.duration} মিনিট</span>
            </div>
            <h4 className="mt-3 font-semibold">{m.title}</h4>
            <button className="btn btn-sm btn-primary mt-4 w-full">শুরু করুন</button>
          </Card>
        ))}
      </div>

      {/* Subjects */}
      <SectionTitle title="বিষয় ভিত্তিক" subtitle="বিষয় ও টপিক অনুযায়ী প্রস্তুতি" />
      <div className="space-y-6 mb-10">
        {filteredSubjects.map((s) => (
          <div key={s.id}>
            <h4 className="font-semibold mb-3">{s.name}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {s.topics.map((t) => (
                <Card key={t.id}>
                  <div className="flex items-center justify-between">
                    <span className="badge">Topic</span>
                    <span className="text-xs text-gray-500">
                      {t.years.join(" • ")}
                    </span>
                  </div>
                  <h5 className="mt-2 font-medium">{t.title}</h5>
                  <button className="btn btn-sm btn-outline mt-3 w-full">প্রশ্ন দেখুন</button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Institutions */}
      <SectionTitle title="প্রতিষ্ঠান ভিত্তিক" subtitle="ইউনিভার্সিটি/ইনস্টিটিউট অনুযায়ী প্রশ্ন" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredInstitutions.map((u) => (
          <Card key={u.id} onClick={() => setView({ level: "university", uniId: u.id })}>
            <div className="flex items-center gap-3">
              <div className="text-xl"><FaUniversity /></div>
              <div>
                <h4 className="font-semibold">{u.name}</h4>
                <p className="text-sm text-gray-500">
                  {u.departments.length > 0 ? `${u.departments.length} বিভাগ` : "ডিপার্টমেন্ট নেই"}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );

  const ModelBlock = () => (
    <>
      <SectionTitle title="মডেল টেস্ট" subtitle="সাজেশাননির্ভর মডেল টেস্ট সেট" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredModelTests.map((m) => (
          <Card key={m.id}>
            <div className="flex items-center justify-between">
              <span className="badge badge-success badge-outline">Model</span>
              <span className="text-sm text-gray-500">{m.count} প্রশ্ন · {m.duration} মিনিট</span>
            </div>
            <h4 className="mt-3 font-semibold">{m.title}</h4>
            <button className="btn btn-sm btn-primary mt-4 w-full">শুরু করুন</button>
          </Card>
        ))}
      </div>
    </>
  );

  const SubjectBlock = () => (
    <>
      <SectionTitle title="বিষয় ভিত্তিক" subtitle="বিষয়/টপিক বেছে নিন" />
      <div className="space-y-6">
        {filteredSubjects.map((s) => (
          <div key={s.id}>
            <h4 className="font-semibold mb-3">{s.name}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {s.topics.map((t) => (
                <Card key={t.id}>
                  <div className="flex items-center justify-between">
                    <span className="badge">Topic</span>
                    <span className="text-xs text-gray-500">
                      {t.years.join(" • ")}
                    </span>
                  </div>
                  <h5 className="mt-2 font-medium">{t.title}</h5>
                  <button className="btn btn-sm btn-outline mt-3 w-full">প্রশ্ন দেখুন</button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const InstitutionBlock = () => (
    <>
      <SectionTitle title="প্রতিষ্ঠান ভিত্তিক" subtitle="ইউনিভার্সিটি/ইনস্টিটিউট নির্বাচন করুন" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredInstitutions.map((u) => (
          <Card key={u.id} onClick={() => setView({ level: "university", uniId: u.id })}>
            <div className="flex items-center gap-3">
              <div className="text-xl"><FaUniversity /></div>
              <div>
                <h4 className="font-semibold">{u.name}</h4>
                <p className="text-sm text-gray-500">
                  {u.departments.length > 0 ? `${u.departments.length} বিভাগ` : "ডিপার্টমেন্ট নেই"}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );

  // Rendering
  if (view.level === "university" && currentUni) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <UniversityPage uni={currentUni} onBack={() => setView({ level: "root", uniId: null })} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">প্রশ্ন ব্যাংক</h1>
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="অনায়াসে খুঁজে ফেলুন"
              className="input input-bordered w-full pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <MdOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs tabs-boxed bg-base-100 p-1 rounded-full mb-8">
          <button
            className={`tab rounded-full ${tab === "all" ? "tab-active bg-primary text-white" : ""}`}
            onClick={() => setTab("all")}
          >
            সকল
          </button>
          <button
            className={`tab rounded-full ${tab === "model" ? "tab-active bg-primary text-white" : ""}`}
            onClick={() => setTab("model")}
          >
            মডেল টেস্ট
          </button>
          <button
            className={`tab rounded-full ${tab === "subject" ? "tab-active bg-primary text-white" : ""}`}
            onClick={() => setTab("subject")}
          >
            বিষয় ভিত্তিক
          </button>
          <button
            className={`tab rounded-full ${tab === "institution" ? "tab-active bg-primary text-white" : ""}`}
            onClick={() => setTab("institution")}
          >
            প্রতিষ্ঠান ভিত্তিক
          </button>
        </div>

        {/* Body */}
        {tab === "all" && <AllBlock />}
        {tab === "model" && <ModelBlock />}
        {tab === "subject" && <SubjectBlock />}
        {tab === "institution" && <InstitutionBlock />}
      </div>
    </div>
  );
};

export default QuestionBank;
