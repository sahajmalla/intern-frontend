import { SEND_EMAIL_TO_SELLER_FOR_CODE } from "../../../root-redux/actions/type"

export const sendEmailAction = (to_name, to_email) => {
    return{
        type: SEND_EMAIL_TO_SELLER_FOR_CODE,
        to_email,
        to_name,
    }
}
