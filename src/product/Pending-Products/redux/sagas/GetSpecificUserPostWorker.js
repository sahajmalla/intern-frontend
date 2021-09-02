import { all, call, put } from "redux-saga/effects";
import axios from "axios";
import { GET_SPECIFIC_USER_POST_SUCCESS } from "../../../../root-redux/actions/type";
import GetSpecificUserPostAPI from "../../api/GetSpecificUserPostAPI";

function* GetSpecificUserPostWorker(action) {
    try {
        const response = yield all(action.usersPostsData.map(post => call(GetSpecificUserPostAPI, post.id, action.access_token)));
        yield put({ type: GET_SPECIFIC_USER_POST_SUCCESS, response })
    } catch (error) {

    }

}


export default GetSpecificUserPostWorker
