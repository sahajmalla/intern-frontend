import { GET_ACCESS_TOKEN_SUCCESS, GET_CODE_FOR_ACESS_TOKEN_SUCCESS, GET_SPECIFIC_USER_POST_SUCCESS, GET_USER_POSTS_ID_CAPTION_SUCCESS, } from "../../../../root-redux/actions/type"

const initialState = {
    code: null,
    access_token: null,
    userPostsID: null,
    error: null,
    posts: null
}

const instagramState = (state = initialState, action) => {
    switch (action.type) {
        case GET_CODE_FOR_ACESS_TOKEN_SUCCESS: return {
            ...state,
            code: action.code
        }
        case GET_ACCESS_TOKEN_SUCCESS: return {
            ...state,
            access_token: action.access.data.access_token
        }
        case GET_USER_POSTS_ID_CAPTION_SUCCESS: return {
            ...state,
            userPostsID: action.usersPosts.data.data
        }
        case GET_SPECIFIC_USER_POST_SUCCESS: return {
            ...state,
            postsResponse: action.response

        }
        default: return state;
    }
}

export default instagramState
