import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarProductDropdown = () => {

    const [isDroppedDown, setDroppedDown] = useState(false)

    return (
        <div>
            <button onClick={() => setDroppedDown(!isDroppedDown)} className="flex items-center">

                <div className="text-blue-600 hover:text-blue-400 text-xs uppercase py-3 font-bold block flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span>Product</span>
                </div>

                <div className="pl-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

            </button>

            {isDroppedDown && (
                <>
                    <Link className="text-blue-600 hover:text-blue-400 text-xs uppercase py-3 font-bold block flex items-center flex items-center"
                        to="/dashboard/add-product-form">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Add Product</span>
                    </Link>

                    <button>
                        <span>Pending Products</span>
                    </button>
                </>

            )}

        </div>
    )
}

export default SidebarProductDropdown
