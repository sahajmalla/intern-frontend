import { combineReducers } from "redux";
import loginState from "../../auth/Login/redux/reducers/loginReducer"
import registerState from "../../auth/Register/redux/reducers/registerReducer";
import forgotPwState from "../../auth/Forgot-Password/redux/reducers/forgotPasswordReducer";
import resetPWState from "../../auth/Reset-Password/redux/reducers/resetPasswordReducer"
import AddCategoryFormReducers from "../../Product-Category/redux/reducers/AddCategoryFormReducers";
import { EditCategoryFormReducers } from "../../Product-Category/redux/reducers/EditCategoryFormReducers";
import { categoryState } from "../../Product-Category/redux/reducers/CategoryReducers";
import ShowHideSearchBarState from "../../Home-page/Components/Search/Redux/Reducers/ShowHIdeSearchBarReducer";

const reducers = combineReducers({
    loginState,
    registerState,
    forgotPwState,
    resetPWState,
    AddCategoryFormReducers,
    categoryState,
    EditCategoryFormReducers,
    ShowHideSearchBarState
})

export default reducers