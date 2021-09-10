import { takeLatest } from "@redux-saga/core/effects";
import { ADD_SELLER } from "../../../root-redux/actions/type";
import workerBecomeASeller from "./workerBecomeASeller";

export default function* watcherBecomeASeller(){
    yield takeLatest(ADD_SELLER, workerBecomeASeller)
}