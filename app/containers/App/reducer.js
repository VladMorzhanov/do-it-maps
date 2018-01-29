/*
 *
 * Auth reducer
 *
 */

import {fromJS} from 'immutable'
import {HIDE_LOADER_ACTION, SHOW_LOADER_ACTION} from './constants'
import {LOGIN_SUCCESS_ACTION} from '../Auth/constants'

let data = fromJS(fetchLocal())

if (!data) {
  data = {
    loaded: true,
    token: 'NaN'
  }
}

const initialState = fromJS(data)

function appReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS_ACTION:
      const res = action.response.data
      const newState = state.set('token', res.token)
      serializeLocal(newState)
      return newState
    case SHOW_LOADER_ACTION:
      return state.set('loaded', false)
    case HIDE_LOADER_ACTION:
      return state.set('loaded', true)
    default:
      return state
  }
}

function fetchLocal () {
  const data = window.localStorage.getItem('data')
  if (!data) {
    return undefined
  }
  return JSON.parse(data)
}

function serializeLocal (data) {
  window.localStorage.setItem('data', JSON.stringify(data))
}

export default appReducer
