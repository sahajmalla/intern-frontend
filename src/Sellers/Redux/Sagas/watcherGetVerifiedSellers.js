import { takeLatest } from 'redux-saga/effects'
import { GET_VERIFIED_SELLER } from '../../../root-redux/actions/type'
import workerGetVerifiedSellers from './workerGetVerifiedSellers'

export function* watcherGetVerifiedSellers() {
    yield takeLatest(GET_VERIFIED_SELLER, workerGetVerifiedSellers)
}