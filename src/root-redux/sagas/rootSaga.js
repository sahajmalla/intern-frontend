import { all } from "redux-saga/effects";
import watcherLoginSaga from "../../auth/Login/redux/sagas/watcherLoginSaga";

export default function* rootSaga(){
    yield all([
        watcherLoginSaga()
    ])
}