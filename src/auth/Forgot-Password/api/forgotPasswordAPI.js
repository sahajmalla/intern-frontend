import axiosConfig from "../../../utils/axiosConfig"

const forgotPasswordAPI = (data) => {
    return axiosConfig.post('/auth/sendPasswordResetLink', data)
}

export default forgotPasswordAPI;