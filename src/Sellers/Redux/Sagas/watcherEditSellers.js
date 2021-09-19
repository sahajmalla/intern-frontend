import { takeLatest } from 'redux-saga/effects'
import { EDIT_SELLER } from '../../../root-redux/actions/type'
import { workerEditSellers } from './workerEditSellers'

export function* watcherEditSellers() {
    yield takeLatest(EDIT_SELLER, workerEditSellers)
}