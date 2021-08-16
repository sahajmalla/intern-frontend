import { useForm } from 'react-hook-form'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useLocation } from 'react-router-dom'
import '../../styles/Auth.css'
import AuthButton from '../../../shared-components/auth-form-buttons/AuthButton'
import { emailRegex } from '../../../utils/emailRegex'
import ShowErrorAlert from '../../../shared-components/Alert/ErrorAlert'
import ShowSuccessAlert from '../../../shared-components/Alert/SuccessAlert'
import resetPasswordAction from '../redux/action/resetPasswordAction'



function ResetPassword() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const resetPWErrorMessage = useSelector(state => state.resetPWState.error)
    const resetPWSuccessMessage = useSelector(state => state.resetPWState.success)

    const dispatch = useDispatch();

    let query = new URLSearchParams(useLocation().search)
    let token = query.get("token")

    const onSubmit = data => {

        data.resetToken = token

        dispatch(resetPasswordAction(data))
    }



    return (
        <div>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

                <div className="max-w-lg mx-auto rounded-lg shadow-2xl">
                    {resetPWSuccessMessage && ShowSuccessAlert(resetPWSuccessMessage.data.data)}

                </div>

                <div className="max-w-lg mx-auto rounded-lg shadow-2xl">
                    {resetPWErrorMessage && ShowErrorAlert(resetPWErrorMessage.error)}
                </div>

                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">

                    <div>
                        <h3 className="font-bold text-2xl">Reset your password.</h3>
                    </div>

                    <div className="mt-5">
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

                            <div className="flex justify-end">
                                <Link to="/login" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Try Logging in?</Link>
                            </div>

                            <AuthButton />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(ResetPassword);
