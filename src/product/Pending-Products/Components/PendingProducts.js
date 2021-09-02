import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showAddProductToCategoryForm } from '../redux/actions/AddProductToCategoryFormActions'
import { GetCodeForInstaAccesToken } from '../redux/actions/PendingProductActions'
import AddProductToCategoryForm from './AddProductToCategoryForm'


const PendingProducts = () => {
    const userPosts = useSelector(state => state.instagramState.postsResponse)
    const isAddProdToCategoryFormShown = useSelector(state => state.AddProductToCategoryReducers.show)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCodeForInstaAccesToken())
    }, [])


    return (
        <>
            {isAddProdToCategoryFormShown && (
                <>
                    <AddProductToCategoryForm />
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}


            <div className="flex items-center py-4">
                <div>
                    <h1 className="p-5 text-3xl font-bold">Pending Items</h1>
                </div>

            </div>

            {/* <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {userPosts && userPosts.map((posts, index) =>

                    <div key={posts.data.id} className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={posts.data.media_url} alt="post picture" />
                        <div className="px-6 py-4 flex justify-end">

                            <button
                                onClick={() => { dispatch(showAddProductToCategoryForm(index)) }}
                                className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-green-500 dark:focus:bg-gray-700">
                                Add Category
                            </button>
                        </div>
                    </div>
                )}
            </div> */}


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
