import { GET_CODE_FOR_ACESS_TOKEN, GET_SPECIFIC_USER_POST } from "../../../../root-redux/actions/type"


export function GetCodeForInstaAccesToken(code){
    return{
        type: GET_CODE_FOR_ACESS_TOKEN,
        code
    }
}








