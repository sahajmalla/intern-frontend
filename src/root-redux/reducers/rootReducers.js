import { combineReducers } from "redux";
import loginState from "../../auth/Login/redux/reducers/loginReducer"
import registerState from "../../auth/Register/redux/reducers/registerReducer";

const reducers = combineReducers({
    loginState,
    registerState,
})

export default reducers