import axiosConfig from "../../utils/axiosConfig"

export const addCategoryAPI = (data) => {
    
    return axiosConfig.post('/addCategory', data)
}