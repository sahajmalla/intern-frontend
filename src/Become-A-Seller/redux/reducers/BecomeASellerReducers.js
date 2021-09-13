import { ADD_SELLER, ADD_SELLER_FAILED, ADD_SELLER_SUCCESS } from "../../../root-redux/actions/type"

const initialState = {
    success: null,
    loading: false,
    error: null,
}
const BecomeASellerReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SELLER: return { ...state, success: null, error: null, loading: true }
        case ADD_SELLER_SUCCESS: return { ...state, success: action.response, error: null, loading: false }
        case ADD_SELLER_FAILED: return { ...state, succes: null, error: action.error, loading: false }

        default: return state
    }
}

export default BecomeASellerReducers
