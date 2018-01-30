import {takeLatest} from 'redux-saga/effects'
import {ADD_MESSAGE} from './constants'

export function * addMessageMiddleware (action) {
}

/**
 * Root saga manages watcher lifecycle
 */
export default function * globalSaga () {
  yield takeLatest(ADD_MESSAGE, addMessageMiddleware)
}
