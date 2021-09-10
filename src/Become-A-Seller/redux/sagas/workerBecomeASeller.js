import { call, put } from "@redux-saga/core/effects";
import { ADD_SELLER_SUCCESS } from "../../../root-redux/actions/type";
import AddSellerAPI from "../../API/AddSellerAPI";

export default function* workerBecomeASeller(action) {
    try {
        const response = yield call(AddSellerAPI, action.data)
        yield put({ type: ADD_SELLER_SUCCESS, response })
    } catch (error) {
        console.log(error.response);
    }
}