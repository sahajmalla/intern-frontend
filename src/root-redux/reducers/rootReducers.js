import { combineReducers } from "redux";
import loginState from "../../auth/Login/redux/reducers/loginReducer"
import registerState from "../../auth/Register/redux/reducers/registerReducer";
import forgotPwState from "../../auth/Forgot-Password/redux/reducers/forgotPasswordReducer";
import resetPWState from "../../auth/Reset-Password/redux/reducers/resetPasswordReducer"

const reducers = combineReducers({
    loginState,
    registerState,
    forgotPwState,
    resetPWState
})

export default reducers