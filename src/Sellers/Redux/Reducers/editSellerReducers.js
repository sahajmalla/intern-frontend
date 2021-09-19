import { EDIT_SELLER, EDIT_SELLER_FAILED, EDIT_SELLER_SUCCESS } from "../../../root-redux/actions/type"

const initialState = {
    loading: false,
    success: null,
    error: null,
}

const editSellerReducers = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_SELLER: return { ...state, loading: true, success: null, error: null }
        case EDIT_SELLER_SUCCESS: return { ...state, loading: false, success: action.response, error: null }
        case EDIT_SELLER_FAILED: return { ...state, loading: false, success: null, error: action.error }
        default: return state
    }
}

export default editSellerReducers
