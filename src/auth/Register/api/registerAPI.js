import axiosConfig from "../../../utils/axiosConfig";

const registerAPI = (data) => {
    return axiosConfig.post('/auth/register', data)
}

export default registerAPI;