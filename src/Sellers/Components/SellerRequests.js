import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { baseURL } from "../../utils/baseUrl"
import editSellersAction from "../Redux/Actions/editSellersAction"
import getRequestedSellersActions from "../Redux/Actions/getRequestedSellersActions"
import { useState } from "react"
import { useHistory } from "react-router"

const SellerRequests = () => {
    const dispatch = useDispatch()
    const requestedSellers = useSelector(state => state.getRequestedSellerReducers.sellers)
    const isSuccess = useSelector(state => state.editSellerReducers.success)

    useEffect(() => {
        dispatch(getRequestedSellersActions())

    }, [])

    let history = useHistory()

    return (
        <>
            {isSuccess && history.go(0)}
            <div className="mx-auto px-3 mx-auto w-full items-center justify-center">
                <div className="flex flex-col">
                    <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                            Sellers requested to be in our site.
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                            Details and informations about seller. Verify the seller for further actions to the site.
                        </p>
                    </div>
                    <ul className="flex flex-col">
                        {requestedSellers && requestedSellers.map(seller =>
                            <li
                                key={seller.seller_id}
                                className="border-gray-400 flex flex-row mb-2"
                            >
                                <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                        <div className="block relative">
                                            <img alt="profil" src={`${baseURL}/${seller.image}`} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                    </div>
                                    <div className="flex-1 pl-1 md:mr-16">
                                        <div className="font-medium dark:text-white">
                                            {seller.first_name} {seller.last_name}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                                            {seller.email}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                                            {seller.address}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                                            {seller.shop_type}
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => dispatch(editSellersAction(seller.seller_id, { verified: true }))}
                                            className="rounded-full bg-green-500 p-2 hover:bg-green-300"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SellerRequests
