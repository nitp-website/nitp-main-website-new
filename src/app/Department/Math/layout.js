"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    const [isMenuOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row w-full mb-8">
            <button
                className="md:hidden mt-2 ml-8 p-2 bg-gray-500 rounded-md mb-4 w-fit"
                onClick={() => setIsOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                className={`w-full md:w-1/4 lg:w-64 mb-6 h-full md:mb-0 transition-all duration-300 ${isMenuOpen ? "block" : "hidden md:block"}`}
            >
                <Sidebar onLinkClick={() => setIsOpen(false)} isMenuOpen={isMenuOpen} />
            </div>

            <div className="flex flex-col w-full md:w-3/4 lg:w-[85%] items-center">
                <div className="px-5 pt-10 max-sm:px-0 text-black">
                    {/* heading */}
                    <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 text-center bg-transparent">
                        Mathematics and Computing Technology
                    </div>
                </div>
                <div className="w-[100%]">{children}</div>
            </div>

        </div>
    );
}
