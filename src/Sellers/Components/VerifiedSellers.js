import { useDispatch, useSelector } from "react-redux"
import { sendEmailAction } from "../Redux/Actions/sendEmailAction"
import { baseURL } from "../../utils/baseUrl"
import getVerifiedSellersActions from "../Redux/Actions/getVerifiedSellersActions"
import { useEffect } from "react"

const VerifiedSellers = () => {

    const verifiedSellers = useSelector(state => state.getVerifiedSellerReducers.sellers)
    const sendEmailSuccess = useSelector(state => state.SendEmailReducers.success)
    const sendEmailLoading = useSelector(state => state.SendEmailReducers.loading)
    const sendEmailError = useSelector(state => state.SendEmailReducers.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVerifiedSellersActions())

    }, [])
    return (
        <>
            <div className="mx-auto px-3 mx-auto w-full items-center justify-center">
                <div className="flex flex-col">
                    {sendEmailSuccess && (
                        <div className="mb-4">
                            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div className="flex items-center justify-center w-12 bg-green-500">
                                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                                    </svg>
                                </div>

                                <div className="px-4 py-2 -mx-3">
                                    <div className="mx-3">
                                        <span className="font-semibold text-green-500 dark:text-green-400">Success</span>
                                        <p className="text-sm text-gray-600 dark:text-gray-200">Email was sent successfully</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {sendEmailError && (
                        <div className="mb-4">

                            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div className="flex items-center justify-center w-12 bg-red-500">
                                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                                    </svg>
                                </div>

                                <div className="px-4 py-2 -mx-3">
                                    <div className="mx-3">
                                        <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                                        <p className="text-sm text-gray-600 dark:text-gray-200">Your email is already used!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                            Verified Sellers
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                            Send email to verified sellers for access token.
                        </p>
                    </div>
                    <ul className="flex flex-col">
                        {verifiedSellers && verifiedSellers.map(seller =>
                            <li
                                key={seller.seller_id}
                                className="border-gray-400 flex flex-row mb-2">
                                <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                        <a href="#" className="block relative">
                                            <img alt="profil" src={`${baseURL}/${seller.image}`} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </a>
                                    </div>
                                    <div className="flex-1 pl-1 md:mr-16">
                                        <div className="font-medium dark:text-white">
                                            {seller.first_name} {seller.last_name}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                                            {seller.email}
                                        </div>
                                    </div>

                                    {sendEmailLoading ?
                                        <div className=" flex justify-center items-center">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                        </div> :
                                        <button
                                            onClick={() => { dispatch(sendEmailAction("Fero Fix", "myitenablerinstagram@gmail.com")) }}
                                            className="w-24 text-right flex justify-end items-center space-x-2 text-gray-500 text-sm hover:text-gray-800">
                                            <span className="">Send Email</span>

                                            <svg width="12" fill="currentColor" height="12" className=" dark:hover:text-white dark:text-gray-200 " viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                </path>
                                            </svg>
                                        </button>}

                                </div>
                            </li>
                        )}


                    </ul>
                </div>
            </div>
        </>
    )
}

export default VerifiedSellers
