import { all } from "redux-saga/effects";
import watcherForgotPWSaga from "../../auth/Forgot-Password/redux/sagas/watcherForgotPWSaga";
import watcherLoginSaga from "../../auth/Login/redux/sagas/watcherLoginSaga";
import watcherRegisterSaga from "../../auth/Register/redux/sagas/watcherRegisterSaga";
import watcherResetPWSaga from "../../auth/Reset-Password/redux/sagas/watcherResetPWSaga";

export default function* rootSaga(){
    yield all([
        watcherLoginSaga(),
        watcherRegisterSaga(),
        watcherForgotPWSaga(),
        watcherResetPWSaga(),
    ])
}