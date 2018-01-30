import axios from 'axios'

export const API_URL = 'http://127.0.0.1/api/'

export function login (email, pwd) {
  return axios({
    headers: {
      'x-email': email,
      'x-pwd': pwd
    },
    method: 'POST',
    url: API_URL + 'login'
  })
}

export function getUser (token) {
  return axios({
    headers: {
      'x-token': token
    },
    method: 'GET',
    url: API_URL + 'user'
  })
}

export function getMarkers (token) {
  return axios({
    headers: {
      'x-token': token
    },
    method: 'GET',
    url: API_URL + 'marker'
  })
}

export function putMarkers (token, markers) {
  return axios({
    headers: {
      'x-token': token
    },
    data: markers,
    method: 'PUT',
    url: API_URL + '/marker'
  })
}

export function deleteMarkers (token) {
  return axios({
    headers: {
      'x-token': token
    },
    method: 'DELETE',
    url: API_URL + '/marker'
  })
}
