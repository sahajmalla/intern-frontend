import { call, put } from "redux-saga/effects";
import { EDIT_CATEGORY_FAILED, EDIT_CATEGORY_SUCCESS } from "../../../root-redux/actions/type";
import { editCategoryAPI } from "../../api/editCategoryAPI";

export function* editCategorySaga(action) {
    try {
        const response = yield call(editCategoryAPI, action.data, action.id)
        
        yield put({ type: EDIT_CATEGORY_SUCCESS, response })

    } catch (error) {

        if (error.response) {
            yield put({ type: EDIT_CATEGORY_FAILED, error: error.response })

        }
        else if (error.request) {
            yield put({ type: EDIT_CATEGORY_FAILED, error: error.request })

        }
        else {
            yield put({ type: EDIT_CATEGORY_FAILED, error: error.message })
        }
    }
}