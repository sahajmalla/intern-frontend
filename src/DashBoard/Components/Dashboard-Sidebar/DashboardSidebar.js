import { Link } from "react-router-dom"
import SidebarProductDropdown from "./SidebarProductDropdown"

const DashboardSidebar = () => {
    return (
        <div className="h-screen hidden lg:block shadow-lg relative w-80">

            <div className="bg-white h-full dark:bg-gray-700">

                <div className="flex items-center justify-start pt-6 ml-8">
                    <p className="font-bold dark:text-white text-xl">
                        Instagram Project
                    </p>
                </div>

                <nav className="mt-6">

                    <div>
                        <Link className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
                            to="/dashboard/product-category">
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                            </span>
                            <span className="mx-2 text-sm font-normal">
                                Category
                            </span>
                        </Link>

                        <>
                            <SidebarProductDropdown />
                        </>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default DashboardSidebar
