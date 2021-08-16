import { TRY_RESET_PASSWORD } from "../../../../root-redux/actions/type";

export default function resetPasswordAction(data){
    return {
        type: TRY_RESET_PASSWORD,
        data
    }
}