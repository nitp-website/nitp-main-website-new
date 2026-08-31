"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, CheckSquare, Users, Info, ShieldCheck, ArrowRight, Bell } from "lucide-react";
import DepartmentNotify1 from "../../components/department/DepartmentNotify1.js";
import { extractApiArray, getBackendApiUrl } from "@/lib/apiHelpers";

// API endpoint URL for Exam Notices
const EXAM_NOTICE_URL = "https://admin.nitp.ac.in/api/notice?type=exam";

const picture = [
    "https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1737372407376.JPG",
    "https://nitp-database-s3.s3.ap-south-1.amazonaws.com/MainEntrance.webp"
];

const aboutText = `The Exam Section is an integral and essential section of National Institute of Technology Patna. Since 2004 separate Exam section is functioning under Academic section of NIT Patna to look after the exam related matter. The students are evaluated continuously as per guidelines of National Education Policy (NEP) 2020 from academic session 2021 for 2021 admitted students onwards.

The academic session is divided into two semesters namely: Autumn /Odd semester (July-December) and Spring/Even semester (January-May) including short semester of Summer Quarter and Summer Special (SQ/SMR). The Senate of the Institute approves the schedule of academic activities and final academic calendar is uploaded at published for a session which includes dates for semester registration, Mid Semester, End- Semester examination SQ/SMR exam, inter-Semester break etc.

All the semester exams (Mid/End/SMR) are centrally conducted by the Exam section for Undergraduate, Postgraduate and Ph.D programs as per the dates notified in the academic calendar.

Request for annual procurement of exam answer books, stamping of exam answer books, preparation of exam schedule, exam seat plans, time to time uploading of required exam related details at NITP website, liasioning with department, coordinating with MIS system, furnishing and providing all the exam related documents to the departments for smooth conduction of semester exams are important per examination activities of exam section.

The post exam activities comprises of management of unfair means and malpractice cases of semester exams, constant coordination with MIS for necessary exam and result related work, monitoring of tabulation records (TR) verification of End semester exams, publication of TR, publication of result, correction of result through correction process and final correction in any error of result is commenced after approval of the competent authority. Students are evaluated for offline courses, online courses and Minor courses by the faculties and the final evaluation of students by Faculties is done is based relative grading system.

Exam section keeps of exam related documents of all the mid semester, end semester, Class test, and assignment, tutorials, viva-voce, and laboratory assignment in hard and soft which are provided from the departments for futuristic use.

All the exam related documents namely : verification/attestation of student’s result for various official purposes, verification of exam credential from records received from outside organization, issue of Grade Cards, Provisional Certificate and Transcript are vital functioning of exam section. We send the Scan copy of documents through emails and the stu8dents do collect the hard copies of exam documents from exam section.`;

