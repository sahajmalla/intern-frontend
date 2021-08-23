import axiosConfig from "../../utils/axiosConfig"


export const editCategoryAPI = (data, id) => {

    console.log(data);
    return (axiosConfig.patch(`/updateCategory/${id}`, data))  

}
