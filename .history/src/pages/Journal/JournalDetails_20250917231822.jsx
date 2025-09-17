import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUserGraduate, FaCalendarAlt, FaFilePdf, FaLightbulb } from "react-icons/fa";
import useJournal from "../../hooks/useJournal";

const JournalDetails = () => {
  const { id } = useParams();
  const [journals] = useJournal();
  const [journal, setJournal] = useState(null);
  const [relatedJournals, setRelatedJournals] = useState([]);

  useEffect(() => {
    if (journals && journals.length > 0) {
      const found = journals.find((j) => j.id === parseInt(id));
      setJournal(found);

      const related = journals.filter(
        (j) => j.id !== parseInt(id) && j.journal === found.journal
      );
      setRelatedJournals(related);
    }
  }, [id, journals]);

  if (!journal) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-2">
          <FaLightbulb className="text-yellow-500" /> {journal.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <FaUserGraduate className="text-primary" /> {journal.authors}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-primary" /> {journal.date}
          </span>
          <span className="flex items-center gap-1">
            <FaLightbulb className="text-primary" /> {journal.journal}
          </span>
        </div>
      </div>

      {/* Abstract */}
      <div className="bg-base-100 border border-gray-200 rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">📖 Abstract</h2>
        <p className="text-gray-700 leading-relaxed">{journal.abstract}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <a
          href={journal.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-secondary flex-1 flex items-center justify-center gap-2"
        >
          <FaFilePdf /> Download PDF
        </a>
        <Link
          to="/submit-project"
          className="btn btn-success flex-1 flex items-center justify-center gap-2"
        >
          🚀 Submit Your Project
        </Link>
      </div>

      {/* Related Journals */}
      {relatedJournals.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">🔗 Related Journals</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedJournals.map((r) => (
              <div
                key={r.id}
                className="card bg-base-100 shadow-md hover:shadow-xl border border-gray-100 p-5"
              >
                <h4 className="text-lg font-semibold mb-2">{r.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {r.abstract}
                </p>
                <Link
                  to={`/journal/${r.id}`}
                  className="text-primary hover:underline text-sm font-medium"
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
