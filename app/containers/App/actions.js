/*
 *
 * Auth actions
 *
 */

import {
  ADD_MESSAGE,
  HIDE_LOADER_ACTION, LOG_OUT, REMOVE_MESSAGE,
  SHOW_LOADER_ACTION
} from './constants'
import {
  LOGIN_FAILURE_ACTION, LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION
} from '../Auth/constants'

export function logOut () {
  return {
    type: LOG_OUT
  }
}
export function showLoader () {
  return {
    type: SHOW_LOADER_ACTION
  }
}

export function removeMessage (id) {
  return {
    type: REMOVE_MESSAGE,
    id: id
  }
}

export function addMessage (message) {
  return {
    type: ADD_MESSAGE,
    message: message
  }
}

export function hideLoader () {
  return {
    type: HIDE_LOADER_ACTION
  }
}
