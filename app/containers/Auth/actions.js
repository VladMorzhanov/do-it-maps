/*
 *
 * Auth actions
 *
 */

import {
  FB_LOGIN_FAILURE_ACTION, FB_LOGIN_REQUEST_ACTION,
  FB_LOGIN_SUCCESS_ACTION, G_LOGIN_FAILURE_ACTION, G_LOGIN_REQUEST_ACTION,
  G_LOGIN_SUCCESS_ACTION, LOGIN_FAILURE_ACTION, LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION
} from './constants'

export function loginRequest (email, pwd) {
  return {
    email: email,
    pwd: pwd,
    type: LOGIN_REQUEST_ACTION
  }
}

export function loginSuccess (response) {
  return {
    type: LOGIN_SUCCESS_ACTION,
    response
  }
}

export function loginFailure (error) {
  return {
    type: LOGIN_FAILURE_ACTION,
    error
  }
}

export function facebookLoginRequest ( email, facebookId, photo) {
  return {
    email: email,
    facebookId: facebookId,
    photoUrl: photo,
    type: FB_LOGIN_REQUEST_ACTION
  }
}

export function facebookLoginSuccess (response) {
  return {
    type: FB_LOGIN_SUCCESS_ACTION,
    response
  }
}

export function facebookLoginFailure (error) {
  return {
    type: FB_LOGIN_FAILURE_ACTION,
    error
  }
}

export function googleLoginRequest (email, googleId, photo) {
  return {
    email: email,
    googleId: googleId,
    photoUrl: photo,
    type: G_LOGIN_REQUEST_ACTION
  }
}

export function googleLoginSuccess (response) {
  return {
    type: G_LOGIN_SUCCESS_ACTION,
    response
  }
}

export function googleLoginFailure (error) {
  return {
    type: G_LOGIN_FAILURE_ACTION,
    error
  }
}
