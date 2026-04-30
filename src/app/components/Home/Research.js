"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

// --- Reusable Modular Components ---
const MAX_PUBLICATIONS_RENDER = 120;
const MAX_PROJECTS_RENDER = 120;

const safeString = (value, fallback = "") => {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return fallback;
};

const parseFiniteNumber = (value, fallback = 0) => {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const parseYearValue = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return Math.trunc(value);
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  if (/^\d{4}$/.test(trimmed)) return Number(trimmed);

  const dateMatch = trimmed.match(/^(\d{4})-\d{2}-\d{2}/);
  if (dateMatch) return Number(dateMatch[1]);

  return null;
};

const getPlausibleYear = (...candidates) => {
  const currentYear = new Date().getFullYear();
  for (const value of candidates) {
    const year = parseYearValue(value);
    if (Number.isInteger(year) && year >= 1900 && year <= currentYear + 1) {
      return year;
    }
  }
  return null;
};

const getTimestamp = (...candidates) => {
  for (const candidate of candidates) {
    if (!candidate) continue;
    const parsed = Date.parse(candidate);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
};

const normalizePublication = (pub) => {
  const publicationYear = getPlausibleYear(
    pub?.publication_year,
    pub?.conference_year,
    pub?.year,
    pub?.publication_date
  );
  const publicationDateYear = parseYearValue(pub?.publication_date);
  const currentYear = new Date().getFullYear();
  const publicationDateTimestamp =
    publicationDateYear && publicationDateYear >= 1900 && publicationDateYear <= currentYear + 1
      ? Date.parse(pub?.publication_date)
      : null;

  return {
    id: safeString(pub?.id),
    authors: safeString(pub?.authors),
    title: safeString(pub?.title),
    journal_name: safeString(pub?.journal_name),
    journal_quartile: safeString(pub?.journal_quartile).toUpperCase(),
    volume: safeString(pub?.volume),
    publication_year: publicationYear,
    conference_name: safeString(pub?.conference_name),
    publisher: safeString(pub?.publisher),
    isbn: safeString(pub?.isbn),
    type: safeString(pub?.type).toLowerCase(),
    sort_timestamp:
      (Number.isFinite(publicationDateTimestamp) ? publicationDateTimestamp : null) ??
      (publicationYear ? Date.UTC(publicationYear, 0, 1) : 0),
  };
};

const isJournalPublication = (pub) =>
  pub?.type === "journal" || (!!pub?.journal_name && !pub?.conference_name);

const normalizeProject = (project) => {
  const sortTimestamp =
    getTimestamp(project?.sort_date, project?.start_date, project?.end_date) ?? 0;

  return {
    id: safeString(project?.id),
    project_title: safeString(project?.project_title, "Untitled Project"),
    investigators: safeString(project?.investigators),
    funding_agency: safeString(project?.funding_agency),
    financial_outlay: parseFiniteNumber(project?.financial_outlay),
    start_date: safeString(project?.start_date),
    end_date: safeString(project?.end_date),
    sort_timestamp: sortTimestamp,
  };
};

const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center justify-center mb-6 p-4">
    <div className="flex-1 h-[1px] bg-gray-300" />
    <div className="mx-6 flex items-center gap-3">
      {icon && <span className="text-red-900 text-xl">{icon}</span>}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wider">
        {title}
      </h3>
    </div>
    <div className="flex-1 h-[1px] bg-gray-300" />
  </div>
);

const StatCard = ({ icon: Icon, title, count }) => (
  <div className="group bg-white p-6 border border-gray-200 border-l-4 border-l-gray-300 hover:border-l-red-900 shadow-sm hover:shadow-md transition-all duration-300 rounded-none flex flex-col items-center justify-center h-full">
    <div className="mb-3 p-3 bg-gray-50 group-hover:bg-red-50 transition-colors rounded-none">
      <Icon className="w-6 h-6 text-gray-700 group-hover:text-red-900" />
    </div>
    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
      {title}
    </h3>
    <span className="text-3xl font-black text-gray-900">{Number(count) || 0}</span>
  </div>
);

const ProjectCard = ({ project_title, facultyName, sponsor, amount, start, end }) => {
  const formattedAmount = amount 
    ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(amount))
    : "N/A";

  // Safely extract just the date part (YYYY-MM-DD)
  const safeStart = start ? String(start).split('T')[0] : 'TBD';
  const safeEnd = end ? String(end).split('T')[0] : 'TBD';

  return (
    <div className="bg-white border border-gray-200 border-l-4 border-l-red-900 p-5 mb-4 hover:bg-gray-50 transition-colors duration-300 rounded-none shadow-sm">
      <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 uppercase">
        {project_title || "Untitled Project"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-600">
        {facultyName && (
          <div className="flex gap-1">
            <span className="font-bold text-red-900">PI:</span> {facultyName}
          </div>
        )}
        {sponsor && (
          <div className="flex gap-1">
            <span className="font-bold text-red-900">Sponsor:</span> {sponsor}
          </div>
        )}
        <div className="flex gap-1">
          <span className="font-bold text-red-900">Grant:</span> {formattedAmount}
        </div>
        <div className="flex gap-1">
          <span className="font-bold text-red-900">Period:</span> {safeStart} — {safeEnd}
        </div>
      </div>
    </div>
  );
};

