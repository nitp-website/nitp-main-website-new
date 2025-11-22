"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

// --- Reusable Modular Components ---

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

const StatCard = ({ icon: Icon, title, count, counterOn }) => (
  <div className="group bg-white p-6 border border-gray-200 border-l-4 border-l-gray-300 hover:border-l-red-900 shadow-sm hover:shadow-md transition-all duration-300 rounded-none flex flex-col items-center justify-center h-full">
    <div className="mb-3 p-3 bg-gray-50 group-hover:bg-red-50 transition-colors rounded-none">
      <Icon className="w-6 h-6 text-gray-700 group-hover:text-red-900" />
    </div>
    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
      {title}
    </h3>
    <span className="text-3xl font-black text-gray-900">
      {counterOn ? <CountUp end={count} duration={3} delay={0} /> : 0}
    </span>
  </div>
);

const ProjectCard = ({ project_title, facultyName, sponsor, amount, start, end }) => {
  return (
    <div className="bg-white border border-gray-200 border-l-4 border-l-red-900 p-5 mb-4 hover:bg-gray-50 transition-colors duration-300 rounded-none shadow-sm">
      <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3">
        {project_title}
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
        {amount && (
          <div className="flex gap-1">
            <span className="font-bold text-red-900">Grant:</span> {amount}
          </div>
        )}
        {start && end && (
          <div className="flex gap-1">
            <span className="font-bold text-red-900">Period:</span> {start} — {end}
          </div>
        )}
      </div>
    </div>
  );
};

