import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import '../../styles/Auth.css'
import { useDispatch,useSelector } from "react-redux";
import registerAction from "../redux/action/registerAction"
import AuthButton from "../../../shared-components/auth-form-buttons/AuthButton";
import { emailRegex } from "../../../utils/emailRegex";
import ShowErrorAlert from "../../../shared-components/Alert/ErrorAlert";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const registerErrorMessage = useSelector((state) => state.registerState.error)

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(registerAction(data));
    };

    return (
        <div>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
                <div className="max-w-lg mx-auto rounded-lg shadow-2xl">
                    {registerErrorMessage && ShowErrorAlert(registerErrorMessage.error)}
                </div>
                <div className="bg-white max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <div>
                        <h3 className="font-bold text-2xl">Welcome to Company</h3>
                        <p className="text-gray-600 pt-2">Register your account.</p>
                    </div>

                    <div className="mt-10">
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div>

                                <div className="mb-6 pt-3">

                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="name">Name</label>

                                    <input
                                        {...register("name", { required: "Name is required." })}
                                        type="text" id="name" name="name"
                                        className={`border border-gray-300 rounded w-full text-gray-700 focus:outline-none 
                                        ${errors.name ? `border-red-500` : `border-gray-300 focus:border-purple-600`}
                                        transition duration-500 px-3 pb-3 h-12 `}
                                    />


                                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                                </div>

                                <div className="mb-6 pt-3">

                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>

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
                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>

                                    <input
                                        {...register("password", { required: "You must specify a password", minLength: { value: 8, message: "Password must have at least 8 characters" } })}
                                        type="password" id="password" name="password"
                                        className={`border border-gray-300 rounded w-full text-gray-700 focus:outline-none 
                                        ${errors.password ? `border-red-500` : `border-gray-300 focus:border-purple-600`} 
                                        transition duration-500 px-3 pb-3 h-12`}
                                    />

                                    {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}

                                </div>

                                <div className="mb-6 pt-3">

                                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password_confirmation">Confirm Password</label>

                                    <input
                                        {...register("password_confirmation", { required: true, validate: value => value === watch("password") })}
                                        type="password" id="password_confirmation" name="password_confirmation"
                                        className={`border border-gray-300 rounded w-full text-gray-700 focus:outline-none 
                                        ${errors.password_confirmation ? `border-red-500` : `border-gray-300 focus:border-purple-600`} 
                                        transition duration-500 px-3 pb-3 h-12`}
                                    />

                                    {errors.password_confirmation && errors.password_confirmation.type == "required" && <p className="text-sm text-red-500">You must enter the confirmed password</p>}
                                    {errors.password_confirmation && errors.password_confirmation.type == "validate" && <p className="text-sm text-red-500">The password do not match</p>}

                                </div>
                            </div>

                            <AuthButton />

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
