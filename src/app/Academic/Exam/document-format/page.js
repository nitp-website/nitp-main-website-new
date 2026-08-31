import React from 'react';
import { Download, FileText, ExternalLink, Search } from 'lucide-react';

export async function generateMetadata() {
    return {
        title: "Document Formats | Exam Section | NIT Patna",
        description: "Download prescribed document formats for Grade Cards, Transcripts, Provisional Certificates, and Re-evaluation from Examination Section NIT Patna."
    };
}

export default function DocumentFormatPage() {
    const examFormats = [
        {
            id: 1,
            title: "Format for Issue of Grade Card / Provisional Degree / Transcript",
            category: "General Exam Documents",
            link: "https://drive.google.com/file/d/1AhtQCtdBLB-FG-JldD3_j8NPTsj4EONp/view?usp=drivesdk",
            type: "PDF / Google Drive"
        },
        {
            id: 2,
            title: "Attestation Form for Grade Cards",
            category: "Grade Card Services",
            link: "https://drive.google.com/file/d/1AjHBBA3ca9s-T_jgtocOz5EYaJOzhbHa/view?usp=drivesdk",
            type: "PDF / Google Drive"
        },
        {
            id: 3,
            title: "Guidelines cum Checklist for Processing Academic Documents",
            category: "General Guidelines",
            link: "https://drive.google.com/file/d/1RWpLyN6uVWrvfQBfbhKstRRXEVsNLejk/view?usp=drive_link",
            type: "PDF / Google Drive"
        },
        {
            id: 4,
            title: "Format of Report of the PhD Thesis Examiner",
            category: "PhD / Research Formats",
            link: "https://drive.google.com/uc?export=download&id=1jHjC71_meJ4u-KYXOeqDKKtVBCLWitY8",
            doclink: "https://docs.google.com/document/d/1Yp4KTaG6zXGHwAklHlXI5ww4PfNkB7GQ/export?format=docx",
            type: "DOCX / PDF"
        },
        {
            id: 5,
            title: "Format of Report of Final Viva-Voce Examination Board",
            category: "PhD / Research Formats",
            link: "https://drive.google.com/file/d/1TyrXyy6cw88c5umnns6a0oPwY42_Y7xY/view?usp=sharing",
            type: "PDF / Google Drive"
        },
        {
            id: 6,
            title: "Format of Application for Issue of Duplicate Degree / Grade Card",
            category: "Duplicate Credentials",
            link: "https://drive.google.com/file/d/1AhtQCtdBLB-FG-JldD3_j8NPTsj4EONp/view?usp=drivesdk",
            type: "PDF / Google Drive"
        }
    ];

    return (
        <div className="space-y-8 py-2">
            {/* Page Header */}
            <div className="border-b border-gray-200 pb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-red-900">Document Formats</h1>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                    Prescribed application formats and forms issued by the Examination Section.
                </p>
            </div>

            {/* Note banner */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-900 text-sm">
                <p className="font-semibold">Note to Students:</p>
                <p className="mt-0.5 text-amber-800">
                    Please download, print, fill out the required form completely, attach all necessary enclosures (no-dues, fee receipt, identity proof), and submit to the Examination Office.
                </p>
            </div>

            {/* Formats Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700 text-sm md:text-base flex items-center justify-between">
                    <span>Available Examination Formats</span>
                    <span className="text-xs text-gray-500 font-normal">{examFormats.length} Documents available</span>
                </div>

                <div className="divide-y divide-gray-200">
                    {examFormats.map((item) => (
                        <div key={item.id} className="p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-red-50/30 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-red-100/60 rounded-lg text-red-800 shrink-0 mt-0.5">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-snug">{item.title}</h3>
                                    <span className="inline-block mt-1 px-2.5 py-0.5 bg-stone-100 text-gray-600 rounded text-xs font-medium">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                                {item.doclink && (
                                    <a
                                        href={item.doclink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg transition-colors border border-stone-200"
                                    >
                                        <Download size={14} />
                                        DOCX
                                    </a>
                                )}
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-900 hover:bg-red-800 text-white text-xs md:text-sm font-semibold rounded-lg transition-colors shadow-xs"
                                >
                                    <ExternalLink size={14} />
                                    View / Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
