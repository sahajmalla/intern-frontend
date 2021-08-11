import { useForm } from 'react-hook-form'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import tryLogin from "../redux/action/loginAction"
import '../../styles/Auth.css'
import AuthButton from '../../../shared-components/auth-form-buttons/AuthButton'
import { emailRegex } from '../../../utils/emailRegex'
import ShowErrorAlert from '../../../shared-components/Alert/ErrorAlert'

function Login() {
    
    const redirect = useSelector((state) => state.loginState.redirect)
    const loginErrorMessage = useSelector((state) => state.loginState.error)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(tryLogin(data))
    }

    if (redirect) return <Redirect to={'/'} />

    return (
        <div>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

                <div className="max-w-lg mx-auto rounded-lg shadow-2xl">
                    {loginErrorMessage && ShowErrorAlert(loginErrorMessage.error)}
                </div>

                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">

                    <div>
                        <h3 className="font-bold text-2xl">Welcome to Company</h3>
                        <p className="text-gray-600 pt-2">Sign in to your account.</p>
                    </div>

                    <div className="mt-10">
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

                            <div className="mb-6 pt-3">

                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                    htmlFor="email">
                                    Email
                                </label>

                                <input
                                    {...register("email", { required: true, pattern: emailRegex })}
                                    type="text" id="email"
                                    className={`border border-gray-300 rounded w-full text-gray-700 focus:outline-none 
                                    ${errors.email ? `border-red-500` : `border-gray-300 focus:border-purple-600`}
                                    transition duration-500 px-3 pb-3 h-12`}
                                />

                                {errors.email && errors.email.type == "required" && <p className="text-sm text-red-500">You must enter the email</p>}
                                {errors.email && errors.email.type == "pattern" && <p className="text-sm text-red-500">Field must be an email</p>}

                            </div>

                            <div className="mb-6 pt-3">

                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                    htmlFor="password">Password
                                </label>

                                <input
                                    {...register("password", { required: "You must specify a password", minLength: { value: 8, message: "Password must have at least 8 characters" } })}
                                    type="password" id="password"
                                    className={`border rounded w-full text-gray-700 focus:outline-none 
                                    ${errors.password ? `border-red-500` : `border-gray-300 focus:border-purple-600`} 
                                    transition duration-500 px-3 pb-3 h-12`}
                                />

                                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}

                            </div>

                            <div className="flex justify-end">
                                <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                            </div>

                            <AuthButton />

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

export default connect()(Login);
