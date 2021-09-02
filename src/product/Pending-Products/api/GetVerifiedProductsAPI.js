import axiosConfig from "../../../utils/axiosConfig"

const GetVerifiedProductsAPI = () => {
    return axiosConfig.get('/listProduct')
}

export default GetVerifiedProductsAPI
