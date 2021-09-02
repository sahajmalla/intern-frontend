import { call, put } from "redux-saga/effects";
import { GET_VERIFIED_PRODUCTS_FAILED, GET_VERIFIED_PRODUCTS_SUCCESS } from "../../../../root-redux/actions/type";
import GetVerifiedProductsAPI from "../../api/GetVerifiedProductsAPI";

export default function* workerGetVerifiedProducts() {
    try {
        
        const response = yield call(GetVerifiedProductsAPI)
        console.log(response);
        yield put({type:GET_VERIFIED_PRODUCTS_SUCCESS, response})

    } catch (error) {
        // The request was made and the server responded with a status code
        if (error.response) {
            yield put({ type: GET_VERIFIED_PRODUCTS_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: GET_VERIFIED_PRODUCTS_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: GET_VERIFIED_PRODUCTS_FAILED, error: error.message })
        }
    }
}

