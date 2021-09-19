import { takeLatest } from 'redux-saga/effects'
import { SEARCH_PRODUCT } from '../../../../../root-redux/actions/type'
import workerSearchSaga from './workerSearchSaga'

function* watcherSearchSaga() {
    yield takeLatest(SEARCH_PRODUCT, workerSearchSaga)
}

export default watcherSearchSaga