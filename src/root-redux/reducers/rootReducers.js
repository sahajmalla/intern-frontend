import { combineReducers } from "redux";
import loginState from "../../auth/Login/redux/reducers/loginReducer"
import registerState from "../../auth/Register/redux/reducers/registerReducer";
import forgotPwState from "../../auth/Forgot-Password/redux/reducers/forgotPasswordReducer";
import resetPWState from "../../auth/Reset-Password/redux/reducers/resetPasswordReducer"
import AddCategoryFormReducers from "../../Product-Category/redux/reducers/AddCategoryFormReducers";
import { EditCategoryFormReducers } from "../../Product-Category/redux/reducers/EditCategoryFormReducers";
import { categoryState } from "../../Product-Category/redux/reducers/CategoryReducers";
import ShowHideSearchBarState from "../../Home-page/Components/Search/Redux/Reducers/ShowHIdeSearchBarReducer";
import instagramState from "../../product/Pending-Products/redux/reducers/instagramState";
import AddProductToCategoryReducers from "../../product/Pending-Products/redux/reducers/AddProductToCategoryReducers";
import PostAddProdToCatState from "../../product/Pending-Products/redux/reducers/PostAddProdToCatState";
import GetVerifiedProductReducers from "../../product/Pending-Products/redux/reducers/GetVerifiedProductReducers";
import ShowHideVerifiedProdEditFormReducers from "../../product/Pending-Products/redux/reducers/ShowHideVerifiedProdEditFormReducers";
import BecomeASellerReducers from "../../Become-A-Seller/redux/reducers/BecomeASellerReducers";
import getRequestedSellerReducers from "../../Sellers/Redux/Reducers/getRequestedSellerReducers";
import editSellerReducers from "../../Sellers/Redux/Reducers/editSellerReducers";
import getVerifiedSellerReducers from "../../Sellers/Redux/Reducers/getVerifiedSellerReducers";
import SendEmailReducers from "../../Sellers/Redux/Reducers/SendEmailReducers";
import searchProductReducers from "../../Home-page/Components/Search/Redux/Reducers/searchProductReducers";

const reducers = combineReducers({
    loginState,
    registerState,
    forgotPwState,
    resetPWState,
    AddCategoryFormReducers,
    categoryState,
    EditCategoryFormReducers,
    ShowHideSearchBarState,
    instagramState,
    AddProductToCategoryReducers,
    PostAddProdToCatState,
    GetVerifiedProductReducers,
    ShowHideVerifiedProdEditFormReducers,
    BecomeASellerReducers,
    getRequestedSellerReducers,
    editSellerReducers,
    getVerifiedSellerReducers,
    SendEmailReducers,
    searchProductReducers,
})

export default reducers