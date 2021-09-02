import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarProductDropdown = () => {

    const [ShowProductSubMenu, setShowProductSubMenu] = useState(false)

    return (

        <div>
            <div className="w-full text-gray-800 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent" >

                <span className="text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                </span>

                <button onClick={() => setShowProductSubMenu(!ShowProductSubMenu)} className="mx-2 text-sm font-normal flex gap-x-32 ">
                    <span className="">Products</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>

                </button>
            </div>

            {ShowProductSubMenu && (
                <>
                    <Link className="w-full text-gray-800 flex items-center pl-12 p-2 my-2 transition-colors duration-200 justify-start
                        hover:text-gray-800 border-l-4 border-transparent"
                        to="/dashboard/add-product-form">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>

                        <span className="mx-2 text-sm font-normal flex" >
                            Add Product
                        </span>

                    </Link>

                    <Link className="w-full text-gray-800 flex items-center pl-12 p-2 my-2 transition-colors duration-200 justify-start 
                        hover:text-gray-800 border-l-4 border-transparent"
                        to="/dashboard/pending-products">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>

                        <span className="mx-2 text-sm font-normal flex" >
                            Pending Products
                        </span>

                    </Link>

                    <Link className="w-full text-gray-800 flex items-center pl-12 p-2 my-2 transition-colors duration-200 justify-start 
                        hover:text-gray-800 border-l-4 border-transparent"
                        to="/dashboard/verified-products">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>

                        <span className="mx-2 text-sm font-normal flex" >
                            Verified Products
                        </span>

                    </Link>
                </>
            )}



        </div>
    )
}

export default SidebarProductDropdown
