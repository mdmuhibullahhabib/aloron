import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaFilePdf,
  FaLightbulb,
} from "react-icons/fa";
import useJournal from "../../hooks/useJournal";

const JournalDetails = () => {
  const { id } = useParams();
  const [journals] = useJournal();
  const [journal, setJournal] = useState(null);
  const [relatedJournals, setRelatedJournals] = useState([]);

  useEffect(() => {
    if (journals && journals.length > 0) {
      const found = journals.find((j) => String(j.id) === String(id));
      setJournal(found);

      if (found) {
        const related = journals.filter(
          (j) => String(j.id) !== String(id) && j.journal === found.journal
        );
        setRelatedJournals(related);
      }
    }
  }, [id, journals]);

  // if (!journal) {
  //   return (
  //     <div className="flex justify-center items-center h-64">
  //       <span className="loading loading-spinner loading-lg text-primary"></span>
  //     </div>
  //   );
  // }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          <FaLightbulb className="text-yellow-400" /> {journal.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm md:text-base">
          <span className="flex items-center gap-1">
            <FaUserGraduate className="text-indigo-500" /> {journal.authors}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-indigo-500" /> {journal.date}
          </span>
          <span className="flex items-center gap-1">
            <FaLightbulb className="text-indigo-500" /> {journal.journal}
          </span>
        </div>
      </div>

      {/* Abstract */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
          📖 Abstract
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          {journal.abstract}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <a
          href={journal.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-secondary flex-1 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          <FaFilePdf /> Download PDF
        </a>
        <Link
          to="/submit-project"
          className="btn btn-success flex-1 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          🚀 Submit Your Project
        </Link>
      </div>

      {/* Related Journals */}
      {relatedJournals.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            🔗 Related Journals
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedJournals.map((r) => (
              <div
                key={r.id}
                className="card bg-white shadow-md hover:shadow-xl border border-gray-100 p-6 rounded-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  {r.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {r.abstract}
                </p>
                <Link
                  to={`/journal/${r.id}`}
                  className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm font-medium"
                >
                  বিস্তারিত পড়ুন →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default JournalDetails;
