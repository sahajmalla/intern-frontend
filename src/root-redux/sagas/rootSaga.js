import { all } from "redux-saga/effects";
import watcherForgotPWSaga from "../../auth/Forgot-Password/redux/sagas/watcherForgotPWSaga";
import watcherLoginSaga from "../../auth/Login/redux/sagas/watcherLoginSaga";
import watcherRegisterSaga from "../../auth/Register/redux/sagas/watcherRegisterSaga";
import watcherResetPWSaga from "../../auth/Reset-Password/redux/sagas/watcherResetPWSaga";
import watcherBecomeASeller from "../../Become-A-Seller/redux/sagas/watcherBecomeASeller";
import { watcherCategorySaga } from "../../Product-Category/redux/sagas/watcherCategorySaga";
import watcherGetVerifiedProducts from "../../product/Pending-Products/redux/sagas/watcherGetVerifiedProducts";
import watcherPendingProductSaga from "../../product/Pending-Products/redux/sagas/watcherPendingProductSaga";
import watcherPostAddProdToCat from "../../product/Pending-Products/redux/sagas/watcherPostAddProdToCatSaga";
import watcherSendEmail from "../../Sellers/Redux/Sagas/watcherSendEmail";

export default function* rootSaga(){
    yield all([
        watcherLoginSaga(),
        watcherRegisterSaga(),
        watcherForgotPWSaga(),
        watcherResetPWSaga(),
        watcherCategorySaga(),
        watcherPendingProductSaga(),
        watcherPostAddProdToCat(),
        watcherGetVerifiedProducts(),
        watcherSendEmail(),
        watcherBecomeASeller(),        
    ])
}