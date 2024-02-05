import React from 'react';

function MySkills(props) {
    return (
        <div className="py-12 text-green-300 bg-gray-900 md:py-20">
            <div className="max-w-4xl px-6 mx-auto md:px-0 md:flex md:items-center">

                <div className="w-full md:pr-8">
                    <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">Skills</h1>
                    <div className='flex lg:gap-72 lg:flex-row md:flex-col sm:flex-col md:gap-4 sm:gap-4'>
                        <p className="grid mb-4 font-mono text-lg md:text-xl"> <span>Python</span> <span>Javascript</span> <span>Adobe Photoshop </span> <span>Machine Learning (Pytorch)</span> <span>UI/UX</span></p>
                        <p className="grid mb-4 font-mono text-lg md:text-xl"> <span>TailwindCSS</span> <span>REACT/NEXT JS</span> <span>Flutter </span> <span>Figma</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MySkills;