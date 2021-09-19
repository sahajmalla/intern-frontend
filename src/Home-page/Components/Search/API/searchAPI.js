import axiosConfig from "../../../../utils/axiosConfig"

const searchAPI = (item) => {
    return axiosConfig.get(`/searchProduct/${item}`)
}

export default searchAPI
