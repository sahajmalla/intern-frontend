import React from 'react'

const PendingProducts = () => {
    return (
        <div>
            <h1 className="p-5 text-3xl font-bold">Pending Items</h1>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Mountain" />
                    <div className="px-6 py-4 flex justify-between">
                        <div className="font-bold text-xl mb-2">Product name</div>
                        <button onClick className="bg-green-500 hover:bg-green-700 rounded-full h-12 w-12 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>

                </div>             

            </div>



        </div>
    )
}

export default PendingProducts
