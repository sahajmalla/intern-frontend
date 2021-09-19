import { GET_VERIFIED_SELLER, GET_VERIFIED_SELLER_FAILED, GET_VERIFIED_SELLER_SUCCESS } from "../../../root-redux/actions/type"

const initialState = {
    sellers: null,
    loading: false,
    error: null,
}
const getVerifiedSellerReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_VERIFIED_SELLER_SUCCESS: return {
            sellers: action.requestedSellers,
            loading: true,
            error: null,
        }

        case GET_VERIFIED_SELLER_FAILED: return {
            sellers: null,
            loading: false,
            error: action.error,
        }

        default: return state
    }
}

export default getVerifiedSellerReducers
