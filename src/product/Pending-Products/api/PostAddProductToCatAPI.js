import axiosConfig from "../../../utils/axiosConfig"

const PostAddProductToCatAPI = (data) => {
    return axiosConfig.post('/addProduct', data)
}

export default PostAddProductToCatAPI
