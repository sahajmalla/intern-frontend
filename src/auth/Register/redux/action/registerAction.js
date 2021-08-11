import { TRY_REGISTER } from "../../../../root-redux/actions/type"
function registerAction(data) {
    return {
        type: TRY_REGISTER,
        data
    }

}
export default registerAction;