import { call, put } from "redux-saga/effects"
import { FORGOT_PW_EMAIL_EXISTS, NO_FORGOT_PW_EMAIL } from "../../../../root-redux/actions/type"
import forgotPasswordAPI from "../../api/forgotPasswordAPI"

function* workerForgotPWSaga(action) {
    try {
        const response = yield call(forgotPasswordAPI, action.data)
        yield put({ type: FORGOT_PW_EMAIL_EXISTS, response })

    } catch (error) {
        if (error.response) {
            yield put({ type: NO_FORGOT_PW_EMAIL, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: NO_FORGOT_PW_EMAIL, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: NO_FORGOT_PW_EMAIL, error: error.message })
        }
    }
}

export default workerForgotPWSaga