import axiosConfig from "../../utils/axiosConfig"

const AddSellerAPI = (data) => {
    return axiosConfig.post('/addSeller', data)
}

export default AddSellerAPI
