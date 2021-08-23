
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAddForm } from '../redux/action/AddCategoryFormActions';
import AddCategoryForm from './AddCategoryForm';
import { getCategory } from '../redux/action/GetCategoryAction';
import { tryDeleteCategory } from '../redux/action/DeleteCategoryAction';
import { useHistory } from 'react-router-dom';
import EditCategoryForm from './EditCategoryForm';
import { showEditForm } from '../redux/action/EditCategoryFormActions';

const ProductCategory = () => {

    const dispatch = useDispatch()
    const isAddFormShown = useSelector(state => state.AddCategoryFormReducers.showForm)
    const categories = useSelector((state => state.categoryState.category))
    const reload = useSelector((state) => state.categoryState.reload)
    const history = useHistory()
    const isEditFormShown = useSelector((state) => state.EditCategoryFormReducers.showForm)

    useEffect(() => {
        dispatch(getCategory())
    }, []);

    return (

        <div>
            {reload && history.go(0)}

            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                        <h2 className="text-2xl leading-tight">
                            Category
                        </h2>
                    </div>

                    <div className="mt-4">
                        <div className="p-8">
                            <div className="shadow flex">
                                <input className="w-full rounded p-2" type="text" placeholder="Search..." />
                                <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <button
                        onClick={() => dispatch(showAddForm())}
                        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Add Category
                    </button>
                </div>

                {/* show add form */}
                {isAddFormShown ? (
                    <>
                        <AddCategoryForm />
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

                {/* show edit form */}
                {isEditFormShown && (
                    <>
                        <EditCategoryForm />
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                )}



                {/* CRUD table */}
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Image
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Name
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Description
                                    </th>

                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories && categories.map((category, index) => (

                                    <tr key={category.id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <img className="object-cover w-28 h-28 mr-2" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />

                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">


                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {category.category_name}
                                            </p>


                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {category.category_description}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button onClick={() => { dispatch(showEditForm(category.id, index)) }} className="text-indigo-600 hover:text-indigo-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                <span>Edit</span>
                                            </button>

                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button onClick={() => { dispatch(tryDeleteCategory(category.id)) }} className="text-indigo-600 hover:text-indigo-900">
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
            </div>
        </div>

    )
}

export default ProductCategory
