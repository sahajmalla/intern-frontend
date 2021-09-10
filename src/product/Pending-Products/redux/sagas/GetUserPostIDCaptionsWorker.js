import { call, put } from "redux-saga/effects"
import { GET_SPECIFIC_USER_POST, GET_USER_POSTS_ID_CAPTION_SUCCESS } from "../../../../root-redux/actions/type"
import { GetUserPostsIDCaptionAPI } from "../../api/GetUserPostsIDCaptionAPI"
import GetVerifiedProductsAPI from "../../api/GetVerifiedProductsAPI"

function* GetUserPostIDCaptionsWorker(action) {
    try {
        const accessToken = action.accessToken
        const usersPosts = yield call(GetUserPostsIDCaptionAPI, accessToken)
        const verifiedPosts = yield call(GetVerifiedProductsAPI)

        const verifiedPostsData = verifiedPosts.data
        const userPostsData = usersPosts.data.data

        console.log(userPostsData);
        console.log(verifiedPostsData);


        for (let i = 0; i < verifiedPostsData.length; i++) {
            for (let j = 0; j < userPostsData.length; j++) {
                if (verifiedPostsData[i].product?.insta_id === userPostsData[j].id) {
                    userPostsData.splice(j, 1)
                }
            }
        }

        yield put({ type: GET_USER_POSTS_ID_CAPTION_SUCCESS, usersPosts })

        yield put({ type: GET_SPECIFIC_USER_POST, userPostsData, accessToken })

    } catch (error) {

    }
}

export default GetUserPostIDCaptionsWorker
