"use client";
import { useState } from "react";
import Sidebar from "../../components/department/Sidebar.jsx";
import {
    Users,
    FileText,
    BookOpen,
    Info,
    CheckSquare
} from "lucide-react";

const navItems = [
    {
        name: "EXAM SECTION",
    },
    { name: "Overview", url: "/Academic/Exam", icon: <BookOpen size={20} /> },
    {
        name: "About",
        icon: <Info size={18} />,
        url: "#",
        dropdown: [
            {
                name: "About Exam Section",
                url: "/Academic/Exam/about",
                icon: <Info size={18} />,
            },
            {
                name: "Document Format",
                url: "/Academic/Exam/document-format",
                icon: <FileText size={18} />,
            },
            {
                name: "SOP",
                url: "/Academic/Exam/sop",
                icon: <CheckSquare size={18} />,
            },
        ],
    },
    {
        name: "People",
        icon: <Users size={18} />,
        url: "/Academic/Exam/people",
    },
];

export default function Layout({ children }) {
    const [isMenuOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row w-full mb-8 relative px-4 md:px-8 mt-6">
            {/* Desktop Sidebar */}
            <div className="hidden md:block w-full md:w-1/4 lg:w-64 mb-6 h-full md:mb-0">
                <Sidebar
                    onLinkClick={() => setIsOpen(false)}
                    isMenuOpen={isMenuOpen}
                    dept="EXAM"
                    navItems={navItems}
                />
            </div>

            <div className="flex flex-col w-full md:w-3/4 lg:w-[85%] items-center md:pl-6">
                {/* Section Header */}
                <div className="px-5 pt-4 max-sm:pt-2 max-sm:px-0 text-black w-full mb-4">
                    <div className="text-3xl max-sm:text-2xl font-bold text-red-900 text-center uppercase tracking-wide">
                        EXAMINATION SECTION
                    </div>
                    <div className="h-1 w-24 bg-red-800 mx-auto mt-2 rounded-full"></div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden w-full mb-4">
                    <Sidebar
                        onLinkClick={() => setIsOpen(false)}
                        isMenuOpen={isMenuOpen}
                        dept="EXAM"
                        navItems={navItems}
                    />
                </div>

                {/* Main Content Area */}
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
}
