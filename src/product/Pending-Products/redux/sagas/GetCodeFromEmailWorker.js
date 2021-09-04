import { put } from "redux-saga/effects";
import { GET_ACCESS_TOKEN, GET_CODE_FOR_ACESS_TOKEN_FAILED, GET_CODE_FOR_ACESS_TOKEN_SUCCESS } from "../../../../root-redux/actions/type";


function* GetCodeFromEmailWorker(action) {
    try {
        const code = action.code;
        yield put({ type: GET_CODE_FOR_ACESS_TOKEN_SUCCESS, code })
        yield put({ type: GET_ACCESS_TOKEN, code })

    } catch (error) {

        if (error.response) {
            yield put({ type: GET_CODE_FOR_ACESS_TOKEN_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: GET_CODE_FOR_ACESS_TOKEN_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: GET_CODE_FOR_ACESS_TOKEN_FAILED, error: error.message })
        }
    }
}

export default GetCodeFromEmailWorker
