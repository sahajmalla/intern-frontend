import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'
const Login = () => {
    return (
        <div>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <div>
                        <h3 className="font-bold text-2xl">Welcome to Company</h3>
                        <p className="text-gray-600 pt-2">Sign in to your account.</p>
                    </div>

                    <div className="mt-10">
                        <form className="flex flex-col" method="POST" action="#">
                            <div className="mb-6 pt-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                                <input type="text" id="email" className="border border-gray-300 rounded w-full text-gray-700 focus:outline-none focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                            </div>
                            <div className="mb-6 pt-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                                <input type="password" id="password" className="border border-gray-300 rounded w-full text-gray-700 focus:outline-none  focus:border-purple-600 transition duration-500 px-3 pb-3 h-12" />
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                            </div>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                                type="submit">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-white">Don't have an account? <Link to="/register" className="font-bold hover:underline">Sign up</Link>.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
