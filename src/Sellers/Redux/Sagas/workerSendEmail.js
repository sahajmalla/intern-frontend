import emailjs from "emailjs-com"
import { put } from "redux-saga/effects"
import { SEND_EMAIL_TO_SELLER_FOR_CODE_FAILED, SEND_EMAIL_TO_SELLER_FOR_CODE_SUCCESS } from "../../../root-redux/actions/type";

export function* workerSendEmail(action) {
    try {

        const response = yield emailjs.send("service_5qmcp2a", "template_nqxdqyr", {
            to_name: action.to_name,
            to_email: action.to_email,
        }, "user_VkXBIJtHa6ofwOroZ931p");

        yield put({ type: SEND_EMAIL_TO_SELLER_FOR_CODE_SUCCESS, response })

    } catch (error) {
        // The request was made and the server responded with a status code
        if (error.response) {
            yield put({ type: SEND_EMAIL_TO_SELLER_FOR_CODE_FAILED, error: error.response })

        } // The request was made but no response was received 
        else if (error.request) {
            yield put({ type: SEND_EMAIL_TO_SELLER_FOR_CODE_FAILED, error: error.request })

        } // Something happened in setting up the request that triggered an Errors 
        else {
            yield put({ type: SEND_EMAIL_TO_SELLER_FOR_CODE_FAILED, error: error.message })
        }
    }


}