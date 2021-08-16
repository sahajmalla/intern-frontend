import { CHECK_FORGOT_PW_EMAIL, FORGOT_PW_EMAIL_EXISTS, NO_FORGOT_PW_EMAIL } from "../../../../root-redux/actions/type";

const initialState = {
    loading: false,
    redirect: false,
    error: null,
    success: null,
}

const forgotPwState = (state = initialState, action) => {
    const response = action.response;

    switch (action.type) {
        case CHECK_FORGOT_PW_EMAIL: return { ...state, loading: true };
        case FORGOT_PW_EMAIL_EXISTS: return { ...state, loading: false, redirect: true, error: null, success: response.data };
        case NO_FORGOT_PW_EMAIL: return { ...state, loading: false, redirect: false, error: action.error.data, success: null };
        default: return state;
    }
}

export default forgotPwState;