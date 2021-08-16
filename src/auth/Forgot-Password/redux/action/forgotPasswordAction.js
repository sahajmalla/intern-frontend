import {CHECK_FORGOT_PW_EMAIL} from "../../../../root-redux/actions/type"

function forgotPasswordAction(data){
    return {
        type: CHECK_FORGOT_PW_EMAIL,
        data
    }

}
export default forgotPasswordAction;