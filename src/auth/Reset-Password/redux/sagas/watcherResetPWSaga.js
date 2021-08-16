import { takeLatest } from "redux-saga/effects";
import { TRY_RESET_PASSWORD } from "../../../../root-redux/actions/type";
import workerResetPWSaga from "./workerResetPWSaga";

export default function* watcherResetPWSaga() {
    yield takeLatest(TRY_RESET_PASSWORD, workerResetPWSaga)
}