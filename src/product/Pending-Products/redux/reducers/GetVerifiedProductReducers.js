import { GET_VERIFIED_PRODUCTS_SUCCESS, GET_VERIFIED_PRODUCTS_FAILED } from "../../../../root-redux/actions/type";

const initialState = {
    loading: false,
    error: null,
    VerifiedProds: []
}

const GetVerifiedProductReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_VERIFIED_PRODUCTS_SUCCESS: return { ...state, VerifiedProds: action.response.data, }
        case GET_VERIFIED_PRODUCTS_FAILED: return { ...state, error: action.error }

        default: return state
    }
}

export default GetVerifiedProductReducers
