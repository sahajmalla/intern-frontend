import axiosConfig from "../../utils/axiosConfig"

export const deleteCategoryAPI = (id) =>{
    return axiosConfig.delete( `/deleteCategory/${id}`)
}