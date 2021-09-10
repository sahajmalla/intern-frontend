import { GET_CODE_FOR_ACESS_TOKEN, GET_SPECIFIC_USER_POST, GET_USER_POSTS_ID_CAPTION } from "../../../../root-redux/actions/type"


export function GetCodeForInstaAccesToken(code){
    return{
        type: GET_CODE_FOR_ACESS_TOKEN,
        code
    }
}

export function GetUserPostIdCaptionsAction(accessToken){
    return{
        type: GET_USER_POSTS_ID_CAPTION,
        accessToken
    }
}








