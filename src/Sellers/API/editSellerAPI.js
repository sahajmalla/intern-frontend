import axiosConfig from "../../utils/axiosConfig"

const editSellerAPI = (id,data) => {
    return axiosConfig.patch(`/updateSeller/${id}`,data)
}

export default editSellerAPI
