import { call, put } from "@redux-saga/core/effects"
import { SEARCH_PRODUCT_FAILED, SEARCH_PRODUCT_SUCCESS } from "../../../../../root-redux/actions/type"
import searchAPI from "../../API/searchAPI"

function* workerSearchSaga(action) {
    try {

        const response = yield call(searchAPI, action.item)
        yield put({ type: SEARCH_PRODUCT_SUCCESS, response })

    } catch (error) {
        if (error.response) {
            yield put({ type: SEARCH_PRODUCT_FAILED, error: error.response })

        }
        else if (error.request) {
            yield put({ type: SEARCH_PRODUCT_FAILED, error: error.request })

        }
        else {
            yield put({ type: SEARCH_PRODUCT_FAILED, error: error.message })
        }
    }
}

export default workerSearchSaga
