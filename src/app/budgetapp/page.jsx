import React from 'react'

export default function BudgetApp() {
    return (
        <div className='min-h-screen py-12 text-green-300 bg-gray-900 md:py-20'>
            <div className='flex-col max-w-4xl px-6 mx-auto md:px-0 md:flex'>
                <h1 className='py-4 text-2xl text-white'>Project: Budgeting App</h1>

                <div className='p-4 font-mono text-white descr'>
                    This is a budgeting app created using react js. The 'database' used is the localstorage, so every budget and expense is saved in your browser's localStorage. You can create a budget, assign expenses to use in the budget and it automatically creates records and provides visual graphs to see how you spend your money.

                </div>
                <h3 className='py-4 text-green-500'>Images/</h3>
                <div className='flex flex-col gap-4 py-4'>

                    <img src="images/budget.png" alt="Budget app login" className="object-cover w-full" />
                    <img src="images/budget2.png" alt="Budget app home" className="object-cover w-full" />
                    <img src="images/budget3.png" alt="Budget app budget chart" className="object-cover w-full" />
                </div>
            </div>
        </div >
    )
}
