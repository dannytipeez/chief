import React from 'react';


function Hero(props) {
    return (
        <div class="bg-gray-800 text-white py-12 md:py-20">
            <div class="max-w-4xl px-6 md:px-0 mx-auto md:flex md:items-center">

                <div class="md:w-1/2 md:pr-8">
                    <h1 class="text-2xl md:text-4xl font-bold mb-4">Hello friend,</h1>
                    <p class="text-lg md:text-xl mb-4 font-mono">My name is <span class="font-mono text-red-500">Daniel Kariuki</span>. I am a software engineer based in Nairobi, Kenya. </p>
                    <p class="text-lg md:text-xl mb-4">This is my Dev journey </p>

                </div>

                <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <div class="relative lg:w-90 lg:h-90 md:w-72 md:h-72 sm:w-48 sm:h-48 rounded-full overflow-hidden transition duration-300 hover:grayscale">
                        <img class="w-full h-full object-cover" src="me.jpg" alt="Daniel Kariuki" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;