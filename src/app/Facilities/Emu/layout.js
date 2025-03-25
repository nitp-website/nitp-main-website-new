"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./component/Sidebar.jsx";

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-16 mt-6 md:mt-10 w-full mb-8">
            <button
                className="md:hidden p-2 bg-gray-500 rounded-md mb-4 w-fit"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                className={`w-full md:w-1/4 lg:w-1/5 mb-6 md:mb-0 transition-all duration-300 ${isOpen ? "block" : "hidden md:block"}`}
            >
                <Sidebar onLinkClick={handleLinkClick} />
            </div>

            <div className="flex flex-col w-full md:w-3/4 lg:w-4/5">
                {children}
            </div>
        </div>
    );
}