const PublicationCard = ({ year, authors, journalName, title, journalQuartile, volume }) => {
  return (
    <div className="bg-white border border-gray-200 p-5 mb-3 hover:shadow-md transition-all duration-300 rounded-none relative overflow-hidden">
      {journalQuartile && (
        <div className="absolute top-0 right-0 bg-red-900 text-white text-[10px] font-bold px-2 py-0.5">
          {journalQuartile}
        </div>
      )}
      
      <div className="text-xs leading-relaxed text-gray-700">
        {authors && <span className="font-semibold text-red-900">{authors}. </span>}
        {title && <span className="font-bold text-gray-900">"{title}." </span>}
        {journalName && <span className="italic font-medium text-gray-800">{journalName}</span>}
        
        <div className="text-gray-500 mt-2 text-[11px] uppercase tracking-wide flex gap-3">
           {volume && <span>Vol: {volume}</span>}
           {year && <span>Year: {year}</span>}
        </div>
      </div>
    </div>
  );
};

const LoadingSpinner = ({ message = "Loading Research Data..." }) => (
  <div className="flex flex-col justify-center items-center h-64 bg-gray-50 border border-gray-100 w-full">
    <div className="w-10 h-10 border-4 border-gray-200 border-t-red-900 rounded-full animate-spin mb-4"></div>
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{message}</p>
  </div>
);

