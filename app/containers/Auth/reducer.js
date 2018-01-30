/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable'
import {
  DEFAULT_ACTION, LOGIN_SUCCESS_ACTION
} from './constants'

const initialState = fromJS({})

function authReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default authReducer
