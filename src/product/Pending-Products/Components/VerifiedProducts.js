import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getVerifiedProductsAction } from "../redux/actions/GetVerifiedProductActions"

const VerifiedProducts = () => {

    const VerifiedProds = useSelector(state => state.GetVerifiedProductReducers.VerifiedProds)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVerifiedProductsAction())
    }, [])

    return (
        <>
            <div className="block -mx-4 px-4 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3 bg-white
                                        border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Image
                                </th>
                                <th scope="col" className="px-5 py-3 bg-white
                                        border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Product Name
                                </th>
                                <th scope="col" className="px-5 py-3 bg-white  
                                        border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Category
                                </th>

                                <th scope="col"
                                    className="px-5 py-3 bg-white  
                                        border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Description
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  
                                        border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Edit
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  
                                        border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {VerifiedProds && VerifiedProds.map((prod, index) => (
                                <tr
                                    key={prod.id}
                                >
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center ">
                                            <img className="object-contain w-full" src='https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg' alt="category image" />

                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">


                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {prod?.product?.product_name}
                                            {/* {console.log(prod.product)} */}

                                        </p>


                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {prod.category_name}

                                        </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {/* {prod.product.caption} */}
                                        </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button
                                            // onClick={() => { dispatch(showEditForm(category.id, index)) }}
                                            className="text-indigo-600 hover:text-indigo-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            <span>Edit</span>
                                        </button>

                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button
                                            // onClick={() => { dispatch(tryDeleteCategory(category.id)) }}
                                            className="text-indigo-600 hover:text-indigo-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <span>Delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}



                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default VerifiedProducts
