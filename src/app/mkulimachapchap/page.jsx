import React from 'react'

function MkulimaChapChap() {
    return (
        <div className='min-h-screen py-12 text-green-300 bg-gray-900 md:py-20'>
            <div className='flex-col max-w-4xl px-6 mx-auto md:px-0 md:flex'>
                <h1 className='py-4 text-2xl text-white'>Project: Mkulima ChapChap</h1>

                <div className='p-4 font-mono text-white descr'>

                    This is a farm management system to help you organize your farm; with farm management tools, services, an intuitive UI dashboard and clear to read farm reports.

                </div>
                <h3 className='py-4 text-green-500'>Images/</h3>
                <div className='flex flex-col gap-4 py-4'>
                <img src="images/mkulimachapchap.png" alt="Mkulima ChapChap" className="object-cover w-full" />
                <img src="images/mkulimachapchap2.png" alt="mkulima chap chap reports" className="object-cover w-full" />
                </div>

            </div>
        </div >
    )
}

export default MkulimaChapChap

