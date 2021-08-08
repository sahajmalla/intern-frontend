import axiosConfig from "../../../utils/axiosConfig";

const sendLoginCredentials = (data) => {
    return axiosConfig.post('/login', data)
}

export default sendLoginCredentials;
