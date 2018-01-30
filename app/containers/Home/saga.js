import {call, put, select, takeLatest} from 'redux-saga/effects'
import {
  DELETE_MARKERS, FETCH_MARKERS_REQUEST_ACTION, FETCH_USER_REQUEST_ACTION,
  SAVE_MARKERS_REQUEST_ACTION
} from './constants'
import {
  fetchMarkersDataFailure, fetchMarkersDataSuccess, fetchUserDataFailure,
  fetchUserDataSuccess, saveMarkersDataFailure, saveMarkersDataSuccess
} from './actions'
import {deleteMarkers, getMarkers, getUser, putMarkers} from '../../utils/api'
import {makeSelectToken} from '../App/selectors'
import {makeSelectMarkers} from './selectors'

export function * fetchUser () {
  try {
    const token = yield select(makeSelectToken())
    const res = yield call(getUser, token)
    yield put(fetchUserDataSuccess(res.data))
  } catch (err) {
    yield put(fetchUserDataFailure(err))
  }
}

export function * fetchMarkers () {
  try {
    const token = yield select(makeSelectToken())
    const res = yield call(getMarkers, token)
    yield put(fetchMarkersDataSuccess(res.data))
  } catch (err) {
    yield put(fetchMarkersDataFailure(err))
  }
}

export function * saveMarkers () {
  try {
    const token = yield select(makeSelectToken())
    const marks = yield select(makeSelectMarkers())
    const res = yield call(putMarkers, token, marks)
    yield put(saveMarkersDataSuccess(res.data))
  } catch (err) {
    yield put(saveMarkersDataFailure(err))
  }
}

export function * removeMarkers () {
  try {
    const token = yield select(makeSelectToken())
    const res = yield call(deleteMarkers, token)
  } catch (err) {
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function * userData () {
  yield takeLatest(FETCH_USER_REQUEST_ACTION, fetchUser)
  yield takeLatest(FETCH_MARKERS_REQUEST_ACTION, fetchMarkers)
  yield takeLatest(SAVE_MARKERS_REQUEST_ACTION, saveMarkers)
  yield takeLatest(DELETE_MARKERS, removeMarkers)
}
