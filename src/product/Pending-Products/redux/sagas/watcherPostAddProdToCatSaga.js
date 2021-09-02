import { takeLatest } from "redux-saga/effects";
import { POST_ADD_PRODUCT_TO_CAT } from "../../../../root-redux/actions/type";
import workerPostAddProdToCatSaga from "./workerPostAddProdToCatSaga";

export default function* watcherPostAddProdToCat() {
    yield takeLatest(POST_ADD_PRODUCT_TO_CAT, workerPostAddProdToCatSaga)
}