import axiosConfig from "../../../utils/axiosConfig"

const resetPasswordAPI=(data)=>{
    return axiosConfig.post('/auth/resetPassword',data)
}
export default resetPasswordAPI