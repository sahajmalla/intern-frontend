import { takeEvery, takeLatest } from "redux-saga/effects";
import { GET_ACCESS_TOKEN, GET_CODE_FOR_ACESS_TOKEN, GET_SPECIFIC_USER_POST, GET_USER_POSTS_ID_CAPTION, } from "../../../../root-redux/actions/type";
import GetCodeFromEmailWorker from "./GetCodeFromEmailWorker";
import GetSpecificUserPostWorker from "./GetSpecificUserPostWorker";
import GetUserPostIDCaptionsWorker from "./GetUserPostIDCaptionsWorker";
import workerAccessToken from "./workerAccessToken";

export default function* watcherPendingProductSaga() {
    yield takeLatest(GET_CODE_FOR_ACESS_TOKEN, GetCodeFromEmailWorker)
    yield takeLatest(GET_ACCESS_TOKEN, workerAccessToken);
    yield takeLatest(GET_USER_POSTS_ID_CAPTION, GetUserPostIDCaptionsWorker);
    yield takeEvery(GET_SPECIFIC_USER_POST, GetSpecificUserPostWorker);
}