import { EDIT_SELLER } from "../../../root-redux/actions/type"

const editSellersAction = (id, data) => {
    return{
        type: EDIT_SELLER,
        id,
        data,
    }
}

export default editSellersAction
