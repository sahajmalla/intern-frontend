import axiosConfig from "../../../utils/axiosConfig";

const sendLoginCredentials = (data) => {
    return axiosConfig.post('/auth/login', data)
}

export default sendLoginCredentials;
