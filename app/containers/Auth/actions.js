/*
 *
 * Auth actions
 *
 */

import {
  DEFAULT_ACTION, LOGIN_FAILURE_ACTION, LOGIN_REQUEST_ACTION,
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
