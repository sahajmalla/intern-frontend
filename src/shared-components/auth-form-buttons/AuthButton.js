import React from 'react'
import { useSelector } from 'react-redux'


const AuthButton = () => {

    const loginLoading = useSelector((state) => state.loginState.loading)
    const registerLoading = useSelector((state) => state.registerState.loading)
    const forgotPWLoading = useSelector((state) => state.forgotPwState.loading)
    const resetPWLoading = useSelector((state) => state.resetPWState.loading)

    return (
        <button
            className={
                `flex justify-center 
            ${(loginLoading || registerLoading || forgotPWLoading || resetPWLoading) ? `bg-purple-400` : `bg-purple-600 hover:bg-purple-700`} 
            text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            type="submit"`}
            disabled={loginLoading || registerLoading}>

            {(loginLoading || registerLoading || forgotPWLoading || resetPWLoading) &&
                <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                    </path>
                </svg>
            }
            {(loginLoading || registerLoading || forgotPWLoading || resetPWLoading) ? `Please Wait` : `Submit`}
        </button>
    )
}

export default AuthButton
