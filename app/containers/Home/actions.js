/*
 *
 * Home actions
 *
 */

import {
  ADD_MARKER, CHANGE_CENTER, CHANGE_ZOOM, CLEAR_MARKERS, DELETE_MARKERS,
  FETCH_MARKERS_FAILURE_ACTION, FETCH_MARKERS_REQUEST_ACTION,
  FETCH_MARKERS_SUCCESS_ACTION, FETCH_USER_FAILURE_ACTION,
  FETCH_USER_REQUEST_ACTION, FETCH_USER_SUCCESS_ACTION,
  SAVE_MARKERS_FAILURE_ACTION, SAVE_MARKERS_REQUEST_ACTION,
  SAVE_MARKERS_SUCCESS_ACTION
} from './constants'

export function fetchUserDataRequest () {
  return {
    type: FETCH_USER_REQUEST_ACTION
  }
}

export function fetchUserDataSuccess (data) {
  return {
    type: FETCH_USER_SUCCESS_ACTION,
    res: data
  }
}

export function fetchUserDataFailure (err) {
  return {
    type: FETCH_USER_FAILURE_ACTION,
    err: err
  }
}

export function saveMarkersDataRequest () {
  return {
    type: SAVE_MARKERS_REQUEST_ACTION
  }
}

export function saveMarkersDataSuccess (data) {
  return {
    type: SAVE_MARKERS_SUCCESS_ACTION,
    res: data
  }
}

export function saveMarkersDataFailure (err) {
  return {
    type: SAVE_MARKERS_FAILURE_ACTION,
    err: err
  }
}

export function fetchMarkersDataRequest () {
  return {
    type: FETCH_MARKERS_REQUEST_ACTION
  }
}

export function fetchMarkersDataSuccess (data) {
  return {
    type: FETCH_MARKERS_SUCCESS_ACTION,
    res: data
  }
}

export function fetchMarkersDataFailure (err) {
  return {
    type: FETCH_MARKERS_FAILURE_ACTION,
    err: err
  }
}

export function clearMarkers () {
  return {
    type: CLEAR_MARKERS
  }
}

export function addMarker (latlng) {
  return {
    type: ADD_MARKER,
    latlng: latlng
  }
}

export function deleteMarkers () {
  return {
    type: DELETE_MARKERS
  }
}

export function changeZoom (zoom) {
  return {
    type: CHANGE_ZOOM,
    zoom: zoom
  }
}

export function changeCenter (center) {
  return {
    type: CHANGE_CENTER,
    center: center
  }
}
