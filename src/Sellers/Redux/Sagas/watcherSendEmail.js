import { takeLatest } from "@redux-saga/core/effects";
import { SEND_EMAIL_TO_SELLER_FOR_CODE } from "../../../root-redux/actions/type";
import { workerSendEmail } from "./workerSendEmail";

export default function* watcherSendEmail (){
    yield takeLatest(SEND_EMAIL_TO_SELLER_FOR_CODE, workerSendEmail)
}