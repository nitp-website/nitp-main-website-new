import React from 'react';
import { BookOpen, CheckCircle, Shield, Award, Calendar, FileText } from 'lucide-react';

export async function generateMetadata() {
    return {
        title: "About | Exam Section | NIT Patna",
        description: "Comprehensive information about the Examination Section at National Institute of Technology Patna."
    };
}

export default function AboutExamPage() {
    const fullAboutParagraphs = [
        "The Examination Section is an integral and essential part of the National Institute of Technology Patna. Since 2004, a separate Examination Section has been functioning under the Academic Section to oversee all examination-related matters. Students are evaluated continuously in accordance with the guidelines of the National Education Policy (NEP) 2020, beginning with the academic session 2021 for students admitted in 2021 and onward.",
        "The academic session is divided into two semesters: Autumn/Odd Semester (July-December) and Spring/Even Semester (January-May), along with the short semester of Summer Quarter and Summer Special (SQ/SMR). The Senate of the Institute approves the academic schedule, and the final academic calendar is published for each session. It includes dates for semester registration, mid-semester examinations, end-semester examinations, SQ/SMR examinations, and inter-semester breaks.",
        "All semester examinations, including Mid-Semester, End-Semester, and SQ/SMR examinations, are centrally conducted by the Examination Section for undergraduate, postgraduate, and Ph.D. programs as per the dates notified in the academic calendar.",
        "The section is responsible for key pre-examination activities such as the annual procurement of answer books, stamping of answer sheets, preparation of examination schedules and seat plans, regular updates of examination-related information on the NITP website, coordination with departments, liaison with the academic ERP/MIS system, and the timely dissemination of examination-related documents to departments to ensure the smooth conduct of semester examinations.",
        "Post-examination activities include the management of unfair means and malpractice cases, continuous coordination with the MIS for exam and result-related work, monitoring tabulation records (TR), verification of end-semester examinations, publication of TR and results, and correction of results through the prescribed correction process. Final corrections are initiated only after approval from the competent authority. Students are evaluated for offline, online, and minor courses by faculty members, and the final performance is assessed through the relative grading system.",
        "The Examination Section maintains all examination-related records and documents for each academic year, including mid-semester examinations, end-semester examinations, class tests, assignments, tutorials, viva-voce examinations, and laboratory assignments. These records are preserved in both hard-copy and soft-copy formats, as provided by the departments, for future reference and academic use.",
        "The section also performs vital functions such as verification and attestation of student results for official purposes, verification of examination credentials from records received from national and international organizations, and issuance of Grade Cards, Provisional Certificates, and Transcripts. Scanned copies of documents are communicated to students via email, while hard copies are collected from the Examination Section or dispatched through Indian postal services, as applicable, after payment of the prescribed postal charges."
    ];

    const keyHighlights = [
        {
            title: "NEP 2020 Continuous Evaluation",
            description: "Continuous student evaluation aligned with National Education Policy (NEP 2020) guidelines implemented since the 2021 academic session.",
            icon: <Shield className="text-red-800" size={24} />
        },
        {
            title: "Centralized Examination Conduction",
            description: "The exam is centrally conducted by examination section for the academic  programs of the institute.Their shall be three semester examination conducted in an academic year namely:  odd,even and SQ/summer exam for undergraduate and postgraduate programs.",
            icon: <Calendar className="text-red-800" size={24} />
        },
        {
            title: "Credential & Result Verification",
            description: "Issuance, verification, and attestation of Grade Cards, Provisional Certificates, Transcripts, and external verification.",
            icon: <Award className="text-red-800" size={24} />
        }
    ];

    return (
        <div className="space-y-8 py-2">
            {/* Header Section */}
            <div className="border-b border-gray-200 pb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-red-900">About Examination Section</h1>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                    Functioning under the Academic Wing of NIT Patna since 2004 for examination management, result processing, and student record verification.
                </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {keyHighlights.map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-b from-red-50/50 to-white p-6 rounded-xl border border-red-100 shadow-sm">
                        <div className="p-3 bg-white rounded-lg w-fit shadow-xs mb-4">
                            {item.icon}
                        </div>
                        <h2 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Full Detailed Description */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm space-y-4 text-gray-800 leading-relaxed text-sm md:text-base">
                <h2 className="text-xl font-bold text-red-900 flex items-center gap-2 mb-2">
                    <BookOpen size={22} className="text-red-800" />
                    Overview & Functions of the Examination Section
                </h2>

                <div className="space-y-4 text-justify">
                    {fullAboutParagraphs.map((para, index) => (
                        <p key={index} className="leading-relaxed text-gray-700 bg-stone-50/50 p-4 rounded-lg border border-stone-100">
                            {para}
                        </p>
                    ))}
                </div>
            </div>

            {/* Contact Box */}
            <div className="bg-red-900 text-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold">Need official verification or certificate assistance?</h3>
                    <p className="text-red-100 text-sm mt-1">Visit the Exam Section counter or email the examination office.</p>
                </div>
                <a
                    href="mailto:examoffice@nitp.ac.in"
                    className="px-5 py-2.5 bg-white text-red-900 font-bold rounded-lg hover:bg-red-50 transition-colors shadow shrink-0"
                >
                    Email Exam Office
                </a>
            </div>
        </div>
    );
}
