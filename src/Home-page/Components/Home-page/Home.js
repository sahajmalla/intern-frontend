import { Link } from 'react-router-dom'
import { isLogin } from '../../../utils/helpers'
import Footer from '../Footer/Footer'
import NavbarMenu from '../Navigation/Components/NavbarMenu/NavbarMenu'
import MobileSearch from '../Search/Components/MobileSearch'
import Search from '../Search/Components/Search'
import UserDropdown from '../User-dropdown/UserDropdown'
import { useSelector, useDispatch } from 'react-redux'
import { hideSearchBar } from '../Search/Redux/Actions/ShowHideSearchBar'
import HomeCategories from './Categories/Components/HomeCategories'

const Home = () => {
    const ShowSearchBar = useSelector(state => state.ShowHideSearchBarState.showSearchBar)
    const dispatch = useDispatch()

    return (
        <div>

            <div className="relative bg-white h-screen">
                <div className="max-w-7xl mx-auto h-full">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
                        <div className="relative bg-white z-40">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                                <div className=" flex justify-between items-center  border-gray-100 py-6 md:space-x-10">

                                    {!(ShowSearchBar) && (
                                        <div className="flex justify-start items-center space-x-6">
                                            <Link className="flex items-center" to="/">
                                                <span className="text-indigo-600 ml-2 text-2xl font-bold">
                                                    Instagram Project
                                                </span>
                                            </Link>


                                            <div className="flex">
                                                <MobileSearch />
                                                <NavbarMenu />
                                            </div>

                                        </div>
                                    )}

                                    {ShowSearchBar && (
                                        <div className="flex space-x-4 block md:hidden">
                                            <div>
                                                <Search />
                                            </div>
                                            <button onClick={() => { dispatch(hideSearchBar()) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                        </div>
                                    )}


                                    <div className="hidden md:block w-3/5 mx-auto">
                                        <Search />
                                    </div>
                                    <div className="hidden md:flex space-x-6 text-gray-800 ">

                                        <>
                                            {isLogin() ? <div>
                                                <UserDropdown />
                                            </div>
                                                :
                                                <>
                                                    <div className="flex flex-col">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                        </svg>
                                                        <span>Login</span>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                                        </svg>
                                                        <span>Register</span>
                                                    </div>
                                                </>
                                            }


                                        </>



                                    </div>

                                </div>
                            </div>
                        </div>

                        <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-6 lg:px-8 xl:mt-8 h-full">

                            {/* ad banner */}
                            <div className=" w-full h-24 shadow-lg">
                                ad banner
                            </div>

                            {/* categories */}
                            <div className="w-full h-auto mt-6 shadow-lg text-gray-700">
                                <span className="font-semibold text-xl p-6">Our Categories</span>
                                <HomeCategories/>
                            </div>

                        </main>

                        <footer>
                            <Footer />
                        </footer>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
