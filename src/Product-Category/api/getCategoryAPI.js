import axiosConfig from "../../utils/axiosConfig"

export const getCategoryAPI = () =>{
    return axiosConfig.get('/listCategory')
}