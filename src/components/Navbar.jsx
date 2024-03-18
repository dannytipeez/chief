"use client";

import React, { useState } from 'react';

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (sectionId) => {
        // Smooth scroll to the specified section
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

        // Close the navbar on mobile after clicking a link
        setIsOpen(false);
    };

    return (
        <nav className="p-4 bg-gray-900 shadow-xl">
            <div className='mx-auto md:justify-between md:flex max-w-7xl'>
                <div className="flex items-center justify-between mx-auto max-w-7xl">
                    <div className="flex text-2xl font-bold text-white md:order-2">DNK</div>
                    <div className="md:hidden">
                        {isOpen ? (
                            // Close icon when navbar is open
                            <button onClick={handleToggle} className="text-white focus:outline-none">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        ) : (
                            // Hamburger menu icon when navbar is closed
                            <button onClick={handleToggle} className="text-white focus:outline-none">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        )}
                    </div>

                </div>
                <div className={`md:flex md:items-center  ${isOpen ? 'block' : 'hidden'} md:w-auto w-full md:space-x-0 md:mt-0 mt-4 md:justify-end gap-4 md:order-1`}>
                    {/* Navbar links */}
                    <a href="#intro" onClick={() => handleLinkClick('intro')} className="block space-x-12 text-white transition duration-300 hover:text-green-500">Intro</a>
                    <a href="#mystory" onClick={() => handleLinkClick('mystory')} className="block space-x-6 text-white transition duration-300 hover:text-green-500">My Story</a>
                    <a href="#myskills" onClick={() => handleLinkClick('myskills')} className="block text-white transition duration-300 hover:text-green-500">Skills</a>
                    <a href="#projects" onClick={() => handleLinkClick('projects')} className="block text-white transition duration-300 hover:text-green-500">Projects</a>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
