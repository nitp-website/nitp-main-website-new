"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Calendar, User, Building2, DollarSign, Clock, ChevronLeft, ChevronRight, ExternalLink, Loader2, X } from 'lucide-react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState('all');
  
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 20;

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      setType(typeParam);
    }
    const academicYear = searchParams.get('academic_year');
    if (academicYear) {
      setYearFilter(academicYear);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'https://adminportalpratyush.vercel.app';
        
       
        const firstRes = await axios.get(`${baseUrl}/api/project?type=${type}&page=1&limit=50`);
        let allData = [...(firstRes.data.data || [])];
        const totalP = firstRes.data.totalPages || 1;

        
        if (totalP > 1) {
          const promises = [];
          for (let p = 2; p <= totalP; p++) {
            promises.push(axios.get(`${baseUrl}/api/project?type=${type}&page=${p}&limit=50`));
          }
          const results = await Promise.all(promises);
          results.forEach(res => {
            if (res.data && res.data.data) {
              allData = allData.concat(res.data.data);
            }
          });
        }
        
        setProjects(allData);
        setFilteredProjects(allData);

      } catch (err) {
        setError(err.message);
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProjects();
  }, [type]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (yearFilter !== 'all') params.set('academic_year', yearFilter);
    if (searchTerm) params.set('search', searchTerm);
    if (statusFilter !== 'all') params.set('status', statusFilter);
    
    // We don't want to wipe out 'type' param if it exists
    if (type !== 'all') params.set('type', type);
    
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  }, [yearFilter, searchTerm, statusFilter, type]);

  const getAcademicYear = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    if (month >= 7) return `${year}-${year + 1}`;
    return `${year - 1}-${year}`;
  };

  const academicYears = useMemo(() => {
    const years = new Set();
    projects.forEach(project => {
      if (project.start_date) {
        years.add(getAcademicYear(project.start_date));
      }
    });
    return Array.from(years).sort((a, b) => {
      const aStart = parseInt(a.split('-')[0]);
      const bStart = parseInt(b.split('-')[0]);
      return bStart - aStart;
    });
  }, [projects]);

  useEffect(() => {
    let result = projects;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(project =>
        project.project_title?.toLowerCase().includes(term) ||
        project.funding_agency?.toLowerCase().includes(term) ||
        project.investigators?.toLowerCase().includes(term) ||
        project.email?.toLowerCase().includes(term)
      );
    }
    if (yearFilter !== 'all') {
      result = result.filter(project => 
        project.start_date && getAcademicYear(project.start_date) === yearFilter
      );
    }
    if (statusFilter !== 'all') {
      result = result.filter(project => project.status === statusFilter);
    }
    setFilteredProjects(result);
  }, [projects, searchTerm, yearFilter, statusFilter]);

  const formatCurrency = (amount) => {
    if (!amount) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(parseFloat(amount));
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isFilterActive = yearFilter !== 'all' || searchTerm || statusFilter !== 'all';

  const processedProjects = useMemo(() => {
    if (!isFilterActive && academicYears.length > 0) {
      let result = [];
      let remainingProjectsByYear = {};
      
      academicYears.forEach(year => {
        remainingProjectsByYear[year] = filteredProjects.filter(p => getAcademicYear(p.start_date) === year);
      });

      // Group all years chronologically into 5-year chunks
      const yearChunks = [];
      for (let i = 0; i < academicYears.length; i += 5) {
         yearChunks.push(academicYears.slice(i, i + 5));
      }

      let cycle = 0;
      let keepGoing = true;

      // Master distribution cycle
      while (keepGoing) {
         let itemsPushedInCycle = false;

         for (let chunkIndex = 0; chunkIndex < yearChunks.length; chunkIndex++) {
             const chunkYears = yearChunks[chunkIndex];
             
             // First chunk (2025-2021) gets 4 iterations (spanning Pages 1 to 4) on Cycle 0
             // All subsequent chunks (and older years) get 2 iterations (spanning 2 Pages) per cycle
             const iterations = (cycle === 0 && chunkIndex === 0) ? 4 : 2;

             for (let i = 0; i < iterations; i++) {
                 chunkYears.forEach(year => {
                     if (remainingProjectsByYear[year] && remainingProjectsByYear[year].length > 0) {
                         result.push(...remainingProjectsByYear[year].splice(0, 4));
                         itemsPushedInCycle = true;
                     }
                 });
             }
         }

         if (!itemsPushedInCycle) {
             keepGoing = false;
         }
         cycle++;
      }

      const startIndex = (currentPage - 1) * projectsPerPage;
      const endIndex = startIndex + projectsPerPage;
      return result.slice(startIndex, endIndex);
    }


    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return filteredProjects.slice(startIndex, endIndex);

  }, [filteredProjects, currentPage, projectsPerPage, isFilterActive, academicYears]);

  const projectsByAcademicYear = useMemo(() => {
    const grouped = {};
    processedProjects.forEach(project => {
      const academicYear = getAcademicYear(project.start_date);
      if (!grouped[academicYear]) {
        grouped[academicYear] = [];
      }
      grouped[academicYear].push(project);
    });
    return grouped;
  }, [processedProjects]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProjects.length / projectsPerPage);
  }, [filteredProjects, projectsPerPage]);

  const clearFilters = () => {
    setYearFilter('all');
    setSearchTerm('');
    setStatusFilter('all');
    setCurrentPage(1);
  };

  const goToPage = (e, page) => {
    if (e) {
      e.preventDefault();
      e.currentTarget.blur(); 
    }
    const currentScrollY = window.scrollY;
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: currentScrollY, behavior: "instant" });
    }, 0);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        start = 2;
        end = Math.min(maxVisible, totalPages - 1);
      } else if (currentPage >= totalPages - 2) {
        start = Math.max(totalPages - maxVisible + 1, 2);
        end = totalPages - 1;
      }

      if (start > 2) pages.push("...");
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push("...");

      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="w-full bg-white bg-opacity-50 pb-[400px]">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-red-950 text-center">
          Projects Dashboard
        </h1>

        {/* Filters */}
        <div className="bg-white border border-red-200 shadow-sm rounded-xl p-4 md:p-5 mb-5">
          {isFilterActive && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center space-x-2">
                <span className="text-base text-gray-800 font-medium">Active filters:</span>
                {yearFilter !== 'all' && (
                  <span className="bg-red-100 text-red-900 px-3 py-1.5 rounded-full text-sm font-semibold">
                    Year: {yearFilter}
                  </span>
                )}
                {searchTerm && (
                  <span className="bg-[#421010] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                    Search: "{searchTerm}"
                  </span>
                )}
                {statusFilter !== 'all' && (
                  <span className="bg-green-100 text-green-900 px-3 py-1.5 rounded-full text-sm font-semibold">
                    Status: {statusFilter}
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="text-red-800 hover:text-red-950 text-sm font-bold flex items-center bg-red-50 px-3 py-1.5 rounded-lg transition-colors border border-red-200"
              >
                <X className="w-4 h-4 mr-1 stroke-[3px]" />
                Clear all
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects, funding agencies, investigators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#421010] focus:border-transparent text-gray-900 placeholder-gray-400 bg-white"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
              <select
                value={yearFilter}
                onChange={(e) => {
                  setYearFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#421010] focus:border-transparent appearance-none bg-white text-gray-800"
              >
                <option value="all">All Academic Years</option>
                {academicYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 text-sm font-medium border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#421010] focus:border-transparent appearance-none bg-white text-gray-800"
              >
                <option value="all">All Status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {!loading && !error && filteredProjects.length > 0 && (
          <div className="text-[#421010] text-sm font-bold mb-5 ml-1">
            Showing {Math.min((currentPage - 1) * projectsPerPage + 1, filteredProjects.length)}-{Math.min(currentPage * projectsPerPage, filteredProjects.length)} of {filteredProjects.length} projects
          </div>
        )}

        {/* Loading State */}
        {loading && projects.length === 0 && (
          <div className="flex justify-center flex-col items-center py-24">
            <Loader2 className="animate-spin h-12 w-12 text-[#421010] mb-4" />
            <span className="text-[#421010] font-bold text-lg">
              Loading projects...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
           <div className="text-center py-12 px-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <p className="font-bold text-red-900 text-lg mb-2">Error Loading Projects</p>
            <p className="text-red-700 font-medium mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-red-900 text-white font-semibold rounded-lg hover:bg-[#421010] transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length > 0 && filteredProjects.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No matching projects found</h3>
            <p className="text-gray-600 text-lg">Try adjusting your filters for this page.</p>
          </div>
        )}

        {/* Projects Content */}
        {!error && processedProjects.length > 0 && (
          <div className={`transition-opacity duration-300 ${loading ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
            
            <div className="space-y-6">
              {Object.entries(projectsByAcademicYear).sort(([a], [b]) => {
                const aStart = parseInt(a.split('-')[0]);
                const bStart = parseInt(b.split('-')[0]);
                return bStart - aStart;
              }).map(([academicYear, yearProjects]) => (
                <div key={academicYear} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-[#421010] text-white py-2 px-4 border-b border-red-950">
                    <h2 className="text-sm font-bold tracking-wide">Academic Year {academicYear}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1">
                    {yearProjects.map((project, idx) => (
                      <div 
                        key={project.id}
                        className={`p-4 hover:bg-red-50/80 transition-colors cursor-pointer group relative ${idx !== yearProjects.length - 1 ? 'border-b border-gray-100' : ''}`}
                        onClick={() => setSelectedProject(project)}
                      >
                        <h3 className="text-[15px] font-bold text-[#002147] md:text-gray-900 mb-2.5 leading-snug group-hover:text-[#421010] transition-colors pr-24 line-clamp-2" title={project.project_title}>
                          {project.project_title}
                        </h3>
                        
                        <div className="flex flex-col space-y-1.5 text-[13px] text-gray-600">
                          <div className="flex items-start">
                            <User className="w-4 h-4 text-[#421010] mt-[3px] mr-2 flex-shrink-0" />
                            <div className="flex min-w-0 w-full pr-12">
                              <span className="font-semibold text-gray-800 mr-1 flex-shrink-0">Faculty:</span>
                              <span className="truncate" title={project.investigators}>{project.investigators}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Building2 className="w-4 h-4 text-[#421010] mt-[3px] mr-2 flex-shrink-0" />
                            <div className="flex min-w-0 w-full pr-12">
                              <span className="font-semibold text-gray-800 mr-1 flex-shrink-0">Sponsor:</span>
                              <span className="truncate" title={project.funding_agency}>{project.funding_agency}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <DollarSign className="w-4 h-4 text-[#421010] mt-[3px] mr-2 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-gray-800 mr-1">Amount:</span>
                              <span className="text-green-600 font-bold">{formatCurrency(project.financial_outlay)}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Clock className="w-4 h-4 text-[#421010] mt-[3px] mr-2 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-gray-800 mr-1">Duration:</span>
                              <span>{formatDate(project.start_date)} - {formatDate(project.end_date)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="absolute top-4 right-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase whitespace-nowrap tracking-wider ${project.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 hidden sm:flex">
                          <span className="text-[#421010] font-semibold text-[11px] items-center whitespace-nowrap bg-red-50/50 hover:bg-red-100 px-3 py-1.5 rounded transition-colors group-hover:text-red-900 border border-red-100 flex">
                            View Details <ExternalLink className="w-3 h-3 ml-1.5" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="sticky bottom-6 z-40 mx-auto w-fit flex flex-row justify-center items-center gap-1.5 sm:gap-3 mt-12 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3 rounded-full shadow-[0_4px_25px_rgb(0,0,0,0.15)] border border-gray-200">
                <button
                  type="button"
                  onClick={(e) => goToPage(e, currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#421010] text-white hover:bg-red-950 shadow-sm hover:shadow-md"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
                </button>

                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, i) =>
                    page === "..." ? (
                      <span key={`dots-${i}`} className="px-1.5 py-2 text-gray-400 font-bold">
                        …
                      </span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        onClick={(e) => goToPage(e, page)}
                        className={`min-w-[34px] h-9 rounded-full text-sm font-bold transition-all ${
                          currentPage === page
                            ? "bg-[#421010] text-white shadow-md transform scale-105"
                            : "bg-transparent border border-transparent text-gray-700 hover:bg-red-50 hover:text-[#421010] hover:border-red-200"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => goToPage(e, currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#421010] text-white hover:bg-red-950 shadow-sm hover:shadow-md"
                  }`}
                >
                  <span className="hidden sm:inline">Next</span> <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden">
            <div className="bg-[#421010]/90 backdrop-blur-md text-white p-5 flex justify-between items-start shrink-0 border-b border-white/10">
              <h2 className="text-base md:text-lg font-bold pr-4 leading-tight">
                {selectedProject.project_title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-white/70 hover:text-white bg-black/10 hover:bg-black/30 p-1.5 rounded-full transition-all flex-shrink-0"
              >
                <X className="w-5 h-5 stroke-[2.5px]" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-5 text-sm">
              <div>
                <h3 className="font-medium text-gray-700 mb-0.5">Investigators</h3>
                <p className="text-gray-600">{selectedProject.investigators}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-0.5">Funding Agency</h3>
                <p className="text-gray-600">{selectedProject.funding_agency}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-0.5">Financial Outlay</h3>
                  <p className="text-green-600 font-semibold">
                    {formatCurrency(selectedProject.financial_outlay)}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-0.5">Funds Received</h3>
                  <p className="text-blue-600 font-semibold">
                    {formatCurrency(selectedProject.funds_received)}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-1">Status</h3>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs font-medium border border-gray-200">
                  {selectedProject.status}
                </span>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-0.5">Duration</h3>
                <p className="text-gray-600">
                  {formatDate(selectedProject.start_date)} - {formatDate(selectedProject.end_date)}
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-0.5">PI Institute</h3>
                <p className="text-gray-600 uppercase">{selectedProject.pi_institute || 'N/A'}</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-0.5">Role</h3>
                <p className="text-gray-600">{selectedProject.role}</p>
              </div>

              {selectedProject.email && (
                <div>
                  <h3 className="font-medium text-gray-700 mb-0.5">Contact Email</h3>
                  <a href={`mailto:${selectedProject.email}`} className="text-gray-500 hover:text-red-600 transition-colors">
                    {selectedProject.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;