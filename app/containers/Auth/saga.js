/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest} from 'redux-saga/effects'
import {facebookLogin, googleLogin, login} from '../../utils/api'
import {routerActions} from 'react-router-redux'
import {
  FB_LOGIN_REQUEST_ACTION, G_LOGIN_REQUEST_ACTION,
  LOGIN_REQUEST_ACTION
} from './constants'
import {
  facebookLoginFailure, facebookLoginSuccess, googleLoginFailure,
  googleLoginSuccess, loginFailure, loginSuccess
} from './actions'
import {MessageManager} from '../../utils/MessageManager'

export function * signIn (action) {
  try {
    const res = yield call(login, action.email, action.pwd)
    yield put(loginSuccess(res))
    MessageManager.addMessage('Successfully logged in.')
    yield put(routerActions.push('/'))
  } catch (err) {
    MessageManager.addMessage('Wrong email or password. If you did not create password please enter with Google or Facebook.')
    yield put(loginFailure(err))
  }
}

export function * googleSignIn (action) {
  try {
    const res = yield call(googleLogin, action.email, action.googleId, action.photoUrl)
    yield put(googleLoginSuccess(res))
    MessageManager.addMessage('Successfully logged in with Google.')
    yield put(routerActions.push('/'))
  } catch (err) {
    yield put(googleLoginFailure(err))
  }
}

export function * facebookSignIn (action) {
  try {
    const res = yield call(facebookLogin, action.email, action.facebookId, action.photoUrl)
    yield put(facebookLoginSuccess(res))
    MessageManager.addMessage('Successfully logged in with Facebook.')
    yield put(routerActions.push('/'))
  } catch (err) {
    console.log(err)
    yield put(facebookLoginFailure(err))
  }
}

export default function * loginData () {
  yield takeLatest(LOGIN_REQUEST_ACTION, signIn)
  yield takeLatest(FB_LOGIN_REQUEST_ACTION, facebookSignIn)
  yield takeLatest(G_LOGIN_REQUEST_ACTION, googleSignIn)
}
