import { call, put } from "@redux-saga/core/effects";
import { useHistory } from "react-router";
import { EDIT_SELLER_FAILED, EDIT_SELLER_SUCCESS } from "../../../root-redux/actions/type";
import editSellerAPI from "../../API/editSellerAPI";
export function* workerEditSellers(action) {
    
    try {
        const response = yield call(editSellerAPI, action.id, action.data)
        yield put({ type: EDIT_SELLER_SUCCESS, response })

    } catch (error) {
        // The request was made and the server responded with a status code
        if (error.response) {
            yield put({ type: EDIT_SELLER_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: EDIT_SELLER_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: EDIT_SELLER_FAILED, error: error.message })
        }
    }
}