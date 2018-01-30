/*
 *
 * Auth reducer
 *
 */

import {fromJS, List} from 'immutable'
import {
  ADD_MESSAGE, HIDE_LOADER_ACTION, LOG_OUT, REMOVE_MESSAGE,
  SHOW_LOADER_ACTION
} from './constants'
import {
  FB_LOGIN_SUCCESS_ACTION, G_LOGIN_SUCCESS_ACTION,
  LOGIN_SUCCESS_ACTION
} from '../Auth/constants'

let data = fromJS(fetchLocal())
const emptyState = {
  loaded: true,
  messages: new List([]),
  token: 'NaN'
}

if (!data) {
  data = emptyState
}

const initialState = fromJS(data)

function appReducer (state = initialState, action) {
  switch (action.type) {
    case FB_LOGIN_SUCCESS_ACTION:
    case G_LOGIN_SUCCESS_ACTION:
    case LOGIN_SUCCESS_ACTION:
      const res = action.response.data
      const newState = state.set('token', res.token)
      serializeLocal(newState)
      return newState
    case SHOW_LOADER_ACTION:
      return state.set('loaded', false)
    case HIDE_LOADER_ACTION:
      return state.set('loaded', true)
    case LOG_OUT:
      return fromJS(emptyState)
    case ADD_MESSAGE:
      return state.set('messages', state.get('messages').push(action.message))
    case REMOVE_MESSAGE:
      if (state.get('messages').size > 0) {
        return state.set('messages', state.get('messages')
          .filter(obj => obj.id !== action.id))
      }
      return state
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
