import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { hideAddForm } from '../redux/action/AddCategoryFormActions'
import { tryAddCategory } from '../redux/action/AddCategoryFormActions'
import ShowErrorAlert from '../../shared-components/Alert/ErrorAlert'

const AddCategoryForm = () => {

    const dispatch = useDispatch()

    const loading = useSelector((state) => state.categoryState.addLoading)
    const addCategoryErrorMessage = useSelector((state) => state.categoryState.addCategoryError)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log(data);

        const formData = new FormData();
        formData.append("category_image", data.category_image[0]);
        formData.append("category_name", data.category_name);
        formData.append("category_description", data.category_description);
        console.log(formData);

        // let finalData = {
        //     "category_name": data.category_name,
        //     "category_description": data.category_description,
        //     "category_image": formData
        // }

        // console.log(finalData);

        dispatch(tryAddCategory(formData))
    }

    return (
        <div>

            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-screen my-6 mx-auto max-w-6xl">
                    {/*content*/}

                    <div className="max-w-lg mx-auto rounded-lg shadow-2xl">
                        {addCategoryErrorMessage && ShowErrorAlert(addCategoryErrorMessage)}
                    </div>

                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}

                        <div className="flex justify-between items-center pt-4 px-2">
                            <p className="text-2xl font-bold">Add Category</p>
                            <button onClick={() => dispatch(hideAddForm())} className="modal-close cursor-pointer z-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/*body*/}
                        <div className="relative pt-2 px-6 flex-auto">

                            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div >
                                        <div className="mb-4">
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="category_name">Category Name</label>
                                            <input
                                                {...register("category_name", { required: "You must specify category name." })}
                                                id="category_name" type="text"
                                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white 
                                                border border-gray-300 
                                                ${errors.category_name && `border-red-500`}
                                                rounded-md
                                                focus:outline-none`} />

                                            {errors.category_name && <p className="text-sm text-red-500">{errors.category_name.message}</p>}

                                        </div>

                                        <div className="mb-4">
                                            <label
                                                className={`w-64 flex flex-col items-center px-2 py-4 bg-white rounded-md tracking-wide uppercase border border-blue 
                                                ${errors.category_image && `border-red-500`}
                                                cursor-pointer hover:text-blue-500 text-black ease-linear transition-all duration-150`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="mt-2 text-sm leading-normal">Upload Category Image</span>
                                                <input
                                                    {...register("category_image", { required: "You must upload an image." })}
                                                    type='file' className="hidden" />

                                            </label>

                                            {errors.category_image && <p className="text-sm text-red-500">{errors.category_image.message}</p>}
                                        </div>

                                        <div className="mb-4">
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="category_description">Category Description</label>
                                            <textarea
                                                {...register("category_description", { required: "You must enter the category description." })}
                                                id="category_description"
                                                type="text"
                                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                            ${errors.category_description && `border-red-500`}
                                            rounded-md focus:outline-none `} 
                                            rows="6" cols="50"/>

                                            {errors.category_description && <p className="text-sm text-red-500">{errors.category_description.message}</p>}
                                        </div>

                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <button
                                            className={`px-6 py-2 leading-5 text-white transition-colors 
                                            duration-200 transform 
                                            ${loading ? `bg-green-200` : `bg-green-700 hover:bg-green-600`}
                                             rounded-md 
                                            focus:outline-none focus:bg-green-600`}
                                            disabled={loading}>
                                            <div className="flex">
                                                {loading &&
                                                    <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                        </path>
                                                    </svg>
                                                }
                                                <span>
                                                    {loading ? `Please Wait` : `Submit`}
                                                </span>
                                            </div>


                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategoryForm
