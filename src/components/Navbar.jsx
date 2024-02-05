import React from 'react';

function Navbar(props) {
    return (
        <nav class="bg-gray-900 p-4 shadow-xl">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="text-white text-2xl font-bold">CHIEF</div>
                <div class="flex space-x-6">
                    <a href="#intro" class="text-white hover:text-green-500 transition duration-300">Intro</a>
                    <a href="#mystory" class="text-white hover:text-green-500 transition duration-300">My Story</a>
                    <a href="#skills" class="text-white hover:text-green-500 transition duration-300">Skills</a>
                    <a href="#projects" class="text-white hover:text-green-500 transition duration-300">Projects</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;






