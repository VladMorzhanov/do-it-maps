/*
 *
 * Home reducer
 *
 */

import {fromJS, List, Map} from 'immutable'
import DefaultPhotoUrl from '../../images/def_photo.png'
import {
  ADD_MARKER, CHANGE_CENTER, CHANGE_MAP_DATA_TYPE, CHANGE_POPULAR_TYPE,
  CHANGE_ZOOM, CLEAR_MARKERS, DELETE_MARKERS, FETCH_MARKERS_SUCCESS_ACTION,
  FETCH_USER_SUCCESS_ACTION, MAP_DATA_TYPE_MARKERS, POPULAR_TYPE_NONE,
  SAVE_MARKERS_SUCCESS_ACTION
} from './constants'
import {LOG_OUT} from '../App/constants'

const initialState = fromJS({
  user: {
    email: '',
    photoUrl: DefaultPhotoUrl
  },
  markers: [],
  zoom: 12,
  popularType: POPULAR_TYPE_NONE,
  mapDataType: MAP_DATA_TYPE_MARKERS,
  center: [46.443, 30.773]
})

function homeReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS_ACTION:
      if (action.res.photoUrl === 'NaN') {
        action.res.photoUrl = state.get('user').get('photoUrl')
      }
      return state.set('user', new Map(action.res))
    case FETCH_MARKERS_SUCCESS_ACTION:
      return state.set('markers', new List(action.res))
    case SAVE_MARKERS_SUCCESS_ACTION:
      return state
    case ADD_MARKER:
      let markers = state.get('markers')
      markers = markers.push({
        lat: action.latlng.lat,
        lng: action.latlng.lng
      })
      return state.set('markers', markers)
    case DELETE_MARKERS:
      return state.set('markers', new List([]))
    case CHANGE_ZOOM:
      return state.set('zoom', action.zoom)
    case CHANGE_CENTER:
      return state.set('center', [
        action.center.lat, action.center.lng
      ])
    case CLEAR_MARKERS:
      return state.set('markers', new List([]))
        .set('mapDataType', MAP_DATA_TYPE_MARKERS)
        .set('popularType', POPULAR_TYPE_NONE)
    case LOG_OUT:
      return fromJS(initialState)
    case CHANGE_MAP_DATA_TYPE:
      return state.set('mapDataType', action.mapDataType)
    case CHANGE_POPULAR_TYPE:
      return state.set('popularType', action.popularType)
    default:
      return state
  }
}

export default homeReducer
