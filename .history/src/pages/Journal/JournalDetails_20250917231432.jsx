import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUserGraduate, FaCalendarAlt, FaFilePdf, FaBookOpen } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useJournal from "../../hooks/useJournal";

const JournalDetails = () => {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);
  const [relatedJournals, setRelatedJournals] = useState([]);
  const [journals] = useJournal();

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
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
          <FaBookOpen className="inline-block text-primary mr-2" />
          {journal.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaUserGraduate className="text-primary" /> {journal.authors}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-primary" /> {journal.date}
          </span>
          <span className="flex items-center gap-1">
            <FaBookOpen className="text-primary" /> {journal.journal}
          </span>
        </div>
      </div>

      {/* Abstract */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">📖 Abstract</h2>
        <p className="text-gray-700 leading-relaxed">{journal.abstract}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <a
          href={journal.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary flex items-center justify-center gap-2 flex-1"
        >
          <FaFilePdf /> Download PDF
        </a>
        <Link
          to="/submit-project"
          className="btn btn-success flex items-center justify-center gap-2 flex-1"
        >
          🚀 Submit Your Project
        </Link>
      </div>

      {/* Related Journals */}
      {relatedJournals.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            🔗 Related Journals
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((r) => (
              <div
                key={r._id}
                className="p-5 border rounded-xl shadow hover:shadow-lg transition bg-white"
              >
                <h4 className="font-semibold text-lg mb-2">{r.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {r.abstract}
                </p>
                <Link
                  to={`/journal/${r._id}`}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Read More →
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
