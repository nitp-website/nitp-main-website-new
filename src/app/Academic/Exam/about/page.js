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
        "The Exam Section is an integral and essential section of National Institute of Technology Patna. Since 2004 separate Exam section is functioning under Academic section of NIT Patna to look after the exam related matter. The students are evaluated continuously as per guidelines of National Education Policy (NEP) 2020 from academic session 2021 for 2021 admitted students onwards.",
        "The academic session is divided into two semesters namely: Autumn /Odd semester (July-December) and Spring/Even semester (January-May) including short semester of Summer Quarter and Summer Special (SQ/SMR). The Senate of the Institute approves the schedule of academic activities and final academic calendar is uploaded at published for a session which includes dates for semester registration, Mid Semester, End- Semester examination SQ/SMR exam, inter-Semester break etc.",
        "All the semester exams (Mid/End/SMR) are centrally conducted by the Exam section for Undergraduate, Postgraduate and Ph.D programs as per the dates notified in the academic calendar.",
        "Request for annual procurement of exam answer books, stamping of exam answer books, preparation of exam schedule, exam seat plans, time to time uploading of required exam related details at NITP website, liasioning with department, coordinating with MIS system, furnishing and providing all the exam related documents to the departments for smooth conduction of semester exams are important per examination activities of exam section.",
        "The post exam activities comprises of management of unfair means and malpractice cases of semester exams, constant coordination with MIS for necessary exam and result related work, monitoring of tabulation records (TR) verification of End semester exams, publication of TR, publication of result, correction of result through correction process and final correction in any error of result is commenced after approval of the competent authority. Students are evaluated for offline courses, online courses and Minor courses by the faculties and the final evaluation of students by Faculties is done is based relative grading system.",
        "Exam section keeps of exam related documents of all the mid semester, end semester, Class test, and assignment, tutorials, viva-voce, and laboratory assignment in hard and soft which are provided from the departments for futuristic use.",
        "All the exam related documents namely : verification/attestation of student’s result for various official purposes, verification of exam credential from records received from outside organization, issue of Grade Cards, Provisional Certificate and Transcript are vital functioning of exam section. We send the Scan copy of documents through emails and the students do collect the hard copies of exam documents from exam section."
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
