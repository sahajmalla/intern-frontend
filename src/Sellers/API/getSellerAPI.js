import axiosConfig from "../../utils/axiosConfig"

const getSellerAPI = () => {
    return axiosConfig.get('/listSeller')
}

export default getSellerAPI
