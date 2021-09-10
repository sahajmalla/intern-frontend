import { useDispatch } from "react-redux"
import { sendEmailAction } from "../Redux/Actions/sendEmailAction"


const VerifiedSellers = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="mx-auto px-3 mx-auto w-full items-center justify-center">
                <div className="flex flex-col">
                    <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                            Verified Sellers
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                            Send email to verified sellers for access token.
                        </p>
                    </div>
                    <ul className="flex flex-col">
                        <li className="border-gray-400 flex flex-row mb-2">
                            <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                    <a href="#" className="block relative">
                                        <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                </div>
                                <div className="flex-1 pl-1 md:mr-16">
                                    <div className="font-medium dark:text-white">
                                        Fero Fix
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                                        myitenablerinstagram@gmail.com
                                    </div>
                                </div>

                                <button
                                    onClick={() => { dispatch(sendEmailAction("Fero Fix", "myitenablerinstagram@gmail.com")) }}
                                    className="w-24 text-right flex justify-end items-center space-x-2 text-gray-500 text-sm hover:text-gray-800">
                                    <span className="">Send Email</span>

                                    <svg width="12" fill="currentColor" height="12" className=" dark:hover:text-white dark:text-gray-200 " viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default VerifiedSellers
