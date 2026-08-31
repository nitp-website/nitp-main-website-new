"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { User, ShieldCheck } from "lucide-react";
import NewStaffcardDept from "../../../components/faculty/NewStaffcardDept";
import FacultyCard from "@/components/facultycomponents/Facultycard";
import { sortByDesignation } from "../../../../lib/designationOrder";

// Configurable array of faculty emails for the Examination Section
const EXAM_FACULTY_EMAILS = [
    "arquaff@nitp.ac.in",
];

const ExamPeoplePage = () => {
    const [staffList, setStaffList] = useState([]);
    const [facultyList, setFacultyList] = useState([]);
    const [loadingStaff, setLoadingStaff] = useState(true);
    const [loadingFaculty, setLoadingFaculty] = useState(true);
    const [staffError, setStaffError] = useState(false);
    const [facultyError, setFacultyError] = useState(false);

    useEffect(() => {
        // Fetch Faculty details via profile summary API for each email in EXAM_FACULTY_EMAILS
        const fetchExamFaculty = async () => {
            try {
                setLoadingFaculty(true);
                setFacultyError(false);
                const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";

                const promises = EXAM_FACULTY_EMAILS.map(async (email) => {
                    try {
                        const res = await fetch(
                            `${baseUrl}/api/v2/profile?email=${encodeURIComponent(email)}&section=summary`
                        );
                        if (!res.ok) return null;
                        const data = await res.json();
                        if (!data || data.error) return null;

                        const profile = data.profile || {};
                        return {
                            id: profile.id || profile.email || email,
                            name: profile.name || email,
                            designation: profile.designation || "Faculty Member",
                            academic_responsibility: profile.academic_responsibility || "",
                            email: profile.email || email,
                            image: profile.image,
                            department: profile.department,
                            mobile_number: profile.ext_no || profile.mobile_number || profile.phone,
                            research_interest: profile.research_interest,
                            date_of_joining: profile.date_of_joining,
                            education: data.education || [],
                            work_experience: data.work_experience || [],
                            journalPublications: data.journal_papers_count || 0,
                            conferencePublications: data.conference_papers_count || 0,
                            patents: data.ipr_count || 0,
                            projects: data.sponsored_projects_count || 0,
                            research_students: data.phd_candidates_count || 0,
                            is_retired: profile.is_retired,
                            gender: profile.gender,
                        };
                    } catch (err) {
                        console.error(`Failed to fetch faculty profile for ${email}:`, err);
                        return null;
                    }
                });

                const results = await Promise.all(promises);
                const validFaculty = results.filter(Boolean);
                setFacultyList(validFaculty);
            } catch (err) {
                console.error("Failed to fetch exam faculty list:", err);
                setFacultyError(true);
            } finally {
                setLoadingFaculty(false);
            }
        };

        // Fetch Exam Staff list
        const fetchExamStaff = async () => {
            try {
                setLoadingStaff(true);
                setStaffError(false);

                let allStaff = [];
                let page = 1;
                let totalPages = 1;

                do {
                    const { data } = await axios.get(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/staff2?type=all&department=exam&page=${page}&limit=50`
                    );

                    if (data && data.data) {
                        allStaff.push(...data.data);
                        totalPages = data.totalPages || 1;
                    }
                    page++;
                } while (page <= totalPages);

                setStaffList(sortByDesignation(allStaff));
            } catch (err) {
                console.error("Failed to fetch exam staff:", err);
                setStaffError(true);
            } finally {
                setLoadingStaff(false);
            }
        };

        fetchExamFaculty();
        fetchExamStaff();
    }, []);

    return (
        <div className="space-y-10 py-2">
            {/* Header */}
            <div className="border-b border-gray-200 pb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-red-900">People & Key Contacts</h1>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                    Faculty leadership and staff members of the Examination Section.
                </p>
            </div>

            {/* Faculty Section */}
            {(loadingFaculty || facultyList.length > 0) && (
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-red-800" size={22} />
                        Faculty Leadership & Members
                    </h2>

                    {loadingFaculty ? (
                        <div className="text-center py-10">
                            <div className="w-10 h-10 border-4 border-red-800 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                            <p className="text-gray-500 text-sm">Loading faculty directory...</p>
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center md:justify-start gap-6 my-2 text-black">
                            {facultyList.map((faculty) => (
                                <FacultyCard
                                    key={faculty.id || faculty.email}
                                    name={faculty.name}
                                    image={faculty.image}
                                    designation={faculty.designation}
                                    department={faculty.department}
                                    researchInterests={faculty.research_interest}
                                    academic_responsibility={faculty.academic_responsibility}
                                    email={faculty.email}
                                    phone={faculty.mobile_number}
                                    journalPublications={faculty.journalPublications}
                                    conferencePublications={faculty.conferencePublications}
                                    patents={faculty.patents}
                                    projects={faculty.projects}
                                    research_students={faculty.research_students}
                                    profileLink={`/profile/${faculty.email}`}
                                    is_retired={faculty.is_retired}
                                    gender={faculty.gender}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Staff Section */}
            {(loadingStaff || staffList.length > 0) && (
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <User className="text-red-800" size={22} />
                        Section Staff Members
                    </h2>

                    {loadingStaff ? (
                        <div className="text-center py-10">
                            <div className="w-10 h-10 border-4 border-red-800 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                            <p className="text-gray-500 text-sm">Loading staff directory...</p>
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center md:justify-start gap-6 my-2 text-black">
                            {staffList.map((staff) => (
                                <NewStaffcardDept key={staff.id ?? staff.user_id} staff={staff} />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Fallback if both sections are empty after loading */}
            {!loadingFaculty && !loadingStaff && facultyList.length === 0 && staffList.length === 0 && (
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 mx-auto">
                        <User size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-base">No Personnel Details Available</h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                        No faculty or staff entries are currently available for this section.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ExamPeoplePage;

