import { call, put } from "redux-saga/effects"
import { GET_SPECIFIC_USER_POST, GET_USER_POSTS_ID_CAPTION_SUCCESS } from "../../../../root-redux/actions/type"
import { GetUserPostsIDCaptionAPI } from "../../api/GetUserPostsIDCaptionAPI"

function* GetUserPostIDCaptionsWorker(action) {
    try {
        const access_token = action.access_token
        const usersPosts = yield call(GetUserPostsIDCaptionAPI, access_token)
        yield put({ type: GET_USER_POSTS_ID_CAPTION_SUCCESS, usersPosts })
        const usersPostsData = usersPosts.data.data;

        yield put({ type: GET_SPECIFIC_USER_POST, usersPostsData, access_token })

    } catch (error) {

    }
}

export default GetUserPostIDCaptionsWorker
