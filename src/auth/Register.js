import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
                <div className="bg-white max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <div>
                        <h3 className="font-bold text-2xl">Welcome to Company</h3>
                        <p className="text-gray-600 pt-2">Register your account.</p>
                    </div>

                    <div className="mt-10">
                        <form className="flex flex-col" method="POST" action="#">
                            <div className="md:grid grid-cols-2 gap-4">
                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>

                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>

                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>

                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                                </div>

                                <div className="mb-6 pt-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password_confirmation">Confirm Password</label>
                                    <input type="password" id="password_confirmation" name="password_confirmation" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
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