export default function ExamPage() {
    const router = useRouter();
    const [feature, setFeature] = useState(picture[0]);
    const [it, setIt] = useState(0);
    const [notices, setNotices] = useState([]);
    const [loadingNotices, setLoadingNotices] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIt((prev) => (prev + 1) % picture.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setFeature(picture[it]);
    }, [it]);

    useEffect(() => {
        const fetchExamNotices = async () => {
            try {
                setLoadingNotices(true);
                const fetchUrl = EXAM_NOTICE_URL.startsWith("http")
                    ? EXAM_NOTICE_URL
                    : getBackendApiUrl(EXAM_NOTICE_URL);

                let data = [];
                try {
                    const response = await axios.get(fetchUrl);
                    data = extractApiArray(response);
                } catch {
                    data = [];
                }

                if (!data || data.length === 0) {
                    const fallbackUrl = "https://admin.nitp.ac.in/api/notice?type=exam";
                    const resFallback = await axios.get(fallbackUrl);
                    data = extractApiArray(resFallback);
                }

                setNotices(data);
            } catch (err) {
                console.error("Failed to fetch exam notices:", err);
                setNotices([]);
            } finally {
                setLoadingNotices(false);
            }
        };

        fetchExamNotices();
    }, []);

    return (
        <div className="w-[95%] lg:w-[90%] mx-auto text-black bg-[url('https://i.postimg.cc/2jnZjfrL/6359670-3258484-removebg-preview.png')] bg-cover bg-center space-y-8 pb-6">
            {/* Section One: Image Carousel + Announcements (Department Theme) */}
            <div className="w-full flex flex-col md:flex-row gap-5 md:max-h-[420px] mx-auto shrink-0 mt-5">
                {/* Department / Exam Picture Slider */}
                <div className="w-full md:w-1/2 h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden flex items-center justify-center relative rounded-lg shadow-lg">
                    <div className="relative w-full h-full">
                        <img
                            src={feature}
                            className="h-full w-full object-cover rounded-lg max-sm:rounded-none shadow-lg"
                            alt="Examination Section Image"
                        />

                        {/* Banner Overlay */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                            <h2 className="text-xl md:text-2xl font-bold">Examination Section</h2>
                            <p className="text-xs md:text-sm text-gray-200">National Institute of Technology Patna</p>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => setIt((prev) => (prev === 0 ? picture.length - 1 : (picture.length + prev - 1) % picture.length))}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full z-10"
                        >
                            &#8249;
                        </button>
                        <button
                            onClick={() => setIt((prev) => (prev === picture.length - 1 ? 0 : (prev + 1) % picture.length))}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full z-10"
                        >
                            &#8250;
                        </button>
                    </div>
                </div>


                <div className="md:w-1/2 h-full flex items-center justify-center">
                    <div className="w-full flex flex-col max-sm:mr-0 h-full">
                        <div className="bg-white rounded-lg shadow-md p-6 py-4 border border-red-200 h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-[#5D1A14] mb-4 flex items-center gap-2">
                                    <Bell size={22} className="text-[#8B3A32]" />
                                    Announcements
                                </h2>
                                <ul className="space-y-3 overflow-y-auto max-h-72 pr-1">
                                    {loadingNotices ? (
                                        <li className="text-gray-400 text-sm italic py-4 text-center">
                                            Loading announcements...
                                        </li>
                                    ) : notices && notices.length > 0 ? (
                                        notices.map((notice, id) => {
                                            if (notice.isVisible === 1 || notice.isVisible === undefined) {
                                                const linkStr = notice.notice_link
                                                    ? JSON.stringify({ url: notice.notice_link })
                                                    : (notice.attachments && notice.attachments.length > 0 ? JSON.stringify({ url: notice.attachments[0].url }) : "");

                                                return (
                                                    <DepartmentNotify1
                                                        key={notice.id || id}
                                                        title={notice.title}
                                                        attachments={notice.attachments}
                                                        important={notice.important}
                                                        link={linkStr}
                                                        date={notice.updatedAt || notice.timestamp}
                                                    />
                                                );
                                            }
                                            return null;
                                        })
                                    ) : (
                                        <li className="text-gray-500 text-sm py-4 italic text-center">
                                            No announcements found.
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="mt-4 pt-2 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        if (EXAM_NOTICE_URL && EXAM_NOTICE_URL.startsWith("http") && !EXAM_NOTICE_URL.includes("/api/")) {
                                            window.open(EXAM_NOTICE_URL, "_blank");
                                        } else {
                                            router.push("/Notices/Exam");
                                        }
                                    }}
                                    className="inline-block text-sm font-semibold text-[#8B3A32] border border-[#8B3A32] px-4 py-2 rounded-md hover:bg-[#F8F0EE] hover:text-[#5D1A14] transition-colors cursor-pointer"
                                >
                                    View All Announcements
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Two: About Section (Department Layout) */}
            <div className="px-2 mt-4 max-sm:px-2">
                <div className="flex flex-col w-full mx-auto">
                    <div className="mx-auto text-2xl max-sm:text-lg font-semibold text-red-950 mb-3 border-b-2 border-red-800 pb-1">
                        About
                    </div>
                    <div className="px-2 flex mx-auto gap-2 flex-1 shrink-0">
                        <div className="w-[100%] mx-auto text-justify text-black text-sm md:text-base leading-relaxed bg-white/80 backdrop-blur-xs rounded-lg p-5 border border-gray-100 shadow-sm space-y-3">
                            {aboutText.split("\n\n").slice(0, 2).map((paragraph, index) => (
                                <p key={index} className="leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                            <div className="pt-2 text-right">
                                <button
                                    onClick={() => router.push('/Academic/Exam/about')}
                                    className="inline-flex items-center gap-1 text-red-800 font-bold hover:text-red-950 transition-colors"
                                >
                                    Read Complete Overview
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Three: Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <Link
                    href="/Academic/Exam/document-format"
                    className="group p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:border-red-300 transition-all"
                >
                    <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-800 mb-4 group-hover:bg-red-800 group-hover:text-white transition-colors">
                        <FileText size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-800 transition-colors flex items-center justify-between">
                        Document Formats
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Download prescribed application forms for Grade Cards, Transcripts, Provisional Degrees, and Verification.
                    </p>
                </Link>

                <Link
                    href="/Academic/Exam/sop"
                    className="group p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:border-red-300 transition-all"
                >
                    <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-800 mb-4 group-hover:bg-red-800 group-hover:text-white transition-colors">
                        <CheckSquare size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-800 transition-colors flex items-center justify-between">
                        SOP Guidelines
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Standard Operating Procedures for degree distribution, migration certificate, and educational verification.
                    </p>
                </Link>

                <Link
                    href="/Academic/Exam/people"
                    className="group p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:border-red-300 transition-all"
                >
                    <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-800 mb-4 group-hover:bg-red-800 group-hover:text-white transition-colors">
                        <Users size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-800 transition-colors flex items-center justify-between">
                        People & Contacts
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Associate Dean (Exam) details, exam office administration, contact numbers, and office counter location.
                    </p>
                </Link>
            </div>

            {/* Section Four: Key Contact Banner */}
            <div className="bg-white border-l-4 border-red-800 p-6 rounded-r-xl shadow-md border">
                <div className="flex items-start gap-4">
                    <ShieldCheck className="text-red-800 shrink-0 mt-1" size={28} />
                    <div>
                        <h3 className="text-lg font-bold text-red-950 mb-1">Associate Dean (Examinations)</h3>
                        <p className="text-gray-800 font-semibold text-sm">Prof. A. R. Quaff</p>
                        <p className="text-gray-600 text-sm mt-1">
                            Official Email: <a href="mailto:examoffice@nitp.ac.in" className="text-red-800 font-bold underline">examoffice@nitp.ac.in</a>
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            For queries regarding transcripts, grade card corrections, and official verification, please contact the examination office counter.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
