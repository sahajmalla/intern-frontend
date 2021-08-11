import { all } from "redux-saga/effects";
import watcherLoginSaga from "../../auth/Login/redux/sagas/watcherLoginSaga";
import watcherRegisterSaga from "../../auth/Register/redux/sagas/watcherRegisterSaga";

export default function* rootSaga(){
    yield all([
        watcherLoginSaga(),
        watcherRegisterSaga(),
    ])
}