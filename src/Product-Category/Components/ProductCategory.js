
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAddForm } from '../redux/action/AddCategoryFormActions';
import AddCategoryForm from './AddCategoryForm';
import { getCategory } from '../redux/action/GetCategoryAction';
import { tryDeleteCategory } from '../redux/action/DeleteCategoryAction';
import { useHistory } from 'react-router-dom';
import EditCategoryForm from './EditCategoryForm';
import { showEditForm } from '../redux/action/EditCategoryFormActions';
import { baseURL } from '../../utils/baseUrl';

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
            {(categories && reload) && history.go(0)}

            <div className="container mx-auto px-4 sm:px-8 w-full">
                <div className="sticky top-0 bg-white rounded-lg shadow-lg">


                    <div className="px-6 py-4">
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <h2 className="text-2xl leading-tight">
                                Category
                            </h2>

                            <button
                                onClick={() => dispatch(showAddForm())}
                                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Add Category
                            </button>

                        </div>

                        <div className="mt-4">
                            <div className="py-4 px-8">
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
                <div className="hidden md:block -mx-4 px-4 py-4 overflow-x-auto">
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
                                        Name
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  
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
                                {categories && categories.map((category, index) => (

                                    <tr key={category.id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <img className="object-cover w-28 h-28 mr-2" src={`${baseURL}/${category.category_image}`} alt="category image" />

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

                {/* mobile view */}

                <div className="block md:hidden mt-6">
                    {categories && categories.map((category, index) => (
                        <div key={category.id} className="flex max-w-md bg-white shadow-md rounded-lg overflow-hidden mb-4">
                            <div className="w-1/3 bg-cover bg-landscape">
                                <img className="object-cover w-full  h-full rounded-lg mr-2" src={`https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`} alt="category image" />
                            </div>

                            <div className="w-2/3 p-4">
                                <h1 className="text-gray-900 font-bold text-lg">
                                    {category.category_name}
                                </h1>
                                <p className="mt-2 text-gray-600 text-sm">
                                    {category.category_description}
                                </p>



                                <div className="flex item-center space-x-2 mt-3">
                                    <button onClick={() => { dispatch(showEditForm(category.id, index)) }} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        <span>Edit</span>
                                    </button>

                                    <button onClick={() => { dispatch(tryDeleteCategory(category.id)) }} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        </div>

    )
}

export default ProductCategory
