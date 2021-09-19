import { GET_REQUESTED_SELLER, GET_REQUESTED_SELLER_FAILED, GET_REQUESTED_SELLER_SUCCESS } from "../../../root-redux/actions/type"

const initialState = {
    sellers: null,
    loading: false,
    error: null,
}

const getRequestedSellerReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUESTED_SELLER: return { ...state, loading: true, sellers: null, error: null }
        case GET_REQUESTED_SELLER_SUCCESS: return { ...state, loading: false, sellers: action.requestedSellers, error: null }
        case GET_REQUESTED_SELLER_FAILED: return { ...state, loading: false, sellers: null, error: action.error }
        default: return state
    }
}

export default getRequestedSellerReducers
