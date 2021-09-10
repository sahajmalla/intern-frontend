import { Link } from "react-router-dom"
import { useState } from "react"


const SellersDropdown = () => {
    const [ShowDropDown, setShowDropDown] = useState(false)

    return (
        <>
            <div>
                <div className="relative w-full text-gray-800 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent" >

                    <span className="text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>

                    <button
                        onClick={() => setShowDropDown(!ShowDropDown)}
                        className="mx-2 w-full text-sm text-left font-normal ">
                        <span className="">Sellers</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-4 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>

                    </button>
                </div>

                {ShowDropDown && (

                    <>
                        <Link className="w-full text-gray-800 flex items-center pl-12 p-2 my-2 transition-colors duration-200 justify-start
                            hover:text-gray-800 border-l-4 border-transparent"
                            to='/dashboard/requested-sellers'
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>

                            <span className="mx-2 text-sm font-normal flex" >
                                Requested Sellers
                            </span>

                        </Link>

                        <Link className="w-full text-gray-800 flex items-center pl-12 p-2 my-2 transition-colors duration-200 justify-start 
                            hover:text-gray-800 border-l-4 border-transparent"
                            to='/dashboard/verified-sellers'
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>



                            <span className="mx-2 text-sm font-normal flex" >
                                Verified Sellers
                            </span>

                        </Link>
                    </>
                )}

            </div>
        </>
    )
}

export default SellersDropdown
