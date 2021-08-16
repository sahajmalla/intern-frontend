import { CHECK_FORGOT_PW_EMAIL } from "../../../../root-redux/actions/type";
import { takeLatest } from "redux-saga/effects";
import workerForgotSaga from "./workerForgotPWSaga";


export default function* watcherForgotPWSaga() {
    yield takeLatest(CHECK_FORGOT_PW_EMAIL, workerForgotSaga);
}