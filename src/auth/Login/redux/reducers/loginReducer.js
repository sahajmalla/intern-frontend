import { LOGIN_SUCCESS, LOGIN_FAILED, TRY_LOGIN } from "../../../../root-redux/actions/type"

const initialState = {
    loading: false,
    error: null,
    redirect: false,
}

const loginState = (state = initialState, action) => {
    const response = action.response;

    switch (action.type) {
        case TRY_LOGIN: return { ...state, loading: true };
        case LOGIN_SUCCESS: return { ...state, loading: false ,redirect: true, response };
        case LOGIN_FAILED: return { ...state, loading: false ,redirect: false, error: action.error.data };
        default: return state;
    }
}

export default loginState;