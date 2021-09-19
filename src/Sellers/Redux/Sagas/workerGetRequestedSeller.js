import getSellerAPI from "../../API/getSellerAPI"
import { call, put } from "@redux-saga/core/effects";
import { GET_REQUESTED_SELLER_FAILED, GET_REQUESTED_SELLER_SUCCESS } from "../../../root-redux/actions/type";

function* workerGetRequestedSeller() {
    try {
        const response = yield call(getSellerAPI)
        let requestedSellers = response.data.filter(el => {
            return el.verified === null || el.verified ===false

        })

        yield put({ type: GET_REQUESTED_SELLER_SUCCESS, requestedSellers })

    } catch (error) {
        // The request was made and the server responded with a status code
        if (error.response) {
            yield put({ type: GET_REQUESTED_SELLER_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: GET_REQUESTED_SELLER_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: GET_REQUESTED_SELLER_FAILED, error: error.message })
        }
    }
}

export default workerGetRequestedSeller
