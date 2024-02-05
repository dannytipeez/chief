import React from 'react';

function MyStory(props) {
    return (
        <div className="py-12 text-green-300 bg-gray-900 md:py-20">
            <div className="max-w-4xl px-6 mx-auto md:px-0 md:flex md:items-center">

                <div className="w-full md:pr-8">
                    <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">My Story</h1>
                    <p className="mb-4 font-mono text-lg md:text-xl">Growing up in the cold highlands of Kenya, I was always fascinated by computers and technology. I spent countless hours tinkering with hardware and software, eager to learn how they worked.</p>
                    <p className="mb-4 font-mono text-lg md:text-xl">Despite facing many challenges along the way, my passion for technology never wavered. I now use the power of mathematics and code to build a bright future for my generation</p>
                </div>
            </div>
        </div>
    );
}

export default MyStory;
