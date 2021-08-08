
import handlePostLogin from "./workerLoginSaga"
import { TRY_LOGIN } from "../../../../root-redux/actions/type"
import { takeLatest } from "redux-saga/effects";

export default function* watcherLoginSaga(){
        yield takeLatest(TRY_LOGIN, handlePostLogin); 
}

