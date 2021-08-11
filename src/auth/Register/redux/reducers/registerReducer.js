import { REGISTER_FAILED, REGISTER_SUCCESS, TRY_REGISTER } from "../../../../root-redux/actions/type";

const initialState = {
    loading: false,
    error: null,
    redirect: false,
}

const registerState = (state = initialState, action) => {
    const response = action.response;

    switch (action.type) {
        case TRY_REGISTER: return { ...state, loading: true };
        case REGISTER_SUCCESS: return { ...state, loading: false, redirect: true, response };
        case REGISTER_FAILED: return { ...state, loading: false, redirect: false, error: action.error.data };
        default: return state;
    }
}

export default registerState;