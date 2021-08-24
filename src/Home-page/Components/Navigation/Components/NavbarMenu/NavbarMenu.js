import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCategory } from '../../../../../Product-Category/redux/action/GetCategoryAction'
import { baseURL } from '../../../../../utils/baseUrl'
import { isLogin } from '../../../../../utils/helpers'

const NavbarMenu = () => {
    const [ShowCategories, setShowCategories] = useState(false)
    const [ShowMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categoryState.category)

    useEffect(() => {
        dispatch(getCategory())
    }, [])
    return (
        <div className="flex md:hidden">
            <div className="relative inline-block text-left">
                <div>
                    <button onClick={() => { setShowMenu(!ShowMenu) }} type="button" className="inline-flex justify-center w-full shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {ShowMenu && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            <div className="border-b border-gray-200">
                                {isLogin() && (
                                    <div>
                                        <span className="text-gray-700 block px-4 py-2 border-b border-gray-200 text-sm">Log Out</span>
                                    </div>
                                )}

                                <button onClick={() => { setShowCategories(!ShowCategories) }} className="text-gray-700 block px-4 py-2 text-normal flex space-x-14">
                                    <span className="relative">Categories</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 right-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`${ShowCategories && `h-72`} overflow-y-auto`}>
                                    {(ShowCategories && categories) && categories.map(category => (

                                        <div key={category.id} className="flex mt-2 items-center">
                                            <img className="object-cover w-16 h-16 mr-2 rounded-lg px-4 py-2 " src={`${baseURL}/${category.category_image}`} alt="category image" />
                                            <span className="text-gray-700 block px-4 py-2 text-xs">{category.category_name}</span>
                                        </div>



                                    ))}
                                </div>
                            </div>
                            {!isLogin() && (
                                <div>
                                    <div className="flex space-x-6 text-gray-800 text-sm px-4 py-2  ">

                                        <div className="flex ">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                            </svg>
                                            <span>Login</span>
                                        </div>

                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                            </svg>
                                            <span>Register</span>
                                        </div>

                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default NavbarMenu
