import { SEND_EMAIL_TO_SELLER_FOR_CODE, SEND_EMAIL_TO_SELLER_FOR_CODE_FAILED, SEND_EMAIL_TO_SELLER_FOR_CODE_SUCCESS } from "../../../root-redux/actions/type"

const initialState = {
    loading: false,
    success: null,
    error: null
}
const SendEmailReducers = (state = initialState, action) => {
    switch (action.type) {
        case SEND_EMAIL_TO_SELLER_FOR_CODE: return {
            loading: true,
            success: null,
            error: null
        }

        case SEND_EMAIL_TO_SELLER_FOR_CODE_SUCCESS: return {
            loading: false,
            success: action.response,
            error: null
        }

        case SEND_EMAIL_TO_SELLER_FOR_CODE_FAILED: return {
            loading: false,
            success: null,
            error: action.error
        }

        default: return state
    }
}

export default SendEmailReducers
