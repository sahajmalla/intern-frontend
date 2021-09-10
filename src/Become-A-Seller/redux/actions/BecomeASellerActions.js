import { ADD_SELLER } from "../../../root-redux/actions/type"

const BecomeASellerActions = (data) => {
    return {
        type: ADD_SELLER,
        data
    }
}

export default BecomeASellerActions
