import React from 'react';
import { CheckSquare, ExternalLink, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';

export async function generateMetadata() {
    return {
        title: "Standard Operating Procedures (SOP) | Exam Section | NIT Patna",
        description: "Official Standard Operating Procedures (SOP) for Original Degree Certificate, Migration Certificate, Educational Verification, and Loan Adjustments."
    };
}

export default function SOPPage() {
    const sops = [
        {
            step: "01",
            title: "SOP to Issue Original Degree Certificate",
            description: "Detailed procedure for graduating students and alumni to apply for and collect original degree certificates, including mandatory clear no-dues requirements.",
            link: "https://drive.google.com/file/d/1qM6BOW8YP31Wy2eWvJ6uyzYvPbDbJfSi/view?usp=drive_link",
            category: "Degree Certification"
        },
        {
            step: "02",
            title: "SOP to Issue Institute Leaving / Transfer Cum Migration Certificate",
            description: "Procedure for requesting Institute Transfer cum Migration Certificates required for higher education or employment enrollment.",
            link: "https://drive.google.com/file/d/18Np6gdfMuJoJKgZbKUy8zIh5D3YDR8Sw/view?usp=drive_link",
            category: "Migration Services"
        },
        {
            step: "03",
            title: "SOP for Educational Verification",
            description: "Guidelines for background verification agencies, employer companies, and universities verifying the authenticity of NIT Patna degrees and grade transcripts.",
            link: "https://drive.google.com/file/d/14yzsDNeIUsbrY6IY1uXRES323Bvww6j3/view?usp=drive_link",
            category: "Document Verification"
        },
        {
            step: "04",
            title: "SOP for Refund of DRCC Education Loan (BSCCS)",
            description: "Standard operating guidelines for processing refund of loan excess amount under Bihar Student Credit Card Scheme.",
            link: "https://drive.google.com/file/d/1KXs3dru2FJZ5q_kV1h36TK6E7EkOO0n9/view?usp=drivesdk",
            category: "Financial / DRCC"
        },
        {
            step: "05",
            title: "SOP for Adjustment of DRCC Education Loan (BSCCS)",
            description: "Procedure for adjusting education loan disbursements received under the Bihar Student Credit Card Scheme against institute fees.",
            link: "https://drive.google.com/file/d/1t7NsBr6xqNqgUyuuxW-l-vFE35zrc3vi/view?usp=sharing",
            category: "Financial / DRCC"
        }
    ];

    return (
        <div className="space-y-8 py-2">
            {/* Header */}
            <div className="border-b border-gray-200 pb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-red-900">Standard Operating Procedures (SOP)</h1>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                    Official step-by-step guidelines for various examination and academic administrative services.
                </p>
            </div>

            {/* SOP Cards Grid */}
            <div className="space-y-4">
                {sops.map((sop) => (
                    <div
                        key={sop.step}
                        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                        <div className="flex items-start gap-4">
                            <span className="flex items-center justify-center w-12 h-12 bg-red-900 text-white font-extrabold rounded-xl shrink-0 text-lg shadow-sm">
                                {sop.step}
                            </span>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2.5 py-0.5 bg-red-50 text-red-800 text-xs font-semibold rounded-full border border-red-100">
                                        {sop.category}
                                    </span>
                                </div>
                                <h2 className="text-base md:text-lg font-bold text-gray-800 leading-snug">
                                    {sop.title}
                                </h2>
                                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                    {sop.description}
                                </p>
                            </div>
                        </div>

                        <a
                            href={sop.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-red-900 hover:bg-red-800 text-white font-semibold text-xs md:text-sm rounded-lg transition-colors shadow shrink-0 self-end md:self-center"
                        >
                            Read Full SOP
                            <ExternalLink size={16} />
                        </a>
                    </div>
                ))}
            </div>

            {/* Assistance Banner */}
            <div className="bg-stone-50 border border-stone-200 p-6 rounded-xl text-center space-y-2">
                <h3 className="font-bold text-gray-800 text-base">Require further assistance regarding SOP compliance?</h3>
                <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                    Please ensure all required supporting documents specified in the SOP documents are attached prior to submitting applications to the Examination Office.
                </p>
            </div>
        </div>
    );
}
