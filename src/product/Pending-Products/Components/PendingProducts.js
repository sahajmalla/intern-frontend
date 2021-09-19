import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getItemWithExpiry from '../../../utils/getLocalStorageItemsWithExpiry'
import { showAddProductToCategoryForm } from '../redux/actions/AddProductToCategoryFormActions'
import { GetUserPostIdCaptionsAction } from '../redux/actions/PendingProductActions'
import AddProductToCategoryForm from './AddProductToCategoryForm'
import { useHistory } from 'react-router-dom';


const PendingProducts = () => {
    const userPosts = useSelector(state => state.instagramState.postsResponse)
    const isAddProdToCategoryFormShown = useSelector(state => state.AddProductToCategoryReducers.show)
    const isSuccess = useSelector((state) => state.PostAddProdToCatState.success)
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {

        if (getItemWithExpiry('Insta Access token')) {
            const accessToken = getItemWithExpiry('Insta Access token')
            dispatch(GetUserPostIdCaptionsAction(accessToken));
        }

    }, [])




    if (!(getItemWithExpiry('Insta Access token'))) return (
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <div className="w-full font-mono flex flex-col items-center relative z-10">
                <h1 className="font-extrabold text-3xl text-center text-gray-500 leading-tight mt-4">
                    Send Email for access to the pending posts.
                </h1>
            </div>
        </div>

    )

    if ((userPosts) && (userPosts.length === 0)) return (
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <div className="w-full font-mono flex flex-col items-center relative z-10">
                <h1 className="font-extrabold text-3xl text-center text-gray-500 leading-tight mt-4">
                    All posts has been verified.
                </h1>
            </div>
        </div>
    )


    return (
        <>
         {(isSuccess) && history.go(0)}
            {isAddProdToCategoryFormShown && (
                <>
                    <AddProductToCategoryForm />
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}



            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Product Image
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Add Product to Category
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {userPosts && userPosts.map((posts, index) =>
                                        <tr key={posts.data.id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="block relative">
                                                            <img alt="user insta post image" src={posts.data.media_url} className="mx-auto object-cover  h-36 w-36 " />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <button
                                                    onClick={() => { dispatch(showAddProductToCategoryForm(index)) }}
                                                    className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-green-500 dark:focus:bg-gray-700">
                                                    Add Category
                                                </button>
                                            </td>

                                        </tr>
                                    )}


                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PendingProducts
