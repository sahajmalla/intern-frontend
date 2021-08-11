import { TRY_REGISTER } from "../../../../root-redux/actions/type"
import { takeLatest } from "redux-saga/effects";
import workerRegisterSaga from "./workerRegisterSaga";

function* watcherRegisterSaga() {
    yield takeLatest(TRY_REGISTER, workerRegisterSaga);
}

export default watcherRegisterSaga