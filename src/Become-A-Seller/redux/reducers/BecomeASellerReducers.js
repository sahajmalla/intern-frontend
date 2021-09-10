import { ADD_SELLER_SUCCESS } from "../../../root-redux/actions/type"

const initialState = {
    success: null,
    loading: false,
    error: null,
}
const BecomeASellerReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SELLER_SUCCESS: return { ...state, success: action.response, error: null }
        
        default: return state
    }
}

export default BecomeASellerReducers
