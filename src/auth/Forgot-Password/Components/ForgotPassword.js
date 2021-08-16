import { useForm } from 'react-hook-form'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import '../../styles/Auth.css'
import AuthButton from '../../../shared-components/auth-form-buttons/AuthButton'
import { emailRegex } from '../../../utils/emailRegex'
import ShowErrorAlert from '../../../shared-components/Alert/ErrorAlert'
import ShowSuccessAlert from '../../../shared-components/Alert/SuccessAlert'
import forgotPasswordAction from '../redux/action/forgotPasswordAction'

function ForgotPassword() {

    const forgotPWErorMessage = useSelector(state => state.forgotPwState.error)
    const forgotPWSuccessMessage = useSelector(state => state.forgotPwState.success)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(forgotPasswordAction(data))
    }

    return (
        <div>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

                <div className="max-w-lg mx-auto rounded-lg shadow-2xl">
                    {forgotPWSuccessMessage && ShowSuccessAlert(forgotPWSuccessMessage.data)}
                </div>

                <div className="max-w-lg mx-auto rounded-lg shadow-2xl">
                    {forgotPWErorMessage && ShowErrorAlert(forgotPWErorMessage.error)}
                </div>

                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">

                    <div>
                        <h3 className="font-bold text-2xl">Forgot your password?</h3>
                        <p className="text-gray-600 pt-2">Enter your registered email.</p>
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

export default connect()(ForgotPassword);