const PublicationCard = ({ year, authors, journalName, title, journalQuartile, volume }) => {
  return (
    <div className="bg-white border border-gray-200 p-5 mb-3 hover:shadow-md transition-all duration-300 rounded-none relative overflow-hidden">
      {/* Quartile Badge */}
      {journalQuartile && (
        <div className="absolute top-0 right-0 bg-gray-100 text-xs font-bold px-2 py-1 text-gray-500 border-b border-l border-gray-200">
          {journalQuartile}
        </div>
      )}
      
      <p className="text-xs leading-relaxed text-gray-700">
        {authors && <span className="font-semibold text-red-900">{authors}</span>}
        {authors && ", "}
        {title && <span className="font-bold text-gray-900">"{title}"</span>}
        {title && ", "}
        {journalName && <span className="italic font-medium text-gray-800">{journalName}</span>}
        
        <span className="text-gray-500 block mt-2 text-[11px] uppercase tracking-wide">
           {volume && <span>Vol: {volume} &bull; </span>}
           {year && <span>Year: {year}</span>}
        </span>
      </p>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64 bg-gray-50 border border-gray-100">
    <div className="w-12 h-12 border-4 border-red-200 border-t-red-800 rounded-full animate-spin"></div>
  </div>
);

// --- NEW: AutoScroll Container Logic ---
const AutoScrollContainer = ({ children, height = "600px", speed = 1 }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollElement && !isPaused) {
        // Increment scroll position
        scrollElement.scrollTop += speed;

        // Check if we reached the halfway point (end of first set)
        // scrollHeight is total height (2x content), clientHeight is visible height
        if (scrollElement.scrollTop >= (scrollElement.scrollHeight / 2)) {
          // Reset to 0 to create seamless loop
          scrollElement.scrollTop = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, speed]);

  return (
    <div 
      ref={scrollRef}
      className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      style={{ height: height }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {children}
    </div>
  );
};


// --- Main Component ---

export default function Research() {
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentPublications, setRecentPublications] = useState([]);
  const [counterOn, setCounterOn] = useState(false);
  const [data, setData] = useState({
    patents: 0,
    books: 0,
    journals: 0,
    conferences: 0,
    articles: 0,
    projectCount: 0,
    patentCount: 0
  });

  const fetchStats = async () => {
    try {
      const [pubRes, projRes, patRes] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/publications?type=all`),
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=count`),
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/patent?type=count`)
      ]);

      const publications = pubRes.data;
      const publicationCounts = publications.reduce(
        (acc, pub) => {
          if (pub.conference_name) acc.conferences += 1;
          if (pub.publisher || pub.isbn) acc.books += 1;
          if (pub.journal_name || pub.doi_url) acc.articles += 1;
          return acc;
        },
        { books: 0, conferences: 0, articles: 0 }
      );

      setData({
        ...publicationCounts,
        projectCount: projRes.data.projectCount || 0,
        patentCount: patRes.data.patentCount || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/publications?type=all`
        );
        const publications = response.data.filter(
          (paper) =>
            paper.journal_quartile === "Q1" &&
            (paper.publication_year === 2024 || paper.publication_year === 2025)
        );

        const quartileOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4, Q5: 5 };
        const sorted = publications.sort((a, b) => {
          const qA = quartileOrder[a.journal_quartile?.toUpperCase()] || 6;
          const qB = quartileOrder[b.journal_quartile?.toUpperCase()] || 6;
          if (qA !== qB) return qA - qB;
          return b.publication_year - a.publication_year;
        });

        setRecentPublications(sorted);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };
    fetchPublications();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=all`
        );
        const projects = await response.json();
        const sorted = projects.sort((a, b) => {
          return new Date(b.start_date) - new Date(a.start_date);
        });
        setRecentProjects(sorted);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);


  // --- Render ---

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
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
               Pushing boundaries in Science & Technology
             </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            <StatCard icon={ActivityIcon} title="Patents" count={data.patentCount} counterOn={counterOn} />
            <StatCard icon={ClipboardIcon} title="Books" count={data.books} counterOn={counterOn} />
            <StatCard icon={BriefcaseIcon} title="Projects" count={data.projectCount} counterOn={counterOn} />
            <StatCard icon={UsersIcon} title="Articles" count={data.articles} counterOn={counterOn} />
            <StatCard icon={CpuIcon} title="Conference" count={data.conferences} counterOn={counterOn} />
          </div>

          {/* Two Column Layout for Feeds */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Column 1: Publications */}
            <div className="flex flex-col">
               <SectionHeader title="Recent Publications" icon={<i className="ri-article-line"></i>} />
               
               <div className="bg-white border border-gray-200 rounded-none shadow-sm flex flex-col relative">
                  <div className="p-4 bg-gray-100 border-b border-gray-200 flex justify-between items-center z-10">
                    <span className="text-xs font-bold text-gray-500 uppercase">Latest Q1 Journals</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {recentPublications.length === 0 ? <LoadingSpinner /> : (
                    <AutoScrollContainer height="600px" speed={0.8}>
                      {/* DUPLICATED DATA FOR SEAMLESS LOOP */}
                      <div className="pb-2">
                          {[...recentPublications.slice(0, 30), ...recentPublications.slice(0, 30)].map((pub, idx) => (
                            <PublicationCard
                              key={`${pub.id}-${idx}`}
                              year={pub.publication_year}
                              authors={pub.authors}
                              journalName={pub.journal_name}
                              title={pub.title}
                              journalQuartile={pub.journal_quartile}
                              volume={pub.volume}
                            />
                          ))}
                      </div>
                    </AutoScrollContainer>
                  )}
                  
                  {/* Bottom Fade Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
               </div>
            </div>

            {/* Column 2: Projects */}
            <div className="flex flex-col">
               <SectionHeader title="Sponsored Projects" icon={<i className="ri-government-line"></i>} />
               
               <div className="bg-white border border-gray-200 rounded-none shadow-sm flex flex-col relative">
                  <div className="p-4 bg-gray-100 border-b border-gray-200 flex justify-between items-center z-10">
                    <span className="text-xs font-bold text-gray-500 uppercase">Ongoing & Completed</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>

                  {recentProjects.length === 0 ? <LoadingSpinner /> : (
                     <AutoScrollContainer height="600px" speed={0.8}>
                        {/* DUPLICATED DATA FOR SEAMLESS LOOP */}
                        <div className="pb-2">
                            {[...recentProjects.slice(0, 30), ...recentProjects.slice(0, 30)].map((project, idx) => (
                              <ProjectCard
                                key={`${project.id}-${idx}`}
                                project_title={project.project_title}
                                facultyName={project.investigators}
                                sponsor={project.funding_agency}
                                amount={project.financial_outlay}
                                start={project.start_date}
                                end={project.end_date}
                              />
                            ))}
                        </div>
                     </AutoScrollContainer>
                  )}

                   {/* Bottom Fade Gradient */}
                   <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </ScrollTrigger>
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