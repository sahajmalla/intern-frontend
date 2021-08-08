import { TRY_LOGIN } from "../../../../root-redux/actions/type"
function tryLogin(data){
    return {
        type: TRY_LOGIN,
        data
    }

}
export default tryLogin;