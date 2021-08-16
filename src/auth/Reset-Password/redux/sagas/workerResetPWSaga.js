import { call, put } from "redux-saga/effects";
import { RESET_PASSWORD_FAILED, RESET_PASSWORD_SUCCESS } from "../../../../root-redux/actions/type";
import resetPasswordAPI from "../../api/resetPasswordAPI";

export default function* workerResetPWSaga(action) {
    try {
        const response = yield call(resetPasswordAPI, action.data)
        yield put({ type: RESET_PASSWORD_SUCCESS, response })
        
    } catch (error) {
        if (error.response) {
            yield put({ type: RESET_PASSWORD_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: RESET_PASSWORD_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: RESET_PASSWORD_FAILED, error: error.message })
        }
    }
}