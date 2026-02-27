import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

// import React from 'react'
interface NavItem {
    name: string,
    path: string
}

const navLinks: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Feedback', path: '/feedback' },
];

const Navbar = () => {
    const title: string = 'AstroSpace';
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[75%] lg:w-[60%] px-6 py-3 flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/10 rounded-2xl">

            {/* Logo */}
            <div>
                <h1 className="font-mono text-2xl font-bold tracking-wide text-gray-900">
                    {title.split("").map((char, idx) => (
                        <span
                            key={idx}
                            className={`${idx > 4 ? "text-cyan-600" : ""}`}
                        >
                            {char}
                        </span>
                    ))}
                </h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                {navLinks.map((link, idx) => (
                    <Link
                        to={link.path}
                        key={idx}
                        className="relative group transition"
                    >
                        <span className="hover:text-cyan-600 transition duration-300">
                            {link.name}
                        </span>

                        {/* Animated underline */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="block md:hidden text-gray-800"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <Close className="text-cyan-600" fontSize="large" />
                ) : (
                    <Menu className="text-cyan-600" fontSize="large" />
                )}
            </button>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="absolute top-full mt-4 left-0 w-full bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col gap-6 md:hidden">

                    {navLinks.map((link, idx) => (
                        <Link
                            to={link.path}
                            key={idx}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-800 font-medium hover:text-cyan-600 transition duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar;