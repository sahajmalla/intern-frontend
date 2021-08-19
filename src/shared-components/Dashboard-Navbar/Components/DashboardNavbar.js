import React from "react";

import UserDropdown from "../../Dashboard-User-Dropdown/Components/DashboardUserDropdown";

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <a
                        className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        Dashboard
                    </a>
                    {/* Notification */}
                    <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                    </div>
                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                        <UserDropdown />
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}