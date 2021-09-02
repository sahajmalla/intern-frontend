import { call, put } from "redux-saga/effects";
import {GET_ACCESS_TOKEN_SUCCESS, GET_USER_POSTS_ID_CAPTION } from "../../../../root-redux/actions/type";
import PostCodeForAccessToken from "../../api/PostCodeForAccessToken";

export default function* workerAccessToken(action) {

    try {
        const access = yield call(PostCodeForAccessToken, action.code);
        yield put({ type: GET_ACCESS_TOKEN_SUCCESS, access })
        const access_token = access.data.access_token

        yield put({ type: GET_USER_POSTS_ID_CAPTION, access_token })

    } catch (error) {
        console.log(error.response)
    }
}