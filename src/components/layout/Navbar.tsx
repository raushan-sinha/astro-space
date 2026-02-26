import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";

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
        <nav className='w-[90%] md:w-[70%] lg:w-[50%] px-4 py-3 md:py-0 flex justify-between items-center bg-[#101923] rounded-xl fixed top-4 left-1/2 -translate-x-1/2 border-cyan-500 border-2 relative'>

            {/* Logo */}
            <div>
                <h1 className='font-mono text-2xl text-white'>
                    {title.split('').map((char, idx) => (
                        <span key={idx} className={`${idx > 4 ? 'text-yellow-400' : ''}`}>
                            {char}
                        </span>
                    ))}
                </h1>
            </div>

            {/* Links - Hidden Everywhere Above Mobile */}
            <div className="hidden md:flex items-center gap-10 px-8 py-4 text-white">
                {navLinks.map((link, idx) => (
                    <a
                        key={idx}
                        className='cursor-pointer hover:text-yellow-400 hover:underline underline-offset-4 transition font-mono text-xl'
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Menu Icon - Visible Only */}
            <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <Close className="text-cyan-500 cursor-pointer" fontSize="large" /> : <Menu className="text-cyan-500 cursor-pointer" fontSize="large" />}
            </button>

            {/* Menu box for small devices */}
            {menuOpen && (
                <div className="absolute top-full mt-4 left-0 w-full bg-[#101923] border border-cyan-500 rounded-2xl shadow-lg p-6 flex flex-col gap-6 md:hidden">
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            className='cursor-pointer text-white hover:text-yellow-400 hover:underline underline-offset-4 transition font-mono text-xl' onClick={() => setMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar;