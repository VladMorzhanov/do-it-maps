/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest} from 'redux-saga/effects'
import {login} from '../../utils/api'
import {routerActions} from 'react-router-redux'
import {LOGIN_REQUEST_ACTION} from './constants'
import {loginFailure, loginSuccess} from './actions'
import {addMessage} from '../App/actions'

export function * signIn (action) {
  try {
    const res = yield call(login, action.email, action.pwd)
    yield put(loginSuccess(res))
    yield put(routerActions.push('/'))
    yield put(addMessage('Logged In.'))
  } catch (err) {
    yield put(addMessage(err))
    yield put(loginFailure(err))
  }
}

export default function * loginData () {
  yield takeLatest(LOGIN_REQUEST_ACTION, signIn)
}
