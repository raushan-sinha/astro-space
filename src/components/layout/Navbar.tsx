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

    return (
        <nav className='w-[50%] px-4 flex flex-row justify-between items-center bg-[#101923] rounded-xl m-auto fixed top-4 left-1/2 -translate-x-1/2 border-cyan-500 border-2'>
            <div>
                <h1 className='font-mono text-2xl text-white'>
                    {title.split('').map((char, idx) => (
                        <span className={`${idx > 4 ? 'text-yellow-400' : ''}`}>{char}</span>
                    ))}
                </h1>
            </div>
            <div className="flex items-center gap-10 px-8 py-4 text-white">
                {navLinks.map((link, idx) => (
                    <a key={idx} className='cursor-pointer hover:text-yellow-400 hover:underline underline-offset-4 transition font-mono text-xl'>
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;