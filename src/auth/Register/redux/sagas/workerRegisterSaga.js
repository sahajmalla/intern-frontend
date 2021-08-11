import { call, put } from "redux-saga/effects";
import { REGISTER_FAILED, REGISTER_SUCCESS } from "../../../../root-redux/actions/type";
import registerAPI from "../../api/registerAPI";

function* workerRegisterSaga(action) {
    try {
        const response = yield call(registerAPI, action.data)

        yield put({ type: REGISTER_SUCCESS, response })
    } catch (error) {
        if (error.response) {
            yield put({ type: REGISTER_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: REGISTER_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: REGISTER_FAILED, error: error.message })
        }
    }
}

export default workerRegisterSaga