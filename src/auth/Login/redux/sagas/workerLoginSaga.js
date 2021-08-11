import { call, put } from "@redux-saga/core/effects"
import sendLoginCredentials from "../../api/loginAPI"
import { LOGIN_SUCCESS, LOGIN_FAILED } from "../../../../root-redux/actions/type"

function* handlePostLogin(action) {
    try {

        const response = yield call(sendLoginCredentials, action.data)

        yield localStorage.setItem('token', response.data.access_token)

        yield put({ type: LOGIN_SUCCESS, response })

    } catch (error) {
        // The request was made and the server responded with a status code
        if (error.response) {
            yield put({ type: LOGIN_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: LOGIN_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: LOGIN_FAILED, error: error.message })
        }
    }
}
export default handlePostLogin;