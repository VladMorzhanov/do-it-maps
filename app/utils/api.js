import axios from 'axios'

// export const API_URL = 'http://127.0.0.1/api/'
export const API_URL = 'http://do-it-maps.herokuapp.com/api/'

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

export function facebookLogin (email, facebookId, photo) {
  return axios({
    headers: {
      'x-email': email,
      'x-facebook-id': facebookId,
      'x-photo': photo
    },
    method: 'POST',
    url: API_URL + 'facebook-auth'
  })
}

export function googleLogin (email, googleId, photo) {
  return axios({
    headers: {
      'x-email': email,
      'x-google-id': googleId,
      'x-photo': photo
    },
    method: 'POST',
    url: API_URL + 'google-auth'
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
