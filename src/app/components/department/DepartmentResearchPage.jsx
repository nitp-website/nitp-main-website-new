"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Spinner from "@/app/components/Spinner.js";
import {
  extractApiArray,
  extractApiPagination,
  getBackendApiUrl,
} from "@/lib/apiHelpers";

const PAGE_LIMIT = 10;

const getDate = (dateStr, useUtc = false) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return "";

  const day = String(useUtc ? date.getUTCDate() : date.getDate()).padStart(2, "0");
  const month = String(
    (useUtc ? date.getUTCMonth() : date.getMonth()) + 1
  ).padStart(2, "0");
  const year = useUtc ? date.getUTCFullYear() : date.getFullYear();

  return `${day}-${month}-${year}`;
};

const cleanText = (text) => {
  if (!text || typeof text !== "string") return text;

  return text
    .replace(/\?/g, "")
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00e2\u201e\u00a2/g, "'")
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00c5\u201c/g, '"')
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00ef\u00bf\u00bd/g, '"')
    .replace(/\u00c3\u201a/g, "")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[\u00A0]/g, " ")
    .replace(/[^\x20-\x7E\u00A1-\u017F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

const groupByYear = (items, yearGetter) =>
  items.reduce((acc, item) => {
    const year = yearGetter(item);
    if (!year || Number.isNaN(Number(year))) return acc;
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

const renderJournal = (paper) => (
  <p className="text-gray-800">
    {paper.authors && <span className="font-semibold">{paper.authors}</span>}
    {paper.title && (
      <>
        , <span className="font-semibold text-blue-700">"{paper.title}"</span>
      </>
    )}
    {paper.journal_name && (
      <>
        , <span className="text-gray-700 text-lg font-semibold">{paper.journal_name}</span>
      </>
    )}{" "}
    {paper.journal_quartile && <span className="text-gray-700">({paper.journal_quartile})</span>}{" "}
    {paper.volume && <span className="text-gray-700">Volume: {paper.volume}</span>}{" "}
    {paper.publication_year && (
      <span className="text-gray-700">Year: {paper.publication_year}</span>
    )}
    {paper.doi_url && (
      <a
        className="block text-blue-600 underline"
        href={paper.doi_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        DOI Link
      </a>
    )}
  </p>
);

const renderConference = (paper) => (
  <p className="text-gray-800">
    {paper.authors && <span className="font-semibold">{paper.authors}</span>}
    {paper.title && (
      <>
        , <span className="font-semibold text-blue-700">"{paper.title}"</span>
      </>
    )}
    {paper.conference_name && (
      <>
        , <span className="text-gray-700 text-lg font-bold"> {paper.conference_name}</span>
      </>
    )}
    {paper.location && (
      <span className="text-gray-800 font-semibold"> Location: {paper.location}</span>
    )}
    {paper.conference_year && <span className="text-gray-700"> ({paper.conference_year})</span>}
    {paper.doi && (
      <a
        className="block text-blue-600 underline"
        href={paper.doi}
        target="_blank"
        rel="noopener noreferrer"
      >
        DOI Link
      </a>
    )}
  </p>
);

const renderPatent = (patent) => (
  <>
    {patent.title && <h3 className="text-lg font-semibold text-blue-800">{patent.title}</h3>}
    {patent.inventors && (
      <p className="text-gray-600">
        Inventors: <span className="text-black">{patent.inventors}</span>
      </p>
    )}
    {patent.registration_date && (
      <p className="text-gray-600">Registration Date: {getDate(patent.registration_date, true)}</p>
    )}
    {patent.publication_date && (
      <p className="text-gray-600">Publication Date: {getDate(patent.publication_date, true)}</p>
    )}
    {patent.grant_no && (
      <p className="text-gray-600">
        Patent No: <span className="text-black">{patent.grant_no}</span>
      </p>
    )}
    {patent.grant_date && (
      <p className="text-gray-600">Grant Date: {getDate(patent.grant_date, true)}</p>
    )}
  </>
);

const renderProject = (project) => (
  <>
    <div className="flex flex-col md:flex-row justify-start gap-5 md:items-center">
      {project.project_title && (
        <h3 className="text-lg font-semibold text-blue-800">{project.project_title}</h3>
      )}
      {project.name && <h3 className="text-xs font-semibold text-blue-800">({project.name})</h3>}
    </div>
    {project.role && (
      <p className="text-gray-700">
        <strong>Role:</strong> {project.role}
      </p>
    )}
    {project.investigators && project.investigators !== "NA" && (
      <p className="text-gray-700">
        <strong>Investigators:</strong> {project.investigators}
      </p>
    )}
    {project.funding_agency && (
      <p className="text-gray-800">
        <strong>Sponsor:</strong> {project.funding_agency}
      </p>
    )}
    {project.start_date && (
      <p className="text-gray-700">
        <strong>Duration:</strong> {getDate(project.start_date)}
        {project.end_date && (
          <>
            <span className="font-extrabold text-black"> - </span>
            {getDate(project.end_date)}
          </>
        )}
      </p>
    )}
    {project.financial_outlay && (
      <p className="text-gray-800">
        <strong>Project Cost (INR):</strong> Rs.{" "}
        {Number(project.financial_outlay).toLocaleString()}
      </p>
    )}
    {project.status && (
      <p
        className={`text-lg font-semibold ${
          project.status === "Completed" ? "text-green-800" : "text-blue-600"
        }`}
      >
        <strong className="text-black font-normal">Status:</strong> {project.status}
      </p>
    )}
  </>
);

const pageConfig = {
  journal: {
    title: "Journal Publications",
    endpoint: "publications",
    groupLabel: "Publications",
    year: (item) => item.publication_year,
    render: renderJournal,
  },
  conference: {
    title: "Conference Publications",
    endpoint: "conference",
    groupLabel: "Publications",
    year: (item) => item.conference_year,
    render: renderConference,
    normalize: (item) => ({
      ...item,
      title: cleanText(item.title),
      conference_name: cleanText(item.conference_name),
      location: cleanText(item.location),
      authors: cleanText(item.authors),
    }),
  },
  patents: {
    title: "Patents",
    endpoint: "patent",
    groupLabel: "Patents",
    year: (item) => {
      const date = new Date(item.publication_date);
      return Number.isNaN(date.getTime()) ? null : date.getFullYear();
    },
    render: renderPatent,
  },
  projects: {
    title: "Projects",
    endpoint: "project",
    groupLabel: "Projects",
    year: (item) => {
      const date = new Date(item.start_date);
      return Number.isNaN(date.getTime()) ? null : date.getFullYear();
    },
    render: renderProject,
  },
};

export default function DepartmentResearchPage({ departmentType, resource }) {
  const config = pageConfig[resource];
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openYears, setOpenYears] = useState({});

  useEffect(() => {
    if (!config) return;

    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          getBackendApiUrl(
            `/api/${config.endpoint}?type=${departmentType}&page=${page}&limit=${PAGE_LIMIT}`
          ),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json; charset=utf-8",
            },
          }
        );

        if (!response.ok) throw new Error("Request failed");

        const json = await response.json();
        const data = extractApiArray(json).map((item) =>
          config.normalize ? config.normalize(item) : item
        );
        const pagination = extractApiPagination(json, page, PAGE_LIMIT, data.length);

        setItems(data);
        setTotalPages(Math.max(1, pagination.totalPages));
        setHasNext(pagination.hasNext);
        setOpenYears({});
        setError(null);
      } catch (err) {
        setError("Failed to fetch publication data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [config, departmentType, page]);

  const groupedItems = useMemo(
    () => groupByYear(items, config?.year || (() => null)),
    [config, items]
  );

  if (!config) return null;

  const toggleYear = (year) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-700 text-center">
          {config.title}
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-48">
            <Spinner />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
            <p>Please try refreshing the page</p>
          </div>
        ) : (
          <>
            {Object.keys(groupedItems).length === 0 ? (
              <p className="text-center text-gray-600">No records found.</p>
            ) : (
              Object.keys(groupedItems)
                .sort((a, b) => b - a)
                .map((year) => (
                  <div
                    key={year}
                    className="mb-6 border border-gray-300 rounded-lg shadow-md bg-blue-100"
                  >
                    <button
                      type="button"
                      onClick={() => toggleYear(year)}
                      className="w-full px-4 py-3 bg-red-200 text-left text-lg font-bold text-red-700 flex justify-between items-center gap-4 hover:bg-red-300 transition"
                    >
                      <span>
                        {config.groupLabel} in {year} ({groupedItems[year].length})
                      </span>
                      {openYears[year] ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    {openYears[year] && (
                      <div className="overflow-y-auto max-h-100">
                        <ul className="p-4 space-y-4">
                          {groupedItems[year].map((item, index) => (
                            <li
                              key={item.id || item._id || `${year}-${index}`}
                              className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                            >
                              {config.render(item)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                disabled={page === 1 || isLoading}
                className="rounded-lg bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
              >
                Previous
              </button>
              <span className="min-w-28 text-center text-lg font-semibold text-gray-700">
                Page {page} of {Math.max(totalPages, page)}
              </span>
              <button
                type="button"
                onClick={() => setPage((current) => current + 1)}
                disabled={!hasNext || isLoading}
                className="rounded-lg bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