// AutoScroll that accepts data arrays to handle safe key duplication
const AutoScrollContainer = ({ items, renderItem, height = "600px", speed = 0.8, maxItems = 120 }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const normalizedItems = Array.isArray(items) ? items.slice(0, maxItems) : [];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement || normalizedItems.length === 0) return;

    let animationFrameId;
    const scroll = () => {
      if (!isPaused && scrollElement) {
        scrollElement.scrollTop += speed;
        // Reset when scrolled halfway (since content is exactly duplicated once)
        if (scrollElement.scrollTop >= (scrollElement.scrollHeight / 2)) {
          scrollElement.scrollTop = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, speed, normalizedItems.length]);

  if (normalizedItems.length === 0) {
    return <p className="text-center py-10 text-gray-400 text-xs">No data available.</p>;
  }

  // Duplicate items array for seamless scroll, creating unique keys!
  const duplicatedItems = [...normalizedItems, ...normalizedItems];

  return (
    <div 
      ref={scrollRef}
      className="overflow-y-auto no-scrollbar scroll-smooth"
      style={{ height: height, msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="p-2">
        {duplicatedItems.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};

// --- Main Component ---

function ResearchContent() {
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentPublications, setRecentPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [stats, setStats] = useState({
    books: 0,
    conferences: 0,
    articles: 0,
    projectCount: 0,
    patentCount: 0
  });

  // Fallback URL just in case process.env is undefined in your environment
  const API_BASE = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";

  useEffect(() => {
    const loadAllData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [pubRes, projCountRes, patCountRes, projAllRes] = await Promise.all([
          axios.get(`${API_BASE}/api/publications?type=all`),
          axios.get(`${API_BASE}/api/project?type=count`),
          axios.get(`${API_BASE}/api/patent?type=count`),
          axios.get(`${API_BASE}/api/project?type=all`)
        ]);

        // 1. SAFE DATA EXTRACTION (Bypassing extractApiArray)
        const rawPubs = Array.isArray(pubRes?.data?.data) ? pubRes.data.data : [];
        const rawProjects = Array.isArray(projAllRes?.data?.data) ? projAllRes.data.data : [];
        const publications = rawPubs.map(normalizePublication).filter(Boolean);
        const projects = rawProjects.map(normalizeProject).filter(Boolean);

        // 2. STATS CALCULATION
        const counts = publications.reduce(
          (acc, pub) => {
            if (pub?.conference_name) acc.conferences += 1;
            if (pub?.publisher || pub?.isbn || pub?.type === "book") acc.books += 1;
            if (pub?.journal_name || pub?.type === "journal") acc.articles += 1;
            return acc;
          },
          { books: 0, conferences: 0, articles: 0 }
        );

        setStats({
          ...counts,
          projectCount: Number(projCountRes?.data?.projectCount) || 0,
          patentCount: Number(patCountRes?.data?.patentCount) || 0,
        });

        // 3. FILTER PUBLICATIONS (Journal records only)
        const filteredPubs = publications
          .filter((p) => isJournalPublication(p) && !!p?.journal_name)
          .sort((a, b) => (b?.sort_timestamp || 0) - (a?.sort_timestamp || 0))
          .slice(0, MAX_PUBLICATIONS_RENDER);
        
        setRecentPublications(filteredPubs);

        // 4. FILTER PROJECTS (>= 10 Lakhs)
        const highValueProjects = projects
          .filter(p => Number(p?.financial_outlay) >= 1000000)
          .sort((a, b) => (b?.sort_timestamp || 0) - (a?.sort_timestamp || 0))
          .slice(0, MAX_PROJECTS_RENDER);
        
        setRecentProjects(highValueProjects);

      } catch (err) {
        console.error("Research Component Data Fetch Error:", err);
        setError("Failed to load research data. Please check your network or API connection.");
      } finally {
        setIsLoading(false);
      }
    };

    loadAllData();
  }, [API_BASE]);

  if (error) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center bg-gray-50">
        <p className="text-red-600 font-bold mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-red-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
      <div className="w-full py-16 bg-gray-50 text-gray-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-16">
             <div className="flex items-center gap-6 mb-4">
                 <div className="hidden md:block w-16 h-1 bg-red-900"></div>
                 <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight text-center">
                    Research <span className="text-red-900">Highlights</span>
                 </h2>
                 <div className="hidden md:block w-16 h-1 bg-red-900"></div>
             </div>
             <p className="text-gray-500 max-w-2xl text-center text-sm uppercase tracking-widest">
               Advancing knowledge through innovation and excellence
             </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            <StatCard icon={ActivityIcon} title="Patents" count={stats.patentCount} />
            <StatCard icon={ClipboardIcon} title="Books" count={stats.books} />
            <StatCard icon={BriefcaseIcon} title="Projects" count={stats.projectCount} />
            <StatCard icon={UsersIcon} title="Journals" count={stats.articles} />
            <StatCard icon={CpuIcon} title="Conferences" count={stats.conferences} />
          </div>

          {/* Two Column Layout for Feeds */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Column 1: Publications */}
            <div className="flex flex-col">
               <SectionHeader title="Journal Publications" icon={<ActivityIcon className="w-5 h-5"/>} />
               
               <div className="bg-white border border-gray-200 rounded-none shadow-sm flex flex-col relative overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center z-10">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Latest Journal Articles</span>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] text-gray-400 font-bold uppercase">Live Feed</span>
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {isLoading ? <LoadingSpinner /> : (
                     <AutoScrollContainer 
                       height="550px" 
                       items={recentPublications} 
                       maxItems={MAX_PUBLICATIONS_RENDER}
                       renderItem={(pub, idx) => (
                         <PublicationCard
                           key={`pub-${pub.id || idx}-${idx}`}
                          year={pub.publication_year}
                          authors={pub.authors}
                          journalName={pub.journal_name}
                          title={pub.title}
                          journalQuartile={pub.journal_quartile}
                          volume={pub.volume}
                        />
                      )} 
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
               </div>
            </div>

            {/* Column 2: Projects */}
            <div className="flex flex-col">
               <SectionHeader title="Major Projects" icon={<BriefcaseIcon className="w-5 h-5"/>} />
               
               <div className="bg-white border border-gray-200 rounded-none shadow-sm flex flex-col relative overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center z-10">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Grants {'>'} 10 Lakhs</span>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] text-gray-400 font-bold uppercase">Active</span>
                       <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {isLoading ? <LoadingSpinner /> : (
                     <AutoScrollContainer 
                        height="550px" 
                        items={recentProjects}
                        maxItems={MAX_PROJECTS_RENDER}
                        renderItem={(project, idx) => (
                          <ProjectCard
                            key={`proj-${project.id || idx}-${idx}`}
                            project_title={project.project_title}
                            facultyName={project.investigators}
                            sponsor={project.funding_agency}
                            amount={project.financial_outlay}
                            start={project.start_date}
                            end={project.end_date}
                          />
                        )}
                     />
                  )}
                   <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
               </div>
            </div>

          </div>
        </div>
      </div>
  );
}

class ResearchErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Research component render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full py-16 bg-gray-50 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-600">Research highlights are temporarily unavailable.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function Research() {
  return (
    <ResearchErrorBoundary>
      <ResearchContent />
    </ResearchErrorBoundary>
  );
}

// --- Icons ---
function ActivityIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <rect width="20" height="14" x="2" y="6" rx="0" ry="0" />
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect width="8" height="4" x="8" y="2" rx="0" ry="0" />
    </svg>
  );
}

function CpuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <rect width="16" height="16" x="4" y="4" rx="0" />
      <rect width="6" height="6" x="9" y="9" rx="0" />
      <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
