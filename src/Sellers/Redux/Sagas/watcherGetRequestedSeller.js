import { takeLatest } from "@redux-saga/core/effects";
import { GET_REQUESTED_SELLER } from "../../../root-redux/actions/type";
import workerGetRequestedSeller from "./workerGetRequestedSeller";

function* watcherGetRequestedSeller(){
    yield takeLatest(GET_REQUESTED_SELLER, workerGetRequestedSeller)
}

export default watcherGetRequestedSeller
