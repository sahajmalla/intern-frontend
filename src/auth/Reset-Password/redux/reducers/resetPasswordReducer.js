import { RESET_PASSWORD_FAILED, RESET_PASSWORD_SUCCESS, TRY_RESET_PASSWORD } from "../../../../root-redux/actions/type"

const initialState = {
    loading: false,
    redirect: false,
    error: null,
    success: null
}
const resetPWState = (state = initialState, action) => {
    const response = action.response

    switch (action.type) {
        case TRY_RESET_PASSWORD: return { ...state, loading: true };
        case RESET_PASSWORD_SUCCESS: return { ...state, loading: false, redirect: true, success: response, error: null };
        case RESET_PASSWORD_FAILED: return { ...state, loading: false, redirect: false, success: null, error: action.error.data };
        default: return state;
    }
}

export default resetPWState;