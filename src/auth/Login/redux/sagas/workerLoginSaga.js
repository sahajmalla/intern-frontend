import { call, put } from "@redux-saga/core/effects"
import sendLoginCredentials from "../../api/loginAPI"
import { LOGIN_SUCCESS, LOGIN_FAILED } from "../../../../root-redux/actions/type"

function* handlePostLogin(action) {
    try {
        const response = yield call(sendLoginCredentials, action.data)
        yield localStorage.setItem('token', response.data.token)
        yield put({ type: LOGIN_SUCCESS, response })
    } catch (error) {
        yield put({ type: LOGIN_FAILED, error })
    }
}
export default handlePostLogin;