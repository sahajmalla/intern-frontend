import { call, put } from "redux-saga/effects";
import {GET_ACCESS_TOKEN_SUCCESS, GET_LONG_LIVED_ACCESS_TOKEN, GET_USER_POSTS_ID_CAPTION } from "../../../../root-redux/actions/type";
import setItemWithExpiry from "../../../../utils/setLocalStarageItemsWithExpiry";
import PostCodeForAccessToken from "../../api/PostCodeForAccessToken";

export default function* workerAccessToken(action) {

    try {
        const access = yield call(PostCodeForAccessToken, action.code);
        yield put({ type: GET_ACCESS_TOKEN_SUCCESS, access })
        const access_token = access.data.access_token
        // yield setItemWithExpiry('Insta Access token', access_token, 86400000)
        yield put({type: GET_LONG_LIVED_ACCESS_TOKEN, access_token})
    } catch (error) {
        console.log(error.response)
    }
}