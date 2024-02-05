"use client";


import React from 'react';

function Projects(props) {
    return (
        <div className="min-h-screen py-12 text-green-300 bg-gray-900 md:py-20">
            <div className="flex-col h-64 max-w-4xl px-6 mx-auto md:px-0 md:flex">
                <h2 className="items-start mb-8 text-2xl font-bold text-white md:text-4xl">Projects</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="bg-gray-800 rounded-lg shadow-md ">
                        <img src="images/mkulimachapchap.png" alt="Mkulima ChapChap" className="object-cover w-full h-48" />
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-semibold">Mkulima ChapChap</h3>
                            <p className="mb-4 text-white">This is a farm management system to help you organize your farm; with farm management tools, services, an intuitive UI dashboard and clear to read farm reports.</p>
                            <a href="#" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-md ">
                        <img src="images/budget2.png" alt="Home budget" className="object-cover w-full h-48" />
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-semibold">Home Budget</h3>
                            <p className="mb-4 text-white">This is a budgeting app created using react js. The 'database' used is the localstorage, so every budget and expense is saved in your browser's localStorage. You can create a budget, assign expenses to use in the budget and it automatically creates records and provides visual graphs to see how you spend your money.</p>
                            <a href="#" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
