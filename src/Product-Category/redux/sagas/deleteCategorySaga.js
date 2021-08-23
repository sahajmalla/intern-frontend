import { call, put } from "redux-saga/effects";
import { DELETE_CATEGORY_FAILED, DELETE_CATEGORY_SUCCESS } from "../../../root-redux/actions/type";
import { deleteCategoryAPI } from "../../api/deleteCategoryAPI";

export function* deleteCategorySaga(action){
    try {
        const response = yield call(deleteCategoryAPI, action.id)
        yield put({type: DELETE_CATEGORY_SUCCESS, response})
    } catch (error) {
        // The request was made and the server responded with a status code
        if (error.response) {
            yield put({ type: DELETE_CATEGORY_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: DELETE_CATEGORY_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: DELETE_CATEGORY_FAILED, error: error.message })
        }
    }
}