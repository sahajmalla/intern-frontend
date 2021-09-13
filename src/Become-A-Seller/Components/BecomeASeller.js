import { useForm } from "react-hook-form"
import Footer from "../../Home-page/Components/Footer/Footer"
import Header from "../../Home-page/Components/Header/Header"
import { emailRegex } from "../../utils/emailRegex"
import { useDispatch } from "react-redux"
import BecomeASellerActions from "../redux/actions/BecomeASellerActions"
import { useSelector } from "react-redux"

const BecomeASeller = () => {

    const isSuccess = useSelector(state => state.BecomeASellerReducers.success)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {

        const formData = new FormData();
        formData.append("address", data.address);
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("phone_no", data.phone_no);
        formData.append("shop_type", data.shop_type);
        formData.append("email", data.email);
        formData.append("image", data.image[0]);

        dispatch(BecomeASellerActions(formData))
    }

    return (
        <>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto h-full">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">

                        <Header />

                        <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-6 lg:px-8 xl:mt-8 h-full">

                            <div className="space-y-8 lg:flex lg:space-x-10">
                                <div className="lg:pt-32">
                                    <h1 className="title-font font-medium text-3xl text-gray-900">Become A Seller at our Platform</h1>
                                    <p className="leading-relaxed mt-4">With the registration of being a seller, you get unprecedented advantages from your competitors</p>

                                </div>

                                <div>

                                    {isSuccess && (
                                        <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-5">

                                            <div class="px-4 py-2 -mx-3">
                                                <div class="mx-3">
                                                    <span class="font-semibold text-green-500 dark:text-green-400">Success</span>
                                                    <p class="text-sm text-gray-600 dark:text-gray-200">Your details has been forwared to the admin, please wait unit we verify you. You will soon be getting an email to verify our app in your instagram.</p>
                                                </div>
                                            </div>

                                        </div>
                                    )}


                                    <section className="bg-gray-100 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Become a Seller</h2>
                                        <p className="text-xs text-gray-500 mt-3">Literally the best platform for your Instagram Store against your competitors.</p>

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="first_name">First Name</label>
                                                    <input
                                                        {...register("first_name", { required: "You must specify your first name." })}
                                                        id="first_name"
                                                        type="text"
                                                        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                                        rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 
                                                        dark:focus:border-blue-500 focus:outline-none focus:ring
                                                        ${errors.first_name && `border-red-500`}`}
                                                    />
                                                    {errors.first_name && <p className="text-sm text-red-500">{errors.first_name.message}</p>}
                                                </div>

                                                <div>
                                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="last_name">Last Name</label>
                                                    <input
                                                        {...register("last_name", { required: "You must specify your last name." })}
                                                        id="last_name"
                                                        type="text"
                                                        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                                        rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 
                                                        dark:focus:border-blue-500 focus:outline-none focus:ring
                                                        ${errors.last_name && `border-red-500`}`}
                                                    />
                                                    {errors.last_name && <p className="text-sm text-red-500">{errors.last_name.message}</p>}
                                                </div>

                                                <div>
                                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="email">Email Address</label>
                                                    <input
                                                        {...register("email", { required: true, pattern: emailRegex })}
                                                        id="email"
                                                        type="email"
                                                        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                                        rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 
                                                        dark:focus:border-blue-500 focus:outline-none focus:ring
                                                        ${errors.email && `border-red-500`}`}
                                                    />
                                                    {errors.email && errors.email.type == "required" && <p className="text-sm text-red-500">You must enter the email</p>}
                                                    {errors.email && errors.email.type == "pattern" && <p className="text-sm text-red-500">Field must be an email</p>}
                                                </div>

                                                <div>
                                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="address">Address</label>
                                                    <input
                                                        {...register("address", { required: "You must specify your address." })}
                                                        id="address"
                                                        type="text"
                                                        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                                        rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 
                                                        dark:focus:border-blue-500 focus:outline-none focus:ring
                                                        ${errors.address && `border-red-500`}`}
                                                    />
                                                    {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
                                                </div>

                                                <div>
                                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="phone_no">Phone Number</label>
                                                    <input
                                                        {...register("phone_no", { required: "You must specify your phone number." })}
                                                        id="phone_no"
                                                        type="text"
                                                        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                                        rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 
                                                        dark:focus:border-blue-500 focus:outline-none focus:ring
                                                        ${errors.phone_no && `border-red-500`}`}
                                                    />
                                                    {errors.phone_no && <p className="text-sm text-red-500">{errors.phone_no.message}</p>}
                                                </div>

                                                <div>
                                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="shop_type">Shop type</label>
                                                    <input
                                                        {...register("shop_type", { required: "You must specify the type of your shop." })}
                                                        id="shop_type"
                                                        type="text"
                                                        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                                        rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 
                                                        dark:focus:border-blue-500 focus:outline-none focus:ring
                                                        ${errors.shop_type && `border-red-500`}`}
                                                    />
                                                    {errors.shop_type && <p className="text-sm text-red-500">{errors.shop_type.message}</p>}
                                                </div>

                                                <div>
                                                    <label
                                                        className={`flex flex-col items-center block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                                        rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 
                                                        dark:focus:border-blue-500 focus:outline-none focus:ring
                                                        ${errors.image && `border-red-500`}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="mt-2 text-sm leading-normal">Upload your Image</span>
                                                        <input
                                                            {...register("image", { required: "You must upload your picture." })}
                                                            type='file' className="hidden" />

                                                    </label>
                                                    {errors.image && <p className="text-sm text-red-500">{errors.image.message}</p>}
                                                </div>

                                            </div>

                                            <div className="flex justify-end mt-6">
                                                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 rounded-lg">
                                                    Submit
                                                </button>
                                            </div>

                                        </form>
                                    </section>
                                </div>
                            </div>
                        </main>

                        <Footer />
                    </div>
                </div>
            </div>




        </>
    )
}

export default BecomeASeller
