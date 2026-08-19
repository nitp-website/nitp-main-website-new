"use client"
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, Filter, Calendar, User, Building2, DollarSign, Clock, ChevronLeft, ChevronRight, ExternalLink, BookOpen, Loader2, X } from 'lucide-react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { extractApiArray } from '@/lib/apiHelpers';

const PROJECTS_PER_PAGE = 20;

const ProjectsPage = () => {
  // Current page's raw data from the server (already sorted by sort_date DESC).
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Server-driven pagination state.
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  // A separate, one-time larger fetch used only to populate the Academic
  // Year dropdown with every year that exists, not just whatever happens
  // to be on the current page.
  const [academicYears, setAcademicYears] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const getAcademicYear = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (month >= 7) {
      return `${year}-${year + 1}`;
    } else {
      return `${year - 1}-${year}`;
    }
  };

  // Fetch one page of projects from the server, with filters applied
  // server-side. This is what Prev/Next and filter changes call, so
  // pagination and filtering both reflect the real dataset instead of a
  // client-side slice of a single fetched batch.
  const fetchProjects = useCallback(async (page, filters = {}) => {
    try {
      setLoading(true);
      const params = { type: 'all', page, limit: PROJECTS_PER_PAGE };
      if (filters.academicYear && filters.academicYear !== 'all') {
        params.academic_year = filters.academicYear;
      }
      if (filters.status && filters.status !== 'all') {
        params.status = filters.status;
      }
      if (filters.search) {
        params.search = filters.search;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project`,
        { params }
      );
      const data = response.data;
      const projectsData = extractApiArray(response);

      setProjects(projectsData);
      setCurrentPage(Number(data?.page) || page);
      setTotalPages(Number(data?.totalPages) || 1);
      setTotalItems(Number(data?.total) || projectsData.length);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // One-time fetch of a large batch to build a complete academic-year list
  // for the filter dropdown. Kept separate from the paginated view so the
  // dropdown doesn't change contents as you page through.
  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project`,
          { params: { type: 'all', page: 1, limit: 50 } }
        );
        const sample = extractApiArray(response);
        const years = new Set();
        sample.forEach((project) => {
          if (project.start_date) {
            years.add(getAcademicYear(project.start_date));
          }
        });
        const sorted = Array.from(years).sort((a, b) => {
          const aStart = parseInt(a.split('-')[0], 10);
          const bStart = parseInt(b.split('-')[0], 10);
          return bStart - aStart;
        });
        setAcademicYears(sorted);
      } catch (err) {
        console.error('Error fetching academic years:', err);
      }
    };

    fetchYears();
  }, []);

  useEffect(() => {
    const academicYear = searchParams.get('academic_year');
    if (academicYear) {
      setYearFilter(academicYear);
    }
  }, [searchParams]);

  // Refetch page 1 from the server whenever a filter changes. Search is
  // debounced so we're not firing a request on every keystroke.
  useEffect(() => {
    const handle = setTimeout(() => {
      fetchProjects(1, { academicYear: yearFilter, status: statusFilter, search: searchTerm });
    }, searchTerm ? 350 : 0);

    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearFilter, statusFilter, searchTerm]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (yearFilter !== 'all') {
      params.set('academic_year', yearFilter);
    }
    if (searchTerm) {
      params.set('search', searchTerm);
    }
    if (statusFilter !== 'all') {
      params.set('status', statusFilter);
    }

    const newUrl = params.toString() ? `?${params.toString()}` : '';
    window.history.replaceState(null, '', newUrl);
  }, [yearFilter, searchTerm, statusFilter]);

  // Filtering now happens server-side (academic_year/status/search query
  // params on /api/project), so `projects` is already the filtered page —
  // no client-side re-filtering needed.
  const filteredProjects = projects;

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

  // Group headers sorted newest-first. Same fix as the publications page:
  // Object.entries() on integer-like keys does NOT preserve insertion
  // order in JS, so this sort is required, not cosmetic.
  const projectsByAcademicYear = useMemo(() => {
    const grouped = {};
    filteredProjects.forEach(project => {
      const academicYear = getAcademicYear(project.start_date);
      if (!grouped[academicYear]) {
        grouped[academicYear] = [];
      }
      grouped[academicYear].push(project);
    });

    return Object.entries(grouped).sort(([a], [b]) => {
      const aStart = parseInt(a.split('-')[0], 10);
      const bStart = parseInt(b.split('-')[0], 10);
      if (isNaN(aStart) && isNaN(bStart)) return 0;
      if (isNaN(aStart)) return 1;
      if (isNaN(bStart)) return -1;
      return bStart - aStart;
    });
  }, [filteredProjects]);

  const handleYearFilterChange = (value) => {
    setYearFilter(value);
  };

  const clearFilters = () => {
    setYearFilter('all');
    setSearchTerm('');
    setStatusFilter('all');
  };

  const goToPage = (page) => {
    const target = Math.min(Math.max(page, 1), totalPages);
    if (target !== currentPage) {
      fetchProjects(target, { academicYear: yearFilter, status: statusFilter, search: searchTerm });
    }
  };

  const isFilterActive = yearFilter !== 'all' || searchTerm || statusFilter !== 'all';

  if (loading && projects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-red-600 animate-spin mx-auto mb-3" />
          <p className="text-red-800 font-medium">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="text-center bg-white p-6 rounded-xl shadow-lg max-w-md">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <X className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">Error Loading Projects</h2>
          <p className="text-gray-600 text-sm mb-4">{error}</p>
          <button
            onClick={() => fetchProjects(currentPage)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:max-w-7xl mx-auto">

      {/* Search and Filters */}
      <div className=" mx-auto px-4 py-6">
        <div className="rounded-xl p-4 mb-6">
          {isFilterActive && (
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                {yearFilter !== 'all' && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    Academic Year: {yearFilter}
                  </span>
                )}
                {searchTerm && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Search: "{searchTerm}"
                  </span>
                )}
                {statusFilter !== 'all' && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Status: {statusFilter}
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center"
              >
                <X className="w-4 h-4 mr-1" />
                Clear all
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {/* Search Bar */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects, funding agencies, investigators..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-red-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent text-black"
                />
              </div>
            </div>

            {/* Academic Year Filter */}
            <div>
              <div className="relative">
                <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
                <select
                  value={yearFilter}
                  onChange={(e) => handleYearFilterChange(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-sm border border-red-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent appearance-none bg-white text-gray-500"
                >
                  <option value="all">All Academic Years</option>
                  {academicYears.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <div className="relative">
                <Filter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-sm border border-red-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent appearance-none bg-white text-gray-500"
                >
                  <option value="all">All Status</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Projects List */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your search criteria</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-red-700 text-sm font-medium">
                Showing {projects.length} on page {currentPage} of {totalPages}
                {' '}({totalItems} total{isFilterActive ? ' matching filters' : ''})
              </p>
              {isFilterActive && (
                <p className="text-gray-500 text-sm">
                  Filtered view • <button onClick={clearFilters} className="text-red-600 hover:text-red-700">Show all</button>
                </p>
              )}
            </div>

            {/* Projects by Academic Year */}
            <div className="space-y-6">
              {projectsByAcademicYear.map(([academicYear, yearProjects]) => (
                <div key={academicYear} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4">
                    <h2 className="text-xl font-bold">Academic Year {academicYear}</h2>
                  </div>

                  {/* Projects List */}
                  <div className="p-4 space-y-4">
                    {yearProjects.map((project) => (
                      <div
                        key={project.id}
                        className="border-l-2 border-red-500 pl-4 py-3 hover:bg-red-50 transition-colors cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <h3 className="text-base font-semibold text-gray-800 mb-2 leading-tight">
                          {project.project_title}
                        </h3>

                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex items-start">
                            <User className="w-3 h-3 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="font-medium text-gray-700">Faculty:</span>
                            <span className="ml-1">{project.investigators}</span>
                          </div>

                          <div className="flex items-start">
                            <Building2 className="w-3 h-3 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="font-medium text-gray-700">Sponsor:</span>
                            <span className="ml-1">{project.funding_agency}</span>
                          </div>

                          <div className="flex items-start">
                            <DollarSign className="w-3 h-3 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="font-medium text-gray-700">Amount:</span>
                            <span className="ml-1 text-green-600 font-semibold">
                              {formatCurrency(project.financial_outlay)}
                            </span>
                          </div>

                          <div className="flex items-start">
                            <Clock className="w-3 h-3 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="font-medium text-gray-700">Duration:</span>
                            <span className="ml-1">
                              {formatDate(project.start_date)} - {formatDate(project.end_date)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'Ongoing'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status}
                          </span>

                          <span className="text-red-600 hover:text-red-700 font-medium text-xs flex items-center">
                            View Details
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-6">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1 || loading}
                  className="flex items-center space-x-1 px-3 py-2 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="text-sm text-gray-600 font-medium">
                  {loading ? 'Loading…' : `Page ${currentPage} of ${totalPages}`}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages || loading}
                  className="flex items-center space-x-1 px-3 py-2 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-bold pr-4">{selectedProject.project_title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-red-100 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Investigators</h3>
                <p className="text-gray-600">{selectedProject.investigators}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Funding Agency</h3>
                <p className="text-gray-600">{selectedProject.funding_agency}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Financial Outlay</h3>
                  <p className="text-green-600 font-semibold">
                    {formatCurrency(selectedProject.financial_outlay)}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Funds Received</h3>
                  <p className="text-blue-600 font-semibold">
                    {formatCurrency(selectedProject.funds_received)}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Status</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  selectedProject.status === 'Ongoing'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {selectedProject.status}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Duration</h3>
                <p className="text-gray-600">
                  {formatDate(selectedProject.start_date)} - {formatDate(selectedProject.end_date)}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">PI Institute</h3>
                <p className="text-gray-600">{selectedProject.pi_institute}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Role</h3>
                <p className="text-gray-600">{selectedProject.role}</p>
              </div>

              {selectedProject.email && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Contact Email</h3>
                  <p className="text-gray-600">{selectedProject.email}</p>
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