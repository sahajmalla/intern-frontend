import { SEARCH_PRODUCT, SEARCH_PRODUCT_FAILED, SEARCH_PRODUCT_SUCCESS } from "../../../../../root-redux/actions/type"

const initialState = {
    loading: false,
    error: null,
    success: null
}

const searchProductReducers = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT: return { loading: true, error: null, success: null }
        case SEARCH_PRODUCT_SUCCESS: return { loading: false, error: null, success: action.response.data }
        case SEARCH_PRODUCT_FAILED: return { loading: false, error: action.error, success: null }
        default: return state
    }
}

export default searchProductReducers
