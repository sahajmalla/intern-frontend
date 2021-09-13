import { call, put } from "@redux-saga/core/effects";
import { ADD_SELLER_FAILED, ADD_SELLER_SUCCESS } from "../../../root-redux/actions/type";
import AddSellerAPI from "../../API/AddSellerAPI";

export default function* workerBecomeASeller(action) {
    try {
        const response = yield call(AddSellerAPI, action.data)
        yield put({ type: ADD_SELLER_SUCCESS, response })
    } catch (error) {
        // The request was made and the server responded with a status code
        if (error.response) {
            yield put({ type: ADD_SELLER_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: ADD_SELLER_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: ADD_SELLER_FAILED, error: error.message })
        }
    }
}