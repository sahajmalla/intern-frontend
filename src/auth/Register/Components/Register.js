import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import '../../styles/Auth.css'

const Register = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    
    return (
        <div>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
                <div className="bg-white max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <div>
                        <h3 className="font-bold text-2xl">Welcome to Company</h3>
                        <p className="text-gray-600 pt-2">Register your account.</p>
                    </div>

                    <div className="mt-10">
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="md:grid grid-cols-2 gap-4">
                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="first_name">First Name</label>
                                    <input {...register("first_name")} type="text" id="first_name" name="first_name" className="border border-gray-300 rounded w-full text-gray-700 focus:outline-none focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>

                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="last_name">Last Name</label>
                                    <input {...register("last_name")} type="text" id="last_name" name="last_name" className="border border-gray-300 rounded w-full text-gray-700 focus:outline-none focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>

                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                                    <input {...register("email")} type="email" id="email" name="email" className="border border-gray-300 rounded w-full text-gray-700 focus:outline-none focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>

                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                                    <input {...register("password")} type="password" id="password" name="password" className="border border-gray-300 rounded w-full text-gray-700 focus:outline-none focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>

                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password_confirmation">Confirm Password</label>
                                    <input {...register("password_confirmation")} type="password" id="password_confirmation" name="password_confirmation" className="border border-gray-300 rounded w-full text-gray-700 focus:outline-none focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-2">Forgot your password?</a>
                            </div>

                            <div className="flex items-center mb-6 pt-3 space-x-2">
                                <input type="checkbox" id="terms" name="terms" />
                                <label htmlFor="terms">I accept the terms and conditions.</label>
                            </div>

                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                                type="submit">
                                Sign In
                            </button>

                        </form>
                    </div>
                </div>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-white">Already have an account? <Link to="/login" className="font-bold hover:underline">Log in</Link>.</p>
                </div>
            </div>
        </div>
    )
}

export default Register
