import { POST_ADD_PRODUCT_TO_CAT, POST_ADD_PRODUCT_TO_CAT_SUCCESS } from "../../../../root-redux/actions/type"

const initialState = {
    success: null,
    error: null,
    loading: false,
}

const PostAddProdToCatState = (state = initialState, action) => {
    switch (action.type) {
        case POST_ADD_PRODUCT_TO_CAT: return { ...state, success: null, error: null, loading: true }
        case POST_ADD_PRODUCT_TO_CAT_SUCCESS: return { ...state, success: action.response, loading: false }
        default: return state
    }
}

export default PostAddProdToCatState
