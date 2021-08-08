import { combineReducers } from "redux";
import loginState from "../../auth/Login/redux/reducers/loginReducer"

const reducers = combineReducers({
    loginState,
})

export default reducers