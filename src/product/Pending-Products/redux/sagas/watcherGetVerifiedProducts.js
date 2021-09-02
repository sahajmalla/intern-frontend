import { takeLatest } from "redux-saga/effects";
import { GET_VERIFIED_PRODUCTS } from "../../../../root-redux/actions/type";
import workerGetVerifiedProducts from "./workerGetVerifiedProducts";

export default function* watcherGetVerifiedProducts() {
    yield takeLatest(GET_VERIFIED_PRODUCTS, workerGetVerifiedProducts)
}